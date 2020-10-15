/* import "dotenv/config";
const express = require("express");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;

//import models from "../models";
import routes from "../routes";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const flags = { useNewUrlParser: true, useUnifiedTopology: true };
const urlDB = "mongodb://127.0.0.1:27017/";
MongoClient.connect(urlDB, flags, (err, client) => {
  if (err) return console.error(err);
  console.log("Connected to Database");
  const db = client.db("express-test-2");
  const collections = {
    messages: db.collection("messages"),
  };

  app.use(async (req, res, next) => {
    req.context = {
      collections,
    };
    next();
  });

  app.use("/messages", routes.messages);
});
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
 */

import "dotenv/config";
import { v4 as uuidv4 } from "uuid";
const express = require("express");
const cors = require("cors");

import routes from "../routes"; //(A)

let messages = {
  1: {
    id: 1,
    message:
      "Ad occaecat ad dolore velit nulla exercitation in aute mollit nulla.",
  },
  2: {
    id: 2,
    message: "Occaecat consequat in occaecat sit elit ea ex id esse ipsum.",
  },
};

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(async (req, res, next) => {
  req.context = {
    messages,
  };
  next();
});

app.use("/messages", routes.messages); //(B)

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
