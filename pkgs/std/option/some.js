class Some extends Option {
  constructor (inner) {
    super(inner)
    this.is_some = true
  }

  match (obj) {
    obj.some(this.inner)
  }

  unwrap () {
    return this.inner
  }
}
export { Some }
export default { Some }
