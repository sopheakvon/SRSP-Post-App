const express = require('express');
const app = express();
const port = 5000;

app.listen(port, () => console.log("server starting ..."));

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

let comments  = [
    {id: 1, username: "Sara", message: "Hello!! My name is Sara"},
    {id: 2, username: "Sopheak", message: "Hello!! My name is Sopheak"},
    {id: 2, username: "Rady", message: "Hello!! My name is Rady"},
];

// GET Method
app.get('/comments', (req, res) =>{
    //
    // let newItem = req.body
    // comments.push(newItem);
    res.send(comments)
});
app.post('/comments', (req, res) =>{
    let user = req.body.username;
    let sms = req.body.message;
    let message = {
        id: comments.length + 1,
        username: user,
        message: sms,
    }
    comments.push(message);
    res.send(comments);
    
});



