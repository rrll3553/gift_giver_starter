class ExpressError extends Error { //extends the standard JS error
    constructor(message,status) { // has a single constructor function 
        super() // attaches it to an instance of this error class
        this.message = message
        this.status = status
    }
}

// if user tries to hit an end point that doesn't exist
class NotFoundError extends ExpressError {
    constructor(message = "Not Found") {
        super(message, 404)
    }
}

class BadRequestError extends ExpressError {
    constructor(message = "Bad Request") {
        super(message, 400)
    }
}

module.exports = {
    ExpressError:ExpressError, //bottom is equivalent if key == value
    NotFoundError,
    BadRequestError,
}