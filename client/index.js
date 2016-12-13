'use strict'
var url = require('url')
var bar = require('nprogress')
var statuses = require('statuses')
var started = false

module.exports = function (opts) {
  opts = opts || {}

  var color = 'color' in opts ? opts.color : '#000'
  var css = '#nprogress{pointer-events:none}#nprogress .bar{background:' + color + ';position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;box-shadow:0 0 10px ' + color + ',0 0 5px ' + color + ';opacity:1;-webkit-transform:rotate(3deg) translate(0,-4px);-ms-transform:rotate(3deg) translate(0,-4px);transform:rotate(3deg) translate(0,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:2px solid transparent;border-top-color:' + color + ';border-left-color:' + color + ';border-radius:50%;-webkit-animation:nprogress-spinner .4s linear infinite;animation:nprogress-spinner .4s linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}'
  var style = opts.style === false ? '' : '<style>' + css + '</style>'

  bar.configure({
    parent: 'parent' in opts ? opts.parent : undefined,
    showSpinner: 'spinner' in opts ? opts.spinner : true,
    template: style + bar.settings.template
  })

  return function progress (ctx, next) {
    var req = ctx.req
    var res = ctx.res
    var hash = req.hash
    var path = req.path
    var referrer = req.get('Referrer')

    // Skip initial renders.
    if (!started && !opts.onload) {
      started = true
      return next().then(onStart, onStart)
    }

    // Hashes on the same path don't trigger a page load. (But can end one.)
    if (hash && referrer && url.parse(referrer).path === path) {
      if (bar.isStarted()) bar.done()
      return next()
    }

    // Ensure the progress bar is started.
    if (!bar.isStarted()) bar.start()

    return next().then(onDone, onDone)

    function onStart (err) {
      // Reset the started if we got a redirect on the first request.
      started = !isRedirect(res)
      if (err) return Promise.reject(err)
    }

    function onDone (err) {
      if (!isRedirect(res)) bar.done()
      if (err) return Promise.reject(err)
    }
  }
}

/**
 * Returns true if a given server response was redirected.
 */
function isRedirect (res) {
  return (
    statuses.redirect[res.status] ||
    (res.get('Location') && !res.get('Refresh'))
  )
}
