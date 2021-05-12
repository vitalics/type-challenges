type Replace<S extends string, From extends string, To extends string> = From extends '' ? S :
  S extends `${From}${infer R}` ? `${To}${R}` :
    S extends `${infer F}${infer R2}`? `${F}${Replace<R2, From, To>}`: S
