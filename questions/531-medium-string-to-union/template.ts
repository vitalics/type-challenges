type StringToUnion<T extends string, A extends string[] = []> = T extends `${infer First}${infer Rest}` ? StringToUnion<Rest, [...A, First]> : A[number]
