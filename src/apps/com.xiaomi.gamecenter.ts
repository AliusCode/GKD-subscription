import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.gamecenter',
  name: '游戏中心',
  groups: [
    {
      key: 1,
      name: '局部广告-首页右侧悬浮广告',
      rules: [
        {
          activityIds: 'com.xiaomi.gamecenter.ui.MainTabActivity',
          matches:
            '[id="com.xiaomi.gamecenter:id/ad_view"] + [id="com.xiaomi.gamecenter:id/close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/12715800',
        },
      ],
    },
  ],
});
