// app/components/toast.js
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

window.test = this.test.bind(this);

export default class EmberAndroidToast extends Component {
  @service('native-bridge') nativeBridge;

  @action
  triggerToast() {
    this.nativeBridge.run('EmberAndroidToast', 'showToast', {
      message: 'Hello from SharinPix',
    });
  }
}
