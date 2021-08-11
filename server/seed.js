import { Product } from "./models/productModel.js";
import mongoose from "mongoose";

const data = [
  {
    category: "Men",
    title: "Jeans pants",
    numberInStock: 10,
    price: 65.58,
  },

  {
    category: "Women",
    title: "Yoga pants",
    numberInStock: 3,
    price: 25.58,
  },

  {
    category: "Kids",
    title: "Superman suit",
    numberInStock: 10,
    price: 125.58,
  },
];

async function seed() {
  //await mongoose.connect(config.get("db"));

  await mongoose.connect("");

  await Product.deleteMany({});

  for (let index = 0; index < data.length; index++) {
    await Product.insertMany(data[index]);
  }

  // for (let item of data) {
  //   await Product.insertMany(item);
  // }

  mongoose.disconnect();

  console.info("Done!");
}

seed();
