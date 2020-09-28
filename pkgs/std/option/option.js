class Option {
  constructor (inner) {
    this.inner = inner
    this.isSome = false
    this.isNone = false
  }

  isSome () {
    return this.isSome
  }

  isNone () {
    return this.isNone
  }
}
export { Option }
export default { Option }
