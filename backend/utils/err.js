//this class handles all potential errors just add msg and status in constructor
class HandErr extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;

        Error.captureStackTrace(this, this.constructor);
       
    }
}

export default HandErr;