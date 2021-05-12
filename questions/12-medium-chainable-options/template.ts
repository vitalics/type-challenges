type Chainable<T = {}> = {
  option<K extends string, V extends any>(key: K, value: V): Chainable<T & { [P in K]: V }>
  get(): T
}
