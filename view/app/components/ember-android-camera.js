// app/components/ember-android-camera.js
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class Toast extends Component {
  @service('native-bridge') nativeBridge;

  @action
  openCamera() {
    this.nativeBridge.run('EmberAndroidCamera', 'openCamera', {});
  }
}
