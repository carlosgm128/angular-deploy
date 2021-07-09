//Install express server
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const app = express();
app.set("port", process.env.PORT || 3000);

// Serve only the static files form the dist directory
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(`./dist/angular-deploy`));

app.get(`/*`, function (req, res) {
  res.sendFile(`index.html`, { root: `dist/angular-deploy` });
});

// app.get("/", (req, res) => {
//   //console.log(`server runing at server port ${app.get("port")}`);
//   console.log(path.join(__dirname, "puclic/", "index.html"));
//   res.status(200).sendFile(path.join(__dirname, "puclic/", "index.html"));
// });

// Start the app by listening on the default Heroku port
app.listen(app.get("port"), () => {
  console.log(`Server OK running at ${app.get("port")}`);
});
