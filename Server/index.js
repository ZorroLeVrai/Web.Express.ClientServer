const express = require('express');
const PORT = 8080;

//create app
const app = express();

//add the middleware for json
app.use(express.json());

//add Access-Control-Allow-Origin header for CORS
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['http://127.0.0.1:5500']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/calc', (request, response) => {
  const { operand1, operand2 } = request.body;
  response.send({ result: Number(operand1) + Number(operand2) });
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));