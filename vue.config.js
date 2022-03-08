const zopfli = require('@gfx/zopfli');
const webpack = require('webpack')
module.exports = {
  pluginOptions: {
    compression:{
      zopfli: {
        compressionOptions: {
          numiterations: 15,
        },
        algorithm(input, compressionOptions, callback) {
          return zopfli.gzip(input, compressionOptions, callback);
        },
      }
    }
  }
  
}