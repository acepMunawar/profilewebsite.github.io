
{
  var elem = document.getElementById("rocket");
  var pos = 0;
  var id = setInterval(frame, 8);
  function frame() {
    if (pos == 1010) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.left = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}
if ($.browser.webkit) {
  // yeah, sorry.. but this demo uses appearance:none which hasn't good support anywhere else.
  $('html').addClass('WebKit');
}

$('#show').change( function() {
  $('#animation').toggleClass('showRoll');
});
