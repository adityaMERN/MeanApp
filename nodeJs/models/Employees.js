const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Employee = new Schema({
    name: {
        type: String
    },
    position: {
        type: String
    },
    office: {
        type: String
    },
    salary: {
        type: Number
    }
});
module.exports = mongoose.model("Employees", Employee)