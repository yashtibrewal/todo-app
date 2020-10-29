export class GeneralError extends Error {
  /**
   * Creating a General Error
   * @param name
   * @param message
   */
  constructor(name: string, message: string) {
    super();
    this.name = name;
    this.message = message;
  }
}
