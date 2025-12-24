function buildCartKey(productId, spec = '') {
  const id = String(productId);
  const safeSpec = String(spec || '').trim();
  return safeSpec ? `${id}::${safeSpec}` : id;
}

export function getCart() {
  try {
    const cart = wx.getStorageSync('cart');
    const list = Array.isArray(cart) ? cart : [];
    return list
      .map(it => {
        const productId = it?.productId ?? it?.id;
        const spec = it?.spec ? String(it.spec) : '';
        const key = it?.id ? String(it.id) : buildCartKey(productId, spec);
        return {
          ...it,
          id: key,
          productId: productId != null ? String(productId) : '',
          spec,
          qty: Number(it?.qty || 0)
        };
      })
      .filter(it => it.id && it.qty > 0);
  } catch (e) {
    return [];
  }
}

export function saveCart(cart) {
  try { wx.setStorageSync('cart', cart || []); } catch (e) {}
}

export function addToCart(product, qty = 1, options = {}) {
  if (!product || product.id == null) return getCart();

  const spec = options?.spec ? String(options.spec) : '';
  const id = buildCartKey(product.id, spec);
  const cart = getCart();
  const i = cart.findIndex(it => String(it.id) === id);

  if (i > -1) {
    cart[i].qty += qty;
  } else {
    cart.push({
      id,
      productId: String(product.id),
      spec,
      title: product.title,
      price: product.price, // cents
      cover: product.cover,
      qty: qty > 0 ? qty : 1
    });
  }

  saveCart(cart);
  return cart;
}

export function setQty(id, qty) {
  const key = String(id);
  const cart = getCart();
  const i = cart.findIndex(it => String(it.id) === key);
  if (i > -1) {
    if (qty <= 0) cart.splice(i, 1);
    else cart[i].qty = qty;
    saveCart(cart);
  }
  return cart;
}

export function removeFromCart(id) {
  const key = String(id);
  const cart = getCart().filter(it => String(it.id) !== key);
  saveCart(cart);
  return cart;
}

export function clearCart() { saveCart([]); }

export function totals(cart = getCart()) {
  const list = Array.isArray(cart) ? cart : [];
  const count = list.reduce((s, it) => s + (it.qty || 0), 0);
  const amount = list.reduce((s, it) => s + (it.price || 0) * (it.qty || 0), 0);
  return { count, amount };
}

export function syncCartBadge() {
  try {
    const canSet = typeof wx.setTabBarBadge === 'function';
    if (!canSet) return;

    const { count } = totals();
    const text = String(Math.min(count, 99));

    if (count > 0) {
      wx.setTabBarBadge({ index: 1, text });
    } else if (typeof wx.removeTabBarBadge === 'function') {
      wx.removeTabBarBadge({ index: 1 });
    }
  } catch (e) {}
}
