function survive (request, response){
    //do something
    try{
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

    response.status(200).json(outcome)

    // if we wanted to respond or log errors that i have created use if statement not catch.
    // if(request.query.API_KEY !== "12345"){
    //     response.status(403).json("YOu do not have access")
    // }
    
}catch(error){
    response.json(error)
    console.log(error)
}
}

module.exports=survive