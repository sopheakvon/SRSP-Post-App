const express = require("express");
const app = express();
app.listen(process.env.PORT || 5000, () => console.log("Server running...."));

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));


let comments = [
  {
    id: 1,
    username: "Sara",
    message: "Hello!! My name is Sara",
    color: "alert-danger",
    b: "",
    i: "",
    u: "u",
    profile: "image/pro3.png",
  },
  {
    id: 2,
    username: "Sopheak",
    message: "Hello!! My name is Sopheak",
    color: "alert-warning",
    b: "",
    i: "i",
    u: "",
    profile: "image/pro8.png",
  },
];
app.post("/comments", (req, res) => {
  let user = req.body.username;
  let sms = req.body.message;
  let col = req.body.color;
  let bol = req.body.b;
  let ita = req.body.i;
  let under = req.body.u;
  let pro = req.body.profile;
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
  // console.log(comment);
  comments.push(comment);
  res.send(comments);
});
// GET Method
app.get("/comments", (req, res) => {
  res.send(comments);
});


let users =[
  {id: 1, username: "Sopheak", password: "111", color: "alert-warning", profile: "image/pro8.png"},
  {id: 2, username: "Rady", password: "222", color: "alert-success", profile: "image/pro2.png"},
  {id: 3, username: "Sara", password: "333", color: "alert-danger", profile: "image/pro3.png"},
  {id: 4, username: "Chandy", password: "444", color: "alert-info", profile: "image/pro1.png"},
  {id: 5, username: "Ronan", password: "555", color: "alert-dark", profile: "image/pro13.png"}
];
// get users
app.get('/users', (req, res) =>{
  res.send(users);
})

