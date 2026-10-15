import StandardError from "./standardError.js"

class NotFound extends StandardError {

  constructor(message = "Page not Found"){
    super(message, 404);
  }
}

export default NotFound;