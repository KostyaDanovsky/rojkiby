var less = require('gulp-less');
var path = require('path');
var gulp = require('gulp');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

gulp.task('less', function () {
  return gulp.src('./less/freelancer.less')
    .pipe(less())
    .pipe(gulp.dest('css'));
});

gulp.task('watch-less', ['less'], function () {
    gulp.watch('less/*.less', ['less']);
});
