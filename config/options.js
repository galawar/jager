const isProduction = process.argv.includes('--production');
const isDevelopment = !isProduction;

export default {
	isProduction: isProduction,
	isDevelopment: isDevelopment,

	webpack: {
		mode: isProduction ? 'production' : 'development'
	},

	imagemin: {
		verbose: true
	},

	fonter: {
		formats: ['ttf', 'woff', 'svg']
	}
}