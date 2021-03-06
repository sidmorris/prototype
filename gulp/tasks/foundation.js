module.exports = function(){
  $.gulp.task('css:foundation', function () {
  return $.gulp.src($.PATH.CSS_FOUNDATION)
    .pipe($.gp.concatCss('foundation.css'))
    .pipe($.gp.csso())
    .pipe($.gulp.dest($.PATH.ROOT + '/assets/css'))
});

$.gulp.task('js:foundation', function () {
  return $.gulp.src($.PATH.JS_FOUNDATION)
    .pipe($.gp.concat('foundation.js'))
    .pipe($.gp.uglify())
    .pipe($.gulp.dest($.PATH.ROOT + '/assets/js'))
});
};