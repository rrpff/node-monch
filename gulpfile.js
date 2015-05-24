var gulp  = require('gulp')
  , babel = require('gulp-babel');

var config = {
  scripts: {
    src: 'src/**/*.es6'
  , dest: 'build/'
  }
}

gulp.task('default', Object.keys(config));
gulp.task('watch', ['default'], function(){
  for(var taskname in config)
    gulp.watch(config[taskname].src, [taskname]);
});

gulp.task('scripts', function(){
  gulp.src(config.scripts.src)
    .pipe(babel())
    .pipe(gulp.dest(config.scripts.dest));
});
