import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.allhistory.dls.marble',
  name: '全知识',
  groups: [
    {
      key: 1,
      name: '局部广告-左下角参与答题卡片',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.pwrd.dls.marble.moudle.homepage.HomePageActivity',
          matches: ['[vid="iv_board"]', '[vid="iv_close"]'],
          snapshotUrls: 'https://i.gkd.li/i/13997954',
        },
      ],
    },
  ],
});
