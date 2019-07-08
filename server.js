const express = require("express");
const port = 3000;

let app = express();

app.use(express.static("public"));

//make way for some custom css, js and images
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/images", express.static(__dirname + "/public/images"));

let server = app.listen(port, function serverListen() {
  console.log(`Server started at http://localhost:${port}`);
});
