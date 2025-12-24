import { products, salonInfo, giftingProcess } from "../../utils/data.js";

function formatPrice(price) {
  return (price / 100).toFixed(2);
}

const productsWithFormattedPrice = products.map(product => ({
  ...product,
  formattedPrice: formatPrice(product.price)
}));

Page({
  data: {
    products: [],
    salonInfo: {},
    process: []
  },
  onLoad() {
    this.setData({
      products: productsWithFormattedPrice,
      salonInfo,
      process: giftingProcess
    });
  },
  goDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/product/product?id=${id}` });
  }
});
