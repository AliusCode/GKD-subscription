import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.One.WoodenLetter',
  name: '一个木函',
  groups: [
    {
      key: 1,
      name: '局部广告',
      desc: 'x掉',
      rules: [
        {
          activityIds: '.MainActivity',
          matches:
            'ImageView[width>540] + View -> ImageView[width<71] - View[text=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/25547842',
        },
      ],
    },
  ],
});
