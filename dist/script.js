let defaultText = "# Conversion Preview\n## Side-by-Side Comparison\n[Made possible by Marked](https://marked.js.org/)\n\nStyle ` inline code`\n```\nOr\n code\n  blocks\n```\n1. List points in order\n* Or unordered\n\n> Share thoughts\n\n![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/64px-Markdown-mark.svg.png)\nOr images\n\n**Try it yourself!**";

$(document).ready(function () {
  $('#editor').text(defaultText);
  $('#preview').html(marked(defaultText));
  $('#editor').bind('input propertychange', () => {
    let inputText = $('#editor').val();
    $('#preview').html(marked(inputText));
  });
  $('#editor').on('change', () => {
    if ($('#editor').val() == '') {
      $('#editor').val(defaultText);
      $('#preview').html(marked(defaultText));
    }
  });
});