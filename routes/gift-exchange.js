const express = require("express")
const router = express.Router() // instantiate a router from the express package
// equivalent to app.get 

const gifts = {
    laptop: 0,
    phone: 0,
    desktop: 0,
}


router.get('/', async (req, res, next) => {
    // res.status(200).json({hello: "i am here in gift-exchanges"})
    res.status(200).json(gifts)
})

router.post("/:gift", async (req, res, next) => {
    // console.log(req.params)
    const gift = req.params.gift
    console.log(gift)
    if (gifts[gift] || gifts[gift] === 0) {
        gifts[gift] += 1
    }

    res.status(200).json(gifts)
})

module.exports = router