type DeepReadonly<T> = { readonly [P in keyof T]: T[P] extends Function | any[] ? T[P] : DeepReadonly<T[P]> }
