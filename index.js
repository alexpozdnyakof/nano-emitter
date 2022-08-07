function nanoEmitter() {
  const handlers = new Map();

  return Object.freeze({
    on: (name, callback) =>  {
      handlers.set(name, callback)
    },
    emit: (name, arg) => {
      handlers.get(name)(arg)
    }
  })
}


module.exports = nanoEmitter
