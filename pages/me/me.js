Page({
  viewOrders() { wx.showToast({ title: "示例：订单列表", icon: "none" }); },
  manageAddress() { wx.showToast({ title: "示例：地址管理", icon: "none" }); },
  contact() { wx.showModal({ title: "联系客服", content: "请在客服对话配置后使用", showCancel: false }); },
  about() { wx.showToast({ title: "果礼商城 v1.0", icon: "none" }); }
});
