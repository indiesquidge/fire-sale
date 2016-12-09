# Fire Sale

A markdown editor that displays the rendered HTML result in real time.

![app-image](http://i.imgur.com/oeISk59.png)

### Run

```
git clone git@github.com:indiesquidge/fire-sale.git
cd fire-sale
npm install
npm start
```

### File Structure

```
.
├── LICENSE
├── README.md
├── lib
│   ├── index.html
│   ├── main.js
│   ├── renderer.js
│   └── style.css
└── package.json
```

### Interesting things learned while building

- Anything you can do in the browser, you can do with Electron. Anything you can do with Node, you can do with Electron. Together, we can build applications that take advantage of both platforms and build applications that wouldn't otherwise be possible on just one.

- Electron allows us to make requests from a third-party server directly from the browser without an intermediary server. Traditional web applications are not permitted to do this.

- Electron is not a framework. This means that it does not provide any scaffolding or have strong opinions about how you structure your application or name your files. Those choice are left up to us, the developers. On the bright side, it also doesn't enforce any conventions either and there is less conceptual boilerplate to discuss before getting our hands dirty.

- The `main` process is responsible for interacting with the operating system, managing state, and coordinating with all of the other processes in our application. It is not in charge of rendering HTML and CSS. This functionality is implemented by `renderer` processes

- Each `BrowserWindow` is a separate and unique `renderer` process that includes a DOM, access to Chromium's Web APIs, and Node's built-in module.

- Our applications will only run inside of the version of Chromium that we ship with the application. We don't have to worry about cross-browser support or legacy compatibility.

- Electron implements module system without any build tools (no webpack, gulp, etc.)

- Despite it's caveats in web development, using `font: menu;` works quite elegantly in Electron applications since we don't have to worry about browser compatibility.

- Since Electron is built with Chromium, we have access to Chrome's wonderful Developer Tools right within our application

- The Node Inspector can be used within Electron. Pair this with Visual Studio Code, and you can create breakpoints directly within the main process file, allowing you to inspect the call stack, what variables are in scope, and interact with a live console.

- Breakpoints aren't the only way to debug your code. You can also watch for particular expressions or drop into the debugger whenever an uncaught exception is thrown.

- The debugger is harder to use without VS Code (see: http://electron.atom.io/docs/tutorial/debugging-main-process/), but with the recently announced ability to debug Node processes from Chrome, this will likely change in the near future.

- The Chrome Developer Tools are available in all renderer processes and can be triggered from the default application in Electron, a keyboard shortcut, or from the main process.

---

This example was built from the tutorial in chapter 3 of Steve Kinney's
_[Electron in Action](https://www.manning.com/books/electron-in-action)_ book.
