type ReplaceAll<S extends string, From extends string, To extends string> =
  S extends `${infer F}${From}${infer E}` ? From extends '' ? S : `${F}${ReplaceAll<`${To}${E}`, From, To>}` : S
