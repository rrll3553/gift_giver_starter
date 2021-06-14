// import two dependencies
const express = require("express") //framework
const morgan = require("morgan")
const giftExchange = require("./routes/gift-exchange")
const {NotFoundError} = require("./utils/errors")
const app = express() // creates a new instance of express 

app.use(morgan("tiny")) // this app will use this logging middleware
app.use(express.json()) // anytime we send a POST request, express will parse that request as JSON. need this for req.body or else it'll always be undefined
app.use("/gift-exchange", giftExchange)



app.get("/", async (req, res, next) => {
    res.status(200).json({ping:"pong"})
}) 
// will look what kind of HTTP request, what route is being sent, and will log how long the request took

app.get("/hey", async(req, res, next) => {
    res.status(200).json({hi:"hello"})
}) // a different route 


// Will handle all 404 errors - where end point doesn't exist 
app.use((req,res,next) => {
    return next(new NotFoundError())
})


// Generic error handler 
app.use((error, req, res, next) => {
    const status = error.status || 500
    const message = error.message 
    return res.status(status).json({
        error: {message, status}
    })
})


// application is listening on this port. so it won't work on other ports like 3001
const port = 3000  
app.listen(port, () => {
    // console.log(module)
    console.log('🚀 Server listening on port' + port)
})

/* 
To run, 
NTS: nodemon server.js OR node server.js 
Use insomnia to do a POST request to localhost:3000/exchange-gifts/pairs 
or /traditional and put namesList in the userbody so that it can be passed
into those pairs 
*/