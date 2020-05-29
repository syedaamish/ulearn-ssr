const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");
const withImages = require('next-images')

module.exports = withCSS(withSass({
    webpack (config, options, { isServer }) {
        if (!isServer) {
            config.node = {
              fs: 'empty'
            }
          }
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        });
        return config;
    }
}));

module.exports = withImages({
    webpack(config, options) {
      return config
    }
  })