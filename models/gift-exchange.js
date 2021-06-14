const gifts = {
    laptop: [],
    phone: [],
    desktop: [],
}

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
        let length = names.length
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


    static async tallyGifts() {
        const giftResults = {
            laptop: gifts.laptop.length,
            phone: gifts.phone.length,
            desktop: gifts.desktop.length,
        }
        return giftResults
    }

    static async recordGifts(gift, user) {
        if (gifts[gift]) {
            if (! gifts[gift].includes(user)) {
                gifts[gift].push(user)
            }
        return GiftExchange.tallyGifts()
    }
}}

// names = ["Bobby", "April", "Leslie", "Chris", "Ann", "Ron"]
// seen = []
// test = GiftExchange.traditionalNames(names)
// console.log(test)

module.exports = GiftExchange