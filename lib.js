//script src="hammer.js"
//
var container = new Hammer(document.getElementById('container'), {prevent_default: true});
var log = document.getElementById('log');

container.ontap            = showGestureStatus;
container.ondoubletap      = showGestureStatus;
container.onhold           = showGestureStatus;
container.ondrag           = showGestureStatus;
container.ondragend        = showGestureStatus;
container.onswipe          = showGestureStatus;
container.ontransformstart = showGestureStatus;
container.ontransform      = showGestureStatus;
container.ontransformend   = showGestureStatus;
container.onrelease        = showGestureStatus;

function showGestureStatus(e){
  var touch = e.touches[0];
  var logText = e.type + ' => ';
  switch(e.type){
	  case 'transformstart':
	  case 'transform':
	  case 'transformend':
		  logText += 'scale: ' + e.scale;
		  logText += ', rotation: ' + e.ratation;
		  break;
	  case 'drag':
	  case 'swipe':
		  logText += 'direction: ' + e.direction;
		  logText += ', distance: ' + e.distance;
		  break;
	  default:
		  logText += 'x" ' + e.touches[0].x;
		  logText += ', y: ' + e.touches[0].y;
		  break;
  }
  log.innerHTML = logText + '<br>' + log.innerHTML;
}

