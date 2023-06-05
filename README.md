# smol menubar

This is a smol menubar app that helps you quickly access ChatGPT, Bard, and Anthropic with a single keyboard shortcut.

[![image](https://github.com/smol-ai/menubar/assets/6764957/753c6128-d978-4bb4-8642-588d42121ff5)](https://youtu.be/ThfFFgG-AzE)

whatever is typed at the bottom is entered into all 3 windows simultaneously, however if you wish to explore one further than the other you can do so independently since they are just webviews. [See video demo](https://youtu.be/ThfFFgG-AzE).

so for example you can use chatgpt plugins despite there not being an api for them. or you can use bard/anthropic without needing api access.

> **Note**
> I understand not everybody has access to Anthropic yet. I am working on providing an alternative - will have to require a login.
> 
> For now, you can hide individual webviews from the preferences modal. 

## seeking contributors!

this is a FOSS effort and will never be commercialized (no tracking, will not be a paid app (but the chat apps within might), etc). please check out the feature requests (https://github.com/smol-ai/menubar/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc) if you'd like to help! in particular, we'd like:

- **a PR to make the 3 panels customizable to different URLs and input targets!**
- a "Windows maintainer" to handle Windows user needs and beta test every release to make sure we didn't break something for them
- Design
   - i need a new set of icons for the images
   - better styling for the window? maybe normalize the bard window to the openai dimensions?

## video demo

- original version https://youtu.be/jrlxT1K4LEU
- Jun 1 version https://youtu.be/ThfFFgG-AzE
- https://twitter.com/swyx/status/1658403625717338112
- https://twitter.com/swyx/status/1663290955804360728?s=20

## Simple Download

You can download the precompiled binaries for MacOS: https://github.com/smol-ai/menubar/releases/latest

## Install and Run from Source

To install and run from source, follow these steps:

1. Clone the repository and navigate to the project folder:

   ```bash
   git clone https://github.com/smol-ai/menubar.git
   cd menubar
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the application and generate the platform-specific desktop file:

   ```bash
   npm run start
   ```

   This command will launch the application and automatically generate the appropriate desktop file or shortcut for your operating system (Linux, macOS, or Windows).

4. After the initial setup, you can simply use the generated desktop file to start the application in the future.

   **Note:** If you ever need to update the application, you can do so by simply pulling the latest changes from the repository.

then log into your google account (either will do, both rely on google login)
![image](https://github.com/smol-ai/menubar/assets/6764957/dce5b127-e8c2-4be2-97d3-e2fa3042ef24)

## usage

I usually just always press Cmd+Shift+G -> quick open to use it and Cmd+Enter to submit.

You can resize the overall window with a click n drag. Cmd+1/2/3/A/+/- or drag to resize the internal webviews as you wish.

You can also disable models from the preferences modal and your choice is persisted.

To start a new conversation, cmd+R (simple window refresh, nothing special)

You can modify these keyboard shortcuts if you build it from source.

Login for Anthropic via Google SSO is broken right now - it requires a popup which is blocked at least in my testing. Would welcome a PR to fix that, but otherwise regular email + login token works fine.


## build from source

If you really want to build from source, you will need to clone the repo and open the project folder:

1. Clone the repository and navigate to the project folder:

   ```bash
   git clone https://github.com/smol-ai/menubar.git
   cd menubar
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. On Windows, you'll also need Squirrel:

   ```bash
   npm install electron-squirrel-startup
   ```

4. Generate binaries:

   ```bash
   # If publishing, bump versions
   # npm version patch
   npm run make # or npm run build
   ```

   The outputs will be located in the `/out/make` directory. Run `smol-menubar.exe` to launch the application. Note that it may start minimized in your taskbar; you'll need to click the icon to use it:


![image](images/minimized.jpg)

## windows builds

by default we're mac only - i only have a mac sorry. (we are seeking a "Windows Maintainer"!)

i think you can run

```bash
electron-forge make --platform=win32 --arch=ia32,x64
```

and it might work? let us know and i'd happily take a PR to include it in the default `make` process.

## debugging

I have the menubar devtools up all the time while in development. You can disable them by commenting this line. 

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

