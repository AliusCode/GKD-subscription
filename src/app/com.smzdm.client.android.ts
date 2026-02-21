import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.smzdm.client.android',
  name: '什么值得买',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.smzdm.client.android.app.HomeActivity',
          matches: '[id="com.smzdm.client.android:id/dialog_home_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12695751',
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
          activityIds: '.app.HomeActivity',
          matches:
            '[id="com.smzdm.client.android:id/tv_version"] +2 [id="com.smzdm.client.android:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13198016',
        },
      ],
    },
  ],
});
