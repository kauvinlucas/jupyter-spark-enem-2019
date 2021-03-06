function CopyToClipboard(containerid) {
  if (window.getSelection) {
    if (window.getSelection().empty) { // Chrome
      window.getSelection().empty();
    } else if (window.getSelection().removeAllRanges) { // Firefox
      window.getSelection().removeAllRanges();
    }
  } else if (document.selection) { // IE?
    document.selection.empty();
  }

  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("copy");
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
    document.execCommand("copy");
  }
}

function fadeinout(element) {
  var e = document.getElementById(element)
  e.style.display = 'block';
  setTimeout(function(){
    e.style.display = 'none';
  }, 3000);
}
function show_more(text, file) {
  const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
		  document.getElementById(text).innerHTML =
		  this.responseText;
		  hljs.highlightAll();
		}
	xhttp.open("GET", file);
	xhttp.send();
  }
