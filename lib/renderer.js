const $ = require('jquery')
const marked = require('marked')
const { remote, ipcRenderer } = require('electron')
const { showOpenFileDialog } = remote.require('./main')

const $markdownView = $('.raw-markdown')
const $htmlView = $('.rendered-html')

const renderMarkdownToHtml = markdown => {
  const html = marked(markdown, { sanitize: true })
  $htmlView.html(html)
}

$markdownView.on('keyup', e => {
  const content = $(e.target).val()
  renderMarkdownToHtml(content)
})

$('#open-file').on('click', () => showOpenFileDialog())

ipcRenderer.on('file-opened', (event, file, content) => {
  $markdownView.text(content)
  renderMarkdownToHtml(content)
})
