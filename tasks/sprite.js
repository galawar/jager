import gulp from 'gulp';

// config
import paths from '../config/paths.js';
import options from '../config/options.js';

// plugins
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import svgSprite from 'gulp-svg-sprite';

// create SVG sprite
export default () => {
	return gulp.src(paths.img.icons)
			.pipe(plumber({
				errorHandler: notify.onError(error => ({
					title: 'SVG Sprite',
					message: error.message
				}))
			}))
			.pipe(svgSprite(options.sprite))
			.pipe(gulp.dest(paths.img.dest))
}