import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { page } = req.query;
  if (Number(page) < 6) {
    res.send(require(`./page_${page}.json`));
  } else {
    res.status(500).send("error!");
  }
});

export default router;
