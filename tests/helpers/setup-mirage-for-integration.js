//http://www.ember-cli-mirage.com/docs/v0.1.x/manually-starting-mirage/
import mirageInitializer from '../../initializers/ember-cli-mirage';

export default function setupMirage(container) {
  mirageInitializer.initialize(container);
}
