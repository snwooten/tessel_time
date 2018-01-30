// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
- Play audio from an amusing scene between Luke Skywalker, R2-D2 and Yoda
- When the audio reaches the end, play it again from the beginning.
*********************************************/

var path = require('path');
var av = require('tessel-av');
var mp3 = path.join(__dirname, 'into_battle.mp3');
var sound = new av.Player(mp3);

// sound.play();

// sound.on('ended', function(seconds) {
//   sound.play();
// });
// let mic = new av.Microphone()

// Initialize the microphone input
// mic.monitor(mic.listen());
// mic.monitor();
// mic.on("data", buffer => console.log(`buffer: ${buffer.length}`));
// This will automattically pipe the microphone
// input to an available speaker output.
// mic.monitor();

// mic.listen.on("data", buffer => console.log(`buffer: ${buffer.length}`));
let speaker = new av.Speaker();
// speaker.say([`
//   Hello, this is tesseltime.
//   I'm going to say my A-B-C's now
// `,'a', 10, 'p', 50]);


module.export = speaker;
