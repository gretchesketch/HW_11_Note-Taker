// required packages
const express = require("express");
//const router = require("./routes/htmlRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

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
app.use(require("./routes"))

// API routes
app.use("/api", apiRoutes);

// HTML routes
app.use("/", htmlRoutes);

//start server on the port
app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
