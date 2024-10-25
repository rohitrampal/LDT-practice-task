class ApiResponse{
    constructor( statusCode, data, message='successfully' ){
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400;
    }
}

module.exports = ApiResponse