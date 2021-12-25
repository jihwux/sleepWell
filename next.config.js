const withImages = require('next-images');
module.exports = withImages({
  images: {
    disableStaticImages: true,
  },
  oaders: [
    {
      test: /\.(gif|svg|jpg|png)$/,
      loader: 'file-loader',
    },
  ],
});

// module.exports = {

// };

//  `next.config.js` 작성하기
// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       // 웹팩설정에 로더 추가함
//       test: /\.svg$/,
//       issuer: {
//         test: /\.(js|ts)x?$/,
//       },
//       use: ['@svgr/webpack'],
//     });

//     return config;
//   },
// };
