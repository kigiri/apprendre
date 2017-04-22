const h = require('izi/vanilla-h')
const { ul, b } = h.proxy
const li = h('li', {
  style: {
    marginLeft: '2em',
  }
})
const p = h('p', {
  style: {
    margin: '1em 0',
  }
})

const parseLine = str => {
  if (str.indexOf('\n  - ') >= 0) {
    const [ title, ...res ] = str.split('\n  - ')
    return p([
      b(title),
      ul(res.map(li)),
    ])
  }
  return p(str)
}

module.exports = raw => raw
  .split('\n\n')
  .map(parseLine)