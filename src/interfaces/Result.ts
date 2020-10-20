export class Result<T> {
  private is_success: boolean;
  private error: T | null;
  private data: T | null;

  public constructor(isSuccess: boolean, error?: T, value?: T) {
    if (isSuccess && error != undefined) {
      throw new Error(
        "InvalidOperation: A result cannot be successful and contain an error"
      );
    }
    if (!isSuccess && error == undefined) {
      throw new Error(
        "InvalidOperation: A failing result needs to contain an error message"
      );
    }

    this.is_success = isSuccess;
    this.error = error ?? null;
    this.data = value ?? null;

    Object.freeze(this);
  }

  public getValue(): T {
    if (!this.is_success || this.data == undefined) {
      console.log(this.error);
      throw new Error(
        "Can't get the value of an error result. Use 'errorValue' instead."
      );
    }

    return this.data;
  }

  public errorValue(): T{
    if (this.is_success || this.error == undefined) {
      console.log(this.data);
      throw new Error(
        "Can't get the error of an successful result. Use 'getValue' instead."
      );
    }
    return this.error;
  }

  public static ok<U>(value?: U): Result<U> {
    return new Result<U>(true, undefined, value);
  }

  public static fail<U>(error: U): Result<U> {
    return new Result<U>(false, error);
  }

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

  constructor(value: L) {
    this.value = value;
  }

  isErrClass(): this is ErrClass<L, A> {
    return true;
  }

  isSuccessClass(): this is SuccessClass<L, A> {
    return false;
  }
}
class SuccessClass<L, A> {
  readonly value: A;

  constructor(value: A) {
    this.value = value;
  }

  isErrClass(): this is ErrClass<L, A> {
    return false;
  }

  isSuccessClass(): this is SuccessClass<L, A> {
    return true;
  }
}

export const errClass = <L, A>(l: L): Either<L, A> => {
  return new ErrClass(l);
};

export const successClass = <L, A>(a: A): Either<L, A> => {
  return new SuccessClass<L, A>(a);
};
