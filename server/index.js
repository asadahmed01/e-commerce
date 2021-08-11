const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//set up exprss

const app = express();

app.use(express.json({ limit: "500mb" }));
app.use(cors());
app.use(express.static("public"));

//User route
app.use("/products", require("./routes/productRoute"));
//app.use("/", require("./routes/productRouter"));

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, console.log(`server started on port ${PORT}`)))
  .catch((error) => error.message);

mongoose.set("useFindAndModify", false);
