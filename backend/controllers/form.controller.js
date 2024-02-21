const asyncHandler = require("express-async-handler")
const User = require("../models/form.models.js")

const collectData = asyncHandler(async(req, res) => {
    console.log(req.body)
  const {name, email , phoneNo} = req.body;
    console.log(name)
  try{
    const newUser = await User.create({
        name,
        email,
        phoneNo
    })
    res.status(201).json(newUser)
  }
  catch(err){
   console.log(err)
  }
})


module.exports = {collectData}