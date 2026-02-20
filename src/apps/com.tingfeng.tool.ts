import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tingfeng.tool',
  name: '囧次元',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.windmill.sdk.widget.InterstitialView',
            'app.video.guoguo.MainActivity',
          ],
          matches:
            '[vid="tobid_interstitial_skip_ll" || vid="tobid_splash_skip_ll"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/64670315-c171-42f9-a55a-5bedf29f24c3',
          snapshotUrls: [
            'https://i.gkd.li/i/21278557',
            'https://i.gkd.li/i/21282765',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-立即签到',
      desc: '点击【签到】',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'app.video.guoguo.MainActivity',
          matches: '@View[desc="签到"][clickable=true][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/42bb89be-dce0-4fe2-8492-30862f21cb28',
          snapshotUrls: 'https://i.gkd.li/i/25441381',
        },
      ],
    },
  ],
});
