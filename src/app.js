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
