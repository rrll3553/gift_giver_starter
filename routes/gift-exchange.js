const express = require("express")
const GiftExchange = require("../models/gift-exchange")
const router = express.Router() // instantiate a router from the express package



router.get('/', async (req, res, next) => {
    gifts = await ExchangeGifts.tallyGifts()
    res.status(200).json(gifts)
})


router.post("/pairs", async (req, res, next) => {
    // trying to pass the list of users into the GiftExchange method for pairs
    let namesList = req.body.namesList
    console.log(namesList)
    pairedList = GiftExchange.pairNames(namesList)
    console.log(pairedList) // works fine
    res.status(200).json(pairedList)
})

router.post("/traditional", async (req, res, next) => {
    // trying to pass the list of users into the GiftExchange method for pairs
    let namesList = req.body.namesList
    console.log(namesList)
    traditionalList = GiftExchange.traditionalNames(namesList)
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