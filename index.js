const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "Hej David inifrån applikationen som körs i en pod i ett kubernetes-kluster"
  );
});

app.listen(port);
