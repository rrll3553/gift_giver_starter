names = ["Bobby", "April", "Leslie", "Chris", "Ann", "Ron"]


function generateNewNumber (length) {
    randomNumber = Math.floor(Math.random() * length)
    while (seen.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * length)
    }
    seen.push(randomNumber)
    return randomNumber
}

function pairNames (names) {
    length = names.length
    answer = []
    seen = []
    while (answer.length < (names.length/2)) {
        position1 = generateNewNumber(length)
        position2 = generateNewNumber(length)
        temp = [names[position1], names[position2]]
        answer.push(temp)
    }
    return answer
}

// console.log(pairNames(names))

// generate a number first to get the first person 


function traditionalNames (names) {
    length = names.length
    answer = []
    seen = []
    position1 = generateNewNumber(length)
    first = position1
    for (i=0; i < length-1; i++) {
        position2 = generateNewNumber(length)
        answer.push(names[position1] + " is giving a gift to " + names[position2])
        position1 = position2
    }
    answer.push(names[position1] + " is giving a gift to " + names[first])
    return answer
}
console.log(traditionalNames(names))
