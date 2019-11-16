var mongoose = require("mongoose");
const db = require("./models/game");
const data = require("./cards.json")




mongoose.connect("mongodb://localhost/userdb", { useNewUrlParser: true });


data.forEach(element => {
    db
    .create(element)
    .then(dbModel => console.log(dbModel))
    .catch(err => console.log(err));
    
});