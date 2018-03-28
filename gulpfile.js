"use strict";
global.$ = {
  fs: require('fs'),
  package: require('./package.json'),
  devBuild : process.env.NODE_ENV !== 'production',
  gulp: require('gulp'),
  del: require('del'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')(),
  PATH: require('./gulp/config/path.js'),
  cssIgnore: require('./gulp/config/css-ignore.js')
};
//
// CONFIG
//
$.PATH.TASKS.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clear',
  $.gulp.parallel(
    'pug',
    'sass',
    // 'css:foundation',
    'js:foundation',
    'js:app',
    'copy:image',
    'copy:fonts'
  ),
  // $.gulp.parallel(
  //   "uncss"
  // ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));