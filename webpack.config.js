const webpackMerge = require('webpack-merge');

const loadModeConfig = env => require(`./build-utils/${env.mode}.config`)(env);
const loadMainConfig = env => require(`./build-utils/main.config`)(env);

module.exports = env => webpackMerge(loadMainConfig(env), loadModeConfig(env));
