const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const {
    readFromFile,
    readAndAppend,
    writeToFile,
    readAndDelete,
} = require("../helpers/fsUtils");

router.get("/notes", (req, res) => {
    readFromFile("./DB/db.json").then((data) => res.json(JSON.parse(data)));
});


router.post("/notes", (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4();

    readAndAppend(newNote, "./DB/db.json");
    res.json(newNote);
  });


  router.delete("/notes/:id", (req, res) => {
    readAndDelete(req.params.id, "./DB/db.json");
    res.json({ ok: true });
  });

  module.exports = router;