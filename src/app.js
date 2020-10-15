import "dotenv/config";
const express = require("express");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;

import routes from "../routes";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const connect = MongoClient.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connect
  .then((client) => {
    console.log("Connected to Database");
    const db = client.db(process.env.DATABASE);

    const collections = {
      messages: db.collection("messages"),
    };

    app.use(async (req, res, next) => {
      req.context = {
        collections,
        ObjectId,
      };
      next();
    });

    app.use("/messages", routes.messages);
  })
  .catch((err) => {
    console.log("======>", err);
  });

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
