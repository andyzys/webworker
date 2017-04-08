function getTime() {
    var time = new Date();
    return time.getMinutes() + ':' + time.getSeconds() + ':' + time.getMilliseconds();
}
self.addEventListener('message', function(e) {
  var cmd = e.data.cmd;
  switch(cmd) {
    case 'change':
      changePos();
      break;
    case 'rotate':
      rotate();
      break;
    case 'adjust':
      adjust();
      break;
  }
});
function changePos() {
  console.log('changePos-', getTime());
}
function rotate() {
  console.log('rotate   -', getTime());
}
function adjust() {
  console.log('adjust   -', getTime());
}
