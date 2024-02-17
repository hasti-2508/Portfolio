const mongoose = require("mongoose")


const connection = async() => {
    try{
        const connect = await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database Connected")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connection;