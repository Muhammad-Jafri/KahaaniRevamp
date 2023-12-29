// will handle all sync error
const basicErr = (error, req, res, next) =>{
    !error.statusCode ? error.statusCode = 500 : error.statusCode = error.statusCode;
    !error.message ? error.message = "err from basic err file" : error.message = error.message;
    
    res.status(error.statusCode).json({
            success: false,
            message: error.message,
            stack : error.stack
          });
}

export default basicErr;