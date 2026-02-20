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
          key: 1,
          fastQuery: true,
          activityIds: [
            'com.windmill.sdk.widget.InterstitialView',
            'app.video.guoguo.MainActivity',
          ],
          matches:
            '[vid="tobid_interstitial_skip_ll" || vid="tobid_splash_skip_ll"][clickable=true][visibleToUser=true] > [text="跳过"]',
          exampleUrls: 'https://e.gkd.li/64670315-c171-42f9-a55a-5bedf29f24c3',
          snapshotUrls: [
            'https://i.gkd.li/i/21278557',
            'https://i.gkd.li/i/21282765',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          action: 'clickCenter',
          activityIds:
            'com.beizi.ad.internal.activity.BeiZiInterstitialActivity',
          matches: '[vid="beizi_interstitial_ad_close_iv"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/48fb9fda-c3c3-433a-85d2-f069ec858d25',
          snapshotUrls: 'https://i.gkd.li/i/25441849',
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
          matches:
            'View[desc="任务中心"] + View > @View[desc="签到"][clickable=true][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/42bb89be-dce0-4fe2-8492-30862f21cb28',
          snapshotUrls: 'https://i.gkd.li/i/25441381',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-领取VIP',
      desc: '需开启【立即签到】，签到后点击【领取VIP】',
      rules: [
        {
          preKeys: 2,
          activityIds: 'app.video.guoguo.MainActivity',
          matches:
            'View[desc="今日已签到"][clickable=true][visibleToUser=true] > @Button[desc="看广告视频，领取尊贵VIP"][clickable=true][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/88a02f5d-ae2b-47ad-976c-49b1ba09aec8',
          snapshotUrls: 'https://i.gkd.li/i/25441543',
        },
      ],
    },
  ],
});
