;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-pingguo" viewBox="0 0 1064 1024">' +
    '' +
    '<path d="M-48.606208 883.816448"  ></path>' +
    '' +
    '<path d="M1041.337344 883.816448"  ></path>' +
    '' +
    '<path d="M64.3328 847.535104"  ></path>' +
    '' +
    '<path d="M531.136512 264.671232c49.911808-4.226048 86.362112-18.968576 111.896576-34.761728 13.959168-8.635392 28.529664-18.312192 40.04352-29.115392 10.964992-14.560256 18.822144-26.2144 26.884096-38.043648 7.302144-10.724352 12.719104-24.981504 18.102272-43.679744 3.9424-13.714432 7.124992-27.711488 7.124992-44.145664L735.187968 62.239744c-48.272384 3.757056-86.67648 19.247104-112.446464 34.760704-14.816256 8.90368-27.9808 18.312192-40.597504 29.115392-9.325568 11.271168-18.6624 23.478272-26.877952 38.043648-7.13728 12.676096-13.468672 25.87136-18.103296 44.619776-3.605504 14.599168-6.028288 27.706368-6.028288 42.27584L531.134464 264.671232z"  ></path>' +
    '' +
    '<path d="M120.833024 568.546304c-0.423936 11.743232 0.35328 25.33376 1.645568 38.513664 6.387712 65.256448 26.170368 134.386688 68.568064 200.552448 34.957312 54.541312 64.080896 93.55264 94.343168 115.540992 31.174656 22.633472 60.3392 33.815552 87.766016 33.815552 58.151936 0 124.514304-46.027776 178.82624-46.027776 51.555328 0 103.667712 46.027776 157.978624 46.027776 29.067264 0 56.14592-8.863744 82.276352-25.363456 28.18048-17.787904 50.100224-39.804928 71.86432-65.753088 8.953856-10.694656 16.605184-22.017024 25.782272-36.635648 14.964736-23.87456 31.803392-57.769984 53.745664-99.100672l0-6.106112c-80.075776-25.363456-137.678848-95.343616-137.678848-172.841984 0-36.164608 9.645056-68.22912 30.170112-96.75264 21.706752-30.181376 49.374208-51.190784 82.281472-66.694144-49.374208-57.300992-126.713856-89.704448-187.053056-89.704448-68.01408 0-163.465216 41.331712-191.983616 41.331712-29.06624 0-91.057152-38.048768-172.796928-38.048768-53.1968 0-124.804096 18.557952-178.818048 69.047296-35.941376 33.5872-52.534272 84.615168-62.528512 144.186368C122.049536 533.408768 121.506816 549.76 120.833024 568.546304z"  ></path>' +
    '' +
    '<path d="M1000.128512 847.535104"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-s" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M862.71671 1019.416612 193.694467 1019.416612c-27.101241 0-49.157583-22.056342-49.157583-49.157583L144.536884 320.885288c0-27.101241 22.056342-49.157583 49.157583-49.157583l669.022243 0c27.101241 0 49.157583 22.056342 49.157583 49.157583l0 649.372717C911.874293 997.36027 889.817951 1019.416612 862.71671 1019.416612zM193.694467 320.486198l-0.399089 649.77283 669.421332 0.399089c0.217964 0 0.399089-0.181125 0.399089-0.399089L863.115799 320.885288 193.694467 320.486198z"  ></path>' +
    '' +
    '<path d="M276.608875 299.04691l-49.339732-4.743024C243.191788 128.512932 374.670262 3.494591 533.10569 3.494591c153.426345 0 284.409538 120.589472 304.699654 280.501532l-49.169863 6.243191C771.491009 155.021679 661.632949 53.052287 533.10569 53.052287 400.332734 53.052287 290.063305 158.808936 276.608875 299.04691z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)