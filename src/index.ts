import express from "express";
import romance from "./romance";

const app = express();
// const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/comics/romance", romance);

app.listen(4000, () => {
  console.log(`server on http://localhost:4000`);
});
