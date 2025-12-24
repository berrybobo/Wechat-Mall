import { products, salonInfo, giftingProcess } from '../../utils/data.js';
import { addToCart, getCart, totals, syncCartBadge } from '../../utils/cart.js';

function formatPrice(price) {
  return (price / 100).toFixed(2);
}

function normalizeProducts(list) {
  return (list || []).map(product => ({
    ...product,
    formattedPrice: formatPrice(product.price),
    category: product.category || '其他',
    isHot: product.isHot !== false,
    isRecommended: !!product.isRecommended,
    defaultSpec: product.specs && product.specs.length ? product.specs[0] : ''
  }));
}

const normalizedProducts = normalizeProducts(products);

function getProductsByTab(tabKey) {
  if (tabKey === 'recommend') {
    return normalizedProducts.filter(p => p.isRecommended);
  }
  return normalizedProducts.filter(p => p.isHot);
}

function getCategories(list) {
  const set = new Set();
  (list || []).forEach(p => set.add(p.category || '其他'));
  return ['全部', ...Array.from(set)];
}

function filterByCategory(category, list) {
  if (!category || category === '全部') return list;
  return (list || []).filter(p => (p.category || '其他') === category);
}

Page({
  data: {
    salonInfo: {},
    process: [],

    tabs: [
      { key: 'hot', label: '热门' },
      { key: 'recommend', label: '推荐' }
    ],
    activeTab: 'hot',

    categories: [],
    activeCategory: '全部',
    menuProducts: [],

    cartCount: 0,
    cartCountText: '0',
    cartTotal: '0.00'
  },
  onLoad() {
    this.setData({
      salonInfo,
      process: giftingProcess
    });
    this.refreshMenu();
    this.refreshCart();
  },
  onShow() {
    this.refreshCart();
  },
  refreshMenu() {
    const list = getProductsByTab(this.data.activeTab);
    const categories = getCategories(list);
    const activeCategory = categories.includes(this.data.activeCategory)
      ? this.data.activeCategory
      : categories[0];
    const menuProducts = filterByCategory(activeCategory, list);

    this.setData({ categories, activeCategory, menuProducts });
  },
  refreshCart() {
    const cart = getCart();
    const t = totals(cart);
    const cartCountText = t.count > 99 ? '99+' : String(t.count || 0);

    this.setData({
      cartCount: t.count || 0,
      cartCountText,
      cartTotal: formatPrice(t.amount || 0)
    });

    syncCartBadge();
  },
  onTabChange(e) {
    const tab = e.currentTarget.dataset.tab;
    if (!tab || tab === this.data.activeTab) return;

    this.setData({ activeTab: tab, activeCategory: '全部' });
    this.refreshMenu();
  },
  onCategoryChange(e) {
    const category = e.currentTarget.dataset.category;
    if (!category || category === this.data.activeCategory) return;

    this.setData({ activeCategory: category });
    this.refreshMenu();
  },
  goDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: '/pages/product/product?id=' + id });
  },
  addFromMenu(e) {
    const id = e.currentTarget.dataset.id;
    const product = normalizedProducts.find(p => String(p.id) === String(id));
    if (!product) return;

    addToCart(product, 1, { spec: product.defaultSpec });
    wx.showToast({ title: '已加入购物车', icon: 'success' });
    this.refreshCart();
  },
  goCart() {
    wx.switchTab({ url: '/pages/cart/cart' });
  },
  goCartCheckout() {
    wx.navigateTo({ url: '/pages/checkout/checkout?fromCart=1' });
  }
});
