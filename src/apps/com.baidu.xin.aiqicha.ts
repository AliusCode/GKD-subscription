import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.xin.aiqicha',
  name: '爱企查',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.baidu.newbridge.fast.MainFastActivity',
          matches: '[id="com.baidu.xin.aiqicha:id/update_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/12755738',
        },
      ],
    },
  ],
});
