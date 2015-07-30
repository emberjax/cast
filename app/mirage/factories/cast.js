import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  content: function() { return faker.lorem.paragraph(2); },
  createdAt: faker.date.recent
});
