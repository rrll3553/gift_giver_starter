const express = require("express")
const Voting = require("../models/voting")
const router = express.Router() // instantiate a router from the express package

router.get('/', async (req, res, next) => {
    const votes = await Voting.tallyVotes()
    res.status(200).json(votes) // you need this to show up for the GET request
})

router.post('/:pizzaName', async (req, res, next) => { //:pizzaName is a placeholder and will capture that value
    // console.log(req.body)
    const user = req.body.user
    const pizzaName = req.params.pizzaName // the route parameter is attached to req.params
    const votes = await Voting.recordVotes(pizzaName, user)
    res.status(200).json(votes)
})


module.exports = router // allows other parts of our app to access the module router, which 
// defined that route '/' and basically shows the current votes