import StandardError from './standardError.js'

class IncorrectReq extends StandardError  {
  constructor(message = "One or more data are incorrect"){
    super(message, 400);
  }
}

export default IncorrectReq;