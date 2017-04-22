const h = require('izi/vanilla-h').proxy
const method = require('./method')

module.exports = props => {
  const input = h.input(props)
  const elem = h.div(h.label([ h.div(props.name), input ]))

  method.interactive(elem, input)
  method.hasValue(elem, input)
  elem.inputElem = input

  return elem
}
