type Last<T extends any[]> = T extends [...infer A0, infer Last] ? Last : never
