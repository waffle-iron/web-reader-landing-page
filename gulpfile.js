'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var rename = require("gulp-rename");

var paths = {
  scripts: ['main.js'],
  css: ['index.scss']
};

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('assetBuild'));
});

gulp.task('sass', function () {
 return gulp.src(paths.css)
   .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
   .pipe(rename('index.min.css'))
   .pipe(gulp.dest('assetBuild'));
});

gulp.task('default', ['scripts', 'sass']);
