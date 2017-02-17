var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('styles/sass/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('styles'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('styles/sass/*.scss', ['sass']);
});