var Avrgirl = require('avrgirl-arduino');


var unowifirev2 = {
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

var test = [
  {
    board: unowifirev2,
    sketch: 'Unowifirev2-Blink.ino.hex'
  },
  {
    board: 'uno',
    sketch: 'Uno-Blink.ino.hex'
  },
  {
    board: 'mega',
    sketch: 'Mega-Blink.ino.hex'
  },
  {
    board: 'leonardo',
    sketch: 'Leonardo-Blink.ino.hex'
  },
  {
    board: 'micro',
    sketch: 'Micro-Blink.ino.hex'
  }
]

var dut = test[0]

var avrgirl = new Avrgirl({
  board: dut.board
});

avrgirl.flash(dut.sketch, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info('done.');
  }
});
