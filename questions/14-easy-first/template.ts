type First<T extends any[]> = T extends [infer A0, ...infer Rest] ? A0 : never
