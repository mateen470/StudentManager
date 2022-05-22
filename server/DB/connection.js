const mongoose = require("mongoose");

// databse link
const DB =
  "mongodb+srv://mateen:mughal470@cluster0.w4pbb.mongodb.net/crud?retryWrites=true&w=majority";

mongoose.connect(DB,{
useNewUrlParser:true,
useUnifiedTopology:true
}).then(()=>{console.log('MONGODB connected successfully')}).catch((error)=>{console.log(error.message)})
