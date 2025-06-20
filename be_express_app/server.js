// ./server.js
const app = require('./src/app');
const port = 5000;

app.listen(port, () => {
  console.log(`Server running pada http://localhost:${port}`);
});