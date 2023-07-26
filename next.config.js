const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

// module.exports = {
//   async rewrites() {
//     return [
//       {
//         destination: 'https://openapi.naver.com/v1/search/:path*',
//       },
//     ];
//   },
// };

module.exports = withImages({
  images: {
    disableStaticImages: true,
    // path: '/images/',
  },
  // oaders: [
  //   {
  //     test: /\.(gif|svg|jpg|png)$/,
  //     loader: 'imgix',
  //   },
  // ],
});
module.exports = withPlugins([[optimizedImages, {}]]);

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // put the rest of config here
  compress: true,
  webpack(config, { webpack }) {
    const prod = process.env.NODE_ENV === 'production';
    const plugins = [...config.plugins];

    return {
      ...config,
      mode: prod ? 'production' : 'development',
      devtool: prod ? 'hidden-source-map' : 'eval',
      plugins,
    };
  },
});
