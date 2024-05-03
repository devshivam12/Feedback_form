const express = require("express")
const mongoose = require("mongoose")
const feedbackRouter = require("./routes/feedback.routes")
const cors = require("cors")

const app = express()

// cors 

app.use(cors({
    origin: "http://localhost:5173"
}))

// middelware

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routes

app.use('/api/feedback', feedbackRouter)

app.get('/', (req, res) => {
    res.send("Hello there im shivam")
})

mongoose.connect("mongodb://127.0.0.1:27017/zidio-first-project")
    .then(() => {
        console.log("Connection Succesfully")

        app.listen(8000, () => {
            console.log("Server is Started")
        })
    })
    .catch((err) => {
        console.log("Connection fail", err)
    })

