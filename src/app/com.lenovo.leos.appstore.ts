import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lenovo.leos.appstore',
  name: '联想应用中心',
  groups: [
    {
      key: 0,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.zui.launcher.drawer.NormalLauncher',
          matches:
            '@[id="com.lenovo.leos.appstore:id/dialog_cancel"] + [text$="版本更新"]',
          snapshotUrls: 'https://i.gkd.li/i/13401992',
        },
      ],
    },
  ],
});
