const http = require("http");
const express = require("express");
const app = express();

// Website

app.use(express.static('host'));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/host/index.html");
});
app.get("/commands", (request, response) => {
  response.sendFile(__dirname + "/host/commands.html");
});
app.get("/changelogs", (request, response) => {
  response.sendFile(__dirname + "/host/changelogs.html")
});

app.get("/support", (req, res) => {
  res.sendFile(__dirname + "/host/support.html")
});

app.get("/invite", (req, res) => {
  res.sendFile(__dirname + "/host/invite.html")
});

//404
app.get('*', (req, res) => {
  res.sendFile(__dirname + "/host/404.html");
});

app.listen(process.env.PORT)
console.log("Funkn. - Website is now online!")

