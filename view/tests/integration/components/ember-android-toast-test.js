import { module, test } from 'qunit';
import { setupRenderingTest } from 'view/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ember-android-toast', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Toast />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Toast>
        template block text
      </Toast>
    `);

    assert.dom().hasText('template block text');
  });
});
