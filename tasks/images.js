import gulp from 'gulp';

// config
import paths from '../config/paths.js';
import options from '../config/options.js';

// plugins
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import imagemin from 'gulp-imagemin';
import newer from 'gulp-newer';

// processing images
export default () => {
	return gulp.src(paths.img.src)
			.pipe(plumber({
				errorHandler: notify.onError(error => ({
					title: 'IMAGES',
					message: error.message
				}))
			}))
			.pipe(newer(paths.img.dest))
			.pipe(imagemin(options.imagemin))
			.pipe(gulp.dest(paths.img.dest))
}