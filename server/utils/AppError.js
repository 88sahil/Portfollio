class AppError extends Error{
    constructor(Message,statuscode){
        super(Message)
        this.statuscode = statuscode
        this.status = `${this.statuscode}`.startsWith('4')?"fail":"error"
        this.isOperational = true
        Error.captureStackTrace(this,this.constructor)
    }
}
module.exports = AppError