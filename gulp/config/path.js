module.exports = {
  JS_FOUNDATION: [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/uikit/dist/js/uikit.min.js',
    'node_modules/uikit/dist/js/uikit-icons.min.js'
    // 'node_modules/slicknav/dist/jquery.slicknav.min.js',
    // 'node_modules/owl.carousel/dist/owl.carousel.min.js',
    // 'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js'
  ],
  CSS_FOUNDATION: [
    'node_modules/normalize.css/normalize.css'
    // 'node_modules/owl.carousel/dist/assets/owl.carousel.min.css',
    // 'node_modules/magnific-popup/dist/magnific-popup.css',
    // 'node_modules/slicknav/dist/slicknav.min.css',
  ],
  TASKS: [
    './gulp/tasks/foundation.js',
    './gulp/tasks/js_app.js',
    './gulp/tasks/svg.js',
    './gulp/tasks/copy.js',
    './gulp/tasks/clear.js',
    './gulp/tasks/uncss.js',
    './gulp/tasks/sass.js',
    './gulp/tasks/pug.js',
    './gulp/tasks/serve.js',
    './gulp/tasks/watch.js'
  ],
  ROOT: 'build'
};