import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.pwrd.steam.esports',
  name: '完美世界电竞',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matches: '[vid="rl_skip"][visibleToUser=true]', // 需点击 clickable=true 的节点才有效 https://github.com/AIsouler/GKD_subscription/issues/1104
          exampleUrls: 'https://e.gkd.li/b7adf229-631c-4c27-a07b-eb6e0e1854af',
          snapshotUrls: 'https://i.gkd.li/i/21808124',
        },
      ],
    },
  ],
});
