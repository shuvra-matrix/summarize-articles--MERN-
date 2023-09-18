const express = require("express");
const cros = require("cors");
const requestIp = require("request-ip");
const mongoos = require("mongoose");
require("dotenv").config();

const MONGO_CONNECT = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}mymongoinit.6md0cxy.mongodb.net/safu?retryWrites=true&w=majority`;
const PORT = "3030";

const app = express();
const publicRoutes = require("./routes/public");

app.use(express.json());
app.use(cros());
app.use(requestIp.mw());

app.use(publicRoutes);

mongoos
  .connect(MONGO_CONNECT)
  .then((result) => {
    app.listen(process.env.PORT || PORT, () => {
      console.log(`Server Rnning On ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
