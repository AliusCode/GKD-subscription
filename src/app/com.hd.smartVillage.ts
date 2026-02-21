import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hd.smartVillage',
  name: '恒大智慧社区',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.modules.main.MainActivity',
          matches: 'TextView[id="com.hd.smartVillage:id/tv_upgrade_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/13223642',
        },
      ],
    },
  ],
});
