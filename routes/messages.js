import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  const messages = await req.context.collections.messages.find().toArray();
  return res.send(messages);
});

router.get("/:messageId", async (req, res) => {
  const message = await req.context.collections.messages
    .find(req.context.ObjectId(req.params.messageId))
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
    _id: new req.context.ObjectId(req.params.messageId),
  });

  if (message.deletedCount === 1) {
    return res.send({ ok: 1 });
  }

  return res.send({ message: "No se ha borrado" });
});

export default router;
