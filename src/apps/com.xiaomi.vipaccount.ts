import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.vipaccount',
  name: '小米社区',
  groups: [
    {
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'miuix.appcompat.app.AlertDialog',
          matches:
            '@[text="稍后安装"] < LinearLayout - ScrollView >(4) [text="发现新版本"]',
          snapshotUrls: 'https://i.gkd.li/i/12642466',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-评论区卡片广告',
      rules: [
        {
          activityIds: 'com.xiaomi.vipaccount.newbrowser.NormalWebActivity',
          matches: '[text="closeGray"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12642459',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-签到弹窗',
      rules: [
        {
          activityIds: 'com.xiaomi.vipaccount.newbrowser.NormalWebActivity',
          matches: '[text="签到赢权益"] +n Image[text*="cancel_circle"]',
          snapshotUrls: 'https://i.gkd.li/i/13328271',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-公告板弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.xiaomi.vipaccount.ui.home.page.HomeFrameActivity',
            'com.xiaomi.vipaccount.newbrowser.NormalWebActivity',
          ],
          anyMatches: [
            '[desc="公告版弹窗"] +2 [id="com.xiaomi.vipaccount:id/close"]',
            '[desc="公告版弹窗"] + ViewGroup[vid="image_container"] > [id="com.xiaomi.vipaccount:id/close"]',
          ],
          exampleUrls: 'https://e.gkd.li/46e16bc5-2f13-408e-9c34-927a13ba3e9c',
          snapshotUrls: [
            'https://i.gkd.li/i/13400617',
            'https://i.gkd.li/i/24289621',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '功能类-立即签到',
      desc: '点击【立即签到】',
      matchTime: 10000,
      matchRoot: true,
      actionMaximum: 1,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.newbrowser.NormalWebActivity',
          matches: '[text="立即签到"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/74b17c1e-e25b-48c6-8640-4b74cfe90008',
          snapshotUrls: 'https://i.gkd.li/i/25440256',
        },
      ],
    },
    {
      key: 6,
      name: '功能类-去微信小程序签到',
      desc: '可按需开启微信功能类-小米社区小程序【去签到】',
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.newbrowser.NormalWebActivity',
          matches: [
            '[text="已签到"][clickable=false][visibleToUser=false]',
            '[desc="去微信"][clickable=true][visibleToUser=true]',
          ],
          exampleUrls: [
            'https://e.gkd.li/e4814c1d-e6ae-49cf-aa0c-b7331139d1ff',
            'https://e.gkd.li/06036a8d-cb0f-4291-9ce6-dec54084b460',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/25458816',
            'https://i.gkd.li/i/25458818',
          ],
        },
      ],
    },
  ],
});
