// 阳光优采 - 管理后台运营数据 Mock 数据
// 用于原型演示，所有数据均为模拟数据

const dashboardData = {
  // ========== 核心运营数据看板（8 张卡片） ==========
  
  // 订单总量（不含取消/退货）
  orderTotal: {
    value: 1248,
    trend: '+12.3%',
    trendUp: true,
    pending: 35,      // 待确认
    shipping: 58,     // 待发货
    receiving: 102    // 待收货
  },
  
  // 成交金额（主：下单金额；次：结算金额）
  gmv: {
    main: 2345678,        // 下单金额（主）
    secondary: 2100000,   // 结算金额（次）
    trend: '+8.5%',
    trendUp: true
  },
  
  // 活跃用户数（登录即活跃）
  activeUsers: {
    value: 856,
    trend: '+5.2%',
    trendUp: true
  },
  
  // 供应商数量
  suppliers: {
    certified: 45,    // 已认证
    pending: 8        // 待审核
  },
  
  // 商品总数
  products: {
    online: 3200,     // 上架
    offline: 150,     // 下架
    outOfStock: 80    // 缺货
  },
  
  // 分站数量
  stations: {
    total: 1,         // 总站
    regional: 5,      // 区域分站
    enterprise: 12    // 企业分站
  },
  
  // ========== 趋势图数据（支持日/周/月切换） ==========
  
  trends: {
    // 近7天数据（日粒度）
    daily: [
      { date: '01-08', orders: 120, gmv: 280000, activeUsers: 95 },
      { date: '01-09', orders: 135, gmv: 310000, activeUsers: 102 },
      { date: '01-10', orders: 148, gmv: 295000, activeUsers: 108 },
      { date: '01-11', orders: 125, gmv: 268000, activeUsers: 98 },
      { date: '01-12', orders: 160, gmv: 342000, activeUsers: 115 },
      { date: '01-13', orders: 178, gmv: 398000, activeUsers: 128 },
      { date: '01-14', orders: 182, gmv: 452000, activeUsers: 135 }
    ],
    
    // 近4周数据（周粒度）
    weekly: [
      { date: '第44周', orders: 820, gmv: 1850000, activeUsers: 645 },
      { date: '第45周', orders: 895, gmv: 2120000, activeUsers: 702 },
      { date: '第46周', orders: 1050, gmv: 2480000, activeUsers: 785 },
      { date: '第47周', orders: 1248, gmv: 2850000, activeUsers: 856 }
    ],
    
    // 近6个月数据（月粒度）
    monthly: [
      { date: '8月', orders: 3200, gmv: 7200000, activeUsers: 2100 },
      { date: '9月', orders: 3580, gmv: 8150000, activeUsers: 2380 },
      { date: '10月', orders: 4120, gmv: 9200000, activeUsers: 2650 },
      { date: '11月', orders: 4680, gmv: 10500000, activeUsers: 2920 },
      { date: '12月', orders: 5240, gmv: 11800000, activeUsers: 3150 },
      { date: '1月', orders: 5820, gmv: 13200000, activeUsers: 3480 }
    ]
  },
  
  // ========== 订单状态漏斗数据 ==========
  
  orderFunnel: [
    { status: '待确认', count: 35, percent: 2.8 },
    { status: '待发货', count: 58, percent: 4.6 },
    { status: '待收货', count: 102, percent: 8.2 },
    { status: '收货完成', count: 980, percent: 78.5 },
    { status: '已取消', count: 48, percent: 3.8 },
    { status: '退货', count: 25, percent: 2.0 }
  ],
  
  // ========== 分站订单占比数据 ==========
  
  stationOrderShare: {
    // 按销售金额（下单金额）
    gmv: [
      { name: '总站', value: 1200000, percent: 51.2, color: '#E2231A' },
      { name: '区域分站', value: 800000, percent: 34.1, color: '#FF6B6B' },
      { name: '企业分站', value: 345678, percent: 14.7, color: '#FFB84D' }
    ],
    // 按订单量
    count: [
      { name: '总站', value: 650, percent: 52.1, color: '#E2231A' },
      { name: '区域分站', value: 420, percent: 33.7, color: '#FF6B6B' },
      { name: '企业分站', value: 178, percent: 14.2, color: '#FFB84D' }
    ]
  },
  
  // ========== 各站用户占比数据 ==========
  
  stationUsers: {
    // 三类站总占比（饼图用）
    summary: [
      { name: '总站', value: 500, percent: 41.7, color: '#E2231A' },
      { name: '区域分站', value: 450, percent: 37.5, color: '#FF6B6B' },
      { name: '企业分站', value: 250, percent: 20.8, color: '#FFB84D' }
    ],
    // 各具体分站详细数据（柱状图用）
    detail: [
      { name: '总站', users: 500, color: '#E2231A' },
      { name: '区域-北京', users: 150, color: '#FF6B6B' },
      { name: '区域-上海', users: 120, color: '#FF7F7F' },
      { name: '区域-广州', users: 80, color: '#FF9393' },
      { name: '区域-深圳', users: 60, color: '#FFA6A6' },
      { name: '区域-成都', users: 40, color: '#FFB9B9' },
      { name: '企业-A公司', users: 60, color: '#FFB84D' },
      { name: '企业-B公司', users: 50, color: '#FFC266' },
      { name: '企业-C公司', users: 45, color: '#FFCC7F' },
      { name: '企业-D公司', users: 40, color: '#FFD699' },
      { name: '企业-E公司', users: 35, color: '#FFE0B2' },
      { name: '企业-其他', users: 20, color: '#FFEACC' }
    ]
  },
  
  // ========== 运营待办 ==========
  
  todos: {
    enterpriseVerify: 3,   // 待审核企业认证
    supplierVerify: 8,     // 待审核供应商认证
    poApproval: 12,        // 待审核采购单
    abnormalOrders: 5      // 异常订单（超时/退货）
  }
};

// 工具函数：格式化金额
function formatCurrency(amount) {
  if (amount >= 10000) {
    return (amount / 10000).toFixed(2) + '万';
  }
  return amount.toLocaleString('zh-CN');
}

// 工具函数：格式化数字
function formatNumber(num) {
  if (num >= 10000) {
    return (num / 10000).toFixed(2) + '万';
  }
  return num.toLocaleString('zh-CN');
}

// 导出数据（供页面使用）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { dashboardData, formatCurrency, formatNumber };
}
