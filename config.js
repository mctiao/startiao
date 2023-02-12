// 配置
window.Config = {

  // 站点名
  SiteName: 'MCTIAOの网站监控',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm793697615-72252eaf2aef74194ce790c0',
    //ctn官网
    'm793697612-6e885231ad9205d46b6fdb9c',
    //ctn论坛
    'm793424439-9e556a73f6739061c74da636',
    //tiao的博客
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'tiao的博客',
      url: 'https://blog.mctiao.top'
    },
    {
      text: 'CTN论坛',
      url: 'https://bbs.ctnteam.tpp'
    },
    {
      text: '官网',
      url: 'https://www.ctnteam.top/'
    },
  ],
};
