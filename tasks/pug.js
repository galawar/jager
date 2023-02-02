import gulp from 'gulp';

// config
import paths from '../config/paths.js';
import options from '../config/options.js';

// plugins
import pug from 'gulp-pug';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

// compile pug files
export default () => {
	return gulp.src(paths.pug.src)
			.pipe(plumber({
				errorHandler: notify.onError(error => ({
					title: 'PUG',
					message: error.message
				}))
			}))
			.pipe(pug())
			.pipe(gulp.dest(paths.pug.dest))
}