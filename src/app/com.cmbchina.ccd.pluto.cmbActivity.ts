import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmbchina.ccd.pluto.cmbActivity',
  name: '掌上生活',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            '.CMBRootActivityV2',
            '.secplugin.activity.login.fingerprint.cmbR6VH0R',
          ],
          matches: '[text="暂不更新"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12647025',
            'https://i.gkd.li/i/12727203',
            'https://i.gkd.li/i/13345771',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: ['com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2'],
      rules:
        '[id="com.cmbchina.ccd.pluto.cmbActivity:id/lly_pop_shell"] > [id="com.cmbchina.ccd.pluto.cmbActivity:id/img_cf_view_close"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12647000',
        'https://i.gkd.li/i/13360282',
      ],
    },
    {
      key: 3,
      name: '局部广告-右侧悬浮广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 2, // 目前只有2个界面会分别弹悬浮窗
      resetMatch: 'app',
      rules: [
        {
          name: '信用卡、我的页面',
          activityIds: [
            'com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2',
            'com.cmbchina.ccd.pluto.cmbActivity.secondNav',
          ],
          matches:
            '[id="com.cmbchina.ccd.pluto.cmbActivity:id/img_floating_ad_cmb"] - [id="com.cmbchina.ccd.pluto.cmbActivity:id/img_close_floating_ad_cmb"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12647039', // 信用卡页面
            'https://i.gkd.li/i/12647052', // 我的页面
          ],
        },
        {
          name: '查账页面',
          activityIds: [
            'com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2',
            'com.cmbchina.ccd.pluto.cmbActivity.repaymentBillv3.billRepay',
            'com.cmbchina.ccd.pluto.cmbActivity.repaymentBillv3.billDetail.view',
          ],
          matches:
            '@[vid="img_cmb_drag_pendant_close"] + [vid="img_cmb_drag_pendant_bg"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12647127',
            'https://i.gkd.li/i/14209121',
          ],
        },
        {
          name: '发现页',
          activityIds: 'com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2',
          matches:
            '[id="com.cmbchina.ccd.pluto.cmbActivity:id/view_cat"] + [id="com.cmbchina.ccd.pluto.cmbActivity:id/view_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13402782',
        },
      ],
    },
  ],
});
