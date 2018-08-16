var path = require('path');
var useDefaultConfig = require('../node_modules/@ionic/app-scripts/config/copy.config.js');

module.exports = function () {
	useDefaultConfig.copyFontawesomeFonts = {
		src: ['{{ROOT}}/node_modules/font-awesome/fonts/**/*'],
		dest: '{{WWW}}/assets/fonts'
	};
	
	useDefaultConfig.copyFontawesomeCss = {
		src: ['{{ROOT}}/node_modules/font-awesome/css/font-awesome.min.css'],
		dest: '{{WWW}}/assets/css'
	};

	return useDefaultConfig;
};