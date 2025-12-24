import { getProductById, salonInfo } from '../../utils/data.js';
import { getCart, totals, clearCart, syncCartBadge } from '../../utils/cart.js';

function formatPrice(price) {
  return (price / 100).toFixed(2);
}

function formatYMD(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function getTodayPlus(days = 0) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return formatYMD(d);
}

Page({
  data: {
    mode: 'single',
    product: null,
    spec: '',
    cartItems: [],
    formattedPrice: '0.00',
    formattedTotal: '0.00',
    deliveryDate: '',
    startDate: getTodayPlus(0),
    salonInfo
  },
  onLoad(query) {
    if (query && query.id) {
      const p = getProductById(query.id);
      const spec = query.spec ? decodeURIComponent(query.spec) : (p ? p.specs[0] : '');
      const formattedPrice = p ? formatPrice(p.price) : '0.00';
      this.setData({ mode: 'single', product: p, spec, formattedPrice });
    } else {
      const items = getCart().map(it => ({
        ...it,
        displayPrice: formatPrice(it.price)
      }));

      if (!items.length) {
        wx.showToast({ title: '购物车为空', icon: 'none' });
        if (wx.switchTab) wx.switchTab({ url: '/pages/cart/cart' });
        return;
      }

      const t = totals(items);
      this.setData({ mode: 'cart', cartItems: items, formattedTotal: formatPrice(t.amount) });
    }

    syncCartBadge();
  },
  onDateChange(e) {
    this.setData({ deliveryDate: e.detail.value });
  },
  submitOrder(e) {
    const form = e.detail.value;

    if (!form.recipient || !form.phone || !form.address) {
      wx.showToast({ title: '请完善收礼信息', icon: 'none' });
      return;
    }

    if (!this.data.deliveryDate) {
      wx.showToast({ title: '请选择送达日期', icon: 'none' });
      return;
    }

    if (this.data.mode === 'single' && !this.data.product) {
      wx.showToast({ title: '商品信息异常', icon: 'none' });
      return;
    }

    if (this.data.mode === 'cart' && !this.data.cartItems.length) {
      wx.showToast({ title: '购物车为空', icon: 'none' });
      return;
    }

    wx.showLoading({ title: '创建订单...' });

    setTimeout(() => {
      wx.hideLoading();
      wx.showToast({ title: '支付成功', icon: 'success' });

      const orderId = Date.now();
      if (this.data.mode === 'cart') {
        clearCart();
        syncCartBadge();
      }

      wx.navigateTo({ url: `/pages/order-success/order-success?orderId=${orderId}` });
    }, 800);
  }
});
