export const salonInfo = {
  name: "蔓悦美甲·果礼吧",
  tagline: "指尖之美，也能被吃到",
  slogan: "在门店做好看的甲，也顺手把甜蜜带走",
  heroImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
  features: ["当日手切", "低糖轻配", "门店自提 / 骑手速达"],
  highlight: {
    title: "指间果礼计划",
    desc: "给做完美甲的女生一个更松弛的礼物选择：门店现切、即刻装盒，30分钟即可送达闺蜜家。",
    perks: [
      { title: "会员优惠", detail: "完成美甲当日下单果礼立减 ¥30" },
      { title: "包装主理", detail: "美甲师亲自挑色丝带，附手写卡片" },
      { title: "健康标配", detail: "控糖配比 < 8%，附食材溯源卡" }
    ]
  },
  community: {
    title: "想先看实拍？",
    desc: "关注社交账号获取每日现切上新",
    xiaohongshu: "蔓悦美甲果礼",
    wechat: "MANYUE-GIFT",
    address: "深圳 · 海岸城店"
  }
};

export const giftingProcess = [
  { title: "门店挑选", desc: "美甲过程中扫描镜前小程序码，30秒完成下单" },
  { title: "现切装盒", desc: "后厨鲜切搭配，与甲油色系呼应的丝带手绑" },
  { title: "冷链速配", desc: "14:00 前下单支持当日骑手冷链，超区顺丰加冰袋" },
  { title: "送达提醒", desc: "收礼人确认后推送到店信息，附售后保障" }
];

export const products = [
  {
    id: 1,
    category: "招牌热卖",
    isHot: true,
    isRecommended: true,
    title: "指间蜜桃礼盒",
    subtitle: "水蜜桃粉调 + 果冻猫眼",
    price: 26800,
    cover: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=900&q=80",
    desc: "精选当季白凤桃、红提与木瓜雪燕，低糖酸奶打底，入口即化。",
    specs: ["双人甜蜜装·10寸", "闺蜜派对装·12寸"],
    tags: ["现切2小时保鲜", "配粉调丝带", "附祝福卡"],
    benefits: ["闺蜜生日", "姐妹聚会", "表白甜礼"],
    pairing: {
      nail: "水蜜桃裸粉 / 果冻猫眼系",
      fruit: "白凤桃 + 木瓜雪燕 + 玫瑰葡萄",
      note: "建议当日食用，赠同色系食用花"
    },
    service: [
      { title: "冷链同城", detail: "14:00 前下单支持当日送达，门店 3km 内免费" },
      { title: "自提快取", detail: "美甲结束后 10 分钟自提，附托盘" },
      { title: "售后无忧", detail: "2 小时内反馈坏果即补寄或退款" }
    ]
  },
  {
    id: 2,
    category: "限定推荐",
    isHot: true,
    isRecommended: true,
    title: "赤霞莓果礼盒",
    subtitle: "赤陶日落 + 温柔奶茶",
    price: 31800,
    cover: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=900&q=80",
    desc: "树莓、蓝莓、芝士无花果与砂糖橘的多层次口感，适合秋冬送礼。",
    specs: ["3-4 人分享", "加高层塔"],
    tags: ["芝士控", "秋冬限定", "代写贺卡"],
    benefits: ["客户私宴", "节日探望", "谢师心意"],
    pairing: {
      nail: "赤陶渐变 / 哑光奶茶系",
      fruit: "树莓 + 蓝莓 + 芝士无花果",
      note: "含少量芝士与坚果，请备注忌口"
    },
    service: [
      { title: "定时送达", detail: "支持 2 小时起预约，附到达短信" },
      { title: "保冷加倍", detail: "全程 4℃ 以下，附双层冰袋" },
      { title: "企业定制", detail: "可加 LOGO 胶片与手写卡" }
    ]
  },
  {
    id: 3,
    category: "低糖轻食",
    isHot: true,
    isRecommended: false,
    title: "晨雾柚香礼盒",
    subtitle: "低饱和法式 + 柚子气泡水",
    price: 23900,
    cover: "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=900&q=80",
    desc: "梅洛蜜柚、青提与酸奶燕麦，清爽不过分甜，适合健身女生。",
    specs: ["轻盈常规装", "健身加餐装"],
    tags: ["低糖 8%", "附气泡饮", "办公室友好"],
    benefits: ["开工仪式", "健身打卡", "顾客回访"],
    pairing: {
      nail: "灰蓝法式 / 清透猫眼",
      fruit: "梅洛蜜柚 + 青提 + 酸奶燕麦",
      note: "含无糖酸奶，附独立餐具"
    },
    service: [
      { title: "晨间快送", detail: "11:00 前下单支持午休前送达" },
      { title: "到店打包", detail: "前台提供冷藏寄存，随走随拿" },
      { title: "复购提醒", detail: "可为收礼人设置复购提醒" }
    ]
  }
];

export function getProductById(id) {
  return products.find(p => String(p.id) === String(id));
}
