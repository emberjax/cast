import Ember from 'ember';

const PromisableObjectProxy = Ember.ObjectProxy.extend(Ember.PromiseProxyMixin);

export default function(...args) {
  const fn = args.pop();
  const dependentKeys = args.slice();

  return Ember.computed(...dependentKeys, function() {
    const promise = fn.apply(this);

    return PromisableObjectProxy.create({
      promise: Ember.RSVP.resolve(promise)
    });
  });
}
