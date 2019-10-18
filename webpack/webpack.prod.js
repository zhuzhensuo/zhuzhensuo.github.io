let merge = require('webpack-merge'),
	{ CleanWebpackPlugin } = require('clean-webpack-plugin'),
	config = require('./webpack.config.js'),
	transferWebpackPlugin = require('copy-webpack-plugin');//�ļ������ļ����Ḵ��
	optimizeCssAssets = require('optimize-css-assets-webpack-plugin'),//ѹ��css
	uglifyjsPlugin = require('uglifyjs-webpack-plugin');
module.exports = merge(config,{
	mode:'production',
	optimization:{
		minimizer:[new optimizeCssAssets()]
	},
	module:{
		
	},
	plugins:[
		new optimizeCssAssets({
            assetNameRegExp: /\.style\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        }),
		new uglifyjsPlugin(),
		new transferWebpackPlugin([{
			from:'static',
			to:'static'
		}]),
		new CleanWebpackPlugin(),
	]
});