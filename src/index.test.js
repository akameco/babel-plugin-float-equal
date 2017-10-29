// @flow
import babelTester from 'babel-plugin-tester'
import plugin from '.'

babelTester({
  plugin,
  snapshot: true,
  tests: [
    { title: 'expression', code: `0.1 + 0.2 === 0.3` },
    { title: 'oprator is not ===', code: `0.1 + 0.2 == 0.3` },
    { title: 'expression 2', code: `0.3 === 0.1 + 0.2` },
    {
      title: 'var',
      code: `
        var a = 0.1
        var b = 0.2
        a + b === 0.3
    `
    },
    {
      title: 'valiable 2',
      code: `
        var a = 0.1
        var b = 0.2
        var c = 0.3
        var x = 'hoge'
        a + b === c
        c === a + b
    `
    },
    {
      title: 'not number',
      code: `
        'hello' === 'world'
    `
    },
    {
      title: 'if statement',
      code: `
      if (0.1 + 0.2 === 0.3) {
      }
    `
    }
  ]
})
