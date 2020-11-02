export class Result<T> {
  private is_success: boolean;
  private error: T | null;
  private data: T | null;

  /**
   * Either a error or a value can exists for one Result class object
   * @param isSuccess defines whether the result was success full
   * @param error error for the result
   * @param value value for the result
   */
  public constructor(isSuccess: boolean, error?: T, value?: T) {
  	if (isSuccess && error != undefined) {
  		throw new Error(
  			`InvalidOperation:
          A result cannot be successful and contain an error`,
  		);
  	}
  	if (!isSuccess && error == undefined) {
  		throw new Error(
  			`InvalidOperation:
          A failing result needs to contain an error message`,
  		);
  	}

  	this.is_success = isSuccess;
  	this.error = error ?? null;
  	this.data = value ?? null;

  	Object.freeze(this);
  }

  /**
   * returns the value
   */
  public getValue(): T {
  	if (!this.is_success || this.data == undefined) {
  		throw new Error(
  			`Can't get the value of an error result.
          Use 'errorValue' instead.`,
  		);
  	}

  	return this.data;
  }

  /**
   * returns the error
   */
  public errorValue(): T {
  	if (this.is_success || this.error == undefined) {
  		throw new Error(
  			`Can't get the error of an successful result.
        Use 'getValue' instead.`,
  		);
  	}
  	return this.error;
  }

  /**
   * creates a result with success true
   * @param value the data for the result
   */
  public static ok<U>(value?: U): Result<U> {
  	return new Result<U>(true, undefined, value);
  }

  /**
   * creates a result with success false
   * @param error the error for the result
   */
  public static fail<U>(error: U): Result<U> {
  	return new Result<U>(false, error);
  }

  /**
   * Returns a ok result if all the results are success full
   * or returns the first unsuccess full result
   * @param results list of results
   */
  public static combine(results: Result<unknown>[]): Result<unknown> {
  	for (const result of results) {
  		if (!result.is_success) return result;
  	}
  	return Result.ok();
  }
}

export type Either<L, A> = ErrClass<L, A> | SuccessClass<L, A>;

class ErrClass<L, A> {
  readonly value: L;

  /**
   * Creates a Error Class with the given value
   * @param value
   */
  constructor(value: L) {
  	this.value = value;
  }

  /**
   * check if the object is of type ErrClass
   */
  isErrClass(): this is ErrClass<L, A> {
  	return true;
  }

  /**
   * check if the object is of type SuccessClass
   */
  isSuccessClass(): this is SuccessClass<L, A> {
  	return false;
  }
}
class SuccessClass<L, A> {
  readonly value: A;

  /**
   * Creates a Success Class with the given value
   * @param value
   */
  constructor(value: A) {
  	this.value = value;
  }

  /**
   * check if the object is of type ErrClass
   */
  isErrClass(): this is ErrClass<L, A> {
  	return false;
  }

  /**
   * check if the object is of type SuccessClass
   */
  isSuccessClass(): this is SuccessClass<L, A> {
  	return true;
  }
}

/**
 * creates and returns a ErrClass Object
 * @param l error value
 */
export const errClass = <L, A>(l: L): Either<L, A> => {
	return new ErrClass(l);
};

/**
 * creates and returns a SuccessClass Object
 * @param a
 */
export const successClass = <L, A>(a: A): Either<L, A> => {
	return new SuccessClass<L, A>(a);
};
