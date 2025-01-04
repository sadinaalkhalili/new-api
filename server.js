const express = require("express");
const app = express();

const alkhalili = {
  sadina: {
    age: 25,
    Fullname: "Sadina Alkhalili",
    Birthplace: "Amman",
  },
  lama: {
    age: 50,
    Fullname: "Lama Alkhateeb",
    Birthplace: "Amman",
  },
  rahmeh: {
    age: 20,
    Fullname: "Rahmeh Alkhalili",
    Birthplace: "Amman",
  },
};
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/alkhalili/:name", (req, res) => {
  const name = req.params.name.toLowerCase();

  if (alkhalili[name]) {
    res.json(alkhalili[name]);
  } else {
    res.sendFile(__dirname + "/index.html");
  }
});
app.listen("8080");
