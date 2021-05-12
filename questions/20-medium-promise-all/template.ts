type InferPromise<T> = T extends Promise<infer A> ? A : T
declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{ [P in keyof T]: InferPromise<T[P]> }>
