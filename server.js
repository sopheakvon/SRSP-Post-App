const express = require("express");
const app = express();


app.listen(process.env.PORT || 5000,() => console.log("Server running...."));


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
    u: "u"
  },
  {
    id: 2,
    username: "Sopheak",
    message: "Hello!! My name is Sopheak",
    color: "alert-danger",
    b: "",
    i: "i",
    u: ""
    
  },
  {
    id: 3,
    username: "Rady",
    message: "Hello!! My name is Rady",
    color: "alert-success",
    b: "b",
    i: "",
    u: ""
  },
];

// GET Method
app.get("/comments", (req, res) => {
  res.send(comments);
});

app.post("/comments", (req, res) => {
  let user = req.body.username;
  let sms = req.body.message;
  let col = req.body.color;
  let bol = req.body.b;
  let ita = req.body.i;
  let under = req.body.u;
  let message = {
    id: comments.length + 1,
    username: user,
    message: sms,
    color: col,
    b: bol,
    i: ita,
    u: under
  };
  comments.push(message);
  res.send(comments);
});
