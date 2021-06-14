
// our poll
const voting = {
    peperroni: [],
    cheese: [],
    hawaiian: [],
}


class Voting {
    static async tallyVotes() {
    // will calculate final results and return those results
        const votingResults = {
            peperroni: voting.peperroni.length,
            cheese: voting.cheese.length,
            hawaiian: voting.hawaiian.length,
        }
        return votingResults
    }


    static async recordVotes(pizzaName, user) {
    // will increase the tally for that pizza if that user hasn't voted for that pizza before
    if (voting[pizzaName]) {
        if (!voting[pizzaName].includes(user)) {
            voting[pizzaName].push(user)
        }
    }
    return Voting.tallyVotes()
    }
}

module.exports = Voting