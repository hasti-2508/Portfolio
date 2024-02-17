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
    type: String,
    required: [true, "Please Enter your phone number."]
 }
});
