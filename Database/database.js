const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Huzaifa:Huzaifa@mydatabase.vad6c3b.mongodb.net/")
.then(() => console.log("Connected to the Database"))
.catch((e) => console.log("Connection Failed"));

module.exports = mongoose;