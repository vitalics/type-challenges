type AppendToObject<T, U extends string, V> = {
  [P in keyof T | U]: P extends U ? V : P extends keyof T ? T[P] : never;
}
