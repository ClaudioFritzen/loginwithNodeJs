require('dotenv').config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Conectado!");
}).catch((err) => console.log(err));