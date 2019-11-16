// bg
const scroll = require("./bg/scroll2.png");
const entrance = require("./bg/entrance.jpeg");
// bgm
const take = require("./bgm/take.mp3");
// speakers
const b = "Boblin";
// sprites
const bn = require("./sprites/block-neutral.png");
const bh = require("./sprites/block-happy.png");
const bp = require("./sprites/block-pout.png");

let story = [
  {
    bg: scroll,
    bgm: take,
    sprite: bn,
    speaker: "",
    text: "You wake up, who are you? Where are you? Oh that's right, my name is Boblin. ",
  },
{
text: "You came to village as child, a lost goblin. Runt of the litter probably."

},

{
text: "You long for the outside world, where did you come from? What's outside of the valley?"

},

{
  speaker: b,
  text: "Should I leave the village and go on an adventure?"
},

{ choicesExist: true, text: "Hmm what to do" },

  {
    sprite: bp,
    text: "hello there"
  },

  {
    routeBegins: "yesAdventure",
    speaker: "",
    text: ""
  },
 
  {
    routeBegins: "leave",
    sprite: bh,
    spriteEffect: "shake",
    text: "End",
    jumpTo: "title-screen"
  }
];

// The code below is to set undefined properties to the last defined property.

setFutureProperties("bg");
setFutureProperties("bgm");
setFutureProperties("speaker");
setFutureProperties("sprite");
setFutureProperties("spriteLeft");
setFutureProperties("spriteRight");

function setFutureProperties(key) {
  let cache = "";
  for (let obj of story) {
    if (obj[key] || obj[key] === "") {
      cache = obj[key];
    } else {
      obj[key] = cache;
    }
  }
}
export default story;
