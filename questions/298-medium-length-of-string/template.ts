type LengthOfString1<S extends string, Arr extends string[] = []> = S extends `${infer First}${infer Next}` ? LengthOfString1<Next, [...Arr, First]> : Arr['length']
