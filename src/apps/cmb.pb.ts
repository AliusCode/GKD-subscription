import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cmb.pb',
  name: '招商银行',
  groups: [
    {
      key: 1,
      name: '局部广告-首页活动悬浮广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'cmb.pb.app.mainframe.container.PBMainActivity',
          matches: '[vid="float_window"] > [vid="ivCancle"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14208669',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches: '[id="cover-img"] + [text="关闭推荐"]',
          snapshotUrls: 'https://i.gkd.li/i/12706022',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.pb.marketing.PopupWindowActivity',
          matches: '[desc^="活动图片"] + [vid="ivCancle"][desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/14208693',
        },
      ],
    },
  ],
});
