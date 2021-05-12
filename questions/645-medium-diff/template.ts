type Diff<O, O1> = {
  [Key in Exclude<keyof O | keyof O1, keyof O & keyof O1>]: Key extends keyof O ? O[Key] : Key extends keyof O1 ? O1[Key] : never;
}
