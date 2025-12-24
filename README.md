# 蔓悦果礼 - 微信小程序

一个结合美甲服务与水果礼盒配送的创新微信小程序，为用户提供一站式的指尖之美与甜蜜体验。

## 项目介绍

"蔓悦果礼"是一款专为美甲门店打造的小程序，将美甲服务与水果礼盒配送相结合。用户在做美甲的同时，可以便捷地购买搭配好的水果礼盒，作为给自己或亲友的甜蜜礼物。

## 功能特性

### 1. 首页展示
- 店铺信息展示（名称、标语、特色服务）
- 送礼流程介绍
- 产品分类浏览（热门、推荐）
- 产品列表展示（带分类筛选）
- 购物车入口与数量提示

### 2. 果礼专题页
- 双模式切换（点单/门店）
- 产品分类浏览（热门、推荐）
- 产品列表展示（带分类筛选）
- 购物车入口与数量提示

### 3. 产品详情
- 产品详细信息展示（标题、价格、描述、规格）
- 产品标签与特色介绍
- 产品搭配建议（美甲色系、水果组合）
- 服务保障说明

### 4. 购物车
- 购物车商品管理（添加、删除、修改数量）
- 购物车商品总价计算
- 购物车数量与总价展示
- 清空购物车功能

### 5. 订单流程
- 订单确认（地址、商品、金额）
- 订单提交
- 订单成功提示

### 6. 个人中心
- 用户信息展示
- 订单管理入口

### 7. 自定义TabBar
- 四标签导航（首页、果礼、购物车、我的）
- 购物车数量实时显示
- 页面切换动画效果

## 目录结构

```
wx小程序/
├── .gitignore                # Git忽略文件配置
├── AGENTS.md                 # 代理相关文档
├── README.md                 # 项目说明文档
├── app.js                    # 小程序入口文件
├── app.json                  # 小程序全局配置
├── app.wxss                  # 小程序全局样式
├── custom-tab-bar/           # 自定义TabBar目录
│   ├── index.js             # 自定义TabBar逻辑
│   ├── index.json           # 自定义TabBar配置
│   ├── index.wxml           # 自定义TabBar模板
│   └── index.wxss           # 自定义TabBar样式
├── images/                   # 图片资源目录
│   ├── tabbar/              # TabBar图片资源
│   └── c4e2b3c475c786a3f9e22d15e00fe16e.png # 其他图片资源
├── pages/                    # 页面目录
│   ├── index/               # 首页
│   ├── product/             # 产品详情页
│   ├── checkout/            # 结账页
│   ├── order-success/       # 订单成功页
│   ├── cart/                # 购物车页
│   ├── me/                  # 个人中心页
│   └── guoli/               # 果礼专题页
├── project.config.json       # 项目配置文件
├── project.private.config.json # 项目私有配置文件
├── sitemap.json             # 站点地图
└── utils/                   # 工具函数目录
    ├── cart.js              # 购物车相关功能
    └── data.js              # 模拟数据
```

## 技术栈

- 微信小程序原生框架
- JavaScript
- WXML (微信小程序模板语言)
- WXSS (微信小程序样式语言)

## 项目配置

### 小程序配置 (app.json)
- 页面路径配置（包含首页、果礼、产品详情、结账、订单成功、购物车、个人中心等页面）
- 窗口样式配置（导航栏标题、背景色、文字颜色等）
- TabBar 配置
  - 四标签导航（首页、果礼、购物车、我的）
  - 自定义TabBar功能启用
  - 图标与文字样式配置

### 数据管理
- 模拟数据存储在 `utils/data.js`
- 购物车数据使用微信小程序本地存储
- 自定义TabBar数据管理（购物车数量实时更新）

## 使用说明

1. **导航使用**：使用底部自定义TabBar在首页、果礼、购物车和我的页面之间切换。
2. **首页浏览**：进入小程序后，您可以浏览店铺信息、送礼流程和产品列表。
3. **果礼页面**：点击TabBar的"果礼"标签，在点单和门店模式之间切换，浏览和购买产品。
4. **产品筛选**：在首页或果礼页面，使用顶部标签（热门/推荐）和分类筛选产品。
5. **查看详情**：点击产品卡片查看产品详细信息，包括描述、规格和搭配建议。
6. **加入购物车**：在产品列表或详情页点击加入购物车按钮，购物车数量会实时显示在TabBar上。
7. **购物车管理**：点击底部TabBar的购物车图标，查看和管理购物车中的商品（修改数量、删除商品等）。
8. **提交订单**：确认购物车商品后，点击结算按钮进入订单确认页面，提交订单后会显示订单成功提示。

## 核心功能实现

### 1. 购物车功能
```javascript
// 核心购物车函数示例
export function addToCart(product, qty = 1, options = {}) {
  // 实现加入购物车逻辑
}

export function getCart() {
  // 获取购物车数据
}

export function setQty(id, qty) {
  // 修改购物车商品数量
}

export function removeFromCart(id) {
  // 从购物车移除商品
}

export function totals(cart = getCart()) {
  // 计算购物车总价和数量
  const count = cart.reduce((s, it) => s + (it.qty || 0), 0);
  const amount = cart.reduce((s, it) => s + (it.price || 0) * (it.qty || 0), 0);
  return { count, amount };
}
```

### 2. 产品数据管理
```javascript
// 产品数据示例
export const products = [
  {
    id: 1,
    category: "招牌热卖",
    isHot: true,
    title: "指间蜜桃礼盒",
    price: 26800, // 单位：分
    // ...其他属性
  }
];

export function getProductById(id) {
  // 根据ID获取产品
}
```

### 3. 自定义TabBar
```javascript
// 自定义TabBar组件示例
import { totals } from '../utils/cart.js';

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
      // 更新选中状态
    },
    updateCart() {
      // 更新购物车数量
      const { count } = totals();
      const cartCountText = count > 99 ? '99+' : String(count || 0);
      this.setData({ cartCount: count || 0, cartCountText });
    },
    onSwitch(e) {
      // 切换TabBar
    }
  }
});
```

## 开发说明

1. 克隆或下载项目到本地
2. 使用微信开发者工具打开项目
3. 在开发者工具中配置小程序AppID
4. 运行项目进行开发和调试

## 未来计划

- 添加用户登录与注册功能
- 实现真实支付功能
- 增加订单管理与历史记录
- 添加地址管理功能
- 实现优惠券与积分系统
- 增加更多产品类型与个性化定制选项

## 联系我们

- 店铺名称：蔓悦美甲·果礼吧
- 地址：深圳 · 海岸城店
- 小红书：蔓悦美甲果礼
- 微信：MANYUE-GIFT

## 许可证

MIT License
