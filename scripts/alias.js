const path = require('path');
const resolve = p => path.resolve(__dirname, '../', p);

module.exports = {
    web: resolve('src/platforms/web'),
    compiler: resolve('src/compiler'),
    core: resolve('src/core'),
    shared: resolve('src/shared'),
    web: resolve('src/platforms/web'),
    weex: resolve('src/platforms/weex'),
    server: resolve('src/server'),
    sfc: resolve('src/sfc')
}
