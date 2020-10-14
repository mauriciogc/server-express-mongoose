import "dotenv/config";
const express = require("express");
const cors = require("cors");

import models from "../models";
import routes from "../routes";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(async (req, res, next) => {
  req.context = {
    models,
  };
  next();
});

app.use("/messages", routes.messages);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
