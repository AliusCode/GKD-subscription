import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xtc.watch',
  name: '小天才',
  groups: [
    {
      key: 1,
      name: '更新提示',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.xtc.widget.phone.popup.activity.CustomActivity14',
          matches: [
            '[text="App功能更新了"]',
            '[id="com.xtc.watch:id/iv_close"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13197390',
        },
      ],
    },
  ],
});
