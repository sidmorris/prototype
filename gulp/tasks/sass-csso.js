module.exports = function(){
 $.gulp.task('sass', function () {
  return $.gulp.src('source/libs/uikit-scss/uikit.scss')
    .pipe($.gp.sass())
    .on('error', $.gp.notify.onError({
      title: 'Style'
    }))
    .pipe($.gp.csso({
      restructure: false,
      sourceMap: false,
      forceMediaMerge: true,
      clone: false,
      comments: false, 
      debug: false
  }))
    .pipe($.gulp.dest('source/libs/uikit-css'))
    .pipe($.browserSync.stream());
});

};