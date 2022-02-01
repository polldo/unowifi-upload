var Avrgirl = require('avrgirl-arduino');


var board = {
  name: 'uno',
  baud: 57600,
  signature: new Buffer([0x1E, 0x96, 0x51]),
  pageSize: 128,
  numPages: 256,
  timeout: 400,
  productId: ['0x2145'],
  productPage: 'https://store.arduino.cc/arduino-uno-wifi-rev2',
  protocol: 'stk500v1'
};

var avrgirl = new Avrgirl({
  board: board
});

avrgirl.flash('Blink.ino.hex', function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info('done.');
  }
});
