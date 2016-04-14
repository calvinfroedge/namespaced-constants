# Namespaced Constants

This is a simple library that allows you to do this:

```
const FOO = consts('FOO')('BAR', 'BAZ', 'BOP')

FOO.BAR == 'FOO_BAR' //true
```

It avoids needing to...

```
const FOO_BAR = 'FOO_BAR'
const FOO_BAZ = 'FOO_BAZ'
const FOO_BOP = 'FOO_BOP'
```

...Which becomes quite cumbersome with many constants!

Interally, `Object.freeze` is used, so for all intents and purposes, you can think of objects created with `consts` as a constant.
