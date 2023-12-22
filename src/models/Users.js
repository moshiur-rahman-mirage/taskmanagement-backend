const { model, Schema, default: mongoose } = require("mongoose");
const userSchema = new Schema({

    'img': {
        type: String,
        // required: true
    },
    "name": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true,
        unique: true
    }

})

const Users=model('User',userSchema);
module.exports = Users