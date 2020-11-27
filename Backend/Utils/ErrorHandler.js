class ErrorHandler extends Error {
    constructor(message, stateCode) {
        super(message)
        this.stateCode = stateCode
        this.status = `${stateCode}`.startsWith('4') ? 'fail' : 'error'

        Error.captureStackTrace(this, this.constructor)
    }


}


module.exports = ErrorHandler