//This has all the server code in ONE locaton not in library

const express = require("express")
const cors = require("cors")
require("dotenv").config()
const PORT = process.env.PORT || 8083
const app = express()
app.use(cors())

// root = the home place
// route = an API end point

app.get("/", function(request, response){
    response.status(200).json("Hi this is the root route.")
})

app.get("/survive", function(request, response){
    //do something
    const scenarios=[
        "You made it to the saloon. Congrats",
        "You died of dysentery.",
        "A snake got you",
        "Your horse made it .... you didnt",
        "You found gold",
        "You found oil",
        "You didn't even try"
    ]
    const randomNum = Math.floor(Math.random() * scenarios.length)
    const outcome = scenarios[randomNum]

    response.json(outcome)
})

//localhose:8083/maths?num1=10&num2=9
app.get("/maths", function(timRequest, chrisResponse){
    const {num1, num2} = timRequest.query //Destructuring the object
    // if we have + we need to parseNum(num1) + parseNum(num2)
     const sum = num1 * num2
    // chrisResponse.json(timRequest.query)
    chrisResponse.json(sum)
})


app.listen(PORT, () => console.log(`App is running on port ${PORT}`))