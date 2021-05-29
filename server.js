const express = require("express");
const app = express();
const fs = require("fs");
app.listen(process.env.PORT || 5000, () => console.log("Server running...."));

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

// read file pi comments.json
let comments = JSON.parse(fs.readFileSync("comments.json"));
app.post("/comments", (req, res) => {

  let user = req.body.username;
  let sms = req.body.message;
  let col = req.body.color;
  let bol = req.body.b;
  let ita = req.body.i;
  let under = req.body.u;
  let pro = req.body.profile;
  // object cpmment is array 
  let comment = {
    id: comments.length + 1,
    username: user,
    message: sms,
    color: col,
    b: bol,
    i: ita,
    u: under,
    profile: pro
  };
  comments.push(comment);
  // write
  fs.writeFileSync("comments.json", JSON.stringify(comments));
  res.send(comments);
});


// GET Method 
app.get("/comments", (req, res) => {
  res.send(comments);
});


// get users
app.get('/users', (req, res) =>{
  let users = JSON.parse(fs.readFileSync("users.json"));
  res.send(users);
})


