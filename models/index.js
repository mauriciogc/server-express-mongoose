import mongoose from "mongoose";

import messages from "./messages";

const connection = mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connection
  .then(async () => {
    console.log("Se ha conectado a la base de datos");
  })
  .catch((err) => {
    console.log("=====================>", err);
  });

export default {
  messages,
};
