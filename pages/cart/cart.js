import { getCart, setQty, removeFromCart, totals, syncCartBadge } from '../../utils/cart.js';

Page({
  data: { items: [], total: '0.00' },
  onShow() {
    this.load();
  },
  load() {
    const items = getCart().map(it => ({
      ...it,
      id: String(it.id),
      displayPrice: (it.price / 100).toFixed(2)
    }));
    const t = totals(items);
    this.setData({ items, total: (t.amount / 100).toFixed(2) });
    syncCartBadge();
  },
  inc(e) {
    const id = String(e.currentTarget.dataset.id);
    const it = this.data.items.find(i => String(i.id) === id);
    setQty(id, (it?.qty || 0) + 1);
    this.load();
  },
  dec(e) {
    const id = String(e.currentTarget.dataset.id);
    const it = this.data.items.find(i => String(i.id) === id);
    setQty(id, (it?.qty || 0) - 1);
    this.load();
  },
  remove(e) {
    removeFromCart(String(e.currentTarget.dataset.id));
    this.load();
  },
  checkout() {
    if (!this.data.items.length) {
      wx.showToast({ title: '购物车为空', icon: 'none' });
      return;
    }
    wx.navigateTo({ url: '/pages/checkout/checkout?fromCart=1' });
  }
});
