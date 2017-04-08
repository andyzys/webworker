function getTime() {
    var time = new Date();
    return time.getMinutes() + ':' + time.getSeconds() + ':' + time.getMilliseconds();
}
var timer = null;
const DeltaTime = 50;
function startTimer() {
  var index = 0;
  timer = setInterval(function() {
    index++;
    var str;
    if(index % 2 == 0 && index % 100 != 0) {
      str = getTime();
      var obj = {
        'cmd': '100ms',
        'desc': str
      };
      self.postMessage(obj);
    }
    if(index % 100 == 0) {
      str = getTime();
      var obj = {
        'cmd': '5000ms',
        'desc': str
      };
      self.postMessage(obj);
    }
  }, DeltaTime);
}
function endTimer() {
  clearInterval(timer);
  self.postMessage({
    'cmd': '定时器已经停止！'
  })
}
self.addEventListener('message', function(e) {
  var data = e.data;
  if(data.cmd == 'START') {
    startTimer();
  }
  if(data.cmd == 'END') {
    endTimer();
  }
});
