const mongoose = require("mongoose");

const Taskschema = new mongoose.Schema({
    name :{
    type: String,
    required: [true,"Must Provide name"],
    trim:true,
    maxlength:[20,"Name cannot be more than 20 characters"],
    },
    completed: {
    type: Boolean,
    default: false,
    },
});

module.exports = mongoose.model("Task",Taskschema);