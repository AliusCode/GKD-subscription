import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gotokeep.keep',
  name: 'Keep',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds:
            'com.gotokeep.keep.refactor.business.main.activity.MainActivity',
          matches: '[id="com.gotokeep.keep:id/imgCloseHomePageDialog"]',
          snapshotUrls: 'https://i.gkd.li/i/13761641',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-首页信息流广告',
      activityIds:
        'com.gotokeep.keep.refactor.business.main.activity.MainActivity',
      rules:
        '[id="com.gotokeep.keep:id/textAdTag"] + [id="com.gotokeep.keep:id/imgClose"]',
      snapshotUrls: 'https://i.gkd.li/i/12706115',
    },
    {
      key: 3,
      name: '全屏广告-运动购页面-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds:
            'com.gotokeep.keep.refactor.business.main.activity.MainActivity',
          matches:
            'ImageView + LinearLayout > ImageView[id=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12706111',
        },
        {
          key: 1,
          activityIds:
            'com.gotokeep.keep.refactor.business.main.activity.MainActivity',
          matches:
            '[id="com.gotokeep.keep:id/contentContainer"] + [id="com.gotokeep.keep:id/closeImageView"]',
          snapshotUrls: 'https://i.gkd.li/i/13766358',
        },
      ],
    },
    {
      key: 4,
      name: '更新提示',
      desc: '点击"暂不升级"',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.gotokeep.keep:id/text_secondary_action"]',
          exampleUrls:
            'https://m.gkd.li/57941037/6b0091e9-1bf1-49bd-be5c-e6997bc9accb',
          snapshotUrls: 'https://i.gkd.li/i/14126005',
        },
      ],
    },
  ],
});
