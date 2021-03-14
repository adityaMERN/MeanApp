const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
const cors = require("cors")
var employeeController = require("./controllers/employeeController");


var app = express();


app.use(express.json());
app.use(cors({ origin: "http://localhost:4200" }));
mongoose.connect(MONGO_URI, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to mongodb"))
    .catch(err => console.log(err))
app.use("/employees", employeeController);

app.listen(3000, () => console.log("server started at port 3000"))