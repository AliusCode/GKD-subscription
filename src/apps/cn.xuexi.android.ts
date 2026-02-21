import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.xuexi.android',
  name: '学习强国',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.alibaba.android.rimet.biz.SplashActivity',
          matches: '@[text="取消"] + [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/i/12715139',
        },
      ],
    },
  ],
});
