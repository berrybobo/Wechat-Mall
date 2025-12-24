import { totals } from '../utils/cart.js';

function getSelectedIndexFromRoute(route) {
  const map = [
    'pages/index/index',
    'pages/guoli/guoli',
    'pages/cart/cart',
    'pages/me/me'
  ];
  const idx = map.indexOf(route);
  return idx === -1 ? 0 : idx;
}

Component({
  data: {
    selected: 0,
    cartCount: 0,
    cartCountText: '0'
  },
  lifetimes: {
    attached() {
      this.updateSelected();
      this.updateCart();
    }
  },
  pageLifetimes: {
    show() {
      this.updateSelected();
      this.updateCart();
    }
  },
  methods: {
    updateSelected() {
      const pages = getCurrentPages();
      const current = pages[pages.length - 1];
      const route = current ? current.route : '';
      this.setData({ selected: getSelectedIndexFromRoute(route) });
    },
    updateCart() {
      const { count } = totals();
      const cartCountText = count > 99 ? '99+' : String(count || 0);
      this.setData({ cartCount: count || 0, cartCountText });
    },
    onSwitch(e) {
      const path = e.currentTarget.dataset.path;
      if (!path) return;
      wx.switchTab({ url: path });
    }
  }
});
