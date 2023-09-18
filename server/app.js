const express = require("express");
const cros = require("cors");
const requestIp = require("request-ip");
const mongoos = require("mongoose");
require("dotenv").config();
const UAParser = require("ua-parser-js");
const User = require("./model/User");

const MONGO_CONNECT = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}mymongoinit.6md0cxy.mongodb.net/safu?retryWrites=true&w=majority`;
const PORT = "3030";

const app = express();
const publicRoutes = require("./routes/public");

app.use(express.json());
app.use(cros());
app.use(requestIp.mw());

app.use((req, res, next) => {
  User.findOne({ ip: req.clientIp })
    .then((user) => {
      if (user) {
        req.user = user;
        console.log("alredy exist");
        next();
      } else {
        const useragent = req.headers["user-agent"];
        let parser = new UAParser(useragent);
        let parserResults = parser.getResult();
        const newUser = new User({
          ip: req.clientIp,
          deviceDetails: parserResults,
          query: [],
        });

        return newUser.save().then((result) => {
          User.findOne({ ip: req.clientIp })
            .then((user) => {
              req.user = user;
              next();
              console.log("new user");
            })
            .catch((err) => {
              console.log(err);
            });
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

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
