'use strict';

// ==================================
//
// distribution
//
// ==================================
import gulp from 'gulp';
import debug from 'gulp-debug';
import runSequence from 'run-sequence';

gulp.task('copy', function() {
	return gulp.src(
			[
				'./**/*.php',
				'./**/*.css',
				"!./dist/**",
				"!./bin/**",
				"!./gulp/**",
				"!.travis.yml",
				"!.gitignore",
				"!.editorconfig",
				"!.github/**",
				"!composer.json",
				"!bower.json",
				"!./node_modules/**/*.*"
			],
			{ base: './' }
		)
		.pipe( debug() )
		.pipe( gulp.dest( 'dist' ) );
} );

gulp.task('dist', function(cb){
	return runSequence( 'build:dist', 'copy', cb );
});
