const path = require('path');

module.exports = ({ config }) => {
	// config.resolve.modules.push(path.resolve(__dirname, "../src"));
	config.resolve.modules = [
		...(config.resolve.modules || []),
		path.resolve('./src'),
		// path.resolve('./'),
	];

	config.module.rules.push({
		test: /\.(scss)$/,
		include: path.resolve(__dirname, "./../"),
		use: [
			"style-loader",
			{
				loader: "css-loader",
				options: {
					sourceMap: true,
					importLoaders: 1
				}
			},
			{
				loader: "postcss-loader",
				options: {
					autoprefixer: {
						browsers: ["last 2 versions"]
					},
					sourceMap: true,
					ident: "postcss",
					plugins: () => [autoprefixer]
				}
			},
			{
				loader: "sass-loader",
				options: {
					sourceMap: true,
					// https://www.npmjs.com/package/sass-loader
					implementation: require('node-sass'),
				}
			}
		]
	});

	return config;
};
