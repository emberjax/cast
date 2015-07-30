import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  handle: faker.name.firstName,
  token: faker.random.uuid
});
