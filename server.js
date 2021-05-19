const express = require('express');
const app = express();

app.listen(process.env.PORT || 5000, () => console.log("Server running..."));

app.use(express.json());
app.use(express.urlencoded());

// GET Method
app.get('/', (req, res) => res.send("Welcome GET POST PUT DELETE Method"));
