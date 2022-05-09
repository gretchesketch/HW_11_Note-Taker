const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

app.get("/", (req, res) => {res.send("hello world!")});
app.get("/notes", (req, res) => {res.sendFile(path.join(__dirname, "./public/notes.html"))})
app.get("*", (req, res) => {res.sendFile(path.join(__dirname, "./public/index.html"))})
app.get("/api/notes", (req, res) => {return this.read().then((notes) => {
    let parsedNotes;

    // If notes isn't an array or can't be turned into one, send back a new empty array
    try {
      parsedNotes = [].concat(JSON.parse(notes));
    } catch (err) {
      parsedNotes = [];
    }

    return parsedNotes;
  }) .then((notes) => res.json(notes))
  .catch((err) => res.status(500).json(err))})


app.listen(port, () => {console.log("app is listening on" + port)})

