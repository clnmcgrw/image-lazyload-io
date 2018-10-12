const fs = require('fs');
const webpack = require('webpack');
const chalk = require('chalk');
const yargs = require('yargs').argv;
const browsersync = require('browser-sync').create();
const config = require('./webpack.config.js');



const onCompile = (err, stats) => {
  if (err) {
    console.log(chalk`[WEBPACK-ERROR] ${err}`);
  } else {
    console.log(chalk`[WEBPACK] ${stats.toString({chunks: false})}`);
    browsersync.reload();
  }
};


const compiler = webpack(config);
compiler.watch({}, onCompile);

browsersync.init({
  server: 'demo',
  ghostMode: false
});

fs.watchFile(__dirname+'/demo/index.html', () => browsersync.reload());