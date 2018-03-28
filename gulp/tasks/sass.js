module.exports = function(){
 $.gulp.task('sass', function () {
  return $.gulp.src('source/style/app.scss')
    .pipe($.gp.sassGlob())
    .pipe($.gp.sourcemaps.init())
    .pipe($.gp.sass())
    .on('error', $.gp.notify.onError({
      title: 'Style'
    }))
    .pipe($.gp.autoprefixer({
      browsers: [
        'last 3 version',
        '> 1%',
        'ie 8',
        'ie 9',
        'Opera 12.1'
      ]
    }))
    .pipe($.gp.csso())
    .pipe($.gp.sourcemaps.write())
    .pipe($.gulp.dest($.PATH.ROOT + '/assets/css'))
    .pipe($.browserSync.stream());
});

};