const express = require("express");
const app = express();
const mongoose = require("mongoose");
const SecretModel = require("./models/Secrets");
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 5000;

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

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
    console.log("server running!");
});
