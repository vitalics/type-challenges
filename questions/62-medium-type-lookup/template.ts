type LookUp<U extends { type: any }, T extends U['type']> = U extends { type: T } ? U : never
