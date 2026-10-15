import IncorrectReq from './incorrectReq.js'

class ValidationError extends IncorrectReq {
  constructor(err) {
    const errorMessage = Object.values(err.errors).map(err => err.message).join("; ");
    super(`The following errors ocurred: ${errorMessage}`);
  }
}

export default ValidationError;