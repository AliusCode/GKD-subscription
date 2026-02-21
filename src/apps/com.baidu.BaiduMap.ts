import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.BaiduMap',
  name: '百度地图',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/f03b3648-757a-48e3-bd3b-098f8293edbf',
          snapshotUrls: 'https://i.gkd.li/i/16556555',
        },
        {
          key: 1,
          matches: '[vid="ms_skipView"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/cd89ffb7-6cd3-4978-b3d6-ef5ece2769d0',
          snapshotUrls: 'https://i.gkd.li/i/23742641',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches: 'ImageView[id="com.baidu.BaiduMap:id/cancel_update"]',
          snapshotUrls: 'https://i.gkd.li/i/12909385',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-通勤卡添加至桌面',
      desc: '点击取消',
      fastQuery: true,
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches: ['[text="添加至桌面"]', '[text="取消"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/13439258',
            'https://i.gkd.li/i/16920986', // 防止误触
          ],
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches: '[vid="img_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22616256',
        },
      ],
    },
    {
      key: 5,
      name: '局部广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches: '[vid="banner_ad_close_icon"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22656085',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches:
            'ImageView[childCount=0] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] + ViewGroup > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/22616267',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches: 'ImageView[id="com.baidu.BaiduMap:id/yellow_banner_close"]',
          snapshotUrls: 'https://i.gkd.li/i/24633179',
        },
      ],
    },
  ],
});
