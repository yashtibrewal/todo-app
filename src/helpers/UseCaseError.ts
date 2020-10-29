export class UseCaseError extends Error {
	/**
   *
   * @param name the name for the UseCaseError
   * @param message custom message for the UseCaseError
   */
	constructor(name: string, message: string) {
		super();
		this.name = name;
		this.message = message;
	}
}
