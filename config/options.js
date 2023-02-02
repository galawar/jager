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
	},

	sprite: {
		shape: {
			dimension: {
				maxWidth: 500,
				maxHeight: 500
			},
			spacing: {
				padding: 0
			},
			transform: [{
				'svgo': {
					'plugins': [
						{
							name: 'removeViewBox',
							active: true
						},
						{
							name: 'removeUnusedNS',
							active: false
						},
						{
							name: 'cleanupIDs',
							active: false
						},
						{
							name: 'removeComments',
							active: true
						},
						{
							name: 'removeEmptyAttrs',
							active: true
						},
						{
							name: 'removeEmptyText',
							active: true
						},
						{
							name: 'collapseGroups',
							active: true
						},
						{
							name: 'removeUselessStrokeAndFill',
							active: true
						},
						{
							name: 'removeAttrs',
							active: true,
							params: {
								attrs: '(fill|stroke|style)'
							}
						}
					]
				}
			}]
		},
		mode: {
			stack: {
				sprite: '../sprite.svg'
			}
		}
	}
}