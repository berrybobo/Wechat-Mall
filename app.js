import { syncCartBadge } from './utils/cart.js';

App({
  onLaunch() {
    syncCartBadge();
  },
  globalData: {
    cart: []
  }
});
