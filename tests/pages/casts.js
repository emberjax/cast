import PO from '../page-object';

export default PO.build({
  visit: PO.visitable('/casts'),

  casts: PO.collection({
    itemScope: 'main .cast-card',
    item: {
      content: PO.text('.content')
    }
  })
});
