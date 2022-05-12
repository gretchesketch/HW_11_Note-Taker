const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs")

const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world!");
});
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
app.get("/api/notes", (req, res) => {
 res.json(JSON.parse(fs.readFileSync("./db/db.json","utf8")))
});

app.post("/api/notes", (req, res) => {
  // return this.read()
  //   .then((notes) => {
  //     let parsedNotes;

  //     // If notes isn't an array or can't be turned into one, send back a new empty array
  //     try {
  //       parsedNotes = [].concat(JSON.stringify(notes));
  //     } catch (err) {
  //       parsedNotes = [];
  //     }

  //     return parsedNotes;
  //   })
  //   .then((notes) => res.send(notes))
  //   .catch((err) => res.status(500).json(err));
  
  let newNote = req.body;
  console.log(newNote)
  const savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  savedNotes.push(newNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
  res.status(200).json({added: true});
});
// app.delete("/api/notes:id", (req, res) => {
//   return this.read()
//     .then((notes) => {
//       let parsedNotes;

//       // If notes isn't an array or can't be turned into one, send back a new empty array
//       try {
//         parsedNotes = [].concat(JSON.stringify(notes));
//       } catch (err) {
//         parsedNotes = [];
//       }

//       return parsedNotes;
//     })
//     .then((notes) => res.send(notes))
//     .catch((err) => res.status(500).json(err));
// });

app.listen(port, () => {
  console.log("app is listening on" + port);
});
