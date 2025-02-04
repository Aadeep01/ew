const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()
const port = 3000
app.use(bodyParser.json())
const mongo_uri='mongodb+srv://aadeepkaur:aTlas2607@cluster0.8by9j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB:', err));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


