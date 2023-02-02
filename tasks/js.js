import gulp from 'gulp';

// config
import paths from '../config/paths.js';
import options from '../config/options.js';

// plugins
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import babel from 'gulp-babel';
import webpack from 'webpack-stream';

// compile js files
export default () => {
	return gulp.src(paths.js.src, {sourcemaps: options.isProduction})
			.pipe(plumber({
				errorHandler: notify.onError(error => ({
					title: 'JS',
					message: error.message
				}))
			}))
			.pipe(babel())
			.pipe(webpack(options.webpack))
			.pipe(gulp.dest(paths.js.dest, {sourcemaps: options.isProduction}))
}
