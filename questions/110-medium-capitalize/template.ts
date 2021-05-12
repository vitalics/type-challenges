type Symbols = { 'a': 'A'; 'b': 'B'; 'c': 'C'; 'd': 'D'; 'e': 'E'; 'f': 'F'; 'g': 'G'; 'h': 'H'; 'i': 'I'; 'j': 'J'; 'k': 'K'; 'l': 'L'; 'm': 'M'; 'n': 'N'; 'o': 'O'; 'p': 'P'; 'q': 'Q'; 'r': 'R'; 's': 'S'; 't': 'T'; 'u': 'U'; 'v': 'V'; 'w': 'W'; 'x': 'X'; 'y': 'Y'; 'z': 'Z' }
type Capitalize1<S extends string> = S extends `${infer F}${infer R}` ? F extends keyof Symbols ? `${Symbols[F]}${R}`: `${F}${R}`: S
type B = Capitalize1<'hello world'>
