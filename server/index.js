// thank you free code camp: https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/

const express = require("express");

const app = express();
app.use(express.json())

var username = "";
var password = "";

// route to api test
app.get('/api', (req, res) => {
    res.json({message : "hello, world!"});
  });

// route to posting username and password
app.post('/login', (req, res) => {
    username = req.body.username;
    password = req.body.password;
    res.json({name: username, password: password});
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});