import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  token: faker.random.uuid
});
