const withImages = require('next-images');
module.exports = withImages({
  images: {
    disableStaticImages: true,
    domains: ['sleepfit.site'],
    loader: 'akamai',
    path: '/',
  },
  oaders: [
    {
      test: /\.(gif|svg|jpg|png)$/,
      loader: 'imgix',
    },
  ],
});

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
