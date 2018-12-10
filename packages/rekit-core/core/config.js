const paths = require('./paths');

let appType;
function getPkgJson(noCache) {
  const pkgJsonPath = paths.map('package.json');
  if (noCache) delete require.cache[pkgJsonPath];
  return require(pkgJsonPath);
}

function getRekitConfig(noCache) {
  let config = getPkgJson(noCache).rekit;
  if (!config) config = {};
  config.appType = appType || config.appType;
  return config;
}

function setAppType(_appType) {
  appType = _appType;
}

// Load rekit configuration from package.json
module.exports = {
  css: 'less',
  style: 'less',
  getPkgJson,
  getRekitConfig,
  setAppType,
};
