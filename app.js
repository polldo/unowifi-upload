var Avrgirl = require('avrgirl-arduino');

var test = [
  {
    board: 'unowifirev2',
    sketch: 'Unowifirev2-Blink.ino.hex'
  },
  {
    board: 'uno',
    sketch: 'Uno-Blink.ino.hex'
  },
  {
    board: 'mega',
    sketch: 'Mega-Blink.ino.hex'
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
