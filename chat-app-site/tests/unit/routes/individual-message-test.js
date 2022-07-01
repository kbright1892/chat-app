import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | individual-message', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:individual-message');
    assert.ok(route);
  });
});
