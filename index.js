const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { userRouter } = require("./routes/userRoute");
const { postRouter } = require("./routes/postRoute");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/posts", postRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to Database");
  } catch (err) {
    console.log(err);
  }
});
