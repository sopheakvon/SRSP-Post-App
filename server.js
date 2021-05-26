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
    color: "alert-warning",
    b: "",
    i: "",
    u: "u",
    profile: "image/pro3.png",
  },
  {
    id: 2,
    username: "Sopheak",
    message: "Hello!! My name is Sopheak",
    color: "alert-danger",
    b: "",
    i: "i",
    u: "",
    profile: "image/pro4.png",
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


let icons = [
  {id: 1, icon: '😓', sign: '):'},
  {id: 2, icon: '😄', sign: '(:'},
  {id: 3, icon: '😭', sign: 'cry'},
  {id: 4, icon: '🥰', sign: 'love'},
  {id: 5, icon: '😷', sign: 'sick'},
  {id: 6, icon: '😲', sign: 'wow'},
  {id: 7, icon: '😤', sign: 'bore'},
  {id: 8, icon: '🥱', sign: 'sleep'},
  {id: 9, icon: '😋', sign: 'haha'},
  {id: 10, icon: '🤬', sign: 'angry'},
];
// GET emoji
app.get("/icons", (req, res) => {
  res.send(icons);
});


let users =[
  {id: 1, username: "Sopheak", password: "111", color: "alert-warning", profile: "image/pro4.png"},
  {id: 2, username: "Rady", password: "222", color: "alert-success", profile: "image/pro2.png"},
  {id: 3, username: "Sara", password: "333", color: "alert-dark", profile: "image/pro3.png"},
  {id: 4, username: "Chandy", password: "444", color: "alert-info", profile: "image/pro1.png"}
];
// get users
app.get('/users', (req, res) =>{
  res.send(users);
})

