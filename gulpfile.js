'use strict';

var gulp = require('gulp');
var del = require('del');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var reactify = require('reactify');
var sass = require('gulp-sass');

gulp.task('clean', function(cb) {
  del(['templates'], cb);
});

gulp.task('scripts', function() {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: './scripts/app.js',
    debug: true,
    // defining transforms here will avoid crashing your stream
    transform: [reactify]
  });

  return b.bundle()
    .pipe(source('site.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./template/scripts/'));
});


gulp.task('styles', function () {
  gulp.src(['./styles/site.scss'])
		.pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./template/styles'));
});

//
// // Rerun the task when a file changes
// gulp.task('watch', function() {
//   gulp.watch(paths.scripts, ['scripts']);
//   gulp.watch(paths.images, ['images']);
// });

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts', 'styles']);
