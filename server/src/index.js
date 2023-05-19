import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import arcsRoutes from "./routes/arcs.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.get("/tester", (req, res) => {
  res.send("Hello, this is a test endpoint");
});
mongoose
  .connect("mongodb://db:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use("/arcs", arcsRoutes);

app.listen(5000, () => console.log("Server started on port 5000"));
