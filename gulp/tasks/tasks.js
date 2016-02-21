

import gulp from 'gulp';

// ==================================
//
// tasks.
//
// ==================================


gulp.task('build', [ 'sass', 'browserify']);
gulp.task('build:dist', [ 'sass:dist', 'browserify']);
gulp.task('default', ['setWatch', 'build', 'watch', 'browserSync']);


