// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const {withNativeWind} = require("nativewind/metro");

const defaultConfig = getDefaultConfig(__dirname);
//defaultConfig.resolver.assetExts.push('cjs);

module.exports = withNativeWind(defaultConfig, {input: "./app/global.css"});
