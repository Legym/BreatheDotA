var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('default', function() {
      gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./stylesheets'));
});