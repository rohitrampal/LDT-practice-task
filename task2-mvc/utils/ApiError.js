class ApiError extends Error{
    constructor( statusCode, message='error encounter', error=[], stack='' ){
        super(message);
        this.statusCode = statusCode;
        this.errors = error;
        this.data = null;
        this.success = false;
        if(stack){
            this.stack = stack;
        }
        else{
            Error.captureStackTrace(this, this.constructor);
        }
    }

}

module.exports = ApiError