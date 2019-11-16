const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  goblinName: { type: String, required: true },
  village: { type: String, required: true }
 });

const Game = mongoose.model("Game", gameSchema);



module.exports = Game;