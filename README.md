# Getting

A package that implements API similar to [lodash.get](https://lodash.com/docs/4.17.5#get) but in a type-safe manner up to 9
levels deep.

> Artificial limitation of 9 levels is connected to TypeScript not having recursive
conditional types.

## Usage

```typescript
import { getIn, getInWithDefault } from "getting";

type ObjectWithAnOptionalField = {
  0?: {
    1: {
      2: string
    }
  }
};

const obj1: ObjectWithAnOptionalField = {
  0: {
    1: {
      2: "foo"
    }
  }
};
console.log(getIn(obj1, 0, 1, 2)); // "foo"

const obj2: ObjectWithAnOptionalField = {};
console.log(getIn(obj1, 0, 1, 2)); // undefined
console.log(getInWithDefault(obj1, "bar", 0, 1, 2)); // "bar"
```

It is important to note that you can not specify properties at any level of nesting
that are not declared in the type.

Additionally default value is checked for being the same type as the target property.

## License

The MIT License (MIT)

Copyright (c) 2018 Dmitriy Kubyshkin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
