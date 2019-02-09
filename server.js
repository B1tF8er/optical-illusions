const express = require("express");
const port = 80;

let app = express();

app.use(express.static("public"));

//make way for some custom css, js and images
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/images", express.static(__dirname + "/public/images"));

var server = app.listen(port, function serverListen() {
  console.log(`Server started at http://localhost:${port}`);
});
