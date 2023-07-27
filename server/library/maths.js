function maths (timRequest, chrisResponse){
    const {num1, num2} = timRequest.query //Destructuring the object
    // if we have + we need to parseNum(num1) + parseNum(num2)
     const sum = num1 * num2
    // chrisResponse.json(timRequest.query)
    chrisResponse.json(sum)
}

module.exports = maths