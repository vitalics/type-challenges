type MyOmit<T, K extends keyof K> = { [P in Exclude<keyof T, K>]: T[P] }
