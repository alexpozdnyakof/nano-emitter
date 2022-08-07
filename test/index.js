const emitter = require('../index');
const chai = require('chai'), spies = require('chai-spies');;
chai.use(spies);

it('should subscribes to event', () => {
  const spy = chai.spy();
  const nano = emitter();

  nano.on('event', spy)
  nano.emit('event', 13)

  chai.expect(spy).to.have.been.called.with(13)
})