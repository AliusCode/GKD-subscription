import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.browser',
  name: '华为浏览器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13403785',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds:
            'com.huawei.browser.customtab.EmuiBrowserCustomTabActivity',
          matches:
            'View[id="root"] > View[index=1] > @View[visibleToUser=true][id="logo-close-btn"] <<n [vid="web_view_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13997759',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.download.DownloadRecordsActivity',
          matches: '[vid="group_header_close_button"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/f5b1576c-372d-4376-b122-129cd0249d85',
          snapshotUrls: 'https://i.gkd.li/i/20852584',
        },
      ],
    },
  ],
});
