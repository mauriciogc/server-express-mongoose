import { Router } from "express";
import { v4 as uuidv4 } from "uuid";
//var ObjectId = require("mongodb").ObjectId;

const router = Router();

router.get("/", (req, res) => {
  return res.send(req.context.messages);
});

router.get("/:messageId", (req, res) => {
  return res.send(req.context.messages[req.params.messageId]);
});

router.post("/", (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    message: req.body.message,
  };

  req.context.messages[id] = message;

  return res.send(message);
});

router.delete("/:messageId", (req, res) => {
  const message = req.context.messages[req.params.messageId];
  delete req.context.messages[req.params.messageId];

  return res.send(message);
});

/* router.get("/", async (req, res) => {
  const messages = await req.context.collections.messages.find().toArray();
  return res.send(messages);
});

router.get("/:messageId", async (req, res) => {
  const message = await req.context.collections.messages
    .find(ObjectId(req.params.messageId))
    .toArray();

  return res.send(message);
});

router.post("/", async (req, res) => {
  const newMessage = {
    message: req.body.message,
  };

  const message = await req.context.collections.messages.insertOne(newMessage);

  return res.send(message.ops[0]);
});

router.delete("/:messageId", async (req, res) => {
  const message = await req.context.collections.messages.deleteOne({
    _id: new ObjectId(req.params.messageId),
  });

  if (message.deletedCount === 1) {
    return res.send({});
  }

  return res.send({ message: "No se ha borrado" });
}); */

export default router;
