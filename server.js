// import two dependencies
const express = require("express") //framework
const morgan = require("morgan")
const votingRouter = require("./routes/voting") // to import from voting.js inside routes folder
const giftExchange = require("./routes/gift-exchange")

const app = express() // creates a new instance of express 

app.use(morgan("tiny")) // this app will use this logging middleware
app.use(express.json()) // anytime we send a POST request, express will parse that request as JSON. need this for req.body or else it'll always be undefined
app.use("/voting", votingRouter) // will attach the votingRouter to the '/voting' endpoint 
app.use("/gift-exchange", giftExchange)



app.get("/", async (req, res, next) => {
    res.status(200).json({ping:"pong"})
}) 
// will look what kind of HTTP request, what route is being sent, and will log how long the request took

app.get("/hey", async(req, res, next) => {
    res.status(200).json({hi:"hello"})
}) // a different route 

// application is listening on this port. so it won't work on other ports like 3001
const port = 3000  
app.listen(port, () => {
    // console.log(module)
    console.log('🚀 Server listening on port' + port)
})