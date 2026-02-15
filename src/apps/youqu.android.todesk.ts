import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'youqu.android.todesk',
  name: 'ToDesk',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      desc: '关闭卡片广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: ['.activity.WelcomeActivity', '.activity.MainActivity'],
          matches:
            '[clickable=true][id="youqu.android.todesk:id/ivAdClose" || id="youqu.android.todesk:id/llClose"|| id="youqu.android.todesk:id/iv_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/7535a849-b4a7-4dd5-a6c1-4d3def042d70',
          snapshotUrls: [
            'https://i.gkd.li/i/14175556',
            'https://i.gkd.li/i/13228546',
            'https://i.gkd.li/i/25314575',
          ],
        },
      ],
    },
  ],
});
