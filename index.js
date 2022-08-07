function nanoEmitter() {
  const handlers = new Map();

  return Object.freeze({
    on: (name, callback) =>  {
      handlers.set(name, callback)
      return this;
    },
    emit: (name, arg) => {
      const fn = handlers.get(name)
      if(fn) {
        fn(arg);
      }
      return this;
    },
    off: (name) => {
      handlers.delete(name);
      return this;
    }
  })
}


module.exports = nanoEmitter
