import { Product } from "./models/productModel.js";
import { User } from "./models/userModel.js";
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

const user = [
  {
    name: "Asad Ahmed",
    email: "asad@asad.com",
    password: "12345",
    address: {
      street: "545 belmont",
      city: "Waterloo",
      postalcode: "124585",
      province: "ON",
      country: "Canada",
    },
    orders: [
      {
        title: "basmati",
        price: 124,
        url: "some image",
        description: "some description",
        quantity: 1,
      },
    ],
    isAdmin: true,
  },
];
async function seed() {
  //await mongoose.connect(config.get("db"));

  await mongoose.connect("");

  await User.deleteMany({});

  for (let index = 0; index < user.length; index++) {
    await User.insertMany(user[index]);
  }

  // for (let item of data) {
  //   await Product.insertMany(item);
  // }

  mongoose.disconnect();

  console.info("Done!");
}

seed();
