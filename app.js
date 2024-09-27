const todoRoute = require("./route/todoRoute")
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv/config")

const app = express()
app.use(express.json())

app.use(cors())

app.get("/", (req, res) => {
    res.send("Home")
})

app.use("/api/todo", todoRoute)

app.listen(process.env.PORT)

async function db() {
    try {
        const res = await mongoose.connect(process.env.DB)
        console.log(res.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}

db()