const express = require("express")
const cors = require("cors")
require("dotenv").config()
const PORT = process.env.PORT || 8083
const app = express()
app.use(cors())

const survive = require("./library/survive")
const maths = require("./library/maths")

// root = the home place
// route = an API end point

app.get("/", function(request, response){
    response.status(200).json("Hi this is the root route.")
})

app.get("/survive", survive)

//localhose:8083/maths?num1=10&num2=9
app.get("/maths", maths)


app.listen(PORT, () => console.log(`App is running on port ${PORT}`))