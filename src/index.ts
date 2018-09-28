type GetIn<TValue, TProp> =
  // [never] is used because otherwise it distributes over nothing
  // https://github.com/Microsoft/TypeScript/issues/23182#issuecomment-379093106
  [TProp] extends [never] // Is the property not specified?
    ? TValue
    : (TValue extends undefined
        ? undefined
        : (TProp extends keyof TValue // property exists in the value
            ? ({ [K in TProp]: undefined } extends TValue // property is optional
                ? TValue[TProp] | undefined
                : TValue[TProp])
            : undefined));

type NoUndefined<T> = T extends undefined ? never : T;

export function getIn<
  TTarget,
  TN1 extends NoUndefined<TTarget[T1]>,
  TN2 extends NoUndefined<TN1[T2]>,
  TN3 extends NoUndefined<TN2[T3]>,
  TN4 extends NoUndefined<TN3[T4]>,
  TN5 extends NoUndefined<TN4[T5]>,
  TN6 extends NoUndefined<TN5[T6]>,
  TN7 extends NoUndefined<TN6[T7]>,
  TN8 extends NoUndefined<TN7[T8]>,
  T1 extends keyof TTarget = never,
  T2 extends keyof TN1 = never,
  T3 extends keyof TN2 = never,
  T4 extends keyof TN3 = never,
  T5 extends keyof TN4 = never,
  T6 extends keyof TN5 = never,
  T7 extends keyof TN6 = never,
  T8 extends keyof TN7 = never,
  T9 extends keyof TN8 = never,
  TResult = GetIn<
    GetIn<
      GetIn<
        GetIn<
          GetIn<GetIn<GetIn<GetIn<GetIn<TTarget, T1>, T2>, T3>, T4>, T5>,
          T6
        >,
        T7
      >,
      T8
    >,
    T9
  >,
  TForceResult extends TResult = TResult
>(
  target: TTarget,
  ...path: [T1?, T2?, T3?, T4?, T5?, T6?, T7?, T8?, T9?]
): TForceResult;
export function getIn(target: any): unknown {
  for (let i = 1; i < arguments.length; ++i) {
    const prop = arguments[i];
    if (prop == null || target == null) {
      return undefined;
    }
    target = target[arguments[i]];
  }
  return target;
}

export function getInWithDefault<
  TTarget,
  TN1 extends NoUndefined<TTarget[T1]>,
  TN2 extends NoUndefined<TN1[T2]>,
  TN3 extends NoUndefined<TN2[T3]>,
  TN4 extends NoUndefined<TN3[T4]>,
  TN5 extends NoUndefined<TN4[T5]>,
  TN6 extends NoUndefined<TN5[T6]>,
  TN7 extends NoUndefined<TN6[T7]>,
  TN8 extends NoUndefined<TN7[T8]>,
  T1 extends keyof TTarget = never,
  T2 extends keyof TN1 = never,
  T3 extends keyof TN2 = never,
  T4 extends keyof TN3 = never,
  T5 extends keyof TN4 = never,
  T6 extends keyof TN5 = never,
  T7 extends keyof TN6 = never,
  T8 extends keyof TN7 = never,
  T9 extends keyof TN8 = never,
  TResult = GetIn<
    GetIn<
      GetIn<
        GetIn<
          GetIn<GetIn<GetIn<GetIn<GetIn<TTarget, T1>, T2>, T3>, T4>, T5>,
          T6
        >,
        T7
      >,
      T8
    >,
    T9
  >,
  TForceResult extends TResult = TResult
>(
  target: TTarget,
  defaultValue: TForceResult,
  ...path: [T1?, T2?, T3?, T4?, T5?, T6?, T7?, T8?, T9?]
): TForceResult;
export function getInWithDefault(target: any, defaultValue: unknown): unknown {
  for (let i = 1; i < arguments.length; ++i) {
    const prop = arguments[i];
    if (prop == null || target == null) {
      return defaultValue;
    }
    target = target[arguments[i]];
  }
  return target;
}
