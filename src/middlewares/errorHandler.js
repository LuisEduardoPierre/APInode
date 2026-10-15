import mongoose from 'mongoose'
import StandardError from '../errors/standardError.js';
import IncorrectReq from '../errors/incorrectReq.js'
import ValidationError from '../errors/validationError.js'

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next){
  console.error(err)
  if (err instanceof mongoose.Error.CastError){

    new IncorrectReq(err.message).sendResponse(res);

  } else if (err instanceof mongoose.Error.ValidationError) {

    new ValidationError(err).sendResponse(res);

  } else {

    new StandardError(err.message).sendResponse(res);

  }
}

export default errorHandler;