// @flow
// import blog from 'babel-log'

const CREATED = Symbol('CREATED')

export default ({ template } /*: {template: Function} */) => {
  const builder = template(`
  (typeof LEFT === 'number' && typeof RIGHT === 'number') ? Math.abs(LEFT - RIGHT) < Number.EPSILON : LEFT === RIGHT
  `)

  return {
    name: 'float-equal',
    visitor: {
      BinaryExpression(path /*: Object */) {
        if (path[CREATED]) {
          return
        }

        if (path.get('operator').node !== '===') {
          return
        }

        const { node: left } = path.get('left')
        const { node: right } = path.get('right')

        const ast = builder({ LEFT: left, RIGHT: right })

        path[CREATED] = true
        path.replaceWith(ast)
        path.skip()
      }
    }
  }
}
