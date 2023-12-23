const { model, Schema, default: mongoose } = require("mongoose");

const taskSchema = new Schema({
    'task_name': {
        type: String,
        // required: true
    },
    "task_description": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true
    },
    "task_status": {
        type: String,
        required: true
    }
});

const Tasks = model('Task', taskSchema);
module.exports = Tasks;
