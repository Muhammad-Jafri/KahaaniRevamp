//handles all async errors
export const handleAsyncErr = (myFunc) => {
    return (req, res, next) =>{
        myFunc(req,res,next).catch(e => next(e));
    }
}


