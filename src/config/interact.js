/* interact.js 1.10.11 | https://interactjs.io/license */
!function (t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).interact = t()
}((function () {
  var t = {};
  Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, t.default = function (t) {
    return !(!t || !t.Window) && t instanceof t.Window
  };
  var e = {};
  Object.defineProperty(e, "__esModule", {value: !0}), e.init = o, e.getWindow = function (e) {
    return (0, t.default)(e) ? e : (e.ownerDocument || e).defaultView || r.window
  }, e.window = e.realWindow = void 0;
  var n = void 0;
  e.realWindow = n;
  var r = void 0;

  function o(t) {
    e.realWindow = n = t;
    var o = t.document.createTextNode("");
    o.ownerDocument !== t.document && "function" == typeof t.wrap && t.wrap(o) === o && (t = t.wrap(t)), e.window = r = t
  }

  e.window = r, "undefined" != typeof window && window && o(window);
  var i = {};

  function a(t) {
    return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
  var s = function (t) {
    return !!t && "object" === a(t)
  }, l = function (t) {
    return "function" == typeof t
  }, u = {
    window: function (n) {
      return n === e.window || (0, t.default)(n)
    }, docFrag: function (t) {
      return s(t) && 11 === t.nodeType
    }, object: s, func: l, number: function (t) {
      return "number" == typeof t
    }, bool: function (t) {
      return "boolean" == typeof t
    }, string: function (t) {
      return "string" == typeof t
    }, element: function (t) {
      if (!t || "object" !== a(t)) return !1;
      var n = e.getWindow(t) || e.window;
      return /object|function/.test(a(n.Element)) ? t instanceof n.Element : 1 === t.nodeType && "string" == typeof t.nodeName
    }, plainObject: function (t) {
      return s(t) && !!t.constructor && /function Object\b/.test(t.constructor.toString())
    }, array: function (t) {
      return s(t) && void 0 !== t.length && l(t.splice)
    }
  };
  i.default = u;
  var c = {};

  function f(t) {
    var e = t.interaction;
    if ("drag" === e.prepared.name) {
      var n = e.prepared.axis;
      "x" === n ? (e.coords.cur.page.y = e.coords.start.page.y, e.coords.cur.client.y = e.coords.start.client.y, e.coords.velocity.client.y = 0, e.coords.velocity.page.y = 0) : "y" === n && (e.coords.cur.page.x = e.coords.start.page.x, e.coords.cur.client.x = e.coords.start.client.x, e.coords.velocity.client.x = 0, e.coords.velocity.page.x = 0)
    }
  }

  function d(t) {
    var e = t.iEvent, n = t.interaction;
    if ("drag" === n.prepared.name) {
      var r = n.prepared.axis;
      if ("x" === r || "y" === r) {
        var o = "x" === r ? "y" : "x";
        e.page[o] = n.coords.start.page[o], e.client[o] = n.coords.start.client[o], e.delta[o] = 0
      }
    }
  }

  Object.defineProperty(c, "__esModule", {value: !0}), c.default = void 0;
  var p = {
    id: "actions/drag",
    install: function (t) {
      var e = t.actions, n = t.Interactable, r = t.defaults;
      n.prototype.draggable = p.draggable, e.map.drag = p, e.methodDict.drag = "draggable", r.actions.drag = p.defaults
    },
    listeners: {
      "interactions:before-action-move": f,
      "interactions:action-resume": f,
      "interactions:action-move": d,
      "auto-start:check": function (t) {
        var e = t.interaction, n = t.interactable, r = t.buttons, o = n.options.drag;
        if (o && o.enabled && (!e.pointerIsDown || !/mouse|pointer/.test(e.pointerType) || 0 != (r & n.options.drag.mouseButtons))) return t.action = {
          name: "drag",
          axis: "start" === o.lockAxis ? o.startAxis : o.lockAxis
        }, !1
      }
    },
    draggable: function (t) {
      return i.default.object(t) ? (this.options.drag.enabled = !1 !== t.enabled, this.setPerAction("drag", t), this.setOnEvents("drag", t), /^(xy|x|y|start)$/.test(t.lockAxis) && (this.options.drag.lockAxis = t.lockAxis), /^(xy|x|y)$/.test(t.startAxis) && (this.options.drag.startAxis = t.startAxis), this) : i.default.bool(t) ? (this.options.drag.enabled = t, this) : this.options.drag
    },
    beforeMove: f,
    move: d,
    defaults: {startAxis: "xy", lockAxis: "xy"},
    getCursor: function () {
      return "move"
    }
  }, v = p;
  c.default = v;
  var h = {};
  Object.defineProperty(h, "__esModule", {value: !0}), h.default = void 0;
  var g = {
    init: function (t) {
      var e = t;
      g.document = e.document, g.DocumentFragment = e.DocumentFragment || y, g.SVGElement = e.SVGElement || y, g.SVGSVGElement = e.SVGSVGElement || y, g.SVGElementInstance = e.SVGElementInstance || y, g.Element = e.Element || y, g.HTMLElement = e.HTMLElement || g.Element, g.Event = e.Event, g.Touch = e.Touch || y, g.PointerEvent = e.PointerEvent || e.MSPointerEvent
    },
    document: null,
    DocumentFragment: null,
    SVGElement: null,
    SVGSVGElement: null,
    SVGElementInstance: null,
    Element: null,
    HTMLElement: null,
    Event: null,
    Touch: null,
    PointerEvent: null
  };

  function y() {
  }

  var m = g;
  h.default = m;
  var b = {};
  Object.defineProperty(b, "__esModule", {value: !0}), b.default = void 0;
  var x = {
    init: function (t) {
      var e = h.default.Element, n = t.navigator || {};
      x.supportsTouch = "ontouchstart" in t || i.default.func(t.DocumentTouch) && h.default.document instanceof t.DocumentTouch, x.supportsPointerEvent = !1 !== n.pointerEnabled && !!h.default.PointerEvent, x.isIOS = /iP(hone|od|ad)/.test(n.platform), x.isIOS7 = /iP(hone|od|ad)/.test(n.platform) && /OS 7[^\d]/.test(n.appVersion), x.isIe9 = /MSIE 9/.test(n.userAgent), x.isOperaMobile = "Opera" === n.appName && x.supportsTouch && /Presto/.test(n.userAgent), x.prefixedMatchesSelector = "matches" in e.prototype ? "matches" : "webkitMatchesSelector" in e.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in e.prototype ? "mozMatchesSelector" : "oMatchesSelector" in e.prototype ? "oMatchesSelector" : "msMatchesSelector", x.pEventTypes = x.supportsPointerEvent ? h.default.PointerEvent === t.MSPointerEvent ? {
        up: "MSPointerUp",
        down: "MSPointerDown",
        over: "mouseover",
        out: "mouseout",
        move: "MSPointerMove",
        cancel: "MSPointerCancel"
      } : {
        up: "pointerup",
        down: "pointerdown",
        over: "pointerover",
        out: "pointerout",
        move: "pointermove",
        cancel: "pointercancel"
      } : null, x.wheelEvent = h.default.document && "onmousewheel" in h.default.document ? "mousewheel" : "wheel"
    },
    supportsTouch: null,
    supportsPointerEvent: null,
    isIOS7: null,
    isIOS: null,
    isIe9: null,
    isOperaMobile: null,
    prefixedMatchesSelector: null,
    pEventTypes: null,
    wheelEvent: null
  }, w = x;
  b.default = w;
  var _ = {};

  function P(t) {
    var e = t.parentNode;
    if (i.default.docFrag(e)) {
      for (; (e = e.host) && i.default.docFrag(e);) ;
      return e
    }
    return e
  }

  function O(t, n) {
    return e.window !== e.realWindow && (n = n.replace(/\/deep\//g, " ")), t[b.default.prefixedMatchesSelector](n)
  }

  Object.defineProperty(_, "__esModule", {value: !0}), _.nodeContains = function (t, e) {
    if (t.contains) return t.contains(e);
    for (; e;) {
      if (e === t) return !0;
      e = e.parentNode
    }
    return !1
  }, _.closest = function (t, e) {
    for (; i.default.element(t);) {
      if (O(t, e)) return t;
      t = P(t)
    }
    return null
  }, _.parentNode = P, _.matchesSelector = O, _.indexOfDeepestElement = function (t) {
    for (var n, r = [], o = 0; o < t.length; o++) {
      var i = t[o], a = t[n];
      if (i && o !== n) if (a) {
        var s = S(i), l = S(a);
        if (s !== i.ownerDocument) if (l !== i.ownerDocument) if (s !== l) {
          r = r.length ? r : E(a);
          var u = void 0;
          if (a instanceof h.default.HTMLElement && i instanceof h.default.SVGElement && !(i instanceof h.default.SVGSVGElement)) {
            if (i === l) continue;
            u = i.ownerSVGElement
          } else u = i;
          for (var c = E(u, a.ownerDocument), f = 0; c[f] && c[f] === r[f];) f++;
          var d = [c[f - 1], c[f], r[f]];
          if (d[0]) for (var p = d[0].lastChild; p;) {
            if (p === d[1]) {
              n = o, r = c;
              break
            }
            if (p === d[2]) break;
            p = p.previousSibling
          }
        } else v = i, g = a, void 0, void 0, (parseInt(e.getWindow(v).getComputedStyle(v).zIndex, 10) || 0) >= (parseInt(e.getWindow(g).getComputedStyle(g).zIndex, 10) || 0) && (n = o); else n = o
      } else n = o
    }
    var v, g;
    return n
  }, _.matchesUpTo = function (t, e, n) {
    for (; i.default.element(t);) {
      if (O(t, e)) return !0;
      if ((t = P(t)) === n) return O(t, e)
    }
    return !1
  }, _.getActualElement = function (t) {
    return t.correspondingUseElement || t
  }, _.getScrollXY = T, _.getElementClientRect = M, _.getElementRect = function (t) {
    var n = M(t);
    if (!b.default.isIOS7 && n) {
      var r = T(e.getWindow(t));
      n.left += r.x, n.right += r.x, n.top += r.y, n.bottom += r.y
    }
    return n
  }, _.getPath = function (t) {
    for (var e = []; t;) e.push(t), t = P(t);
    return e
  }, _.trySelector = function (t) {
    return !!i.default.string(t) && (h.default.document.querySelector(t), !0)
  };
  var S = function (t) {
    return t.parentNode || t.host
  };

  function E(t, e) {
    for (var n, r = [], o = t; (n = S(o)) && o !== e && n !== o.ownerDocument;) r.unshift(o), o = n;
    return r
  }

  function T(t) {
    return {
      x: (t = t || e.window).scrollX || t.document.documentElement.scrollLeft,
      y: t.scrollY || t.document.documentElement.scrollTop
    }
  }

  function M(t) {
    var e = t instanceof h.default.SVGElement ? t.getBoundingClientRect() : t.getClientRects()[0];
    return e && {
      left: e.left,
      right: e.right,
      top: e.top,
      bottom: e.bottom,
      width: e.width || e.right - e.left,
      height: e.height || e.bottom - e.top
    }
  }

  var j = {};
  Object.defineProperty(j, "__esModule", {value: !0}), j.default = function (t, e) {
    for (var n in e) t[n] = e[n];
    return t
  };
  var k = {};

  function I(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r
  }

  function D(t, e, n) {
    return "parent" === t ? (0, _.parentNode)(n) : "self" === t ? e.getRect(n) : (0, _.closest)(n, t)
  }

  Object.defineProperty(k, "__esModule", {value: !0}), k.getStringOptionResult = D, k.resolveRectLike = function (t, e, n, r) {
    var o, a = t;
    return i.default.string(a) ? a = D(a, e, n) : i.default.func(a) && (a = a.apply(void 0, function (t) {
      if (Array.isArray(t)) return I(t)
    }(o = r) || function (t) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
    }(o) || function (t, e) {
      if (t) {
        if ("string" == typeof t) return I(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? I(t, e) : void 0
      }
    }(o) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }())), i.default.element(a) && (a = (0, _.getElementRect)(a)), a
  }, k.rectToXY = function (t) {
    return t && {x: "x" in t ? t.x : t.left, y: "y" in t ? t.y : t.top}
  }, k.xywhToTlbr = function (t) {
    return !t || "left" in t && "top" in t || ((t = (0, j.default)({}, t)).left = t.x || 0, t.top = t.y || 0, t.right = t.right || t.left + t.width, t.bottom = t.bottom || t.top + t.height), t
  }, k.tlbrToXywh = function (t) {
    return !t || "x" in t && "y" in t || ((t = (0, j.default)({}, t)).x = t.left || 0, t.y = t.top || 0, t.width = t.width || (t.right || 0) - t.x, t.height = t.height || (t.bottom || 0) - t.y), t
  }, k.addEdges = function (t, e, n) {
    t.left && (e.left += n.x), t.right && (e.right += n.x), t.top && (e.top += n.y), t.bottom && (e.bottom += n.y), e.width = e.right - e.left, e.height = e.bottom - e.top
  };
  var A = {};
  Object.defineProperty(A, "__esModule", {value: !0}), A.default = function (t, e, n) {
    var r = t.options[n], o = r && r.origin || t.options.origin, i = (0, k.resolveRectLike)(o, t, e, [t && e]);
    return (0, k.rectToXY)(i) || {x: 0, y: 0}
  };
  var R = {};

  function z(t) {
    return t.trim().split(/ +/)
  }

  Object.defineProperty(R, "__esModule", {value: !0}), R.default = function t(e, n, r) {
    if (r = r || {}, i.default.string(e) && -1 !== e.search(" ") && (e = z(e)), i.default.array(e)) return e.reduce((function (e, o) {
      return (0, j.default)(e, t(o, n, r))
    }), r);
    if (i.default.object(e) && (n = e, e = ""), i.default.func(n)) r[e] = r[e] || [], r[e].push(n); else if (i.default.array(n)) for (var o = 0; o < n.length; o++) {
      var a;
      a = n[o], t(e, a, r)
    } else if (i.default.object(n)) for (var s in n) {
      var l = z(s).map((function (t) {
        return "".concat(e).concat(t)
      }));
      t(l, n[s], r)
    }
    return r
  };
  var C = {};
  Object.defineProperty(C, "__esModule", {value: !0}), C.default = void 0, C.default = function (t, e) {
    return Math.sqrt(t * t + e * e)
  };
  var F = {};

  function X(t, e) {
    for (var n in e) {
      var r = X.prefixedPropREs, o = !1;
      for (var i in r) if (0 === n.indexOf(i) && r[i].test(n)) {
        o = !0;
        break
      }
      o || "function" == typeof e[n] || (t[n] = e[n])
    }
    return t
  }

  Object.defineProperty(F, "__esModule", {value: !0}), F.default = void 0, X.prefixedPropREs = {
    webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/,
    moz: /(Pressure)$/
  };
  var Y = X;
  F.default = Y;
  var B = {};

  function W(t) {
    return t instanceof h.default.Event || t instanceof h.default.Touch
  }

  function L(t, e, n) {
    return t = t || "page", (n = n || {}).x = e[t + "X"], n.y = e[t + "Y"], n
  }

  function U(t, e) {
    return e = e || {
      x: 0,
      y: 0
    }, b.default.isOperaMobile && W(t) ? (L("screen", t, e), e.x += window.scrollX, e.y += window.scrollY) : L("page", t, e), e
  }

  function V(t, e) {
    return e = e || {}, b.default.isOperaMobile && W(t) ? L("screen", t, e) : L("client", t, e), e
  }

  function N(t) {
    var e = [];
    return i.default.array(t) ? (e[0] = t[0], e[1] = t[1]) : "touchend" === t.type ? 1 === t.touches.length ? (e[0] = t.touches[0], e[1] = t.changedTouches[0]) : 0 === t.touches.length && (e[0] = t.changedTouches[0], e[1] = t.changedTouches[1]) : (e[0] = t.touches[0], e[1] = t.touches[1]), e
  }

  function q(t) {
    for (var e = {pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0}, n = 0; n < t.length; n++) {
      var r = t[n];
      for (var o in e) e[o] += r[o]
    }
    for (var i in e) e[i] /= t.length;
    return e
  }

  Object.defineProperty(B, "__esModule", {value: !0}), B.copyCoords = function (t, e) {
    t.page = t.page || {}, t.page.x = e.page.x, t.page.y = e.page.y, t.client = t.client || {}, t.client.x = e.client.x, t.client.y = e.client.y, t.timeStamp = e.timeStamp
  }, B.setCoordDeltas = function (t, e, n) {
    t.page.x = n.page.x - e.page.x, t.page.y = n.page.y - e.page.y, t.client.x = n.client.x - e.client.x, t.client.y = n.client.y - e.client.y, t.timeStamp = n.timeStamp - e.timeStamp
  }, B.setCoordVelocity = function (t, e) {
    var n = Math.max(e.timeStamp / 1e3, .001);
    t.page.x = e.page.x / n, t.page.y = e.page.y / n, t.client.x = e.client.x / n, t.client.y = e.client.y / n, t.timeStamp = n
  }, B.setZeroCoords = function (t) {
    t.page.x = 0, t.page.y = 0, t.client.x = 0, t.client.y = 0
  }, B.isNativePointer = W, B.getXY = L, B.getPageXY = U, B.getClientXY = V, B.getPointerId = function (t) {
    return i.default.number(t.pointerId) ? t.pointerId : t.identifier
  }, B.setCoords = function (t, e, n) {
    var r = e.length > 1 ? q(e) : e[0];
    U(r, t.page), V(r, t.client), t.timeStamp = n
  }, B.getTouchPair = N, B.pointerAverage = q, B.touchBBox = function (t) {
    if (!t.length) return null;
    var e = N(t), n = Math.min(e[0].pageX, e[1].pageX), r = Math.min(e[0].pageY, e[1].pageY),
      o = Math.max(e[0].pageX, e[1].pageX), i = Math.max(e[0].pageY, e[1].pageY);
    return {x: n, y: r, left: n, top: r, right: o, bottom: i, width: o - n, height: i - r}
  }, B.touchDistance = function (t, e) {
    var n = e + "X", r = e + "Y", o = N(t), i = o[0][n] - o[1][n], a = o[0][r] - o[1][r];
    return (0, C.default)(i, a)
  }, B.touchAngle = function (t, e) {
    var n = e + "X", r = e + "Y", o = N(t), i = o[1][n] - o[0][n], a = o[1][r] - o[0][r];
    return 180 * Math.atan2(a, i) / Math.PI
  }, B.getPointerType = function (t) {
    return i.default.string(t.pointerType) ? t.pointerType : i.default.number(t.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][t.pointerType] : /touch/.test(t.type || "") || t instanceof h.default.Touch ? "touch" : "mouse"
  }, B.getEventTargets = function (t) {
    var e = i.default.func(t.composedPath) ? t.composedPath() : t.path;
    return [_.getActualElement(e ? e[0] : t.target), _.getActualElement(t.currentTarget)]
  }, B.newCoords = function () {
    return {page: {x: 0, y: 0}, client: {x: 0, y: 0}, timeStamp: 0}
  }, B.coordsToEvent = function (t) {
    return {
      coords: t, get page() {
        return this.coords.page
      }, get client() {
        return this.coords.client
      }, get timeStamp() {
        return this.coords.timeStamp
      }, get pageX() {
        return this.coords.page.x
      }, get pageY() {
        return this.coords.page.y
      }, get clientX() {
        return this.coords.client.x
      }, get clientY() {
        return this.coords.client.y
      }, get pointerId() {
        return this.coords.pointerId
      }, get target() {
        return this.coords.target
      }, get type() {
        return this.coords.type
      }, get pointerType() {
        return this.coords.pointerType
      }, get buttons() {
        return this.coords.buttons
      }, preventDefault: function () {
      }
    }
  }, Object.defineProperty(B, "pointerExtend", {
    enumerable: !0, get: function () {
      return F.default
    }
  });
  var $ = {};

  function G(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function H(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t
  }

  Object.defineProperty($, "__esModule", {value: !0}), $.BaseEvent = void 0;
  var K = function () {
    function t(e) {
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), H(this, "type", void 0), H(this, "target", void 0), H(this, "currentTarget", void 0), H(this, "interactable", void 0), H(this, "_interaction", void 0), H(this, "timeStamp", void 0), H(this, "immediatePropagationStopped", !1), H(this, "propagationStopped", !1), this._interaction = e
    }

    var e, n;
    return e = t, (n = [{
      key: "preventDefault", value: function () {
      }
    }, {
      key: "stopPropagation", value: function () {
        this.propagationStopped = !0
      }
    }, {
      key: "stopImmediatePropagation", value: function () {
        this.immediatePropagationStopped = this.propagationStopped = !0
      }
    }]) && G(e.prototype, n), t
  }();
  $.BaseEvent = K, Object.defineProperty(K.prototype, "interaction", {
    get: function () {
      return this._interaction._proxy
    }, set: function () {
    }
  });
  var Z = {};
  Object.defineProperty(Z, "__esModule", {value: !0}), Z.find = Z.findIndex = Z.from = Z.merge = Z.remove = Z.contains = void 0, Z.contains = function (t, e) {
    return -1 !== t.indexOf(e)
  }, Z.remove = function (t, e) {
    return t.splice(t.indexOf(e), 1)
  };
  var J = function (t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      t.push(r)
    }
    return t
  };
  Z.merge = J, Z.from = function (t) {
    return J([], t)
  };
  var Q = function (t, e) {
    for (var n = 0; n < t.length; n++) if (e(t[n], n, t)) return n;
    return -1
  };
  Z.findIndex = Q, Z.find = function (t, e) {
    return t[Q(t, e)]
  };
  var tt = {};

  function et(t) {
    return (et = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function nt(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function rt(t, e) {
    return (rt = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }

  function ot(t, e) {
    return !e || "object" !== et(e) && "function" != typeof e ? it(t) : e
  }

  function it(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
  }

  function at(t) {
    return (at = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  function st(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t
  }

  Object.defineProperty(tt, "__esModule", {value: !0}), tt.DropEvent = void 0;
  var lt = function (t) {
    !function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && rt(t, e)
    }(a, t);
    var e, n, r, o, i = (r = a, o = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
        }))), !0
      } catch (t) {
        return !1
      }
    }(), function () {
      var t, e = at(r);
      if (o) {
        var n = at(this).constructor;
        t = Reflect.construct(e, arguments, n)
      } else t = e.apply(this, arguments);
      return ot(this, t)
    });

    function a(t, e, n) {
      var r;
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, a), st(it(r = i.call(this, e._interaction)), "target", void 0), st(it(r), "dropzone", void 0), st(it(r), "dragEvent", void 0), st(it(r), "relatedTarget", void 0), st(it(r), "draggable", void 0), st(it(r), "timeStamp", void 0), st(it(r), "propagationStopped", !1), st(it(r), "immediatePropagationStopped", !1);
      var o = "dragleave" === n ? t.prev : t.cur, s = o.element, l = o.dropzone;
      return r.type = n, r.target = s, r.currentTarget = s, r.dropzone = l, r.dragEvent = e, r.relatedTarget = e.target, r.draggable = e.interactable, r.timeStamp = e.timeStamp, r
    }

    return e = a, (n = [{
      key: "reject", value: function () {
        var t = this, e = this._interaction.dropState;
        if ("dropactivate" === this.type || this.dropzone && e.cur.dropzone === this.dropzone && e.cur.element === this.target) if (e.prev.dropzone = this.dropzone, e.prev.element = this.target, e.rejected = !0, e.events.enter = null, this.stopImmediatePropagation(), "dropactivate" === this.type) {
          var n = e.activeDrops, r = Z.findIndex(n, (function (e) {
            var n = e.dropzone, r = e.element;
            return n === t.dropzone && r === t.target
          }));
          e.activeDrops.splice(r, 1);
          var o = new a(e, this.dragEvent, "dropdeactivate");
          o.dropzone = this.dropzone, o.target = this.target, this.dropzone.fire(o)
        } else this.dropzone.fire(new a(e, this.dragEvent, "dragleave"))
      }
    }, {
      key: "preventDefault", value: function () {
      }
    }, {
      key: "stopPropagation", value: function () {
        this.propagationStopped = !0
      }
    }, {
      key: "stopImmediatePropagation", value: function () {
        this.immediatePropagationStopped = this.propagationStopped = !0
      }
    }]) && nt(e.prototype, n), a
  }($.BaseEvent);
  tt.DropEvent = lt;
  var ut = {};

  function ct(t, e) {
    for (var n = 0; n < t.slice().length; n++) {
      var r = t.slice()[n], o = r.dropzone, i = r.element;
      e.dropzone = o, e.target = i, o.fire(e), e.propagationStopped = e.immediatePropagationStopped = !1
    }
  }

  function ft(t, e) {
    for (var n = function (t, e) {
      for (var n = t.interactables, r = [], o = 0; o < n.list.length; o++) {
        var a = n.list[o];
        if (a.options.drop.enabled) {
          var s = a.options.drop.accept;
          if (!(i.default.element(s) && s !== e || i.default.string(s) && !_.matchesSelector(e, s) || i.default.func(s) && !s({
            dropzone: a,
            draggableElement: e
          }))) for (var l = i.default.string(a.target) ? a._context.querySelectorAll(a.target) : i.default.array(a.target) ? a.target : [a.target], u = 0; u < l.length; u++) {
            var c = l[u];
            c !== e && r.push({dropzone: a, element: c, rect: a.getRect(c)})
          }
        }
      }
      return r
    }(t, e), r = 0; r < n.length; r++) {
      var o = n[r];
      o.rect = o.dropzone.getRect(o.element)
    }
    return n
  }

  function dt(t, e, n) {
    for (var r = t.dropState, o = t.interactable, i = t.element, a = [], s = 0; s < r.activeDrops.length; s++) {
      var l = r.activeDrops[s], u = l.dropzone, c = l.element, f = l.rect;
      a.push(u.dropCheck(e, n, o, i, c, f) ? c : null)
    }
    var d = _.indexOfDeepestElement(a);
    return r.activeDrops[d] || null
  }

  function pt(t, e, n) {
    var r = t.dropState, o = {enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null};
    return "dragstart" === n.type && (o.activate = new tt.DropEvent(r, n, "dropactivate"), o.activate.target = null, o.activate.dropzone = null), "dragend" === n.type && (o.deactivate = new tt.DropEvent(r, n, "dropdeactivate"), o.deactivate.target = null, o.deactivate.dropzone = null), r.rejected || (r.cur.element !== r.prev.element && (r.prev.dropzone && (o.leave = new tt.DropEvent(r, n, "dragleave"), n.dragLeave = o.leave.target = r.prev.element, n.prevDropzone = o.leave.dropzone = r.prev.dropzone), r.cur.dropzone && (o.enter = new tt.DropEvent(r, n, "dragenter"), n.dragEnter = r.cur.element, n.dropzone = r.cur.dropzone)), "dragend" === n.type && r.cur.dropzone && (o.drop = new tt.DropEvent(r, n, "drop"), n.dropzone = r.cur.dropzone, n.relatedTarget = r.cur.element), "dragmove" === n.type && r.cur.dropzone && (o.move = new tt.DropEvent(r, n, "dropmove"), o.move.dragmove = n, n.dropzone = r.cur.dropzone)), o
  }

  function vt(t, e) {
    var n = t.dropState, r = n.activeDrops, o = n.cur, i = n.prev;
    e.leave && i.dropzone.fire(e.leave), e.enter && o.dropzone.fire(e.enter), e.move && o.dropzone.fire(e.move), e.drop && o.dropzone.fire(e.drop), e.deactivate && ct(r, e.deactivate), n.prev.dropzone = o.dropzone, n.prev.element = o.element
  }

  function ht(t, e) {
    var n = t.interaction, r = t.iEvent, o = t.event;
    if ("dragmove" === r.type || "dragend" === r.type) {
      var i = n.dropState;
      e.dynamicDrop && (i.activeDrops = ft(e, n.element));
      var a = r, s = dt(n, a, o);
      i.rejected = i.rejected && !!s && s.dropzone === i.cur.dropzone && s.element === i.cur.element, i.cur.dropzone = s && s.dropzone, i.cur.element = s && s.element, i.events = pt(n, 0, a)
    }
  }

  Object.defineProperty(ut, "__esModule", {value: !0}), ut.default = void 0;
  var gt = {
    id: "actions/drop",
    install: function (t) {
      var e = t.actions, n = t.interactStatic, r = t.Interactable, o = t.defaults;
      t.usePlugin(c.default), r.prototype.dropzone = function (t) {
        return function (t, e) {
          if (i.default.object(e)) {
            if (t.options.drop.enabled = !1 !== e.enabled, e.listeners) {
              var n = (0, R.default)(e.listeners), r = Object.keys(n).reduce((function (t, e) {
                return t[/^(enter|leave)/.test(e) ? "drag".concat(e) : /^(activate|deactivate|move)/.test(e) ? "drop".concat(e) : e] = n[e], t
              }), {});
              t.off(t.options.drop.listeners), t.on(r), t.options.drop.listeners = r
            }
            return i.default.func(e.ondrop) && t.on("drop", e.ondrop), i.default.func(e.ondropactivate) && t.on("dropactivate", e.ondropactivate), i.default.func(e.ondropdeactivate) && t.on("dropdeactivate", e.ondropdeactivate), i.default.func(e.ondragenter) && t.on("dragenter", e.ondragenter), i.default.func(e.ondragleave) && t.on("dragleave", e.ondragleave), i.default.func(e.ondropmove) && t.on("dropmove", e.ondropmove), /^(pointer|center)$/.test(e.overlap) ? t.options.drop.overlap = e.overlap : i.default.number(e.overlap) && (t.options.drop.overlap = Math.max(Math.min(1, e.overlap), 0)), "accept" in e && (t.options.drop.accept = e.accept), "checker" in e && (t.options.drop.checker = e.checker), t
          }
          return i.default.bool(e) ? (t.options.drop.enabled = e, t) : t.options.drop
        }(this, t)
      }, r.prototype.dropCheck = function (t, e, n, r, o, a) {
        return function (t, e, n, r, o, a, s) {
          var l = !1;
          if (!(s = s || t.getRect(a))) return !!t.options.drop.checker && t.options.drop.checker(e, n, l, t, a, r, o);
          var u = t.options.drop.overlap;
          if ("pointer" === u) {
            var c = (0, A.default)(r, o, "drag"), f = B.getPageXY(e);
            f.x += c.x, f.y += c.y;
            var d = f.x > s.left && f.x < s.right, p = f.y > s.top && f.y < s.bottom;
            l = d && p
          }
          var v = r.getRect(o);
          if (v && "center" === u) {
            var h = v.left + v.width / 2, g = v.top + v.height / 2;
            l = h >= s.left && h <= s.right && g >= s.top && g <= s.bottom
          }
          return v && i.default.number(u) && (l = Math.max(0, Math.min(s.right, v.right) - Math.max(s.left, v.left)) * Math.max(0, Math.min(s.bottom, v.bottom) - Math.max(s.top, v.top)) / (v.width * v.height) >= u), t.options.drop.checker && (l = t.options.drop.checker(e, n, l, t, a, r, o)), l
        }(this, t, e, n, r, o, a)
      }, n.dynamicDrop = function (e) {
        return i.default.bool(e) ? (t.dynamicDrop = e, n) : t.dynamicDrop
      }, (0, j.default)(e.phaselessTypes, {
        dragenter: !0,
        dragleave: !0,
        dropactivate: !0,
        dropdeactivate: !0,
        dropmove: !0,
        drop: !0
      }), e.methodDict.drop = "dropzone", t.dynamicDrop = !1, o.actions.drop = gt.defaults
    },
    listeners: {
      "interactions:before-action-start": function (t) {
        var e = t.interaction;
        "drag" === e.prepared.name && (e.dropState = {
          cur: {dropzone: null, element: null},
          prev: {dropzone: null, element: null},
          rejected: null,
          events: null,
          activeDrops: []
        })
      }, "interactions:after-action-start": function (t, e) {
        var n = t.interaction, r = (t.event, t.iEvent);
        if ("drag" === n.prepared.name) {
          var o = n.dropState;
          o.activeDrops = null, o.events = null, o.activeDrops = ft(e, n.element), o.events = pt(n, 0, r), o.events.activate && (ct(o.activeDrops, o.events.activate), e.fire("actions/drop:start", {
            interaction: n,
            dragEvent: r
          }))
        }
      }, "interactions:action-move": ht, "interactions:after-action-move": function (t, e) {
        var n = t.interaction, r = t.iEvent;
        "drag" === n.prepared.name && (vt(n, n.dropState.events), e.fire("actions/drop:move", {
          interaction: n,
          dragEvent: r
        }), n.dropState.events = {})
      }, "interactions:action-end": function (t, e) {
        if ("drag" === t.interaction.prepared.name) {
          var n = t.interaction, r = t.iEvent;
          ht(t, e), vt(n, n.dropState.events), e.fire("actions/drop:end", {interaction: n, dragEvent: r})
        }
      }, "interactions:stop": function (t) {
        var e = t.interaction;
        if ("drag" === e.prepared.name) {
          var n = e.dropState;
          n && (n.activeDrops = null, n.events = null, n.cur.dropzone = null, n.cur.element = null, n.prev.dropzone = null, n.prev.element = null, n.rejected = !1)
        }
      }
    },
    getActiveDrops: ft,
    getDrop: dt,
    getDropEvents: pt,
    fireDropEvents: vt,
    defaults: {enabled: !1, accept: null, overlap: "pointer"}
  }, yt = gt;
  ut.default = yt;
  var mt = {};

  function bt(t) {
    var e = t.interaction, n = t.iEvent, r = t.phase;
    if ("gesture" === e.prepared.name) {
      var o = e.pointers.map((function (t) {
        return t.pointer
      })), a = "start" === r, s = "end" === r, l = e.interactable.options.deltaSource;
      if (n.touches = [o[0], o[1]], a) n.distance = B.touchDistance(o, l), n.box = B.touchBBox(o), n.scale = 1, n.ds = 0, n.angle = B.touchAngle(o, l), n.da = 0, e.gesture.startDistance = n.distance, e.gesture.startAngle = n.angle; else if (s) {
        var u = e.prevEvent;
        n.distance = u.distance, n.box = u.box, n.scale = u.scale, n.ds = 0, n.angle = u.angle, n.da = 0
      } else n.distance = B.touchDistance(o, l), n.box = B.touchBBox(o), n.scale = n.distance / e.gesture.startDistance, n.angle = B.touchAngle(o, l), n.ds = n.scale - e.gesture.scale, n.da = n.angle - e.gesture.angle;
      e.gesture.distance = n.distance, e.gesture.angle = n.angle, i.default.number(n.scale) && n.scale !== 1 / 0 && !isNaN(n.scale) && (e.gesture.scale = n.scale)
    }
  }

  Object.defineProperty(mt, "__esModule", {value: !0}), mt.default = void 0;
  var xt = {
    id: "actions/gesture",
    before: ["actions/drag", "actions/resize"],
    install: function (t) {
      var e = t.actions, n = t.Interactable, r = t.defaults;
      n.prototype.gesturable = function (t) {
        return i.default.object(t) ? (this.options.gesture.enabled = !1 !== t.enabled, this.setPerAction("gesture", t), this.setOnEvents("gesture", t), this) : i.default.bool(t) ? (this.options.gesture.enabled = t, this) : this.options.gesture
      }, e.map.gesture = xt, e.methodDict.gesture = "gesturable", r.actions.gesture = xt.defaults
    },
    listeners: {
      "interactions:action-start": bt,
      "interactions:action-move": bt,
      "interactions:action-end": bt,
      "interactions:new": function (t) {
        t.interaction.gesture = {angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0}
      },
      "auto-start:check": function (t) {
        if (!(t.interaction.pointers.length < 2)) {
          var e = t.interactable.options.gesture;
          if (e && e.enabled) return t.action = {name: "gesture"}, !1
        }
      }
    },
    defaults: {},
    getCursor: function () {
      return ""
    }
  }, wt = xt;
  mt.default = wt;
  var _t = {};

  function Pt(t, e, n, r, o, a, s) {
    if (!e) return !1;
    if (!0 === e) {
      var l = i.default.number(a.width) ? a.width : a.right - a.left,
        u = i.default.number(a.height) ? a.height : a.bottom - a.top;
      if (s = Math.min(s, Math.abs(("left" === t || "right" === t ? l : u) / 2)), l < 0 && ("left" === t ? t = "right" : "right" === t && (t = "left")), u < 0 && ("top" === t ? t = "bottom" : "bottom" === t && (t = "top")), "left" === t) return n.x < (l >= 0 ? a.left : a.right) + s;
      if ("top" === t) return n.y < (u >= 0 ? a.top : a.bottom) + s;
      if ("right" === t) return n.x > (l >= 0 ? a.right : a.left) - s;
      if ("bottom" === t) return n.y > (u >= 0 ? a.bottom : a.top) - s
    }
    return !!i.default.element(r) && (i.default.element(e) ? e === r : _.matchesUpTo(r, e, o))
  }

  function Ot(t) {
    var e = t.iEvent, n = t.interaction;
    if ("resize" === n.prepared.name && n.resizeAxes) {
      var r = e;
      n.interactable.options.resize.square ? ("y" === n.resizeAxes ? r.delta.x = r.delta.y : r.delta.y = r.delta.x, r.axes = "xy") : (r.axes = n.resizeAxes, "x" === n.resizeAxes ? r.delta.y = 0 : "y" === n.resizeAxes && (r.delta.x = 0))
    }
  }

  Object.defineProperty(_t, "__esModule", {value: !0}), _t.default = void 0;
  var St = {
    id: "actions/resize",
    before: ["actions/drag"],
    install: function (t) {
      var e = t.actions, n = t.browser, r = t.Interactable, o = t.defaults;
      St.cursors = function (t) {
        return t.isIe9 ? {
          x: "e-resize",
          y: "s-resize",
          xy: "se-resize",
          top: "n-resize",
          left: "w-resize",
          bottom: "s-resize",
          right: "e-resize",
          topleft: "se-resize",
          bottomright: "se-resize",
          topright: "ne-resize",
          bottomleft: "ne-resize"
        } : {
          x: "ew-resize",
          y: "ns-resize",
          xy: "nwse-resize",
          top: "ns-resize",
          left: "ew-resize",
          bottom: "ns-resize",
          right: "ew-resize",
          topleft: "nwse-resize",
          bottomright: "nwse-resize",
          topright: "nesw-resize",
          bottomleft: "nesw-resize"
        }
      }(n), St.defaultMargin = n.supportsTouch || n.supportsPointerEvent ? 20 : 10, r.prototype.resizable = function (e) {
        return function (t, e, n) {
          return i.default.object(e) ? (t.options.resize.enabled = !1 !== e.enabled, t.setPerAction("resize", e), t.setOnEvents("resize", e), i.default.string(e.axis) && /^x$|^y$|^xy$/.test(e.axis) ? t.options.resize.axis = e.axis : null === e.axis && (t.options.resize.axis = n.defaults.actions.resize.axis), i.default.bool(e.preserveAspectRatio) ? t.options.resize.preserveAspectRatio = e.preserveAspectRatio : i.default.bool(e.square) && (t.options.resize.square = e.square), t) : i.default.bool(e) ? (t.options.resize.enabled = e, t) : t.options.resize
        }(this, e, t)
      }, e.map.resize = St, e.methodDict.resize = "resizable", o.actions.resize = St.defaults
    },
    listeners: {
      "interactions:new": function (t) {
        t.interaction.resizeAxes = "xy"
      }, "interactions:action-start": function (t) {
        !function (t) {
          var e = t.iEvent, n = t.interaction;
          if ("resize" === n.prepared.name && n.prepared.edges) {
            var r = e, o = n.rect;
            n._rects = {
              start: (0, j.default)({}, o),
              corrected: (0, j.default)({}, o),
              previous: (0, j.default)({}, o),
              delta: {left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0}
            }, r.edges = n.prepared.edges, r.rect = n._rects.corrected, r.deltaRect = n._rects.delta
          }
        }(t), Ot(t)
      }, "interactions:action-move": function (t) {
        !function (t) {
          var e = t.iEvent, n = t.interaction;
          if ("resize" === n.prepared.name && n.prepared.edges) {
            var r = e, o = n.interactable.options.resize.invert, i = "reposition" === o || "negate" === o, a = n.rect,
              s = n._rects, l = s.start, u = s.corrected, c = s.delta, f = s.previous;
            if ((0, j.default)(f, u), i) {
              if ((0, j.default)(u, a), "reposition" === o) {
                if (u.top > u.bottom) {
                  var d = u.top;
                  u.top = u.bottom, u.bottom = d
                }
                if (u.left > u.right) {
                  var p = u.left;
                  u.left = u.right, u.right = p
                }
              }
            } else u.top = Math.min(a.top, l.bottom), u.bottom = Math.max(a.bottom, l.top), u.left = Math.min(a.left, l.right), u.right = Math.max(a.right, l.left);
            for (var v in u.width = u.right - u.left, u.height = u.bottom - u.top, u) c[v] = u[v] - f[v];
            r.edges = n.prepared.edges, r.rect = u, r.deltaRect = c
          }
        }(t), Ot(t)
      }, "interactions:action-end": function (t) {
        var e = t.iEvent, n = t.interaction;
        if ("resize" === n.prepared.name && n.prepared.edges) {
          var r = e;
          r.edges = n.prepared.edges, r.rect = n._rects.corrected, r.deltaRect = n._rects.delta
        }
      }, "auto-start:check": function (t) {
        var e = t.interaction, n = t.interactable, r = t.element, o = t.rect, a = t.buttons;
        if (o) {
          var s = (0, j.default)({}, e.coords.cur.page), l = n.options.resize;
          if (l && l.enabled && (!e.pointerIsDown || !/mouse|pointer/.test(e.pointerType) || 0 != (a & l.mouseButtons))) {
            if (i.default.object(l.edges)) {
              var u = {left: !1, right: !1, top: !1, bottom: !1};
              for (var c in u) u[c] = Pt(c, l.edges[c], s, e._latestPointer.eventTarget, r, o, l.margin || St.defaultMargin);
              u.left = u.left && !u.right, u.top = u.top && !u.bottom, (u.left || u.right || u.top || u.bottom) && (t.action = {
                name: "resize",
                edges: u
              })
            } else {
              var f = "y" !== l.axis && s.x > o.right - St.defaultMargin,
                d = "x" !== l.axis && s.y > o.bottom - St.defaultMargin;
              (f || d) && (t.action = {name: "resize", axes: (f ? "x" : "") + (d ? "y" : "")})
            }
            return !t.action && void 0
          }
        }
      }
    },
    defaults: {square: !1, preserveAspectRatio: !1, axis: "xy", margin: NaN, edges: null, invert: "none"},
    cursors: null,
    getCursor: function (t) {
      var e = t.edges, n = t.axis, r = t.name, o = St.cursors, i = null;
      if (n) i = o[r + n]; else if (e) {
        for (var a = "", s = ["top", "bottom", "left", "right"], l = 0; l < s.length; l++) {
          var u = s[l];
          e[u] && (a += u)
        }
        i = o[a]
      }
      return i
    },
    defaultMargin: null
  }, Et = St;
  _t.default = Et;
  var Tt = {};
  Object.defineProperty(Tt, "__esModule", {value: !0}), Tt.default = void 0;
  var Mt = {
    id: "actions", install: function (t) {
      t.usePlugin(mt.default), t.usePlugin(_t.default), t.usePlugin(c.default), t.usePlugin(ut.default)
    }
  };
  Tt.default = Mt;
  var jt = {};
  Object.defineProperty(jt, "__esModule", {value: !0}), jt.default = void 0;
  var kt, It, Dt = 0, At = {
    request: function (t) {
      return kt(t)
    }, cancel: function (t) {
      return It(t)
    }, init: function (t) {
      if (kt = t.requestAnimationFrame, It = t.cancelAnimationFrame, !kt) for (var e = ["ms", "moz", "webkit", "o"], n = 0; n < e.length; n++) {
        var r = e[n];
        kt = t["".concat(r, "RequestAnimationFrame")], It = t["".concat(r, "CancelAnimationFrame")] || t["".concat(r, "CancelRequestAnimationFrame")]
      }
      kt = kt && kt.bind(t), It = It && It.bind(t), kt || (kt = function (e) {
        var n = Date.now(), r = Math.max(0, 16 - (n - Dt)), o = t.setTimeout((function () {
          e(n + r)
        }), r);
        return Dt = n + r, o
      }, It = function (t) {
        return clearTimeout(t)
      })
    }
  };
  jt.default = At;
  var Rt = {};
  Object.defineProperty(Rt, "__esModule", {value: !0}), Rt.getContainer = Ct, Rt.getScroll = Ft, Rt.getScrollSize = function (t) {
    return i.default.window(t) && (t = window.document.body), {x: t.scrollWidth, y: t.scrollHeight}
  }, Rt.getScrollSizeDelta = function (t, e) {
    var n = t.interaction, r = t.element, o = n && n.interactable.options[n.prepared.name].autoScroll;
    if (!o || !o.enabled) return e(), {x: 0, y: 0};
    var i = Ct(o.container, n.interactable, r), a = Ft(i);
    e();
    var s = Ft(i);
    return {x: s.x - a.x, y: s.y - a.y}
  }, Rt.default = void 0;
  var zt = {
    defaults: {enabled: !1, margin: 60, container: null, speed: 300},
    now: Date.now,
    interaction: null,
    i: 0,
    x: 0,
    y: 0,
    isScrolling: !1,
    prevTime: 0,
    margin: 0,
    speed: 0,
    start: function (t) {
      zt.isScrolling = !0, jt.default.cancel(zt.i), t.autoScroll = zt, zt.interaction = t, zt.prevTime = zt.now(), zt.i = jt.default.request(zt.scroll)
    },
    stop: function () {
      zt.isScrolling = !1, zt.interaction && (zt.interaction.autoScroll = null), jt.default.cancel(zt.i)
    },
    scroll: function () {
      var t = zt.interaction, e = t.interactable, n = t.element, r = t.prepared.name, o = e.options[r].autoScroll,
        a = Ct(o.container, e, n), s = zt.now(), l = (s - zt.prevTime) / 1e3, u = o.speed * l;
      if (u >= 1) {
        var c = {x: zt.x * u, y: zt.y * u};
        if (c.x || c.y) {
          var f = Ft(a);
          i.default.window(a) ? a.scrollBy(c.x, c.y) : a && (a.scrollLeft += c.x, a.scrollTop += c.y);
          var d = Ft(a), p = {x: d.x - f.x, y: d.y - f.y};
          (p.x || p.y) && e.fire({
            type: "autoscroll",
            target: n,
            interactable: e,
            delta: p,
            interaction: t,
            container: a
          })
        }
        zt.prevTime = s
      }
      zt.isScrolling && (jt.default.cancel(zt.i), zt.i = jt.default.request(zt.scroll))
    },
    check: function (t, e) {
      var n;
      return null == (n = t.options[e].autoScroll) ? void 0 : n.enabled
    },
    onInteractionMove: function (t) {
      var e = t.interaction, n = t.pointer;
      if (e.interacting() && zt.check(e.interactable, e.prepared.name)) if (e.simulation) zt.x = zt.y = 0; else {
        var r, o, a, s, l = e.interactable, u = e.element, c = e.prepared.name, f = l.options[c].autoScroll,
          d = Ct(f.container, l, u);
        if (i.default.window(d)) s = n.clientX < zt.margin, r = n.clientY < zt.margin, o = n.clientX > d.innerWidth - zt.margin, a = n.clientY > d.innerHeight - zt.margin; else {
          var p = _.getElementClientRect(d);
          s = n.clientX < p.left + zt.margin, r = n.clientY < p.top + zt.margin, o = n.clientX > p.right - zt.margin, a = n.clientY > p.bottom - zt.margin
        }
        zt.x = o ? 1 : s ? -1 : 0, zt.y = a ? 1 : r ? -1 : 0, zt.isScrolling || (zt.margin = f.margin, zt.speed = f.speed, zt.start(e))
      }
    }
  };

  function Ct(t, n, r) {
    return (i.default.string(t) ? (0, k.getStringOptionResult)(t, n, r) : t) || (0, e.getWindow)(r)
  }

  function Ft(t) {
    return i.default.window(t) && (t = window.document.body), {x: t.scrollLeft, y: t.scrollTop}
  }

  var Xt = {
    id: "auto-scroll", install: function (t) {
      var e = t.defaults, n = t.actions;
      t.autoScroll = zt, zt.now = function () {
        return t.now()
      }, n.phaselessTypes.autoscroll = !0, e.perAction.autoScroll = zt.defaults
    }, listeners: {
      "interactions:new": function (t) {
        t.interaction.autoScroll = null
      }, "interactions:destroy": function (t) {
        t.interaction.autoScroll = null, zt.stop(), zt.interaction && (zt.interaction = null)
      }, "interactions:stop": zt.stop, "interactions:action-move": function (t) {
        return zt.onInteractionMove(t)
      }
    }
  };
  Rt.default = Xt;
  var Yt = {};
  Object.defineProperty(Yt, "__esModule", {value: !0}), Yt.warnOnce = function (t, n) {
    var r = !1;
    return function () {
      return r || (e.window.console.warn(n), r = !0), t.apply(this, arguments)
    }
  }, Yt.copyAction = function (t, e) {
    return t.name = e.name, t.axis = e.axis, t.edges = e.edges, t
  }, Yt.sign = void 0, Yt.sign = function (t) {
    return t >= 0 ? 1 : -1
  };
  var Bt = {};

  function Wt(t) {
    return i.default.bool(t) ? (this.options.styleCursor = t, this) : null === t ? (delete this.options.styleCursor, this) : this.options.styleCursor
  }

  function Lt(t) {
    return i.default.func(t) ? (this.options.actionChecker = t, this) : null === t ? (delete this.options.actionChecker, this) : this.options.actionChecker
  }

  Object.defineProperty(Bt, "__esModule", {value: !0}), Bt.default = void 0;
  var Ut = {
    id: "auto-start/interactableMethods", install: function (t) {
      var e = t.Interactable;
      e.prototype.getAction = function (e, n, r, o) {
        var i = function (t, e, n, r, o) {
          var i = t.getRect(r), a = {
            action: null,
            interactable: t,
            interaction: n,
            element: r,
            rect: i,
            buttons: e.buttons || {0: 1, 1: 4, 3: 8, 4: 16}[e.button]
          };
          return o.fire("auto-start:check", a), a.action
        }(this, n, r, o, t);
        return this.options.actionChecker ? this.options.actionChecker(e, n, i, this, o, r) : i
      }, e.prototype.ignoreFrom = (0, Yt.warnOnce)((function (t) {
        return this._backCompatOption("ignoreFrom", t)
      }), "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), e.prototype.allowFrom = (0, Yt.warnOnce)((function (t) {
        return this._backCompatOption("allowFrom", t)
      }), "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), e.prototype.actionChecker = Lt, e.prototype.styleCursor = Wt
    }
  };
  Bt.default = Ut;
  var Vt = {};

  function Nt(t, e, n, r, o) {
    return e.testIgnoreAllow(e.options[t.name], n, r) && e.options[t.name].enabled && Ht(e, n, t, o) ? t : null
  }

  function qt(t, e, n, r, o, i, a) {
    for (var s = 0, l = r.length; s < l; s++) {
      var u = r[s], c = o[s], f = u.getAction(e, n, t, c);
      if (f) {
        var d = Nt(f, u, c, i, a);
        if (d) return {action: d, interactable: u, element: c}
      }
    }
    return {action: null, interactable: null, element: null}
  }

  function $t(t, e, n, r, o) {
    var a = [], s = [], l = r;

    function u(t) {
      a.push(t), s.push(l)
    }

    for (; i.default.element(l);) {
      a = [], s = [], o.interactables.forEachMatch(l, u);
      var c = qt(t, e, n, a, s, r, o);
      if (c.action && !c.interactable.options[c.action.name].manualStart) return c;
      l = _.parentNode(l)
    }
    return {action: null, interactable: null, element: null}
  }

  function Gt(t, e, n) {
    var r = e.action, o = e.interactable, i = e.element;
    r = r || {name: null}, t.interactable = o, t.element = i, (0, Yt.copyAction)(t.prepared, r), t.rect = o && r.name ? o.getRect(i) : null, Jt(t, n), n.fire("autoStart:prepared", {interaction: t})
  }

  function Ht(t, e, n, r) {
    var o = t.options, i = o[n.name].max, a = o[n.name].maxPerElement, s = r.autoStart.maxInteractions, l = 0, u = 0,
      c = 0;
    if (!(i && a && s)) return !1;
    for (var f = 0; f < r.interactions.list.length; f++) {
      var d = r.interactions.list[f], p = d.prepared.name;
      if (d.interacting()) {
        if (++l >= s) return !1;
        if (d.interactable === t) {
          if ((u += p === n.name ? 1 : 0) >= i) return !1;
          if (d.element === e && (c++, p === n.name && c >= a)) return !1
        }
      }
    }
    return s > 0
  }

  function Kt(t, e) {
    return i.default.number(t) ? (e.autoStart.maxInteractions = t, this) : e.autoStart.maxInteractions
  }

  function Zt(t, e, n) {
    var r = n.autoStart.cursorElement;
    r && r !== t && (r.style.cursor = ""), t.ownerDocument.documentElement.style.cursor = e, t.style.cursor = e, n.autoStart.cursorElement = e ? t : null
  }

  function Jt(t, e) {
    var n = t.interactable, r = t.element, o = t.prepared;
    if ("mouse" === t.pointerType && n && n.options.styleCursor) {
      var a = "";
      if (o.name) {
        var s = n.options[o.name].cursorChecker;
        a = i.default.func(s) ? s(o, n, r, t._interacting) : e.actions.map[o.name].getCursor(o)
      }
      Zt(t.element, a || "", e)
    } else e.autoStart.cursorElement && Zt(e.autoStart.cursorElement, "", e)
  }

  Object.defineProperty(Vt, "__esModule", {value: !0}), Vt.default = void 0;
  var Qt = {
    id: "auto-start/base", before: ["actions"], install: function (t) {
      var e = t.interactStatic, n = t.defaults;
      t.usePlugin(Bt.default), n.base.actionChecker = null, n.base.styleCursor = !0, (0, j.default)(n.perAction, {
        manualStart: !1,
        max: 1 / 0,
        maxPerElement: 1,
        allowFrom: null,
        ignoreFrom: null,
        mouseButtons: 1
      }), e.maxInteractions = function (e) {
        return Kt(e, t)
      }, t.autoStart = {maxInteractions: 1 / 0, withinInteractionLimit: Ht, cursorElement: null}
    }, listeners: {
      "interactions:down": function (t, e) {
        var n = t.interaction, r = t.pointer, o = t.event, i = t.eventTarget;
        n.interacting() || Gt(n, $t(n, r, o, i, e), e)
      }, "interactions:move": function (t, e) {
        !function (t, e) {
          var n = t.interaction, r = t.pointer, o = t.event, i = t.eventTarget;
          "mouse" !== n.pointerType || n.pointerIsDown || n.interacting() || Gt(n, $t(n, r, o, i, e), e)
        }(t, e), function (t, e) {
          var n = t.interaction;
          if (n.pointerIsDown && !n.interacting() && n.pointerWasMoved && n.prepared.name) {
            e.fire("autoStart:before-start", t);
            var r = n.interactable, o = n.prepared.name;
            o && r && (r.options[o].manualStart || !Ht(r, n.element, n.prepared, e) ? n.stop() : (n.start(n.prepared, r, n.element), Jt(n, e)))
          }
        }(t, e)
      }, "interactions:stop": function (t, e) {
        var n = t.interaction, r = n.interactable;
        r && r.options.styleCursor && Zt(n.element, "", e)
      }
    }, maxInteractions: Kt, withinInteractionLimit: Ht, validateAction: Nt
  };
  Vt.default = Qt;
  var te = {};
  Object.defineProperty(te, "__esModule", {value: !0}), te.default = void 0;
  var ee = {
    id: "auto-start/dragAxis", listeners: {
      "autoStart:before-start": function (t, e) {
        var n = t.interaction, r = t.eventTarget, o = t.dx, a = t.dy;
        if ("drag" === n.prepared.name) {
          var s = Math.abs(o), l = Math.abs(a), u = n.interactable.options.drag, c = u.startAxis,
            f = s > l ? "x" : s < l ? "y" : "xy";
          if (n.prepared.axis = "start" === u.lockAxis ? f[0] : u.lockAxis, "xy" !== f && "xy" !== c && c !== f) {
            n.prepared.name = null;
            for (var d = r, p = function (t) {
              if (t !== n.interactable) {
                var o = n.interactable.options.drag;
                if (!o.manualStart && t.testIgnoreAllow(o, d, r)) {
                  var i = t.getAction(n.downPointer, n.downEvent, n, d);
                  if (i && "drag" === i.name && function (t, e) {
                    if (!e) return !1;
                    var n = e.options.drag.startAxis;
                    return "xy" === t || "xy" === n || n === t
                  }(f, t) && Vt.default.validateAction(i, t, d, r, e)) return t
                }
              }
            }; i.default.element(d);) {
              var v = e.interactables.forEachMatch(d, p);
              if (v) {
                n.prepared.name = "drag", n.interactable = v, n.element = d;
                break
              }
              d = (0, _.parentNode)(d)
            }
          }
        }
      }
    }
  };
  te.default = ee;
  var ne = {};

  function re(t) {
    var e = t.prepared && t.prepared.name;
    if (!e) return null;
    var n = t.interactable.options;
    return n[e].hold || n[e].delay
  }

  Object.defineProperty(ne, "__esModule", {value: !0}), ne.default = void 0;
  var oe = {
    id: "auto-start/hold", install: function (t) {
      var e = t.defaults;
      t.usePlugin(Vt.default), e.perAction.hold = 0, e.perAction.delay = 0
    }, listeners: {
      "interactions:new": function (t) {
        t.interaction.autoStartHoldTimer = null
      }, "autoStart:prepared": function (t) {
        var e = t.interaction, n = re(e);
        n > 0 && (e.autoStartHoldTimer = setTimeout((function () {
          e.start(e.prepared, e.interactable, e.element)
        }), n))
      }, "interactions:move": function (t) {
        var e = t.interaction, n = t.duplicate;
        e.autoStartHoldTimer && e.pointerWasMoved && !n && (clearTimeout(e.autoStartHoldTimer), e.autoStartHoldTimer = null)
      }, "autoStart:before-start": function (t) {
        var e = t.interaction;
        re(e) > 0 && (e.prepared.name = null)
      }
    }, getHoldDuration: re
  };
  ne.default = oe;
  var ie = {};
  Object.defineProperty(ie, "__esModule", {value: !0}), ie.default = void 0;
  var ae = {
    id: "auto-start", install: function (t) {
      t.usePlugin(Vt.default), t.usePlugin(ne.default), t.usePlugin(te.default)
    }
  };
  ie.default = ae;
  var se = {};

  function le(t) {
    return /^(always|never|auto)$/.test(t) ? (this.options.preventDefault = t, this) : i.default.bool(t) ? (this.options.preventDefault = t ? "always" : "never", this) : this.options.preventDefault
  }

  function ue(t) {
    var e = t.interaction, n = t.event;
    e.interactable && e.interactable.checkAndPreventDefault(n)
  }

  function ce(t) {
    var n = t.Interactable;
    n.prototype.preventDefault = le, n.prototype.checkAndPreventDefault = function (n) {
      return function (t, n, r) {
        var o = t.options.preventDefault;
        if ("never" !== o) if ("always" !== o) {
          if (n.events.supportsPassive && /^touch(start|move)$/.test(r.type)) {
            var a = (0, e.getWindow)(r.target).document, s = n.getDocOptions(a);
            if (!s || !s.events || !1 !== s.events.passive) return
          }
          /^(mouse|pointer|touch)*(down|start)/i.test(r.type) || i.default.element(r.target) && (0, _.matchesSelector)(r.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || r.preventDefault()
        } else r.preventDefault()
      }(this, t, n)
    }, t.interactions.docEvents.push({
      type: "dragstart", listener: function (e) {
        for (var n = 0; n < t.interactions.list.length; n++) {
          var r = t.interactions.list[n];
          if (r.element && (r.element === e.target || (0, _.nodeContains)(r.element, e.target))) return void r.interactable.checkAndPreventDefault(e)
        }
      }
    })
  }

  Object.defineProperty(se, "__esModule", {value: !0}), se.install = ce, se.default = void 0;
  var fe = {
    id: "core/interactablePreventDefault",
    install: ce,
    listeners: ["down", "move", "up", "cancel"].reduce((function (t, e) {
      return t["interactions:".concat(e)] = ue, t
    }), {})
  };
  se.default = fe;
  var de = {};
  Object.defineProperty(de, "__esModule", {value: !0}), de.default = void 0, de.default = {};
  var pe, ve = {};
  Object.defineProperty(ve, "__esModule", {value: !0}), ve.default = void 0, function (t) {
    t.touchAction = "touchAction", t.boxSizing = "boxSizing", t.noListeners = "noListeners"
  }(pe || (pe = {}));
  pe.touchAction, pe.boxSizing, pe.noListeners;
  var he = {
    id: "dev-tools", install: function () {
    }
  };
  ve.default = he;
  var ge = {};
  Object.defineProperty(ge, "__esModule", {value: !0}), ge.default = function t(e) {
    var n = {};
    for (var r in e) {
      var o = e[r];
      i.default.plainObject(o) ? n[r] = t(o) : i.default.array(o) ? n[r] = Z.from(o) : n[r] = o
    }
    return n
  };
  var ye = {};

  function me(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t
    }(t) || function (t, e) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
        var n = [], r = !0, o = !1, i = void 0;
        try {
          for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) ;
        } catch (t) {
          o = !0, i = t
        } finally {
          try {
            r || null == s.return || s.return()
          } finally {
            if (o) throw i
          }
        }
        return n
      }
    }(t, e) || function (t, e) {
      if (t) {
        if ("string" == typeof t) return be(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? be(t, e) : void 0
      }
    }(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
  }

  function be(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r
  }

  function xe(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function we(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t
  }

  Object.defineProperty(ye, "__esModule", {value: !0}), ye.getRectOffset = Oe, ye.default = void 0;
  var _e = function () {
    function t(e) {
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), we(this, "states", []), we(this, "startOffset", {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }), we(this, "startDelta", void 0), we(this, "result", void 0), we(this, "endResult", void 0), we(this, "edges", void 0), we(this, "interaction", void 0), this.interaction = e, this.result = Pe()
    }

    var e, n;
    return e = t, (n = [{
      key: "start", value: function (t, e) {
        var n = t.phase, r = this.interaction, o = function (t) {
          var e = t.interactable.options[t.prepared.name], n = e.modifiers;
          return n && n.length ? n : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map((function (t) {
            var n = e[t];
            return n && n.enabled && {options: n, methods: n._methods}
          })).filter((function (t) {
            return !!t
          }))
        }(r);
        this.prepareStates(o), this.edges = (0, j.default)({}, r.edges), this.startOffset = Oe(r.rect, e), this.startDelta = {
          x: 0,
          y: 0
        };
        var i = this.fillArg({phase: n, pageCoords: e, preEnd: !1});
        return this.result = Pe(), this.startAll(i), this.result = this.setAll(i)
      }
    }, {
      key: "fillArg", value: function (t) {
        var e = this.interaction;
        return t.interaction = e, t.interactable = e.interactable, t.element = e.element, t.rect = t.rect || e.rect, t.edges = this.edges, t.startOffset = this.startOffset, t
      }
    }, {
      key: "startAll", value: function (t) {
        for (var e = 0; e < this.states.length; e++) {
          var n = this.states[e];
          n.methods.start && (t.state = n, n.methods.start(t))
        }
      }
    }, {
      key: "setAll", value: function (t) {
        var e = t.phase, n = t.preEnd, r = t.skipModifiers, o = t.rect;
        t.coords = (0, j.default)({}, t.pageCoords), t.rect = (0, j.default)({}, o);
        for (var i = r ? this.states.slice(r) : this.states, a = Pe(t.coords, t.rect), s = 0; s < i.length; s++) {
          var l, u = i[s], c = u.options, f = (0, j.default)({}, t.coords), d = null;
          null != (l = u.methods) && l.set && this.shouldDo(c, n, e) && (t.state = u, d = u.methods.set(t), k.addEdges(this.interaction.edges, t.rect, {
            x: t.coords.x - f.x,
            y: t.coords.y - f.y
          })), a.eventProps.push(d)
        }
        a.delta.x = t.coords.x - t.pageCoords.x, a.delta.y = t.coords.y - t.pageCoords.y, a.rectDelta.left = t.rect.left - o.left, a.rectDelta.right = t.rect.right - o.right, a.rectDelta.top = t.rect.top - o.top, a.rectDelta.bottom = t.rect.bottom - o.bottom;
        var p = this.result.coords, v = this.result.rect;
        if (p && v) {
          var h = a.rect.left !== v.left || a.rect.right !== v.right || a.rect.top !== v.top || a.rect.bottom !== v.bottom;
          a.changed = h || p.x !== a.coords.x || p.y !== a.coords.y
        }
        return a
      }
    }, {
      key: "applyToInteraction", value: function (t) {
        var e = this.interaction, n = t.phase, r = e.coords.cur, o = e.coords.start, i = this.result,
          a = this.startDelta, s = i.delta;
        "start" === n && (0, j.default)(this.startDelta, i.delta);
        for (var l = 0; l < [[o, a], [r, s]].length; l++) {
          var u = me([[o, a], [r, s]][l], 2), c = u[0], f = u[1];
          c.page.x += f.x, c.page.y += f.y, c.client.x += f.x, c.client.y += f.y
        }
        var d = this.result.rectDelta, p = t.rect || e.rect;
        p.left += d.left, p.right += d.right, p.top += d.top, p.bottom += d.bottom, p.width = p.right - p.left, p.height = p.bottom - p.top
      }
    }, {
      key: "setAndApply", value: function (t) {
        var e = this.interaction, n = t.phase, r = t.preEnd, o = t.skipModifiers,
          i = this.setAll(this.fillArg({preEnd: r, phase: n, pageCoords: t.modifiedCoords || e.coords.cur.page}));
        if (this.result = i, !i.changed && (!o || o < this.states.length) && e.interacting()) return !1;
        if (t.modifiedCoords) {
          var a = e.coords.cur.page, s = {x: t.modifiedCoords.x - a.x, y: t.modifiedCoords.y - a.y};
          i.coords.x += s.x, i.coords.y += s.y, i.delta.x += s.x, i.delta.y += s.y
        }
        this.applyToInteraction(t)
      }
    }, {
      key: "beforeEnd", value: function (t) {
        var e = t.interaction, n = t.event, r = this.states;
        if (r && r.length) {
          for (var o = !1, i = 0; i < r.length; i++) {
            var a = r[i];
            t.state = a;
            var s = a.options, l = a.methods, u = l.beforeEnd && l.beforeEnd(t);
            if (u) return this.endResult = u, !1;
            o = o || !o && this.shouldDo(s, !0, t.phase, !0)
          }
          o && e.move({event: n, preEnd: !0})
        }
      }
    }, {
      key: "stop", value: function (t) {
        var e = t.interaction;
        if (this.states && this.states.length) {
          var n = (0, j.default)({
            states: this.states,
            interactable: e.interactable,
            element: e.element,
            rect: null
          }, t);
          this.fillArg(n);
          for (var r = 0; r < this.states.length; r++) {
            var o = this.states[r];
            n.state = o, o.methods.stop && o.methods.stop(n)
          }
          this.states = null, this.endResult = null
        }
      }
    }, {
      key: "prepareStates", value: function (t) {
        this.states = [];
        for (var e = 0; e < t.length; e++) {
          var n = t[e], r = n.options, o = n.methods, i = n.name;
          this.states.push({options: r, methods: o, index: e, name: i})
        }
        return this.states
      }
    }, {
      key: "restoreInteractionCoords", value: function (t) {
        var e = t.interaction, n = e.coords, r = e.rect, o = e.modification;
        if (o.result) {
          for (var i = o.startDelta, a = o.result, s = a.delta, l = a.rectDelta, u = [[n.start, i], [n.cur, s]], c = 0; c < u.length; c++) {
            var f = me(u[c], 2), d = f[0], p = f[1];
            d.page.x -= p.x, d.page.y -= p.y, d.client.x -= p.x, d.client.y -= p.y
          }
          r.left -= l.left, r.right -= l.right, r.top -= l.top, r.bottom -= l.bottom
        }
      }
    }, {
      key: "shouldDo", value: function (t, e, n, r) {
        return !(!t || !1 === t.enabled || r && !t.endOnly || t.endOnly && !e || "start" === n && !t.setStart)
      }
    }, {
      key: "copyFrom", value: function (t) {
        this.startOffset = t.startOffset, this.startDelta = t.startDelta, this.edges = t.edges, this.states = t.states.map((function (t) {
          return (0, ge.default)(t)
        })), this.result = Pe((0, j.default)({}, t.result.coords), (0, j.default)({}, t.result.rect))
      }
    }, {
      key: "destroy", value: function () {
        for (var t in this) this[t] = null
      }
    }]) && xe(e.prototype, n), t
  }();

  function Pe(t, e) {
    return {
      rect: e,
      coords: t,
      delta: {x: 0, y: 0},
      rectDelta: {left: 0, right: 0, top: 0, bottom: 0},
      eventProps: [],
      changed: !0
    }
  }

  function Oe(t, e) {
    return t ? {left: e.x - t.left, top: e.y - t.top, right: t.right - e.x, bottom: t.bottom - e.y} : {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    }
  }

  ye.default = _e;
  var Se = {};

  function Ee(t) {
    var e = t.iEvent, n = t.interaction.modification.result;
    n && (e.modifiers = n.eventProps)
  }

  Object.defineProperty(Se, "__esModule", {value: !0}), Se.makeModifier = function (t, e) {
    var n = t.defaults, r = {start: t.start, set: t.set, beforeEnd: t.beforeEnd, stop: t.stop}, o = function (t) {
      var o = t || {};
      for (var i in o.enabled = !1 !== o.enabled, n) i in o || (o[i] = n[i]);
      var a = {
        options: o, methods: r, name: e, enable: function () {
          return o.enabled = !0, a
        }, disable: function () {
          return o.enabled = !1, a
        }
      };
      return a
    };
    return e && "string" == typeof e && (o._defaults = n, o._methods = r), o
  }, Se.addEventModifiers = Ee, Se.default = void 0;
  var Te = {
    id: "modifiers/base", before: ["actions"], install: function (t) {
      t.defaults.perAction.modifiers = []
    }, listeners: {
      "interactions:new": function (t) {
        var e = t.interaction;
        e.modification = new ye.default(e)
      },
      "interactions:before-action-start": function (t) {
        var e = t.interaction.modification;
        e.start(t, t.interaction.coords.start.page), t.interaction.edges = e.edges, e.applyToInteraction(t)
      },
      "interactions:before-action-move": function (t) {
        return t.interaction.modification.setAndApply(t)
      },
      "interactions:before-action-end": function (t) {
        return t.interaction.modification.beforeEnd(t)
      },
      "interactions:action-start": Ee,
      "interactions:action-move": Ee,
      "interactions:action-end": Ee,
      "interactions:after-action-start": function (t) {
        return t.interaction.modification.restoreInteractionCoords(t)
      },
      "interactions:after-action-move": function (t) {
        return t.interaction.modification.restoreInteractionCoords(t)
      },
      "interactions:stop": function (t) {
        return t.interaction.modification.stop(t)
      }
    }
  };
  Se.default = Te;
  var Me = {};
  Object.defineProperty(Me, "__esModule", {value: !0}), Me.defaults = void 0, Me.defaults = {
    base: {
      preventDefault: "auto",
      deltaSource: "page"
    }, perAction: {enabled: !1, origin: {x: 0, y: 0}}, actions: {}
  };
  var je = {};

  function ke(t) {
    return (ke = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function Ie(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function De(t, e) {
    return (De = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }

  function Ae(t, e) {
    return !e || "object" !== ke(e) && "function" != typeof e ? Re(t) : e
  }

  function Re(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
  }

  function ze(t) {
    return (ze = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  function Ce(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t
  }

  Object.defineProperty(je, "__esModule", {value: !0}), je.InteractEvent = void 0;
  var Fe = function (t) {
    !function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && De(t, e)
    }(a, t);
    var e, n, r, o, i = (r = a, o = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
        }))), !0
      } catch (t) {
        return !1
      }
    }(), function () {
      var t, e = ze(r);
      if (o) {
        var n = ze(this).constructor;
        t = Reflect.construct(e, arguments, n)
      } else t = e.apply(this, arguments);
      return Ae(this, t)
    });

    function a(t, e, n, r, o, s, l) {
      var u;
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, a), Ce(Re(u = i.call(this, t)), "target", void 0), Ce(Re(u), "currentTarget", void 0), Ce(Re(u), "relatedTarget", null), Ce(Re(u), "screenX", void 0), Ce(Re(u), "screenY", void 0), Ce(Re(u), "button", void 0), Ce(Re(u), "buttons", void 0), Ce(Re(u), "ctrlKey", void 0), Ce(Re(u), "shiftKey", void 0), Ce(Re(u), "altKey", void 0), Ce(Re(u), "metaKey", void 0), Ce(Re(u), "page", void 0), Ce(Re(u), "client", void 0), Ce(Re(u), "delta", void 0), Ce(Re(u), "rect", void 0), Ce(Re(u), "x0", void 0), Ce(Re(u), "y0", void 0), Ce(Re(u), "t0", void 0), Ce(Re(u), "dt", void 0), Ce(Re(u), "duration", void 0), Ce(Re(u), "clientX0", void 0), Ce(Re(u), "clientY0", void 0), Ce(Re(u), "velocity", void 0), Ce(Re(u), "speed", void 0), Ce(Re(u), "swipe", void 0), Ce(Re(u), "timeStamp", void 0), Ce(Re(u), "axes", void 0), Ce(Re(u), "preEnd", void 0), o = o || t.element;
      var c = t.interactable, f = (c && c.options || Me.defaults).deltaSource, d = (0, A.default)(c, o, n),
        p = "start" === r, v = "end" === r, h = p ? Re(u) : t.prevEvent,
        g = p ? t.coords.start : v ? {page: h.page, client: h.client, timeStamp: t.coords.cur.timeStamp} : t.coords.cur;
      return u.page = (0, j.default)({}, g.page), u.client = (0, j.default)({}, g.client), u.rect = (0, j.default)({}, t.rect), u.timeStamp = g.timeStamp, v || (u.page.x -= d.x, u.page.y -= d.y, u.client.x -= d.x, u.client.y -= d.y), u.ctrlKey = e.ctrlKey, u.altKey = e.altKey, u.shiftKey = e.shiftKey, u.metaKey = e.metaKey, u.button = e.button, u.buttons = e.buttons, u.target = o, u.currentTarget = o, u.preEnd = s, u.type = l || n + (r || ""), u.interactable = c, u.t0 = p ? t.pointers[t.pointers.length - 1].downTime : h.t0, u.x0 = t.coords.start.page.x - d.x, u.y0 = t.coords.start.page.y - d.y, u.clientX0 = t.coords.start.client.x - d.x, u.clientY0 = t.coords.start.client.y - d.y, u.delta = p || v ? {
        x: 0,
        y: 0
      } : {
        x: u[f].x - h[f].x,
        y: u[f].y - h[f].y
      }, u.dt = t.coords.delta.timeStamp, u.duration = u.timeStamp - u.t0, u.velocity = (0, j.default)({}, t.coords.velocity[f]), u.speed = (0, C.default)(u.velocity.x, u.velocity.y), u.swipe = v || "inertiastart" === r ? u.getSwipe() : null, u
    }

    return e = a, (n = [{
      key: "getSwipe", value: function () {
        var t = this._interaction;
        if (t.prevEvent.speed < 600 || this.timeStamp - t.prevEvent.timeStamp > 150) return null;
        var e = 180 * Math.atan2(t.prevEvent.velocityY, t.prevEvent.velocityX) / Math.PI;
        e < 0 && (e += 360);
        var n = 112.5 <= e && e < 247.5, r = 202.5 <= e && e < 337.5;
        return {
          up: r,
          down: !r && 22.5 <= e && e < 157.5,
          left: n,
          right: !n && (292.5 <= e || e < 67.5),
          angle: e,
          speed: t.prevEvent.speed,
          velocity: {x: t.prevEvent.velocityX, y: t.prevEvent.velocityY}
        }
      }
    }, {
      key: "preventDefault", value: function () {
      }
    }, {
      key: "stopImmediatePropagation", value: function () {
        this.immediatePropagationStopped = this.propagationStopped = !0
      }
    }, {
      key: "stopPropagation", value: function () {
        this.propagationStopped = !0
      }
    }]) && Ie(e.prototype, n), a
  }($.BaseEvent);
  je.InteractEvent = Fe, Object.defineProperties(Fe.prototype, {
    pageX: {
      get: function () {
        return this.page.x
      }, set: function (t) {
        this.page.x = t
      }
    }, pageY: {
      get: function () {
        return this.page.y
      }, set: function (t) {
        this.page.y = t
      }
    }, clientX: {
      get: function () {
        return this.client.x
      }, set: function (t) {
        this.client.x = t
      }
    }, clientY: {
      get: function () {
        return this.client.y
      }, set: function (t) {
        this.client.y = t
      }
    }, dx: {
      get: function () {
        return this.delta.x
      }, set: function (t) {
        this.delta.x = t
      }
    }, dy: {
      get: function () {
        return this.delta.y
      }, set: function (t) {
        this.delta.y = t
      }
    }, velocityX: {
      get: function () {
        return this.velocity.x
      }, set: function (t) {
        this.velocity.x = t
      }
    }, velocityY: {
      get: function () {
        return this.velocity.y
      }, set: function (t) {
        this.velocity.y = t
      }
    }
  });
  var Xe = {};

  function Ye(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t
  }

  Object.defineProperty(Xe, "__esModule", {value: !0}), Xe.PointerInfo = void 0, Xe.PointerInfo = function t(e, n, r, o, i) {
    !function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }(this, t), Ye(this, "id", void 0), Ye(this, "pointer", void 0), Ye(this, "event", void 0), Ye(this, "downTime", void 0), Ye(this, "downTarget", void 0), this.id = e, this.pointer = n, this.event = r, this.downTime = o, this.downTarget = i
  };
  var Be, We, Le = {};

  function Ue(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function Ve(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t
  }

  Object.defineProperty(Le, "__esModule", {value: !0}), Object.defineProperty(Le, "PointerInfo", {
    enumerable: !0,
    get: function () {
      return Xe.PointerInfo
    }
  }), Le.default = Le.Interaction = Le._ProxyMethods = Le._ProxyValues = void 0, Le._ProxyValues = Be, function (t) {
    t.interactable = "", t.element = "", t.prepared = "", t.pointerIsDown = "", t.pointerWasMoved = "", t._proxy = ""
  }(Be || (Le._ProxyValues = Be = {})), Le._ProxyMethods = We, function (t) {
    t.start = "", t.move = "", t.end = "", t.stop = "", t.interacting = ""
  }(We || (Le._ProxyMethods = We = {}));
  var Ne = 0, qe = function () {
    function t(e) {
      var n = this, r = e.pointerType, o = e.scopeFire;
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), Ve(this, "interactable", null), Ve(this, "element", null), Ve(this, "rect", void 0), Ve(this, "_rects", void 0), Ve(this, "edges", void 0), Ve(this, "_scopeFire", void 0), Ve(this, "prepared", {
        name: null,
        axis: null,
        edges: null
      }), Ve(this, "pointerType", void 0), Ve(this, "pointers", []), Ve(this, "downEvent", null), Ve(this, "downPointer", {}), Ve(this, "_latestPointer", {
        pointer: null,
        event: null,
        eventTarget: null
      }), Ve(this, "prevEvent", null), Ve(this, "pointerIsDown", !1), Ve(this, "pointerWasMoved", !1), Ve(this, "_interacting", !1), Ve(this, "_ending", !1), Ve(this, "_stopped", !0), Ve(this, "_proxy", null), Ve(this, "simulation", null), Ve(this, "doMove", (0, Yt.warnOnce)((function (t) {
        this.move(t)
      }), "The interaction.doMove() method has been renamed to interaction.move()")), Ve(this, "coords", {
        start: B.newCoords(),
        prev: B.newCoords(),
        cur: B.newCoords(),
        delta: B.newCoords(),
        velocity: B.newCoords()
      }), Ve(this, "_id", Ne++), this._scopeFire = o, this.pointerType = r;
      var i = this;
      this._proxy = {};
      var a = function (t) {
        Object.defineProperty(n._proxy, t, {
          get: function () {
            return i[t]
          }
        })
      };
      for (var s in Be) a(s);
      var l = function (t) {
        Object.defineProperty(n._proxy, t, {
          value: function () {
            return i[t].apply(i, arguments)
          }
        })
      };
      for (var u in We) l(u);
      this._scopeFire("interactions:new", {interaction: this})
    }

    var e, n;
    return e = t, (n = [{
      key: "pointerMoveTolerance", get: function () {
        return 1
      }
    }, {
      key: "pointerDown", value: function (t, e, n) {
        var r = this.updatePointer(t, e, n, !0), o = this.pointers[r];
        this._scopeFire("interactions:down", {
          pointer: t,
          event: e,
          eventTarget: n,
          pointerIndex: r,
          pointerInfo: o,
          type: "down",
          interaction: this
        })
      }
    }, {
      key: "start", value: function (t, e, n) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < ("gesture" === t.name ? 2 : 1) || !e.options[t.name].enabled) && ((0, Yt.copyAction)(this.prepared, t), this.interactable = e, this.element = n, this.rect = e.getRect(n), this.edges = this.prepared.edges ? (0, j.default)({}, this.prepared.edges) : {
          left: !0,
          right: !0,
          top: !0,
          bottom: !0
        }, this._stopped = !1, this._interacting = this._doPhase({
          interaction: this,
          event: this.downEvent,
          phase: "start"
        }) && !this._stopped, this._interacting)
      }
    }, {
      key: "pointerMove", value: function (t, e, n) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(t, e, n, !1);
        var r, o,
          i = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (r = this.coords.cur.client.x - this.coords.start.client.x, o = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, C.default)(r, o) > this.pointerMoveTolerance);
        var a = this.getPointerIndex(t), s = {
          pointer: t,
          pointerIndex: a,
          pointerInfo: this.pointers[a],
          event: e,
          type: "move",
          eventTarget: n,
          dx: r,
          dy: o,
          duplicate: i,
          interaction: this
        };
        i || B.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", s), i || this.simulation || (this.interacting() && (s.type = null, this.move(s)), this.pointerWasMoved && B.copyCoords(this.coords.prev, this.coords.cur))
      }
    }, {
      key: "move", value: function (t) {
        t && t.event || B.setZeroCoords(this.coords.delta), (t = (0, j.default)({
          pointer: this._latestPointer.pointer,
          event: this._latestPointer.event,
          eventTarget: this._latestPointer.eventTarget,
          interaction: this
        }, t || {})).phase = "move", this._doPhase(t)
      }
    }, {
      key: "pointerUp", value: function (t, e, n, r) {
        var o = this.getPointerIndex(t);
        -1 === o && (o = this.updatePointer(t, e, n, !1));
        var i = /cancel$/i.test(e.type) ? "cancel" : "up";
        this._scopeFire("interactions:".concat(i), {
          pointer: t,
          pointerIndex: o,
          pointerInfo: this.pointers[o],
          event: e,
          eventTarget: n,
          type: i,
          curEventTarget: r,
          interaction: this
        }), this.simulation || this.end(e), this.removePointer(t, e)
      }
    }, {
      key: "documentBlur", value: function (t) {
        this.end(t), this._scopeFire("interactions:blur", {event: t, type: "blur", interaction: this})
      }
    }, {
      key: "end", value: function (t) {
        var e;
        this._ending = !0, t = t || this._latestPointer.event, this.interacting() && (e = this._doPhase({
          event: t,
          interaction: this,
          phase: "end"
        })), this._ending = !1, !0 === e && this.stop()
      }
    }, {
      key: "currentAction", value: function () {
        return this._interacting ? this.prepared.name : null
      }
    }, {
      key: "interacting", value: function () {
        return this._interacting
      }
    }, {
      key: "stop", value: function () {
        this._scopeFire("interactions:stop", {interaction: this}), this.interactable = this.element = null, this._interacting = !1, this._stopped = !0, this.prepared.name = this.prevEvent = null
      }
    }, {
      key: "getPointerIndex", value: function (t) {
        var e = B.getPointerId(t);
        return "mouse" === this.pointerType || "pen" === this.pointerType ? this.pointers.length - 1 : Z.findIndex(this.pointers, (function (t) {
          return t.id === e
        }))
      }
    }, {
      key: "getPointerInfo", value: function (t) {
        return this.pointers[this.getPointerIndex(t)]
      }
    }, {
      key: "updatePointer", value: function (t, e, n, r) {
        var o = B.getPointerId(t), i = this.getPointerIndex(t), a = this.pointers[i];
        return r = !1 !== r && (r || /(down|start)$/i.test(e.type)), a ? a.pointer = t : (a = new Xe.PointerInfo(o, t, e, null, null), i = this.pointers.length, this.pointers.push(a)), B.setCoords(this.coords.cur, this.pointers.map((function (t) {
          return t.pointer
        })), this._now()), B.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), r && (this.pointerIsDown = !0, a.downTime = this.coords.cur.timeStamp, a.downTarget = n, B.pointerExtend(this.downPointer, t), this.interacting() || (B.copyCoords(this.coords.start, this.coords.cur), B.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = e, this.pointerWasMoved = !1)), this._updateLatestPointer(t, e, n), this._scopeFire("interactions:update-pointer", {
          pointer: t,
          event: e,
          eventTarget: n,
          down: r,
          pointerInfo: a,
          pointerIndex: i,
          interaction: this
        }), i
      }
    }, {
      key: "removePointer", value: function (t, e) {
        var n = this.getPointerIndex(t);
        if (-1 !== n) {
          var r = this.pointers[n];
          this._scopeFire("interactions:remove-pointer", {
            pointer: t,
            event: e,
            eventTarget: null,
            pointerIndex: n,
            pointerInfo: r,
            interaction: this
          }), this.pointers.splice(n, 1), this.pointerIsDown = !1
        }
      }
    }, {
      key: "_updateLatestPointer", value: function (t, e, n) {
        this._latestPointer.pointer = t, this._latestPointer.event = e, this._latestPointer.eventTarget = n
      }
    }, {
      key: "destroy", value: function () {
        this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null
      }
    }, {
      key: "_createPreparedEvent", value: function (t, e, n, r) {
        return new je.InteractEvent(this, t, this.prepared.name, e, this.element, n, r)
      }
    }, {
      key: "_fireEvent", value: function (t) {
        this.interactable.fire(t), (!this.prevEvent || t.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = t)
      }
    }, {
      key: "_doPhase", value: function (t) {
        var e = t.event, n = t.phase, r = t.preEnd, o = t.type, i = this.rect;
        if (i && "move" === n && (k.addEdges(this.edges, i, this.coords.delta[this.interactable.options.deltaSource]), i.width = i.right - i.left, i.height = i.bottom - i.top), !1 === this._scopeFire("interactions:before-action-".concat(n), t)) return !1;
        var a = t.iEvent = this._createPreparedEvent(e, n, r, o);
        return this._scopeFire("interactions:action-".concat(n), t), "start" === n && (this.prevEvent = a), this._fireEvent(a), this._scopeFire("interactions:after-action-".concat(n), t), !0
      }
    }, {
      key: "_now", value: function () {
        return Date.now()
      }
    }]) && Ue(e.prototype, n), t
  }();
  Le.Interaction = qe;
  var $e = qe;
  Le.default = $e;
  var Ge = {};

  function He(t) {
    t.pointerIsDown && (Qe(t.coords.cur, t.offset.total), t.offset.pending.x = 0, t.offset.pending.y = 0)
  }

  function Ke(t) {
    Ze(t.interaction)
  }

  function Ze(t) {
    if (!function (t) {
      return !(!t.offset.pending.x && !t.offset.pending.y)
    }(t)) return !1;
    var e = t.offset.pending;
    return Qe(t.coords.cur, e), Qe(t.coords.delta, e), k.addEdges(t.edges, t.rect, e), e.x = 0, e.y = 0, !0
  }

  function Je(t) {
    var e = t.x, n = t.y;
    this.offset.pending.x += e, this.offset.pending.y += n, this.offset.total.x += e, this.offset.total.y += n
  }

  function Qe(t, e) {
    var n = t.page, r = t.client, o = e.x, i = e.y;
    n.x += o, n.y += i, r.x += o, r.y += i
  }

  Object.defineProperty(Ge, "__esModule", {value: !0}), Ge.addTotal = He, Ge.applyPending = Ze, Ge.default = void 0, Le._ProxyMethods.offsetBy = "";
  var tn = {
    id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function (t) {
      t.Interaction.prototype.offsetBy = Je
    }, listeners: {
      "interactions:new": function (t) {
        t.interaction.offset = {total: {x: 0, y: 0}, pending: {x: 0, y: 0}}
      },
      "interactions:update-pointer": function (t) {
        return He(t.interaction)
      },
      "interactions:before-action-start": Ke,
      "interactions:before-action-move": Ke,
      "interactions:before-action-end": function (t) {
        var e = t.interaction;
        if (Ze(e)) return e.move({offset: !0}), e.end(), !1
      },
      "interactions:stop": function (t) {
        var e = t.interaction;
        e.offset.total.x = 0, e.offset.total.y = 0, e.offset.pending.x = 0, e.offset.pending.y = 0
      }
    }
  };
  Ge.default = tn;
  var en = {};

  function nn(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function rn(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t
  }

  Object.defineProperty(en, "__esModule", {value: !0}), en.default = en.InertiaState = void 0;
  var on = function () {
    function t(e) {
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), rn(this, "active", !1), rn(this, "isModified", !1), rn(this, "smoothEnd", !1), rn(this, "allowResume", !1), rn(this, "modification", void 0), rn(this, "modifierCount", 0), rn(this, "modifierArg", void 0), rn(this, "startCoords", void 0), rn(this, "t0", 0), rn(this, "v0", 0), rn(this, "te", 0), rn(this, "targetOffset", void 0), rn(this, "modifiedOffset", void 0), rn(this, "currentOffset", void 0), rn(this, "lambda_v0", 0), rn(this, "one_ve_v0", 0), rn(this, "timeout", void 0), rn(this, "interaction", void 0), this.interaction = e
    }

    var e, n;
    return e = t, (n = [{
      key: "start", value: function (t) {
        var e = this.interaction, n = an(e);
        if (!n || !n.enabled) return !1;
        var r = e.coords.velocity.client, o = (0, C.default)(r.x, r.y),
          i = this.modification || (this.modification = new ye.default(e));
        if (i.copyFrom(e.modification), this.t0 = e._now(), this.allowResume = n.allowResume, this.v0 = o, this.currentOffset = {
          x: 0,
          y: 0
        }, this.startCoords = e.coords.cur.page, this.modifierArg = i.fillArg({
          pageCoords: this.startCoords,
          preEnd: !0,
          phase: "inertiastart"
        }), this.t0 - e.coords.cur.timeStamp < 50 && o > n.minSpeed && o > n.endSpeed) this.startInertia(); else {
          if (i.result = i.setAll(this.modifierArg), !i.result.changed) return !1;
          this.startSmoothEnd()
        }
        return e.modification.result.rect = null, e.offsetBy(this.targetOffset), e._doPhase({
          interaction: e,
          event: t,
          phase: "inertiastart"
        }), e.offsetBy({
          x: -this.targetOffset.x,
          y: -this.targetOffset.y
        }), e.modification.result.rect = null, this.active = !0, e.simulation = this, !0
      }
    }, {
      key: "startInertia", value: function () {
        var t = this, e = this.interaction.coords.velocity.client, n = an(this.interaction), r = n.resistance,
          o = -Math.log(n.endSpeed / this.v0) / r;
        this.targetOffset = {
          x: (e.x - o) / r,
          y: (e.y - o) / r
        }, this.te = o, this.lambda_v0 = r / this.v0, this.one_ve_v0 = 1 - n.endSpeed / this.v0;
        var i = this.modification, a = this.modifierArg;
        a.pageCoords = {
          x: this.startCoords.x + this.targetOffset.x,
          y: this.startCoords.y + this.targetOffset.y
        }, i.result = i.setAll(a), i.result.changed && (this.isModified = !0, this.modifiedOffset = {
          x: this.targetOffset.x + i.result.delta.x,
          y: this.targetOffset.y + i.result.delta.y
        }), this.onNextFrame((function () {
          return t.inertiaTick()
        }))
      }
    }, {
      key: "startSmoothEnd", value: function () {
        var t = this;
        this.smoothEnd = !0, this.isModified = !0, this.targetOffset = {
          x: this.modification.result.delta.x,
          y: this.modification.result.delta.y
        }, this.onNextFrame((function () {
          return t.smoothEndTick()
        }))
      }
    }, {
      key: "onNextFrame", value: function (t) {
        var e = this;
        this.timeout = jt.default.request((function () {
          e.active && t()
        }))
      }
    }, {
      key: "inertiaTick", value: function () {
        var t, e, n, r, o, i = this, a = this.interaction, s = an(a).resistance, l = (a._now() - this.t0) / 1e3;
        if (l < this.te) {
          var u, c = 1 - (Math.exp(-s * l) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (0, 0, t = this.targetOffset.x, e = this.targetOffset.y, n = this.modifiedOffset.x, r = this.modifiedOffset.y, u = {
            x: sn(o = c, 0, t, n),
            y: sn(o, 0, e, r)
          }) : u = {x: this.targetOffset.x * c, y: this.targetOffset.y * c};
          var f = {x: u.x - this.currentOffset.x, y: u.y - this.currentOffset.y};
          this.currentOffset.x += f.x, this.currentOffset.y += f.y, a.offsetBy(f), a.move(), this.onNextFrame((function () {
            return i.inertiaTick()
          }))
        } else a.offsetBy({
          x: this.modifiedOffset.x - this.currentOffset.x,
          y: this.modifiedOffset.y - this.currentOffset.y
        }), this.end()
      }
    }, {
      key: "smoothEndTick", value: function () {
        var t = this, e = this.interaction, n = e._now() - this.t0, r = an(e).smoothEndDuration;
        if (n < r) {
          var o = {x: ln(n, 0, this.targetOffset.x, r), y: ln(n, 0, this.targetOffset.y, r)},
            i = {x: o.x - this.currentOffset.x, y: o.y - this.currentOffset.y};
          this.currentOffset.x += i.x, this.currentOffset.y += i.y, e.offsetBy(i), e.move({skipModifiers: this.modifierCount}), this.onNextFrame((function () {
            return t.smoothEndTick()
          }))
        } else e.offsetBy({
          x: this.targetOffset.x - this.currentOffset.x,
          y: this.targetOffset.y - this.currentOffset.y
        }), this.end()
      }
    }, {
      key: "resume", value: function (t) {
        var e = t.pointer, n = t.event, r = t.eventTarget, o = this.interaction;
        o.offsetBy({
          x: -this.currentOffset.x,
          y: -this.currentOffset.y
        }), o.updatePointer(e, n, r, !0), o._doPhase({
          interaction: o,
          event: n,
          phase: "resume"
        }), (0, B.copyCoords)(o.coords.prev, o.coords.cur), this.stop()
      }
    }, {
      key: "end", value: function () {
        this.interaction.move(), this.interaction.end(), this.stop()
      }
    }, {
      key: "stop", value: function () {
        this.active = this.smoothEnd = !1, this.interaction.simulation = null, jt.default.cancel(this.timeout)
      }
    }]) && nn(e.prototype, n), t
  }();

  function an(t) {
    var e = t.interactable, n = t.prepared;
    return e && e.options && n.name && e.options[n.name].inertia
  }

  function sn(t, e, n, r) {
    var o = 1 - t;
    return o * o * e + 2 * o * t * n + t * t * r
  }

  function ln(t, e, n, r) {
    return -n * (t /= r) * (t - 2) + e
  }

  en.InertiaState = on;
  var un = {
    id: "inertia", before: ["modifiers", "actions"], install: function (t) {
      var e = t.defaults;
      t.usePlugin(Ge.default), t.usePlugin(Se.default), t.actions.phases.inertiastart = !0, t.actions.phases.resume = !0, e.perAction.inertia = {
        enabled: !1,
        resistance: 10,
        minSpeed: 100,
        endSpeed: 10,
        allowResume: !0,
        smoothEndDuration: 300
      }
    }, listeners: {
      "interactions:new": function (t) {
        var e = t.interaction;
        e.inertia = new on(e)
      },
      "interactions:before-action-end": function (t) {
        var e = t.interaction, n = t.event;
        return (!e._interacting || e.simulation || !e.inertia.start(n)) && null
      },
      "interactions:down": function (t) {
        var e = t.interaction, n = t.eventTarget, r = e.inertia;
        if (r.active) for (var o = n; i.default.element(o);) {
          if (o === e.element) {
            r.resume(t);
            break
          }
          o = _.parentNode(o)
        }
      },
      "interactions:stop": function (t) {
        var e = t.interaction.inertia;
        e.active && e.stop()
      },
      "interactions:before-action-resume": function (t) {
        var e = t.interaction.modification;
        e.stop(t), e.start(t, t.interaction.coords.cur.page), e.applyToInteraction(t)
      },
      "interactions:before-action-inertiastart": function (t) {
        return t.interaction.modification.setAndApply(t)
      },
      "interactions:action-resume": Se.addEventModifiers,
      "interactions:action-inertiastart": Se.addEventModifiers,
      "interactions:after-action-inertiastart": function (t) {
        return t.interaction.modification.restoreInteractionCoords(t)
      },
      "interactions:after-action-resume": function (t) {
        return t.interaction.modification.restoreInteractionCoords(t)
      }
    }
  };
  en.default = un;
  var cn = {};

  function fn(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function dn(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t
  }

  function pn(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      if (t.immediatePropagationStopped) break;
      r(t)
    }
  }

  Object.defineProperty(cn, "__esModule", {value: !0}), cn.Eventable = void 0;
  var vn = function () {
    function t(e) {
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), dn(this, "options", void 0), dn(this, "types", {}), dn(this, "propagationStopped", !1), dn(this, "immediatePropagationStopped", !1), dn(this, "global", void 0), this.options = (0, j.default)({}, e || {})
    }

    var e, n;
    return e = t, (n = [{
      key: "fire", value: function (t) {
        var e, n = this.global;
        (e = this.types[t.type]) && pn(t, e), !t.propagationStopped && n && (e = n[t.type]) && pn(t, e)
      }
    }, {
      key: "on", value: function (t, e) {
        var n = (0, R.default)(t, e);
        for (t in n) this.types[t] = Z.merge(this.types[t] || [], n[t])
      }
    }, {
      key: "off", value: function (t, e) {
        var n = (0, R.default)(t, e);
        for (t in n) {
          var r = this.types[t];
          if (r && r.length) for (var o = 0; o < n[t].length; o++) {
            var i = n[t][o], a = r.indexOf(i);
            -1 !== a && r.splice(a, 1)
          }
        }
      }
    }, {
      key: "getRect", value: function (t) {
        return null
      }
    }]) && fn(e.prototype, n), t
  }();
  cn.Eventable = vn;
  var hn = {};
  Object.defineProperty(hn, "__esModule", {value: !0}), hn.default = function (t, e) {
    if (e.phaselessTypes[t]) return !0;
    for (var n in e.map) if (0 === t.indexOf(n) && t.substr(n.length) in e.phases) return !0;
    return !1
  };
  var gn = {};
  Object.defineProperty(gn, "__esModule", {value: !0}), gn.createInteractStatic = function (t) {
    var e = function e(n, r) {
      var o = t.interactables.get(n, r);
      return o || ((o = t.interactables.new(n, r)).events.global = e.globalEvents), o
    };
    return e.getPointerAverage = B.pointerAverage, e.getTouchBBox = B.touchBBox, e.getTouchDistance = B.touchDistance, e.getTouchAngle = B.touchAngle, e.getElementRect = _.getElementRect, e.getElementClientRect = _.getElementClientRect, e.matchesSelector = _.matchesSelector, e.closest = _.closest, e.globalEvents = {}, e.version = "1.10.11", e.scope = t, e.use = function (t, e) {
      return this.scope.usePlugin(t, e), this
    }, e.isSet = function (t, e) {
      return !!this.scope.interactables.get(t, e && e.context)
    }, e.on = (0, Yt.warnOnce)((function (t, e, n) {
      if (i.default.string(t) && -1 !== t.search(" ") && (t = t.trim().split(/ +/)), i.default.array(t)) {
        for (var r = 0; r < t.length; r++) {
          var o = t[r];
          this.on(o, e, n)
        }
        return this
      }
      if (i.default.object(t)) {
        for (var a in t) this.on(a, t[a], e);
        return this
      }
      return (0, hn.default)(t, this.scope.actions) ? this.globalEvents[t] ? this.globalEvents[t].push(e) : this.globalEvents[t] = [e] : this.scope.events.add(this.scope.document, t, e, {options: n}), this
    }), "The interact.on() method is being deprecated"), e.off = (0, Yt.warnOnce)((function (t, e, n) {
      if (i.default.string(t) && -1 !== t.search(" ") && (t = t.trim().split(/ +/)), i.default.array(t)) {
        for (var r = 0; r < t.length; r++) {
          var o = t[r];
          this.off(o, e, n)
        }
        return this
      }
      if (i.default.object(t)) {
        for (var a in t) this.off(a, t[a], e);
        return this
      }
      var s;
      return (0, hn.default)(t, this.scope.actions) ? t in this.globalEvents && -1 !== (s = this.globalEvents[t].indexOf(e)) && this.globalEvents[t].splice(s, 1) : this.scope.events.remove(this.scope.document, t, e, n), this
    }), "The interact.off() method is being deprecated"), e.debug = function () {
      return this.scope
    }, e.supportsTouch = function () {
      return b.default.supportsTouch
    }, e.supportsPointerEvent = function () {
      return b.default.supportsPointerEvent
    }, e.stop = function () {
      for (var t = 0; t < this.scope.interactions.list.length; t++) this.scope.interactions.list[t].stop();
      return this
    }, e.pointerMoveTolerance = function (t) {
      return i.default.number(t) ? (this.scope.interactions.pointerMoveTolerance = t, this) : this.scope.interactions.pointerMoveTolerance
    }, e.addDocument = function (t, e) {
      this.scope.addDocument(t, e)
    }, e.removeDocument = function (t) {
      this.scope.removeDocument(t)
    }, e
  };
  var yn = {};

  function mn(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function bn(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t
  }

  Object.defineProperty(yn, "__esModule", {value: !0}), yn.Interactable = void 0;
  var xn = function () {
    function t(n, r, o, i) {
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), bn(this, "options", void 0), bn(this, "_actions", void 0), bn(this, "target", void 0), bn(this, "events", new cn.Eventable), bn(this, "_context", void 0), bn(this, "_win", void 0), bn(this, "_doc", void 0), bn(this, "_scopeEvents", void 0), bn(this, "_rectChecker", void 0), this._actions = r.actions, this.target = n, this._context = r.context || o, this._win = (0, e.getWindow)((0, _.trySelector)(n) ? this._context : n), this._doc = this._win.document, this._scopeEvents = i, this.set(r)
    }

    var n, r;
    return n = t, (r = [{
      key: "_defaults", get: function () {
        return {base: {}, perAction: {}, actions: {}}
      }
    }, {
      key: "setOnEvents", value: function (t, e) {
        return i.default.func(e.onstart) && this.on("".concat(t, "start"), e.onstart), i.default.func(e.onmove) && this.on("".concat(t, "move"), e.onmove), i.default.func(e.onend) && this.on("".concat(t, "end"), e.onend), i.default.func(e.oninertiastart) && this.on("".concat(t, "inertiastart"), e.oninertiastart), this
      }
    }, {
      key: "updatePerActionListeners", value: function (t, e, n) {
        (i.default.array(e) || i.default.object(e)) && this.off(t, e), (i.default.array(n) || i.default.object(n)) && this.on(t, n)
      }
    }, {
      key: "setPerAction", value: function (t, e) {
        var n = this._defaults;
        for (var r in e) {
          var o = r, a = this.options[t], s = e[o];
          "listeners" === o && this.updatePerActionListeners(t, a.listeners, s), i.default.array(s) ? a[o] = Z.from(s) : i.default.plainObject(s) ? (a[o] = (0, j.default)(a[o] || {}, (0, ge.default)(s)), i.default.object(n.perAction[o]) && "enabled" in n.perAction[o] && (a[o].enabled = !1 !== s.enabled)) : i.default.bool(s) && i.default.object(n.perAction[o]) ? a[o].enabled = s : a[o] = s
        }
      }
    }, {
      key: "getRect", value: function (t) {
        return t = t || (i.default.element(this.target) ? this.target : null), i.default.string(this.target) && (t = t || this._context.querySelector(this.target)), (0, _.getElementRect)(t)
      }
    }, {
      key: "rectChecker", value: function (t) {
        var e = this;
        return i.default.func(t) ? (this._rectChecker = t, this.getRect = function (t) {
          var n = (0, j.default)({}, e._rectChecker(t));
          return "width" in n || (n.width = n.right - n.left, n.height = n.bottom - n.top), n
        }, this) : null === t ? (delete this.getRect, delete this._rectChecker, this) : this.getRect
      }
    }, {
      key: "_backCompatOption", value: function (t, e) {
        if ((0, _.trySelector)(e) || i.default.object(e)) {
          for (var n in this.options[t] = e, this._actions.map) this.options[n][t] = e;
          return this
        }
        return this.options[t]
      }
    }, {
      key: "origin", value: function (t) {
        return this._backCompatOption("origin", t)
      }
    }, {
      key: "deltaSource", value: function (t) {
        return "page" === t || "client" === t ? (this.options.deltaSource = t, this) : this.options.deltaSource
      }
    }, {
      key: "context", value: function () {
        return this._context
      }
    }, {
      key: "inContext", value: function (t) {
        return this._context === t.ownerDocument || (0, _.nodeContains)(this._context, t)
      }
    }, {
      key: "testIgnoreAllow", value: function (t, e, n) {
        return !this.testIgnore(t.ignoreFrom, e, n) && this.testAllow(t.allowFrom, e, n)
      }
    }, {
      key: "testAllow", value: function (t, e, n) {
        return !t || !!i.default.element(n) && (i.default.string(t) ? (0, _.matchesUpTo)(n, t, e) : !!i.default.element(t) && (0, _.nodeContains)(t, n))
      }
    }, {
      key: "testIgnore", value: function (t, e, n) {
        return !(!t || !i.default.element(n)) && (i.default.string(t) ? (0, _.matchesUpTo)(n, t, e) : !!i.default.element(t) && (0, _.nodeContains)(t, n))
      }
    }, {
      key: "fire", value: function (t) {
        return this.events.fire(t), this
      }
    }, {
      key: "_onOff", value: function (t, e, n, r) {
        i.default.object(e) && !i.default.array(e) && (r = n, n = null);
        var o = "on" === t ? "add" : "remove", a = (0, R.default)(e, n);
        for (var s in a) {
          "wheel" === s && (s = b.default.wheelEvent);
          for (var l = 0; l < a[s].length; l++) {
            var u = a[s][l];
            (0, hn.default)(s, this._actions) ? this.events[t](s, u) : i.default.string(this.target) ? this._scopeEvents["".concat(o, "Delegate")](this.target, this._context, s, u, r) : this._scopeEvents[o](this.target, s, u, r)
          }
        }
        return this
      }
    }, {
      key: "on", value: function (t, e, n) {
        return this._onOff("on", t, e, n)
      }
    }, {
      key: "off", value: function (t, e, n) {
        return this._onOff("off", t, e, n)
      }
    }, {
      key: "set", value: function (t) {
        var e = this._defaults;
        for (var n in i.default.object(t) || (t = {}), this.options = (0, ge.default)(e.base), this._actions.methodDict) {
          var r = n, o = this._actions.methodDict[r];
          this.options[r] = {}, this.setPerAction(r, (0, j.default)((0, j.default)({}, e.perAction), e.actions[r])), this[o](t[r])
        }
        for (var a in t) i.default.func(this[a]) && this[a](t[a]);
        return this
      }
    }, {
      key: "unset", value: function () {
        if (i.default.string(this.target)) for (var t in this._scopeEvents.delegatedEvents) for (var e = this._scopeEvents.delegatedEvents[t], n = e.length - 1; n >= 0; n--) {
          var r = e[n], o = r.selector, a = r.context, s = r.listeners;
          o === this.target && a === this._context && e.splice(n, 1);
          for (var l = s.length - 1; l >= 0; l--) this._scopeEvents.removeDelegate(this.target, this._context, t, s[l][0], s[l][1])
        } else this._scopeEvents.remove(this.target, "all")
      }
    }]) && mn(n.prototype, r), t
  }();
  yn.Interactable = xn;
  var wn = {};

  function _n(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function Pn(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t
  }

  Object.defineProperty(wn, "__esModule", {value: !0}), wn.InteractableSet = void 0;
  var On = function () {
    function t(e) {
      var n = this;
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), Pn(this, "list", []), Pn(this, "selectorMap", {}), Pn(this, "scope", void 0), this.scope = e, e.addListeners({
        "interactable:unset": function (t) {
          var e = t.interactable, r = e.target, o = e._context,
            a = i.default.string(r) ? n.selectorMap[r] : r[n.scope.id], s = Z.findIndex(a, (function (t) {
              return t.context === o
            }));
          a[s] && (a[s].context = null, a[s].interactable = null), a.splice(s, 1)
        }
      })
    }

    var e, n;
    return e = t, (n = [{
      key: "new", value: function (t, e) {
        e = (0, j.default)(e || {}, {actions: this.scope.actions});
        var n = new this.scope.Interactable(t, e, this.scope.document, this.scope.events),
          r = {context: n._context, interactable: n};
        return this.scope.addDocument(n._doc), this.list.push(n), i.default.string(t) ? (this.selectorMap[t] || (this.selectorMap[t] = []), this.selectorMap[t].push(r)) : (n.target[this.scope.id] || Object.defineProperty(t, this.scope.id, {
          value: [],
          configurable: !0
        }), t[this.scope.id].push(r)), this.scope.fire("interactable:new", {
          target: t,
          options: e,
          interactable: n,
          win: this.scope._win
        }), n
      }
    }, {
      key: "get", value: function (t, e) {
        var n = e && e.context || this.scope.document, r = i.default.string(t),
          o = r ? this.selectorMap[t] : t[this.scope.id];
        if (!o) return null;
        var a = Z.find(o, (function (e) {
          return e.context === n && (r || e.interactable.inContext(t))
        }));
        return a && a.interactable
      }
    }, {
      key: "forEachMatch", value: function (t, e) {
        for (var n = 0; n < this.list.length; n++) {
          var r = this.list[n], o = void 0;
          if ((i.default.string(r.target) ? i.default.element(t) && _.matchesSelector(t, r.target) : t === r.target) && r.inContext(t) && (o = e(r)), void 0 !== o) return o
        }
      }
    }]) && _n(e.prototype, n), t
  }();
  wn.InteractableSet = On;
  var Sn = {};

  function En(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function Tn(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t
  }

  function Mn(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t
    }(t) || function (t, e) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
        var n = [], r = !0, o = !1, i = void 0;
        try {
          for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) ;
        } catch (t) {
          o = !0, i = t
        } finally {
          try {
            r || null == s.return || s.return()
          } finally {
            if (o) throw i
          }
        }
        return n
      }
    }(t, e) || function (t, e) {
      if (t) {
        if ("string" == typeof t) return jn(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? jn(t, e) : void 0
      }
    }(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
  }

  function jn(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r
  }

  Object.defineProperty(Sn, "__esModule", {value: !0}), Sn.default = void 0;
  var kn = function () {
    function t(e) {
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), Tn(this, "currentTarget", void 0), Tn(this, "originalEvent", void 0), Tn(this, "type", void 0), this.originalEvent = e, (0, F.default)(this, e)
    }

    var e, n;
    return e = t, (n = [{
      key: "preventOriginalDefault", value: function () {
        this.originalEvent.preventDefault()
      }
    }, {
      key: "stopPropagation", value: function () {
        this.originalEvent.stopPropagation()
      }
    }, {
      key: "stopImmediatePropagation", value: function () {
        this.originalEvent.stopImmediatePropagation()
      }
    }]) && En(e.prototype, n), t
  }();

  function In(t) {
    if (!i.default.object(t)) return {capture: !!t, passive: !1};
    var e = (0, j.default)({}, t);
    return e.capture = !!t.capture, e.passive = !!t.passive, e
  }

  var Dn = {
    id: "events", install: function (t) {
      var e, n = [], r = {}, o = [], a = {
        add: s,
        remove: l,
        addDelegate: function (t, e, n, i, a) {
          var l = In(a);
          if (!r[n]) {
            r[n] = [];
            for (var f = 0; f < o.length; f++) {
              var d = o[f];
              s(d, n, u), s(d, n, c, !0)
            }
          }
          var p = r[n], v = Z.find(p, (function (n) {
            return n.selector === t && n.context === e
          }));
          v || (v = {selector: t, context: e, listeners: []}, p.push(v)), v.listeners.push([i, l])
        },
        removeDelegate: function (t, e, n, o, i) {
          var a, s = In(i), f = r[n], d = !1;
          if (f) for (a = f.length - 1; a >= 0; a--) {
            var p = f[a];
            if (p.selector === t && p.context === e) {
              for (var v = p.listeners, h = v.length - 1; h >= 0; h--) {
                var g = Mn(v[h], 2), y = g[0], m = g[1], b = m.capture, x = m.passive;
                if (y === o && b === s.capture && x === s.passive) {
                  v.splice(h, 1), v.length || (f.splice(a, 1), l(e, n, u), l(e, n, c, !0)), d = !0;
                  break
                }
              }
              if (d) break
            }
          }
        },
        delegateListener: u,
        delegateUseCapture: c,
        delegatedEvents: r,
        documents: o,
        targets: n,
        supportsOptions: !1,
        supportsPassive: !1
      };

      function s(t, e, r, o) {
        var i = In(o), s = Z.find(n, (function (e) {
          return e.eventTarget === t
        }));
        s || (s = {
          eventTarget: t,
          events: {}
        }, n.push(s)), s.events[e] || (s.events[e] = []), t.addEventListener && !Z.contains(s.events[e], r) && (t.addEventListener(e, r, a.supportsOptions ? i : i.capture), s.events[e].push(r))
      }

      function l(t, e, r, o) {
        var i = In(o), s = Z.findIndex(n, (function (e) {
          return e.eventTarget === t
        })), u = n[s];
        if (u && u.events) if ("all" !== e) {
          var c = !1, f = u.events[e];
          if (f) {
            if ("all" === r) {
              for (var d = f.length - 1; d >= 0; d--) l(t, e, f[d], i);
              return
            }
            for (var p = 0; p < f.length; p++) if (f[p] === r) {
              t.removeEventListener(e, r, a.supportsOptions ? i : i.capture), f.splice(p, 1), 0 === f.length && (delete u.events[e], c = !0);
              break
            }
          }
          c && !Object.keys(u.events).length && n.splice(s, 1)
        } else for (e in u.events) u.events.hasOwnProperty(e) && l(t, e, "all")
      }

      function u(t, e) {
        for (var n = In(e), o = new kn(t), a = r[t.type], s = Mn(B.getEventTargets(t), 1)[0], l = s; i.default.element(l);) {
          for (var u = 0; u < a.length; u++) {
            var c = a[u], f = c.selector, d = c.context;
            if (_.matchesSelector(l, f) && _.nodeContains(d, s) && _.nodeContains(d, l)) {
              var p = c.listeners;
              o.currentTarget = l;
              for (var v = 0; v < p.length; v++) {
                var h = Mn(p[v], 2), g = h[0], y = h[1], m = y.capture, b = y.passive;
                m === n.capture && b === n.passive && g(o)
              }
            }
          }
          l = _.parentNode(l)
        }
      }

      function c(t) {
        return u(t, !0)
      }

      return null == (e = t.document) || e.createElement("div").addEventListener("test", null, {
        get capture() {
          return a.supportsOptions = !0
        }, get passive() {
          return a.supportsPassive = !0
        }
      }), t.events = a, a
    }
  };
  Sn.default = Dn;
  var An = {};
  Object.defineProperty(An, "__esModule", {value: !0}), An.default = void 0;
  var Rn = {
    methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function (t) {
      for (var e = 0; e < Rn.methodOrder.length; e++) {
        var n;
        n = Rn.methodOrder[e];
        var r = Rn[n](t);
        if (r) return r
      }
      return null
    }, simulationResume: function (t) {
      var e = t.pointerType, n = t.eventType, r = t.eventTarget, o = t.scope;
      if (!/down|start/i.test(n)) return null;
      for (var i = 0; i < o.interactions.list.length; i++) {
        var a = o.interactions.list[i], s = r;
        if (a.simulation && a.simulation.allowResume && a.pointerType === e) for (; s;) {
          if (s === a.element) return a;
          s = _.parentNode(s)
        }
      }
      return null
    }, mouseOrPen: function (t) {
      var e, n = t.pointerId, r = t.pointerType, o = t.eventType, i = t.scope;
      if ("mouse" !== r && "pen" !== r) return null;
      for (var a = 0; a < i.interactions.list.length; a++) {
        var s = i.interactions.list[a];
        if (s.pointerType === r) {
          if (s.simulation && !zn(s, n)) continue;
          if (s.interacting()) return s;
          e || (e = s)
        }
      }
      if (e) return e;
      for (var l = 0; l < i.interactions.list.length; l++) {
        var u = i.interactions.list[l];
        if (!(u.pointerType !== r || /down/i.test(o) && u.simulation)) return u
      }
      return null
    }, hasPointer: function (t) {
      for (var e = t.pointerId, n = t.scope, r = 0; r < n.interactions.list.length; r++) {
        var o = n.interactions.list[r];
        if (zn(o, e)) return o
      }
      return null
    }, idle: function (t) {
      for (var e = t.pointerType, n = t.scope, r = 0; r < n.interactions.list.length; r++) {
        var o = n.interactions.list[r];
        if (1 === o.pointers.length) {
          var i = o.interactable;
          if (i && (!i.options.gesture || !i.options.gesture.enabled)) continue
        } else if (o.pointers.length >= 2) continue;
        if (!o.interacting() && e === o.pointerType) return o
      }
      return null
    }
  };

  function zn(t, e) {
    return t.pointers.some((function (t) {
      return t.id === e
    }))
  }

  var Cn = Rn;
  An.default = Cn;
  var Fn = {};

  function Xn(t) {
    return (Xn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function Yn(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t
    }(t) || function (t, e) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
        var n = [], r = !0, o = !1, i = void 0;
        try {
          for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) ;
        } catch (t) {
          o = !0, i = t
        } finally {
          try {
            r || null == s.return || s.return()
          } finally {
            if (o) throw i
          }
        }
        return n
      }
    }(t, e) || function (t, e) {
      if (t) {
        if ("string" == typeof t) return Bn(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Bn(t, e) : void 0
      }
    }(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
  }

  function Bn(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r
  }

  function Wn(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function Ln(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function Un(t, e) {
    return (Un = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }

  function Vn(t, e) {
    return !e || "object" !== Xn(e) && "function" != typeof e ? function (t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }(t) : e
  }

  function Nn(t) {
    return (Nn = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  Object.defineProperty(Fn, "__esModule", {value: !0}), Fn.default = void 0;
  var qn = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];

  function $n(t, e) {
    return function (n) {
      var r = e.interactions.list, o = B.getPointerType(n), i = Yn(B.getEventTargets(n), 2), a = i[0], s = i[1], l = [];
      if (/^touch/.test(n.type)) {
        e.prevTouchTime = e.now();
        for (var u = 0; u < n.changedTouches.length; u++) {
          var c = n.changedTouches[u], f = {
            pointer: c,
            pointerId: B.getPointerId(c),
            pointerType: o,
            eventType: n.type,
            eventTarget: a,
            curEventTarget: s,
            scope: e
          }, d = Gn(f);
          l.push([f.pointer, f.eventTarget, f.curEventTarget, d])
        }
      } else {
        var p = !1;
        if (!b.default.supportsPointerEvent && /mouse/.test(n.type)) {
          for (var v = 0; v < r.length && !p; v++) p = "mouse" !== r[v].pointerType && r[v].pointerIsDown;
          p = p || e.now() - e.prevTouchTime < 500 || 0 === n.timeStamp
        }
        if (!p) {
          var h = {
            pointer: n,
            pointerId: B.getPointerId(n),
            pointerType: o,
            eventType: n.type,
            curEventTarget: s,
            eventTarget: a,
            scope: e
          }, g = Gn(h);
          l.push([h.pointer, h.eventTarget, h.curEventTarget, g])
        }
      }
      for (var y = 0; y < l.length; y++) {
        var m = Yn(l[y], 4), x = m[0], w = m[1], _ = m[2];
        m[3][t](x, n, w, _)
      }
    }
  }

  function Gn(t) {
    var e = t.pointerType, n = t.scope, r = {interaction: An.default.search(t), searchDetails: t};
    return n.fire("interactions:find", r), r.interaction || n.interactions.new({pointerType: e})
  }

  function Hn(t, e) {
    var n = t.doc, r = t.scope, o = t.options, i = r.interactions.docEvents, a = r.events, s = a[e];
    for (var l in r.browser.isIOS && !o.events && (o.events = {passive: !1}), a.delegatedEvents) s(n, l, a.delegateListener), s(n, l, a.delegateUseCapture, !0);
    for (var u = o && o.events, c = 0; c < i.length; c++) {
      var f = i[c];
      s(n, f.type, f.listener, u)
    }
  }

  var Kn = {
    id: "core/interactions", install: function (t) {
      for (var e = {}, n = 0; n < qn.length; n++) {
        var r = qn[n];
        e[r] = $n(r, t)
      }
      var o, i = b.default.pEventTypes;

      function a() {
        for (var e = 0; e < t.interactions.list.length; e++) {
          var n = t.interactions.list[e];
          if (n.pointerIsDown && "touch" === n.pointerType && !n._interacting) for (var r = function () {
            var e = n.pointers[o];
            t.documents.some((function (t) {
              var n = t.doc;
              return (0, _.nodeContains)(n, e.downTarget)
            })) || n.removePointer(e.pointer, e.event)
          }, o = 0; o < n.pointers.length; o++) r()
        }
      }

      (o = h.default.PointerEvent ? [{type: i.down, listener: a}, {
        type: i.down,
        listener: e.pointerDown
      }, {type: i.move, listener: e.pointerMove}, {type: i.up, listener: e.pointerUp}, {
        type: i.cancel,
        listener: e.pointerUp
      }] : [{type: "mousedown", listener: e.pointerDown}, {
        type: "mousemove",
        listener: e.pointerMove
      }, {type: "mouseup", listener: e.pointerUp}, {type: "touchstart", listener: a}, {
        type: "touchstart",
        listener: e.pointerDown
      }, {type: "touchmove", listener: e.pointerMove}, {type: "touchend", listener: e.pointerUp}, {
        type: "touchcancel",
        listener: e.pointerUp
      }]).push({
        type: "blur", listener: function (e) {
          for (var n = 0; n < t.interactions.list.length; n++) t.interactions.list[n].documentBlur(e)
        }
      }), t.prevTouchTime = 0, t.Interaction = function (e) {
        !function (t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), e && Un(t, e)
        }(s, e);
        var n, r, o, i, a = (o = s, i = function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
            }))), !0
          } catch (t) {
            return !1
          }
        }(), function () {
          var t, e = Nn(o);
          if (i) {
            var n = Nn(this).constructor;
            t = Reflect.construct(e, arguments, n)
          } else t = e.apply(this, arguments);
          return Vn(this, t)
        });

        function s() {
          return Wn(this, s), a.apply(this, arguments)
        }

        return n = s, (r = [{
          key: "pointerMoveTolerance", get: function () {
            return t.interactions.pointerMoveTolerance
          }, set: function (e) {
            t.interactions.pointerMoveTolerance = e
          }
        }, {
          key: "_now", value: function () {
            return t.now()
          }
        }]) && Ln(n.prototype, r), s
      }(Le.default), t.interactions = {
        list: [], new: function (e) {
          e.scopeFire = function (e, n) {
            return t.fire(e, n)
          };
          var n = new t.Interaction(e);
          return t.interactions.list.push(n), n
        }, listeners: e, docEvents: o, pointerMoveTolerance: 1
      }, t.usePlugin(se.default)
    }, listeners: {
      "scope:add-document": function (t) {
        return Hn(t, "add")
      }, "scope:remove-document": function (t) {
        return Hn(t, "remove")
      }, "interactable:unset": function (t, e) {
        for (var n = t.interactable, r = e.interactions.list.length - 1; r >= 0; r--) {
          var o = e.interactions.list[r];
          o.interactable === n && (o.stop(), e.fire("interactions:destroy", {interaction: o}), o.destroy(), e.interactions.list.length > 2 && e.interactions.list.splice(r, 1))
        }
      }
    }, onDocSignal: Hn, doOnInteractions: $n, methodNames: qn
  };
  Fn.default = Kn;
  var Zn = {};

  function Jn(t) {
    return (Jn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function Qn(t, e, n) {
    return (Qn = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
      var r = function (t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = nr(t));) ;
        return t
      }(t, e);
      if (r) {
        var o = Object.getOwnPropertyDescriptor(r, e);
        return o.get ? o.get.call(n) : o.value
      }
    })(t, e, n || t)
  }

  function tr(t, e) {
    return (tr = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }

  function er(t, e) {
    return !e || "object" !== Jn(e) && "function" != typeof e ? function (t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }(t) : e
  }

  function nr(t) {
    return (nr = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  function rr(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function or(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function ir(t, e, n) {
    return e && or(t.prototype, e), n && or(t, n), t
  }

  function ar(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t
  }

  Object.defineProperty(Zn, "__esModule", {value: !0}), Zn.initScope = lr, Zn.Scope = void 0;
  var sr = function () {
    function t() {
      var e = this;
      rr(this, t), ar(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), ar(this, "isInitialized", !1), ar(this, "listenerMaps", []), ar(this, "browser", b.default), ar(this, "defaults", (0, ge.default)(Me.defaults)), ar(this, "Eventable", cn.Eventable), ar(this, "actions", {
        map: {},
        phases: {start: !0, move: !0, end: !0},
        methodDict: {},
        phaselessTypes: {}
      }), ar(this, "interactStatic", (0, gn.createInteractStatic)(this)), ar(this, "InteractEvent", je.InteractEvent), ar(this, "Interactable", void 0), ar(this, "interactables", new wn.InteractableSet(this)), ar(this, "_win", void 0), ar(this, "document", void 0), ar(this, "window", void 0), ar(this, "documents", []), ar(this, "_plugins", {
        list: [],
        map: {}
      }), ar(this, "onWindowUnload", (function (t) {
        return e.removeDocument(t.target)
      }));
      var n = this;
      this.Interactable = function (t) {
        !function (t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), e && tr(t, e)
        }(i, t);
        var e, r, o = (e = i, r = function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
            }))), !0
          } catch (t) {
            return !1
          }
        }(), function () {
          var t, n = nr(e);
          if (r) {
            var o = nr(this).constructor;
            t = Reflect.construct(n, arguments, o)
          } else t = n.apply(this, arguments);
          return er(this, t)
        });

        function i() {
          return rr(this, i), o.apply(this, arguments)
        }

        return ir(i, [{
          key: "_defaults", get: function () {
            return n.defaults
          }
        }, {
          key: "set", value: function (t) {
            return Qn(nr(i.prototype), "set", this).call(this, t), n.fire("interactable:set", {
              options: t,
              interactable: this
            }), this
          }
        }, {
          key: "unset", value: function () {
            Qn(nr(i.prototype), "unset", this).call(this), n.interactables.list.splice(n.interactables.list.indexOf(this), 1), n.fire("interactable:unset", {interactable: this})
          }
        }]), i
      }(yn.Interactable)
    }

    return ir(t, [{
      key: "addListeners", value: function (t, e) {
        this.listenerMaps.push({id: e, map: t})
      }
    }, {
      key: "fire", value: function (t, e) {
        for (var n = 0; n < this.listenerMaps.length; n++) {
          var r = this.listenerMaps[n].map[t];
          if (r && !1 === r(e, this, t)) return !1
        }
      }
    }, {
      key: "init", value: function (t) {
        return this.isInitialized ? this : lr(this, t)
      }
    }, {
      key: "pluginIsInstalled", value: function (t) {
        return this._plugins.map[t.id] || -1 !== this._plugins.list.indexOf(t)
      }
    }, {
      key: "usePlugin", value: function (t, e) {
        if (!this.isInitialized) return this;
        if (this.pluginIsInstalled(t)) return this;
        if (t.id && (this._plugins.map[t.id] = t), this._plugins.list.push(t), t.install && t.install(this, e), t.listeners && t.before) {
          for (var n = 0, r = this.listenerMaps.length, o = t.before.reduce((function (t, e) {
            return t[e] = !0, t[ur(e)] = !0, t
          }), {}); n < r; n++) {
            var i = this.listenerMaps[n].id;
            if (o[i] || o[ur(i)]) break
          }
          this.listenerMaps.splice(n, 0, {id: t.id, map: t.listeners})
        } else t.listeners && this.listenerMaps.push({id: t.id, map: t.listeners});
        return this
      }
    }, {
      key: "addDocument", value: function (t, n) {
        if (-1 !== this.getDocIndex(t)) return !1;
        var r = e.getWindow(t);
        n = n ? (0, j.default)({}, n) : {}, this.documents.push({
          doc: t,
          options: n
        }), this.events.documents.push(t), t !== this.document && this.events.add(r, "unload", this.onWindowUnload), this.fire("scope:add-document", {
          doc: t,
          window: r,
          scope: this,
          options: n
        })
      }
    }, {
      key: "removeDocument", value: function (t) {
        var n = this.getDocIndex(t), r = e.getWindow(t), o = this.documents[n].options;
        this.events.remove(r, "unload", this.onWindowUnload), this.documents.splice(n, 1), this.events.documents.splice(n, 1), this.fire("scope:remove-document", {
          doc: t,
          window: r,
          scope: this,
          options: o
        })
      }
    }, {
      key: "getDocIndex", value: function (t) {
        for (var e = 0; e < this.documents.length; e++) if (this.documents[e].doc === t) return e;
        return -1
      }
    }, {
      key: "getDocOptions", value: function (t) {
        var e = this.getDocIndex(t);
        return -1 === e ? null : this.documents[e].options
      }
    }, {
      key: "now", value: function () {
        return (this.window.Date || Date).now()
      }
    }]), t
  }();

  function lr(t, n) {
    return t.isInitialized = !0, i.default.window(n) && e.init(n), h.default.init(n), b.default.init(n), jt.default.init(n), t.window = n, t.document = n.document, t.usePlugin(Fn.default), t.usePlugin(Sn.default), t
  }

  function ur(t) {
    return t && t.replace(/\/.*$/, "")
  }

  Zn.Scope = sr;
  var cr = {};
  Object.defineProperty(cr, "__esModule", {value: !0}), cr.default = void 0;
  var fr = new Zn.Scope, dr = fr.interactStatic;
  cr.default = dr;
  var pr = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0;
  fr.init(pr);
  var vr = {};
  Object.defineProperty(vr, "__esModule", {value: !0}), vr.default = void 0, vr.default = function () {
  };
  var hr = {};
  Object.defineProperty(hr, "__esModule", {value: !0}), hr.default = void 0, hr.default = function () {
  };
  var gr = {};

  function yr(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t
    }(t) || function (t, e) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
        var n = [], r = !0, o = !1, i = void 0;
        try {
          for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) ;
        } catch (t) {
          o = !0, i = t
        } finally {
          try {
            r || null == s.return || s.return()
          } finally {
            if (o) throw i
          }
        }
        return n
      }
    }(t, e) || function (t, e) {
      if (t) {
        if ("string" == typeof t) return mr(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? mr(t, e) : void 0
      }
    }(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
  }

  function mr(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r
  }

  Object.defineProperty(gr, "__esModule", {value: !0}), gr.default = void 0, gr.default = function (t) {
    var e = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter((function (e) {
      var n = yr(e, 2), r = n[0], o = n[1];
      return r in t || o in t
    })), n = function (n, r) {
      for (var o = t.range, i = t.limits, a = void 0 === i ? {
        left: -1 / 0,
        right: 1 / 0,
        top: -1 / 0,
        bottom: 1 / 0
      } : i, s = t.offset, l = void 0 === s ? {x: 0, y: 0} : s, u = {
        range: o,
        grid: t,
        x: null,
        y: null
      }, c = 0; c < e.length; c++) {
        var f = yr(e[c], 2), d = f[0], p = f[1], v = Math.round((n - l.x) / t[d]), h = Math.round((r - l.y) / t[p]);
        u[d] = Math.max(a.left, Math.min(a.right, v * t[d] + l.x)), u[p] = Math.max(a.top, Math.min(a.bottom, h * t[p] + l.y))
      }
      return u
    };
    return n.grid = t, n.coordFields = e, n
  };
  var br = {};
  Object.defineProperty(br, "__esModule", {value: !0}), Object.defineProperty(br, "edgeTarget", {
    enumerable: !0,
    get: function () {
      return vr.default
    }
  }), Object.defineProperty(br, "elements", {
    enumerable: !0, get: function () {
      return hr.default
    }
  }), Object.defineProperty(br, "grid", {
    enumerable: !0, get: function () {
      return gr.default
    }
  });
  var xr = {};
  Object.defineProperty(xr, "__esModule", {value: !0}), xr.default = void 0;
  var wr = {
    id: "snappers", install: function (t) {
      var e = t.interactStatic;
      e.snappers = (0, j.default)(e.snappers || {}, br), e.createSnapGrid = e.snappers.grid
    }
  };
  xr.default = wr;
  var _r = {};

  function Pr(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      e && (r = r.filter((function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function Or(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2 ? Pr(Object(n), !0).forEach((function (e) {
        Sr(t, e, n[e])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Pr(Object(n)).forEach((function (e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }))
    }
    return t
  }

  function Sr(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t
  }

  Object.defineProperty(_r, "__esModule", {value: !0}), _r.aspectRatio = _r.default = void 0;
  var Er = {
    start: function (t) {
      var e = t.state, n = t.rect, r = t.edges, o = t.pageCoords, i = e.options.ratio, a = e.options, s = a.equalDelta,
        l = a.modifiers;
      "preserve" === i && (i = n.width / n.height), e.startCoords = (0, j.default)({}, o), e.startRect = (0, j.default)({}, n), e.ratio = i, e.equalDelta = s;
      var u = e.linkedEdges = {
        top: r.top || r.left && !r.bottom,
        left: r.left || r.top && !r.right,
        bottom: r.bottom || r.right && !r.top,
        right: r.right || r.bottom && !r.left
      };
      if (e.xIsPrimaryAxis = !(!r.left && !r.right), e.equalDelta) e.edgeSign = (u.left ? 1 : -1) * (u.top ? 1 : -1); else {
        var c = e.xIsPrimaryAxis ? u.top : u.left;
        e.edgeSign = c ? -1 : 1
      }
      if ((0, j.default)(t.edges, u), l && l.length) {
        var f = new ye.default(t.interaction);
        f.copyFrom(t.interaction.modification), f.prepareStates(l), e.subModification = f, f.startAll(Or({}, t))
      }
    }, set: function (t) {
      var e = t.state, n = t.rect, r = t.coords, o = (0, j.default)({}, r), i = e.equalDelta ? Tr : Mr;
      if (i(e, e.xIsPrimaryAxis, r, n), !e.subModification) return null;
      var a = (0, j.default)({}, n);
      (0, k.addEdges)(e.linkedEdges, a, {x: r.x - o.x, y: r.y - o.y});
      var s = e.subModification.setAll(Or(Or({}, t), {}, {
        rect: a,
        edges: e.linkedEdges,
        pageCoords: r,
        prevCoords: r,
        prevRect: a
      })), l = s.delta;
      return s.changed && (i(e, Math.abs(l.x) > Math.abs(l.y), s.coords, s.rect), (0, j.default)(r, s.coords)), s.eventProps
    }, defaults: {ratio: "preserve", equalDelta: !1, modifiers: [], enabled: !1}
  };

  function Tr(t, e, n) {
    var r = t.startCoords, o = t.edgeSign;
    e ? n.y = r.y + (n.x - r.x) * o : n.x = r.x + (n.y - r.y) * o
  }

  function Mr(t, e, n, r) {
    var o = t.startRect, i = t.startCoords, a = t.ratio, s = t.edgeSign;
    if (e) {
      var l = r.width / a;
      n.y = i.y + (l - o.height) * s
    } else {
      var u = r.height * a;
      n.x = i.x + (u - o.width) * s
    }
  }

  _r.aspectRatio = Er;
  var jr = (0, Se.makeModifier)(Er, "aspectRatio");
  _r.default = jr;
  var kr = {};
  Object.defineProperty(kr, "__esModule", {value: !0}), kr.default = void 0;
  var Ir = function () {
  };
  Ir._defaults = {};
  var Dr = Ir;
  kr.default = Dr;
  var Ar = {};
  Object.defineProperty(Ar, "__esModule", {value: !0}), Object.defineProperty(Ar, "default", {
    enumerable: !0,
    get: function () {
      return kr.default
    }
  });
  var Rr = {};

  function zr(t, e, n) {
    return i.default.func(t) ? k.resolveRectLike(t, e.interactable, e.element, [n.x, n.y, e]) : k.resolveRectLike(t, e.interactable, e.element)
  }

  Object.defineProperty(Rr, "__esModule", {value: !0}), Rr.getRestrictionRect = zr, Rr.restrict = Rr.default = void 0;
  var Cr = {
    start: function (t) {
      var e = t.rect, n = t.startOffset, r = t.state, o = t.interaction, i = t.pageCoords, a = r.options,
        s = a.elementRect, l = (0, j.default)({left: 0, top: 0, right: 0, bottom: 0}, a.offset || {});
      if (e && s) {
        var u = zr(a.restriction, o, i);
        if (u) {
          var c = u.right - u.left - e.width, f = u.bottom - u.top - e.height;
          c < 0 && (l.left += c, l.right += c), f < 0 && (l.top += f, l.bottom += f)
        }
        l.left += n.left - e.width * s.left, l.top += n.top - e.height * s.top, l.right += n.right - e.width * (1 - s.right), l.bottom += n.bottom - e.height * (1 - s.bottom)
      }
      r.offset = l
    }, set: function (t) {
      var e = t.coords, n = t.interaction, r = t.state, o = r.options, i = r.offset, a = zr(o.restriction, n, e);
      if (a) {
        var s = k.xywhToTlbr(a);
        e.x = Math.max(Math.min(s.right - i.right, e.x), s.left + i.left), e.y = Math.max(Math.min(s.bottom - i.bottom, e.y), s.top + i.top)
      }
    }, defaults: {restriction: null, elementRect: null, offset: null, endOnly: !1, enabled: !1}
  };
  Rr.restrict = Cr;
  var Fr = (0, Se.makeModifier)(Cr, "restrict");
  Rr.default = Fr;
  var Xr = {};
  Object.defineProperty(Xr, "__esModule", {value: !0}), Xr.restrictEdges = Xr.default = void 0;
  var Yr = {top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0},
    Br = {top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0};

  function Wr(t, e) {
    for (var n = ["top", "left", "bottom", "right"], r = 0; r < n.length; r++) {
      var o = n[r];
      o in t || (t[o] = e[o])
    }
    return t
  }

  var Lr = {
    noInner: Yr, noOuter: Br, start: function (t) {
      var e, n = t.interaction, r = t.startOffset, o = t.state, i = o.options;
      if (i) {
        var a = (0, Rr.getRestrictionRect)(i.offset, n, n.coords.start.page);
        e = k.rectToXY(a)
      }
      e = e || {x: 0, y: 0}, o.offset = {
        top: e.y + r.top,
        left: e.x + r.left,
        bottom: e.y - r.bottom,
        right: e.x - r.right
      }
    }, set: function (t) {
      var e = t.coords, n = t.edges, r = t.interaction, o = t.state, i = o.offset, a = o.options;
      if (n) {
        var s = (0, j.default)({}, e), l = (0, Rr.getRestrictionRect)(a.inner, r, s) || {},
          u = (0, Rr.getRestrictionRect)(a.outer, r, s) || {};
        Wr(l, Yr), Wr(u, Br), n.top ? e.y = Math.min(Math.max(u.top + i.top, s.y), l.top + i.top) : n.bottom && (e.y = Math.max(Math.min(u.bottom + i.bottom, s.y), l.bottom + i.bottom)), n.left ? e.x = Math.min(Math.max(u.left + i.left, s.x), l.left + i.left) : n.right && (e.x = Math.max(Math.min(u.right + i.right, s.x), l.right + i.right))
      }
    }, defaults: {inner: null, outer: null, offset: null, endOnly: !1, enabled: !1}
  };
  Xr.restrictEdges = Lr;
  var Ur = (0, Se.makeModifier)(Lr, "restrictEdges");
  Xr.default = Ur;
  var Vr = {};
  Object.defineProperty(Vr, "__esModule", {value: !0}), Vr.restrictRect = Vr.default = void 0;
  var Nr = (0, j.default)({
    get elementRect() {
      return {top: 0, left: 0, bottom: 1, right: 1}
    }, set elementRect(t) {
    }
  }, Rr.restrict.defaults), qr = {start: Rr.restrict.start, set: Rr.restrict.set, defaults: Nr};
  Vr.restrictRect = qr;
  var $r = (0, Se.makeModifier)(qr, "restrictRect");
  Vr.default = $r;
  var Gr = {};
  Object.defineProperty(Gr, "__esModule", {value: !0}), Gr.restrictSize = Gr.default = void 0;
  var Hr = {width: -1 / 0, height: -1 / 0}, Kr = {width: 1 / 0, height: 1 / 0}, Zr = {
    start: function (t) {
      return Xr.restrictEdges.start(t)
    }, set: function (t) {
      var e = t.interaction, n = t.state, r = t.rect, o = t.edges, i = n.options;
      if (o) {
        var a = k.tlbrToXywh((0, Rr.getRestrictionRect)(i.min, e, t.coords)) || Hr,
          s = k.tlbrToXywh((0, Rr.getRestrictionRect)(i.max, e, t.coords)) || Kr;
        n.options = {
          endOnly: i.endOnly,
          inner: (0, j.default)({}, Xr.restrictEdges.noInner),
          outer: (0, j.default)({}, Xr.restrictEdges.noOuter)
        }, o.top ? (n.options.inner.top = r.bottom - a.height, n.options.outer.top = r.bottom - s.height) : o.bottom && (n.options.inner.bottom = r.top + a.height, n.options.outer.bottom = r.top + s.height), o.left ? (n.options.inner.left = r.right - a.width, n.options.outer.left = r.right - s.width) : o.right && (n.options.inner.right = r.left + a.width, n.options.outer.right = r.left + s.width), Xr.restrictEdges.set(t), n.options = i
      }
    }, defaults: {min: null, max: null, endOnly: !1, enabled: !1}
  };
  Gr.restrictSize = Zr;
  var Jr = (0, Se.makeModifier)(Zr, "restrictSize");
  Gr.default = Jr;
  var Qr = {};
  Object.defineProperty(Qr, "__esModule", {value: !0}), Object.defineProperty(Qr, "default", {
    enumerable: !0,
    get: function () {
      return kr.default
    }
  });
  var to = {};
  Object.defineProperty(to, "__esModule", {value: !0}), to.snap = to.default = void 0;
  var eo = {
    start: function (t) {
      var e, n = t.interaction, r = t.interactable, o = t.element, i = t.rect, a = t.state, s = t.startOffset,
        l = a.options, u = l.offsetWithOrigin ? function (t) {
          var e = t.interaction.element;
          return (0, k.rectToXY)((0, k.resolveRectLike)(t.state.options.origin, null, null, [e])) || (0, A.default)(t.interactable, e, t.interaction.prepared.name)
        }(t) : {x: 0, y: 0};
      if ("startCoords" === l.offset) e = {x: n.coords.start.page.x, y: n.coords.start.page.y}; else {
        var c = (0, k.resolveRectLike)(l.offset, r, o, [n]);
        (e = (0, k.rectToXY)(c) || {x: 0, y: 0}).x += u.x, e.y += u.y
      }
      var f = l.relativePoints;
      a.offsets = i && f && f.length ? f.map((function (t, n) {
        return {index: n, relativePoint: t, x: s.left - i.width * t.x + e.x, y: s.top - i.height * t.y + e.y}
      })) : [{index: 0, relativePoint: null, x: e.x, y: e.y}]
    },
    set: function (t) {
      var e = t.interaction, n = t.coords, r = t.state, o = r.options, a = r.offsets,
        s = (0, A.default)(e.interactable, e.element, e.prepared.name), l = (0, j.default)({}, n), u = [];
      o.offsetWithOrigin || (l.x -= s.x, l.y -= s.y);
      for (var c = 0; c < a.length; c++) for (var f = a[c], d = l.x - f.x, p = l.y - f.y, v = 0, h = o.targets.length; v < h; v++) {
        var g, y = o.targets[v];
        (g = i.default.func(y) ? y(d, p, e._proxy, f, v) : y) && u.push({
          x: (i.default.number(g.x) ? g.x : d) + f.x,
          y: (i.default.number(g.y) ? g.y : p) + f.y,
          range: i.default.number(g.range) ? g.range : o.range,
          source: y,
          index: v,
          offset: f
        })
      }
      for (var m = {target: null, inRange: !1, distance: 0, range: 0, delta: {x: 0, y: 0}}, b = 0; b < u.length; b++) {
        var x = u[b], w = x.range, _ = x.x - l.x, P = x.y - l.y, O = (0, C.default)(_, P), S = O <= w;
        w === 1 / 0 && m.inRange && m.range !== 1 / 0 && (S = !1), m.target && !(S ? m.inRange && w !== 1 / 0 ? O / w < m.distance / m.range : w === 1 / 0 && m.range !== 1 / 0 || O < m.distance : !m.inRange && O < m.distance) || (m.target = x, m.distance = O, m.range = w, m.inRange = S, m.delta.x = _, m.delta.y = P)
      }
      return m.inRange && (n.x = m.target.x, n.y = m.target.y), r.closest = m, m
    },
    defaults: {
      range: 1 / 0,
      targets: null,
      offset: null,
      offsetWithOrigin: !0,
      origin: null,
      relativePoints: null,
      endOnly: !1,
      enabled: !1
    }
  };
  to.snap = eo;
  var no = (0, Se.makeModifier)(eo, "snap");
  to.default = no;
  var ro = {};

  function oo(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r
  }

  Object.defineProperty(ro, "__esModule", {value: !0}), ro.snapSize = ro.default = void 0;
  var io = {
    start: function (t) {
      var e = t.state, n = t.edges, r = e.options;
      if (!n) return null;
      t.state = {
        options: {
          targets: null,
          relativePoints: [{x: n.left ? 0 : 1, y: n.top ? 0 : 1}],
          offset: r.offset || "self",
          origin: {x: 0, y: 0},
          range: r.range
        }
      }, e.targetFields = e.targetFields || [["width", "height"], ["x", "y"]], to.snap.start(t), e.offsets = t.state.offsets, t.state = e
    }, set: function (t) {
      var e, n, r = t.interaction, o = t.state, a = t.coords, s = o.options, l = o.offsets,
        u = {x: a.x - l[0].x, y: a.y - l[0].y};
      o.options = (0, j.default)({}, s), o.options.targets = [];
      for (var c = 0; c < (s.targets || []).length; c++) {
        var f = (s.targets || [])[c], d = void 0;
        if (d = i.default.func(f) ? f(u.x, u.y, r) : f) {
          for (var p = 0; p < o.targetFields.length; p++) {
            var v = (e = o.targetFields[p], n = 2, function (t) {
              if (Array.isArray(t)) return t
            }(e) || function (t, e) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                var n = [], r = !0, o = !1, i = void 0;
                try {
                  for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) ;
                } catch (t) {
                  o = !0, i = t
                } finally {
                  try {
                    r || null == s.return || s.return()
                  } finally {
                    if (o) throw i
                  }
                }
                return n
              }
            }(e, n) || function (t, e) {
              if (t) {
                if ("string" == typeof t) return oo(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? oo(t, e) : void 0
              }
            }(e, n) || function () {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()), h = v[0], g = v[1];
            if (h in d || g in d) {
              d.x = d[h], d.y = d[g];
              break
            }
          }
          o.options.targets.push(d)
        }
      }
      var y = to.snap.set(t);
      return o.options = s, y
    }, defaults: {range: 1 / 0, targets: null, offset: null, endOnly: !1, enabled: !1}
  };
  ro.snapSize = io;
  var ao = (0, Se.makeModifier)(io, "snapSize");
  ro.default = ao;
  var so = {};
  Object.defineProperty(so, "__esModule", {value: !0}), so.snapEdges = so.default = void 0;
  var lo = {
    start: function (t) {
      var e = t.edges;
      return e ? (t.state.targetFields = t.state.targetFields || [[e.left ? "left" : "right", e.top ? "top" : "bottom"]], ro.snapSize.start(t)) : null
    },
    set: ro.snapSize.set,
    defaults: (0, j.default)((0, ge.default)(ro.snapSize.defaults), {targets: null, range: null, offset: {x: 0, y: 0}})
  };
  so.snapEdges = lo;
  var uo = (0, Se.makeModifier)(lo, "snapEdges");
  so.default = uo;
  var co = {};
  Object.defineProperty(co, "__esModule", {value: !0}), Object.defineProperty(co, "default", {
    enumerable: !0,
    get: function () {
      return kr.default
    }
  });
  var fo = {};
  Object.defineProperty(fo, "__esModule", {value: !0}), Object.defineProperty(fo, "default", {
    enumerable: !0,
    get: function () {
      return kr.default
    }
  });
  var po = {};
  Object.defineProperty(po, "__esModule", {value: !0}), po.default = void 0;
  var vo = {
    aspectRatio: _r.default,
    restrictEdges: Xr.default,
    restrict: Rr.default,
    restrictRect: Vr.default,
    restrictSize: Gr.default,
    snapEdges: so.default,
    snap: to.default,
    snapSize: ro.default,
    spring: co.default,
    avoid: Ar.default,
    transform: fo.default,
    rubberband: Qr.default
  };
  po.default = vo;
  var ho = {};
  Object.defineProperty(ho, "__esModule", {value: !0}), ho.default = void 0;
  var go = {
    id: "modifiers", install: function (t) {
      var e = t.interactStatic;
      for (var n in t.usePlugin(Se.default), t.usePlugin(xr.default), e.modifiers = po.default, po.default) {
        var r = po.default[n], o = r._defaults, i = r._methods;
        o._methods = i, t.defaults.perAction[n] = o
      }
    }
  };
  ho.default = go;
  var yo = {};

  function mo(t) {
    return (mo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function bo(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function xo(t, e) {
    return (xo = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }

  function wo(t, e) {
    return !e || "object" !== mo(e) && "function" != typeof e ? _o(t) : e
  }

  function _o(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
  }

  function Po(t) {
    return (Po = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  function Oo(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t
  }

  Object.defineProperty(yo, "__esModule", {value: !0}), yo.PointerEvent = yo.default = void 0;
  var So = function (t) {
    !function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && xo(t, e)
    }(a, t);
    var e, n, r, o, i = (r = a, o = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
        }))), !0
      } catch (t) {
        return !1
      }
    }(), function () {
      var t, e = Po(r);
      if (o) {
        var n = Po(this).constructor;
        t = Reflect.construct(e, arguments, n)
      } else t = e.apply(this, arguments);
      return wo(this, t)
    });

    function a(t, e, n, r, o, s) {
      var l;
      if (function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, a), Oo(_o(l = i.call(this, o)), "type", void 0), Oo(_o(l), "originalEvent", void 0), Oo(_o(l), "pointerId", void 0), Oo(_o(l), "pointerType", void 0), Oo(_o(l), "double", void 0), Oo(_o(l), "pageX", void 0), Oo(_o(l), "pageY", void 0), Oo(_o(l), "clientX", void 0), Oo(_o(l), "clientY", void 0), Oo(_o(l), "dt", void 0), Oo(_o(l), "eventable", void 0), B.pointerExtend(_o(l), n), n !== e && B.pointerExtend(_o(l), e), l.timeStamp = s, l.originalEvent = n, l.type = t, l.pointerId = B.getPointerId(e), l.pointerType = B.getPointerType(e), l.target = r, l.currentTarget = null, "tap" === t) {
        var u = o.getPointerIndex(e);
        l.dt = l.timeStamp - o.pointers[u].downTime;
        var c = l.timeStamp - o.tapTime;
        l.double = !!(o.prevTap && "doubletap" !== o.prevTap.type && o.prevTap.target === l.target && c < 500)
      } else "doubletap" === t && (l.dt = e.timeStamp - o.tapTime);
      return l
    }

    return e = a, (n = [{
      key: "_subtractOrigin", value: function (t) {
        var e = t.x, n = t.y;
        return this.pageX -= e, this.pageY -= n, this.clientX -= e, this.clientY -= n, this
      }
    }, {
      key: "_addOrigin", value: function (t) {
        var e = t.x, n = t.y;
        return this.pageX += e, this.pageY += n, this.clientX += e, this.clientY += n, this
      }
    }, {
      key: "preventDefault", value: function () {
        this.originalEvent.preventDefault()
      }
    }]) && bo(e.prototype, n), a
  }($.BaseEvent);
  yo.PointerEvent = yo.default = So;
  var Eo = {};
  Object.defineProperty(Eo, "__esModule", {value: !0}), Eo.default = void 0;
  var To = {
    id: "pointer-events/base",
    before: ["inertia", "modifiers", "auto-start", "actions"],
    install: function (t) {
      t.pointerEvents = To, t.defaults.actions.pointerEvents = To.defaults, (0, j.default)(t.actions.phaselessTypes, To.types)
    },
    listeners: {
      "interactions:new": function (t) {
        var e = t.interaction;
        e.prevTap = null, e.tapTime = 0
      }, "interactions:update-pointer": function (t) {
        var e = t.down, n = t.pointerInfo;
        !e && n.hold || (n.hold = {duration: 1 / 0, timeout: null})
      }, "interactions:move": function (t, e) {
        var n = t.interaction, r = t.pointer, o = t.event, i = t.eventTarget;
        t.duplicate || n.pointerIsDown && !n.pointerWasMoved || (n.pointerIsDown && ko(t), Mo({
          interaction: n,
          pointer: r,
          event: o,
          eventTarget: i,
          type: "move"
        }, e))
      }, "interactions:down": function (t, e) {
        !function (t, e) {
          for (var n = t.interaction, r = t.pointer, o = t.event, i = t.eventTarget, a = t.pointerIndex, s = n.pointers[a].hold, l = _.getPath(i), u = {
            interaction: n,
            pointer: r,
            event: o,
            eventTarget: i,
            type: "hold",
            targets: [],
            path: l,
            node: null
          }, c = 0; c < l.length; c++) {
            var f = l[c];
            u.node = f, e.fire("pointerEvents:collect-targets", u)
          }
          if (u.targets.length) {
            for (var d = 1 / 0, p = 0; p < u.targets.length; p++) {
              var v = u.targets[p].eventable.options.holdDuration;
              v < d && (d = v)
            }
            s.duration = d, s.timeout = setTimeout((function () {
              Mo({interaction: n, eventTarget: i, pointer: r, event: o, type: "hold"}, e)
            }), d)
          }
        }(t, e), Mo(t, e)
      }, "interactions:up": function (t, e) {
        ko(t), Mo(t, e), function (t, e) {
          var n = t.interaction, r = t.pointer, o = t.event, i = t.eventTarget;
          n.pointerWasMoved || Mo({interaction: n, eventTarget: i, pointer: r, event: o, type: "tap"}, e)
        }(t, e)
      }, "interactions:cancel": function (t, e) {
        ko(t), Mo(t, e)
      }
    },
    PointerEvent: yo.PointerEvent,
    fire: Mo,
    collectEventTargets: jo,
    defaults: {holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: {x: 0, y: 0}},
    types: {down: !0, move: !0, up: !0, cancel: !0, tap: !0, doubletap: !0, hold: !0}
  };

  function Mo(t, e) {
    var n = t.interaction, r = t.pointer, o = t.event, i = t.eventTarget, a = t.type, s = t.targets,
      l = void 0 === s ? jo(t, e) : s, u = new yo.PointerEvent(a, r, o, i, n, e.now());
    e.fire("pointerEvents:new", {pointerEvent: u});
    for (var c = {
      interaction: n,
      pointer: r,
      event: o,
      eventTarget: i,
      targets: l,
      type: a,
      pointerEvent: u
    }, f = 0; f < l.length; f++) {
      var d = l[f];
      for (var p in d.props || {}) u[p] = d.props[p];
      var v = (0, A.default)(d.eventable, d.node);
      if (u._subtractOrigin(v), u.eventable = d.eventable, u.currentTarget = d.node, d.eventable.fire(u), u._addOrigin(v), u.immediatePropagationStopped || u.propagationStopped && f + 1 < l.length && l[f + 1].node !== u.currentTarget) break
    }
    if (e.fire("pointerEvents:fired", c), "tap" === a) {
      var h = u.double ? Mo({interaction: n, pointer: r, event: o, eventTarget: i, type: "doubletap"}, e) : u;
      n.prevTap = h, n.tapTime = h.timeStamp
    }
    return u
  }

  function jo(t, e) {
    var n = t.interaction, r = t.pointer, o = t.event, i = t.eventTarget, a = t.type, s = n.getPointerIndex(r),
      l = n.pointers[s];
    if ("tap" === a && (n.pointerWasMoved || !l || l.downTarget !== i)) return [];
    for (var u = _.getPath(i), c = {
      interaction: n,
      pointer: r,
      event: o,
      eventTarget: i,
      type: a,
      path: u,
      targets: [],
      node: null
    }, f = 0; f < u.length; f++) {
      var d = u[f];
      c.node = d, e.fire("pointerEvents:collect-targets", c)
    }
    return "hold" === a && (c.targets = c.targets.filter((function (t) {
      var e;
      return t.eventable.options.holdDuration === (null == (e = n.pointers[s]) ? void 0 : e.hold.duration)
    }))), c.targets
  }

  function ko(t) {
    var e = t.interaction, n = t.pointerIndex, r = e.pointers[n].hold;
    r && r.timeout && (clearTimeout(r.timeout), r.timeout = null)
  }

  var Io = To;
  Eo.default = Io;
  var Do = {};

  function Ao(t) {
    var e = t.interaction;
    e.holdIntervalHandle && (clearInterval(e.holdIntervalHandle), e.holdIntervalHandle = null)
  }

  Object.defineProperty(Do, "__esModule", {value: !0}), Do.default = void 0;
  var Ro = {
    id: "pointer-events/holdRepeat", install: function (t) {
      t.usePlugin(Eo.default);
      var e = t.pointerEvents;
      e.defaults.holdRepeatInterval = 0, e.types.holdrepeat = t.actions.phaselessTypes.holdrepeat = !0
    }, listeners: ["move", "up", "cancel", "endall"].reduce((function (t, e) {
      return t["pointerEvents:".concat(e)] = Ao, t
    }), {
      "pointerEvents:new": function (t) {
        var e = t.pointerEvent;
        "hold" === e.type && (e.count = (e.count || 0) + 1)
      }, "pointerEvents:fired": function (t, e) {
        var n = t.interaction, r = t.pointerEvent, o = t.eventTarget, i = t.targets;
        if ("hold" === r.type && i.length) {
          var a = i[0].eventable.options.holdRepeatInterval;
          a <= 0 || (n.holdIntervalHandle = setTimeout((function () {
            e.pointerEvents.fire({interaction: n, eventTarget: o, type: "hold", pointer: r, event: r}, e)
          }), a))
        }
      }
    })
  };
  Do.default = Ro;
  var zo = {};

  function Co(t) {
    return (0, j.default)(this.events.options, t), this
  }

  Object.defineProperty(zo, "__esModule", {value: !0}), zo.default = void 0;
  var Fo = {
    id: "pointer-events/interactableTargets", install: function (t) {
      var e = t.Interactable;
      e.prototype.pointerEvents = Co;
      var n = e.prototype._backCompatOption;
      e.prototype._backCompatOption = function (t, e) {
        var r = n.call(this, t, e);
        return r === this && (this.events.options[t] = e), r
      }
    }, listeners: {
      "pointerEvents:collect-targets": function (t, e) {
        var n = t.targets, r = t.node, o = t.type, i = t.eventTarget;
        e.interactables.forEachMatch(r, (function (t) {
          var e = t.events, a = e.options;
          e.types[o] && e.types[o].length && t.testIgnoreAllow(a, r, i) && n.push({
            node: r,
            eventable: e,
            props: {interactable: t}
          })
        }))
      }, "interactable:new": function (t) {
        var e = t.interactable;
        e.events.getRect = function (t) {
          return e.getRect(t)
        }
      }, "interactable:set": function (t, e) {
        var n = t.interactable, r = t.options;
        (0, j.default)(n.events.options, e.pointerEvents.defaults), (0, j.default)(n.events.options, r.pointerEvents || {})
      }
    }
  };
  zo.default = Fo;
  var Xo = {};
  Object.defineProperty(Xo, "__esModule", {value: !0}), Xo.default = void 0;
  var Yo = {
    id: "pointer-events", install: function (t) {
      t.usePlugin(Eo), t.usePlugin(Do.default), t.usePlugin(zo.default)
    }
  };
  Xo.default = Yo;
  var Bo = {};

  function Wo(t) {
    var e = t.Interactable;
    t.actions.phases.reflow = !0, e.prototype.reflow = function (e) {
      return function (t, e, n) {
        for (var r = i.default.string(t.target) ? Z.from(t._context.querySelectorAll(t.target)) : [t.target], o = n.window.Promise, a = o ? [] : null, s = function () {
          var i = r[l], s = t.getRect(i);
          if (!s) return "break";
          var u = Z.find(n.interactions.list, (function (n) {
            return n.interacting() && n.interactable === t && n.element === i && n.prepared.name === e.name
          })), c = void 0;
          if (u) u.move(), a && (c = u._reflowPromise || new o((function (t) {
            u._reflowResolve = t
          }))); else {
            var f = (0, k.tlbrToXywh)(s), d = {page: {x: f.x, y: f.y}, client: {x: f.x, y: f.y}, timeStamp: n.now()},
              p = B.coordsToEvent(d);
            c = function (t, e, n, r, o) {
              var i = t.interactions.new({pointerType: "reflow"}),
                a = {interaction: i, event: o, pointer: o, eventTarget: n, phase: "reflow"};
              i.interactable = e, i.element = n, i.prevEvent = o, i.updatePointer(o, o, n, !0), B.setZeroCoords(i.coords.delta), (0, Yt.copyAction)(i.prepared, r), i._doPhase(a);
              var s = t.window.Promise, l = s ? new s((function (t) {
                i._reflowResolve = t
              })) : void 0;
              return i._reflowPromise = l, i.start(r, e, n), i._interacting ? (i.move(a), i.end(o)) : (i.stop(), i._reflowResolve()), i.removePointer(o, o), l
            }(n, t, i, e, p)
          }
          a && a.push(c)
        }, l = 0; l < r.length && "break" !== s(); l++) ;
        return a && o.all(a).then((function () {
          return t
        }))
      }(this, e, t)
    }
  }

  Object.defineProperty(Bo, "__esModule", {value: !0}), Bo.install = Wo, Bo.default = void 0;
  var Lo = {
    id: "reflow", install: Wo, listeners: {
      "interactions:stop": function (t, e) {
        var n = t.interaction;
        "reflow" === n.pointerType && (n._reflowResolve && n._reflowResolve(), Z.remove(e.interactions.list, n))
      }
    }
  };
  Bo.default = Lo;
  var Uo = {exports: {}};

  function Vo(t) {
    return (Vo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  Object.defineProperty(Uo.exports, "__esModule", {value: !0}), Uo.exports.default = void 0, cr.default.use(se.default), cr.default.use(Ge.default), cr.default.use(Xo.default), cr.default.use(en.default), cr.default.use(ho.default), cr.default.use(ie.default), cr.default.use(Tt.default), cr.default.use(Rt.default), cr.default.use(Bo.default);
  var No = cr.default;
  if (Uo.exports.default = No, "object" === Vo(Uo) && Uo) try {
    Uo.exports = cr.default
  } catch (t) {
  }
  cr.default.default = cr.default, Uo = Uo.exports;
  var qo = {exports: {}};

  function $o(t) {
    return ($o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  Object.defineProperty(qo.exports, "__esModule", {value: !0}), qo.exports.default = void 0;
  var Go = Uo.default;
  if (qo.exports.default = Go, "object" === $o(qo) && qo) try {
    qo.exports = Uo.default
  } catch (t) {
  }
  return Uo.default.default = Uo.default, qo.exports
}));
//# sourceMappingURL=interact.min.js.map
