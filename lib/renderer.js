const $ = require('jquery')
const marked = require('marked')

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