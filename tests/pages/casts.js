import PO from '../page-object';

export default PO.build({
  visit: PO.visitable('/casts'),

  casts: PO.collection({
    itemScope: 'main .cast-card',
    item: {
      handle: PO.text('.handle'),
      content: PO.text('.content')
    }
  }),

  newCast: {
    content: PO.fillable('.content textarea'),
    submit: PO.clickable('.new-cast .create-cast')
  }
});
