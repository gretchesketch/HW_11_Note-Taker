// required packages
const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");

// initialize app and create port
// using porcess.env becuase heroku will have the port set then using the or symbol to say or local host 3001
// heroku might not have port 3001 available since tehy are hosting the app.
const app = express();
const PORT = process.env.PORT || 3001;


//grabbing teh middle-ware
// capuring the body of the request and turning it into json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//sets up route for the public dir.
app.use(express.static("public"));

// HTML routes
app.use("/", htmlRoutes);

// API routs

//start the server on the port
app.listen(PORT, () => console.log(`listening on port: ${PORT}`));


















// const express = require("express");
// const path = require("path");
// const app = express();
// const fs = require("fs")

// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("hello world!");
// });
// app.get("/notes", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/notes.html"));
// });
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });
// app.get("/api/notes", (req, res) => {
//  res.json(JSON.parse(fs.readFileSync("./db/db.json","utf8")))
// });

// app.post("/api/notes", (req, res) => {
//   // return this.read()
//   //   .then((notes) => {
//   //     let parsedNotes;

//   //     // If notes isn't an array or can't be turned into one, send back a new empty array
//   //     try {
//   //       parsedNotes = [].concat(JSON.stringify(notes));
//   //     } catch (err) {
//   //       parsedNotes = [];
//   //     }

//   //     return parsedNotes;
//   //   })
//   //   .then((notes) => res.send(notes))
//   //   .catch((err) => res.status(500).json(err));
  
//   let newNote = req.body;
//   console.log(newNote)
//   const savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
//   savedNotes.push(newNote);
//   fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
//   res.status(200).json({added: true});
// });
// // app.delete("/api/notes:id", (req, res) => {
// //   return this.read()
// //     .then((notes) => {
// //       let parsedNotes;

// //       // If notes isn't an array or can't be turned into one, send back a new empty array
// //       try {
// //         parsedNotes = [].concat(JSON.stringify(notes));
// //       } catch (err) {
// //         parsedNotes = [];
// //       }

// //       return parsedNotes;
// //     })
// //     .then((notes) => res.send(notes))
// //     .catch((err) => res.status(500).json(err));
// // });

// app.listen(port, () => {
//   console.log("app is listening on" + port);
// });
