import { module, test } from 'qunit';
import { setupTest } from 'view/tests/helpers';

module('Unit | Service | native-bridge', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:native-bridge');
    assert.ok(service);
  });
});
