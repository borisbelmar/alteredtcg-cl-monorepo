const ERROR_MESSAGES: Record<number, string> = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict",
  500: "Internal Server Error",
}

export default class ControllerError extends Error {
  public status: number = 500

  constructor(status: number, message?: string) {
    super(message || ERROR_MESSAGES[status])
    this.name = "ControllerError"
    this.status = status
  }
}