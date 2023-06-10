const Store = require('electron-store');
const store = new Store();

const OpenAi = require('./providers/openai');
const Bard = require('./providers/bard');
const Claude = require('./providers/claude');
const Bing = require('./providers/bing');

const allProviders = [Bard, OpenAi, Claude, Bing];

for (const provider of allProviders) {
	document.getElementById(`${provider.webviewId}Enabled`).checked = store.get(
		`${provider.webviewId}Enabled`,
		true
	);

	document
		.getElementById(`${provider.webviewId}Enabled`)
		.addEventListener('change', event => {
			store.set(`${provider.webviewId}Enabled`, event.target.checked);
		});
}

document.getElementById('SuperPromptEnterKey').checked = store.get(
	'SuperPromptEnterKey',
	false
);

document
	.getElementById('SuperPromptEnterKey')
	.addEventListener('change', event => {
		store.set('SuperPromptEnterKey', event.target.checked);
	});

document.getElementById('save').addEventListener('click', () => {
	console.log('save clicked');

	// Save the user's preferences
	for (const provider of allProviders) {
		const isEnabled = document.getElementById(
			`${provider.webviewId}Enabled`
		).checked;
		store.set(`${provider.webviewId}Enabled`, isEnabled);
	}

	const SuperPromptEnterKey = document.getElementById(
		'SuperPromptEnterKey'
	).checked;
	store.set('SuperPromptEnterKey', SuperPromptEnterKey);

	// Close the preferences window
	window.close();
});
