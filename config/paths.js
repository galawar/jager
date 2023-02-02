const pathSrc = './src';
const pathDest = './public';

export default {
	root: pathDest,

	pug: {
		src: pathSrc + '/pug/*.pug',
		watch: pathSrc + '/pug/**/*.pug',
		dest: pathDest
	},

	scss: {
		src: pathSrc + '/scss/*.scss',
		watch: pathSrc + '/scss/**/*.scss',
		dest: pathDest + '/css'
	},

	js: {
		src: pathSrc + '/js/*.js',
		watch: pathSrc + '/js/**/*.js',
		dest: pathDest + '/js'
	},

	img: {
		src: [pathSrc + '/img/*.{png,jpg,jpeg,gif,svg}', '!' + pathSrc + '/img/sprite_icons/*.svg'],
		icons: pathSrc + '/img/sprite_icons/*.svg',
		watch: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg}',
		dest: pathDest + '/img'
	},

	fonts: {
		src: pathSrc + '/fonts/*.{ttf,otf,ttc,otc,woff,woff2,svg}',
		watch: pathSrc + '/fonts/**/*.{ttf,otf,ttc,otc,woff,woff2,svg}',
		dest: pathDest + '/fonts'
	},
}