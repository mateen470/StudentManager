const mongoose = require("mongoose");
const dotenv = require("dotenv");
// dotenv.config({ path: "config.env" });
// databse link
// const DB =
//   "mongodb+srv://mateen:mughal470@cluster0.w4pbb.mongodb.net/crud?retryWrites=true&w=majority";
dotenv.config();
mongoose.connect(process.env.DB,{
useNewUrlParser:true,
useUnifiedTopology:true
}).then(()=>{console.log('MONGODB connected successfully')}).catch((error)=>{console.log(error.message)})
