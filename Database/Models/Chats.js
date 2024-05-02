const mongoose = require("mongoose");

const Schema = ({
    name:String
})

const Chats = mongoose.model("Portfolio_Chat", Schema);

module.exports = Chats;