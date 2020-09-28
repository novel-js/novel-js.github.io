class Emitter {
  constructor () {
    this.events = {
      // Name: Function
    }
  }

  emit (eventName, ...args) {
    if (this.events[eventName] !== undefined) {
      this.events[eventName](...args)
    }
    return this
  }

  on (eventName, callback) {
    this.events[eventName] = callback
    return this
  }
}
