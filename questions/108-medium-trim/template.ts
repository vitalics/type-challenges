// https://www.typescriptlang.org/play?#code/PQKgUABBCMAMAcEC0EAqAnAlgW0spBheARgJ4QCCAdgC4AWA9leQGICuEAFAAICGtAMzYBKCAGJsAUwAmmNtnE1J2AA4AbXkqRrMS9LzV48YkxACKbSQGcamJkagBJVWuWTaEAAYYcAHlQAfJ4QAO50mADGdBA0vADW1hD8EJIAHrwRNBA2WFQA5jGkKpJJVNIQ6JI0bOhUVkkQVJIh2TS5BSG60fQlYbrWKhklAugMCsQM9Cll9ZXYDABuMgB0DhAsDOgp6S6Sa54HNFZ4NEUlbTgyEAC8aFjYvgDkUAASkmpqDBAA6ptq5RBHgEIMBgNtipkrjQvsQSo83h8vr90P9HngDp41sCAGqYZoQJgQADiuhebGIAC4IHQaDQVFYKaCjlFlgArKzLTZ5YBweBgEDAMBC0AQAD64olkolEAAmgwahAAMIMaQlN6VMVSrWiiACsCnYp3PwAZW2ShmrXawNuprS5uk9U8ABIAN7PZ4AH0BAB0qJ6fTRHgBfV2YKgCSRbAAyQeCAH4jQ8o8CqbbUvbHaHw5GIDHXe6IF7Hr7-cXA7GEz4kymIMaANzCkCa7WStDWLKK3hWRItqW6wU4FSbLIuiAAUQAjmwDAAacepCFZIMQEZjQHcA2SJBRAyufLWYBsWxqKxo-VnCARLuJW4AbTwY4Xkkyvkn07U-nuTxyQLnjx-AQBDOD5Pi+b4GJ+fjPABf4AUBIGLq+U4QVWTxQOhMGAnBwFQI+iHgR+qH-m06G-lhbRAvBuGgTQSHvpBDzPOhlrMYCQHkeglE4fO+HIYRX5MRAvrelkAgMDCvBbCJZGPGJEmcYBwEALpCo2za9jq7DoD0WzGko9Lqb2-ZgKAeDAsadCSSUpDylsVgMGoR52HUVI0nSDJMlYLLspy6DcrywD8FYISRmZEC4vi9mObYTAMtStL0oywDMnQbIclyPIIMAUVObFYUALKbCUiqWR87h5NYrkJR5yVealPlcvygpgEAA
type Trim<S extends string> = S extends `${' ' | '\n' | '\t'}${infer L}` ? Trim<L> : S extends `${infer L}${' ' | '\n' | '\t'}` ? Trim<L> : S
