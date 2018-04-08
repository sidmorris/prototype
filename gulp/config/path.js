module.exports = {
  SASS: [
    // 'source/style',
    // 'node_modules/foundation-sites/scss',
		'node_modules/bootstrap/scss',
		// 'node_modules/uikit/src/scss'
    // 'node_modules/motion-ui/src'
  ],
  JS_FOUNDATION: [
		'node_modules/jquery/dist/jquery.js',
		// 'node_modules/uikit/dist/js/uikit.js',
		// 'node_modules/uikit/dist/js/uikit-icons.js'
  ],
  CSS_FOUNDATION: [
    
  ],
  TASKS: [
    './gulp/tasks/foundation.js',
    './gulp/tasks/js_app.js',
    './gulp/tasks/svg.js',
    './gulp/tasks/copy.js',
    './gulp/tasks/clear.js',
    './gulp/tasks/sass.js',
    './gulp/tasks/pug.js',
    './gulp/tasks/serve.js',
    './gulp/tasks/watch.js'
  ],
  ROOT: 'build'
};