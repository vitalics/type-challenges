type CamelCase1<S extends string> = S extends `${infer S1}-${infer S2}`
  ? S2 extends Capitalize<S2>
    ? `${S1}-${CamelCase1<S2>}`
    : `${S1}${CamelCase1<Capitalize<S2>>}`
  : S
