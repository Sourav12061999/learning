const express = require("express");
const db = require("./models");
const { User } = require("./models");
const sequelize = require("sequelize");
const app = express();
app.use(express.json());

app.get("/select", async (req, res) => {
  const data = await User.findAll();
  res.status(200).json({
    msg: "OK",
    data,
  });
});

app.get("/search", async (req, res) => {
  const data = await User.findAll({
    where: {
      [req.query.key]: {
        [sequelize.Op.like]: `%${req.query.search}%`,
      },
    },
  });
  res.status(200).json({
    msg: "OK",
    data,
  });
});
app.post("/insert", async (req, res) => {
  const data = await User.create({
    firstName: req.body.firstName,
    midName: req.body.midName || null,
    lastName: req.body.lastName,
  });
  res.status(200).json({
    msg: "OK",
    data,
  });
});
app.delete("/delete", (req, res) => {});
db.sequelize.sync().then((req) => {
  app.listen(3001, () => {
    console.log("Server Started");
  });
});
