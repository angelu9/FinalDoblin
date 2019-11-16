const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
// const logger = require('morgan');

const users = require('./routes/api/users');

const app = express();
const port = process.env.PORT || 5000;

// app.use(logger("dev"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Make public a static folder 
// app.use(express.static("public"));
// app.use("/api", routes);


const db = require("./config/keys").mongoURI;
mongoose.connect("mongodb://user:Milan10@ds031657.mlab.com:31657/heroku_1ctsgw6q", { useNewUrlParser: true }).then(() => console.log("MongoDB connected")).catch((err) => console.log(err));
// mongoose.connect("mongodb://localhost/gamedb", { useNewUrlParser: true });


app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/api/users', users);


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${3000}`);
});