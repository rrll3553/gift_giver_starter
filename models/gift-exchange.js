// const Errors = require("../utils/errors")
// const BadRequestError = Error.BadRequestError
const {BadRequestError} = require("../utils/errors")


class GiftExchange {
    static generateNewNumber (seen, length) {
        let randomNumber = Math.floor(Math.random() * length)
        while (seen.includes(randomNumber)) {
            randomNumber = Math.floor(Math.random() * length)
        }
        seen.push(randomNumber)
        return randomNumber
}

    static async pairNames(names) {
        // if names does not exist - doesn't work
        if (!names) {
            throw new BadRequestError("You must pass in an array of names")
        }
        let length = names.length
        // if it's an odd length of number, return error
        if (length % 2 == 1) {
            throw new BadRequestError("You must have an even number of names")
        }
        let answer = []
        let seen = []
        while (answer.length < (names.length/2)) {
            let position1 = GiftExchange.generateNewNumber(seen,length)
            let position2 = GiftExchange.generateNewNumber(seen,length)
            let temp = [names[position1], names[position2]]
            answer.push(temp)
        }
        return answer
    }

    static async traditionalNames (names) {
        // if names does not exist - doesn't work
        if (!names) { 
            throw new BadRequestError("You must pass in an array of names")
        }
        let length = names.length
        let answer = []
        let seen = []
        let position1 = GiftExchange.generateNewNumber(seen, length)
        let first = position1
        for (let i=0; i < length-1; i++) {
            let position2 = GiftExchange.generateNewNumber(seen, length)
            answer.push(names[position1] + " is giving a gift to " + names[position2])
            position1 = position2
        }
        answer.push(names[position1] + " is giving a gift to " + names[first])
        return answer
    }
}

// testing this page
// names = ["Bobby", "April", "Leslie", "Chris", "Ann", "Ron"]
// seen = []
// test = GiftExchange.traditionalNames(names)
// console.log(test)

module.exports = GiftExchange