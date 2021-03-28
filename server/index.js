// thank you free code camp: https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// route to api test
app.get('/api', (req, res) => {
    res.json({message : "hello, world!"});
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});