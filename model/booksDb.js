const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://root:root@lib.zo6qogd.mongodb.net/lib?retryWrites=true&w=majority")
    .then(() => {
        console.log("DB coneected")
    })
    .catch(err => console.log(err))

let Schema = mongoose.Schema;

const libSchema = new Schema({
    bookName: String,
    author: String,
    language: String,
    genre: String,
    bookNum: Number
});

var libModel = mongoose.model("book", libSchema);
module.exports = libModel;