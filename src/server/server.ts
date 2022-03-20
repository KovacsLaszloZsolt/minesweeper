import express from "express";
import { AddressInfo } from "net";

const ip = require("ip");
import path from "path";

const PORT = 3000;
const app = express();
app.use(express.static("dist"));

// const main = server.listen(PORT, () => {
//   console.log(`Server run at ${main.address().address}:${PORT}`);
// });

const server = app.listen(PORT, function () {
  var host = server.address() as AddressInfo;
  console.log("running at http://" + ip.address() + ":" + PORT);
});
