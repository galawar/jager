import gulp from 'gulp';
import browserSync from 'browser-sync';

// config
import paths from './config/paths.js';
import options from './config/options.js';

// tasks
import clear from './tasks/clear.js';
import pug from './tasks/pug.js';
import scss from './tasks/scss.js';
import js from './tasks/js.js';
import images from './tasks/images.js';
import sprite from './tasks/sprite.js';
import fonts from './tasks/fonts.js';

// server
const server = () => {
	browserSync.init({
		port: 2309,
		server: {
			baseDir: paths.root,
		},
	})
}

// watching
const watcher = () => {
	gulp.watch(paths.pug.watch, pug).on('all', browserSync.reload);
	gulp.watch(paths.scss.watch, scss).on('all', browserSync.reload);
	gulp.watch(paths.js.watch, js).on('all', browserSync.reload);
	gulp.watch(paths.img.watch, images).on('all', browserSync.reload);
	gulp.watch(paths.img.watch, sprite).on('all', browserSync.reload);
	gulp.watch(paths.fonts.watch, fonts).on('all', browserSync.reload);
}

const build = gulp.series(
		clear,
		gulp.parallel(pug, scss, fonts, js, images, sprite)
);

const dev = gulp.series(
		build,
		gulp.parallel(server, watcher)
);

// tasks
export { watcher, pug, scss, fonts, js, images, sprite };

// develop
export default options.isProduction ? build : dev;