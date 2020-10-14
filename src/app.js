import "dotenv/config";
import { v4 as uuidv4 } from "uuid";
const express = require("express");
const cors = require("cors");

//data
let messages = {
  1: {
    id: 1,
    post: "Ad occaecat dolore velit nulla exercitation in aute mollit nulla.",
  },
  2: {
    id: 2,
    post: "Occaecat consequat in occaecat sit elit ea ex id esse ipsum.",
  },
};

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Add cors
app.use(cors());

app.get("/messages", (req, res) => {
  return res.send(messages);
});

app.get("/messages/:messageId", (req, res) => {
  return res.send(messages[req.params.messageId]);
});

app.post("/messages", (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    message: req.body.message,
  };

  messages[id] = message;

  return res.send(message);
});

app.delete("/messages/:messageId", (req, res) => {
  const message = messages[req.params.messageId];
  delete messages[req.params.messageId];

  //another way
  /*const { [req.params.messageId]: message, ...otherMessages } = messages;
  messages = otherMessages;*/

  return res.send(message);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
