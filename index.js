const express = require("express");
const app = express();
const mongoose = require("mongoose");
const SecretModel = require("./models/Secrets");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://guidorial:guidorial123@cluster0.1wi2d.mongodb.net/clon-tu-secreto?retryWrites=true&w=majority"
);

app.get("/getSecrets", (req, res) => {
    //send data to front
    SecretModel.find({}, (error, result) => {
        error ? console.error(error) : res.json(result);
    });
});

app.post("/createSecret", async (req, res) => {
    //add secret to database
    const secret = req.body;
    const newSecret = new SecretModel(secret);
    await newSecret.save();

    res.json(newSecret);
});

app.listen(3002, () => {
    console.log("server running!");
});
