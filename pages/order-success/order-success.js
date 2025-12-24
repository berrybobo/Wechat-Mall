Page({
  data: { orderId: '' },
  onLoad(query) {
    this.setData({ orderId: query.orderId || '' });
  },
  backHome() {
    if (wx.switchTab) {
      wx.switchTab({ url: '/pages/index/index' });
    } else {
      wx.reLaunch({ url: '/pages/index/index' });
    }
  }
});
