// utilities to handle the database

const fs = require("fs");

// this package will generate unique ids
const uuidv1 = require("uuid/v1");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// using class to create an add note method
class Store {
    getNotes() {
    return readFileAsync("db/db.json", "utf8").then((notes) => {
        return JSON.parse(notes)
    });
}

    addNote(note) {
        const { title, text } = note;

        // if statment to require user input for both title and text box otherwise throw and error
        if (!title || !text) {
            throw new Error("tit;e and text are required.");
        }

        const newNote = {title, text, id: uuidv1() };
        this.getNotes().then((notes) => {
            notes.push(newNote);
        });
    }
}


module.exports = new Store();