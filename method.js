// t = target element
// s = source element (default to target)

const m = module.exports = {
  disable: (t, s=t) => (t.disable = () => s.disabled = true, t),
  enable: (t, s=t) => (t.enable = () => s.disabled = false, t),
  set: (t, s=t) => (t.set = value => s.value = value, t),
  get: (t, s=t) => (t.get = () => s.value, t),
  focus: (t, s=t) => (t.focus = () => s.focus(), t),
  select: (t, s=t) => (t.select = () => s.select(), t),
  hasValue: (t, s) => m.set(m.get(t, s)),
  interactive: (t, s) => m.focus(m.select(m.disable(m.enable(t, s)))),
}