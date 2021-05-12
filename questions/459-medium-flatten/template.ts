type Flatten<T extends any[]> = T extends [infer A0, ...infer Rest] ? A0 extends any[] ? [...Flatten<A0>, ...Flatten<Rest>] : [A0, ...Flatten<Rest>] : []
type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
