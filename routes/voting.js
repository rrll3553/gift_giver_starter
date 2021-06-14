const express = require("express")
const router = express.Router() // instantiate a router from the express package
// equivalent to app.get 

// our poll
const voting = {
    peperroni: 0,
    cheese: 0,
    hawaiian: 0,
}

router.get('/', async (req, res, next) => {
    res.status(200).json(voting)
})

router.post('/:pizzaName', async (req, res, next) => { //:pizzaName is a placeholder and will capture that value
    console.log(req.params)
    
    const pizzaName = req.params.pizzaName
    if (voting[pizzaName] || voting[pizzaName] === 0) {
        voting[pizzaName] += 1
    }

    res.status(200).json(voting)
})


module.exports = router // allows other parts of our app to access the module router, which 
// defined that route '/' and basically shows the current votes