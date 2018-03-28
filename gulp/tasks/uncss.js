module.exports = function(){
  $.gulp.task('uncss', function () {
    return $.gulp.src($.PATH.ROOT + '/assets/css/app.css')
    .pipe($.gp.uncss({
      html: [$.PATH.ROOT + '/**/*.html'],
      ignore: $.cssIgnore
    }))
    .pipe($.gp.rename({
      suffix: '.min'
    }))
    .pipe($.gulp.dest($.PATH.ROOT + '/assets/css'))
    .pipe($.browserSync.stream());
  });
  
};