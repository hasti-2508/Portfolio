const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, "Please Enter your name"]
 },
 email: {
    type: String,
    required: [true, "Please Enter your email"]
 },
 phoneNo:{
    type: Number,
    required: [true, "Please Enter your phone number."]
 }
});


module.exports = mongoose.model("User", userSchema)


//type: mongoose.Schema.types.ObjectID
// ref: "User"