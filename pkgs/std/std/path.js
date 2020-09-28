class Path {
  constructor (...segments) {
    this.segments = segments
  }

  toNative () {
    if ($.is_nix) {
      return this.segments.join('/')
    } else {
      return this.segments.join('\\')
    }
  }
}

export { Path }
export default Path
