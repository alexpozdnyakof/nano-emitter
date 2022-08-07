const emitter = require('../index');
const chai = require('chai'), spies = require('chai-spies');;
chai.use(spies);

it('should subscribes to event', () => {
  const spy = chai.spy();
  const nano = emitter();

  nano.on('event', spy)
  nano.emit('event', 0)
  nano.emit('event', 1)

  chai.expect(spy).to.have.been.called(2)
  chai.expect(spy).to.have.been.called.with(0)
  chai.expect(spy).to.have.been.called.with(1)
})


it('should subscribes to multiple event', () => {
  const spy = chai.spy();
  const nano = emitter();

  nano.on('event', spy)
  nano.on('accident', spy)
  nano.emit('event', 0)
  nano.emit('accident', 1)

  chai.expect(spy).to.have.been.called(2)
  chai.expect(spy).to.have.been.called.with(0)
  chai.expect(spy).to.have.been.called.with(1)
})


it('should unsubscribe from event', () => {
  const spy = chai.spy();
  const nano = emitter();

  nano.on('event', spy);
  nano.off('event');
  nano.emit('event', 0);

  chai.expect(spy).not.to.have.been.called;
})