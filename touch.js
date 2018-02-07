window.addEventListnener('touchstart', showTouchStatus, false);
window.addEventListnener('touchmove', showTouchStatus, false);
window.addEventListnener('touchend', showTouchStatus, false);

function showTouchStatus(e){
  var log = e.type + '<br>';
  if(e.touches.length){
    log += 'x' + e.touches[0].clientX + '<br>';
    log += 'y' + e.touches[0].clientY;
  }
  document.body.innerHTML = log;
  e.preventDefault();
}


