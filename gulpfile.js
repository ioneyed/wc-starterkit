var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');
var injectfile = require("gulp-inject-file");
var runSequence = require('run-sequence');
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var browserSync = require('browser-sync').create();

gulp.task('build-wc-css', function() {
  	return gulp.src(["!components/polyfills/**/*", 'components/**/*.scss']) // Gets all files ending with .scss
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(gulp.dest('components'));
});

gulp.task("build-wc-js", ["build-wc-css"], function () {
	return gulp.src(["!components/polyfills/**/*", "components/**/*.js"])
		.pipe(injectfile({
			pattern: '<!--\\s*inject:<filename>-->'
		}))
		.pipe(gulp.dest("components/processing"));
});

gulp.task("build-polyfills", ["build-wc-js"], function () {
	return gulp.src(["components/polyfills/beforePolyfills.js", "components/polyfills/custom-elements.min.js", "components/polyfills/shadydom.min.js", "components/polyfills/shadycss.min.js", "components/polyfills/template.js", "components/polyfills/native-shim.min.js"])
		.pipe(concat("polyfills.js"))
		.pipe(gulp.dest("dist/scripts"))
});

gulp.task("build-wc", ["build-polyfills"], function () {
	return gulp.src(["components/processing/**/*.js"])
		.pipe(concat("components.js"))
		.pipe(babel({presets: ['es2015']}))
		.pipe(gulp.dest("dist/scripts"));
});

gulp.task("clean-up", ["build-wc"], function () {
  	return del(['components/processing', "components/**/*.css"]);
});

gulp.task('build-helpers', ["clean-up"], function() {
	return gulp.src(["javascript/aris-helpers/firstFile.js", "javascript/aris-helpers/**/*.js"])
		.pipe(concat("helpers.js"))
		.pipe(babel({presets: ['es2015']}))
		.pipe(gulp.dest("dist/scripts"));
});

gulp.task('build', ["build-helpers"], function() {
	return gulp.src(["!javascript/aris-helpers/*", "javascript/app.js", "javascript/*.js"])
		.pipe(concat("app.js"))
		.pipe(babel({presets: ['es2015']}))
		.pipe(gulp.dest("dist/scripts"))
		.pipe(browserSync.reload({
			stream: true
		}));
	console.log("Hooray, it's built!");
});

gulp.task('browserSync', function() {
  	browserSync.init({
    	server: {
      		baseDir: './dist'
    	},
  	})
});

gulp.task('watch', ['browserSync', 'build'], function (){
    gulp.watch(['javascript/**/*.js', '!components/processing/*', 'components/**/*.scss', 'components/**/*.js', 'dist/index.html', 'dist/**/*.css', 'dist/styleguide.json'], ['build']);
});