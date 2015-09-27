import Ember from 'ember';

export default function(AppRouter, { container, registry }) {
  const RoutingService = Ember.__loader.require('ember-routing/services/routing').default;
  const Route = Ember.__loader.require('ember-routing/system/route').default;
  const namespace = { LOG_TRANSITIONS_INTERNAL: true, LOG_TRANSITIONS: true };

  registry.register('application:main', namespace, { instantiate: false });
  registry.register('router:main', AppRouter);
  registry.injection('router:main', 'namespace', 'application:main');

  registry.register('route:basic', Route);
  registry.injection('route', 'router', 'router:main');

  registry.register('service:-routing', RoutingService);
  registry.injection('service:-routing', 'router', 'router:main');

  const router = container.lookup('router:main');
  router.startRouting(registry.resolver.moduleBasedResolver);
}
