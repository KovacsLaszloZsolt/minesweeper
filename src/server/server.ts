import express from 'express';
import * as ip from 'ip';
import morgan from 'morgan';

// const ip = require("ip");
import path from 'path';

const PORT = 3000;
const app = express();
app.use(express.static('dist'));

// const main = server.listen(PORT, () => {
//   console.log(`Server run at ${main.address().address}:${PORT}`);
// });

const server = app.listen(PORT, () => {
  console.log('running at http://' + ip.address() + ':' + PORT);
});
