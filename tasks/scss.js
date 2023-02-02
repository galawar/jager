import gulp from 'gulp';

// config
import paths from '../config/paths.js';
import options from '../config/options.js';

// plugins
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import shorthand from 'gulp-shorthand';
import rename from 'gulp-rename';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import sassGlob from 'gulp-sass-glob';

const sass = gulpSass( dartSass );

// compile scss files
export default () => {
	return gulp.src(paths.scss.src, {sourcemaps: options.isDevelopment})
			.pipe(plumber({
				errorHandler: notify.onError(error => ({
					title: 'SCSS',
					message: error.message
				}))
			}))
			.pipe(sassGlob())
			.pipe(sass())
			.pipe(autoprefixer())
			.pipe(shorthand())
			.pipe(gulp.dest(paths.scss.dest, {sourcemaps: options.isDevelopment}))
			.pipe(rename({suffix: '.min'}))
			.pipe(csso())
			.pipe(gulp.dest(paths.scss.dest, {sourcemaps: options.isDevelopment}))
}