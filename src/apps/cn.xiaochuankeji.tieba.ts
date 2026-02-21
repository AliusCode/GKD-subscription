import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.xiaochuankeji.tieba',
  name: '最右',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15858014',
            'https://i.gkd.li/i/15858024',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/15858023',
        },
        {
          key: 2,
          position: {
            left: 'width * 0.8903',
            top: 'width * 0.1342',
          },
          matches: '[vid="contentView"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15856190',
            'https://i.gkd.li/i/15858008',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.ui.home.setting.SettingActivity',
          matches:
            '[id="cn.xiaochuankeji.tieba:id/btn_ok"][text^="马上升级"] + [id="cn.xiaochuankeji.tieba:id/btn_cancel"][text="取消"]',
          snapshotUrls: 'https://i.gkd.li/i/12660882',
        },
      ],
    },
    {
      key: 3,
      name: '分段广告-评论区卡片广告',
      fastQuery: true,
      activityIds: '.ui.post.postdetail.PostDetailActivity',
      rules: [
        {
          key: 1,
          matches:
            '@[vid="iv_close"] <<n [vid="ad_container"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/24209546',
            'https://i.gkd.li/i/24380002',
          ],
        },
        {
          preKeys: [1],
          matches: '@[clickable=true] >2 [text="不感兴趣"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/21334232',
        },
      ],
    },
  ],
});
