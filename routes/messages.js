import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const router = Router();

router.get("/", async (req, res) => {
  const messages = await req.context.models.messages.find();
  return res.send(messages);
});

router.get("/:messageId", async (req, res) => {
  const message = await req.context.models.messages.findById(
    req.params.messageId
  );
  return res.send(message);
});

router.post("/", async (req, res) => {
  const message = await req.context.models.messages.create({
    message: req.body.message,
  });

  return res.send(message);
});

router.delete("/:messageId", async (req, res) => {
  const message = await req.context.models.messages.deleteOne({
    _id: req.params.messageId,
  });

  if (message) {
    message.deletedCount;
  }

  return res.send(message);
});

export default router;
