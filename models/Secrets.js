const mongoose = require("mongoose");

const SecretSchema = new mongoose.Schema({
    edad: {
        type: Number,
        required: true,
    },
    sexo: {
        type: String,
        required: true,
    },
    secreto: {
        type: String,
        required: true,
    },
});

const SecretModel = mongoose.model("secretos", SecretSchema);

module.exports = SecretModel;
