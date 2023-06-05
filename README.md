# smol menubar

This is a smol menubar app that helps you quickly access ChatGPT, Bard, and Anthropic with a single keyboard shortcut.

[![image](https://github.com/smol-ai/menubar/assets/6764957/753c6128-d978-4bb4-8642-588d42121ff5)](https://youtu.be/ThfFFgG-AzE)

whatever is typed at the bottom is entered into all 3 windows simultaneously, however if you wish to explore one further than the other you can do so independently since they are just webviews. [See video demo](https://youtu.be/ThfFFgG-AzE).

so for example you can use chatgpt plugins despite there not being an api for them. or you can use bard/anthropic without needing api access.

> **Note**
> I understand not everybody has access to Anthropic yet. You can hide individual webviews from the preferences modal. I'd happily take a PR to make the panels customizable to different URLs and input targets!

## video demo

- original version https://youtu.be/jrlxT1K4LEU
- Jun 1 version https://youtu.be/ThfFFgG-AzE
- https://twitter.com/swyx/status/1658403625717338112
- https://twitter.com/swyx/status/1663290955804360728?s=20

## install

either download the precompiled binaries for MacOS: https://github.com/smol-ai/menubar/releases/latest

or build from source to get a build optimized for your system (see below)

then log into your google account (either will do, both rely on google login)
![image](https://github.com/smol-ai/menubar/assets/6764957/dce5b127-e8c2-4be2-97d3-e2fa3042ef24)

dont worry i dont track anything. inspect and build from source if you wish.

## usage

I usually just always press Cmd+Shift+G -> quick open to use it and Cmd+Enter to submit.

You can resize the overall window with a click n drag. Cmd+1/2/3/A/+/- or drag to resize the internal webviews as you wish.

You can also disable models from the preferences modal and your choice is persisted.

To start a new conversation, cmd+R (simple window refresh, nothing special)

You can modify these keyboard shortcuts if you build it from source.

Login for Anthropic via Google SSO is broken right now - it requires a popup which is blocked at least in my testing. Would welcome a PR to fix that, but otherwise regular email + login token works fine.


## build from source

To build from source, you will need to clone the repo and open the project folder:

```bash
git clone https://github.com/smol-ai/menubar.git
cd menubar
```

Then install dependencies:

```bash
npm install
```

On Windows, you'll also need Squirrel.

```bash
npm install electron-squirrel-startup
 ```

To generate binaries:

```bash
# if publishing, bump versions
# npm version patch
npm run make # or npm run build
```

Outputs go to `/out/make`. Run `smol-menubar.exe` to fire up the app. Note that it may start minimized to your taskbar, in which case you'll have to click the icon to use it:

![image](images/minimized.jpg)

## windows builds

by default we're mac only - i only have a mac sorry.

i think you can run

```bash
electron-forge make --platform=win32 --arch=ia32,x64
```

and it might work? let us know and i'd happily take a PR to include it in the default `make` process.

## debugging

have the devtools up all the time by uncommenting this line. it's enabled by default when running `npm start`

```js
window.webContents.openDevTools();
```

## why use/make this?

Google [dropped its waitlist for Bard recently](https://www.theverge.com/2023/5/10/23718066/google-bard-ai-features-waitlist-dark-mode-visual-search-io), so now there is some reason to try it out.

People have bad first impressions on Bard, but in May 2023 it has been receiving some positive feedback:

- https://twitter.com/masadfrost/status/1655802654927507457?s=46&t=90xQ8sGy63D2OtiaoGJuww

- https://twitter.com/amasad/status/1657510601202221056?s=46&t=90xQ8sGy63D2OtiaoGJuww

these folks aren't neutral, but its clear of course that Bard will be better for some things than others, and we might as well lower the barrier for trying them out.

then anthropic dropped 100k context, and at that point i was convinced i need to be A/B testing all 3 to get the benefits/get an intuition of what they each are best at.

## help needed

- i need a new set of icons for the images
- better styling for the window? maybe normalize the bard window to the openai dimensions?
