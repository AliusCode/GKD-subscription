import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bilibili.studio',
  name: '必剪',
  groups: [
    {
      key: 0,
      name: '更新提示',
      desc: '勾选"忽略"-点击"以后再说"',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '勾选"忽略"',
          matches: '[text="忽略此版本的更新"][checked=false]',
          snapshotUrls: 'https://i.gkd.li/i/13496049',
        },
        {
          preKeys: [0],
          name: '点击"以后再说"',
          matches: '[id="com.bilibili.studio:id/update_btn_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/13496049',
        },
      ],
    },
  ],
});
