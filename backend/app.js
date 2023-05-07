const express = require("express");
const app = express();

//PORT
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Welcome to the best brand')
})

//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
