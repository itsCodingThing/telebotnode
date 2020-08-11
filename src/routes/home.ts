import express from "express";

const homeRouter = express.Router();

homeRouter.get("/", (req, res) => {
  res.send("check telegram bot @qoutes_in_hand_bot");
});

export default homeRouter;
