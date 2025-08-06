const { default: mongoose } = require("mongoose");
require('dotenv').config(); 

mongoose.connect(process.env.MONGODB_URI)

const UserSchema = new mongoose.Schema({
    username: String,
    name:String,
    password: String
})

const BlogSchema = new mongoose.Schema({
    title : String,
    content : String,
    userId : String
})

module.exports = {
    UserModel: mongoose.model('users',UserSchema),
    BlogsModel : mongoose.model('blogs',BlogSchema)
}