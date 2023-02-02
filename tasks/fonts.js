import gulp from 'gulp';

// config
import paths from '../config/paths.js';
import options from '../config/options.js';

// plugins
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';
import newer from 'gulp-newer';

// processing images
export default () => {
	return gulp.src(paths.fonts.src)
			.pipe(plumber({
				errorHandler: notify.onError(error => ({
					title: 'FONTS',
					message: error.message
				}))
			}))
			.pipe(newer(paths.fonts.dest))
			.pipe(fonter(options.fonter))
			.pipe(ttf2woff2())
			.pipe(gulp.dest(paths.fonts.dest))
}