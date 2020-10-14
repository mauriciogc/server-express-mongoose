import "dotenv/config";
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

//Add cors
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World! mau");
});

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);
