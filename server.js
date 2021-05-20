const express = require('express');
const app = express();
const port = 5000;



app.listen(process.env.PORT || 5000, () => console.log("Server running..."));

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
    res.send(comments)
});


// app.post('/api/users', (req, res) => {
//     console.log(req.body);
//     if (!req.body.password) {
//         res.status(400)
//         res.send({error: "password Required"})
//     }
//     let user = {
//         id: users.length +1,
//         username: req.body.username,
//         password: req.body.password
//     }
//     users.push(user);
//     res.send(users);
// });

// app.delete('/api/users/:id', (req, res) => {
//     let id = req.params.id;
//     // console.log(id);
//     let index = -1;
//     for (let user of users) {
//         if (user.id === parseInt(id)){
//             index = user.id -1;
//         }
//     }
//     if (index >=0){
//         let user = users[index];
//         users.slice(index, 1);
//         res.send(user);
//         // users.splice(index, 1);
//     }else{
//         res.status(404)
//         res.send({error: "not calid user id"})
//     }
// });

// app.put('/api/users/:id', (req, res) => {
//     let id = req.params.id;
//     let userName = req.body.username;
//     let pass = req.body.password;

//     let index = -1;
//     for (let user of users) {
//         if (user.id === parseInt(id)){
//             index = user.id -1;
//         }
//     }
//     if (index>=0){
//         let user = users[index];
//         user.username=userName;
//         user.password=pass;
//         res.send(user);
//     }else{
//         res.status(404)
//         res.send({error: "not calid user id"})
//     }
// });



