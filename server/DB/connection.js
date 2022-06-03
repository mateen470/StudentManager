const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "config.env" });
const DB= "mongodb+srv://mateen:mughal470@cluster0.w4pbb.mongodb.net/crud?retryWrites=true&w=majority";

mongoose
  .connect(process.env.MONGO_URI|| DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGODB connected successfully");
  })
  .catch((error) => {
    console.log(error.message);
  });
