const express = require('express');
console.log(express);

const app = express();
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

console.log(app);

