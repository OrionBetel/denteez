$(document).ready(function() {
  truncateText('.service__name', 36);
});


function truncateText(elem, maxLength) {
  var el = $(elem)[0];
  if (el.clientHeight != el.scrollHeight) {
    $(elem).text( $(elem).text().substr(0, maxLength - 3) + '...' );
  }
}