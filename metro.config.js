const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Membatasi Metro menjadi 1 worker agar penggunaan RAM lebih ringan
config.maxWorkers = 1;

module.exports = config;