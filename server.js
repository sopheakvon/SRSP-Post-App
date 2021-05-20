const express = require('express');
const app = express();
const port = 5000;



app.listen(process.env.PORT || 5000, () => console.log("Server running..."));

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

// localhost:5000/comments
let comments  = [
    {id: 1, username: "Sara", message: "Hello!! My name is Sara"},
    {id: 2, username: "Sopheak", message: "Hello!! My name is Sopheak"},
    {id: 2, username: "Rady", message: "Hello!! My name is Rady"},
];

// GET Method
app.get('/comments', (req, res) =>{ 
    res.send(comments)
});
