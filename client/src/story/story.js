// bg
const village = require("./bg/village.jpg");
// const entrance = require("./bg/entrance.jpeg");
// bgm
const clouds = require("./bgm/clouds.mp3");
// speakers
const b = "Boblin";
// sprites
// const bn = require("./sprites/block-neutral.png");
// const bh = require("./sprites/block-happy.png");
// const bp = require("./sprites/block-pout.png");

let story = [
  {
    bg: village,
    bgm: clouds,
    // sprite: bn,
    speaker: "",
    text: "You wake up, who are you? Where are you? Oh that's right, my name is Boblin. ",
  },
  {
    text: "You came to this village as child, a lost goblin. Runt of the litter probably. You were abandoned at the entrance of the village."

  },

  {
    text: "As you lay in the grass, you think to yourself about how long ago that was. All this time you've spent in the village. You gaze at the clouds and wonder."
  },

  {
    text: "You long for the outside world, where did you come from? What's outside of the valley?"

  },

  {
    text: "I want to go out and explore, just like the hero's in the stories I read as a child. Saving the damsel, getting the gold, fighting the thieves."
  },

  {
    speaker: b,
    text: "Should I leave the village and go on an adventure?"
  },

  { choicesExist: true, text: "Hmm what to do" },

  {
    // sprite: bp,
    text: "hello there"
  },

  {
    routeBegins: "yesAdventure",
    speaker: b,
    text: "I guess i'll leave. I'll pack up and leave at first light."
  },

  {
    routeBegins: "yesAdventure",
    speaker: "",
    text: " Outside of the village you see many pathways. There's one that goes to the forest to the south "
  },

  {
    speaker: b,
    text: "I've heard a lot about that forest, the elders would tell terrible stories about creatures going in and never coming out. Though it was said it was just to scare the wee goblins.",

  },

  {
speaker: "",
text: "The path to the north goes to the mountains, you've heard of stories about a great amount of treasure there. Also that the fayes have their home there."

  },

  {
    speaker: b,
    text: "I wonder if I would be welcome with the Fayes to the north, they seem like a kind creatures."

  },

  {
speaker: "",
text: "To the east of the village is the human village, no one has ever gone there much. It is known that the humans will hunt any creature that is not of its own kind."
  },

  {
    routeBegins: "leave",
    // sprite: bh,
    spriteEffect: "shake",
    text: "to be continued ...",
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
