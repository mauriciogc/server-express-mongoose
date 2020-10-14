import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const router = Router();

router.get("/", (req, res) => {
  return res.send(req.context.models.messages);
});

router.get("/:messageId", (req, res) => {
  return res.send(req.context.models.messages[req.params.messageId]);
});

router.post("/", (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    message: req.body.message,
  };

  req.context.models.messages[id] = message;

  return res.send(message);
});

router.delete("/:messageId", (req, res) => {
  const message = req.context.models.messages[req.params.messageId];
  delete req.context.models.messages[req.params.messageId];

  return res.send(message);
});

export default router;
