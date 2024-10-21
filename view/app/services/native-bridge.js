import Service from '@ember/service';

export default class NativeBridgeService extends Service {
  run(className, methodName, params = {}) {
    if (!className || !methodName) return;
    if (window.nativeBridge && typeof window.nativeBridge.run === 'function') {
      try {
        window.nativeBridge.run(className, methodName, JSON.stringify(params));
      } catch (error) {
        console.error('Error calling native bridge:', error);
      }
    } else {
      console.warn('Native bridge is not available.');
    }
  }
}
