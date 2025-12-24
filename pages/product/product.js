import { getProductById } from '../../utils/data.js';
import { addToCart, syncCartBadge } from '../../utils/cart.js';

// 格式化价格的辅助函数
function formatPrice(price) {
  return (price / 100).toFixed(2);
}

Page({
  data: { product: null, spec: '' },
  onLoad(query) {
    const p = getProductById(query.id);
    if (p) {
      p.formattedPrice = formatPrice(p.price);
    }
    this.setData({ product: p, spec: p ? p.specs[0] : '' });
  },
  onShow() {
    syncCartBadge();
  },
  onSpecChange(e) {
    const idx = e.detail.value;
    const spec = this.data.product.specs[idx];
    this.setData({ spec });
  },
  addToCart() {
    const product = this.data.product;
    if (!product) return;

    addToCart(product, 1, { spec: this.data.spec });
    syncCartBadge();
    wx.showToast({ title: '已加入购物车', icon: 'success' });
  },
  goCheckout() {
    const id = this.data.product.id;
    const spec = this.data.spec;
    wx.navigateTo({ url: `/pages/checkout/checkout?id=${id}&spec=${encodeURIComponent(spec)}` });
  }
});
