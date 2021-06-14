const express = require("express")
const GiftExchange = require("../models/gift-exchange")
const router = express.Router() // instantiate a router from the express package




router.post("/pairs", async (req, res, next) => {
    // will return an array of paired names based off of the namesList passed through the req.body
    try {
        let namesList = req.body.namesList
        console.log(namesList)
        pairedList = await GiftExchange.pairNames(namesList)
        console.log(pairedList) // works fine
        res.status(200).json(pairedList)
    } catch (err) {
        next(err)
    }
})

router.post("/traditional", async (req, res, next) => {
    // will return an array of traditionally sequenced names based off of the namesList passed through the req.body
    let namesList = req.body.namesList
    console.log(namesList)
    traditionalList = await GiftExchange.traditionalNames(namesList) // need an await here or it will return a promise
    console.log(traditionalList)
    res.status(200).json(traditionalList)
})



// router.post("/:gift", async (req, res, next) => {
//     const user = req.body.user
//     const gift = req.params.gift
//     gifts = await ExchangeGifts.recordGifts(gift, user)
//     res.status(200).json(gifts)
// })

module.exports = router