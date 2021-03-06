module.exports = {
  SASS: [
    // 'source/style',
    'node_modules/foundation-sites/scss',
    'node_modules/motion-ui/src'
  ],
  JS_FOUNDATION: [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/foundation-sites/dist/js/plugins/foundation.core.js',//impotant
    'node_modules/foundation-sites/dist/js/plugins/foundation.util.mediaQuery.js',//impotant
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.abide.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.accordion.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.accordionMenu.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.drilldown.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.dropdown.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.dropdownMenu.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.equalizer.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.interchange.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.magellan.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.offcanvas.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.orbit.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.responsiveAccordionTabs.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.responsiveMenu.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.responsiveToggle.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.reveal.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.slider.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.smoothScroll.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.sticky.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.tabs.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.toggler.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.tooltip.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.util.box.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.util.imageLoader.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.util.keyboard.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.util.motion.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.util.nest.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.util.timer.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.util.timerAndImageLoader.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.util.touch.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.util.triggers.js',
    // 'node_modules/foundation-sites/dist/js/plugins/foundation.zf.responsiveAccordionTabs.js'
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