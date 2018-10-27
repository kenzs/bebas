var index = 0;
var maxIndex = 4;

function updateBtnState() {
  if (index == 0) {
    $('.prever').hide();
  } else {
    $('.prever').show();
  }
  if (index == maxIndex) {
    $('.nexter').hide();
  } else {
    $('.nexter').show();
  }
}
$('.nexter').on('click', function(e) {
  index++;
  if (index > maxIndex) {
    e.preverentDefault();
    return;
  }
  updateBtnState();
  var slidecontentWrap = $(this).parent().find('.slidecontentWrap'),
    slidecontentPercent = (-index * 100) + '%';
  slidecontentWrap.animate({
    marginLeft: slidecontentPercent
  }, 300);
});
$('.prever').on('click', function(e) {
  index--;
  if (index < 0) {
    e.preverentDefault();
    return;
  }
  updateBtnState();
  var slidecontentWrap = $(this).parent().find('.slidecontentWrap'),
    slidecontentPercent = (-index * 100) + '%';
  slidecontentWrap.animate({
    marginLeft: slidecontentPercent
  }, 300);
});
updateBtnState();