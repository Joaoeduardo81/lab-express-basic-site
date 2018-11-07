const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();
// our first Route
app.get('./', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + "/Week4/Day2/lab-express-basic-site/starter-code/index.html");
});

app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});
