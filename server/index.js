import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import productRoutes from "./routes/productRoute.js";

const app = express();

app.use(express.json({ limit: "500mb" }));
app.use(cors());
app.use(express.static("public"));

//User route
app.use("/products", productRoutes);
app.use("/products", productRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, console.log(`server started on port ${PORT}`)))
  .catch((error) => error.message);

mongoose.set("useFindAndModify", false);
