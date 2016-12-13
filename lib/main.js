const { app, BrowserWindow, dialog } = require('electron')
const fs = require('fs')

let mainWindow = null

app.on('ready', () => {
  mainWindow = new BrowserWindow()

  mainWindow.loadURL(`file://${__dirname}/index.html`)

  mainWindow.on('close', () => mainWindow = null)
})

const showOpenFileDialog = () => {
  const files = dialog.showOpenDialog(mainWindow, {
    properties: ['openFile'],
    filters: [
      { name: 'Text Files', extensions: ['txt'] },
      { name: 'Markdown Files', extensions: ['md', 'markdown'] }
    ]
  })

  if (files) openFile(files[0])

}

const openFile = (file) => {
  const content = fs.readFileSync(file).toString()
  mainWindow.webContents.send('file-opened', file, content)
}

exports.showOpenFileDialog = showOpenFileDialog
