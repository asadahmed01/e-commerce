import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoute.js";
import userRoutes from "./routes/userRoute.js";
dotenv.config();
const app = express();

app.use(express.json({ limit: "500mb" }));
app.use(cors());
app.use(express.static("public"));

//User route
app.use("/products", productRoutes);
app.use("/users", userRoutes);
//const PORT = process.env.PORT || 9000;
app.listen(process.env.PORT || 9000);
// mongoose
//   .connect(process.env.CONNECTION_STRING, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => app.listen(PORT, console.log(`server started on port ${PORT}`)))
//   .catch((error) => error.message);

mongoose.connect(
  process.env.CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("connected to mongoDB");
  }
);

//mongoose.set("useFindAndModify", false);
