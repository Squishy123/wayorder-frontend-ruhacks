const withPlugins = require('next-compose-plugins');

//image optimizer
const optimizedImages = require('next-optimized-images');

//import css modules
const withCSS = require('@zeit/next-css');

module.exports = withPlugins([
  [withCSS, {
    cssModules: true,
    postcssLoaderOptions: {
		autoprefixer: true,
	}
}],
[optimizedImages, {
  imagesFolder: 'images',
  optimizeImagesInDev: true,
  mozjpeg: {
    quality: 25
  }
}]
], {
  webpack: (config, options) => {
    config.node={fs: 'empty'};
    return config;
  },
});