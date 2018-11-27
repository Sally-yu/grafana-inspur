"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var _typeof;

  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */

      !function (t, e) {
        "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.echarts = {});
      }(undefined, function (t) {
        "use strict";
        function e(t, e) {
          "createCanvas" === t && (eu = null), Jh[t] = e;
        }function n(t) {
          if (null == t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t))) return t;var e = t,
              i = Yh.call(t);if ("[object Array]" === i) {
            if (!E(t)) {
              e = [];for (var r = 0, a = t.length; r < a; r++) {
                e[r] = n(t[r]);
              }
            }
          } else if (qh[i]) {
            if (!E(t)) {
              var o = t.constructor;if (t.constructor.from) e = o.from(t);else {
                e = new o(t.length);for (var r = 0, a = t.length; r < a; r++) {
                  e[r] = n(t[r]);
                }
              }
            }
          } else if (!Xh[i] && !E(t) && !M(t)) {
            e = {};for (var s in t) {
              t.hasOwnProperty(s) && (e[s] = n(t[s]));
            }
          }return e;
        }function i(t, e, r) {
          if (!w(e) || !w(t)) return r ? n(e) : t;for (var a in e) {
            if (e.hasOwnProperty(a)) {
              var o = t[a],
                  s = e[a];!w(s) || !w(o) || y(s) || y(o) || M(s) || M(o) || b(s) || b(o) || E(s) || E(o) ? !r && a in t || (t[a] = n(e[a], !0)) : i(o, s, r);
            }
          }return t;
        }function r(t, e) {
          for (var n = t[0], r = 1, a = t.length; r < a; r++) {
            n = i(n, t[r], e);
          }return n;
        }function a(t, e) {
          for (var n in e) {
            e.hasOwnProperty(n) && (t[n] = e[n]);
          }return t;
        }function o(t, e, n) {
          for (var i in e) {
            e.hasOwnProperty(i) && (n ? null != e[i] : null == t[i]) && (t[i] = e[i]);
          }return t;
        }function s() {
          return eu || (eu = tu().getContext("2d")), eu;
        }function l(t, e) {
          if (t) {
            if (t.indexOf) return t.indexOf(e);for (var n = 0, i = t.length; n < i; n++) {
              if (t[n] === e) return n;
            }
          }return -1;
        }function h(t, e) {
          function n() {}var i = t.prototype;n.prototype = e.prototype, t.prototype = new n();for (var r in i) {
            t.prototype[r] = i[r];
          }t.prototype.constructor = t, t.superClass = e;
        }function u(t, e, n) {
          o(t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, n);
        }function c(t) {
          if (t) return "string" != typeof t && "number" == typeof t.length;
        }function f(t, e, n) {
          if (t && e) if (t.forEach && t.forEach === jh) t.forEach(e, n);else if (t.length === +t.length) for (var i = 0, r = t.length; i < r; i++) {
            e.call(n, t[i], i, t);
          } else for (var a in t) {
            t.hasOwnProperty(a) && e.call(n, t[a], a, t);
          }
        }function d(t, e, n) {
          if (t && e) {
            if (t.map && t.map === Qh) return t.map(e, n);for (var i = [], r = 0, a = t.length; r < a; r++) {
              i.push(e.call(n, t[r], r, t));
            }return i;
          }
        }function p(t, e, n, i) {
          if (t && e) {
            if (t.reduce && t.reduce === Kh) return t.reduce(e, n, i);for (var r = 0, a = t.length; r < a; r++) {
              n = e.call(i, n, t[r], r, t);
            }return n;
          }
        }function g(t, e, n) {
          if (t && e) {
            if (t.filter && t.filter === Zh) return t.filter(e, n);for (var i = [], r = 0, a = t.length; r < a; r++) {
              e.call(n, t[r], r, t) && i.push(t[r]);
            }return i;
          }
        }function v(t, e) {
          var n = $h.call(arguments, 2);return function () {
            return t.apply(e, n.concat($h.call(arguments)));
          };
        }function m(t) {
          var e = $h.call(arguments, 1);return function () {
            return t.apply(this, e.concat($h.call(arguments)));
          };
        }function y(t) {
          return "[object Array]" === Yh.call(t);
        }function _(t) {
          return "function" == typeof t;
        }function x(t) {
          return "[object String]" === Yh.call(t);
        }function w(t) {
          var e = typeof t === "undefined" ? "undefined" : _typeof(t);return "function" === e || !!t && "object" == e;
        }function b(t) {
          return !!Xh[Yh.call(t)];
        }function S(t) {
          return !!qh[Yh.call(t)];
        }function M(t) {
          return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "number" == typeof t.nodeType && "object" == _typeof(t.ownerDocument);
        }function T(t) {
          return t !== t;
        }function I(t) {
          for (var e = 0, n = arguments.length; e < n; e++) {
            if (null != arguments[e]) return arguments[e];
          }
        }function k(t, e) {
          return null != t ? t : e;
        }function C(t, e, n) {
          return null != t ? t : null != e ? e : n;
        }function D() {
          return Function.call.apply($h, arguments);
        }function A(t) {
          if ("number" == typeof t) return [t, t, t, t];var e = t.length;return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t;
        }function L(t, e) {
          if (!t) throw new Error(e);
        }function P(t) {
          return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        }function O(t) {
          t[nu] = !0;
        }function E(t) {
          return t[nu];
        }function N(t) {
          function e(t, e) {
            n ? i.set(t, e) : i.set(e, t);
          }var n = y(t);this.data = {};var i = this;t instanceof N ? t.each(e) : t && f(t, e);
        }function B(t) {
          return new N(t);
        }function R() {}function z(t, e) {
          var n = new iu(2);return null == t && (t = 0), null == e && (e = 0), n[0] = t, n[1] = e, n;
        }function F(t) {
          var e = new iu(2);return e[0] = t[0], e[1] = t[1], e;
        }function V(t, e, n) {
          return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t;
        }function W(t, e, n) {
          return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t;
        }function H(t) {
          return Math.sqrt(G(t));
        }function G(t) {
          return t[0] * t[0] + t[1] * t[1];
        }function X(t, e, n) {
          return t[0] = e[0] * n, t[1] = e[1] * n, t;
        }function q(t, e) {
          var n = H(e);return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t;
        }function Y(t, e) {
          return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]));
        }function U(t, e, n) {
          var i = e[0],
              r = e[1];return t[0] = n[0] * i + n[2] * r + n[4], t[1] = n[1] * i + n[3] * r + n[5], t;
        }function j(t, e, n) {
          return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t;
        }function Z(t, e, n) {
          return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t;
        }function $() {
          this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this);
        }function Q(t, e) {
          return { target: t, topTarget: e && e.topTarget };
        }function K(t, e) {
          var n = t._$eventProcessor;return null != e && n && n.normalizeQuery && (e = n.normalizeQuery(e)), e;
        }function J(t) {
          return t.getBoundingClientRect ? t.getBoundingClientRect() : { left: 0, top: 0 };
        }function tt(t, e, n, i) {
          return n = n || {}, i || !Gh.canvasSupported ? et(t, e, n) : Gh.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (n.zrX = e.layerX, n.zrY = e.layerY) : null != e.offsetX ? (n.zrX = e.offsetX, n.zrY = e.offsetY) : et(t, e, n), n;
        }function et(t, e, n) {
          var i = J(t);n.zrX = e.clientX - i.left, n.zrY = e.clientY - i.top;
        }function nt(t, e, n) {
          if (null != (e = e || window.event).zrX) return e;var i = e.type;if (i && i.indexOf("touch") >= 0) {
            var r = "touchend" != i ? e.targetTouches[0] : e.changedTouches[0];r && tt(t, r, e, n);
          } else tt(t, e, e, n), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;var a = e.button;return null == e.which && void 0 !== a && hu.test(e.type) && (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e;
        }function it(t, e, n) {
          lu ? t.addEventListener(e, n) : t.attachEvent("on" + e, n);
        }function rt(t, e, n) {
          lu ? t.removeEventListener(e, n) : t.detachEvent("on" + e, n);
        }function at(t, e, n) {
          return { type: t, event: n, target: e.target, topTarget: e.topTarget, cancelBubble: !1, offsetX: n.zrX, offsetY: n.zrY, gestureEvent: n.gestureEvent, pinchX: n.pinchX, pinchY: n.pinchY, pinchScale: n.pinchScale, wheelDelta: n.zrDelta, zrByTouch: n.zrByTouch, which: n.which, stop: ot };
        }function ot(t) {
          uu(this.event);
        }function st() {}function lt(t, e, n) {
          if (t[t.rectHover ? "rectContain" : "contain"](e, n)) {
            for (var i, r = t; r;) {
              if (r.clipPath && !r.clipPath.contain(e, n)) return !1;r.silent && (i = !0), r = r.parent;
            }return !i || cu;
          }return !1;
        }function ht() {
          var t = new pu(6);return ut(t), t;
        }function ut(t) {
          return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
        }function ct(t, e) {
          return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t;
        }function ft(t, e, n) {
          var i = e[0] * n[0] + e[2] * n[1],
              r = e[1] * n[0] + e[3] * n[1],
              a = e[0] * n[2] + e[2] * n[3],
              o = e[1] * n[2] + e[3] * n[3],
              s = e[0] * n[4] + e[2] * n[5] + e[4],
              l = e[1] * n[4] + e[3] * n[5] + e[5];return t[0] = i, t[1] = r, t[2] = a, t[3] = o, t[4] = s, t[5] = l, t;
        }function dt(t, e, n) {
          return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + n[0], t[5] = e[5] + n[1], t;
        }function pt(t, e, n) {
          var i = e[0],
              r = e[2],
              a = e[4],
              o = e[1],
              s = e[3],
              l = e[5],
              h = Math.sin(n),
              u = Math.cos(n);return t[0] = i * u + o * h, t[1] = -i * h + o * u, t[2] = r * u + s * h, t[3] = -r * h + u * s, t[4] = u * a + h * l, t[5] = u * l - h * a, t;
        }function gt(t, e, n) {
          var i = n[0],
              r = n[1];return t[0] = e[0] * i, t[1] = e[1] * r, t[2] = e[2] * i, t[3] = e[3] * r, t[4] = e[4] * i, t[5] = e[5] * r, t;
        }function vt(t, e) {
          var n = e[0],
              i = e[2],
              r = e[4],
              a = e[1],
              o = e[3],
              s = e[5],
              l = n * o - a * i;return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -i * l, t[3] = n * l, t[4] = (i * s - o * r) * l, t[5] = (a * r - n * s) * l, t) : null;
        }function mt(t) {
          return t > vu || t < -vu;
        }function yt(t) {
          this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null != t.loop && t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1;
        }function _t(t) {
          return (t = Math.round(t)) < 0 ? 0 : t > 255 ? 255 : t;
        }function xt(t) {
          return t < 0 ? 0 : t > 1 ? 1 : t;
        }function wt(t) {
          return _t(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10));
        }function bt(t) {
          return xt(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t));
        }function St(t, e, n) {
          return n < 0 ? n += 1 : n > 1 && (n -= 1), 6 * n < 1 ? t + (e - t) * n * 6 : 2 * n < 1 ? e : 3 * n < 2 ? t + (e - t) * (2 / 3 - n) * 6 : t;
        }function Mt(t, e, n, i, r) {
          return t[0] = e, t[1] = n, t[2] = i, t[3] = r, t;
        }function Tt(t, e) {
          return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
        }function It(t, e) {
          Au && Tt(Au, e), Au = Du.put(t, Au || e.slice());
        }function kt(t, e) {
          if (t) {
            e = e || [];var n = Du.get(t);if (n) return Tt(e, n);var i = (t += "").replace(/ /g, "").toLowerCase();if (i in Cu) return Tt(e, Cu[i]), It(t, e), e;if ("#" !== i.charAt(0)) {
              var r = i.indexOf("("),
                  a = i.indexOf(")");if (-1 !== r && a + 1 === i.length) {
                var o = i.substr(0, r),
                    s = i.substr(r + 1, a - (r + 1)).split(","),
                    l = 1;switch (o) {case "rgba":
                    if (4 !== s.length) return void Mt(e, 0, 0, 0, 1);l = bt(s.pop());case "rgb":
                    return 3 !== s.length ? void Mt(e, 0, 0, 0, 1) : (Mt(e, wt(s[0]), wt(s[1]), wt(s[2]), l), It(t, e), e);case "hsla":
                    return 4 !== s.length ? void Mt(e, 0, 0, 0, 1) : (s[3] = bt(s[3]), Ct(s, e), It(t, e), e);case "hsl":
                    return 3 !== s.length ? void Mt(e, 0, 0, 0, 1) : (Ct(s, e), It(t, e), e);default:
                    return;}
              }Mt(e, 0, 0, 0, 1);
            } else {
              if (4 === i.length) return (h = parseInt(i.substr(1), 16)) >= 0 && h <= 4095 ? (Mt(e, (3840 & h) >> 4 | (3840 & h) >> 8, 240 & h | (240 & h) >> 4, 15 & h | (15 & h) << 4, 1), It(t, e), e) : void Mt(e, 0, 0, 0, 1);if (7 === i.length) {
                var h = parseInt(i.substr(1), 16);return h >= 0 && h <= 16777215 ? (Mt(e, (16711680 & h) >> 16, (65280 & h) >> 8, 255 & h, 1), It(t, e), e) : void Mt(e, 0, 0, 0, 1);
              }
            }
          }
        }function Ct(t, e) {
          var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360,
              i = bt(t[1]),
              r = bt(t[2]),
              a = r <= .5 ? r * (i + 1) : r + i - r * i,
              o = 2 * r - a;return e = e || [], Mt(e, _t(255 * St(o, a, n + 1 / 3)), _t(255 * St(o, a, n)), _t(255 * St(o, a, n - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e;
        }function Dt(t, e) {
          var n = kt(t);if (n) {
            for (var i = 0; i < 3; i++) {
              n[i] = e < 0 ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0, n[i] > 255 ? n[i] = 255 : t[i] < 0 && (n[i] = 0);
            }return At(n, 4 === n.length ? "rgba" : "rgb");
          }
        }function At(t, e) {
          if (t && t.length) {
            var n = t[0] + "," + t[1] + "," + t[2];return "rgba" !== e && "hsva" !== e && "hsla" !== e || (n += "," + t[3]), e + "(" + n + ")";
          }
        }function Lt(t, e) {
          return t[e];
        }function Pt(t, e, n) {
          t[e] = n;
        }function Ot(t, e, n) {
          return (e - t) * n + t;
        }function Et(t, e, n) {
          return n > .5 ? e : t;
        }function Nt(t, e, n, i, r) {
          var a = t.length;if (1 == r) for (s = 0; s < a; s++) {
            i[s] = Ot(t[s], e[s], n);
          } else for (var o = a && t[0].length, s = 0; s < a; s++) {
            for (var l = 0; l < o; l++) {
              i[s][l] = Ot(t[s][l], e[s][l], n);
            }
          }
        }function Bt(t, e, n) {
          var i = t.length,
              r = e.length;if (i !== r) if (i > r) t.length = r;else for (o = i; o < r; o++) {
            t.push(1 === n ? e[o] : Lu.call(e[o]));
          }for (var a = t[0] && t[0].length, o = 0; o < t.length; o++) {
            if (1 === n) isNaN(t[o]) && (t[o] = e[o]);else for (var s = 0; s < a; s++) {
              isNaN(t[o][s]) && (t[o][s] = e[o][s]);
            }
          }
        }function Rt(t, e, n) {
          if (t === e) return !0;var i = t.length;if (i !== e.length) return !1;if (1 === n) {
            for (a = 0; a < i; a++) {
              if (t[a] !== e[a]) return !1;
            }
          } else for (var r = t[0].length, a = 0; a < i; a++) {
            for (var o = 0; o < r; o++) {
              if (t[a][o] !== e[a][o]) return !1;
            }
          }return !0;
        }function zt(t, e, n, i, r, a, o, s, l) {
          var h = t.length;if (1 == l) for (c = 0; c < h; c++) {
            s[c] = Ft(t[c], e[c], n[c], i[c], r, a, o);
          } else for (var u = t[0].length, c = 0; c < h; c++) {
            for (var f = 0; f < u; f++) {
              s[c][f] = Ft(t[c][f], e[c][f], n[c][f], i[c][f], r, a, o);
            }
          }
        }function Ft(t, e, n, i, r, a, o) {
          var s = .5 * (n - t),
              l = .5 * (i - e);return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e;
        }function Vt(t) {
          if (c(t)) {
            var e = t.length;if (c(t[0])) {
              for (var n = [], i = 0; i < e; i++) {
                n.push(Lu.call(t[i]));
              }return n;
            }return Lu.call(t);
          }return t;
        }function Wt(t) {
          return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")";
        }function Ht(t) {
          var e = t[t.length - 1].value;return c(e && e[0]) ? 2 : 1;
        }function Gt(t, e, n, i, r, a) {
          var o = t._getter,
              s = t._setter,
              l = "spline" === e,
              h = i.length;if (h) {
            var u,
                f = c(i[0].value),
                d = !1,
                p = !1,
                g = f ? Ht(i) : 0;i.sort(function (t, e) {
              return t.time - e.time;
            }), u = i[h - 1].time;for (var v = [], m = [], y = i[0].value, _ = !0, x = 0; x < h; x++) {
              v.push(i[x].time / u);var w = i[x].value;if (f && Rt(w, y, g) || !f && w === y || (_ = !1), y = w, "string" == typeof w) {
                var b = kt(w);b ? (w = b, d = !0) : p = !0;
              }m.push(w);
            }if (a || !_) {
              for (var S = m[h - 1], x = 0; x < h - 1; x++) {
                f ? Bt(m[x], S, g) : !isNaN(m[x]) || isNaN(S) || p || d || (m[x] = S);
              }f && Bt(o(t._target, r), S, g);var M,
                  T,
                  I,
                  k,
                  C,
                  D,
                  A = 0,
                  L = 0;if (d) var P = [0, 0, 0, 0];var O = new yt({ target: t._target, life: u, loop: t._loop, delay: t._delay, onframe: function onframe(t, e) {
                  var n;if (e < 0) n = 0;else if (e < L) {
                    for (n = M = Math.min(A + 1, h - 1); n >= 0 && !(v[n] <= e); n--) {}n = Math.min(n, h - 2);
                  } else {
                    for (n = A; n < h && !(v[n] > e); n++) {}n = Math.min(n - 1, h - 2);
                  }A = n, L = e;var i = v[n + 1] - v[n];if (0 !== i) if (T = (e - v[n]) / i, l) {
                    if (k = m[n], I = m[0 === n ? n : n - 1], C = m[n > h - 2 ? h - 1 : n + 1], D = m[n > h - 3 ? h - 1 : n + 2], f) zt(I, k, C, D, T, T * T, T * T * T, o(t, r), g);else {
                      if (d) a = zt(I, k, C, D, T, T * T, T * T * T, P, 1), a = Wt(P);else {
                        if (p) return Et(k, C, T);a = Ft(I, k, C, D, T, T * T, T * T * T);
                      }s(t, r, a);
                    }
                  } else if (f) Nt(m[n], m[n + 1], T, o(t, r), g);else {
                    var a;if (d) Nt(m[n], m[n + 1], T, P, 1), a = Wt(P);else {
                      if (p) return Et(m[n], m[n + 1], T);a = Ot(m[n], m[n + 1], T);
                    }s(t, r, a);
                  }
                }, ondestroy: n });return e && "spline" !== e && (O.easing = e), O;
            }
          }
        }function Xt(t, e, n, i, r, a, o, s) {
          x(i) ? (a = r, r = i, i = 0) : _(r) ? (a = r, r = "linear", i = 0) : _(i) ? (a = i, i = 0) : _(n) ? (a = n, n = 500) : n || (n = 500), t.stopAnimation(), qt(t, "", t, e, n, i, s);var l = t.animators.slice(),
              h = l.length;h || a && a();for (var u = 0; u < l.length; u++) {
            l[u].done(function () {
              --h || a && a();
            }).start(r, o);
          }
        }function qt(t, e, n, i, r, a, o) {
          var s = {},
              l = 0;for (var h in i) {
            i.hasOwnProperty(h) && (null != n[h] ? w(i[h]) && !c(i[h]) ? qt(t, e ? e + "." + h : h, n[h], i[h], r, a, o) : (o ? (s[h] = n[h], Yt(t, e, h, i[h])) : s[h] = i[h], l++) : null == i[h] || o || Yt(t, e, h, i[h]));
          }l > 0 && t.animate(e, !1).when(null == r ? 500 : r, s).delay(a || 0);
        }function Yt(t, e, n, i) {
          if (e) {
            var r = {};r[e] = {}, r[e][n] = i, t.attr(r);
          } else t.attr(n, i);
        }function Ut(t, e, n, i) {
          n < 0 && (t += n, n = -n), i < 0 && (e += i, i = -i), this.x = t, this.y = e, this.width = n, this.height = i;
        }function jt(t) {
          for (var e = 0; t >= Gu;) {
            e |= 1 & t, t >>= 1;
          }return t + e;
        }function Zt(t, e, n, i) {
          var r = e + 1;if (r === n) return 1;if (i(t[r++], t[e]) < 0) {
            for (; r < n && i(t[r], t[r - 1]) < 0;) {
              r++;
            }$t(t, e, r);
          } else for (; r < n && i(t[r], t[r - 1]) >= 0;) {
            r++;
          }return r - e;
        }function $t(t, e, n) {
          for (n--; e < n;) {
            var i = t[e];t[e++] = t[n], t[n--] = i;
          }
        }function Qt(t, e, n, i, r) {
          for (i === e && i++; i < n; i++) {
            for (var a, o = t[i], s = e, l = i; s < l;) {
              r(o, t[a = s + l >>> 1]) < 0 ? l = a : s = a + 1;
            }var h = i - s;switch (h) {case 3:
                t[s + 3] = t[s + 2];case 2:
                t[s + 2] = t[s + 1];case 1:
                t[s + 1] = t[s];break;default:
                for (; h > 0;) {
                  t[s + h] = t[s + h - 1], h--;
                }}t[s] = o;
          }
        }function Kt(t, e, n, i, r, a) {
          var o = 0,
              s = 0,
              l = 1;if (a(t, e[n + r]) > 0) {
            for (s = i - r; l < s && a(t, e[n + r + l]) > 0;) {
              o = l, (l = 1 + (l << 1)) <= 0 && (l = s);
            }l > s && (l = s), o += r, l += r;
          } else {
            for (s = r + 1; l < s && a(t, e[n + r - l]) <= 0;) {
              o = l, (l = 1 + (l << 1)) <= 0 && (l = s);
            }l > s && (l = s);var h = o;o = r - l, l = r - h;
          }for (o++; o < l;) {
            var u = o + (l - o >>> 1);a(t, e[n + u]) > 0 ? o = u + 1 : l = u;
          }return l;
        }function Jt(t, e, n, i, r, a) {
          var o = 0,
              s = 0,
              l = 1;if (a(t, e[n + r]) < 0) {
            for (s = r + 1; l < s && a(t, e[n + r - l]) < 0;) {
              o = l, (l = 1 + (l << 1)) <= 0 && (l = s);
            }l > s && (l = s);var h = o;o = r - l, l = r - h;
          } else {
            for (s = i - r; l < s && a(t, e[n + r + l]) >= 0;) {
              o = l, (l = 1 + (l << 1)) <= 0 && (l = s);
            }l > s && (l = s), o += r, l += r;
          }for (o++; o < l;) {
            var u = o + (l - o >>> 1);a(t, e[n + u]) < 0 ? l = u : o = u + 1;
          }return l;
        }function te(t, e) {
          function n(n) {
            var s = a[n],
                h = o[n],
                u = a[n + 1],
                c = o[n + 1];o[n] = h + c, n === l - 3 && (a[n + 1] = a[n + 2], o[n + 1] = o[n + 2]), l--;var f = Jt(t[u], t, s, h, 0, e);s += f, 0 !== (h -= f) && 0 !== (c = Kt(t[s + h - 1], t, u, c, c - 1, e)) && (h <= c ? i(s, h, u, c) : r(s, h, u, c));
          }function i(n, i, r, a) {
            var o = 0;for (o = 0; o < i; o++) {
              h[o] = t[n + o];
            }var l = 0,
                u = r,
                c = n;if (t[c++] = t[u++], 0 != --a) {
              if (1 !== i) {
                for (var f, d, p, g = s;;) {
                  f = 0, d = 0, p = !1;do {
                    if (e(t[u], h[l]) < 0) {
                      if (t[c++] = t[u++], d++, f = 0, 0 == --a) {
                        p = !0;break;
                      }
                    } else if (t[c++] = h[l++], f++, d = 0, 1 == --i) {
                      p = !0;break;
                    }
                  } while ((f | d) < g);if (p) break;do {
                    if (0 !== (f = Jt(t[u], h, l, i, 0, e))) {
                      for (o = 0; o < f; o++) {
                        t[c + o] = h[l + o];
                      }if (c += f, l += f, (i -= f) <= 1) {
                        p = !0;break;
                      }
                    }if (t[c++] = t[u++], 0 == --a) {
                      p = !0;break;
                    }if (0 !== (d = Kt(h[l], t, u, a, 0, e))) {
                      for (o = 0; o < d; o++) {
                        t[c + o] = t[u + o];
                      }if (c += d, u += d, 0 === (a -= d)) {
                        p = !0;break;
                      }
                    }if (t[c++] = h[l++], 1 == --i) {
                      p = !0;break;
                    }g--;
                  } while (f >= Xu || d >= Xu);if (p) break;g < 0 && (g = 0), g += 2;
                }if ((s = g) < 1 && (s = 1), 1 === i) {
                  for (o = 0; o < a; o++) {
                    t[c + o] = t[u + o];
                  }t[c + a] = h[l];
                } else {
                  if (0 === i) throw new Error();for (o = 0; o < i; o++) {
                    t[c + o] = h[l + o];
                  }
                }
              } else {
                for (o = 0; o < a; o++) {
                  t[c + o] = t[u + o];
                }t[c + a] = h[l];
              }
            } else for (o = 0; o < i; o++) {
              t[c + o] = h[l + o];
            }
          }function r(n, i, r, a) {
            var o = 0;for (o = 0; o < a; o++) {
              h[o] = t[r + o];
            }var l = n + i - 1,
                u = a - 1,
                c = r + a - 1,
                f = 0,
                d = 0;if (t[c--] = t[l--], 0 != --i) {
              if (1 !== a) {
                for (var p = s;;) {
                  var g = 0,
                      v = 0,
                      m = !1;do {
                    if (e(h[u], t[l]) < 0) {
                      if (t[c--] = t[l--], g++, v = 0, 0 == --i) {
                        m = !0;break;
                      }
                    } else if (t[c--] = h[u--], v++, g = 0, 1 == --a) {
                      m = !0;break;
                    }
                  } while ((g | v) < p);if (m) break;do {
                    if (0 != (g = i - Jt(h[u], t, n, i, i - 1, e))) {
                      for (i -= g, d = (c -= g) + 1, f = (l -= g) + 1, o = g - 1; o >= 0; o--) {
                        t[d + o] = t[f + o];
                      }if (0 === i) {
                        m = !0;break;
                      }
                    }if (t[c--] = h[u--], 1 == --a) {
                      m = !0;break;
                    }if (0 != (v = a - Kt(t[l], h, 0, a, a - 1, e))) {
                      for (a -= v, d = (c -= v) + 1, f = (u -= v) + 1, o = 0; o < v; o++) {
                        t[d + o] = h[f + o];
                      }if (a <= 1) {
                        m = !0;break;
                      }
                    }if (t[c--] = t[l--], 0 == --i) {
                      m = !0;break;
                    }p--;
                  } while (g >= Xu || v >= Xu);if (m) break;p < 0 && (p = 0), p += 2;
                }if ((s = p) < 1 && (s = 1), 1 === a) {
                  for (d = (c -= i) + 1, f = (l -= i) + 1, o = i - 1; o >= 0; o--) {
                    t[d + o] = t[f + o];
                  }t[c] = h[u];
                } else {
                  if (0 === a) throw new Error();for (f = c - (a - 1), o = 0; o < a; o++) {
                    t[f + o] = h[o];
                  }
                }
              } else {
                for (d = (c -= i) + 1, f = (l -= i) + 1, o = i - 1; o >= 0; o--) {
                  t[d + o] = t[f + o];
                }t[c] = h[u];
              }
            } else for (f = c - (a - 1), o = 0; o < a; o++) {
              t[f + o] = h[o];
            }
          }var a,
              o,
              s = Xu,
              l = 0,
              h = [];a = [], o = [], this.mergeRuns = function () {
            for (; l > 1;) {
              var t = l - 2;if (t >= 1 && o[t - 1] <= o[t] + o[t + 1] || t >= 2 && o[t - 2] <= o[t] + o[t - 1]) o[t - 1] < o[t + 1] && t--;else if (o[t] > o[t + 1]) break;n(t);
            }
          }, this.forceMergeRuns = function () {
            for (; l > 1;) {
              var t = l - 2;t > 0 && o[t - 1] < o[t + 1] && t--, n(t);
            }
          }, this.pushRun = function (t, e) {
            a[l] = t, o[l] = e, l += 1;
          };
        }function ee(t, e, n, i) {
          n || (n = 0), i || (i = t.length);var r = i - n;if (!(r < 2)) {
            var a = 0;if (r < Gu) return a = Zt(t, n, i, e), void Qt(t, n, i, n + a, e);var o = new te(t, e),
                s = jt(r);do {
              if ((a = Zt(t, n, i, e)) < s) {
                var l = r;l > s && (l = s), Qt(t, n, n + l, n + a, e), a = l;
              }o.pushRun(n, a), o.mergeRuns(), r -= a, n += a;
            } while (0 !== r);o.forceMergeRuns();
          }
        }function ne(t, e) {
          return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel;
        }function ie(t, e, n) {
          var i = null == e.x ? 0 : e.x,
              r = null == e.x2 ? 1 : e.x2,
              a = null == e.y ? 0 : e.y,
              o = null == e.y2 ? 0 : e.y2;return e.global || (i = i * n.width + n.x, r = r * n.width + n.x, a = a * n.height + n.y, o = o * n.height + n.y), i = isNaN(i) ? 0 : i, r = isNaN(r) ? 1 : r, a = isNaN(a) ? 0 : a, o = isNaN(o) ? 0 : o, t.createLinearGradient(i, a, r, o);
        }function re(t, e, n) {
          var i = n.width,
              r = n.height,
              a = Math.min(i, r),
              o = null == e.x ? .5 : e.x,
              s = null == e.y ? .5 : e.y,
              l = null == e.r ? .5 : e.r;return e.global || (o = o * i + n.x, s = s * r + n.y, l *= a), t.createRadialGradient(o, s, 0, o, s, l);
        }function ae() {
          return !1;
        }function oe(t, e, n) {
          var i = tu(),
              r = e.getWidth(),
              a = e.getHeight(),
              o = i.style;return o && (o.position = "absolute", o.left = 0, o.top = 0, o.width = r + "px", o.height = a + "px", i.setAttribute("data-zr-dom-id", t)), i.width = r * n, i.height = a * n, i;
        }function se(t) {
          if ("string" == typeof t) {
            var e = nc.get(t);return e && e.image;
          }return t;
        }function le(t, e, n, i, r) {
          if (t) {
            if ("string" == typeof t) {
              if (e && e.__zrImageSrc === t || !n) return e;var a = nc.get(t),
                  o = { hostEl: n, cb: i, cbPayload: r };return a ? !ue(e = a.image) && a.pending.push(o) : (!e && (e = new Image()), e.onload = e.onerror = he, nc.put(t, e.__cachedImgObj = { image: e, pending: [o] }), e.src = e.__zrImageSrc = t), e;
            }return t;
          }return e;
        }function he() {
          var t = this.__cachedImgObj;this.onload = this.onerror = this.__cachedImgObj = null;for (var e = 0; e < t.pending.length; e++) {
            var n = t.pending[e],
                i = n.cb;i && i(this, n.cbPayload), n.hostEl.dirty();
          }t.pending.length = 0;
        }function ue(t) {
          return t && t.width && t.height;
        }function ce(t, e) {
          var n = t + ":" + (e = e || sc);if (ic[n]) return ic[n];for (var i = (t + "").split("\n"), r = 0, a = 0, o = i.length; a < o; a++) {
            r = Math.max(Se(i[a], e).width, r);
          }return rc > ac && (rc = 0, ic = {}), rc++, ic[n] = r, r;
        }function fe(t, e, n, i, r, a, o) {
          return a ? pe(t, e, n, i, r, a, o) : de(t, e, n, i, r, o);
        }function de(t, e, n, i, r, a) {
          var o = Me(t, e, r, a),
              s = ce(t, e);r && (s += r[1] + r[3]);var l = o.outerHeight,
              h = new Ut(ge(0, s, n), ve(0, l, i), s, l);return h.lineHeight = o.lineHeight, h;
        }function pe(t, e, n, i, r, a, o) {
          var s = Te(t, { rich: a, truncate: o, font: e, textAlign: n, textPadding: r }),
              l = s.outerWidth,
              h = s.outerHeight;return new Ut(ge(0, l, n), ve(0, h, i), l, h);
        }function ge(t, e, n) {
          return "right" === n ? t -= e : "center" === n && (t -= e / 2), t;
        }function ve(t, e, n) {
          return "middle" === n ? t -= e / 2 : "bottom" === n && (t -= e), t;
        }function me(t, e, n) {
          var i = e.x,
              r = e.y,
              a = e.height,
              o = e.width,
              s = a / 2,
              l = "left",
              h = "top";switch (t) {case "left":
              i -= n, r += s, l = "right", h = "middle";break;case "right":
              i += n + o, r += s, h = "middle";break;case "top":
              i += o / 2, r -= n, l = "center", h = "bottom";break;case "bottom":
              i += o / 2, r += a + n, l = "center";break;case "inside":
              i += o / 2, r += s, l = "center", h = "middle";break;case "insideLeft":
              i += n, r += s, h = "middle";break;case "insideRight":
              i += o - n, r += s, l = "right", h = "middle";break;case "insideTop":
              i += o / 2, r += n, l = "center";break;case "insideBottom":
              i += o / 2, r += a - n, l = "center", h = "bottom";break;case "insideTopLeft":
              i += n, r += n;break;case "insideTopRight":
              i += o - n, r += n, l = "right";break;case "insideBottomLeft":
              i += n, r += a - n, h = "bottom";break;case "insideBottomRight":
              i += o - n, r += a - n, l = "right", h = "bottom";}return { x: i, y: r, textAlign: l, textVerticalAlign: h };
        }function ye(t, e, n, i, r) {
          if (!e) return "";var a = (t + "").split("\n");r = _e(e, n, i, r);for (var o = 0, s = a.length; o < s; o++) {
            a[o] = xe(a[o], r);
          }return a.join("\n");
        }function _e(t, e, n, i) {
          (i = a({}, i)).font = e;var n = k(n, "...");i.maxIterations = k(i.maxIterations, 2);var r = i.minChar = k(i.minChar, 0);i.cnCharWidth = ce("国", e);var o = i.ascCharWidth = ce("a", e);i.placeholder = k(i.placeholder, "");for (var s = t = Math.max(0, t - 1), l = 0; l < r && s >= o; l++) {
            s -= o;
          }var h = ce(n);return h > s && (n = "", h = 0), s = t - h, i.ellipsis = n, i.ellipsisWidth = h, i.contentWidth = s, i.containerWidth = t, i;
        }function xe(t, e) {
          var n = e.containerWidth,
              i = e.font,
              r = e.contentWidth;if (!n) return "";var a = ce(t, i);if (a <= n) return t;for (var o = 0;; o++) {
            if (a <= r || o >= e.maxIterations) {
              t += e.ellipsis;break;
            }var s = 0 === o ? we(t, r, e.ascCharWidth, e.cnCharWidth) : a > 0 ? Math.floor(t.length * r / a) : 0;a = ce(t = t.substr(0, s), i);
          }return "" === t && (t = e.placeholder), t;
        }function we(t, e, n, i) {
          for (var r = 0, a = 0, o = t.length; a < o && r < e; a++) {
            var s = t.charCodeAt(a);r += 0 <= s && s <= 127 ? n : i;
          }return a;
        }function be(t) {
          return ce("国", t);
        }function Se(t, e) {
          return lc.measureText(t, e);
        }function Me(t, e, n, i) {
          null != t && (t += "");var r = be(e),
              a = t ? t.split("\n") : [],
              o = a.length * r,
              s = o;if (n && (s += n[0] + n[2]), t && i) {
            var l = i.outerHeight,
                h = i.outerWidth;if (null != l && s > l) t = "", a = [];else if (null != h) for (var u = _e(h - (n ? n[1] + n[3] : 0), e, i.ellipsis, { minChar: i.minChar, placeholder: i.placeholder }), c = 0, f = a.length; c < f; c++) {
              a[c] = xe(a[c], u);
            }
          }return { lines: a, height: o, outerHeight: s, lineHeight: r };
        }function Te(t, e) {
          var n = { lines: [], width: 0, height: 0 };if (null != t && (t += ""), !t) return n;for (var i, r = oc.lastIndex = 0; null != (i = oc.exec(t));) {
            var a = i.index;a > r && Ie(n, t.substring(r, a)), Ie(n, i[2], i[1]), r = oc.lastIndex;
          }r < t.length && Ie(n, t.substring(r, t.length));var o = n.lines,
              s = 0,
              l = 0,
              h = [],
              u = e.textPadding,
              c = e.truncate,
              f = c && c.outerWidth,
              d = c && c.outerHeight;u && (null != f && (f -= u[1] + u[3]), null != d && (d -= u[0] + u[2]));for (A = 0; A < o.length; A++) {
            for (var p = o[A], g = 0, v = 0, m = 0; m < p.tokens.length; m++) {
              var y = (L = p.tokens[m]).styleName && e.rich[L.styleName] || {},
                  _ = L.textPadding = y.textPadding,
                  x = L.font = y.font || e.font,
                  w = L.textHeight = k(y.textHeight, be(x));if (_ && (w += _[0] + _[2]), L.height = w, L.lineHeight = C(y.textLineHeight, e.textLineHeight, w), L.textAlign = y && y.textAlign || e.textAlign, L.textVerticalAlign = y && y.textVerticalAlign || "middle", null != d && s + L.lineHeight > d) return { lines: [], width: 0, height: 0 };L.textWidth = ce(L.text, x);var b = y.textWidth,
                  S = null == b || "auto" === b;if ("string" == typeof b && "%" === b.charAt(b.length - 1)) L.percentWidth = b, h.push(L), b = 0;else {
                if (S) {
                  b = L.textWidth;var M = y.textBackgroundColor,
                      T = M && M.image;T && ue(T = se(T)) && (b = Math.max(b, T.width * w / T.height));
                }var I = _ ? _[1] + _[3] : 0;b += I;var D = null != f ? f - v : null;null != D && D < b && (!S || D < I ? (L.text = "", L.textWidth = b = 0) : (L.text = ye(L.text, D - I, x, c.ellipsis, { minChar: c.minChar }), L.textWidth = ce(L.text, x), b = L.textWidth + I));
              }v += L.width = b, y && (g = Math.max(g, L.lineHeight));
            }p.width = v, p.lineHeight = g, s += g, l = Math.max(l, v);
          }n.outerWidth = n.width = k(e.textWidth, l), n.outerHeight = n.height = k(e.textHeight, s), u && (n.outerWidth += u[1] + u[3], n.outerHeight += u[0] + u[2]);for (var A = 0; A < h.length; A++) {
            var L = h[A],
                P = L.percentWidth;L.width = parseInt(P, 10) / 100 * l;
          }return n;
        }function Ie(t, e, n) {
          for (var i = "" === e, r = e.split("\n"), a = t.lines, o = 0; o < r.length; o++) {
            var s = r[o],
                l = { styleName: n, text: s, isLineHolder: !s && !i };if (o) a.push({ tokens: [l] });else {
              var h = (a[a.length - 1] || (a[0] = { tokens: [] })).tokens,
                  u = h.length;1 === u && h[0].isLineHolder ? h[0] = l : (s || !u || i) && h.push(l);
            }
          }
        }function ke(t) {
          var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ");return e && P(e) || t.textFont || t.font;
        }function Ce(t, e) {
          var n,
              i,
              r,
              a,
              o = e.x,
              s = e.y,
              l = e.width,
              h = e.height,
              u = e.r;l < 0 && (o += l, l = -l), h < 0 && (s += h, h = -h), "number" == typeof u ? n = i = r = a = u : u instanceof Array ? 1 === u.length ? n = i = r = a = u[0] : 2 === u.length ? (n = r = u[0], i = a = u[1]) : 3 === u.length ? (n = u[0], i = a = u[1], r = u[2]) : (n = u[0], i = u[1], r = u[2], a = u[3]) : n = i = r = a = 0;var c;n + i > l && (n *= l / (c = n + i), i *= l / c), r + a > l && (r *= l / (c = r + a), a *= l / c), i + r > h && (i *= h / (c = i + r), r *= h / c), n + a > h && (n *= h / (c = n + a), a *= h / c), t.moveTo(o + n, s), t.lineTo(o + l - i, s), 0 !== i && t.arc(o + l - i, s + i, i, -Math.PI / 2, 0), t.lineTo(o + l, s + h - r), 0 !== r && t.arc(o + l - r, s + h - r, r, 0, Math.PI / 2), t.lineTo(o + a, s + h), 0 !== a && t.arc(o + a, s + h - a, a, Math.PI / 2, Math.PI), t.lineTo(o, s + n), 0 !== n && t.arc(o + n, s + n, n, Math.PI, 1.5 * Math.PI);
        }function De(t) {
          return Ae(t), f(t.rich, Ae), t;
        }function Ae(t) {
          if (t) {
            t.font = ke(t);var e = t.textAlign;"middle" === e && (e = "center"), t.textAlign = null == e || hc[e] ? e : "left";var n = t.textVerticalAlign || t.textBaseline;"center" === n && (n = "middle"), t.textVerticalAlign = null == n || uc[n] ? n : "top", t.textPadding && (t.textPadding = A(t.textPadding));
          }
        }function Le(t, e, n, i, r, a) {
          i.rich ? Oe(t, e, n, i, r) : Pe(t, e, n, i, r, a);
        }function Pe(t, e, n, i, r, a) {
          var o = a && a.style,
              s = o && "text" === a.type,
              l = i.font || sc;s && l === (o.font || sc) || (e.font = l);var h = t.__computedFont;t.__styleFont !== l && (t.__styleFont = l, h = t.__computedFont = e.font);var u = i.textPadding,
              c = t.__textCotentBlock;c && !t.__dirtyText || (c = t.__textCotentBlock = Me(n, h, u, i.truncate));var f = c.outerHeight,
              d = c.lines,
              p = c.lineHeight,
              g = Ve(f, i, r),
              v = g.baseX,
              m = g.baseY,
              y = g.textAlign || "left",
              _ = g.textVerticalAlign;Ne(e, i, r, v, m);var x = ve(m, f, _),
              w = v,
              b = x,
              S = Re(i);if (S || u) {
            var M = ce(n, h);u && (M += u[1] + u[3]);var T = ge(v, M, y);S && ze(t, e, i, T, x, M, f), u && (w = qe(v, y, u), b += u[0]);
          }e.textAlign = y, e.textBaseline = "middle";for (B = 0; B < cc.length; B++) {
            var I = cc[B],
                k = I[0],
                C = I[1],
                D = i[k];s && D === o[k] || (e[C] = Uu(e, C, D || I[2]));
          }b += p / 2;var A = i.textStrokeWidth,
              L = s ? o.textStrokeWidth : null,
              P = !s || A !== L,
              O = !s || P || i.textStroke !== o.textStroke,
              E = He(i.textStroke, A),
              N = Ge(i.textFill);if (E && (P && (e.lineWidth = A), O && (e.strokeStyle = E)), N && (s && i.textFill === o.textFill && !o.textBackgroundColor || (e.fillStyle = N)), 1 === d.length) E && e.strokeText(d[0], w, b), N && e.fillText(d[0], w, b);else for (var B = 0; B < d.length; B++) {
            E && e.strokeText(d[B], w, b), N && e.fillText(d[B], w, b), b += p;
          }
        }function Oe(t, e, n, i, r) {
          var a = t.__textCotentBlock;a && !t.__dirtyText || (a = t.__textCotentBlock = Te(n, i)), Ee(t, e, a, i, r);
        }function Ee(t, e, n, i, r) {
          var a = n.width,
              o = n.outerWidth,
              s = n.outerHeight,
              l = i.textPadding,
              h = Ve(s, i, r),
              u = h.baseX,
              c = h.baseY,
              f = h.textAlign,
              d = h.textVerticalAlign;Ne(e, i, r, u, c);var p = ge(u, o, f),
              g = ve(c, s, d),
              v = p,
              m = g;l && (v += l[3], m += l[0]);var y = v + a;Re(i) && ze(t, e, i, p, g, o, s);for (var _ = 0; _ < n.lines.length; _++) {
            for (var x, w = n.lines[_], b = w.tokens, S = b.length, M = w.lineHeight, T = w.width, I = 0, k = v, C = y, D = S - 1; I < S && (!(x = b[I]).textAlign || "left" === x.textAlign);) {
              Be(t, e, x, i, M, m, k, "left"), T -= x.width, k += x.width, I++;
            }for (; D >= 0 && "right" === (x = b[D]).textAlign;) {
              Be(t, e, x, i, M, m, C, "right"), T -= x.width, C -= x.width, D--;
            }for (k += (a - (k - v) - (y - C) - T) / 2; I <= D;) {
              Be(t, e, x = b[I], i, M, m, k + x.width / 2, "center"), k += x.width, I++;
            }m += M;
          }
        }function Ne(t, e, n, i, r) {
          if (n && e.textRotation) {
            var a = e.textOrigin;"center" === a ? (i = n.width / 2 + n.x, r = n.height / 2 + n.y) : a && (i = a[0] + n.x, r = a[1] + n.y), t.translate(i, r), t.rotate(-e.textRotation), t.translate(-i, -r);
          }
        }function Be(t, e, n, i, r, a, o, s) {
          var l = i.rich[n.styleName] || {};l.text = n.text;var h = n.textVerticalAlign,
              u = a + r / 2;"top" === h ? u = a + n.height / 2 : "bottom" === h && (u = a + r - n.height / 2), !n.isLineHolder && Re(l) && ze(t, e, l, "right" === s ? o - n.width : "center" === s ? o - n.width / 2 : o, u - n.height / 2, n.width, n.height);var c = n.textPadding;c && (o = qe(o, s, c), u -= n.height / 2 - c[2] - n.textHeight / 2), We(e, "shadowBlur", C(l.textShadowBlur, i.textShadowBlur, 0)), We(e, "shadowColor", l.textShadowColor || i.textShadowColor || "transparent"), We(e, "shadowOffsetX", C(l.textShadowOffsetX, i.textShadowOffsetX, 0)), We(e, "shadowOffsetY", C(l.textShadowOffsetY, i.textShadowOffsetY, 0)), We(e, "textAlign", s), We(e, "textBaseline", "middle"), We(e, "font", n.font || sc);var f = He(l.textStroke || i.textStroke, p),
              d = Ge(l.textFill || i.textFill),
              p = k(l.textStrokeWidth, i.textStrokeWidth);f && (We(e, "lineWidth", p), We(e, "strokeStyle", f), e.strokeText(n.text, o, u)), d && (We(e, "fillStyle", d), e.fillText(n.text, o, u));
        }function Re(t) {
          return t.textBackgroundColor || t.textBorderWidth && t.textBorderColor;
        }function ze(t, e, n, i, r, a, o) {
          var s = n.textBackgroundColor,
              l = n.textBorderWidth,
              h = n.textBorderColor,
              u = x(s);if (We(e, "shadowBlur", n.textBoxShadowBlur || 0), We(e, "shadowColor", n.textBoxShadowColor || "transparent"), We(e, "shadowOffsetX", n.textBoxShadowOffsetX || 0), We(e, "shadowOffsetY", n.textBoxShadowOffsetY || 0), u || l && h) {
            e.beginPath();var c = n.textBorderRadius;c ? Ce(e, { x: i, y: r, width: a, height: o, r: c }) : e.rect(i, r, a, o), e.closePath();
          }if (u) {
            if (We(e, "fillStyle", s), null != n.fillOpacity) {
              d = e.globalAlpha;e.globalAlpha = n.fillOpacity * n.opacity, e.fill(), e.globalAlpha = d;
            } else e.fill();
          } else if (_(s)) We(e, "fillStyle", s(n)), e.fill();else if (w(s)) {
            var f = s.image;(f = le(f, null, t, Fe, s)) && ue(f) && e.drawImage(f, i, r, a, o);
          }if (l && h) if (We(e, "lineWidth", l), We(e, "strokeStyle", h), null != n.strokeOpacity) {
            var d = e.globalAlpha;e.globalAlpha = n.strokeOpacity * n.opacity, e.stroke(), e.globalAlpha = d;
          } else e.stroke();
        }function Fe(t, e) {
          e.image = t;
        }function Ve(t, e, n) {
          var i = e.x || 0,
              r = e.y || 0,
              a = e.textAlign,
              o = e.textVerticalAlign;if (n) {
            var s = e.textPosition;if (s instanceof Array) i = n.x + Xe(s[0], n.width), r = n.y + Xe(s[1], n.height);else {
              var l = me(s, n, e.textDistance);i = l.x, r = l.y, a = a || l.textAlign, o = o || l.textVerticalAlign;
            }var h = e.textOffset;h && (i += h[0], r += h[1]);
          }return { baseX: i, baseY: r, textAlign: a, textVerticalAlign: o };
        }function We(t, e, n) {
          return t[e] = Uu(t, e, n), t[e];
        }function He(t, e) {
          return null == t || e <= 0 || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;
        }function Ge(t) {
          return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;
        }function Xe(t, e) {
          return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t;
        }function qe(t, e, n) {
          return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3];
        }function Ye(t, e) {
          return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding);
        }function Ue(t) {
          t = t || {}, zu.call(this, t);for (var e in t) {
            t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
          }this.style = new Zu(t.style, this), this._rect = null, this.__clipPaths = [];
        }function je(t) {
          Ue.call(this, t);
        }function Ze(t) {
          return parseInt(t, 10);
        }function $e(t) {
          return !!t && (!!t.__builtin__ || "function" == typeof t.resize && "function" == typeof t.refresh);
        }function Qe(t, e, n) {
          return pc.copy(t.getBoundingRect()), t.transform && pc.applyTransform(t.transform), gc.width = e, gc.height = n, !pc.intersect(gc);
        }function Ke(t, e) {
          if (t == e) return !1;if (!t || !e || t.length !== e.length) return !0;for (var n = 0; n < t.length; n++) {
            if (t[n] !== e[n]) return !0;
          }
        }function Je(t, e) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.setTransform(e), e.beginPath(), i.buildPath(e, i.shape), e.clip(), i.restoreTransform(e);
          }
        }function tn(t, e) {
          var n = document.createElement("div");return n.style.cssText = ["position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", n;
        }function en(t) {
          var e = t[1][0] - t[0][0],
              n = t[1][1] - t[0][1];return Math.sqrt(e * e + n * n);
        }function nn(t) {
          return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2];
        }function rn(t) {
          return "mousewheel" === t && Gh.browser.firefox ? "DOMMouseScroll" : t;
        }function an(t, e, n) {
          var i = t._gestureMgr;"start" === n && i.clear();var r = i.recognize(e, t.handler.findHover(e.zrX, e.zrY, null).target, t.dom);if ("end" === n && i.clear(), r) {
            var a = r.type;e.gestureEvent = a, t.handler.dispatchToElement({ target: r.target }, a, r.event);
          }
        }function on(t) {
          t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function () {
            t._touching = !1;
          }, 700);
        }function sn(t) {
          var e = t.pointerType;return "pen" === e || "touch" === e;
        }function ln(t) {
          function e(t, e) {
            return function () {
              if (!e._touching) return t.apply(e, arguments);
            };
          }f(wc, function (e) {
            t._handlers[e] = v(Mc[e], t);
          }), f(Sc, function (e) {
            t._handlers[e] = v(Mc[e], t);
          }), f(xc, function (n) {
            t._handlers[n] = e(Mc[n], t);
          });
        }function hn(t) {
          function e(e, n) {
            f(e, function (e) {
              it(t, rn(e), n._handlers[e]);
            }, n);
          }su.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._gestureMgr = new yc(), this._handlers = {}, ln(this), Gh.pointerEventsSupported ? e(Sc, this) : (Gh.touchEventsSupported && e(wc, this), e(xc, this));
        }function un(t, e) {
          return new Cc(Wh(), t, e);
        }function cn(t) {
          return t instanceof Array ? t : null == t ? [] : [t];
        }function fn(t, e, n) {
          if (t) {
            t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};for (var i = 0, r = n.length; i < r; i++) {
              var a = n[i];!t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a]);
            }
          }
        }function dn(t) {
          return !Ac(t) || Lc(t) || t instanceof Date ? t : t.value;
        }function pn(t) {
          return Ac(t) && !(t instanceof Array);
        }function gn(t, e) {
          e = (e || []).slice();var n = d(t || [], function (t, e) {
            return { exist: t };
          });return Dc(e, function (t, i) {
            if (Ac(t)) {
              for (r = 0; r < n.length; r++) {
                if (!n[r].option && null != t.id && n[r].exist.id === t.id + "") return n[r].option = t, void (e[i] = null);
              }for (var r = 0; r < n.length; r++) {
                var a = n[r].exist;if (!(n[r].option || null != a.id && null != t.id || null == t.name || yn(t) || yn(a) || a.name !== t.name + "")) return n[r].option = t, void (e[i] = null);
              }
            }
          }), Dc(e, function (t, e) {
            if (Ac(t)) {
              for (var i = 0; i < n.length; i++) {
                var r = n[i].exist;if (!n[i].option && !yn(r) && null == t.id) {
                  n[i].option = t;break;
                }
              }i >= n.length && n.push({ option: t });
            }
          }), n;
        }function vn(t) {
          var e = B();Dc(t, function (t, n) {
            var i = t.exist;i && e.set(i.id, t);
          }), Dc(t, function (t, n) {
            var i = t.option;L(!i || null == i.id || !e.get(i.id) || e.get(i.id) === t, "id duplicates: " + (i && i.id)), i && null != i.id && e.set(i.id, t), !t.keyInfo && (t.keyInfo = {});
          }), Dc(t, function (t, n) {
            var i = t.exist,
                r = t.option,
                a = t.keyInfo;if (Ac(r)) {
              if (a.name = null != r.name ? r.name + "" : i ? i.name : Pc + n, i) a.id = i.id;else if (null != r.id) a.id = r.id + "";else {
                var o = 0;do {
                  a.id = "\0" + a.name + "\0" + o++;
                } while (e.get(a.id));
              }e.set(a.id, t);
            }
          });
        }function mn(t) {
          var e = t.name;return !(!e || !e.indexOf(Pc));
        }function yn(t) {
          return Ac(t) && t.id && 0 === (t.id + "").indexOf("\0_ec_\0");
        }function _n(t, e) {
          return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? y(e.dataIndex) ? d(e.dataIndex, function (e) {
            return t.indexOfRawIndex(e);
          }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? y(e.name) ? d(e.name, function (e) {
            return t.indexOfName(e);
          }) : t.indexOfName(e.name) : void 0;
        }function xn() {
          var t = "__\0ec_inner_" + Ec++ + "_" + Math.random().toFixed(5);return function (e) {
            return e[t] || (e[t] = {});
          };
        }function wn(t, e, n) {
          if (x(e)) {
            var i = {};i[e + "Index"] = 0, e = i;
          }var r = n && n.defaultMainType;!r || bn(e, r + "Index") || bn(e, r + "Id") || bn(e, r + "Name") || (e[r + "Index"] = 0);var a = {};return Dc(e, function (i, r) {
            var i = e[r];if ("dataIndex" !== r && "dataIndexInside" !== r) {
              var o = r.match(/^(\w+)(Index|Id|Name)$/) || [],
                  s = o[1],
                  h = (o[2] || "").toLowerCase();if (!(!s || !h || null == i || "index" === h && "none" === i || n && n.includeMainTypes && l(n.includeMainTypes, s) < 0)) {
                var u = { mainType: s };"index" === h && "all" === i || (u[h] = i);var c = t.queryComponents(u);a[s + "Models"] = c, a[s + "Model"] = c[0];
              }
            } else a[r] = i;
          }), a;
        }function bn(t, e) {
          return t && t.hasOwnProperty(e);
        }function Sn(t, e, n) {
          t.setAttribute ? t.setAttribute(e, n) : t[e] = n;
        }function Mn(t, e) {
          return t.getAttribute ? t.getAttribute(e) : t[e];
        }function Tn(t) {
          return "auto" === t ? Gh.domSupported ? "html" : "richText" : t || "html";
        }function In(t) {
          var e = { main: "", sub: "" };return t && (t = t.split(Nc), e.main = t[0] || "", e.sub = t[1] || ""), e;
        }function kn(t) {
          L(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal');
        }function Cn(t, e) {
          t.$constructor = t, t.extend = function (t) {
            var e = this,
                n = function n() {
              t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments);
            };return a(n.prototype, t), n.extend = this.extend, n.superCall = An, n.superApply = Ln, h(n, this), n.superClass = e, n;
          };
        }function Dn(t) {
          var e = ["__\0is_clz", Rc++, Math.random().toFixed(3)].join("_");t.prototype[e] = !0, t.isInstance = function (t) {
            return !(!t || !t[e]);
          };
        }function An(t, e) {
          var n = D(arguments, 2);return this.superClass.prototype[e].apply(t, n);
        }function Ln(t, e, n) {
          return this.superClass.prototype[e].apply(t, n);
        }function Pn(t, e) {
          function n(t) {
            var e = i[t.main];return e && e[Bc] || ((e = i[t.main] = {})[Bc] = !0), e;
          }e = e || {};var i = {};if (t.registerClass = function (t, e) {
            return e && (kn(e), (e = In(e)).sub ? e.sub !== Bc && (n(e)[e.sub] = t) : i[e.main] = t), t;
          }, t.getClass = function (t, e, n) {
            var r = i[t];if (r && r[Bc] && (r = e ? r[e] : null), n && !r) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");return r;
          }, t.getClassesByMainType = function (t) {
            t = In(t);var e = [],
                n = i[t.main];return n && n[Bc] ? f(n, function (t, n) {
              n !== Bc && e.push(t);
            }) : e.push(n), e;
          }, t.hasClass = function (t) {
            return t = In(t), !!i[t.main];
          }, t.getAllClassMainTypes = function () {
            var t = [];return f(i, function (e, n) {
              t.push(n);
            }), t;
          }, t.hasSubTypes = function (t) {
            t = In(t);var e = i[t.main];return e && e[Bc];
          }, t.parseClassType = In, e.registerWhenExtend) {
            var r = t.extend;r && (t.extend = function (e) {
              var n = r.call(this, e);return t.registerClass(n, e.type);
            });
          }return t;
        }function On(t) {
          return t > -qc && t < qc;
        }function En(t) {
          return t > qc || t < -qc;
        }function Nn(t, e, n, i, r) {
          var a = 1 - r;return a * a * (a * t + 3 * r * e) + r * r * (r * i + 3 * a * n);
        }function Bn(t, e, n, i, r) {
          var a = 1 - r;return 3 * (((e - t) * a + 2 * (n - e) * r) * a + (i - n) * r * r);
        }function Rn(t, e, n, i, r, a) {
          var o = i + 3 * (e - n) - t,
              s = 3 * (n - 2 * e + t),
              l = 3 * (e - t),
              h = t - r,
              u = s * s - 3 * o * l,
              c = s * l - 9 * o * h,
              f = l * l - 3 * s * h,
              d = 0;if (On(u) && On(c)) On(s) ? a[0] = 0 : (M = -l / s) >= 0 && M <= 1 && (a[d++] = M);else {
            var p = c * c - 4 * u * f;if (On(p)) {
              var g = c / u,
                  v = -g / 2;(M = -s / o + g) >= 0 && M <= 1 && (a[d++] = M), v >= 0 && v <= 1 && (a[d++] = v);
            } else if (p > 0) {
              var m = Xc(p),
                  y = u * s + 1.5 * o * (-c + m),
                  _ = u * s + 1.5 * o * (-c - m);(M = (-s - ((y = y < 0 ? -Gc(-y, jc) : Gc(y, jc)) + (_ = _ < 0 ? -Gc(-_, jc) : Gc(_, jc)))) / (3 * o)) >= 0 && M <= 1 && (a[d++] = M);
            } else {
              var x = (2 * u * s - 3 * o * c) / (2 * Xc(u * u * u)),
                  w = Math.acos(x) / 3,
                  b = Xc(u),
                  S = Math.cos(w),
                  M = (-s - 2 * b * S) / (3 * o),
                  v = (-s + b * (S + Uc * Math.sin(w))) / (3 * o),
                  T = (-s + b * (S - Uc * Math.sin(w))) / (3 * o);M >= 0 && M <= 1 && (a[d++] = M), v >= 0 && v <= 1 && (a[d++] = v), T >= 0 && T <= 1 && (a[d++] = T);
            }
          }return d;
        }function zn(t, e, n, i, r) {
          var a = 6 * n - 12 * e + 6 * t,
              o = 9 * e + 3 * i - 3 * t - 9 * n,
              s = 3 * e - 3 * t,
              l = 0;if (On(o)) En(a) && (c = -s / a) >= 0 && c <= 1 && (r[l++] = c);else {
            var h = a * a - 4 * o * s;if (On(h)) r[0] = -a / (2 * o);else if (h > 0) {
              var u = Xc(h),
                  c = (-a + u) / (2 * o),
                  f = (-a - u) / (2 * o);c >= 0 && c <= 1 && (r[l++] = c), f >= 0 && f <= 1 && (r[l++] = f);
            }
          }return l;
        }function Fn(t, e, n, i, r, a) {
          var o = (e - t) * r + t,
              s = (n - e) * r + e,
              l = (i - n) * r + n,
              h = (s - o) * r + o,
              u = (l - s) * r + s,
              c = (u - h) * r + h;a[0] = t, a[1] = o, a[2] = h, a[3] = c, a[4] = c, a[5] = u, a[6] = l, a[7] = i;
        }function Vn(t, e, n, i, r, a, o, s, l, h, u) {
          var c,
              f,
              d,
              p,
              g,
              v = .005,
              m = 1 / 0;Zc[0] = l, Zc[1] = h;for (var y = 0; y < 1; y += .05) {
            $c[0] = Nn(t, n, r, o, y), $c[1] = Nn(e, i, a, s, y), (p = au(Zc, $c)) < m && (c = y, m = p);
          }m = 1 / 0;for (var _ = 0; _ < 32 && !(v < Yc); _++) {
            f = c - v, d = c + v, $c[0] = Nn(t, n, r, o, f), $c[1] = Nn(e, i, a, s, f), p = au($c, Zc), f >= 0 && p < m ? (c = f, m = p) : (Qc[0] = Nn(t, n, r, o, d), Qc[1] = Nn(e, i, a, s, d), g = au(Qc, Zc), d <= 1 && g < m ? (c = d, m = g) : v *= .5);
          }return u && (u[0] = Nn(t, n, r, o, c), u[1] = Nn(e, i, a, s, c)), Xc(m);
        }function Wn(t, e, n, i) {
          var r = 1 - i;return r * (r * t + 2 * i * e) + i * i * n;
        }function Hn(t, e, n, i) {
          return 2 * ((1 - i) * (e - t) + i * (n - e));
        }function Gn(t, e, n, i, r) {
          var a = t - 2 * e + n,
              o = 2 * (e - t),
              s = t - i,
              l = 0;if (On(a)) En(o) && (c = -s / o) >= 0 && c <= 1 && (r[l++] = c);else {
            var h = o * o - 4 * a * s;if (On(h)) (c = -o / (2 * a)) >= 0 && c <= 1 && (r[l++] = c);else if (h > 0) {
              var u = Xc(h),
                  c = (-o + u) / (2 * a),
                  f = (-o - u) / (2 * a);c >= 0 && c <= 1 && (r[l++] = c), f >= 0 && f <= 1 && (r[l++] = f);
            }
          }return l;
        }function Xn(t, e, n) {
          var i = t + n - 2 * e;return 0 === i ? .5 : (t - e) / i;
        }function qn(t, e, n, i, r) {
          var a = (e - t) * i + t,
              o = (n - e) * i + e,
              s = (o - a) * i + a;r[0] = t, r[1] = a, r[2] = s, r[3] = s, r[4] = o, r[5] = n;
        }function Yn(t, e, n, i, r, a, o, s, l) {
          var h,
              u = .005,
              c = 1 / 0;Zc[0] = o, Zc[1] = s;for (var f = 0; f < 1; f += .05) {
            $c[0] = Wn(t, n, r, f), $c[1] = Wn(e, i, a, f), (v = au(Zc, $c)) < c && (h = f, c = v);
          }c = 1 / 0;for (var d = 0; d < 32 && !(u < Yc); d++) {
            var p = h - u,
                g = h + u;$c[0] = Wn(t, n, r, p), $c[1] = Wn(e, i, a, p);var v = au($c, Zc);if (p >= 0 && v < c) h = p, c = v;else {
              Qc[0] = Wn(t, n, r, g), Qc[1] = Wn(e, i, a, g);var m = au(Qc, Zc);g <= 1 && m < c ? (h = g, c = m) : u *= .5;
            }
          }return l && (l[0] = Wn(t, n, r, h), l[1] = Wn(e, i, a, h)), Xc(c);
        }function Un(t, e, n, i, r, a) {
          r[0] = Kc(t, n), r[1] = Kc(e, i), a[0] = Jc(t, n), a[1] = Jc(e, i);
        }function jn(t, e, n, i, r, a, o, s, l, h) {
          var u,
              c = zn,
              f = Nn,
              d = c(t, n, r, o, sf);for (l[0] = 1 / 0, l[1] = 1 / 0, h[0] = -1 / 0, h[1] = -1 / 0, u = 0; u < d; u++) {
            var p = f(t, n, r, o, sf[u]);l[0] = Kc(p, l[0]), h[0] = Jc(p, h[0]);
          }for (d = c(e, i, a, s, lf), u = 0; u < d; u++) {
            var g = f(e, i, a, s, lf[u]);l[1] = Kc(g, l[1]), h[1] = Jc(g, h[1]);
          }l[0] = Kc(t, l[0]), h[0] = Jc(t, h[0]), l[0] = Kc(o, l[0]), h[0] = Jc(o, h[0]), l[1] = Kc(e, l[1]), h[1] = Jc(e, h[1]), l[1] = Kc(s, l[1]), h[1] = Jc(s, h[1]);
        }function Zn(t, e, n, i, r, a, o, s) {
          var l = Xn,
              h = Wn,
              u = Jc(Kc(l(t, n, r), 1), 0),
              c = Jc(Kc(l(e, i, a), 1), 0),
              f = h(t, n, r, u),
              d = h(e, i, a, c);o[0] = Kc(t, r, f), o[1] = Kc(e, a, d), s[0] = Jc(t, r, f), s[1] = Jc(e, a, d);
        }function $n(t, e, n, i, r, a, o, s, l) {
          var h = j,
              u = Z,
              c = Math.abs(r - a);if (c % nf < 1e-4 && c > 1e-4) return s[0] = t - n, s[1] = e - i, l[0] = t + n, void (l[1] = e + i);if (rf[0] = ef(r) * n + t, rf[1] = tf(r) * i + e, af[0] = ef(a) * n + t, af[1] = tf(a) * i + e, h(s, rf, af), u(l, rf, af), (r %= nf) < 0 && (r += nf), (a %= nf) < 0 && (a += nf), r > a && !o ? a += nf : r < a && o && (r += nf), o) {
            var f = a;a = r, r = f;
          }for (var d = 0; d < a; d += Math.PI / 2) {
            d > r && (of[0] = ef(d) * n + t, of[1] = tf(d) * i + e, h(s, of, s), u(l, of, l));
          }
        }function Qn(t, e, n, i, r, a, o) {
          if (0 === r) return !1;var s = r,
              l = 0,
              h = t;if (o > e + s && o > i + s || o < e - s && o < i - s || a > t + s && a > n + s || a < t - s && a < n - s) return !1;if (t === n) return Math.abs(a - t) <= s / 2;var u = (l = (e - i) / (t - n)) * a - o + (h = (t * i - n * e) / (t - n));return u * u / (l * l + 1) <= s / 2 * s / 2;
        }function Kn(t, e, n, i, r, a, o, s, l, h, u) {
          if (0 === l) return !1;var c = l;return !(u > e + c && u > i + c && u > a + c && u > s + c || u < e - c && u < i - c && u < a - c && u < s - c || h > t + c && h > n + c && h > r + c && h > o + c || h < t - c && h < n - c && h < r - c && h < o - c) && Vn(t, e, n, i, r, a, o, s, h, u, null) <= c / 2;
        }function Jn(t, e, n, i, r, a, o, s, l) {
          if (0 === o) return !1;var h = o;return !(l > e + h && l > i + h && l > a + h || l < e - h && l < i - h && l < a - h || s > t + h && s > n + h && s > r + h || s < t - h && s < n - h && s < r - h) && Yn(t, e, n, i, r, a, s, l, null) <= h / 2;
        }function ti(t) {
          return (t %= bf) < 0 && (t += bf), t;
        }function ei(t, e, n, i, r, a, o, s, l) {
          if (0 === o) return !1;var h = o;s -= t, l -= e;var u = Math.sqrt(s * s + l * l);if (u - h > n || u + h < n) return !1;if (Math.abs(i - r) % Sf < 1e-4) return !0;if (a) {
            var c = i;i = ti(r), r = ti(c);
          } else i = ti(i), r = ti(r);i > r && (r += Sf);var f = Math.atan2(l, s);return f < 0 && (f += Sf), f >= i && f <= r || f + Sf >= i && f + Sf <= r;
        }function ni(t, e, n, i, r, a) {
          if (a > e && a > i || a < e && a < i) return 0;if (i === e) return 0;var o = i < e ? 1 : -1,
              s = (a - e) / (i - e);1 !== s && 0 !== s || (o = i < e ? .5 : -.5);var l = s * (n - t) + t;return l === r ? 1 / 0 : l > r ? o : 0;
        }function ii(t, e) {
          return Math.abs(t - e) < If;
        }function ri() {
          var t = Cf[0];Cf[0] = Cf[1], Cf[1] = t;
        }function ai(t, e, n, i, r, a, o, s, l, h) {
          if (h > e && h > i && h > a && h > s || h < e && h < i && h < a && h < s) return 0;var u = Rn(e, i, a, s, h, kf);if (0 === u) return 0;for (var c, f, d = 0, p = -1, g = 0; g < u; g++) {
            var v = kf[g],
                m = 0 === v || 1 === v ? .5 : 1;Nn(t, n, r, o, v) < l || (p < 0 && (p = zn(e, i, a, s, Cf), Cf[1] < Cf[0] && p > 1 && ri(), c = Nn(e, i, a, s, Cf[0]), p > 1 && (f = Nn(e, i, a, s, Cf[1]))), 2 == p ? v < Cf[0] ? d += c < e ? m : -m : v < Cf[1] ? d += f < c ? m : -m : d += s < f ? m : -m : v < Cf[0] ? d += c < e ? m : -m : d += s < c ? m : -m);
          }return d;
        }function oi(t, e, n, i, r, a, o, s) {
          if (s > e && s > i && s > a || s < e && s < i && s < a) return 0;var l = Gn(e, i, a, s, kf);if (0 === l) return 0;var h = Xn(e, i, a);if (h >= 0 && h <= 1) {
            for (var u = 0, c = Wn(e, i, a, h), f = 0; f < l; f++) {
              d = 0 === kf[f] || 1 === kf[f] ? .5 : 1;(p = Wn(t, n, r, kf[f])) < o || (kf[f] < h ? u += c < e ? d : -d : u += a < c ? d : -d);
            }return u;
          }var d = 0 === kf[0] || 1 === kf[0] ? .5 : 1,
              p = Wn(t, n, r, kf[0]);return p < o ? 0 : a < e ? d : -d;
        }function si(t, e, n, i, r, a, o, s) {
          if ((s -= e) > n || s < -n) return 0;h = Math.sqrt(n * n - s * s);kf[0] = -h, kf[1] = h;var l = Math.abs(i - r);if (l < 1e-4) return 0;if (l % Tf < 1e-4) {
            i = 0, r = Tf;p = a ? 1 : -1;return o >= kf[0] + t && o <= kf[1] + t ? p : 0;
          }if (a) {
            var h = i;i = ti(r), r = ti(h);
          } else i = ti(i), r = ti(r);i > r && (r += Tf);for (var u = 0, c = 0; c < 2; c++) {
            var f = kf[c];if (f + t > o) {
              var d = Math.atan2(s, f),
                  p = a ? 1 : -1;d < 0 && (d = Tf + d), (d >= i && d <= r || d + Tf >= i && d + Tf <= r) && (d > Math.PI / 2 && d < 1.5 * Math.PI && (p = -p), u += p);
            }
          }return u;
        }function li(t, e, n, i, r) {
          for (var a = 0, o = 0, s = 0, l = 0, h = 0, u = 0; u < t.length;) {
            var c = t[u++];switch (c === Mf.M && u > 1 && (n || (a += ni(o, s, l, h, i, r))), 1 == u && (l = o = t[u], h = s = t[u + 1]), c) {case Mf.M:
                o = l = t[u++], s = h = t[u++];break;case Mf.L:
                if (n) {
                  if (Qn(o, s, t[u], t[u + 1], e, i, r)) return !0;
                } else a += ni(o, s, t[u], t[u + 1], i, r) || 0;o = t[u++], s = t[u++];break;case Mf.C:
                if (n) {
                  if (Kn(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], e, i, r)) return !0;
                } else a += ai(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], i, r) || 0;o = t[u++], s = t[u++];break;case Mf.Q:
                if (n) {
                  if (Jn(o, s, t[u++], t[u++], t[u], t[u + 1], e, i, r)) return !0;
                } else a += oi(o, s, t[u++], t[u++], t[u], t[u + 1], i, r) || 0;o = t[u++], s = t[u++];break;case Mf.A:
                var f = t[u++],
                    d = t[u++],
                    p = t[u++],
                    g = t[u++],
                    v = t[u++],
                    m = t[u++],
                    y = (t[u++], 1 - t[u++]),
                    _ = Math.cos(v) * p + f,
                    x = Math.sin(v) * g + d;u > 1 ? a += ni(o, s, _, x, i, r) : (l = _, h = x);var w = (i - f) * g / p + f;if (n) {
                  if (ei(f, d, g, v, v + m, y, e, w, r)) return !0;
                } else a += si(f, d, g, v, v + m, y, w, r);o = Math.cos(v + m) * p + f, s = Math.sin(v + m) * g + d;break;case Mf.R:
                l = o = t[u++], h = s = t[u++];var _ = l + t[u++],
                    x = h + t[u++];if (n) {
                  if (Qn(l, h, _, h, e, i, r) || Qn(_, h, _, x, e, i, r) || Qn(_, x, l, x, e, i, r) || Qn(l, x, l, h, e, i, r)) return !0;
                } else a += ni(_, h, _, x, i, r), a += ni(l, x, l, h, i, r);break;case Mf.Z:
                if (n) {
                  if (Qn(o, s, l, h, e, i, r)) return !0;
                } else a += ni(o, s, l, h, i, r);o = l, s = h;}
          }return n || ii(s, h) || (a += ni(o, s, l, h, i, r) || 0), 0 !== a;
        }function hi(t, e, n) {
          return li(t, 0, !1, e, n);
        }function ui(t, e, n, i) {
          return li(t, e, !0, n, i);
        }function ci(t) {
          Ue.call(this, t), this.path = null;
        }function fi(t, e, n, i, r, a, o, s, l, h, u) {
          var c = l * (Vf / 180),
              f = Ff(c) * (t - n) / 2 + zf(c) * (e - i) / 2,
              d = -1 * zf(c) * (t - n) / 2 + Ff(c) * (e - i) / 2,
              p = f * f / (o * o) + d * d / (s * s);p > 1 && (o *= Rf(p), s *= Rf(p));var g = (r === a ? -1 : 1) * Rf((o * o * (s * s) - o * o * (d * d) - s * s * (f * f)) / (o * o * (d * d) + s * s * (f * f))) || 0,
              v = g * o * d / s,
              m = g * -s * f / o,
              y = (t + n) / 2 + Ff(c) * v - zf(c) * m,
              _ = (e + i) / 2 + zf(c) * v + Ff(c) * m,
              x = Gf([1, 0], [(f - v) / o, (d - m) / s]),
              w = [(f - v) / o, (d - m) / s],
              b = [(-1 * f - v) / o, (-1 * d - m) / s],
              S = Gf(w, b);Hf(w, b) <= -1 && (S = Vf), Hf(w, b) >= 1 && (S = 0), 0 === a && S > 0 && (S -= 2 * Vf), 1 === a && S < 0 && (S += 2 * Vf), u.addData(h, y, _, o, s, x, S, c, a);
        }function di(t) {
          if (!t) return new wf();for (var e, n = 0, i = 0, r = n, a = i, o = new wf(), s = wf.CMD, l = t.match(Xf), h = 0; h < l.length; h++) {
            for (var u, c = l[h], f = c.charAt(0), d = c.match(qf) || [], p = d.length, g = 0; g < p; g++) {
              d[g] = parseFloat(d[g]);
            }for (var v = 0; v < p;) {
              var m,
                  y,
                  _,
                  x,
                  w,
                  b,
                  S,
                  M = n,
                  T = i;switch (f) {case "l":
                  n += d[v++], i += d[v++], u = s.L, o.addData(u, n, i);break;case "L":
                  n = d[v++], i = d[v++], u = s.L, o.addData(u, n, i);break;case "m":
                  n += d[v++], i += d[v++], u = s.M, o.addData(u, n, i), r = n, a = i, f = "l";break;case "M":
                  n = d[v++], i = d[v++], u = s.M, o.addData(u, n, i), r = n, a = i, f = "L";break;case "h":
                  n += d[v++], u = s.L, o.addData(u, n, i);break;case "H":
                  n = d[v++], u = s.L, o.addData(u, n, i);break;case "v":
                  i += d[v++], u = s.L, o.addData(u, n, i);break;case "V":
                  i = d[v++], u = s.L, o.addData(u, n, i);break;case "C":
                  u = s.C, o.addData(u, d[v++], d[v++], d[v++], d[v++], d[v++], d[v++]), n = d[v - 2], i = d[v - 1];break;case "c":
                  u = s.C, o.addData(u, d[v++] + n, d[v++] + i, d[v++] + n, d[v++] + i, d[v++] + n, d[v++] + i), n += d[v - 2], i += d[v - 1];break;case "S":
                  m = n, y = i;var I = o.len(),
                      k = o.data;e === s.C && (m += n - k[I - 4], y += i - k[I - 3]), u = s.C, M = d[v++], T = d[v++], n = d[v++], i = d[v++], o.addData(u, m, y, M, T, n, i);break;case "s":
                  m = n, y = i;var I = o.len(),
                      k = o.data;e === s.C && (m += n - k[I - 4], y += i - k[I - 3]), u = s.C, M = n + d[v++], T = i + d[v++], n += d[v++], i += d[v++], o.addData(u, m, y, M, T, n, i);break;case "Q":
                  M = d[v++], T = d[v++], n = d[v++], i = d[v++], u = s.Q, o.addData(u, M, T, n, i);break;case "q":
                  M = d[v++] + n, T = d[v++] + i, n += d[v++], i += d[v++], u = s.Q, o.addData(u, M, T, n, i);break;case "T":
                  m = n, y = i;var I = o.len(),
                      k = o.data;e === s.Q && (m += n - k[I - 4], y += i - k[I - 3]), n = d[v++], i = d[v++], u = s.Q, o.addData(u, m, y, n, i);break;case "t":
                  m = n, y = i;var I = o.len(),
                      k = o.data;e === s.Q && (m += n - k[I - 4], y += i - k[I - 3]), n += d[v++], i += d[v++], u = s.Q, o.addData(u, m, y, n, i);break;case "A":
                  _ = d[v++], x = d[v++], w = d[v++], b = d[v++], S = d[v++], fi(M = n, T = i, n = d[v++], i = d[v++], b, S, _, x, w, u = s.A, o);break;case "a":
                  _ = d[v++], x = d[v++], w = d[v++], b = d[v++], S = d[v++], fi(M = n, T = i, n += d[v++], i += d[v++], b, S, _, x, w, u = s.A, o);}
            }"z" !== f && "Z" !== f || (u = s.Z, o.addData(u), n = r, i = a), e = u;
          }return o.toStatic(), o;
        }function pi(t, e) {
          var n = di(t);return e = e || {}, e.buildPath = function (t) {
            if (t.setData) t.setData(n.data), (e = t.getContext()) && t.rebuildPath(e);else {
              var e = t;n.rebuildPath(e);
            }
          }, e.applyTransform = function (t) {
            Bf(n, t), this.dirty(!0);
          }, e;
        }function gi(t, e) {
          return new ci(pi(t, e));
        }function vi(t, e) {
          return ci.extend(pi(t, e));
        }function mi(t, e, n, i, r, a, o) {
          var s = .5 * (n - t),
              l = .5 * (i - e);return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e;
        }function yi(t, e, n) {
          var i = e.points,
              r = e.smooth;if (i && i.length >= 2) {
            if (r && "spline" !== r) {
              var a = Jf(i, r, n, e.smoothConstraint);t.moveTo(i[0][0], i[0][1]);for (var o = i.length, s = 0; s < (n ? o : o - 1); s++) {
                var l = a[2 * s],
                    h = a[2 * s + 1],
                    u = i[(s + 1) % o];t.bezierCurveTo(l[0], l[1], h[0], h[1], u[0], u[1]);
              }
            } else {
              "spline" === r && (i = Kf(i, n)), t.moveTo(i[0][0], i[0][1]);for (var s = 1, c = i.length; s < c; s++) {
                t.lineTo(i[s][0], i[s][1]);
              }
            }n && t.closePath();
          }
        }function _i(t, e, n) {
          var i = t.cpx2,
              r = t.cpy2;return null === i || null === r ? [(n ? Bn : Nn)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? Bn : Nn)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(n ? Hn : Wn)(t.x1, t.cpx1, t.x2, e), (n ? Hn : Wn)(t.y1, t.cpy1, t.y2, e)];
        }function xi(t) {
          Ue.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.notClear = !0;
        }function wi(t) {
          return ci.extend(t);
        }function bi(t, e, n, i) {
          var r = gi(t, e);return n && ("center" === i && (n = Mi(n, r.getBoundingRect())), Ti(r, n)), r;
        }function Si(t, e, n) {
          var i = new je({ style: { image: t, x: e.x, y: e.y, width: e.width, height: e.height }, onload: function onload(t) {
              if ("center" === n) {
                var r = { width: t.width, height: t.height };i.setStyle(Mi(e, r));
              }
            } });return i;
        }function Mi(t, e) {
          var n,
              i = e.width / e.height,
              r = t.height * i;return n = r <= t.width ? t.height : (r = t.width) / i, { x: t.x + t.width / 2 - r / 2, y: t.y + t.height / 2 - n / 2, width: r, height: n };
        }function Ti(t, e) {
          if (t.applyTransform) {
            var n = t.getBoundingRect().calculateTransform(e);t.applyTransform(n);
          }
        }function Ii(t) {
          var e = t.shape,
              n = t.style.lineWidth;return fd(2 * e.x1) === fd(2 * e.x2) && (e.x1 = e.x2 = ki(e.x1, n, !0)), fd(2 * e.y1) === fd(2 * e.y2) && (e.y1 = e.y2 = ki(e.y1, n, !0)), t;
        }function ki(t, e, n) {
          var i = fd(2 * t);return (i + fd(e)) % 2 == 0 ? i / 2 : (i + (n ? 1 : -1)) / 2;
        }function Ci(t) {
          return null != t && "none" !== t;
        }function Di(t) {
          if ("string" != typeof t) return t;var e = vd.get(t);return e || (e = Dt(t, -.1), md < 1e4 && (vd.set(t, e), md++)), e;
        }function Ai(t) {
          if (t.__hoverStlDirty) {
            t.__hoverStlDirty = !1;var e = t.__hoverStl;if (e) {
              var n = t.__normalStl = {},
                  i = t.style;for (var r in e) {
                null != e[r] && (n[r] = i[r]);
              }n.fill = i.fill, n.stroke = i.stroke;
            } else t.__normalStl = null;
          }
        }function Li(t) {
          var e = t.__hoverStl;if (e && !t.__highlighted) {
            var n = t.useHoverLayer;t.__highlighted = n ? "layer" : "plain";var i = t.__zr;if (i || !n) {
              var r = t,
                  a = t.style;n && (a = (r = i.addHover(t)).style), Qi(a), n || Ai(r), a.extendFrom(e), Pi(a, e, "fill"), Pi(a, e, "stroke"), $i(a), n || (t.dirty(!1), t.z2 += 1);
            }
          }
        }function Pi(t, e, n) {
          !Ci(e[n]) && Ci(t[n]) && (t[n] = Di(t[n]));
        }function Oi(t) {
          t.__highlighted && (Ei(t), t.__highlighted = !1);
        }function Ei(t) {
          var e = t.__highlighted;if ("layer" === e) t.__zr && t.__zr.removeHover(t);else if (e) {
            var n = t.style,
                i = t.__normalStl;i && (Qi(n), t.setStyle(i), $i(n), t.z2 -= 1);
          }
        }function Ni(t, e) {
          t.isGroup ? t.traverse(function (t) {
            !t.isGroup && e(t);
          }) : e(t);
        }function Bi(t, e) {
          e = t.__hoverStl = !1 !== e && (e || {}), t.__hoverStlDirty = !0, t.__highlighted && (Oi(t), Li(t));
        }function Ri(t) {
          return t && t.__isEmphasisEntered;
        }function zi(t) {
          this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasisEntered && Ni(this, Li);
        }function Fi(t) {
          this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasisEntered && Ni(this, Oi);
        }function Vi() {
          this.__isEmphasisEntered = !0, Ni(this, Li);
        }function Wi() {
          this.__isEmphasisEntered = !1, Ni(this, Oi);
        }function Hi(t, e, n) {
          t.isGroup ? t.traverse(function (t) {
            !t.isGroup && Bi(t, t.hoverStyle || e);
          }) : Bi(t, t.hoverStyle || e), Gi(t, n);
        }function Gi(t, e) {
          var n = !1 === e;if (t.__hoverSilentOnTouch = null != e && e.hoverSilentOnTouch, !n || t.__hoverStyleTrigger) {
            var i = n ? "off" : "on";t[i]("mouseover", zi)[i]("mouseout", Fi), t[i]("emphasis", Vi)[i]("normal", Wi), t.__hoverStyleTrigger = !n;
          }
        }function Xi(t, e, n, i, r, a, o) {
          var s,
              l = (r = r || gd).labelFetcher,
              h = r.labelDataIndex,
              u = r.labelDimIndex,
              c = n.getShallow("show"),
              f = i.getShallow("show");(c || f) && (l && (s = l.getFormattedLabel(h, "normal", null, u)), null == s && (s = _(r.defaultText) ? r.defaultText(h, r) : r.defaultText));var d = c ? s : null,
              p = f ? k(l ? l.getFormattedLabel(h, "emphasis", null, u) : null, s) : null;null == d && null == p || (qi(t, n, a, r), qi(e, i, o, r, !0)), t.text = d, e.text = p;
        }function qi(t, e, n, i, r) {
          return Yi(t, e, i, r), n && a(t, n), t;
        }function Yi(t, e, n, i) {
          if ((n = n || gd).isRectText) {
            var r = e.getShallow("position") || (i ? null : "inside");"outside" === r && (r = "top"), t.textPosition = r, t.textOffset = e.getShallow("offset");var a = e.getShallow("rotate");null != a && (a *= Math.PI / 180), t.textRotation = a, t.textDistance = k(e.getShallow("distance"), i ? null : 5);
          }var o,
              s = e.ecModel,
              l = s && s.option.textStyle,
              h = Ui(e);if (h) {
            o = {};for (var u in h) {
              if (h.hasOwnProperty(u)) {
                var c = e.getModel(["rich", u]);ji(o[u] = {}, c, l, n, i);
              }
            }
          }return t.rich = o, ji(t, e, l, n, i, !0), n.forceRich && !n.textStyle && (n.textStyle = {}), t;
        }function Ui(t) {
          for (var e; t && t !== t.ecModel;) {
            var n = (t.option || gd).rich;if (n) {
              e = e || {};for (var i in n) {
                n.hasOwnProperty(i) && (e[i] = 1);
              }
            }t = t.parentModel;
          }return e;
        }function ji(t, e, n, i, r, a) {
          n = !r && n || gd, t.textFill = Zi(e.getShallow("color"), i) || n.color, t.textStroke = Zi(e.getShallow("textBorderColor"), i) || n.textBorderColor, t.textStrokeWidth = k(e.getShallow("textBorderWidth"), n.textBorderWidth), t.insideRawTextPosition = t.textPosition, r || (a && (t.insideRollbackOpt = i, $i(t)), null == t.textFill && (t.textFill = i.autoColor)), t.fontStyle = e.getShallow("fontStyle") || n.fontStyle, t.fontWeight = e.getShallow("fontWeight") || n.fontWeight, t.fontSize = e.getShallow("fontSize") || n.fontSize, t.fontFamily = e.getShallow("fontFamily") || n.fontFamily, t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), a && i.disableBox || (t.textBackgroundColor = Zi(e.getShallow("backgroundColor"), i), t.textPadding = e.getShallow("padding"), t.textBorderColor = Zi(e.getShallow("borderColor"), i), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), t.textShadowColor = e.getShallow("textShadowColor") || n.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || n.textShadowBlur, t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || n.textShadowOffsetX, t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || n.textShadowOffsetY;
        }function Zi(t, e) {
          return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null;
        }function $i(t) {
          var e = t.insideRollbackOpt;if (e && null == t.textFill) {
            var n,
                i = e.useInsideStyle,
                r = t.insideRawTextPosition,
                a = e.autoColor;!1 !== i && (!0 === i || e.isRectText && r && "string" == typeof r && r.indexOf("inside") >= 0) ? (n = { textFill: null, textStroke: t.textStroke, textStrokeWidth: t.textStrokeWidth }, t.textFill = "#fff", null == t.textStroke && (t.textStroke = a, null == t.textStrokeWidth && (t.textStrokeWidth = 2))) : null != a && (n = { textFill: null }, t.textFill = a), n && (t.insideRollback = n);
          }
        }function Qi(t) {
          var e = t.insideRollback;e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth, t.insideRollback = null);
        }function Ki(t, e) {
          var n = e || e.getModel("textStyle");return P([t.fontStyle || n && n.getShallow("fontStyle") || "", t.fontWeight || n && n.getShallow("fontWeight") || "", (t.fontSize || n && n.getShallow("fontSize") || 12) + "px", t.fontFamily || n && n.getShallow("fontFamily") || "sans-serif"].join(" "));
        }function Ji(t, e, n, i, r, a) {
          if ("function" == typeof r && (a = r, r = null), i && i.isAnimationEnabled()) {
            var o = t ? "Update" : "",
                s = i.getShallow("animationDuration" + o),
                l = i.getShallow("animationEasing" + o),
                h = i.getShallow("animationDelay" + o);"function" == typeof h && (h = h(r, i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null)), "function" == typeof s && (s = s(r)), s > 0 ? e.animateTo(n, s, h || 0, l, a, !!a) : (e.stopAnimation(), e.attr(n), a && a());
          } else e.stopAnimation(), e.attr(n), a && a();
        }function tr(t, e, n, i, r) {
          Ji(!0, t, e, n, i, r);
        }function er(t, e, n, i, r) {
          Ji(!1, t, e, n, i, r);
        }function nr(t, e, n) {
          return e && !c(e) && (e = mu.getLocalTransform(e)), n && (e = vt([], e)), U([], t, e);
        }function ir(t, e, n, i) {
          function r(t) {
            var e = { position: F(t.position), rotation: t.rotation };return t.shape && (e.shape = a({}, t.shape)), e;
          }if (t && e) {
            var o = function (t) {
              var e = {};return t.traverse(function (t) {
                !t.isGroup && t.anid && (e[t.anid] = t);
              }), e;
            }(t);e.traverse(function (t) {
              if (!t.isGroup && t.anid) {
                var e = o[t.anid];if (e) {
                  var i = r(t);t.attr(r(e)), tr(t, i, n, t.dataIndex);
                }
              }
            });
          }
        }function rr(t, e, n) {
          this.parentModel = e, this.ecModel = n, this.option = t;
        }function ar(t, e, n) {
          for (var i = 0; i < e.length && (!e[i] || null != (t = t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t[e[i]] : null)); i++) {}return null == t && n && (t = n.get(e)), t;
        }function or(t, e) {
          var n = Md(t).getParent;return n ? n.call(t, e) : t.parentModel;
        }function sr(t) {
          return [t || "", Td++, Math.random().toFixed(5)].join("_");
        }function lr(t) {
          return t.replace(/^\s+/, "").replace(/\s+$/, "");
        }function hr(t, e, n, i) {
          var r = e[1] - e[0],
              a = n[1] - n[0];if (0 === r) return 0 === a ? n[0] : (n[0] + n[1]) / 2;if (i) {
            if (r > 0) {
              if (t <= e[0]) return n[0];if (t >= e[1]) return n[1];
            } else {
              if (t >= e[0]) return n[0];if (t <= e[1]) return n[1];
            }
          } else {
            if (t === e[0]) return n[0];if (t === e[1]) return n[1];
          }return (t - e[0]) / r * a + n[0];
        }function ur(t, e) {
          switch (t) {case "center":case "middle":
              t = "50%";break;case "left":case "top":
              t = "0%";break;case "right":case "bottom":
              t = "100%";}return "string" == typeof t ? lr(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? NaN : +t;
        }function cr(t, e, n) {
          return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), n ? t : +t;
        }function fr(t) {
          var e = t.toString(),
              n = e.indexOf("e");if (n > 0) {
            var i = +e.slice(n + 1);return i < 0 ? -i : 0;
          }var r = e.indexOf(".");return r < 0 ? 0 : e.length - 1 - r;
        }function dr(t, e) {
          var n = Math.log,
              i = Math.LN10,
              r = Math.floor(n(t[1] - t[0]) / i),
              a = Math.round(n(Math.abs(e[1] - e[0])) / i),
              o = Math.min(Math.max(-r + a, 0), 20);return isFinite(o) ? o : 20;
        }function pr(t, e, n) {
          if (!t[e]) return 0;var i = p(t, function (t, e) {
            return t + (isNaN(e) ? 0 : e);
          }, 0);if (0 === i) return 0;for (var r = Math.pow(10, n), a = d(t, function (t) {
            return (isNaN(t) ? 0 : t) / i * r * 100;
          }), o = 100 * r, s = d(a, function (t) {
            return Math.floor(t);
          }), l = p(s, function (t, e) {
            return t + e;
          }, 0), h = d(a, function (t, e) {
            return t - s[e];
          }); l < o;) {
            for (var u = Number.NEGATIVE_INFINITY, c = null, f = 0, g = h.length; f < g; ++f) {
              h[f] > u && (u = h[f], c = f);
            }++s[c], h[c] = 0, ++l;
          }return s[e] / r;
        }function gr(t) {
          var e = 2 * Math.PI;return (t % e + e) % e;
        }function vr(t) {
          return t > -Id && t < Id;
        }function mr(t) {
          if (t instanceof Date) return t;if ("string" == typeof t) {
            var e = kd.exec(t);if (!e) return new Date(NaN);if (e[8]) {
              var n = +e[4] || 0;return "Z" !== e[8].toUpperCase() && (n -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, n, +(e[5] || 0), +e[6] || 0, +e[7] || 0));
            }return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0);
          }return null == t ? new Date(NaN) : new Date(Math.round(t));
        }function yr(t) {
          return Math.pow(10, _r(t));
        }function _r(t) {
          return Math.floor(Math.log(t) / Math.LN10);
        }function xr(t, e) {
          var n,
              i = _r(t),
              r = Math.pow(10, i),
              a = t / r;return n = e ? a < 1.5 ? 1 : a < 2.5 ? 2 : a < 4 ? 3 : a < 7 ? 5 : 10 : a < 1 ? 1 : a < 2 ? 2 : a < 3 ? 3 : a < 5 ? 5 : 10, t = n * r, i >= -20 ? +t.toFixed(i < 0 ? -i : 0) : t;
        }function wr(t) {
          return isNaN(t) ? "-" : (t = (t + "").split("."))[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : "");
        }function br(t) {
          return null == t ? "" : (t + "").replace(Dd, function (t, e) {
            return Ad[e];
          });
        }function Sr(t, e, n) {
          y(e) || (e = [e]);var i = e.length;if (!i) return "";for (var r = e[0].$vars || [], a = 0; a < r.length; a++) {
            var o = Ld[a];t = t.replace(Pd(o), Pd(o, 0));
          }for (var s = 0; s < i; s++) {
            for (var l = 0; l < r.length; l++) {
              var h = e[s][r[l]];t = t.replace(Pd(Ld[l], s), n ? br(h) : h);
            }
          }return t;
        }function Mr(t, e) {
          var n = (t = x(t) ? { color: t, extraCssText: e } : t || {}).color,
              i = t.type,
              e = t.extraCssText,
              r = t.renderMode || "html",
              a = t.markerId || "X";return n ? "html" === r ? "subItem" === i ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + br(n) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + br(n) + ";" + (e || "") + '"></span>' : { renderMode: r, content: "{marker" + a + "|}  ", style: { color: n } } : "";
        }function Tr(t, e) {
          return t += "", "0000".substr(0, e - t.length) + t;
        }function Ir(t, e, n) {
          "week" !== t && "month" !== t && "quarter" !== t && "half-year" !== t && "year" !== t || (t = "MM-dd\nyyyy");var i = mr(e),
              r = n ? "UTC" : "",
              a = i["get" + r + "FullYear"](),
              o = i["get" + r + "Month"]() + 1,
              s = i["get" + r + "Date"](),
              l = i["get" + r + "Hours"](),
              h = i["get" + r + "Minutes"](),
              u = i["get" + r + "Seconds"](),
              c = i["get" + r + "Milliseconds"]();return t = t.replace("MM", Tr(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", a % 100).replace("dd", Tr(s, 2)).replace("d", s).replace("hh", Tr(l, 2)).replace("h", l).replace("mm", Tr(h, 2)).replace("m", h).replace("ss", Tr(u, 2)).replace("s", u).replace("SSS", Tr(c, 3));
        }function kr(t, e, n, i, r) {
          var a = 0,
              o = 0;null == i && (i = 1 / 0), null == r && (r = 1 / 0);var s = 0;e.eachChild(function (l, h) {
            var u,
                c,
                f = l.position,
                d = l.getBoundingRect(),
                p = e.childAt(h + 1),
                g = p && p.getBoundingRect();if ("horizontal" === t) {
              var v = d.width + (g ? -g.x + d.x : 0);(u = a + v) > i || l.newline ? (a = 0, u = v, o += s + n, s = d.height) : s = Math.max(s, d.height);
            } else {
              var m = d.height + (g ? -g.y + d.y : 0);(c = o + m) > r || l.newline ? (a += s + n, o = 0, c = m, s = d.width) : s = Math.max(s, d.width);
            }l.newline || (f[0] = a, f[1] = o, "horizontal" === t ? a = u + n : o = c + n);
          });
        }function Cr(t, e, n) {
          n = Cd(n || 0);var i = e.width,
              r = e.height,
              a = ur(t.left, i),
              o = ur(t.top, r),
              s = ur(t.right, i),
              l = ur(t.bottom, r),
              h = ur(t.width, i),
              u = ur(t.height, r),
              c = n[2] + n[0],
              f = n[1] + n[3],
              d = t.aspect;switch (isNaN(h) && (h = i - s - f - a), isNaN(u) && (u = r - l - c - o), null != d && (isNaN(h) && isNaN(u) && (d > i / r ? h = .8 * i : u = .8 * r), isNaN(h) && (h = d * u), isNaN(u) && (u = h / d)), isNaN(a) && (a = i - s - h - f), isNaN(o) && (o = r - l - u - c), t.left || t.right) {case "center":
              a = i / 2 - h / 2 - n[3];break;case "right":
              a = i - h - f;}switch (t.top || t.bottom) {case "middle":case "center":
              o = r / 2 - u / 2 - n[0];break;case "bottom":
              o = r - u - c;}a = a || 0, o = o || 0, isNaN(h) && (h = i - f - a - (s || 0)), isNaN(u) && (u = r - c - o - (l || 0));var p = new Ut(a + n[3], o + n[0], h, u);return p.margin = n, p;
        }function Dr(t, e, n) {
          function i(n, i) {
            var o = {},
                l = 0,
                h = {},
                u = 0;if (Ed(n, function (e) {
              h[e] = t[e];
            }), Ed(n, function (t) {
              r(e, t) && (o[t] = h[t] = e[t]), a(o, t) && l++, a(h, t) && u++;
            }), s[i]) return a(e, n[1]) ? h[n[2]] = null : a(e, n[2]) && (h[n[1]] = null), h;if (2 !== u && l) {
              if (l >= 2) return o;for (var c = 0; c < n.length; c++) {
                var f = n[c];if (!r(o, f) && r(t, f)) {
                  o[f] = t[f];break;
                }
              }return o;
            }return h;
          }function r(t, e) {
            return t.hasOwnProperty(e);
          }function a(t, e) {
            return null != t[e] && "auto" !== t[e];
          }function o(t, e, n) {
            Ed(t, function (t) {
              e[t] = n[t];
            });
          }!w(n) && (n = {});var s = n.ignoreSize;!y(s) && (s = [s, s]);var l = i(Bd[0], 0),
              h = i(Bd[1], 1);o(Bd[0], t, l), o(Bd[1], t, h);
        }function Ar(t) {
          return Lr({}, t);
        }function Lr(t, e) {
          return e && t && Ed(Nd, function (n) {
            e.hasOwnProperty(n) && (t[n] = e[n]);
          }), t;
        }function Pr(t, e) {
          for (var n = t.length, i = 0; i < n; i++) {
            if (t[i].length > e) return t[i];
          }return t[n - 1];
        }function Or(t) {
          var e = t.get("coordinateSystem"),
              n = { coordSysName: e, coordSysDims: [], axisMap: B(), categoryAxisMap: B() },
              i = Xd[e];if (i) return i(t, n, n.axisMap, n.categoryAxisMap), n;
        }function Er(t) {
          return "category" === t.get("type");
        }function Nr(t) {
          this.fromDataset = t.fromDataset, this.data = t.data || (t.sourceFormat === jd ? {} : []), this.sourceFormat = t.sourceFormat || Zd, this.seriesLayoutBy = t.seriesLayoutBy || Qd, this.dimensionsDefine = t.dimensionsDefine, this.encodeDefine = t.encodeDefine && B(t.encodeDefine), this.startIndex = t.startIndex || 0, this.dimensionsDetectCount = t.dimensionsDetectCount;
        }function Br(t) {
          var e = t.option.source,
              n = Zd;if (S(e)) n = $d;else if (y(e)) {
            0 === e.length && (n = Yd);for (var i = 0, r = e.length; i < r; i++) {
              var a = e[i];if (null != a) {
                if (y(a)) {
                  n = Yd;break;
                }if (w(a)) {
                  n = Ud;break;
                }
              }
            }
          } else if (w(e)) {
            for (var o in e) {
              if (e.hasOwnProperty(o) && c(e[o])) {
                n = jd;break;
              }
            }
          } else if (null != e) throw new Error("Invalid data");Jd(t).sourceFormat = n;
        }function Rr(t) {
          return Jd(t).source;
        }function zr(t) {
          Jd(t).datasetMap = B();
        }function Fr(t) {
          var e = t.option,
              n = e.data,
              i = S(n) ? $d : qd,
              r = !1,
              a = e.seriesLayoutBy,
              o = e.sourceHeader,
              s = e.dimensions,
              l = qr(t);if (l) {
            var h = l.option;n = h.source, i = Jd(l).sourceFormat, r = !0, a = a || h.seriesLayoutBy, null == o && (o = h.sourceHeader), s = s || h.dimensions;
          }var u = Vr(n, i, a, o, s),
              c = e.encode;!c && l && (c = Xr(t, l, n, i, a, u)), Jd(t).source = new Nr({ data: n, fromDataset: r, seriesLayoutBy: a, sourceFormat: i, dimensionsDefine: u.dimensionsDefine, startIndex: u.startIndex, dimensionsDetectCount: u.dimensionsDetectCount, encodeDefine: c });
        }function Vr(t, e, n, i, r) {
          if (!t) return { dimensionsDefine: Wr(r) };var a, o, s;if (e === Yd) "auto" === i || null == i ? Hr(function (t) {
            null != t && "-" !== t && (x(t) ? null == o && (o = 1) : o = 0);
          }, n, t, 10) : o = i ? 1 : 0, r || 1 !== o || (r = [], Hr(function (t, e) {
            r[e] = null != t ? t : "";
          }, n, t)), a = r ? r.length : n === Kd ? t.length : t[0] ? t[0].length : null;else if (e === Ud) r || (r = Gr(t), s = !0);else if (e === jd) r || (r = [], s = !0, f(t, function (t, e) {
            r.push(e);
          }));else if (e === qd) {
            var l = dn(t[0]);a = y(l) && l.length || 1;
          }var h;return s && f(r, function (t, e) {
            "name" === (w(t) ? t.name : t) && (h = e);
          }), { startIndex: o, dimensionsDefine: Wr(r), dimensionsDetectCount: a, potentialNameDimIndex: h };
        }function Wr(t) {
          if (t) {
            var e = B();return d(t, function (t, n) {
              if (null == (t = a({}, w(t) ? t : { name: t })).name) return t;t.name += "", null == t.displayName && (t.displayName = t.name);var i = e.get(t.name);return i ? t.name += "-" + i.count++ : e.set(t.name, { count: 1 }), t;
            });
          }
        }function Hr(t, e, n, i) {
          if (null == i && (i = 1 / 0), e === Kd) for (a = 0; a < n.length && a < i; a++) {
            t(n[a] ? n[a][0] : null, a);
          } else for (var r = n[0] || [], a = 0; a < r.length && a < i; a++) {
            t(r[a], a);
          }
        }function Gr(t) {
          for (var e, n = 0; n < t.length && !(e = t[n++]);) {}if (e) {
            var i = [];return f(e, function (t, e) {
              i.push(e);
            }), i;
          }
        }function Xr(t, e, n, i, r, a) {
          var o = Or(t),
              s = {},
              l = [],
              h = [],
              u = t.subType,
              c = B(["pie", "map", "funnel"]),
              d = B(["line", "bar", "pictorialBar", "scatter", "effectScatter", "candlestick", "boxplot"]);if (o && null != d.get(u)) {
            var p = t.ecModel,
                g = Jd(p).datasetMap,
                v = e.uid + "_" + r,
                m = g.get(v) || g.set(v, { categoryWayDim: 1, valueWayDim: 0 });f(o.coordSysDims, function (t) {
              if (null == o.firstCategoryDimIndex) {
                e = m.valueWayDim++;s[t] = e, h.push(e);
              } else if (o.categoryAxisMap.get(t)) s[t] = 0, l.push(0);else {
                var e = m.categoryWayDim++;s[t] = e, h.push(e);
              }
            });
          } else if (null != c.get(u)) {
            for (var y, _ = 0; _ < 5 && null == y; _++) {
              Ur(n, i, r, a.dimensionsDefine, a.startIndex, _) || (y = _);
            }if (null != y) {
              s.value = y;var x = a.potentialNameDimIndex || Math.max(y - 1, 0);h.push(x), l.push(x);
            }
          }return l.length && (s.itemName = l), h.length && (s.seriesName = h), s;
        }function qr(t) {
          var e = t.option;if (!e.data) return t.ecModel.getComponent("dataset", e.datasetIndex || 0);
        }function Yr(t, e) {
          return Ur(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e);
        }function Ur(t, e, n, i, r, a) {
          function o(t) {
            return (null == t || !isFinite(t) || "" === t) && (!(!x(t) || "-" === t) || void 0);
          }var s;if (S(t)) return !1;var l;if (i && (l = w(l = i[a]) ? l.name : l), e === Yd) {
            if (n === Kd) {
              for (var h = t[a], u = 0; u < (h || []).length && u < 5; u++) {
                if (null != (s = o(h[r + u]))) return s;
              }
            } else for (u = 0; u < t.length && u < 5; u++) {
              var c = t[r + u];if (c && null != (s = o(c[a]))) return s;
            }
          } else if (e === Ud) {
            if (!l) return;for (u = 0; u < t.length && u < 5; u++) {
              if ((f = t[u]) && null != (s = o(f[l]))) return s;
            }
          } else if (e === jd) {
            if (!l) return;if (!(h = t[l]) || S(h)) return !1;for (u = 0; u < h.length && u < 5; u++) {
              if (null != (s = o(h[u]))) return s;
            }
          } else if (e === qd) for (u = 0; u < t.length && u < 5; u++) {
            var f = t[u],
                d = dn(f);if (!y(d)) return !1;if (null != (s = o(d[a]))) return s;
          }return !1;
        }function jr(t, e) {
          if (e) {
            var n = e.seiresIndex,
                i = e.seriesId,
                r = e.seriesName;return null != n && t.componentIndex !== n || null != i && t.id !== i || null != r && t.name !== r;
          }
        }function Zr(t, e) {
          var r = t.color && !t.colorLayer;f(e, function (e, a) {
            "colorLayer" === a && r || Fd.hasClass(a) || ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? t[a] = t[a] ? i(t[a], e, !1) : n(e) : null == t[a] && (t[a] = e));
          });
        }function $r(t) {
          t = t, this.option = {}, this.option[tp] = 1, this._componentsMap = B({ series: [] }), this._seriesIndices, this._seriesIndicesMap, Zr(t, this._theme.option), i(t, Wd, !1), this.mergeOption(t);
        }function Qr(t, e) {
          y(e) || (e = e ? [e] : []);var n = {};return f(e, function (e) {
            n[e] = (t.get(e) || []).slice();
          }), n;
        }function Kr(t, e, n) {
          return e.type ? e.type : n ? n.subType : Fd.determineSubType(t, e);
        }function Jr(t, e) {
          t._seriesIndicesMap = B(t._seriesIndices = d(e, function (t) {
            return t.componentIndex;
          }) || []);
        }function ta(t, e) {
          return e.hasOwnProperty("subType") ? g(t, function (t) {
            return t.subType === e.subType;
          }) : t;
        }function ea(t) {
          f(np, function (e) {
            this[e] = v(t[e], t);
          }, this);
        }function na() {
          this._coordinateSystems = [];
        }function ia(t) {
          this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption;
        }function ra(t, e, n) {
          var i,
              r,
              a = [],
              o = [],
              s = t.timeline;if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, a = (t.options || []).slice()), t.media) {
            r = r || {};var l = t.media;rp(l, function (t) {
              t && t.option && (t.query ? o.push(t) : i || (i = t));
            });
          }return r || (r = t), r.timeline || (r.timeline = s), rp([r].concat(a).concat(d(o, function (t) {
            return t.option;
          })), function (t) {
            rp(e, function (e) {
              e(t, n);
            });
          }), { baseOption: r, timelineOptions: a, mediaDefault: i, mediaList: o };
        }function aa(t, e, n) {
          var i = { width: e, height: n, aspectratio: e / n },
              r = !0;return f(t, function (t, e) {
            var n = e.match(lp);if (n && n[1] && n[2]) {
              var a = n[1],
                  o = n[2].toLowerCase();oa(i[o], t, a) || (r = !1);
            }
          }), r;
        }function oa(t, e, n) {
          return "min" === n ? t >= e : "max" === n ? t <= e : t === e;
        }function sa(t, e) {
          return t.join(",") === e.join(",");
        }function la(t, e) {
          rp(e = e || {}, function (e, n) {
            if (null != e) {
              var i = t[n];if (Fd.hasClass(n)) {
                e = cn(e);var r = gn(i = cn(i), e);t[n] = op(r, function (t) {
                  return t.option && t.exist ? sp(t.exist, t.option, !0) : t.exist || t.option;
                });
              } else t[n] = sp(i, e, !0);
            }
          });
        }function ha(t) {
          var e = t && t.itemStyle;if (e) for (var n = 0, r = cp.length; n < r; n++) {
            var a = cp[n],
                o = e.normal,
                s = e.emphasis;o && o[a] && (t[a] = t[a] || {}, t[a].normal ? i(t[a].normal, o[a]) : t[a].normal = o[a], o[a] = null), s && s[a] && (t[a] = t[a] || {}, t[a].emphasis ? i(t[a].emphasis, s[a]) : t[a].emphasis = s[a], s[a] = null);
          }
        }function ua(t, e, n) {
          if (t && t[e] && (t[e].normal || t[e].emphasis)) {
            var i = t[e].normal,
                r = t[e].emphasis;i && (n ? (t[e].normal = t[e].emphasis = null, o(t[e], i)) : t[e] = i), r && (t.emphasis = t.emphasis || {}, t.emphasis[e] = r);
          }
        }function ca(t) {
          ua(t, "itemStyle"), ua(t, "lineStyle"), ua(t, "areaStyle"), ua(t, "label"), ua(t, "labelLine"), ua(t, "upperLabel"), ua(t, "edgeLabel");
        }function fa(t, e) {
          var n = up(t) && t[e],
              i = up(n) && n.textStyle;if (i) for (var r = 0, a = Oc.length; r < a; r++) {
            var e = Oc[r];i.hasOwnProperty(e) && (n[e] = i[e]);
          }
        }function da(t) {
          t && (ca(t), fa(t, "label"), t.emphasis && fa(t.emphasis, "label"));
        }function pa(t) {
          if (up(t)) {
            ha(t), ca(t), fa(t, "label"), fa(t, "upperLabel"), fa(t, "edgeLabel"), t.emphasis && (fa(t.emphasis, "label"), fa(t.emphasis, "upperLabel"), fa(t.emphasis, "edgeLabel"));var e = t.markPoint;e && (ha(e), da(e));var n = t.markLine;n && (ha(n), da(n));var i = t.markArea;i && da(i);var r = t.data;if ("graph" === t.type) {
              r = r || t.nodes;var a = t.links || t.edges;if (a && !S(a)) for (s = 0; s < a.length; s++) {
                da(a[s]);
              }f(t.categories, function (t) {
                ca(t);
              });
            }if (r && !S(r)) for (s = 0; s < r.length; s++) {
              da(r[s]);
            }if ((e = t.markPoint) && e.data) for (var o = e.data, s = 0; s < o.length; s++) {
              da(o[s]);
            }if ((n = t.markLine) && n.data) for (var l = n.data, s = 0; s < l.length; s++) {
              y(l[s]) ? (da(l[s][0]), da(l[s][1])) : da(l[s]);
            }"gauge" === t.type ? (fa(t, "axisLabel"), fa(t, "title"), fa(t, "detail")) : "treemap" === t.type ? (ua(t.breadcrumb, "itemStyle"), f(t.levels, function (t) {
              ca(t);
            })) : "tree" === t.type && ca(t.leaves);
          }
        }function ga(t) {
          return y(t) ? t : t ? [t] : [];
        }function va(t) {
          return (y(t) ? t[0] : t) || {};
        }function ma(t, e) {
          e = e.split(",");for (var n = t, i = 0; i < e.length && null != (n = n && n[e[i]]); i++) {}return n;
        }function ya(t, e, n, i) {
          e = e.split(",");for (var r, a = t, o = 0; o < e.length - 1; o++) {
            null == a[r = e[o]] && (a[r] = {}), a = a[r];
          }(i || null == a[e[o]]) && (a[e[o]] = n);
        }function _a(t) {
          f(dp, function (e) {
            e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]]);
          });
        }function xa(t) {
          f(t, function (e, n) {
            var i = [],
                r = [NaN, NaN],
                a = [e.stackResultDimension, e.stackedOverDimension],
                o = e.data,
                s = e.isStackedByIndex,
                l = o.map(a, function (a, l, h) {
              var u = o.get(e.stackedDimension, h);if (isNaN(u)) return r;var c, f;s ? f = o.getRawIndex(h) : c = o.get(e.stackedByDimension, h);for (var d = NaN, p = n - 1; p >= 0; p--) {
                var g = t[p];if (s || (f = g.data.rawIndexOf(g.stackedByDimension, c)), f >= 0) {
                  var v = g.data.getByRawIndex(g.stackResultDimension, f);if (u >= 0 && v > 0 || u <= 0 && v < 0) {
                    u += v, d = v;break;
                  }
                }
              }return i[0] = u, i[1] = d, i;
            });o.hostModel.setData(l), e.data = l;
          });
        }function wa(t, e) {
          Nr.isInstance(t) || (t = Nr.seriesDataToSource(t)), this._source = t;var n = this._data = t.data,
              i = t.sourceFormat;i === $d && (this._offset = 0, this._dimSize = e, this._data = n), a(this, mp[i === Yd ? i + "_" + t.seriesLayoutBy : i]);
        }function ba() {
          return this._data.length;
        }function Sa(t) {
          return this._data[t];
        }function Ma(t) {
          for (var e = 0; e < t.length; e++) {
            this._data.push(t[e]);
          }
        }function Ta(t, e, n, i) {
          return null != n ? t[n] : t;
        }function Ia(t, e, n, i) {
          return ka(t[i], this._dimensionInfos[e]);
        }function ka(t, e) {
          var n = e && e.type;if ("ordinal" === n) {
            var i = e && e.ordinalMeta;return i ? i.parseAndCollect(t) : t;
          }return "time" === n && "number" != typeof t && null != t && "-" !== t && (t = +mr(t)), null == t || "" === t ? NaN : +t;
        }function Ca(t, e, n) {
          if (t) {
            var i = t.getRawDataItem(e);if (null != i) {
              var r,
                  a,
                  o = t.getProvider().getSource().sourceFormat,
                  s = t.getDimensionInfo(n);return s && (r = s.name, a = s.index), yp[o](i, e, a, r);
            }
          }
        }function Da(t, e, n) {
          if (t) {
            var i = t.getProvider().getSource().sourceFormat;if (i === qd || i === Ud) {
              var r = t.getRawDataItem(e);return i !== qd || w(r) || (r = null), r ? r[n] : void 0;
            }
          }
        }function Aa(t) {
          return new La(t);
        }function La(t) {
          t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0, this.context;
        }function Pa(t, e, n, i, r, a) {
          Sp.reset(n, i, r, a), t._callingProgress = e, t._callingProgress({ start: n, end: i, count: i - n, next: Sp.next }, t.context);
        }function Oa(t, e) {
          t._dueIndex = t._outputDueEnd = t._dueEnd = 0, t._settedOutputEnd = null;var n, i;!e && t._reset && ((n = t._reset(t.context)) && n.progress && (i = n.forceFirstProgress, n = n.progress), y(n) && !n.length && (n = null)), t._progress = n, t._modBy = t._modDataCount = null;var r = t._downstream;return r && r.dirty(), i;
        }function Ea(t) {
          var e = t.name;mn(t) || (t.name = Na(t) || e);
        }function Na(t) {
          var e = t.getRawData(),
              n = [];return f(e.mapDimension("seriesName", !0), function (t) {
            var i = e.getDimensionInfo(t);i.displayName && n.push(i.displayName);
          }), n.join(" ");
        }function Ba(t) {
          return t.model.getRawData().count();
        }function Ra(t) {
          var e = t.model;return e.setData(e.getRawData().cloneShallow()), za;
        }function za(t, e) {
          t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData);
        }function Fa(t, e) {
          f(t.CHANGABLE_METHODS, function (n) {
            t.wrapMethod(n, m(Va, e));
          });
        }function Va(t) {
          var e = Wa(t);e && e.setOutputEnd(this.count());
        }function Wa(t) {
          var e = (t.ecModel || {}).scheduler,
              n = e && e.getPipeline(t.uid);if (n) {
            var i = n.currentTask;if (i) {
              var r = i.agentStubMap;r && (i = r.get(t.uid));
            }return i;
          }
        }function Ha() {
          this.group = new Hu(), this.uid = sr("viewChart"), this.renderTask = Aa({ plan: qa, reset: Ya }), this.renderTask.context = { view: this };
        }function Ga(t, e) {
          if (t && (t.trigger(e), "group" === t.type)) for (var n = 0; n < t.childCount(); n++) {
            Ga(t.childAt(n), e);
          }
        }function Xa(t, e, n) {
          var i = _n(t, e);null != i ? f(cn(i), function (e) {
            Ga(t.getItemGraphicEl(e), n);
          }) : t.eachItemGraphicEl(function (t) {
            Ga(t, n);
          });
        }function qa(t) {
          return Ap(t.model);
        }function Ya(t) {
          var e = t.model,
              n = t.ecModel,
              i = t.api,
              r = t.payload,
              a = e.pipelineContext.progressiveRender,
              o = t.view,
              s = r && Dp(r).updateMethod,
              l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";return "render" !== l && o[l](e, n, i, r), Pp[l];
        }function Ua(t, e, n) {
          function i() {
            u = new Date().getTime(), c = null, t.apply(o, s || []);
          }var r,
              a,
              o,
              s,
              l,
              h = 0,
              u = 0,
              c = null;e = e || 0;var f = function f() {
            r = new Date().getTime(), o = this, s = arguments;var t = l || e,
                f = l || n;l = null, a = r - (f ? h : u) - t, clearTimeout(c), f ? c = setTimeout(i, t) : a >= 0 ? i() : c = setTimeout(i, -a), h = r;
          };return f.clear = function () {
            c && (clearTimeout(c), c = null);
          }, f.debounceNextCall = function (t) {
            l = t;
          }, f;
        }function ja(t, e, n, i) {
          this.ecInstance = t, this.api = e, this.unfinished;var n = this._dataProcessorHandlers = n.slice(),
              i = this._visualHandlers = i.slice();this._allHandlers = n.concat(i), this._stageTaskMap = B();
        }function Za(t, e, n, i, r) {
          function a(t, e) {
            return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id));
          }r = r || {};var o;f(e, function (e, s) {
            if (!r.visualType || r.visualType === e.visualType) {
              var l = t._stageTaskMap.get(e.uid),
                  h = l.seriesTaskMap,
                  u = l.overallTask;if (u) {
                var c,
                    f = u.agentStubMap;f.each(function (t) {
                  a(r, t) && (t.dirty(), c = !0);
                }), c && u.dirty(), zp(u, i);var d = t.getPerformArgs(u, r.block);f.each(function (t) {
                  t.perform(d);
                }), o |= u.perform(d);
              } else h && h.each(function (s, l) {
                a(r, s) && s.dirty();var h = t.getPerformArgs(s, r.block);h.skip = !e.performRawSeries && n.isSeriesFiltered(s.context.model), zp(s, i), o |= s.perform(h);
              });
            }
          }), t.unfinished |= o;
        }function $a(t, e, n, i, r) {
          function a(n) {
            var a = n.uid,
                s = o.get(a) || o.set(a, Aa({ plan: no, reset: io, count: ao }));s.context = { model: n, ecModel: i, api: r, useClearVisual: e.isVisual && !e.isLayout, plan: e.plan, reset: e.reset, scheduler: t }, oo(t, n, s);
          }var o = n.seriesTaskMap || (n.seriesTaskMap = B()),
              s = e.seriesType,
              l = e.getTargetSeries;e.createOnAllSeries ? i.eachRawSeries(a) : s ? i.eachRawSeriesByType(s, a) : l && l(i, r).each(a);var h = t._pipelineMap;o.each(function (t, e) {
            h.get(e) || (t.dispose(), o.removeKey(e));
          });
        }function Qa(t, e, n, i, r) {
          function a(e) {
            var n = e.uid,
                i = s.get(n);i || (i = s.set(n, Aa({ reset: Ja, onDirty: eo })), o.dirty()), i.context = { model: e, overallProgress: u, modifyOutputEnd: c }, i.agent = o, i.__block = u, oo(t, e, i);
          }var o = n.overallTask = n.overallTask || Aa({ reset: Ka });o.context = { ecModel: i, api: r, overallReset: e.overallReset, scheduler: t };var s = o.agentStubMap = o.agentStubMap || B(),
              l = e.seriesType,
              h = e.getTargetSeries,
              u = !0,
              c = e.modifyOutputEnd;l ? i.eachRawSeriesByType(l, a) : h ? h(i, r).each(a) : (u = !1, f(i.getSeries(), a));var d = t._pipelineMap;s.each(function (t, e) {
            d.get(e) || (t.dispose(), o.dirty(), s.removeKey(e));
          });
        }function Ka(t) {
          t.overallReset(t.ecModel, t.api, t.payload);
        }function Ja(t, e) {
          return t.overallProgress && to;
        }function to() {
          this.agent.dirty(), this.getDownstream().dirty();
        }function eo() {
          this.agent && this.agent.dirty();
        }function no(t) {
          return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload);
        }function io(t) {
          t.useClearVisual && t.data.clearAllVisual();var e = t.resetDefines = cn(t.reset(t.model, t.ecModel, t.api, t.payload));return e.length > 1 ? d(e, function (t, e) {
            return ro(e);
          }) : Fp;
        }function ro(t) {
          return function (e, n) {
            var i = n.data,
                r = n.resetDefines[t];if (r && r.dataEach) for (var a = e.start; a < e.end; a++) {
              r.dataEach(i, a);
            } else r && r.progress && r.progress(e, i);
          };
        }function ao(t) {
          return t.data.count();
        }function oo(t, e, n) {
          var i = e.uid,
              r = t._pipelineMap.get(i);!r.head && (r.head = n), r.tail && r.tail.pipe(n), r.tail = n, n.__idxInPipeline = r.count++, n.__pipeline = r;
        }function so(t) {
          Vp = null;try {
            t(Wp, Hp);
          } catch (t) {}return Vp;
        }function lo(t, e) {
          for (var n in e.prototype) {
            t[n] = R;
          }
        }function ho(t) {
          for (x(t) && (t = new DOMParser().parseFromString(t, "text/xml")), 9 === t.nodeType && (t = t.firstChild); "svg" !== t.nodeName.toLowerCase() || 1 !== t.nodeType;) {
            t = t.nextSibling;
          }return t;
        }function uo() {
          this._defs = {}, this._root = null, this._isDefine = !1, this._isText = !1;
        }function co(t, e) {
          for (var n = t.firstChild; n;) {
            if (1 === n.nodeType) {
              var i = n.getAttribute("offset");i = i.indexOf("%") > 0 ? parseInt(i, 10) / 100 : i ? parseFloat(i) : 0;var r = n.getAttribute("stop-color") || "#000000";e.addColorStop(i, r);
            }n = n.nextSibling;
          }
        }function fo(t, e) {
          t && t.__inheritedStyle && (e.__inheritedStyle || (e.__inheritedStyle = {}), o(e.__inheritedStyle, t.__inheritedStyle));
        }function po(t) {
          for (var e = P(t).split(jp), n = [], i = 0; i < e.length; i += 2) {
            var r = parseFloat(e[i]),
                a = parseFloat(e[i + 1]);n.push([r, a]);
          }return n;
        }function go(t, e, n, i) {
          var r = e.__inheritedStyle || {},
              o = "text" === e.type;if (1 === t.nodeType && (mo(t, e), a(r, yo(t)), !i)) for (var s in Qp) {
            if (Qp.hasOwnProperty(s)) {
              var l = t.getAttribute(s);null != l && (r[Qp[s]] = l);
            }
          }var h = o ? "textFill" : "fill",
              u = o ? "textStroke" : "stroke";e.style = e.style || new Zu();var c = e.style;null != r.fill && c.set(h, vo(r.fill, n)), null != r.stroke && c.set(u, vo(r.stroke, n)), f(["lineWidth", "opacity", "fillOpacity", "strokeOpacity", "miterLimit", "fontSize"], function (t) {
            var e = "lineWidth" === t && o ? "textStrokeWidth" : t;null != r[t] && c.set(e, parseFloat(r[t]));
          }), r.textBaseline && "auto" !== r.textBaseline || (r.textBaseline = "alphabetic"), "alphabetic" === r.textBaseline && (r.textBaseline = "bottom"), "start" === r.textAlign && (r.textAlign = "left"), "end" === r.textAlign && (r.textAlign = "right"), f(["lineDashOffset", "lineCap", "lineJoin", "fontWeight", "fontFamily", "fontStyle", "textAlign", "textBaseline"], function (t) {
            null != r[t] && c.set(t, r[t]);
          }), r.lineDash && (e.style.lineDash = P(r.lineDash).split(jp)), c[u] && "none" !== c[u] && (e[u] = !0), e.__inheritedStyle = r;
        }function vo(t, e) {
          var n = e && t && t.match(Kp);return n ? e[P(n[1])] : t;
        }function mo(t, e) {
          var n = t.getAttribute("transform");if (n) {
            var i = null,
                r = [];(n = n.replace(/,/g, " ")).replace(Jp, function (t, e, n) {
              r.push(e, n);
            });for (var a = r.length - 1; a > 0; a -= 2) {
              var o = r[a],
                  s = r[a - 1];switch (i = i || ht(), s) {case "translate":
                  o = P(o).split(jp), dt(i, i, [parseFloat(o[0]), parseFloat(o[1] || 0)]);break;case "scale":
                  o = P(o).split(jp), gt(i, i, [parseFloat(o[0]), parseFloat(o[1] || o[0])]);break;case "rotate":
                  o = P(o).split(jp), pt(i, i, parseFloat(o[0]));break;case "skew":
                  o = P(o).split(jp), console.warn("Skew transform is not supported yet");break;case "matrix":
                  o = P(o).split(jp);i[0] = parseFloat(o[0]), i[1] = parseFloat(o[1]), i[2] = parseFloat(o[2]), i[3] = parseFloat(o[3]), i[4] = parseFloat(o[4]), i[5] = parseFloat(o[5]);}
            }
          }e.setLocalTransform(i);
        }function yo(t) {
          var e = t.getAttribute("style"),
              n = {};if (!e) return n;var i = {};tg.lastIndex = 0;for (var r; null != (r = tg.exec(e));) {
            i[r[1]] = r[2];
          }for (var a in Qp) {
            Qp.hasOwnProperty(a) && null != i[a] && (n[Qp[a]] = i[a]);
          }return n;
        }function _o(t, e, n) {
          var i = e / t.width,
              r = n / t.height,
              a = Math.min(i, r);return { scale: [a, a], position: [-(t.x + t.width / 2) * a + e / 2, -(t.y + t.height / 2) * a + n / 2] };
        }function xo(t) {
          return function (e, n, i) {
            e = e && e.toLowerCase(), su.prototype[t].call(this, e, n, i);
          };
        }function wo() {
          su.call(this);
        }function bo(t, e, i) {
          function r(t, e) {
            return t.__prio - e.__prio;
          }i = i || {}, "string" == typeof e && (e = Ig[e]), this.id, this.group, this._dom = t;var a = this._zr = un(t, { renderer: i.renderer || "canvas", devicePixelRatio: i.devicePixelRatio, width: i.width, height: i.height });this._throttledZrFlush = Ua(v(a.flush, a), 17), (e = n(e)) && gp(e, !0), this._theme = e, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._coordSysMgr = new na();var o = this._api = Vo(this);ee(Tg, r), ee(bg, r), this._scheduler = new ja(this, o, bg, Tg), su.call(this, this._ecEventProcessor = new Wo()), this._messageCenter = new wo(), this._initEvents(), this.resize = v(this.resize, this), this._pendingActions = [], a.animation.on("frame", this._onframe, this), Ao(a, this), O(this);
        }function So(t, e, n) {
          var i,
              r = this._model,
              a = this._coordSysMgr.getCoordinateSystems();e = wn(r, e);for (var o = 0; o < a.length; o++) {
            var s = a[o];if (s[t] && null != (i = s[t](r, e, n))) return i;
          }
        }function Mo(t) {
          var e = t._model,
              n = t._scheduler;n.restorePipelines(e), n.prepareStageTasks(), Lo(t, "component", e, n), Lo(t, "chart", e, n), n.plan();
        }function To(t, e, n, i, r) {
          function a(i) {
            i && i.__alive && i[e] && i[e](i.__model, o, t._api, n);
          }var o = t._model;if (i) {
            var s = {};s[i + "Id"] = n[i + "Id"], s[i + "Index"] = n[i + "Index"], s[i + "Name"] = n[i + "Name"];var l = { mainType: i, query: s };r && (l.subType = r);var h = n.excludeSeriesId;null != h && (h = B(cn(h))), o && o.eachComponent(l, function (e) {
              h && null != h.get(e.id) || a(t["series" === i ? "_chartsMap" : "_componentsMap"][e.__viewId]);
            }, t);
          } else ag(t._componentsViews.concat(t._chartsViews), a);
        }function Io(t, e) {
          var n = t._chartsMap,
              i = t._scheduler;e.eachSeries(function (t) {
            i.updateStreamModes(t, n[t.__viewId]);
          });
        }function ko(t, e) {
          var n = t.type,
              i = t.escapeConnect,
              r = xg[n],
              s = r.actionInfo,
              l = (s.update || "update").split(":"),
              h = l.pop();l = null != l[0] && lg(l[0]), this[pg] = !0;var u = [t],
              c = !1;t.batch && (c = !0, u = d(t.batch, function (e) {
            return e = o(a({}, e), t), e.batch = null, e;
          }));var f,
              p = [],
              g = "highlight" === n || "downplay" === n;ag(u, function (t) {
            f = r.action(t, this._model, this._api), (f = f || a({}, t)).type = s.event || f.type, p.push(f), g ? To(this, h, t, "series") : l && To(this, h, t, l.main, l.sub);
          }, this), "none" === h || g || l || (this[gg] ? (Mo(this), yg.update.call(this, t), this[gg] = !1) : yg[h].call(this, t)), f = c ? { type: s.event || n, escapeConnect: i, batch: p } : p[0], this[pg] = !1, !e && this._messageCenter.trigger(f.type, f);
        }function Co(t) {
          for (var e = this._pendingActions; e.length;) {
            var n = e.shift();ko.call(this, n, t);
          }
        }function Do(t) {
          !t && this.trigger("updated");
        }function Ao(t, e) {
          t.on("rendered", function () {
            e.trigger("rendered"), !t.animation.isFinished() || e[gg] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished");
          });
        }function Lo(t, e, n, i) {
          function r(t) {
            var e = "_ec_" + t.id + "_" + t.type,
                r = s[e];if (!r) {
              var u = lg(t.type);(r = new (a ? Ip.getClass(u.main, u.sub) : Ha.getClass(u.sub))()).init(n, h), s[e] = r, o.push(r), l.add(r.group);
            }t.__viewId = r.__id = e, r.__alive = !0, r.__model = t, r.group.__ecComponentInfo = { mainType: t.mainType, index: t.componentIndex }, !a && i.prepareView(r, t, n, h);
          }for (var a = "component" === e, o = a ? t._componentsViews : t._chartsViews, s = a ? t._componentsMap : t._chartsMap, l = t._zr, h = t._api, u = 0; u < o.length; u++) {
            o[u].__alive = !1;
          }a ? n.eachComponent(function (t, e) {
            "series" !== t && r(e);
          }) : n.eachSeries(r);for (u = 0; u < o.length;) {
            var c = o[u];c.__alive ? u++ : (!a && c.renderTask.dispose(), l.remove(c.group), c.dispose(n, h), o.splice(u, 1), delete s[c.__id], c.__id = c.group.__ecComponentInfo = null);
          }
        }function Po(t) {
          t.clearColorPalette(), t.eachSeries(function (t) {
            t.clearColorPalette();
          });
        }function Oo(t, e, n, i) {
          Eo(t, e, n, i), ag(t._chartsViews, function (t) {
            t.__alive = !1;
          }), No(t, e, n, i), ag(t._chartsViews, function (t) {
            t.__alive || t.remove(e, n);
          });
        }function Eo(t, e, n, i, r) {
          ag(r || t._componentsViews, function (t) {
            var r = t.__model;t.render(r, e, n, i), Fo(r, t);
          });
        }function No(t, e, n, i, r) {
          var a,
              o = t._scheduler;e.eachSeries(function (e) {
            var n = t._chartsMap[e.__viewId];n.__alive = !0;var s = n.renderTask;o.updatePayload(s, i), r && r.get(e.uid) && s.dirty(), a |= s.perform(o.getPerformArgs(s)), n.group.silent = !!e.get("silent"), Fo(e, n), zo(e, n);
          }), o.unfinished |= a, Ro(t._zr, e), Np(t._zr.dom, e);
        }function Bo(t, e) {
          ag(Mg, function (n) {
            n(t, e);
          });
        }function Ro(t, e) {
          var n = t.storage,
              i = 0;n.traverse(function (t) {
            t.isGroup || i++;
          }), i > e.get("hoverLayerThreshold") && !Gh.node && n.traverse(function (t) {
            t.isGroup || (t.useHoverLayer = !0);
          });
        }function zo(t, e) {
          var n = t.get("blendMode") || null;e.group.traverse(function (t) {
            t.isGroup || t.style.blend !== n && t.setStyle("blend", n), t.eachPendingDisplayable && t.eachPendingDisplayable(function (t) {
              t.setStyle("blend", n);
            });
          });
        }function Fo(t, e) {
          var n = t.get("z"),
              i = t.get("zlevel");e.group.traverse(function (t) {
            "group" !== t.type && (null != n && (t.z = n), null != i && (t.zlevel = i));
          });
        }function Vo(t) {
          var e = t._coordSysMgr;return a(new ea(t), { getCoordinateSystems: v(e.getCoordinateSystems, e), getComponentByElement: function getComponentByElement(e) {
              for (; e;) {
                var n = e.__ecComponentInfo;if (null != n) return t._model.getComponent(n.mainType, n.index);e = e.parent;
              }
            } });
        }function Wo() {
          this.eventInfo;
        }function Ho(t) {
          function e(t, e) {
            for (var i = 0; i < t.length; i++) {
              t[i][n] = e;
            }
          }var n = "__connectUpdateStatus";ag(wg, function (i, r) {
            t._messageCenter.on(r, function (i) {
              if (Dg[t.group] && 0 !== t[n]) {
                if (i && i.escapeConnect) return;var r = t.makeActionFromEvent(i),
                    a = [];ag(Cg, function (e) {
                  e !== t && e.group === t.group && a.push(e);
                }), e(a, 0), ag(a, function (t) {
                  1 !== t[n] && t.dispatchAction(r);
                }), e(a, 2);
              }
            });
          });
        }function Go(t) {
          Dg[t] = !1;
        }function Xo(t) {
          return Cg[Mn(t, Pg)];
        }function qo(t, e) {
          Ig[t] = e;
        }function Yo(t) {
          Sg.push(t);
        }function Uo(t, e) {
          Qo(bg, t, e, ug);
        }function jo(t, e, n) {
          "function" == typeof e && (n = e, e = "");var i = sg(t) ? t.type : [t, t = { event: e }][0];t.event = (t.event || i).toLowerCase(), e = t.event, rg(vg.test(i) && vg.test(e)), xg[i] || (xg[i] = { action: n, actionInfo: t }), wg[e] = i;
        }function Zo(t, e) {
          Qo(Tg, t, e, cg, "layout");
        }function $o(t, e) {
          Qo(Tg, t, e, fg, "visual");
        }function Qo(t, e, n, i, r) {
          (og(e) || sg(e)) && (n = e, e = i);var a = ja.wrapStageHandler(n, r);return a.__prio = e, a.__raw = n, t.push(a), a;
        }function Ko(t, e) {
          kg[t] = e;
        }function Jo(t) {
          return Ip.extend(t);
        }function ts(t) {
          return Tp.extend(t);
        }function es(t) {
          return Ha.extend(t);
        }function ns(t) {
          return t;
        }function is(t, e, n, i, r) {
          this._old = t, this._new = e, this._oldKeyGetter = n || ns, this._newKeyGetter = i || ns, this.context = r;
        }function rs(t, e, n, i, r) {
          for (var a = 0; a < t.length; a++) {
            var o = "_ec_" + r[i](t[a], a),
                s = e[o];null == s ? (n.push(o), e[o] = a) : (s.length || (e[o] = s = [s]), s.push(a));
          }
        }function as(t) {
          var e = {},
              n = e.encode = {},
              i = B(),
              r = [],
              a = [];f(t.dimensions, function (e) {
            var o = t.getDimensionInfo(e),
                s = o.coordDim;if (s) {
              var l = n[s];n.hasOwnProperty(s) || (l = n[s] = []), l[o.coordDimIndex] = e, o.isExtraCoord || (i.set(s, 1), ss(o.type) && (r[0] = e)), o.defaultTooltip && a.push(e);
            }Ng.each(function (t, e) {
              var i = n[e];n.hasOwnProperty(e) || (i = n[e] = []);var r = o.otherDims[e];null != r && !1 !== r && (i[r] = o.name);
            });
          });var o = [],
              s = {};i.each(function (t, e) {
            var i = n[e];s[e] = i[0], o = o.concat(i);
          }), e.dataDimsOnCoord = o, e.encodeFirstDimNotExtra = s;var l = n.label;l && l.length && (r = l.slice());var h = n.tooltip;return h && h.length ? a = h.slice() : a.length || (a = r.slice()), n.defaultedLabel = r, n.defaultedTooltip = a, e;
        }function os(t) {
          return "category" === t ? "ordinal" : "time" === t ? "time" : "float";
        }function ss(t) {
          return !("ordinal" === t || "time" === t);
        }function ls(t) {
          return t._rawCount > 65535 ? Fg : Vg;
        }function hs(t) {
          var e = t.constructor;return e === Array ? t.slice() : new e(t);
        }function us(t, e) {
          f(Wg.concat(e.__wrappedMethods || []), function (n) {
            e.hasOwnProperty(n) && (t[n] = e[n]);
          }), t.__wrappedMethods = e.__wrappedMethods, f(Hg, function (i) {
            t[i] = n(e[i]);
          }), t._calculationInfo = a(e._calculationInfo);
        }function cs(t) {
          var e = t._invertedIndicesMap;f(e, function (n, i) {
            var r = t._dimensionInfos[i].ordinalMeta;if (r) {
              n = e[i] = new Fg(r.categories.length);for (a = 0; a < n.length; a++) {
                n[a] = NaN;
              }for (var a = 0; a < t._count; a++) {
                n[t.get(i, a)] = a;
              }
            }
          });
        }function fs(t, e, n) {
          var i;if (null != e) {
            var r = t._chunkSize,
                a = Math.floor(n / r),
                o = n % r,
                s = t.dimensions[e],
                l = t._storage[s][a];if (l) {
              i = l[o];var h = t._dimensionInfos[s].ordinalMeta;h && h.categories.length && (i = h.categories[i]);
            }
          }return i;
        }function ds(t) {
          return t;
        }function ps(t) {
          return t < this._count && t >= 0 ? this._indices[t] : -1;
        }function gs(t, e) {
          var n = t._idList[e];return null == n && (n = fs(t, t._idDimIdx, e)), null == n && (n = Rg + e), n;
        }function vs(t) {
          return y(t) || (t = [t]), t;
        }function ms(t, e) {
          var n = t.dimensions,
              i = new Gg(d(n, t.getDimensionInfo, t), t.hostModel);us(i, t);for (var r = i._storage = {}, a = t._storage, o = 0; o < n.length; o++) {
            var s = n[o];a[s] && (l(e, s) >= 0 ? (r[s] = ys(a[s]), i._rawExtent[s] = _s(), i._extent[s] = null) : r[s] = a[s]);
          }return i;
        }function ys(t) {
          for (var e = new Array(t.length), n = 0; n < t.length; n++) {
            e[n] = hs(t[n]);
          }return e;
        }function _s() {
          return [1 / 0, -1 / 0];
        }function xs(t, e, i) {
          function r(t, e, n) {
            null != Ng.get(e) ? t.otherDims[e] = n : (t.coordDim = e, t.coordDimIndex = n, u.set(e, !0));
          }Nr.isInstance(e) || (e = Nr.seriesDataToSource(e)), i = i || {}, t = (t || []).slice();for (var s = (i.dimsDef || []).slice(), l = B(i.encodeDef), h = B(), u = B(), c = [], d = ws(e, t, s, i.dimCount), p = 0; p < d; p++) {
            var g = s[p] = a({}, w(s[p]) ? s[p] : { name: s[p] }),
                v = g.name,
                m = c[p] = { otherDims: {} };null != v && null == h.get(v) && (m.name = m.displayName = v, h.set(v, p)), null != g.type && (m.type = g.type), null != g.displayName && (m.displayName = g.displayName);
          }l.each(function (t, e) {
            if (1 === (t = cn(t).slice()).length && t[0] < 0) l.set(e, !1);else {
              var n = l.set(e, []);f(t, function (t, i) {
                x(t) && (t = h.get(t)), null != t && t < d && (n[i] = t, r(c[t], e, i));
              });
            }
          });var y = 0;f(t, function (t, e) {
            var i, t, a, s;if (x(t)) i = t, t = {};else {
              i = t.name;var h = t.ordinalMeta;t.ordinalMeta = null, (t = n(t)).ordinalMeta = h, a = t.dimsDef, s = t.otherDims, t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null;
            }var u = l.get(i);if (!1 !== u) {
              if (!(u = cn(u)).length) for (var d = 0; d < (a && a.length || 1); d++) {
                for (; y < c.length && null != c[y].coordDim;) {
                  y++;
                }y < c.length && u.push(y++);
              }f(u, function (e, n) {
                var l = c[e];if (r(o(l, t), i, n), null == l.name && a) {
                  var h = a[n];!w(h) && (h = { name: h }), l.name = l.displayName = h.name, l.defaultTooltip = h.defaultTooltip;
                }s && o(l.otherDims, s);
              });
            }
          });var _ = i.generateCoord,
              b = i.generateCoordCount,
              S = null != b;b = _ ? b || 1 : 0;for (var M = _ || "value", T = 0; T < d; T++) {
            null == (m = c[T] = c[T] || {}).coordDim && (m.coordDim = bs(M, u, S), m.coordDimIndex = 0, (!_ || b <= 0) && (m.isExtraCoord = !0), b--), null == m.name && (m.name = bs(m.coordDim, h)), null == m.type && Yr(e, T, m.name) && (m.type = "ordinal");
          }return c;
        }function ws(t, e, n, i) {
          var r = Math.max(t.dimensionsDetectCount || 1, e.length, n.length, i || 0);return f(e, function (t) {
            var e = t.dimsDef;e && (r = Math.max(r, e.length));
          }), r;
        }function bs(t, e, n) {
          if (n || null != e.get(t)) {
            for (var i = 0; null != e.get(t + i);) {
              i++;
            }t += i;
          }return e.set(t, !0), t;
        }function Ss(t, e, n) {
          var i,
              r,
              a,
              o,
              s = (n = n || {}).byIndex,
              l = n.stackedCoordDimension,
              h = !(!t || !t.get("stack"));if (f(e, function (t, n) {
            x(t) && (e[n] = t = { name: t }), h && !t.isExtraCoord && (s || i || !t.ordinalMeta || (i = t), r || "ordinal" === t.type || "time" === t.type || l && l !== t.coordDim || (r = t));
          }), !r || s || i || (s = !0), r) {
            a = "__\0ecstackresult", o = "__\0ecstackedover", i && (i.createInvertedIndices = !0);var u = r.coordDim,
                c = r.type,
                d = 0;f(e, function (t) {
              t.coordDim === u && d++;
            }), e.push({ name: a, coordDim: u, coordDimIndex: d, type: c, isExtraCoord: !0, isCalculationCoord: !0 }), d++, e.push({ name: o, coordDim: o, coordDimIndex: d, type: c, isExtraCoord: !0, isCalculationCoord: !0 });
          }return { stackedDimension: r && r.name, stackedByDimension: i && i.name, isStackedByIndex: s, stackedOverDimension: o, stackResultDimension: a };
        }function Ms(t, e) {
          return !!e && e === t.getCalculationInfo("stackedDimension");
        }function Ts(t, e) {
          return Ms(t, e) ? t.getCalculationInfo("stackResultDimension") : e;
        }function Is(t, e, n) {
          n = n || {}, Nr.isInstance(t) || (t = Nr.seriesDataToSource(t));var i,
              r = e.get("coordinateSystem"),
              a = na.get(r),
              o = Or(e);o && (i = d(o.coordSysDims, function (t) {
            var e = { name: t },
                n = o.axisMap.get(t);if (n) {
              var i = n.get("type");e.type = os(i);
            }return e;
          })), i || (i = a && (a.getDimensionsInfo ? a.getDimensionsInfo() : a.dimensions.slice()) || ["x", "y"]);var s,
              l,
              h = Yg(t, { coordDimensions: i, generateCoord: n.generateCoord });o && f(h, function (t, e) {
            var n = t.coordDim,
                i = o.categoryAxisMap.get(n);i && (null == s && (s = e), t.ordinalMeta = i.getOrdinalMeta()), null != t.otherDims.itemName && (l = !0);
          }), l || null == s || (h[s].otherDims.itemName = 0);var u = Ss(e, h),
              c = new Gg(h, e);c.setCalculationInfo(u);var p = null != s && ks(t) ? function (t, e, n, i) {
            return i === s ? n : this.defaultDimValueGetter(t, e, n, i);
          } : null;return c.hasItemOption = !1, c.initData(t, null, p), c;
        }function ks(t) {
          if (t.sourceFormat === qd) {
            var e = Cs(t.data || []);return null != e && !y(dn(e));
          }
        }function Cs(t) {
          for (var e = 0; e < t.length && null == t[e];) {
            e++;
          }return t[e];
        }function Ds(t, e) {
          if ("image" !== this.type) {
            var n = this.style,
                i = this.shape;i && "line" === i.symbolType ? n.stroke = t : this.__isEmptyBrush ? (n.stroke = t, n.fill = e || "#fff") : (n.fill && (n.fill = t), n.stroke && (n.stroke = t)), this.dirty(!1);
          }
        }function As(t, e, n, i, r, a, o) {
          var s = 0 === t.indexOf("empty");s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));var l;return l = 0 === t.indexOf("image://") ? Si(t.slice(8), new Ut(e, n, i, r), o ? "center" : "cover") : 0 === t.indexOf("path://") ? bi(t.slice(7), {}, new Ut(e, n, i, r), o ? "center" : "cover") : new Jg({ shape: { symbolType: t, x: e, y: n, width: i, height: r } }), l.__isEmptyBrush = s, l.setColor = Ds, l.setColor(a), l;
        }function Ls(t, e) {
          var n = t.mapDimension("defaultedLabel", !0),
              i = n.length;if (1 === i) return Ca(t, e, n[0]);if (i) {
            for (var r = [], a = 0; a < n.length; a++) {
              var o = Ca(t, e, n[a]);r.push(o);
            }return r.join(" ");
          }
        }function Ps(t, e, n) {
          Hu.call(this), this.updateData(t, e, n);
        }function Os(t) {
          return [t[0] / 2, t[1] / 2];
        }function Es(t, e) {
          this.parent.drift(t, e);
        }function Ns() {
          !Ri(this) && Rs.call(this);
        }function Bs() {
          !Ri(this) && zs.call(this);
        }function Rs() {
          if (!this.incremental && !this.useHoverLayer) {
            var t = this.__symbolOriginalScale,
                e = t[1] / t[0];this.animateTo({ scale: [Math.max(1.1 * t[0], t[0] + 3), Math.max(1.1 * t[1], t[1] + 3 * e)] }, 400, "elasticOut");
          }
        }function zs() {
          this.incremental || this.useHoverLayer || this.animateTo({ scale: this.__symbolOriginalScale }, 400, "elasticOut");
        }function Fs(t) {
          this.group = new Hu(), this._symbolCtor = t || Ps;
        }function Vs(t, e, n, i) {
          return e && !isNaN(e[0]) && !isNaN(e[1]) && !(i.isIgnore && i.isIgnore(n)) && !(i.clipShape && !i.clipShape.contain(e[0], e[1])) && "none" !== t.getItemVisual(n, "symbol");
        }function Ws(t) {
          return null == t || w(t) || (t = { isIgnore: t }), t || {};
        }function Hs(t) {
          var e = t.hostModel;return { itemStyle: e.getModel("itemStyle").getItemStyle(["color"]), hoverItemStyle: e.getModel("emphasis.itemStyle").getItemStyle(), symbolRotate: e.get("symbolRotate"), symbolOffset: e.get("symbolOffset"), hoverAnimation: e.get("hoverAnimation"), labelModel: e.getModel("label"), hoverLabelModel: e.getModel("emphasis.label"), cursorStyle: e.get("cursor") };
        }function Gs(t, e, n) {
          var i,
              r = t.getBaseAxis(),
              a = t.getOtherAxis(r),
              o = Xs(a, n),
              s = r.dim,
              l = a.dim,
              h = e.mapDimension(l),
              u = e.mapDimension(s),
              c = "x" === l || "radius" === l ? 1 : 0,
              f = d(t.dimensions, function (t) {
            return e.mapDimension(t);
          }),
              p = e.getCalculationInfo("stackResultDimension");return (i |= Ms(e, f[0])) && (f[0] = p), (i |= Ms(e, f[1])) && (f[1] = p), { dataDimsForPoint: f, valueStart: o, valueAxisDim: l, baseAxisDim: s, stacked: !!i, valueDim: h, baseDim: u, baseDataOffset: c, stackedOverDimension: e.getCalculationInfo("stackedOverDimension") };
        }function Xs(t, e) {
          var n = 0,
              i = t.scale.getExtent();return "start" === e ? n = i[0] : "end" === e ? n = i[1] : i[0] > 0 ? n = i[0] : i[1] < 0 && (n = i[1]), n;
        }function qs(t, e, n, i) {
          var r = NaN;t.stacked && (r = n.get(n.getCalculationInfo("stackedOverDimension"), i)), isNaN(r) && (r = t.valueStart);var a = t.baseDataOffset,
              o = [];return o[a] = n.get(t.baseDim, i), o[1 - a] = r, e.dataToPoint(o);
        }function Ys(t, e) {
          var n = [];return e.diff(t).add(function (t) {
            n.push({ cmd: "+", idx: t });
          }).update(function (t, e) {
            n.push({ cmd: "=", idx: e, idx1: t });
          }).remove(function (t) {
            n.push({ cmd: "-", idx: t });
          }).execute(), n;
        }function Us(t) {
          return isNaN(t[0]) || isNaN(t[1]);
        }function js(t, e, n, i, r, a, o, s, l, h, u) {
          return "none" !== h && h ? Zs.apply(this, arguments) : $s.apply(this, arguments);
        }function Zs(t, e, n, i, r, a, o, s, l, h, u) {
          for (var c = 0, f = n, d = 0; d < i; d++) {
            var p = e[f];if (f >= r || f < 0) break;if (Us(p)) {
              if (u) {
                f += a;continue;
              }break;
            }if (f === n) t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]);else if (l > 0) {
              var g = e[c],
                  v = "y" === h ? 1 : 0,
                  m = (p[v] - g[v]) * l;cv(dv, g), dv[v] = g[v] + m, cv(pv, p), pv[v] = p[v] - m, t.bezierCurveTo(dv[0], dv[1], pv[0], pv[1], p[0], p[1]);
            } else t.lineTo(p[0], p[1]);c = f, f += a;
          }return d;
        }function $s(t, e, n, i, r, a, o, s, l, h, u) {
          for (var c = 0, f = n, d = 0; d < i; d++) {
            var p = e[f];if (f >= r || f < 0) break;if (Us(p)) {
              if (u) {
                f += a;continue;
              }break;
            }if (f === n) t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]), cv(dv, p);else if (l > 0) {
              var g = f + a,
                  v = e[g];if (u) for (; v && Us(e[g]);) {
                v = e[g += a];
              }var m = .5,
                  y = e[c];if (!(v = e[g]) || Us(v)) cv(pv, p);else {
                Us(v) && !u && (v = p), W(fv, v, y);var _, x;if ("x" === h || "y" === h) {
                  var w = "x" === h ? 0 : 1;_ = Math.abs(p[w] - y[w]), x = Math.abs(p[w] - v[w]);
                } else _ = ru(p, y), x = ru(p, v);uv(pv, p, fv, -l * (1 - (m = x / (x + _))));
              }lv(dv, dv, s), hv(dv, dv, o), lv(pv, pv, s), hv(pv, pv, o), t.bezierCurveTo(dv[0], dv[1], pv[0], pv[1], p[0], p[1]), uv(dv, p, fv, l * m);
            } else t.lineTo(p[0], p[1]);c = f, f += a;
          }return d;
        }function Qs(t, e) {
          var n = [1 / 0, 1 / 0],
              i = [-1 / 0, -1 / 0];if (e) for (var r = 0; r < t.length; r++) {
            var a = t[r];a[0] < n[0] && (n[0] = a[0]), a[1] < n[1] && (n[1] = a[1]), a[0] > i[0] && (i[0] = a[0]), a[1] > i[1] && (i[1] = a[1]);
          }return { min: e ? n : i, max: e ? i : n };
        }function Ks(t, e) {
          if (t.length === e.length) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n],
                  r = e[n];if (i[0] !== r[0] || i[1] !== r[1]) return;
            }return !0;
          }
        }function Js(t) {
          return "number" == typeof t ? t : t ? .5 : 0;
        }function tl(t) {
          var e = t.getGlobalExtent();if (t.onBand) {
            var n = t.getBandWidth() / 2 - 1,
                i = e[1] > e[0] ? 1 : -1;e[0] += i * n, e[1] -= i * n;
          }return e;
        }function el(t, e, n) {
          if (!n.valueDim) return [];for (var i = [], r = 0, a = e.count(); r < a; r++) {
            i.push(qs(n, t, e, r));
          }return i;
        }function nl(t, e, n, i) {
          var r = tl(t.getAxis("x")),
              a = tl(t.getAxis("y")),
              o = t.getBaseAxis().isHorizontal(),
              s = Math.min(r[0], r[1]),
              l = Math.min(a[0], a[1]),
              h = Math.max(r[0], r[1]) - s,
              u = Math.max(a[0], a[1]) - l;if (n) s -= .5, h += .5, l -= .5, u += .5;else {
            var c = i.get("lineStyle.width") || 2,
                f = i.get("clipOverflow") ? c / 2 : Math.max(h, u);o ? (l -= f, u += 2 * f) : (s -= f, h += 2 * f);
          }var d = new nd({ shape: { x: s, y: l, width: h, height: u } });return e && (d.shape[o ? "width" : "height"] = 0, er(d, { shape: { width: h, height: u } }, i)), d;
        }function il(t, e, n, i) {
          var r = t.getAngleAxis(),
              a = t.getRadiusAxis().getExtent().slice();a[0] > a[1] && a.reverse();var o = r.getExtent(),
              s = Math.PI / 180;n && (a[0] -= .5, a[1] += .5);var l = new $f({ shape: { cx: cr(t.cx, 1), cy: cr(t.cy, 1), r0: cr(a[0], 1), r: cr(a[1], 1), startAngle: -o[0] * s, endAngle: -o[1] * s, clockwise: r.inverse } });return e && (l.shape.endAngle = -o[0] * s, er(l, { shape: { endAngle: -o[1] * s } }, i)), l;
        }function rl(t, e, n, i) {
          return "polar" === t.type ? il(t, e, n, i) : nl(t, e, n, i);
        }function al(t, e, n) {
          for (var i = e.getBaseAxis(), r = "x" === i.dim || "radius" === i.dim ? 0 : 1, a = [], o = 0; o < t.length - 1; o++) {
            var s = t[o + 1],
                l = t[o];a.push(l);var h = [];switch (n) {case "end":
                h[r] = s[r], h[1 - r] = l[1 - r], a.push(h);break;case "middle":
                var u = (l[r] + s[r]) / 2,
                    c = [];h[r] = c[r] = u, h[1 - r] = l[1 - r], c[1 - r] = s[1 - r], a.push(h), a.push(c);break;default:
                h[r] = l[r], h[1 - r] = s[1 - r], a.push(h);}
          }return t[o] && a.push(t[o]), a;
        }function ol(t, e) {
          var n = t.getVisual("visualMeta");if (n && n.length && t.count() && "cartesian2d" === e.type) {
            for (var i, r, a = n.length - 1; a >= 0; a--) {
              var o = n[a].dimension,
                  s = t.dimensions[o],
                  l = t.getDimensionInfo(s);if ("x" === (i = l && l.coordDim) || "y" === i) {
                r = n[a];break;
              }
            }if (r) {
              var h = e.getAxis(i),
                  u = d(r.stops, function (t) {
                return { coord: h.toGlobalCoord(h.dataToCoord(t.value)), color: t.color };
              }),
                  c = u.length,
                  p = r.outerColors.slice();c && u[0].coord > u[c - 1].coord && (u.reverse(), p.reverse());var g = u[0].coord - 10,
                  v = u[c - 1].coord + 10,
                  m = v - g;if (m < .001) return "transparent";f(u, function (t) {
                t.offset = (t.coord - g) / m;
              }), u.push({ offset: c ? u[c - 1].offset : .5, color: p[1] || "transparent" }), u.unshift({ offset: c ? u[0].offset : .5, color: p[0] || "transparent" });var y = new hd(0, 0, 0, 0, u, !0);return y[i] = g, y[i + "2"] = v, y;
            }
          }
        }function sl(t, e, n) {
          var i = t.get("showAllSymbol"),
              r = "auto" === i;if (!i || r) {
            var a = n.getAxesByScale("ordinal")[0];if (a && (!r || !ll(a, e))) {
              var o = e.mapDimension(a.dim),
                  s = {};return f(a.getViewLabels(), function (t) {
                s[t.tickValue] = 1;
              }), function (t) {
                return !s.hasOwnProperty(e.get(o, t));
              };
            }
          }
        }function ll(t, e) {
          var n = t.getExtent(),
              i = Math.abs(n[1] - n[0]) / t.scale.count();isNaN(i) && (i = 0);for (var r = e.count(), a = Math.max(1, Math.round(r / 5)), o = 0; o < r; o += a) {
            if (1.5 * Ps.getSymbolSize(e, o)[t.isHorizontal() ? 1 : 0] > i) return !1;
          }return !0;
        }function hl(t) {
          this._setting = t || {}, this._extent = [1 / 0, -1 / 0], this._interval = 0, this.init && this.init.apply(this, arguments);
        }function ul(t) {
          this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this._map;
        }function cl(t) {
          return t._map || (t._map = B(t.categories));
        }function fl(t) {
          return w(t) && null != t.value ? t.value : t + "";
        }function dl(t, e, n, i) {
          var r = {},
              a = t[1] - t[0],
              o = r.interval = xr(a / e, !0);null != n && o < n && (o = r.interval = n), null != i && o > i && (o = r.interval = i);var s = r.intervalPrecision = pl(o);return vl(r.niceTickExtent = [bv(Math.ceil(t[0] / o) * o, s), bv(Math.floor(t[1] / o) * o, s)], t), r;
        }function pl(t) {
          return fr(t) + 2;
        }function gl(t, e, n) {
          t[e] = Math.max(Math.min(t[e], n[1]), n[0]);
        }function vl(t, e) {
          !isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), gl(t, 0, e), gl(t, 1, e), t[0] > t[1] && (t[0] = t[1]);
        }function ml(t, e, n, i) {
          var r = [];if (!t) return r;e[0] < n[0] && r.push(e[0]);for (var a = n[0]; a <= n[1] && (r.push(a), (a = bv(a + t, i)) !== r[r.length - 1]);) {
            if (r.length > 1e4) return [];
          }return e[1] > (r.length ? r[r.length - 1] : n[1]) && r.push(e[1]), r;
        }function yl(t) {
          return t.get("stack") || Tv + t.seriesIndex;
        }function _l(t) {
          return t.dim + t.index;
        }function xl(t, e) {
          var n = [];return e.eachSeriesByType(t, function (t) {
            Ml(t) && !Tl(t) && n.push(t);
          }), n;
        }function wl(t) {
          var e = [];return f(t, function (t) {
            var n = t.getData(),
                i = t.coordinateSystem.getBaseAxis(),
                r = i.getExtent(),
                a = "category" === i.type ? i.getBandWidth() : Math.abs(r[1] - r[0]) / n.count(),
                o = ur(t.get("barWidth"), a),
                s = ur(t.get("barMaxWidth"), a),
                l = t.get("barGap"),
                h = t.get("barCategoryGap");e.push({ bandWidth: a, barWidth: o, barMaxWidth: s, barGap: l, barCategoryGap: h, axisKey: _l(i), stackId: yl(t) });
          }), bl(e);
        }function bl(t) {
          var e = {};f(t, function (t, n) {
            var i = t.axisKey,
                r = t.bandWidth,
                a = e[i] || { bandWidth: r, remainedWidth: r, autoWidthCount: 0, categoryGap: "20%", gap: "30%", stacks: {} },
                o = a.stacks;e[i] = a;var s = t.stackId;o[s] || a.autoWidthCount++, o[s] = o[s] || { width: 0, maxWidth: 0 };var l = t.barWidth;l && !o[s].width && (o[s].width = l, l = Math.min(a.remainedWidth, l), a.remainedWidth -= l);var h = t.barMaxWidth;h && (o[s].maxWidth = h);var u = t.barGap;null != u && (a.gap = u);var c = t.barCategoryGap;null != c && (a.categoryGap = c);
          });var n = {};return f(e, function (t, e) {
            n[e] = {};var i = t.stacks,
                r = t.bandWidth,
                a = ur(t.categoryGap, r),
                o = ur(t.gap, 1),
                s = t.remainedWidth,
                l = t.autoWidthCount,
                h = (s - a) / (l + (l - 1) * o);h = Math.max(h, 0), f(i, function (t, e) {
              var n = t.maxWidth;n && n < h && (n = Math.min(n, s), t.width && (n = Math.min(n, t.width)), s -= n, t.width = n, l--);
            }), h = (s - a) / (l + (l - 1) * o), h = Math.max(h, 0);var u,
                c = 0;f(i, function (t, e) {
              t.width || (t.width = h), u = t, c += t.width * (1 + o);
            }), u && (c -= u.width * o);var d = -c / 2;f(i, function (t, i) {
              n[e][i] = n[e][i] || { offset: d, width: t.width }, d += t.width * (1 + o);
            });
          }), n;
        }function Sl(t, e, n) {
          if (t && e) {
            var i = t[_l(e)];return null != i && null != n && (i = i[yl(n)]), i;
          }
        }function Ml(t) {
          return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type;
        }function Tl(t) {
          return t.pipelineContext && t.pipelineContext.large;
        }function Il(t, e, n) {
          var i,
              r,
              a = e.getGlobalExtent();a[0] > a[1] ? (i = a[1], r = a[0]) : (i = a[0], r = a[1]);var o = e.toGlobalCoord(e.dataToCoord(0));return o < i && (o = i), o > r && (o = r), o;
        }function kl(t, e) {
          return Rv(t, Bv(e));
        }function Cl(t, e) {
          var n,
              i,
              r,
              a = t.type,
              o = e.getMin(),
              s = e.getMax(),
              l = null != o,
              h = null != s,
              u = t.getExtent();"ordinal" === a ? n = e.getCategories().length : (y(i = e.get("boundaryGap")) || (i = [i || 0, i || 0]), "boolean" == typeof i[0] && (i = [0, 0]), i[0] = ur(i[0], 1), i[1] = ur(i[1], 1), r = u[1] - u[0] || Math.abs(u[0])), null == o && (o = "ordinal" === a ? n ? 0 : NaN : u[0] - i[0] * r), null == s && (s = "ordinal" === a ? n ? n - 1 : NaN : u[1] + i[1] * r), "dataMin" === o ? o = u[0] : "function" == typeof o && (o = o({ min: u[0], max: u[1] })), "dataMax" === s ? s = u[1] : "function" == typeof s && (s = s({ min: u[0], max: u[1] })), (null == o || !isFinite(o)) && (o = NaN), (null == s || !isFinite(s)) && (s = NaN), t.setBlank(T(o) || T(s) || "ordinal" === a && !t.getOrdinalMeta().categories.length), e.getNeedCrossZero() && (o > 0 && s > 0 && !l && (o = 0), o < 0 && s < 0 && !h && (s = 0));var c = e.ecModel;if (c && "time" === a) {
            var d,
                p = xl("bar", c);if (f(p, function (t) {
              d |= t.getBaseAxis() === e.axis;
            }), d) {
              var g = wl(p),
                  v = Dl(o, s, e, g);o = v.min, s = v.max;
            }
          }return [o, s];
        }function Dl(t, e, n, i) {
          var r = n.axis.getExtent(),
              a = r[1] - r[0],
              o = Sl(i, n.axis);if (void 0 === o) return { min: t, max: e };var s = 1 / 0;f(o, function (t) {
            s = Math.min(t.offset, s);
          });var l = -1 / 0;f(o, function (t) {
            l = Math.max(t.offset + t.width, l);
          }), s = Math.abs(s), l = Math.abs(l);var h = s + l,
              u = e - t,
              c = u / (1 - (s + l) / a) - u;return e += c * (l / h), t -= c * (s / h), { min: t, max: e };
        }function Al(t, e) {
          var n = Cl(t, e),
              i = null != e.getMin(),
              r = null != e.getMax(),
              a = e.get("splitNumber");"log" === t.type && (t.base = e.get("logBase"));var o = t.type;t.setExtent(n[0], n[1]), t.niceExtent({ splitNumber: a, fixMin: i, fixMax: r, minInterval: "interval" === o || "time" === o ? e.get("minInterval") : null, maxInterval: "interval" === o || "time" === o ? e.get("maxInterval") : null });var s = e.get("interval");null != s && t.setInterval && t.setInterval(s);
        }function Ll(t, e) {
          if (e = e || t.get("type")) switch (e) {case "category":
              return new wv(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [1 / 0, -1 / 0]);case "value":
              return new Mv();default:
              return (hl.getClass(e) || Mv).create(t);}
        }function Pl(t) {
          var e = t.scale.getExtent(),
              n = e[0],
              i = e[1];return !(n > 0 && i > 0 || n < 0 && i < 0);
        }function Ol(t) {
          var e = t.getLabelModel().get("formatter"),
              n = "category" === t.type ? t.scale.getExtent()[0] : null;return "string" == typeof e ? e = function (e) {
            return function (n) {
              return n = t.scale.getLabel(n), e.replace("{value}", null != n ? n : "");
            };
          }(e) : "function" == typeof e ? function (i, r) {
            return null != n && (r = i - n), e(El(t, i), r);
          } : function (e) {
            return t.scale.getLabel(e);
          };
        }function El(t, e) {
          return "category" === t.type ? t.scale.getLabel(e) : e;
        }function Nl(t) {
          var e = t.model,
              n = t.scale;if (e.get("axisLabel.show") && !n.isBlank()) {
            var i,
                r,
                a = "category" === t.type,
                o = n.getExtent();r = a ? n.count() : (i = n.getTicks()).length;var s,
                l = t.getLabelModel(),
                h = Ol(t),
                u = 1;r > 40 && (u = Math.ceil(r / 40));for (var c = 0; c < r; c += u) {
              var f = h(i ? i[c] : o[0] + c),
                  d = Bl(l.getTextRect(f), l.get("rotate") || 0);s ? s.union(d) : s = d;
            }return s;
          }
        }function Bl(t, e) {
          var n = e * Math.PI / 180,
              i = t.plain(),
              r = i.width,
              a = i.height,
              o = r * Math.cos(n) + a * Math.sin(n),
              s = r * Math.sin(n) + a * Math.cos(n);return new Ut(i.x, i.y, o, s);
        }function Rl(t) {
          return this._axes[t];
        }function zl(t) {
          Gv.call(this, t);
        }function Fl(t) {
          return "category" === t.type ? Wl(t) : Xl(t);
        }function Vl(t, e) {
          return "category" === t.type ? Gl(t, e) : { ticks: t.scale.getTicks() };
        }function Wl(t) {
          var e = t.getLabelModel(),
              n = Hl(t, e);return !e.get("show") || t.scale.isBlank() ? { labels: [], labelCategoryInterval: n.labelCategoryInterval } : n;
        }function Hl(t, e) {
          var n = ql(t, "labels"),
              i = Jl(e),
              r = Yl(n, i);if (r) return r;var a, o;return a = _(i) ? Kl(t, i) : Ql(t, o = "auto" === i ? jl(t) : i), Ul(n, i, { labels: a, labelCategoryInterval: o });
        }function Gl(t, e) {
          var n = ql(t, "ticks"),
              i = Jl(e),
              r = Yl(n, i);if (r) return r;var a, o;if (e.get("show") && !t.scale.isBlank() || (a = []), _(i)) a = Kl(t, i, !0);else if ("auto" === i) {
            var s = Hl(t, t.getLabelModel());o = s.labelCategoryInterval, a = d(s.labels, function (t) {
              return t.tickValue;
            });
          } else a = Ql(t, o = i, !0);return Ul(n, i, { ticks: a, tickCategoryInterval: o });
        }function Xl(t) {
          var e = t.scale.getTicks(),
              n = Ol(t);return { labels: d(e, function (e, i) {
              return { formattedLabel: n(e, i), rawLabel: t.scale.getLabel(e), tickValue: e };
            }) };
        }function ql(t, e) {
          return Xv(t)[e] || (Xv(t)[e] = []);
        }function Yl(t, e) {
          for (var n = 0; n < t.length; n++) {
            if (t[n].key === e) return t[n].value;
          }
        }function Ul(t, e, n) {
          return t.push({ key: e, value: n }), n;
        }function jl(t) {
          var e = Xv(t).autoInterval;return null != e ? e : Xv(t).autoInterval = t.calculateCategoryInterval();
        }function Zl(t) {
          var e = $l(t),
              n = Ol(t),
              i = (e.axisRotate - e.labelRotate) / 180 * Math.PI,
              r = t.scale,
              a = r.getExtent(),
              o = r.count();if (a[1] - a[0] < 1) return 0;var s = 1;o > 40 && (s = Math.max(1, Math.floor(o / 40)));for (var l = a[0], h = t.dataToCoord(l + 1) - t.dataToCoord(l), u = Math.abs(h * Math.cos(i)), c = Math.abs(h * Math.sin(i)), f = 0, d = 0; l <= a[1]; l += s) {
            var p = 0,
                g = 0,
                v = fe(n(l), e.font, "center", "top");p = 1.3 * v.width, g = 1.3 * v.height, f = Math.max(f, p, 7), d = Math.max(d, g, 7);
          }var m = f / u,
              y = d / c;isNaN(m) && (m = 1 / 0), isNaN(y) && (y = 1 / 0);var _ = Math.max(0, Math.floor(Math.min(m, y))),
              x = Xv(t.model),
              w = x.lastAutoInterval,
              b = x.lastTickCount;return null != w && null != b && Math.abs(w - _) <= 1 && Math.abs(b - o) <= 1 && w > _ ? _ = w : (x.lastTickCount = o, x.lastAutoInterval = _), _;
        }function $l(t) {
          var e = t.getLabelModel();return { axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0, labelRotate: e.get("rotate") || 0, font: e.getFont() };
        }function Ql(t, e, n) {
          function i(t) {
            l.push(n ? t : { formattedLabel: r(t), rawLabel: a.getLabel(t), tickValue: t });
          }var r = Ol(t),
              a = t.scale,
              o = a.getExtent(),
              s = t.getLabelModel(),
              l = [],
              h = Math.max((e || 0) + 1, 1),
              u = o[0],
              c = a.count();0 !== u && h > 1 && c / h > 2 && (u = Math.round(Math.ceil(u / h) * h));var f = { min: s.get("showMinLabel"), max: s.get("showMaxLabel") };f.min && u !== o[0] && i(o[0]);for (var d = u; d <= o[1]; d += h) {
            i(d);
          }return f.max && d !== o[1] && i(o[1]), l;
        }function Kl(t, e, n) {
          var i = t.scale,
              r = Ol(t),
              a = [];return f(i.getTicks(), function (t) {
            var o = i.getLabel(t);e(t, o) && a.push(n ? t : { formattedLabel: r(t), rawLabel: o, tickValue: t });
          }), a;
        }function Jl(t) {
          var e = t.get("interval");return null == e ? "auto" : e;
        }function th(t, e) {
          var n = (t[1] - t[0]) / e / 2;t[0] += n, t[1] -= n;
        }function eh(t, e, n, i, r) {
          function a(t, e) {
            return u ? t > e : t < e;
          }var o = e.length;if (t.onBand && !i && o) {
            var s,
                l = t.getExtent();if (1 === o) e[0].coord = l[0], s = e[1] = { coord: l[0] };else {
              var h = e[1].coord - e[0].coord;f(e, function (t) {
                t.coord -= h / 2;var e = e || 0;e % 2 > 0 && (t.coord -= h / (2 * (e + 1)));
              }), s = { coord: e[o - 1].coord + h }, e.push(s);
            }var u = l[0] > l[1];a(e[0].coord, l[0]) && (r ? e[0].coord = l[0] : e.shift()), r && a(l[0], e[0].coord) && e.unshift({ coord: l[0] }), a(l[1], s.coord) && (r ? s.coord = l[1] : e.pop()), r && a(s.coord, l[1]) && e.push({ coord: l[1] });
          }
        }function nh(t, e) {
          return e.type || (e.data ? "category" : "value");
        }function ih(t, e, n) {
          return t.getCoordSysModel() === e;
        }function rh(t, e, n) {
          this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, n), this.model = t;
        }function ah(t, e, n, i) {
          function r(t) {
            return t.dim + "_" + t.index;
          }n.getAxesOnZeroOf = function () {
            return a ? [a] : [];
          };var a,
              o = t[e],
              s = n.model,
              l = s.get("axisLine.onZero"),
              h = s.get("axisLine.onZeroAxisIndex");if (l) {
            if (null != h) oh(o[h]) && (a = o[h]);else for (var u in o) {
              if (o.hasOwnProperty(u) && oh(o[u]) && !i[r(o[u])]) {
                a = o[u];break;
              }
            }a && (i[r(a)] = !0);
          }
        }function oh(t) {
          return t && "category" !== t.type && "time" !== t.type && Pl(t);
        }function sh(t, e) {
          var n = t.getExtent(),
              i = n[0] + n[1];t.toGlobalCoord = "x" === t.dim ? function (t) {
            return t + e;
          } : function (t) {
            return i - t + e;
          }, t.toLocalCoord = "x" === t.dim ? function (t) {
            return t - e;
          } : function (t) {
            return i - t + e;
          };
        }function lh(t, e) {
          return d(nm, function (e) {
            return t.getReferringComponents(e)[0];
          });
        }function hh(t) {
          return "cartesian2d" === t.get("coordinateSystem");
        }function uh(t) {
          var e = { componentType: t.mainType, componentIndex: t.componentIndex };return e[t.mainType + "Index"] = t.componentIndex, e;
        }function ch(t, e, n, i) {
          var r,
              a,
              o = gr(n - t.rotation),
              s = i[0] > i[1],
              l = "start" === e && !s || "start" !== e && s;return vr(o - im / 2) ? (a = l ? "bottom" : "top", r = "center") : vr(o - 1.5 * im) ? (a = l ? "top" : "bottom", r = "center") : (a = "middle", r = o < 1.5 * im && o > im / 2 ? l ? "left" : "right" : l ? "right" : "left"), { rotation: o, textAlign: r, textVerticalAlign: a };
        }function fh(t) {
          var e = t.get("tooltip");return t.get("silent") || !(t.get("triggerEvent") || e && e.show);
        }function dh(t, e, n) {
          var i = t.get("axisLabel.showMinLabel"),
              r = t.get("axisLabel.showMaxLabel");e = e || [], n = n || [];var a = e[0],
              o = e[1],
              s = e[e.length - 1],
              l = e[e.length - 2],
              h = n[0],
              u = n[1],
              c = n[n.length - 1],
              f = n[n.length - 2];!1 === i ? (ph(a), ph(h)) : gh(a, o) && (i ? (ph(o), ph(u)) : (ph(a), ph(h))), !1 === r ? (ph(s), ph(c)) : gh(l, s) && (r ? (ph(l), ph(f)) : (ph(s), ph(c)));
        }function ph(t) {
          t && (t.ignore = !0);
        }function gh(t, e, n) {
          var i = t && t.getBoundingRect().clone(),
              r = e && e.getBoundingRect().clone();if (i && r) {
            var a = ut([]);return pt(a, a, -t.rotation), i.applyTransform(ft([], a, t.getLocalTransform())), r.applyTransform(ft([], a, e.getLocalTransform())), i.intersect(r);
          }
        }function vh(t) {
          return "middle" === t || "center" === t;
        }function mh(t, e, n) {
          var i = e.axis;if (e.get("axisTick.show") && !i.scale.isBlank()) {
            for (var r = e.getModel("axisTick"), a = r.getModel("lineStyle"), s = r.get("length"), l = i.getTicksCoords(), h = [], u = [], c = t._transform, f = [], d = 0; d < l.length; d++) {
              var p = l[d].coord;h[0] = p, h[1] = 0, u[0] = p, u[1] = n.tickDirection * s, c && (U(h, h, c), U(u, u, c));var g = new id(Ii({ anid: "tick_" + l[d].tickValue, shape: { x1: h[0], y1: h[1], x2: u[0], y2: u[1] }, style: o(a.getLineStyle(), { stroke: e.get("axisLine.lineStyle.color") }), z2: 2, silent: !0 }));t.group.add(g), f.push(g);
            }return f;
          }
        }function yh(t, e, n) {
          var i = e.axis;if (I(n.axisLabelShow, e.get("axisLabel.show")) && !i.scale.isBlank()) {
            var r = e.getModel("axisLabel"),
                a = r.get("margin"),
                o = i.getViewLabels(),
                s = (I(n.labelRotate, r.get("rotate")) || 0) * im / 180,
                l = om(n.rotation, s, n.labelDirection),
                h = e.getCategories(!0),
                u = [],
                c = fh(e),
                d = e.get("triggerEvent");return f(o, function (o, s) {
              var f = o.tickValue,
                  p = o.formattedLabel,
                  g = o.rawLabel,
                  v = r;h && h[f] && h[f].textStyle && (v = new rr(h[f].textStyle, r, e.ecModel));var m = v.getTextColor() || e.get("axisLine.lineStyle.color"),
                  y = [i.dataToCoord(f), n.labelOffset + n.labelDirection * a],
                  _ = new Yf({ anid: "label_" + f, position: y, rotation: l.rotation, silent: c, z2: 10 });qi(_.style, v, { text: p, textAlign: v.getShallow("align", !0) || l.textAlign, textVerticalAlign: v.getShallow("verticalAlign", !0) || v.getShallow("baseline", !0) || l.textVerticalAlign, textFill: "function" == typeof m ? m("category" === i.type ? g : "value" === i.type ? f + "" : f, s) : m }), d && (_.eventData = uh(e), _.eventData.targetType = "axisLabel", _.eventData.value = g), t._dumbGroup.add(_), _.updateTransform(), u.push(_), t.group.add(_), _.decomposeTransform();
            }), u;
          }
        }function _h(t) {
          var e = xh(t);if (e) {
            var n = e.axisPointerModel,
                i = e.axis.scale,
                r = n.option,
                a = n.get("status"),
                o = n.get("value");null != o && (o = i.parse(o));var s = bh(n);null == a && (r.status = s ? "show" : "hide");var l = i.getExtent().slice();l[0] > l[1] && l.reverse(), (null == o || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), r.value = o, s && (r.status = e.axis.scale.isBlank() ? "hide" : "show");
          }
        }function xh(t) {
          var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;return e && e.axesInfo[Sh(t)];
        }function wh(t) {
          var e = xh(t);return e && e.axisPointerModel;
        }function bh(t) {
          return !!t.get("handle.show");
        }function Sh(t) {
          return t.type + "||" + t.id;
        }function Mh(t, e, n, i, r, a) {
          var o = sm.getAxisPointerClass(t.axisPointerClass);if (o) {
            var s = wh(e);s ? (t._axisPointer || (t._axisPointer = new o())).render(e, s, i, a) : Th(t, i);
          }
        }function Th(t, e, n) {
          var i = t._axisPointer;i && i.dispose(e, n), t._axisPointer = null;
        }function Ih(t, e, n) {
          n = n || {};var i = t.coordinateSystem,
              r = e.axis,
              a = {},
              o = r.getAxesOnZeroOf()[0],
              s = r.position,
              l = o ? "onZero" : s,
              h = r.dim,
              u = i.getRect(),
              c = [u.x, u.x + u.width, u.y, u.y + u.height],
              f = { left: 0, right: 1, top: 0, bottom: 1, onZero: 2 },
              d = e.get("offset") || 0,
              p = "x" === h ? [c[2] - d, c[3] + d] : [c[0] - d, c[1] + d];if (o) {
            var g = o.toGlobalCoord(o.dataToCoord(0));p[f.onZero] = Math.max(Math.min(g, p[1]), p[0]);
          }a.position = ["y" === h ? p[f[l]] : c[0], "x" === h ? p[f[l]] : c[3]], a.rotation = Math.PI / 2 * ("x" === h ? 0 : 1);var v = { top: -1, bottom: 1, left: -1, right: 1 };a.labelDirection = a.tickDirection = a.nameDirection = v[s], a.labelOffset = o ? p[f[s]] - p[f.onZero] : 0, e.get("axisTick.inside") && (a.tickDirection = -a.tickDirection), I(n.labelInside, e.get("axisLabel.inside")) && (a.labelDirection = -a.labelDirection);var m = e.get("axisLabel.rotate");return a.labelRotate = "top" === l ? -m : m, a.z2 = 1, a;
        }function kh(t, e, n, i, r, a, o) {
          Xi(t, e, n.getModel("label"), n.getModel("emphasis.label"), { labelFetcher: r, labelDataIndex: a, defaultText: Ls(r.getData(), a), isRectText: !0, autoColor: i }), Ch(t), Ch(e);
        }function Ch(t, e) {
          "outside" === t.textPosition && (t.textPosition = e);
        }function Dh(t, e, n) {
          n.style.text = null, tr(n, { shape: { width: 0 } }, e, t, function () {
            n.parent && n.parent.remove(n);
          });
        }function Ah(t, e, n) {
          n.style.text = null, tr(n, { shape: { r: n.shape.r0 } }, e, t, function () {
            n.parent && n.parent.remove(n);
          });
        }function Lh(t, e, n, i, r, a, s, l) {
          var h = e.getItemVisual(n, "color"),
              u = e.getItemVisual(n, "opacity"),
              c = i.getModel("itemStyle"),
              f = i.getModel("emphasis.itemStyle").getBarItemStyle();l || t.setShape("r", c.get("barBorderRadius") || 0), t.useStyle(o({ fill: h, opacity: u }, c.getBarItemStyle()));var d = i.getShallow("cursor");d && t.attr("cursor", d);var p = s ? r.height > 0 ? "bottom" : "top" : r.width > 0 ? "left" : "right";l || kh(t.style, f, i, h, a, n, p), Hi(t, f);
        }function Ph(t, e) {
          var n = t.get(pm) || 0;return Math.min(n, Math.abs(e.width), Math.abs(e.height));
        }function Oh(t, e, n) {
          var i = t.getData(),
              r = [],
              a = i.getLayout("valueAxisHorizontal") ? 1 : 0;r[1 - a] = i.getLayout("valueAxisStart");var o = new mm({ shape: { points: i.getLayout("largePoints") }, incremental: !!n, __startPoint: r, __valueIdx: a });e.add(o), Eh(o, t, i);
        }function Eh(t, e, n) {
          var i = n.getVisual("borderColor") || n.getVisual("color"),
              r = e.getModel("itemStyle").getItemStyle(["color", "borderColor"]);t.useStyle(r), t.style.fill = null, t.style.stroke = i, t.style.lineWidth = n.getLayout("barWidth");
        }function Nh(t, e, n, i) {
          var r = e.getData(),
              a = this.dataIndex,
              o = r.getName(a),
              s = e.get("selectedOffset");i.dispatchAction({ type: "pieToggleSelect", from: t, name: o, seriesId: e.id }), r.each(function (t) {
            Bh(r.getItemGraphicEl(t), r.getItemLayout(t), e.isSelected(r.getName(t)), s, n);
          });
        }function Bh(t, e, n, i, r) {
          var a = (e.startAngle + e.endAngle) / 2,
              o = Math.cos(a),
              s = Math.sin(a),
              l = n ? i : 0,
              h = [o * l, s * l];r ? t.animate().when(200, { position: h }).start("bounceOut") : t.attr("position", h);
        }function Rh(t, e) {
          function n() {
            a.ignore = a.hoverIgnore, o.ignore = o.hoverIgnore;
          }function i() {
            a.ignore = a.normalIgnore, o.ignore = o.normalIgnore;
          }Hu.call(this);var r = new $f({ z2: 2 }),
              a = new ed(),
              o = new Yf();this.add(r), this.add(a), this.add(o), this.updateData(t, e, !0), this.on("emphasis", n).on("normal", i).on("mouseover", n).on("mouseout", i);
        }function zh(t, e, n, i, r, a, o) {
          function s(e, n) {
            for (var i = e; i >= 0 && (t[i].y -= n, !(i > 0 && t[i].y > t[i - 1].y + t[i - 1].height)); i--) {}
          }function l(t, e, n, i, r, a) {
            for (var o = e ? Number.MAX_VALUE : 0, s = 0, l = t.length; s < l; s++) {
              if ("center" !== t[s].position) {
                var h = Math.abs(t[s].y - i),
                    u = t[s].len,
                    c = t[s].len2,
                    f = h < r + u ? Math.sqrt((r + u + c) * (r + u + c) - h * h) : Math.abs(t[s].x - n);e && f >= o && (f = o - 10), !e && f <= o && (f = o + 10), t[s].x = n + f * a, o = f;
              }
            }
          }t.sort(function (t, e) {
            return t.y - e.y;
          });for (var h, u = 0, c = t.length, f = [], d = [], p = 0; p < c; p++) {
            (h = t[p].y - u) < 0 && function (e, n, i, r) {
              for (var a = e; a < n; a++) {
                if (t[a].y += i, a > e && a + 1 < n && t[a + 1].y > t[a].y + t[a].height) return void s(a, i / 2);
              }s(n - 1, i / 2);
            }(p, c, -h), u = t[p].y + t[p].height;
          }o - u < 0 && s(c - 1, u - o);for (p = 0; p < c; p++) {
            t[p].y >= n ? d.push(t[p]) : f.push(t[p]);
          }l(f, !1, e, n, i, r), l(d, !0, e, n, i, r);
        }function Fh(t, e, n, i, r, a) {
          for (var o = [], s = [], l = 0; l < t.length; l++) {
            t[l].x < e ? o.push(t[l]) : s.push(t[l]);
          }zh(s, e, n, i, 1, r, a), zh(o, e, n, i, -1, r, a);for (l = 0; l < t.length; l++) {
            var h = t[l].linePoints;if (h) {
              var u = h[1][0] - h[2][0];t[l].x < e ? h[2][0] = t[l].x + 3 : h[2][0] = t[l].x - 3, h[1][1] = h[2][1] = t[l].y, h[1][0] = h[2][0] + u;
            }
          }
        }var Vh = 2311,
            Wh = function Wh() {
          return Vh++;
        },
            Hh = {},
            Gh = Hh = "object" == (typeof wx === "undefined" ? "undefined" : _typeof(wx)) && "function" == typeof wx.getSystemInfoSync ? { browser: {}, os: {}, node: !1, wxa: !0, canvasSupported: !0, svgSupported: !1, touchEventsSupported: !0, domSupported: !1 } : "undefined" == typeof document && "undefined" != typeof self ? { browser: {}, os: {}, node: !1, worker: !0, canvasSupported: !0, domSupported: !1 } : "undefined" == typeof navigator ? { browser: {}, os: {}, node: !0, worker: !1, canvasSupported: !0, svgSupported: !0, domSupported: !1 } : function (t) {
          var e = {},
              n = {},
              i = t.match(/Firefox\/([\d.]+)/),
              r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
              a = t.match(/Edge\/([\d.]+)/),
              o = /micromessenger/i.test(t);return i && (n.firefox = !0, n.version = i[1]), r && (n.ie = !0, n.version = r[1]), a && (n.edge = !0, n.version = a[1]), o && (n.weChat = !0), { browser: n, os: e, node: !1, canvasSupported: !!document.createElement("canvas").getContext, svgSupported: "undefined" != typeof SVGRect, touchEventsSupported: "ontouchstart" in window && !n.ie && !n.edge, pointerEventsSupported: "onpointerdown" in window && (n.edge || n.ie && n.version >= 11), domSupported: "undefined" != typeof document };
        }(navigator.userAgent),
            Xh = { "[object Function]": 1, "[object RegExp]": 1, "[object Date]": 1, "[object Error]": 1, "[object CanvasGradient]": 1, "[object CanvasPattern]": 1, "[object Image]": 1, "[object Canvas]": 1 },
            qh = { "[object Int8Array]": 1, "[object Uint8Array]": 1, "[object Uint8ClampedArray]": 1, "[object Int16Array]": 1, "[object Uint16Array]": 1, "[object Int32Array]": 1, "[object Uint32Array]": 1, "[object Float32Array]": 1, "[object Float64Array]": 1 },
            Yh = Object.prototype.toString,
            Uh = Array.prototype,
            jh = Uh.forEach,
            Zh = Uh.filter,
            $h = Uh.slice,
            Qh = Uh.map,
            Kh = Uh.reduce,
            Jh = {},
            tu = function tu() {
          return Jh.createCanvas();
        };Jh.createCanvas = function () {
          return document.createElement("canvas");
        };var eu,
            nu = "__ec_primitive__";N.prototype = { constructor: N, get: function get(t) {
            return this.data.hasOwnProperty(t) ? this.data[t] : null;
          }, set: function set(t, e) {
            return this.data[t] = e;
          }, each: function each(t, e) {
            void 0 !== e && (t = v(t, e));for (var n in this.data) {
              this.data.hasOwnProperty(n) && t(this.data[n], n);
            }
          }, removeKey: function removeKey(t) {
            delete this.data[t];
          } };var iu = "undefined" == typeof Float32Array ? Array : Float32Array,
            ru = Y,
            au = function au(t, e) {
          return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]);
        };$.prototype = { constructor: $, _dragStart: function _dragStart(t) {
            var e = t.target;e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(Q(e, t), "dragstart", t.event));
          }, _drag: function _drag(t) {
            var e = this._draggingTarget;if (e) {
              var n = t.offsetX,
                  i = t.offsetY,
                  r = n - this._x,
                  a = i - this._y;this._x = n, this._y = i, e.drift(r, a, t), this.dispatchToElement(Q(e, t), "drag", t.event);var o = this.findHover(n, i, e).target,
                  s = this._dropTarget;this._dropTarget = o, e !== o && (s && o !== s && this.dispatchToElement(Q(s, t), "dragleave", t.event), o && o !== s && this.dispatchToElement(Q(o, t), "dragenter", t.event));
            }
          }, _dragEnd: function _dragEnd(t) {
            var e = this._draggingTarget;e && (e.dragging = !1), this.dispatchToElement(Q(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(Q(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null;
          } };var ou = Array.prototype.slice,
            su = function su(t) {
          this._$handlers = {}, this._$eventProcessor = t;
        };su.prototype = { constructor: su, one: function one(t, e, n, i) {
            var r = this._$handlers;if ("function" == typeof e && (i = n, n = e, e = null), !n || !t) return this;e = K(this, e), r[t] || (r[t] = []);for (var a = 0; a < r[t].length; a++) {
              if (r[t][a].h === n) return this;
            }return r[t].push({ h: n, one: !0, query: e, ctx: i || this }), this;
          }, on: function on(t, e, n, i) {
            var r = this._$handlers;if ("function" == typeof e && (i = n, n = e, e = null), !n || !t) return this;e = K(this, e), r[t] || (r[t] = []);for (var a = 0; a < r[t].length; a++) {
              if (r[t][a].h === n) return this;
            }return r[t].push({ h: n, one: !1, query: e, ctx: i || this }), this;
          }, isSilent: function isSilent(t) {
            var e = this._$handlers;return e[t] && e[t].length;
          }, off: function off(t, e) {
            var n = this._$handlers;if (!t) return this._$handlers = {}, this;if (e) {
              if (n[t]) {
                for (var i = [], r = 0, a = n[t].length; r < a; r++) {
                  n[t][r].h !== e && i.push(n[t][r]);
                }n[t] = i;
              }n[t] && 0 === n[t].length && delete n[t];
            } else delete n[t];return this;
          }, trigger: function trigger(t) {
            var e = this._$handlers[t],
                n = this._$eventProcessor;if (e) {
              var i = arguments,
                  r = i.length;r > 3 && (i = ou.call(i, 1));for (var a = e.length, o = 0; o < a;) {
                var s = e[o];if (n && n.filter && null != s.query && !n.filter(t, s.query)) o++;else {
                  switch (r) {case 1:
                      s.h.call(s.ctx);break;case 2:
                      s.h.call(s.ctx, i[1]);break;case 3:
                      s.h.call(s.ctx, i[1], i[2]);break;default:
                      s.h.apply(s.ctx, i);}s.one ? (e.splice(o, 1), a--) : o++;
                }
              }
            }return n && n.afterTrigger && n.afterTrigger(t), this;
          }, triggerWithContext: function triggerWithContext(t) {
            var e = this._$handlers[t],
                n = this._$eventProcessor;if (e) {
              var i = arguments,
                  r = i.length;r > 4 && (i = ou.call(i, 1, i.length - 1));for (var a = i[i.length - 1], o = e.length, s = 0; s < o;) {
                var l = e[s];if (n && n.filter && null != l.query && !n.filter(t, l.query)) s++;else {
                  switch (r) {case 1:
                      l.h.call(a);break;case 2:
                      l.h.call(a, i[1]);break;case 3:
                      l.h.call(a, i[1], i[2]);break;default:
                      l.h.apply(a, i);}l.one ? (e.splice(s, 1), o--) : s++;
                }
              }
            }return n && n.afterTrigger && n.afterTrigger(t), this;
          } };var lu = "undefined" != typeof window && !!window.addEventListener,
            hu = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            uu = lu ? function (t) {
          t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0;
        } : function (t) {
          t.returnValue = !1, t.cancelBubble = !0;
        },
            cu = "silent";st.prototype.dispose = function () {};var fu = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
            du = function du(t, e, n, i) {
          su.call(this), this.storage = t, this.painter = e, this.painterRoot = i, n = n || new st(), this.proxy = null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, $.call(this), this.setHandlerProxy(n);
        };du.prototype = { constructor: du, setHandlerProxy: function setHandlerProxy(t) {
            this.proxy && this.proxy.dispose(), t && (f(fu, function (e) {
              t.on && t.on(e, this[e], this);
            }, this), t.handler = this), this.proxy = t;
          }, mousemove: function mousemove(t) {
            var e = t.zrX,
                n = t.zrY,
                i = this._hovered,
                r = i.target;r && !r.__zr && (r = (i = this.findHover(i.x, i.y)).target);var a = this._hovered = this.findHover(e, n),
                o = a.target,
                s = this.proxy;s.setCursor && s.setCursor(o ? o.cursor : "default"), r && o !== r && this.dispatchToElement(i, "mouseout", t), this.dispatchToElement(a, "mousemove", t), o && o !== r && this.dispatchToElement(a, "mouseover", t);
          }, mouseout: function mouseout(t) {
            this.dispatchToElement(this._hovered, "mouseout", t);var e,
                n = t.toElement || t.relatedTarget;do {
              n = n && n.parentNode;
            } while (n && 9 != n.nodeType && !(e = n === this.painterRoot));!e && this.trigger("globalout", { event: t });
          }, resize: function resize(t) {
            this._hovered = {};
          }, dispatch: function dispatch(t, e) {
            var n = this[t];n && n.call(this, e);
          }, dispose: function dispose() {
            this.proxy.dispose(), this.storage = this.proxy = this.painter = null;
          }, setCursorStyle: function setCursorStyle(t) {
            var e = this.proxy;e.setCursor && e.setCursor(t);
          }, dispatchToElement: function dispatchToElement(t, e, n) {
            var i = (t = t || {}).target;if (!i || !i.silent) {
              for (var r = "on" + e, a = at(e, t, n); i && (i[r] && (a.cancelBubble = i[r].call(i, a)), i.trigger(e, a), i = i.parent, !a.cancelBubble);) {}a.cancelBubble || (this.trigger(e, a), this.painter && this.painter.eachOtherLayer(function (t) {
                "function" == typeof t[r] && t[r].call(t, a), t.trigger && t.trigger(e, a);
              }));
            }
          }, findHover: function findHover(t, e, n) {
            for (var i = this.storage.getDisplayList(), r = { x: t, y: e }, a = i.length - 1; a >= 0; a--) {
              var o;if (i[a] !== n && !i[a].ignore && (o = lt(i[a], t, e)) && (!r.topTarget && (r.topTarget = i[a]), o !== cu)) {
                r.target = i[a];break;
              }
            }return r;
          } }, f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
          du.prototype[t] = function (e) {
            var n = this.findHover(e.zrX, e.zrY),
                i = n.target;if ("mousedown" === t) this._downEl = i, this._downPoint = [e.zrX, e.zrY], this._upEl = i;else if ("mouseup" === t) this._upEl = i;else if ("click" === t) {
              if (this._downEl !== this._upEl || !this._downPoint || ru(this._downPoint, [e.zrX, e.zrY]) > 4) return;this._downPoint = null;
            }this.dispatchToElement(n, t, e);
          };
        }), u(du, su), u(du, $);var pu = "undefined" == typeof Float32Array ? Array : Float32Array,
            gu = ut,
            vu = 5e-5,
            mu = function mu(t) {
          (t = t || {}).position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null;
        },
            yu = mu.prototype;yu.transform = null, yu.needLocalTransform = function () {
          return mt(this.rotation) || mt(this.position[0]) || mt(this.position[1]) || mt(this.scale[0] - 1) || mt(this.scale[1] - 1);
        };var _u = [];yu.updateTransform = function () {
          var t = this.parent,
              e = t && t.transform,
              n = this.needLocalTransform(),
              i = this.transform;if (n || e) {
            i = i || ht(), n ? this.getLocalTransform(i) : gu(i), e && (n ? ft(i, t.transform, i) : ct(i, t.transform)), this.transform = i;var r = this.globalScaleRatio;if (null != r && 1 !== r) {
              this.getGlobalScale(_u);var a = _u[0] < 0 ? -1 : 1,
                  o = _u[1] < 0 ? -1 : 1,
                  s = ((_u[0] - a) * r + a) / _u[0] || 0,
                  l = ((_u[1] - o) * r + o) / _u[1] || 0;i[0] *= s, i[1] *= s, i[2] *= l, i[3] *= l;
            }this.invTransform = this.invTransform || ht(), vt(this.invTransform, i);
          } else i && gu(i);
        }, yu.getLocalTransform = function (t) {
          return mu.getLocalTransform(this, t);
        }, yu.setTransform = function (t) {
          var e = this.transform,
              n = t.dpr || 1;e ? t.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : t.setTransform(n, 0, 0, n, 0, 0);
        }, yu.restoreTransform = function (t) {
          var e = t.dpr || 1;t.setTransform(e, 0, 0, e, 0, 0);
        };var xu = [],
            wu = ht();yu.setLocalTransform = function (t) {
          if (t) {
            var e = t[0] * t[0] + t[1] * t[1],
                n = t[2] * t[2] + t[3] * t[3],
                i = this.position,
                r = this.scale;mt(e - 1) && (e = Math.sqrt(e)), mt(n - 1) && (n = Math.sqrt(n)), t[0] < 0 && (e = -e), t[3] < 0 && (n = -n), i[0] = t[4], i[1] = t[5], r[0] = e, r[1] = n, this.rotation = Math.atan2(-t[1] / n, t[0] / e);
          }
        }, yu.decomposeTransform = function () {
          if (this.transform) {
            var t = this.parent,
                e = this.transform;t && t.transform && (ft(xu, t.invTransform, e), e = xu);var n = this.origin;n && (n[0] || n[1]) && (wu[4] = n[0], wu[5] = n[1], ft(xu, e, wu), xu[4] -= n[0], xu[5] -= n[1], e = xu), this.setLocalTransform(e);
          }
        }, yu.getGlobalScale = function (t) {
          var e = this.transform;return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t);
        }, yu.transformCoordToLocal = function (t, e) {
          var n = [t, e],
              i = this.invTransform;return i && U(n, n, i), n;
        }, yu.transformCoordToGlobal = function (t, e) {
          var n = [t, e],
              i = this.transform;return i && U(n, n, i), n;
        }, mu.getLocalTransform = function (t, e) {
          gu(e = e || []);var n = t.origin,
              i = t.scale || [1, 1],
              r = t.rotation || 0,
              a = t.position || [0, 0];return n && (e[4] -= n[0], e[5] -= n[1]), gt(e, e, i), r && pt(e, e, r), n && (e[4] += n[0], e[5] += n[1]), e[4] += a[0], e[5] += a[1], e;
        };var bu = { linear: function linear(t) {
            return t;
          }, quadraticIn: function quadraticIn(t) {
            return t * t;
          }, quadraticOut: function quadraticOut(t) {
            return t * (2 - t);
          }, quadraticInOut: function quadraticInOut(t) {
            return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
          }, cubicIn: function cubicIn(t) {
            return t * t * t;
          }, cubicOut: function cubicOut(t) {
            return --t * t * t + 1;
          }, cubicInOut: function cubicInOut(t) {
            return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
          }, quarticIn: function quarticIn(t) {
            return t * t * t * t;
          }, quarticOut: function quarticOut(t) {
            return 1 - --t * t * t * t;
          }, quarticInOut: function quarticInOut(t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
          }, quinticIn: function quinticIn(t) {
            return t * t * t * t * t;
          }, quinticOut: function quinticOut(t) {
            return --t * t * t * t * t + 1;
          }, quinticInOut: function quinticInOut(t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
          }, sinusoidalIn: function sinusoidalIn(t) {
            return 1 - Math.cos(t * Math.PI / 2);
          }, sinusoidalOut: function sinusoidalOut(t) {
            return Math.sin(t * Math.PI / 2);
          }, sinusoidalInOut: function sinusoidalInOut(t) {
            return .5 * (1 - Math.cos(Math.PI * t));
          }, exponentialIn: function exponentialIn(t) {
            return 0 === t ? 0 : Math.pow(1024, t - 1);
          }, exponentialOut: function exponentialOut(t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
          }, exponentialInOut: function exponentialInOut(t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
          }, circularIn: function circularIn(t) {
            return 1 - Math.sqrt(1 - t * t);
          }, circularOut: function circularOut(t) {
            return Math.sqrt(1 - --t * t);
          }, circularInOut: function circularInOut(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
          }, elasticIn: function elasticIn(t) {
            var e,
                n = .1;return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4));
          }, elasticOut: function elasticOut(t) {
            var e,
                n = .1;return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / .4) + 1);
          }, elasticInOut: function elasticInOut(t) {
            var e,
                n = .1;return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI), (t *= 2) < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * .5 + 1);
          }, backIn: function backIn(t) {
            var e = 1.70158;return t * t * ((e + 1) * t - e);
          }, backOut: function backOut(t) {
            var e = 1.70158;return --t * t * ((e + 1) * t + e) + 1;
          }, backInOut: function backInOut(t) {
            var e = 2.5949095;return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
          }, bounceIn: function bounceIn(t) {
            return 1 - bu.bounceOut(1 - t);
          }, bounceOut: function bounceOut(t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
          }, bounceInOut: function bounceInOut(t) {
            return t < .5 ? .5 * bu.bounceIn(2 * t) : .5 * bu.bounceOut(2 * t - 1) + .5;
          } };yt.prototype = { constructor: yt, step: function step(t, e) {
            if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) this._pausedTime += e;else {
              var n = (t - this._startTime - this._pausedTime) / this._life;if (!(n < 0)) {
                n = Math.min(n, 1);var i = this.easing,
                    r = "string" == typeof i ? bu[i] : i,
                    a = "function" == typeof r ? r(n) : n;return this.fire("frame", a), 1 == n ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null;
              }
            }
          }, restart: function restart(t) {
            var e = (t - this._startTime - this._pausedTime) % this._life;this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1;
          }, fire: function fire(t, e) {
            this[t = "on" + t] && this[t](this._target, e);
          }, pause: function pause() {
            this._paused = !0;
          }, resume: function resume() {
            this._paused = !1;
          } };var Su = function Su() {
          this.head = null, this.tail = null, this._len = 0;
        },
            Mu = Su.prototype;Mu.insert = function (t) {
          var e = new Tu(t);return this.insertEntry(e), e;
        }, Mu.insertEntry = function (t) {
          this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++;
        }, Mu.remove = function (t) {
          var e = t.prev,
              n = t.next;e ? e.next = n : this.head = n, n ? n.prev = e : this.tail = e, t.next = t.prev = null, this._len--;
        }, Mu.len = function () {
          return this._len;
        }, Mu.clear = function () {
          this.head = this.tail = null, this._len = 0;
        };var Tu = function Tu(t) {
          this.value = t, this.next, this.prev;
        },
            Iu = function Iu(t) {
          this._list = new Su(), this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null;
        },
            ku = Iu.prototype;ku.put = function (t, e) {
          var n = this._list,
              i = this._map,
              r = null;if (null == i[t]) {
            var a = n.len(),
                o = this._lastRemovedEntry;if (a >= this._maxSize && a > 0) {
              var s = n.head;n.remove(s), delete i[s.key], r = s.value, this._lastRemovedEntry = s;
            }o ? o.value = e : o = new Tu(e), o.key = t, n.insertEntry(o), i[t] = o;
          }return r;
        }, ku.get = function (t) {
          var e = this._map[t],
              n = this._list;if (null != e) return e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value;
        }, ku.clear = function () {
          this._list.clear(), this._map = {};
        };var Cu = { transparent: [0, 0, 0, 0], aliceblue: [240, 248, 255, 1], antiquewhite: [250, 235, 215, 1], aqua: [0, 255, 255, 1], aquamarine: [127, 255, 212, 1], azure: [240, 255, 255, 1], beige: [245, 245, 220, 1], bisque: [255, 228, 196, 1], black: [0, 0, 0, 1], blanchedalmond: [255, 235, 205, 1], blue: [0, 0, 255, 1], blueviolet: [138, 43, 226, 1], brown: [165, 42, 42, 1], burlywood: [222, 184, 135, 1], cadetblue: [95, 158, 160, 1], chartreuse: [127, 255, 0, 1], chocolate: [210, 105, 30, 1], coral: [255, 127, 80, 1], cornflowerblue: [100, 149, 237, 1], cornsilk: [255, 248, 220, 1], crimson: [220, 20, 60, 1], cyan: [0, 255, 255, 1], darkblue: [0, 0, 139, 1], darkcyan: [0, 139, 139, 1], darkgoldenrod: [184, 134, 11, 1], darkgray: [169, 169, 169, 1], darkgreen: [0, 100, 0, 1], darkgrey: [169, 169, 169, 1], darkkhaki: [189, 183, 107, 1], darkmagenta: [139, 0, 139, 1], darkolivegreen: [85, 107, 47, 1], darkorange: [255, 140, 0, 1], darkorchid: [153, 50, 204, 1], darkred: [139, 0, 0, 1], darksalmon: [233, 150, 122, 1], darkseagreen: [143, 188, 143, 1], darkslateblue: [72, 61, 139, 1], darkslategray: [47, 79, 79, 1], darkslategrey: [47, 79, 79, 1], darkturquoise: [0, 206, 209, 1], darkviolet: [148, 0, 211, 1], deeppink: [255, 20, 147, 1], deepskyblue: [0, 191, 255, 1], dimgray: [105, 105, 105, 1], dimgrey: [105, 105, 105, 1], dodgerblue: [30, 144, 255, 1], firebrick: [178, 34, 34, 1], floralwhite: [255, 250, 240, 1], forestgreen: [34, 139, 34, 1], fuchsia: [255, 0, 255, 1], gainsboro: [220, 220, 220, 1], ghostwhite: [248, 248, 255, 1], gold: [255, 215, 0, 1], goldenrod: [218, 165, 32, 1], gray: [128, 128, 128, 1], green: [0, 128, 0, 1], greenyellow: [173, 255, 47, 1], grey: [128, 128, 128, 1], honeydew: [240, 255, 240, 1], hotpink: [255, 105, 180, 1], indianred: [205, 92, 92, 1], indigo: [75, 0, 130, 1], ivory: [255, 255, 240, 1], khaki: [240, 230, 140, 1], lavender: [230, 230, 250, 1], lavenderblush: [255, 240, 245, 1], lawngreen: [124, 252, 0, 1], lemonchiffon: [255, 250, 205, 1], lightblue: [173, 216, 230, 1], lightcoral: [240, 128, 128, 1], lightcyan: [224, 255, 255, 1], lightgoldenrodyellow: [250, 250, 210, 1], lightgray: [211, 211, 211, 1], lightgreen: [144, 238, 144, 1], lightgrey: [211, 211, 211, 1], lightpink: [255, 182, 193, 1], lightsalmon: [255, 160, 122, 1], lightseagreen: [32, 178, 170, 1], lightskyblue: [135, 206, 250, 1], lightslategray: [119, 136, 153, 1], lightslategrey: [119, 136, 153, 1], lightsteelblue: [176, 196, 222, 1], lightyellow: [255, 255, 224, 1], lime: [0, 255, 0, 1], limegreen: [50, 205, 50, 1], linen: [250, 240, 230, 1], magenta: [255, 0, 255, 1], maroon: [128, 0, 0, 1], mediumaquamarine: [102, 205, 170, 1], mediumblue: [0, 0, 205, 1], mediumorchid: [186, 85, 211, 1], mediumpurple: [147, 112, 219, 1], mediumseagreen: [60, 179, 113, 1], mediumslateblue: [123, 104, 238, 1], mediumspringgreen: [0, 250, 154, 1], mediumturquoise: [72, 209, 204, 1], mediumvioletred: [199, 21, 133, 1], midnightblue: [25, 25, 112, 1], mintcream: [245, 255, 250, 1], mistyrose: [255, 228, 225, 1], moccasin: [255, 228, 181, 1], navajowhite: [255, 222, 173, 1], navy: [0, 0, 128, 1], oldlace: [253, 245, 230, 1], olive: [128, 128, 0, 1], olivedrab: [107, 142, 35, 1], orange: [255, 165, 0, 1], orangered: [255, 69, 0, 1], orchid: [218, 112, 214, 1], palegoldenrod: [238, 232, 170, 1], palegreen: [152, 251, 152, 1], paleturquoise: [175, 238, 238, 1], palevioletred: [219, 112, 147, 1], papayawhip: [255, 239, 213, 1], peachpuff: [255, 218, 185, 1], peru: [205, 133, 63, 1], pink: [255, 192, 203, 1], plum: [221, 160, 221, 1], powderblue: [176, 224, 230, 1], purple: [128, 0, 128, 1], red: [255, 0, 0, 1], rosybrown: [188, 143, 143, 1], royalblue: [65, 105, 225, 1], saddlebrown: [139, 69, 19, 1], salmon: [250, 128, 114, 1], sandybrown: [244, 164, 96, 1], seagreen: [46, 139, 87, 1], seashell: [255, 245, 238, 1], sienna: [160, 82, 45, 1], silver: [192, 192, 192, 1], skyblue: [135, 206, 235, 1], slateblue: [106, 90, 205, 1], slategray: [112, 128, 144, 1], slategrey: [112, 128, 144, 1], snow: [255, 250, 250, 1], springgreen: [0, 255, 127, 1], steelblue: [70, 130, 180, 1], tan: [210, 180, 140, 1], teal: [0, 128, 128, 1], thistle: [216, 191, 216, 1], tomato: [255, 99, 71, 1], turquoise: [64, 224, 208, 1], violet: [238, 130, 238, 1], wheat: [245, 222, 179, 1], white: [255, 255, 255, 1], whitesmoke: [245, 245, 245, 1], yellow: [255, 255, 0, 1], yellowgreen: [154, 205, 50, 1] },
            Du = new Iu(20),
            Au = null,
            Lu = Array.prototype.slice,
            Pu = function Pu(t, e, n, i) {
          this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = n || Lt, this._setter = i || Pt, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = [];
        };Pu.prototype = { when: function when(t, e) {
            var n = this._tracks;for (var i in e) {
              if (e.hasOwnProperty(i)) {
                if (!n[i]) {
                  n[i] = [];var r = this._getter(this._target, i);if (null == r) continue;0 !== t && n[i].push({ time: 0, value: Vt(r) });
                }n[i].push({ time: t, value: e[i] });
              }
            }return this;
          }, during: function during(t) {
            return this._onframeList.push(t), this;
          }, pause: function pause() {
            for (var t = 0; t < this._clipList.length; t++) {
              this._clipList[t].pause();
            }this._paused = !0;
          }, resume: function resume() {
            for (var t = 0; t < this._clipList.length; t++) {
              this._clipList[t].resume();
            }this._paused = !1;
          }, isPaused: function isPaused() {
            return !!this._paused;
          }, _doneCallback: function _doneCallback() {
            this._tracks = {}, this._clipList.length = 0;for (var t = this._doneList, e = t.length, n = 0; n < e; n++) {
              t[n].call(this);
            }
          }, start: function start(t, e) {
            var n,
                i = this,
                r = 0;for (var a in this._tracks) {
              if (this._tracks.hasOwnProperty(a)) {
                var o = Gt(this, t, function () {
                  --r || i._doneCallback();
                }, this._tracks[a], a, e);o && (this._clipList.push(o), r++, this.animation && this.animation.addClip(o), n = o);
              }
            }if (n) {
              var s = n.onframe;n.onframe = function (t, e) {
                s(t, e);for (var n = 0; n < i._onframeList.length; n++) {
                  i._onframeList[n](t, e);
                }
              };
            }return r || this._doneCallback(), this;
          }, stop: function stop(t) {
            for (var e = this._clipList, n = this.animation, i = 0; i < e.length; i++) {
              var r = e[i];t && r.onframe(this._target, 1), n && n.removeClip(r);
            }e.length = 0;
          }, delay: function delay(t) {
            return this._delay = t, this;
          }, done: function done(t) {
            return t && this._doneList.push(t), this;
          }, getClips: function getClips() {
            return this._clipList;
          } };var Ou = 1;"undefined" != typeof window && (Ou = Math.max(window.devicePixelRatio || 1, 1));var Eu = Ou,
            Nu = function Nu() {},
            Bu = Nu,
            Ru = function Ru() {
          this.animators = [];
        };Ru.prototype = { constructor: Ru, animate: function animate(t, e) {
            var n,
                i = !1,
                r = this,
                a = this.__zr;if (t) {
              var o = t.split("."),
                  s = r;i = "shape" === o[0];for (var h = 0, u = o.length; h < u; h++) {
                s && (s = s[o[h]]);
              }s && (n = s);
            } else n = r;if (n) {
              var c = r.animators,
                  f = new Pu(n, e);return f.during(function (t) {
                r.dirty(i);
              }).done(function () {
                c.splice(l(c, f), 1);
              }), c.push(f), a && a.animation.addAnimator(f), f;
            }Bu('Property "' + t + '" is not existed in element ' + r.id);
          }, stopAnimation: function stopAnimation(t) {
            for (var e = this.animators, n = e.length, i = 0; i < n; i++) {
              e[i].stop(t);
            }return e.length = 0, this;
          }, animateTo: function animateTo(t, e, n, i, r, a) {
            Xt(this, t, e, n, i, r, a);
          }, animateFrom: function animateFrom(t, e, n, i, r, a) {
            Xt(this, t, e, n, i, r, a, !0);
          } };var zu = function zu(t) {
          mu.call(this, t), su.call(this, t), Ru.call(this, t), this.id = t.id || Wh();
        };zu.prototype = { type: "element", name: "", __zr: null, ignore: !1, clipPath: null, isGroup: !1, drift: function drift(t, e) {
            switch (this.draggable) {case "horizontal":
                e = 0;break;case "vertical":
                t = 0;}var n = this.transform;n || (n = this.transform = [1, 0, 0, 1, 0, 0]), n[4] += t, n[5] += e, this.decomposeTransform(), this.dirty(!1);
          }, beforeUpdate: function beforeUpdate() {}, afterUpdate: function afterUpdate() {}, update: function update() {
            this.updateTransform();
          }, traverse: function traverse(t, e) {}, attrKV: function attrKV(t, e) {
            if ("position" === t || "scale" === t || "origin" === t) {
              if (e) {
                var n = this[t];n || (n = this[t] = []), n[0] = e[0], n[1] = e[1];
              }
            } else this[t] = e;
          }, hide: function hide() {
            this.ignore = !0, this.__zr && this.__zr.refresh();
          }, show: function show() {
            this.ignore = !1, this.__zr && this.__zr.refresh();
          }, attr: function attr(t, e) {
            if ("string" == typeof t) this.attrKV(t, e);else if (w(t)) for (var n in t) {
              t.hasOwnProperty(n) && this.attrKV(n, t[n]);
            }return this.dirty(!1), this;
          }, setClipPath: function setClipPath(t) {
            var e = this.__zr;e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1);
          }, removeClipPath: function removeClipPath() {
            var t = this.clipPath;t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1));
          }, addSelfToZr: function addSelfToZr(t) {
            this.__zr = t;var e = this.animators;if (e) for (var n = 0; n < e.length; n++) {
              t.animation.addAnimator(e[n]);
            }this.clipPath && this.clipPath.addSelfToZr(t);
          }, removeSelfFromZr: function removeSelfFromZr(t) {
            this.__zr = null;var e = this.animators;if (e) for (var n = 0; n < e.length; n++) {
              t.animation.removeAnimator(e[n]);
            }this.clipPath && this.clipPath.removeSelfFromZr(t);
          } }, u(zu, Ru), u(zu, mu), u(zu, su);var Fu = U,
            Vu = Math.min,
            Wu = Math.max;Ut.prototype = { constructor: Ut, union: function union(t) {
            var e = Vu(t.x, this.x),
                n = Vu(t.y, this.y);this.width = Wu(t.x + t.width, this.x + this.width) - e, this.height = Wu(t.y + t.height, this.y + this.height) - n, this.x = e, this.y = n;
          }, applyTransform: function () {
            var t = [],
                e = [],
                n = [],
                i = [];return function (r) {
              if (r) {
                t[0] = n[0] = this.x, t[1] = i[1] = this.y, e[0] = i[0] = this.x + this.width, e[1] = n[1] = this.y + this.height, Fu(t, t, r), Fu(e, e, r), Fu(n, n, r), Fu(i, i, r), this.x = Vu(t[0], e[0], n[0], i[0]), this.y = Vu(t[1], e[1], n[1], i[1]);var a = Wu(t[0], e[0], n[0], i[0]),
                    o = Wu(t[1], e[1], n[1], i[1]);this.width = a - this.x, this.height = o - this.y;
              }
            };
          }(), calculateTransform: function calculateTransform(t) {
            var e = this,
                n = t.width / e.width,
                i = t.height / e.height,
                r = ht();return dt(r, r, [-e.x, -e.y]), gt(r, r, [n, i]), dt(r, r, [t.x, t.y]), r;
          }, intersect: function intersect(t) {
            if (!t) return !1;t instanceof Ut || (t = Ut.create(t));var e = this,
                n = e.x,
                i = e.x + e.width,
                r = e.y,
                a = e.y + e.height,
                o = t.x,
                s = t.x + t.width,
                l = t.y,
                h = t.y + t.height;return !(i < o || s < n || a < l || h < r);
          }, contain: function contain(t, e) {
            var n = this;return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height;
          }, clone: function clone() {
            return new Ut(this.x, this.y, this.width, this.height);
          }, copy: function copy(t) {
            this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height;
          }, plain: function plain() {
            return { x: this.x, y: this.y, width: this.width, height: this.height };
          } }, Ut.create = function (t) {
          return new Ut(t.x, t.y, t.width, t.height);
        };var Hu = function Hu(t) {
          t = t || {}, zu.call(this, t);for (var e in t) {
            t.hasOwnProperty(e) && (this[e] = t[e]);
          }this._children = [], this.__storage = null, this.__dirty = !0;
        };Hu.prototype = { constructor: Hu, isGroup: !0, type: "group", silent: !1, children: function children() {
            return this._children.slice();
          }, childAt: function childAt(t) {
            return this._children[t];
          }, childOfName: function childOfName(t) {
            for (var e = this._children, n = 0; n < e.length; n++) {
              if (e[n].name === t) return e[n];
            }
          }, childCount: function childCount() {
            return this._children.length;
          }, add: function add(t) {
            return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this;
          }, addBefore: function addBefore(t, e) {
            if (t && t !== this && t.parent !== this && e && e.parent === this) {
              var n = this._children,
                  i = n.indexOf(e);i >= 0 && (n.splice(i, 0, t), this._doAdd(t));
            }return this;
          }, _doAdd: function _doAdd(t) {
            t.parent && t.parent.remove(t), t.parent = this;var e = this.__storage,
                n = this.__zr;e && e !== t.__storage && (e.addToStorage(t), t instanceof Hu && t.addChildrenToStorage(e)), n && n.refresh();
          }, remove: function remove(t) {
            var e = this.__zr,
                n = this.__storage,
                i = this._children,
                r = l(i, t);return r < 0 ? this : (i.splice(r, 1), t.parent = null, n && (n.delFromStorage(t), t instanceof Hu && t.delChildrenFromStorage(n)), e && e.refresh(), this);
          }, removeAll: function removeAll() {
            var t,
                e,
                n = this._children,
                i = this.__storage;for (e = 0; e < n.length; e++) {
              t = n[e], i && (i.delFromStorage(t), t instanceof Hu && t.delChildrenFromStorage(i)), t.parent = null;
            }return n.length = 0, this;
          }, eachChild: function eachChild(t, e) {
            for (var n = this._children, i = 0; i < n.length; i++) {
              var r = n[i];t.call(e, r, i);
            }return this;
          }, traverse: function traverse(t, e) {
            for (var n = 0; n < this._children.length; n++) {
              var i = this._children[n];t.call(e, i), "group" === i.type && i.traverse(t, e);
            }return this;
          }, addChildrenToStorage: function addChildrenToStorage(t) {
            for (var e = 0; e < this._children.length; e++) {
              var n = this._children[e];t.addToStorage(n), n instanceof Hu && n.addChildrenToStorage(t);
            }
          }, delChildrenFromStorage: function delChildrenFromStorage(t) {
            for (var e = 0; e < this._children.length; e++) {
              var n = this._children[e];t.delFromStorage(n), n instanceof Hu && n.delChildrenFromStorage(t);
            }
          }, dirty: function dirty() {
            return this.__dirty = !0, this.__zr && this.__zr.refresh(), this;
          }, getBoundingRect: function getBoundingRect(t) {
            for (var e = null, n = new Ut(0, 0, 0, 0), i = t || this._children, r = [], a = 0; a < i.length; a++) {
              var o = i[a];if (!o.ignore && !o.invisible) {
                var s = o.getBoundingRect(),
                    l = o.getLocalTransform(r);l ? (n.copy(s), n.applyTransform(l), (e = e || n.clone()).union(n)) : (e = e || s.clone()).union(s);
              }
            }return e || n;
          } }, h(Hu, zu);var Gu = 32,
            Xu = 7,
            qu = function qu() {
          this._roots = [], this._displayList = [], this._displayListLen = 0;
        };qu.prototype = { constructor: qu, traverse: function traverse(t, e) {
            for (var n = 0; n < this._roots.length; n++) {
              this._roots[n].traverse(t, e);
            }
          }, getDisplayList: function getDisplayList(t, e) {
            return e = e || !1, t && this.updateDisplayList(e), this._displayList;
          }, updateDisplayList: function updateDisplayList(t) {
            this._displayListLen = 0;for (var e = this._roots, n = this._displayList, i = 0, r = e.length; i < r; i++) {
              this._updateAndAddDisplayable(e[i], null, t);
            }n.length = this._displayListLen, Gh.canvasSupported && ee(n, ne);
          }, _updateAndAddDisplayable: function _updateAndAddDisplayable(t, e, n) {
            if (!t.ignore || n) {
              t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();var i = t.clipPath;if (i) {
                e = e ? e.slice() : [];for (var r = i, a = t; r;) {
                  r.parent = a, r.updateTransform(), e.push(r), a = r, r = r.clipPath;
                }
              }if (t.isGroup) {
                for (var o = t._children, s = 0; s < o.length; s++) {
                  var l = o[s];t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, n);
                }t.__dirty = !1;
              } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t;
            }
          }, addRoot: function addRoot(t) {
            t.__storage !== this && (t instanceof Hu && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t));
          }, delRoot: function delRoot(t) {
            if (null == t) {
              for (n = 0; n < this._roots.length; n++) {
                var e = this._roots[n];e instanceof Hu && e.delChildrenFromStorage(this);
              }return this._roots = [], this._displayList = [], void (this._displayListLen = 0);
            }if (t instanceof Array) for (var n = 0, i = t.length; n < i; n++) {
              this.delRoot(t[n]);
            } else {
              var r = l(this._roots, t);r >= 0 && (this.delFromStorage(t), this._roots.splice(r, 1), t instanceof Hu && t.delChildrenFromStorage(this));
            }
          }, addToStorage: function addToStorage(t) {
            return t && (t.__storage = this, t.dirty(!1)), this;
          }, delFromStorage: function delFromStorage(t) {
            return t && (t.__storage = null), this;
          }, dispose: function dispose() {
            this._renderList = this._roots = null;
          }, displayableSortFunc: ne };var Yu = { shadowBlur: 1, shadowOffsetX: 1, shadowOffsetY: 1, textShadowBlur: 1, textShadowOffsetX: 1, textShadowOffsetY: 1, textBoxShadowBlur: 1, textBoxShadowOffsetX: 1, textBoxShadowOffsetY: 1 },
            Uu = function Uu(t, e, n) {
          return Yu.hasOwnProperty(e) ? n *= t.dpr : n;
        },
            ju = [["shadowBlur", 0], ["shadowOffsetX", 0], ["shadowOffsetY", 0], ["shadowColor", "#000"], ["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]],
            Zu = function Zu(t) {
          this.extendFrom(t, !1);
        };Zu.prototype = { constructor: Zu, fill: "#000", stroke: null, opacity: 1, fillOpacity: null, strokeOpacity: null, lineDash: null, lineDashOffset: 0, shadowBlur: 0, shadowOffsetX: 0, shadowOffsetY: 0, lineWidth: 1, strokeNoScale: !1, text: null, font: null, textFont: null, fontStyle: null, fontWeight: null, fontSize: null, fontFamily: null, textTag: null, textFill: "#000", textStroke: null, textWidth: null, textHeight: null, textStrokeWidth: 0, textLineHeight: null, textPosition: "inside", textRect: null, textOffset: null, textAlign: null, textVerticalAlign: null, textDistance: 5, textShadowColor: "transparent", textShadowBlur: 0, textShadowOffsetX: 0, textShadowOffsetY: 0, textBoxShadowColor: "transparent", textBoxShadowBlur: 0, textBoxShadowOffsetX: 0, textBoxShadowOffsetY: 0, transformText: !1, textRotation: 0, textOrigin: null, textBackgroundColor: null, textBorderColor: null, textBorderWidth: 0, textBorderRadius: 0, textPadding: null, rich: null, truncate: null, blend: null, bind: function bind(t, e, n) {
            for (var i = this, r = n && n.style, a = !r, o = 0; o < ju.length; o++) {
              var s = ju[o],
                  l = s[0];(a || i[l] !== r[l]) && (t[l] = Uu(t, l, i[l] || s[1]));
            }if ((a || i.fill !== r.fill) && (t.fillStyle = i.fill), (a || i.stroke !== r.stroke) && (t.strokeStyle = i.stroke), (a || i.opacity !== r.opacity) && (t.globalAlpha = null == i.opacity ? 1 : i.opacity), (a || i.blend !== r.blend) && (t.globalCompositeOperation = i.blend || "source-over"), this.hasStroke()) {
              var h = i.lineWidth;t.lineWidth = h / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1);
            }
          }, hasFill: function hasFill() {
            var t = this.fill;return null != t && "none" !== t;
          }, hasStroke: function hasStroke() {
            var t = this.stroke;return null != t && "none" !== t && this.lineWidth > 0;
          }, extendFrom: function extendFrom(t, e) {
            if (t) for (var n in t) {
              !t.hasOwnProperty(n) || !0 !== e && (!1 === e ? this.hasOwnProperty(n) : null == t[n]) || (this[n] = t[n]);
            }
          }, set: function set(t, e) {
            "string" == typeof t ? this[t] = e : this.extendFrom(t, !0);
          }, clone: function clone() {
            var t = new this.constructor();return t.extendFrom(this, !0), t;
          }, getGradient: function getGradient(t, e, n) {
            for (var i = ("radial" === e.type ? re : ie)(t, e, n), r = e.colorStops, a = 0; a < r.length; a++) {
              i.addColorStop(r[a].offset, r[a].color);
            }return i;
          } };for (var $u = Zu.prototype, Qu = 0; Qu < ju.length; Qu++) {
          var Ku = ju[Qu];Ku[0] in $u || ($u[Ku[0]] = Ku[1]);
        }Zu.getGradient = $u.getGradient;var Ju = function Ju(t, e) {
          this.image = t, this.repeat = e, this.type = "pattern";
        };Ju.prototype.getCanvasPattern = function (t) {
          return t.createPattern(this.image, this.repeat || "repeat");
        };var tc = function tc(t, e, n) {
          var i;n = n || Eu, "string" == typeof t ? i = oe(t, e, n) : w(t) && (t = (i = t).id), this.id = t, this.dom = i;var r = i.style;r && (i.onselectstart = ae, r["-webkit-user-select"] = "none", r["user-select"] = "none", r["-webkit-touch-callout"] = "none", r["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", r.padding = 0, r.margin = 0, r["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = n;
        };tc.prototype = { constructor: tc, __dirty: !0, __used: !1, __drawIndex: 0, __startIndex: 0, __endIndex: 0, incremental: !1, getElementCount: function getElementCount() {
            return this.__endIndex - this.__startIndex;
          }, initContext: function initContext() {
            this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
          }, createBackBuffer: function createBackBuffer() {
            var t = this.dpr;this.domBack = oe("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 != t && this.ctxBack.scale(t, t);
          }, resize: function resize(t, e) {
            var n = this.dpr,
                i = this.dom,
                r = i.style,
                a = this.domBack;r && (r.width = t + "px", r.height = e + "px"), i.width = t * n, i.height = e * n, a && (a.width = t * n, a.height = e * n, 1 != n && this.ctxBack.scale(n, n));
          }, clear: function clear(t, e) {
            var n = this.dom,
                i = this.ctx,
                r = n.width,
                a = n.height,
                e = e || this.clearColor,
                o = this.motionBlur && !t,
                s = this.lastFrameAlpha,
                l = this.dpr;if (o && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(n, 0, 0, r / l, a / l)), i.clearRect(0, 0, r, a), e && "transparent" !== e) {
              var h;e.colorStops ? (h = e.__canvasGradient || Zu.getGradient(i, e, { x: 0, y: 0, width: r, height: a }), e.__canvasGradient = h) : e.image && (h = Ju.prototype.getCanvasPattern.call(e, i)), i.save(), i.fillStyle = h || e, i.fillRect(0, 0, r, a), i.restore();
            }if (o) {
              var u = this.domBack;i.save(), i.globalAlpha = s, i.drawImage(u, 0, 0, r, a), i.restore();
            }
          } };var ec = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {
          setTimeout(t, 16);
        },
            nc = new Iu(50),
            ic = {},
            rc = 0,
            ac = 5e3,
            oc = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
            sc = "12px sans-serif",
            lc = {};lc.measureText = function (t, e) {
          var n = s();return n.font = e || sc, n.measureText(t);
        };var hc = { left: 1, right: 1, center: 1 },
            uc = { top: 1, bottom: 1, middle: 1 },
            cc = [["textShadowBlur", "shadowBlur", 0], ["textShadowOffsetX", "shadowOffsetX", 0], ["textShadowOffsetY", "shadowOffsetY", 0], ["textShadowColor", "shadowColor", "transparent"]],
            fc = new Ut(),
            dc = function dc() {};dc.prototype = { constructor: dc, drawRectText: function drawRectText(t, e) {
            var n = this.style;e = n.textRect || e, this.__dirty && De(n);var i = n.text;if (null != i && (i += ""), Ye(i, n)) {
              t.save();var r = this.transform;n.transformText ? this.setTransform(t) : r && (fc.copy(e), fc.applyTransform(r), e = fc), Le(this, t, i, n, e), t.restore();
            }
          } }, Ue.prototype = { constructor: Ue, type: "displayable", __dirty: !0, invisible: !1, z: 0, z2: 0, zlevel: 0, draggable: !1, dragging: !1, silent: !1, culling: !1, cursor: "pointer", rectHover: !1, progressive: !1, incremental: !1, globalScaleRatio: 1, beforeBrush: function beforeBrush(t) {}, afterBrush: function afterBrush(t) {}, brush: function brush(t, e) {}, getBoundingRect: function getBoundingRect() {}, contain: function contain(t, e) {
            return this.rectContain(t, e);
          }, traverse: function traverse(t, e) {
            t.call(e, this);
          }, rectContain: function rectContain(t, e) {
            var n = this.transformCoordToLocal(t, e);return this.getBoundingRect().contain(n[0], n[1]);
          }, dirty: function dirty() {
            this.__dirty = this.__dirtyText = !0, this._rect = null, this.__zr && this.__zr.refresh();
          }, animateStyle: function animateStyle(t) {
            return this.animate("style", t);
          }, attrKV: function attrKV(t, e) {
            "style" !== t ? zu.prototype.attrKV.call(this, t, e) : this.style.set(e);
          }, setStyle: function setStyle(t, e) {
            return this.style.set(t, e), this.dirty(!1), this;
          }, useStyle: function useStyle(t) {
            return this.style = new Zu(t, this), this.dirty(!1), this;
          } }, h(Ue, zu), u(Ue, dc), je.prototype = { constructor: je, type: "image", brush: function brush(t, e) {
            var n = this.style,
                i = n.image;n.bind(t, this, e);var r = this._image = le(i, this._image, this, this.onload);if (r && ue(r)) {
              var a = n.x || 0,
                  o = n.y || 0,
                  s = n.width,
                  l = n.height,
                  h = r.width / r.height;if (null == s && null != l ? s = l * h : null == l && null != s ? l = s / h : null == s && null == l && (s = r.width, l = r.height), this.setTransform(t), n.sWidth && n.sHeight) {
                var u = n.sx || 0,
                    c = n.sy || 0;t.drawImage(r, u, c, n.sWidth, n.sHeight, a, o, s, l);
              } else if (n.sx && n.sy) {
                var f = s - (u = n.sx),
                    d = l - (c = n.sy);t.drawImage(r, u, c, f, d, a, o, s, l);
              } else t.drawImage(r, a, o, s, l);null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));
            }
          }, getBoundingRect: function getBoundingRect() {
            var t = this.style;return this._rect || (this._rect = new Ut(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect;
          } }, h(je, Ue);var pc = new Ut(0, 0, 0, 0),
            gc = new Ut(0, 0, 0, 0),
            vc = function vc(t, e, n) {
          this.type = "canvas";var i = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();this._opts = n = a({}, n || {}), this.dpr = n.devicePixelRatio || Eu, this._singleCanvas = i, this.root = t;var r = t.style;r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;var o = this._zlevelList = [],
              s = this._layers = {};if (this._layerConfig = {}, this._needsManuallyCompositing = !1, i) {
            var l = t.width,
                h = t.height;null != n.width && (l = n.width), null != n.height && (h = n.height), this.dpr = n.devicePixelRatio || 1, t.width = l * this.dpr, t.height = h * this.dpr, this._width = l, this._height = h;var u = new tc(t, this, this.dpr);u.__builtin__ = !0, u.initContext(), s[314159] = u, u.zlevel = 314159, o.push(314159), this._domRoot = t;
          } else {
            this._width = this._getSize(0), this._height = this._getSize(1);var c = this._domRoot = tn(this._width, this._height);t.appendChild(c);
          }this._hoverlayer = null, this._hoverElements = [];
        };vc.prototype = { constructor: vc, getType: function getType() {
            return "canvas";
          }, isSingleCanvas: function isSingleCanvas() {
            return this._singleCanvas;
          }, getViewportRoot: function getViewportRoot() {
            return this._domRoot;
          }, getViewportRootOffset: function getViewportRootOffset() {
            var t = this.getViewportRoot();if (t) return { offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0 };
          }, refresh: function refresh(t) {
            var e = this.storage.getDisplayList(!0),
                n = this._zlevelList;this._redrawId = Math.random(), this._paintList(e, t, this._redrawId);for (var i = 0; i < n.length; i++) {
              var r = n[i],
                  a = this._layers[r];if (!a.__builtin__ && a.refresh) {
                var o = 0 === i ? this._backgroundColor : null;a.refresh(o);
              }
            }return this.refreshHover(), this;
          }, addHover: function addHover(t, e) {
            if (!t.__hoverMir) {
              var n = new t.constructor({ style: t.style, shape: t.shape, z: t.z, z2: t.z2, silent: t.silent });return n.__from = t, t.__hoverMir = n, e && n.setStyle(e), this._hoverElements.push(n), n;
            }
          }, removeHover: function removeHover(t) {
            var e = t.__hoverMir,
                n = this._hoverElements,
                i = l(n, e);i >= 0 && n.splice(i, 1), t.__hoverMir = null;
          }, clearHover: function clearHover(t) {
            for (var e = this._hoverElements, n = 0; n < e.length; n++) {
              var i = e[n].__from;i && (i.__hoverMir = null);
            }e.length = 0;
          }, refreshHover: function refreshHover() {
            var t = this._hoverElements,
                e = t.length,
                n = this._hoverlayer;if (n && n.clear(), e) {
              ee(t, this.storage.displayableSortFunc), n || (n = this._hoverlayer = this.getLayer(1e5));var i = {};n.ctx.save();for (var r = 0; r < e;) {
                var a = t[r],
                    o = a.__from;o && o.__zr ? (r++, o.invisible || (a.transform = o.transform, a.invTransform = o.invTransform, a.__clipPaths = o.__clipPaths, this._doPaintEl(a, n, !0, i))) : (t.splice(r, 1), o.__hoverMir = null, e--);
              }n.ctx.restore();
            }
          }, getHoverLayer: function getHoverLayer() {
            return this.getLayer(1e5);
          }, _paintList: function _paintList(t, e, n) {
            if (this._redrawId === n) {
              e = e || !1, this._updateLayerStatus(t);var i = this._doPaintList(t, e);if (this._needsManuallyCompositing && this._compositeManually(), !i) {
                var r = this;ec(function () {
                  r._paintList(t, e, n);
                });
              }
            }
          }, _compositeManually: function _compositeManually() {
            var t = this.getLayer(314159).ctx,
                e = this._domRoot.width,
                n = this._domRoot.height;t.clearRect(0, 0, e, n), this.eachBuiltinLayer(function (i) {
              i.virtual && t.drawImage(i.dom, 0, 0, e, n);
            });
          }, _doPaintList: function _doPaintList(t, e) {
            for (var n = [], i = 0; i < this._zlevelList.length; i++) {
              var r = this._zlevelList[i];(s = this._layers[r]).__builtin__ && s !== this._hoverlayer && (s.__dirty || e) && n.push(s);
            }for (var a = !0, o = 0; o < n.length; o++) {
              var s = n[o],
                  l = s.ctx,
                  h = {};l.save();var u = e ? s.__startIndex : s.__drawIndex,
                  c = !e && s.incremental && Date.now,
                  d = c && Date.now(),
                  p = s.zlevel === this._zlevelList[0] ? this._backgroundColor : null;if (s.__startIndex === s.__endIndex) s.clear(!1, p);else if (u === s.__startIndex) {
                var g = t[u];g.incremental && g.notClear && !e || s.clear(!1, p);
              }-1 === u && (console.error("For some unknown reason. drawIndex is -1"), u = s.__startIndex);for (var v = u; v < s.__endIndex; v++) {
                var m = t[v];if (this._doPaintEl(m, s, e, h), m.__dirty = m.__dirtyText = !1, c && Date.now() - d > 15) break;
              }s.__drawIndex = v, s.__drawIndex < s.__endIndex && (a = !1), h.prevElClipPaths && l.restore(), l.restore();
            }return Gh.wxa && f(this._layers, function (t) {
              t && t.ctx && t.ctx.draw && t.ctx.draw();
            }), a;
          }, _doPaintEl: function _doPaintEl(t, e, n, i) {
            var r = e.ctx,
                a = t.transform;if ((e.__dirty || n) && !t.invisible && 0 !== t.style.opacity && (!a || a[0] || a[3]) && (!t.culling || !Qe(t, this._width, this._height))) {
              var o = t.__clipPaths;i.prevElClipPaths && !Ke(o, i.prevElClipPaths) || (i.prevElClipPaths && (e.ctx.restore(), i.prevElClipPaths = null, i.prevEl = null), o && (r.save(), Je(o, r), i.prevElClipPaths = o)), t.beforeBrush && t.beforeBrush(r), t.brush(r, i.prevEl || null), i.prevEl = t, t.afterBrush && t.afterBrush(r);
            }
          }, getLayer: function getLayer(t, e) {
            this._singleCanvas && !this._needsManuallyCompositing && (t = 314159);var n = this._layers[t];return n || ((n = new tc("zr_" + t, this, this.dpr)).zlevel = t, n.__builtin__ = !0, this._layerConfig[t] && i(n, this._layerConfig[t], !0), e && (n.virtual = e), this.insertLayer(t, n), n.initContext()), n;
          }, insertLayer: function insertLayer(t, e) {
            var n = this._layers,
                i = this._zlevelList,
                r = i.length,
                a = null,
                o = -1,
                s = this._domRoot;if (n[t]) Bu("ZLevel " + t + " has been used already");else if ($e(e)) {
              if (r > 0 && t > i[0]) {
                for (o = 0; o < r - 1 && !(i[o] < t && i[o + 1] > t); o++) {}a = n[i[o]];
              }if (i.splice(o + 1, 0, t), n[t] = e, !e.virtual) if (a) {
                var l = a.dom;l.nextSibling ? s.insertBefore(e.dom, l.nextSibling) : s.appendChild(e.dom);
              } else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom);
            } else Bu("Layer of zlevel " + t + " is not valid");
          }, eachLayer: function eachLayer(t, e) {
            var n,
                i,
                r = this._zlevelList;for (i = 0; i < r.length; i++) {
              n = r[i], t.call(e, this._layers[n], n);
            }
          }, eachBuiltinLayer: function eachBuiltinLayer(t, e) {
            var n,
                i,
                r,
                a = this._zlevelList;for (r = 0; r < a.length; r++) {
              i = a[r], (n = this._layers[i]).__builtin__ && t.call(e, n, i);
            }
          }, eachOtherLayer: function eachOtherLayer(t, e) {
            var n,
                i,
                r,
                a = this._zlevelList;for (r = 0; r < a.length; r++) {
              i = a[r], (n = this._layers[i]).__builtin__ || t.call(e, n, i);
            }
          }, getLayers: function getLayers() {
            return this._layers;
          }, _updateLayerStatus: function _updateLayerStatus(t) {
            function e(t) {
              n && (n.__endIndex !== t && (n.__dirty = !0), n.__endIndex = t);
            }if (this.eachBuiltinLayer(function (t, e) {
              t.__dirty = t.__used = !1;
            }), this._singleCanvas) for (r = 1; r < t.length; r++) {
              if ((o = t[r]).zlevel !== t[r - 1].zlevel || o.incremental) {
                this._needsManuallyCompositing = !0;break;
              }
            }for (var n = null, i = 0, r = 0; r < t.length; r++) {
              var a,
                  o = t[r],
                  s = o.zlevel;o.incremental ? ((a = this.getLayer(s + .001, this._needsManuallyCompositing)).incremental = !0, i = 1) : a = this.getLayer(s + (i > 0 ? .01 : 0), this._needsManuallyCompositing), a.__builtin__ || Bu("ZLevel " + s + " has been used by unkown layer " + a.id), a !== n && (a.__used = !0, a.__startIndex !== r && (a.__dirty = !0), a.__startIndex = r, a.incremental ? a.__drawIndex = -1 : a.__drawIndex = r, e(r), n = a), o.__dirty && (a.__dirty = !0, a.incremental && a.__drawIndex < 0 && (a.__drawIndex = r));
            }e(r), this.eachBuiltinLayer(function (t, e) {
              !t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex);
            });
          }, clear: function clear() {
            return this.eachBuiltinLayer(this._clearLayer), this;
          }, _clearLayer: function _clearLayer(t) {
            t.clear();
          }, setBackgroundColor: function setBackgroundColor(t) {
            this._backgroundColor = t;
          }, configLayer: function configLayer(t, e) {
            if (e) {
              var n = this._layerConfig;n[t] ? i(n[t], e, !0) : n[t] = e;for (var r = 0; r < this._zlevelList.length; r++) {
                var a = this._zlevelList[r];a !== t && a !== t + .01 || i(this._layers[a], n[t], !0);
              }
            }
          }, delLayer: function delLayer(t) {
            var e = this._layers,
                n = this._zlevelList,
                i = e[t];i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(l(n, t), 1));
          }, resize: function resize(t, e) {
            if (this._domRoot.style) {
              var n = this._domRoot;n.style.display = "none";var i = this._opts;if (null != t && (i.width = t), null != e && (i.height = e), t = this._getSize(0), e = this._getSize(1), n.style.display = "", this._width != t || e != this._height) {
                n.style.width = t + "px", n.style.height = e + "px";for (var r in this._layers) {
                  this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
                }f(this._progressiveLayers, function (n) {
                  n.resize(t, e);
                }), this.refresh(!0);
              }this._width = t, this._height = e;
            } else {
              if (null == t || null == e) return;this._width = t, this._height = e, this.getLayer(314159).resize(t, e);
            }return this;
          }, clearLayer: function clearLayer(t) {
            var e = this._layers[t];e && e.clear();
          }, dispose: function dispose() {
            this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;
          }, getRenderedCanvas: function getRenderedCanvas(t) {
            if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[314159].dom;var e = new tc("image", this, t.pixelRatio || this.dpr);if (e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {
              this.refresh();var n = e.dom.width,
                  i = e.dom.height,
                  r = e.ctx;this.eachLayer(function (t) {
                t.__builtin__ ? r.drawImage(t.dom, 0, 0, n, i) : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore());
              });
            } else for (var a = {}, o = this.storage.getDisplayList(!0), s = 0; s < o.length; s++) {
              var l = o[s];this._doPaintEl(l, e, !0, a);
            }return e.dom;
          }, getWidth: function getWidth() {
            return this._width;
          }, getHeight: function getHeight() {
            return this._height;
          }, _getSize: function _getSize(t) {
            var e = this._opts,
                n = ["width", "height"][t],
                i = ["clientWidth", "clientHeight"][t],
                r = ["paddingLeft", "paddingTop"][t],
                a = ["paddingRight", "paddingBottom"][t];if (null != e[n] && "auto" !== e[n]) return parseFloat(e[n]);var o = this.root,
                s = document.defaultView.getComputedStyle(o);return (o[i] || Ze(s[n]) || Ze(o.style[n])) - (Ze(s[r]) || 0) - (Ze(s[a]) || 0) | 0;
          }, pathToImage: function pathToImage(t, e) {
            e = e || this.dpr;var n = document.createElement("canvas"),
                i = n.getContext("2d"),
                r = t.getBoundingRect(),
                a = t.style,
                o = a.shadowBlur * e,
                s = a.shadowOffsetX * e,
                l = a.shadowOffsetY * e,
                h = a.hasStroke() ? a.lineWidth : 0,
                u = Math.max(h / 2, -s + o),
                c = Math.max(h / 2, s + o),
                f = Math.max(h / 2, -l + o),
                d = Math.max(h / 2, l + o),
                p = r.width + u + c,
                g = r.height + f + d;n.width = p * e, n.height = g * e, i.scale(e, e), i.clearRect(0, 0, p, g), i.dpr = e;var v = { position: t.position, rotation: t.rotation, scale: t.scale };t.position = [u - r.x, f - r.y], t.rotation = 0, t.scale = [1, 1], t.updateTransform(), t && t.brush(i);var m = new je({ style: { x: 0, y: 0, image: n } });return null != v.position && (m.position = t.position = v.position), null != v.rotation && (m.rotation = t.rotation = v.rotation), null != v.scale && (m.scale = t.scale = v.scale), m;
          } };var mc = function mc(t) {
          t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function () {}, this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, su.call(this);
        };mc.prototype = { constructor: mc, addClip: function addClip(t) {
            this._clips.push(t);
          }, addAnimator: function addAnimator(t) {
            t.animation = this;for (var e = t.getClips(), n = 0; n < e.length; n++) {
              this.addClip(e[n]);
            }
          }, removeClip: function removeClip(t) {
            var e = l(this._clips, t);e >= 0 && this._clips.splice(e, 1);
          }, removeAnimator: function removeAnimator(t) {
            for (var e = t.getClips(), n = 0; n < e.length; n++) {
              this.removeClip(e[n]);
            }t.animation = null;
          }, _update: function _update() {
            for (var t = new Date().getTime() - this._pausedTime, e = t - this._time, n = this._clips, i = n.length, r = [], a = [], o = 0; o < i; o++) {
              var s = n[o],
                  l = s.step(t, e);l && (r.push(l), a.push(s));
            }for (o = 0; o < i;) {
              n[o]._needsRemove ? (n[o] = n[i - 1], n.pop(), i--) : o++;
            }i = r.length;for (o = 0; o < i; o++) {
              a[o].fire(r[o]);
            }this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update();
          }, _startLoop: function _startLoop() {
            function t() {
              e._running && (ec(t), !e._paused && e._update());
            }var e = this;this._running = !0, ec(t);
          }, start: function start() {
            this._time = new Date().getTime(), this._pausedTime = 0, this._startLoop();
          }, stop: function stop() {
            this._running = !1;
          }, pause: function pause() {
            this._paused || (this._pauseStart = new Date().getTime(), this._paused = !0);
          }, resume: function resume() {
            this._paused && (this._pausedTime += new Date().getTime() - this._pauseStart, this._paused = !1);
          }, clear: function clear() {
            this._clips = [];
          }, isFinished: function isFinished() {
            return !this._clips.length;
          }, animate: function animate(t, e) {
            var n = new Pu(t, (e = e || {}).loop, e.getter, e.setter);return this.addAnimator(n), n;
          } }, u(mc, su);var yc = function yc() {
          this._track = [];
        };yc.prototype = { constructor: yc, recognize: function recognize(t, e, n) {
            return this._doTrack(t, e, n), this._recognize(t);
          }, clear: function clear() {
            return this._track.length = 0, this;
          }, _doTrack: function _doTrack(t, e, n) {
            var i = t.touches;if (i) {
              for (var r = { points: [], touches: [], target: e, event: t }, a = 0, o = i.length; a < o; a++) {
                var s = i[a],
                    l = tt(n, s, {});r.points.push([l.zrX, l.zrY]), r.touches.push(s);
              }this._track.push(r);
            }
          }, _recognize: function _recognize(t) {
            for (var e in _c) {
              if (_c.hasOwnProperty(e)) {
                var n = _c[e](this._track, t);if (n) return n;
              }
            }
          } };var _c = { pinch: function pinch(t, e) {
            var n = t.length;if (n) {
              var i = (t[n - 1] || {}).points,
                  r = (t[n - 2] || {}).points || i;if (r && r.length > 1 && i && i.length > 1) {
                var a = en(i) / en(r);!isFinite(a) && (a = 1), e.pinchScale = a;var o = nn(i);return e.pinchX = o[0], e.pinchY = o[1], { type: "pinch", target: t[0].target, event: e };
              }
            }
          } },
            xc = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
            wc = ["touchstart", "touchend", "touchmove"],
            bc = { pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1 },
            Sc = d(xc, function (t) {
          var e = t.replace("mouse", "pointer");return bc[e] ? e : t;
        }),
            Mc = { mousemove: function mousemove(t) {
            t = nt(this.dom, t), this.trigger("mousemove", t);
          }, mouseout: function mouseout(t) {
            var e = (t = nt(this.dom, t)).toElement || t.relatedTarget;if (e != this.dom) for (; e && 9 != e.nodeType;) {
              if (e === this.dom) return;e = e.parentNode;
            }this.trigger("mouseout", t);
          }, touchstart: function touchstart(t) {
            (t = nt(this.dom, t)).zrByTouch = !0, this._lastTouchMoment = new Date(), an(this, t, "start"), Mc.mousemove.call(this, t), Mc.mousedown.call(this, t), on(this);
          }, touchmove: function touchmove(t) {
            (t = nt(this.dom, t)).zrByTouch = !0, an(this, t, "change"), Mc.mousemove.call(this, t), on(this);
          }, touchend: function touchend(t) {
            (t = nt(this.dom, t)).zrByTouch = !0, an(this, t, "end"), Mc.mouseup.call(this, t), +new Date() - this._lastTouchMoment < 300 && Mc.click.call(this, t), on(this);
          }, pointerdown: function pointerdown(t) {
            Mc.mousedown.call(this, t);
          }, pointermove: function pointermove(t) {
            sn(t) || Mc.mousemove.call(this, t);
          }, pointerup: function pointerup(t) {
            Mc.mouseup.call(this, t);
          }, pointerout: function pointerout(t) {
            sn(t) || Mc.mouseout.call(this, t);
          } };f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
          Mc[t] = function (e) {
            e = nt(this.dom, e), this.trigger(t, e);
          };
        });var Tc = hn.prototype;Tc.dispose = function () {
          for (var t = xc.concat(wc), e = 0; e < t.length; e++) {
            var n = t[e];rt(this.dom, rn(n), this._handlers[n]);
          }
        }, Tc.setCursor = function (t) {
          this.dom.style && (this.dom.style.cursor = t || "default");
        }, u(hn, su);var Ic = !Gh.canvasSupported,
            kc = { canvas: vc },
            Cc = function Cc(t, e, n) {
          n = n || {}, this.dom = e, this.id = t;var i = this,
              r = new qu(),
              a = n.renderer;if (Ic) {
            if (!kc.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");a = "vml";
          } else a && kc[a] || (a = "canvas");var o = new kc[a](e, r, n, t);this.storage = r, this.painter = o;var s = Gh.node || Gh.worker ? null : new hn(o.getViewportRoot());this.handler = new du(r, o, s, o.root), this.animation = new mc({ stage: { update: v(this.flush, this) } }), this.animation.start(), this._needsRefresh;var l = r.delFromStorage,
              h = r.addToStorage;r.delFromStorage = function (t) {
            l.call(r, t), t && t.removeSelfFromZr(i);
          }, r.addToStorage = function (t) {
            h.call(r, t), t.addSelfToZr(i);
          };
        };Cc.prototype = { constructor: Cc, getId: function getId() {
            return this.id;
          }, add: function add(t) {
            this.storage.addRoot(t), this._needsRefresh = !0;
          }, remove: function remove(t) {
            this.storage.delRoot(t), this._needsRefresh = !0;
          }, configLayer: function configLayer(t, e) {
            this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = !0;
          }, setBackgroundColor: function setBackgroundColor(t) {
            this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = !0;
          }, refreshImmediately: function refreshImmediately() {
            this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1;
          }, refresh: function refresh() {
            this._needsRefresh = !0;
          }, flush: function flush() {
            var t;this._needsRefresh && (t = !0, this.refreshImmediately()), this._needsRefreshHover && (t = !0, this.refreshHoverImmediately()), t && this.trigger("rendered");
          }, addHover: function addHover(t, e) {
            if (this.painter.addHover) {
              var n = this.painter.addHover(t, e);return this.refreshHover(), n;
            }
          }, removeHover: function removeHover(t) {
            this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover());
          }, clearHover: function clearHover() {
            this.painter.clearHover && (this.painter.clearHover(), this.refreshHover());
          }, refreshHover: function refreshHover() {
            this._needsRefreshHover = !0;
          }, refreshHoverImmediately: function refreshHoverImmediately() {
            this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover();
          }, resize: function resize(t) {
            t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize();
          }, clearAnimation: function clearAnimation() {
            this.animation.clear();
          }, getWidth: function getWidth() {
            return this.painter.getWidth();
          }, getHeight: function getHeight() {
            return this.painter.getHeight();
          }, pathToImage: function pathToImage(t, e) {
            return this.painter.pathToImage(t, e);
          }, setCursorStyle: function setCursorStyle(t) {
            this.handler.setCursorStyle(t);
          }, findHover: function findHover(t, e) {
            return this.handler.findHover(t, e);
          }, on: function on(t, e, n) {
            this.handler.on(t, e, n);
          }, off: function off(t, e) {
            this.handler.off(t, e);
          }, trigger: function trigger(t, e) {
            this.handler.trigger(t, e);
          }, clear: function clear() {
            this.storage.delRoot(), this.painter.clear();
          }, dispose: function dispose() {
            this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null;
          } };var Dc = f,
            Ac = w,
            Lc = y,
            Pc = "series\0",
            Oc = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],
            Ec = 0,
            Nc = ".",
            Bc = "___EC__COMPONENT__CONTAINER___",
            Rc = 0,
            zc = function zc(t) {
          for (var e = 0; e < t.length; e++) {
            t[e][1] || (t[e][1] = t[e][0]);
          }return function (e, n, i) {
            for (var r = {}, a = 0; a < t.length; a++) {
              var o = t[a][1];if (!(n && l(n, o) >= 0 || i && l(i, o) < 0)) {
                var s = e.getShallow(o);null != s && (r[t[a][0]] = s);
              }
            }return r;
          };
        },
            Fc = zc([["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),
            Vc = { getLineStyle: function getLineStyle(t) {
            var e = Fc(this, t),
                n = this.getLineDash(e.lineWidth);return n && (e.lineDash = n), e;
          }, getLineDash: function getLineDash(t) {
            null == t && (t = 1);var e = this.get("type"),
                n = Math.max(t, 2),
                i = 4 * t;return "solid" === e || null == e ? null : "dashed" === e ? [i, i] : [n, n];
          } },
            Wc = zc([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]]),
            Hc = { getAreaStyle: function getAreaStyle(t, e) {
            return Wc(this, t, e);
          } },
            Gc = Math.pow,
            Xc = Math.sqrt,
            qc = 1e-8,
            Yc = 1e-4,
            Uc = Xc(3),
            jc = 1 / 3,
            Zc = z(),
            $c = z(),
            Qc = z(),
            Kc = Math.min,
            Jc = Math.max,
            tf = Math.sin,
            ef = Math.cos,
            nf = 2 * Math.PI,
            rf = z(),
            af = z(),
            of = z(),
            sf = [],
            lf = [],
            hf = { M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7 },
            uf = [],
            cf = [],
            ff = [],
            df = [],
            pf = Math.min,
            gf = Math.max,
            vf = Math.cos,
            mf = Math.sin,
            yf = Math.sqrt,
            _f = Math.abs,
            xf = "undefined" != typeof Float32Array,
            wf = function wf(t) {
          this._saveData = !t, this._saveData && (this.data = []), this._ctx = null;
        };wf.prototype = { constructor: wf, _xi: 0, _yi: 0, _x0: 0, _y0: 0, _ux: 0, _uy: 0, _len: 0, _lineDash: null, _dashOffset: 0, _dashIdx: 0, _dashSum: 0, setScale: function setScale(t, e) {
            this._ux = _f(1 / Eu / t) || 0, this._uy = _f(1 / Eu / e) || 0;
          }, getContext: function getContext() {
            return this._ctx;
          }, beginPath: function beginPath(t) {
            return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this;
          }, moveTo: function moveTo(t, e) {
            return this.addData(hf.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this;
          }, lineTo: function lineTo(t, e) {
            var n = _f(t - this._xi) > this._ux || _f(e - this._yi) > this._uy || this._len < 5;return this.addData(hf.L, t, e), this._ctx && n && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), n && (this._xi = t, this._yi = e), this;
          }, bezierCurveTo: function bezierCurveTo(t, e, n, i, r, a) {
            return this.addData(hf.C, t, e, n, i, r, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, n, i, r, a) : this._ctx.bezierCurveTo(t, e, n, i, r, a)), this._xi = r, this._yi = a, this;
          }, quadraticCurveTo: function quadraticCurveTo(t, e, n, i) {
            return this.addData(hf.Q, t, e, n, i), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, n, i) : this._ctx.quadraticCurveTo(t, e, n, i)), this._xi = n, this._yi = i, this;
          }, arc: function arc(t, e, n, i, r, a) {
            return this.addData(hf.A, t, e, n, n, i, r - i, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, r, a), this._xi = vf(r) * n + t, this._yi = mf(r) * n + e, this;
          }, arcTo: function arcTo(t, e, n, i, r) {
            return this._ctx && this._ctx.arcTo(t, e, n, i, r), this;
          }, rect: function rect(t, e, n, i) {
            return this._ctx && this._ctx.rect(t, e, n, i), this.addData(hf.R, t, e, n, i), this;
          }, closePath: function closePath() {
            this.addData(hf.Z);var t = this._ctx,
                e = this._x0,
                n = this._y0;return t && (this._needsDash() && this._dashedLineTo(e, n), t.closePath()), this._xi = e, this._yi = n, this;
          }, fill: function fill(t) {
            t && t.fill(), this.toStatic();
          }, stroke: function stroke(t) {
            t && t.stroke(), this.toStatic();
          }, setLineDash: function setLineDash(t) {
            if (t instanceof Array) {
              this._lineDash = t, this._dashIdx = 0;for (var e = 0, n = 0; n < t.length; n++) {
                e += t[n];
              }this._dashSum = e;
            }return this;
          }, setLineDashOffset: function setLineDashOffset(t) {
            return this._dashOffset = t, this;
          }, len: function len() {
            return this._len;
          }, setData: function setData(t) {
            var e = t.length;this.data && this.data.length == e || !xf || (this.data = new Float32Array(e));for (var n = 0; n < e; n++) {
              this.data[n] = t[n];
            }this._len = e;
          }, appendPath: function appendPath(t) {
            t instanceof Array || (t = [t]);for (var e = t.length, n = 0, i = this._len, r = 0; r < e; r++) {
              n += t[r].len();
            }xf && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));for (r = 0; r < e; r++) {
              for (var a = t[r].data, o = 0; o < a.length; o++) {
                this.data[i++] = a[o];
              }
            }this._len = i;
          }, addData: function addData(t) {
            if (this._saveData) {
              var e = this.data;this._len + arguments.length > e.length && (this._expandData(), e = this.data);for (var n = 0; n < arguments.length; n++) {
                e[this._len++] = arguments[n];
              }this._prevCmd = t;
            }
          }, _expandData: function _expandData() {
            if (!(this.data instanceof Array)) {
              for (var t = [], e = 0; e < this._len; e++) {
                t[e] = this.data[e];
              }this.data = t;
            }
          }, _needsDash: function _needsDash() {
            return this._lineDash;
          }, _dashedLineTo: function _dashedLineTo(t, e) {
            var n,
                i,
                r = this._dashSum,
                a = this._dashOffset,
                o = this._lineDash,
                s = this._ctx,
                l = this._xi,
                h = this._yi,
                u = t - l,
                c = e - h,
                f = yf(u * u + c * c),
                d = l,
                p = h,
                g = o.length;for (u /= f, c /= f, a < 0 && (a = r + a), d -= (a %= r) * u, p -= a * c; u > 0 && d <= t || u < 0 && d >= t || 0 == u && (c > 0 && p <= e || c < 0 && p >= e);) {
              d += u * (n = o[i = this._dashIdx]), p += c * n, this._dashIdx = (i + 1) % g, u > 0 && d < l || u < 0 && d > l || c > 0 && p < h || c < 0 && p > h || s[i % 2 ? "moveTo" : "lineTo"](u >= 0 ? pf(d, t) : gf(d, t), c >= 0 ? pf(p, e) : gf(p, e));
            }u = d - t, c = p - e, this._dashOffset = -yf(u * u + c * c);
          }, _dashedBezierTo: function _dashedBezierTo(t, e, n, i, r, a) {
            var o,
                s,
                l,
                h,
                u,
                c = this._dashSum,
                f = this._dashOffset,
                d = this._lineDash,
                p = this._ctx,
                g = this._xi,
                v = this._yi,
                m = Nn,
                y = 0,
                _ = this._dashIdx,
                x = d.length,
                w = 0;for (f < 0 && (f = c + f), f %= c, o = 0; o < 1; o += .1) {
              s = m(g, t, n, r, o + .1) - m(g, t, n, r, o), l = m(v, e, i, a, o + .1) - m(v, e, i, a, o), y += yf(s * s + l * l);
            }for (; _ < x && !((w += d[_]) > f); _++) {}for (o = (w - f) / y; o <= 1;) {
              h = m(g, t, n, r, o), u = m(v, e, i, a, o), _ % 2 ? p.moveTo(h, u) : p.lineTo(h, u), o += d[_] / y, _ = (_ + 1) % x;
            }_ % 2 != 0 && p.lineTo(r, a), s = r - h, l = a - u, this._dashOffset = -yf(s * s + l * l);
          }, _dashedQuadraticTo: function _dashedQuadraticTo(t, e, n, i) {
            var r = n,
                a = i;n = (n + 2 * t) / 3, i = (i + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, n, i, r, a);
          }, toStatic: function toStatic() {
            var t = this.data;t instanceof Array && (t.length = this._len, xf && (this.data = new Float32Array(t)));
          }, getBoundingRect: function getBoundingRect() {
            uf[0] = uf[1] = ff[0] = ff[1] = Number.MAX_VALUE, cf[0] = cf[1] = df[0] = df[1] = -Number.MAX_VALUE;for (var t = this.data, e = 0, n = 0, i = 0, r = 0, a = 0; a < t.length;) {
              var o = t[a++];switch (1 == a && (i = e = t[a], r = n = t[a + 1]), o) {case hf.M:
                  e = i = t[a++], n = r = t[a++], ff[0] = i, ff[1] = r, df[0] = i, df[1] = r;break;case hf.L:
                  Un(e, n, t[a], t[a + 1], ff, df), e = t[a++], n = t[a++];break;case hf.C:
                  jn(e, n, t[a++], t[a++], t[a++], t[a++], t[a], t[a + 1], ff, df), e = t[a++], n = t[a++];break;case hf.Q:
                  Zn(e, n, t[a++], t[a++], t[a], t[a + 1], ff, df), e = t[a++], n = t[a++];break;case hf.A:
                  var s = t[a++],
                      l = t[a++],
                      h = t[a++],
                      u = t[a++],
                      c = t[a++],
                      f = t[a++] + c,
                      d = (t[a++], 1 - t[a++]);1 == a && (i = vf(c) * h + s, r = mf(c) * u + l), $n(s, l, h, u, c, f, d, ff, df), e = vf(f) * h + s, n = mf(f) * u + l;break;case hf.R:
                  Un(i = e = t[a++], r = n = t[a++], i + t[a++], r + t[a++], ff, df);break;case hf.Z:
                  e = i, n = r;}j(uf, uf, ff), Z(cf, cf, df);
            }return 0 === a && (uf[0] = uf[1] = cf[0] = cf[1] = 0), new Ut(uf[0], uf[1], cf[0] - uf[0], cf[1] - uf[1]);
          }, rebuildPath: function rebuildPath(t) {
            for (var e, n, i, r, a, o, s = this.data, l = this._ux, h = this._uy, u = this._len, c = 0; c < u;) {
              var f = s[c++];switch (1 == c && (e = i = s[c], n = r = s[c + 1]), f) {case hf.M:
                  e = i = s[c++], n = r = s[c++], t.moveTo(i, r);break;case hf.L:
                  a = s[c++], o = s[c++], (_f(a - i) > l || _f(o - r) > h || c === u - 1) && (t.lineTo(a, o), i = a, r = o);break;case hf.C:
                  t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];break;case hf.Q:
                  t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];break;case hf.A:
                  var d = s[c++],
                      p = s[c++],
                      g = s[c++],
                      v = s[c++],
                      m = s[c++],
                      y = s[c++],
                      _ = s[c++],
                      x = s[c++],
                      w = g > v ? g : v,
                      b = g > v ? 1 : g / v,
                      S = g > v ? v / g : 1,
                      M = m + y;Math.abs(g - v) > .001 ? (t.translate(d, p), t.rotate(_), t.scale(b, S), t.arc(0, 0, w, m, M, 1 - x), t.scale(1 / b, 1 / S), t.rotate(-_), t.translate(-d, -p)) : t.arc(d, p, w, m, M, 1 - x), 1 == c && (e = vf(m) * g + d, n = mf(m) * v + p), i = vf(M) * g + d, r = mf(M) * v + p;break;case hf.R:
                  e = i = s[c], n = r = s[c + 1], t.rect(s[c++], s[c++], s[c++], s[c++]);break;case hf.Z:
                  t.closePath(), i = e, r = n;}
            }
          } }, wf.CMD = hf;var bf = 2 * Math.PI,
            Sf = 2 * Math.PI,
            Mf = wf.CMD,
            Tf = 2 * Math.PI,
            If = 1e-4,
            kf = [-1, -1, -1],
            Cf = [-1, -1],
            Df = Ju.prototype.getCanvasPattern,
            Af = Math.abs,
            Lf = new wf(!0);ci.prototype = { constructor: ci, type: "path", __dirtyPath: !0, strokeContainThreshold: 5, brush: function brush(t, e) {
            var n = this.style,
                i = this.path || Lf,
                r = n.hasStroke(),
                a = n.hasFill(),
                o = n.fill,
                s = n.stroke,
                l = a && !!o.colorStops,
                h = r && !!s.colorStops,
                u = a && !!o.image,
                c = r && !!s.image;if (n.bind(t, this, e), this.setTransform(t), this.__dirty) {
              var f;l && (f = f || this.getBoundingRect(), this._fillGradient = n.getGradient(t, o, f)), h && (f = f || this.getBoundingRect(), this._strokeGradient = n.getGradient(t, s, f));
            }l ? t.fillStyle = this._fillGradient : u && (t.fillStyle = Df.call(o, t)), h ? t.strokeStyle = this._strokeGradient : c && (t.strokeStyle = Df.call(s, t));var d = n.lineDash,
                p = n.lineDashOffset,
                g = !!t.setLineDash,
                v = this.getGlobalScale();if (i.setScale(v[0], v[1]), this.__dirtyPath || d && !g && r ? (i.beginPath(t), d && !g && (i.setLineDash(d), i.setLineDashOffset(p)), this.buildPath(i, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), a) if (null != n.fillOpacity) {
              m = t.globalAlpha;t.globalAlpha = n.fillOpacity * n.opacity, i.fill(t), t.globalAlpha = m;
            } else i.fill(t);if (d && g && (t.setLineDash(d), t.lineDashOffset = p), r) if (null != n.strokeOpacity) {
              var m = t.globalAlpha;t.globalAlpha = n.strokeOpacity * n.opacity, i.stroke(t), t.globalAlpha = m;
            } else i.stroke(t);d && g && t.setLineDash([]), null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));
          }, buildPath: function buildPath(t, e, n) {}, createPathProxy: function createPathProxy() {
            this.path = new wf();
          }, getBoundingRect: function getBoundingRect() {
            var t = this._rect,
                e = this.style,
                n = !t;if (n) {
              var i = this.path;i || (i = this.path = new wf()), this.__dirtyPath && (i.beginPath(), this.buildPath(i, this.shape, !1)), t = i.getBoundingRect();
            }if (this._rect = t, e.hasStroke()) {
              var r = this._rectWithStroke || (this._rectWithStroke = t.clone());if (this.__dirty || n) {
                r.copy(t);var a = e.lineWidth,
                    o = e.strokeNoScale ? this.getLineScale() : 1;e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)), o > 1e-10 && (r.width += a / o, r.height += a / o, r.x -= a / o / 2, r.y -= a / o / 2);
              }return r;
            }return t;
          }, contain: function contain(t, e) {
            var n = this.transformCoordToLocal(t, e),
                i = this.getBoundingRect(),
                r = this.style;if (t = n[0], e = n[1], i.contain(t, e)) {
              var a = this.path.data;if (r.hasStroke()) {
                var o = r.lineWidth,
                    s = r.strokeNoScale ? this.getLineScale() : 1;if (s > 1e-10 && (r.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), ui(a, o / s, t, e))) return !0;
              }if (r.hasFill()) return hi(a, t, e);
            }return !1;
          }, dirty: function dirty(t) {
            null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = this.__dirtyText = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty();
          }, animateShape: function animateShape(t) {
            return this.animate("shape", t);
          }, attrKV: function attrKV(t, e) {
            "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : Ue.prototype.attrKV.call(this, t, e);
          }, setShape: function setShape(t, e) {
            var n = this.shape;if (n) {
              if (w(t)) for (var i in t) {
                t.hasOwnProperty(i) && (n[i] = t[i]);
              } else n[t] = e;this.dirty(!0);
            }return this;
          }, getLineScale: function getLineScale() {
            var t = this.transform;return t && Af(t[0] - 1) > 1e-10 && Af(t[3] - 1) > 1e-10 ? Math.sqrt(Af(t[0] * t[3] - t[2] * t[1])) : 1;
          } }, ci.extend = function (t) {
          var e = function e(_e2) {
            ci.call(this, _e2), t.style && this.style.extendFrom(t.style, !1);var n = t.shape;if (n) {
              this.shape = this.shape || {};var i = this.shape;for (var r in n) {
                !i.hasOwnProperty(r) && n.hasOwnProperty(r) && (i[r] = n[r]);
              }
            }t.init && t.init.call(this, _e2);
          };h(e, ci);for (var n in t) {
            "style" !== n && "shape" !== n && (e.prototype[n] = t[n]);
          }return e;
        }, h(ci, Ue);var Pf = wf.CMD,
            Of = [[], [], []],
            Ef = Math.sqrt,
            Nf = Math.atan2,
            Bf = function Bf(t, e) {
          var n,
              i,
              r,
              a,
              o,
              s,
              l = t.data,
              h = Pf.M,
              u = Pf.C,
              c = Pf.L,
              f = Pf.R,
              d = Pf.A,
              p = Pf.Q;for (r = 0, a = 0; r < l.length;) {
            switch (n = l[r++], a = r, i = 0, n) {case h:case c:
                i = 1;break;case u:
                i = 3;break;case p:
                i = 2;break;case d:
                var g = e[4],
                    v = e[5],
                    m = Ef(e[0] * e[0] + e[1] * e[1]),
                    y = Ef(e[2] * e[2] + e[3] * e[3]),
                    _ = Nf(-e[1] / y, e[0] / m);l[r] *= m, l[r++] += g, l[r] *= y, l[r++] += v, l[r++] *= m, l[r++] *= y, l[r++] += _, l[r++] += _, a = r += 2;break;case f:
                s[0] = l[r++], s[1] = l[r++], U(s, s, e), l[a++] = s[0], l[a++] = s[1], s[0] += l[r++], s[1] += l[r++], U(s, s, e), l[a++] = s[0], l[a++] = s[1];}for (o = 0; o < i; o++) {
              (s = Of[o])[0] = l[r++], s[1] = l[r++], U(s, s, e), l[a++] = s[0], l[a++] = s[1];
            }
          }
        },
            Rf = Math.sqrt,
            zf = Math.sin,
            Ff = Math.cos,
            Vf = Math.PI,
            Wf = function Wf(t) {
          return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
        },
            Hf = function Hf(t, e) {
          return (t[0] * e[0] + t[1] * e[1]) / (Wf(t) * Wf(e));
        },
            Gf = function Gf(t, e) {
          return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(Hf(t, e));
        },
            Xf = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,
            qf = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g,
            Yf = function Yf(t) {
          Ue.call(this, t);
        };Yf.prototype = { constructor: Yf, type: "text", brush: function brush(t, e) {
            var n = this.style;this.__dirty && De(n), n.fill = n.stroke = n.shadowBlur = n.shadowColor = n.shadowOffsetX = n.shadowOffsetY = null;var i = n.text;null != i && (i += ""), Ye(i, n) && (this.setTransform(t), Le(this, t, i, n, null, e), this.restoreTransform(t));
          }, getBoundingRect: function getBoundingRect() {
            var t = this.style;if (this.__dirty && De(t), !this._rect) {
              var e = t.text;null != e ? e += "" : e = "";var n = fe(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.rich);if (n.x += t.x || 0, n.y += t.y || 0, He(t.textStroke, t.textStrokeWidth)) {
                var i = t.textStrokeWidth;n.x -= i / 2, n.y -= i / 2, n.width += i, n.height += i;
              }this._rect = n;
            }return this._rect;
          } }, h(Yf, Ue);var Uf = ci.extend({ type: "circle", shape: { cx: 0, cy: 0, r: 0 }, buildPath: function buildPath(t, e, n) {
            n && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0);
          } }),
            jf = [["shadowBlur", 0], ["shadowColor", "#000"], ["shadowOffsetX", 0], ["shadowOffsetY", 0]],
            Zf = function Zf(t) {
          return Gh.browser.ie && Gh.browser.version >= 11 ? function () {
            var e,
                n = this.__clipPaths,
                i = this.style;if (n) for (var r = 0; r < n.length; r++) {
              var a = n[r],
                  o = a && a.shape,
                  s = a && a.type;if (o && ("sector" === s && o.startAngle === o.endAngle || "rect" === s && (!o.width || !o.height))) {
                for (l = 0; l < jf.length; l++) {
                  jf[l][2] = i[jf[l][0]], i[jf[l][0]] = jf[l][1];
                }e = !0;break;
              }
            }if (t.apply(this, arguments), e) for (var l = 0; l < jf.length; l++) {
              i[jf[l][0]] = jf[l][2];
            }
          } : t;
        },
            $f = ci.extend({ type: "sector", shape: { cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0 }, brush: Zf(ci.prototype.brush), buildPath: function buildPath(t, e) {
            var n = e.cx,
                i = e.cy,
                r = Math.max(e.r0 || 0, 0),
                a = Math.max(e.r, 0),
                o = e.startAngle,
                s = e.endAngle,
                l = e.clockwise,
                h = Math.cos(o),
                u = Math.sin(o);t.moveTo(h * r + n, u * r + i), t.lineTo(h * a + n, u * a + i), t.arc(n, i, a, o, s, !l), t.lineTo(Math.cos(s) * r + n, Math.sin(s) * r + i), 0 !== r && t.arc(n, i, r, s, o, l), t.closePath();
          } }),
            Qf = ci.extend({ type: "ring", shape: { cx: 0, cy: 0, r: 0, r0: 0 }, buildPath: function buildPath(t, e) {
            var n = e.cx,
                i = e.cy,
                r = 2 * Math.PI;t.moveTo(n + e.r, i), t.arc(n, i, e.r, 0, r, !1), t.moveTo(n + e.r0, i), t.arc(n, i, e.r0, 0, r, !0);
          } }),
            Kf = function Kf(t, e) {
          for (var n = t.length, i = [], r = 0, a = 1; a < n; a++) {
            r += Y(t[a - 1], t[a]);
          }var o = r / 2;o = o < n ? n : o;for (a = 0; a < o; a++) {
            var s,
                l,
                h,
                u = a / (o - 1) * (e ? n : n - 1),
                c = Math.floor(u),
                f = u - c,
                d = t[c % n];e ? (s = t[(c - 1 + n) % n], l = t[(c + 1) % n], h = t[(c + 2) % n]) : (s = t[0 === c ? c : c - 1], l = t[c > n - 2 ? n - 1 : c + 1], h = t[c > n - 3 ? n - 1 : c + 2]);var p = f * f,
                g = f * p;i.push([mi(s[0], d[0], l[0], h[0], f, p, g), mi(s[1], d[1], l[1], h[1], f, p, g)]);
          }return i;
        },
            Jf = function Jf(t, e, n, i) {
          var r,
              a,
              o,
              s,
              l = [],
              h = [],
              u = [],
              c = [];if (i) {
            o = [1 / 0, 1 / 0], s = [-1 / 0, -1 / 0];for (var f = 0, d = t.length; f < d; f++) {
              j(o, o, t[f]), Z(s, s, t[f]);
            }j(o, o, i[0]), Z(s, s, i[1]);
          }for (var f = 0, d = t.length; f < d; f++) {
            var p = t[f];if (n) r = t[f ? f - 1 : d - 1], a = t[(f + 1) % d];else {
              if (0 === f || f === d - 1) {
                l.push(F(t[f]));continue;
              }r = t[f - 1], a = t[f + 1];
            }W(h, a, r), X(h, h, e);var g = Y(p, r),
                v = Y(p, a),
                m = g + v;0 !== m && (g /= m, v /= m), X(u, h, -g), X(c, h, v);var y = V([], p, u),
                _ = V([], p, c);i && (Z(y, y, o), j(y, y, s), Z(_, _, o), j(_, _, s)), l.push(y), l.push(_);
          }return n && l.push(l.shift()), l;
        },
            td = ci.extend({ type: "polygon", shape: { points: null, smooth: !1, smoothConstraint: null }, buildPath: function buildPath(t, e) {
            yi(t, e, !0);
          } }),
            ed = ci.extend({ type: "polyline", shape: { points: null, smooth: !1, smoothConstraint: null }, style: { stroke: "#000", fill: null }, buildPath: function buildPath(t, e) {
            yi(t, e, !1);
          } }),
            nd = ci.extend({ type: "rect", shape: { r: 0, x: 0, y: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {
            var n = e.x,
                i = e.y,
                r = e.width,
                a = e.height;e.r ? Ce(t, e) : t.rect(n, i, r, a), t.closePath();
          } }),
            id = ci.extend({ type: "line", shape: { x1: 0, y1: 0, x2: 0, y2: 0, percent: 1 }, style: { stroke: "#000", fill: null }, buildPath: function buildPath(t, e) {
            var n = e.x1,
                i = e.y1,
                r = e.x2,
                a = e.y2,
                o = e.percent;0 !== o && (t.moveTo(n, i), o < 1 && (r = n * (1 - o) + r * o, a = i * (1 - o) + a * o), t.lineTo(r, a));
          }, pointAt: function pointAt(t) {
            var e = this.shape;return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t];
          } }),
            rd = [],
            ad = ci.extend({ type: "bezier-curve", shape: { x1: 0, y1: 0, x2: 0, y2: 0, cpx1: 0, cpy1: 0, percent: 1 }, style: { stroke: "#000", fill: null }, buildPath: function buildPath(t, e) {
            var n = e.x1,
                i = e.y1,
                r = e.x2,
                a = e.y2,
                o = e.cpx1,
                s = e.cpy1,
                l = e.cpx2,
                h = e.cpy2,
                u = e.percent;0 !== u && (t.moveTo(n, i), null == l || null == h ? (u < 1 && (qn(n, o, r, u, rd), o = rd[1], r = rd[2], qn(i, s, a, u, rd), s = rd[1], a = rd[2]), t.quadraticCurveTo(o, s, r, a)) : (u < 1 && (Fn(n, o, l, r, u, rd), o = rd[1], l = rd[2], r = rd[3], Fn(i, s, h, a, u, rd), s = rd[1], h = rd[2], a = rd[3]), t.bezierCurveTo(o, s, l, h, r, a)));
          }, pointAt: function pointAt(t) {
            return _i(this.shape, t, !1);
          }, tangentAt: function tangentAt(t) {
            var e = _i(this.shape, t, !0);return q(e, e);
          } }),
            od = ci.extend({ type: "arc", shape: { cx: 0, cy: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0 }, style: { stroke: "#000", fill: null }, buildPath: function buildPath(t, e) {
            var n = e.cx,
                i = e.cy,
                r = Math.max(e.r, 0),
                a = e.startAngle,
                o = e.endAngle,
                s = e.clockwise,
                l = Math.cos(a),
                h = Math.sin(a);t.moveTo(l * r + n, h * r + i), t.arc(n, i, r, a, o, !s);
          } }),
            sd = ci.extend({ type: "compound", shape: { paths: null }, _updatePathDirty: function _updatePathDirty() {
            for (var t = this.__dirtyPath, e = this.shape.paths, n = 0; n < e.length; n++) {
              t = t || e[n].__dirtyPath;
            }this.__dirtyPath = t, this.__dirty = this.__dirty || t;
          }, beforeBrush: function beforeBrush() {
            this._updatePathDirty();for (var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++) {
              t[n].path || t[n].createPathProxy(), t[n].path.setScale(e[0], e[1]);
            }
          }, buildPath: function buildPath(t, e) {
            for (var n = e.paths || [], i = 0; i < n.length; i++) {
              n[i].buildPath(t, n[i].shape, !0);
            }
          }, afterBrush: function afterBrush() {
            for (var t = this.shape.paths || [], e = 0; e < t.length; e++) {
              t[e].__dirtyPath = !1;
            }
          }, getBoundingRect: function getBoundingRect() {
            return this._updatePathDirty(), ci.prototype.getBoundingRect.call(this);
          } }),
            ld = function ld(t) {
          this.colorStops = t || [];
        };ld.prototype = { constructor: ld, addColorStop: function addColorStop(t, e) {
            this.colorStops.push({ offset: t, color: e });
          } };var hd = function hd(t, e, n, i, r, a) {
          this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == n ? 1 : n, this.y2 = null == i ? 0 : i, this.type = "linear", this.global = a || !1, ld.call(this, r);
        };hd.prototype = { constructor: hd }, h(hd, ld);var ud = function ud(t, e, n, i, r) {
          this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == n ? .5 : n, this.type = "radial", this.global = r || !1, ld.call(this, i);
        };ud.prototype = { constructor: ud }, h(ud, ld), xi.prototype.incremental = !0, xi.prototype.clearDisplaybles = function () {
          this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), this.notClear = !1;
        }, xi.prototype.addDisplayable = function (t, e) {
          e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty();
        }, xi.prototype.addDisplayables = function (t, e) {
          e = e || !1;for (var n = 0; n < t.length; n++) {
            this.addDisplayable(t[n], e);
          }
        }, xi.prototype.eachPendingDisplayable = function (t) {
          for (e = this._cursor; e < this._displayables.length; e++) {
            t && t(this._displayables[e]);
          }for (var e = 0; e < this._temporaryDisplayables.length; e++) {
            t && t(this._temporaryDisplayables[e]);
          }
        }, xi.prototype.update = function () {
          this.updateTransform();for (t = this._cursor; t < this._displayables.length; t++) {
            (e = this._displayables[t]).parent = this, e.update(), e.parent = null;
          }for (var t = 0; t < this._temporaryDisplayables.length; t++) {
            var e = this._temporaryDisplayables[t];e.parent = this, e.update(), e.parent = null;
          }
        }, xi.prototype.brush = function (t, e) {
          for (n = this._cursor; n < this._displayables.length; n++) {
            (i = this._displayables[n]).beforeBrush && i.beforeBrush(t), i.brush(t, n === this._cursor ? null : this._displayables[n - 1]), i.afterBrush && i.afterBrush(t);
          }this._cursor = n;for (var n = 0; n < this._temporaryDisplayables.length; n++) {
            var i = this._temporaryDisplayables[n];i.beforeBrush && i.beforeBrush(t), i.brush(t, 0 === n ? null : this._temporaryDisplayables[n - 1]), i.afterBrush && i.afterBrush(t);
          }this._temporaryDisplayables = [], this.notClear = !0;
        };var cd = [];xi.prototype.getBoundingRect = function () {
          if (!this._rect) {
            for (var t = new Ut(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
              var n = this._displayables[e],
                  i = n.getBoundingRect().clone();n.needLocalTransform() && i.applyTransform(n.getLocalTransform(cd)), t.union(i);
            }this._rect = t;
          }return this._rect;
        }, xi.prototype.contain = function (t, e) {
          var n = this.transformCoordToLocal(t, e);if (this.getBoundingRect().contain(n[0], n[1])) for (var i = 0; i < this._displayables.length; i++) {
            if (this._displayables[i].contain(t, e)) return !0;
          }return !1;
        }, h(xi, Ue);var fd = Math.round,
            dd = Math.max,
            pd = Math.min,
            gd = {},
            vd = B(),
            md = 0,
            yd = (Object.freeze || Object)({ extendShape: wi, extendPath: function extendPath(t, e) {
            return vi(t, e);
          }, makePath: bi, makeImage: Si, mergePath: function mergePath(t, e) {
            for (var n = [], i = t.length, r = 0; r < i; r++) {
              var a = t[r];a.path || a.createPathProxy(), a.__dirtyPath && a.buildPath(a.path, a.shape, !0), n.push(a.path);
            }var o = new ci(e);return o.createPathProxy(), o.buildPath = function (t) {
              t.appendPath(n);var e = t.getContext();e && t.rebuildPath(e);
            }, o;
          }, resizePath: Ti, subPixelOptimizeLine: Ii, subPixelOptimizeRect: function subPixelOptimizeRect(t) {
            var e = t.shape,
                n = t.style.lineWidth,
                i = e.x,
                r = e.y,
                a = e.width,
                o = e.height;return e.x = ki(e.x, n, !0), e.y = ki(e.y, n, !0), e.width = Math.max(ki(i + a, n, !1) - e.x, 0 === a ? 0 : 1), e.height = Math.max(ki(r + o, n, !1) - e.y, 0 === o ? 0 : 1), t;
          }, subPixelOptimize: ki, setElementHoverStyle: Bi, isInEmphasis: Ri, setHoverStyle: Hi, setAsHoverStyleTrigger: Gi, setLabelStyle: Xi, setTextStyle: qi, setText: function setText(t, e, n) {
            var i,
                r = { isRectText: !0 };!1 === n ? i = !0 : r.autoColor = n, Yi(t, e, r, i);
          }, getFont: Ki, updateProps: tr, initProps: er, getTransform: function getTransform(t, e) {
            for (var n = ut([]); t && t !== e;) {
              ft(n, t.getLocalTransform(), n), t = t.parent;
            }return n;
          }, applyTransform: nr, transformDirection: function transformDirection(t, e, n) {
            var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
                r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
                a = ["left" === t ? -i : "right" === t ? i : 0, "top" === t ? -r : "bottom" === t ? r : 0];return a = nr(a, e, n), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top";
          }, groupTransition: ir, clipPointsByRect: function clipPointsByRect(t, e) {
            return d(t, function (t) {
              var n = t[0];n = dd(n, e.x), n = pd(n, e.x + e.width);var i = t[1];return i = dd(i, e.y), i = pd(i, e.y + e.height), [n, i];
            });
          }, clipRectByRect: function clipRectByRect(t, e) {
            var n = dd(t.x, e.x),
                i = pd(t.x + t.width, e.x + e.width),
                r = dd(t.y, e.y),
                a = pd(t.y + t.height, e.y + e.height);if (i >= n && a >= r) return { x: n, y: r, width: i - n, height: a - r };
          }, createIcon: function createIcon(t, e, n) {
            var i = (e = a({ rectHover: !0 }, e)).style = { strokeNoScale: !0 };if (n = n || { x: -1, y: -1, width: 2, height: 2 }, t) return 0 === t.indexOf("image://") ? (i.image = t.slice(8), o(i, n), new je(e)) : bi(t.replace("path://", ""), e, n, "center");
          }, Group: Hu, Image: je, Text: Yf, Circle: Uf, Sector: $f, Ring: Qf, Polygon: td, Polyline: ed, Rect: nd, Line: id, BezierCurve: ad, Arc: od, IncrementalDisplayable: xi, CompoundPath: sd, LinearGradient: hd, RadialGradient: ud, BoundingRect: Ut }),
            _d = ["textStyle", "color"],
            xd = { getTextColor: function getTextColor(t) {
            var e = this.ecModel;return this.getShallow("color") || (!t && e ? e.get(_d) : null);
          }, getFont: function getFont() {
            return Ki({ fontStyle: this.getShallow("fontStyle"), fontWeight: this.getShallow("fontWeight"), fontSize: this.getShallow("fontSize"), fontFamily: this.getShallow("fontFamily") }, this.ecModel);
          }, getTextRect: function getTextRect(t) {
            return fe(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("rich"), this.getShallow("truncateText"));
          } },
            wd = zc([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["textPosition"], ["textAlign"]]),
            bd = { getItemStyle: function getItemStyle(t, e) {
            var n = wd(this, t, e),
                i = this.getBorderLineDash();return i && (n.lineDash = i), n;
          }, getBorderLineDash: function getBorderLineDash() {
            var t = this.get("borderType");return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1];
          } },
            Sd = u,
            Md = xn();rr.prototype = { constructor: rr, init: null, mergeOption: function mergeOption(t) {
            i(this.option, t, !0);
          }, get: function get(t, e) {
            return null == t ? this.option : ar(this.option, this.parsePath(t), !e && or(this, t));
          }, getShallow: function getShallow(t, e) {
            var n = this.option,
                i = null == n ? n : n[t],
                r = !e && or(this, t);return null == i && r && (i = r.getShallow(t)), i;
          }, getModel: function getModel(t, e) {
            var n,
                i = null == t ? this.option : ar(this.option, t = this.parsePath(t));return e = e || (n = or(this, t)) && n.getModel(t), new rr(i, e, this.ecModel);
          }, isEmpty: function isEmpty() {
            return null == this.option;
          }, restoreData: function restoreData() {}, clone: function clone() {
            return new (0, this.constructor)(n(this.option));
          }, setReadOnly: function setReadOnly(t) {}, parsePath: function parsePath(t) {
            return "string" == typeof t && (t = t.split(".")), t;
          }, customizeGetParent: function customizeGetParent(t) {
            Md(this).getParent = t;
          }, isAnimationEnabled: function isAnimationEnabled() {
            if (!Gh.node) {
              if (null != this.option.animation) return !!this.option.animation;if (this.parentModel) return this.parentModel.isAnimationEnabled();
            }
          } }, Cn(rr), Dn(rr), Sd(rr, Vc), Sd(rr, Hc), Sd(rr, xd), Sd(rr, bd);var Td = 0,
            Id = 1e-4,
            kd = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,
            Cd = A,
            Dd = /([&<>"'])/g,
            Ad = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
            Ld = ["a", "b", "c", "d", "e", "f", "g"],
            Pd = function Pd(t, e) {
          return "{" + t + (null == e ? "" : e) + "}";
        },
            Od = ye,
            Ed = f,
            Nd = ["left", "right", "top", "bottom", "width", "height"],
            Bd = [["width", "left", "right"], ["height", "top", "bottom"]],
            Rd = (m(kr, "vertical"), m(kr, "horizontal"), { getBoxLayoutParams: function getBoxLayoutParams() {
            return { left: this.get("left"), top: this.get("top"), right: this.get("right"), bottom: this.get("bottom"), width: this.get("width"), height: this.get("height") };
          } }),
            zd = xn(),
            Fd = rr.extend({ type: "component", id: "", name: "", mainType: "", subType: "", componentIndex: 0, defaultOption: null, ecModel: null, dependentModels: [], uid: null, layoutMode: null, $constructor: function $constructor(t, e, n, i) {
            rr.call(this, t, e, n, i), this.uid = sr("ec_cpt_model");
          }, init: function init(t, e, n, i) {
            this.mergeDefaultAndTheme(t, n);
          }, mergeDefaultAndTheme: function mergeDefaultAndTheme(t, e) {
            var n = this.layoutMode,
                r = n ? Ar(t) : {};i(t, e.getTheme().get(this.mainType)), i(t, this.getDefaultOption()), n && Dr(t, r, n);
          }, mergeOption: function mergeOption(t, e) {
            i(this.option, t, !0);var n = this.layoutMode;n && Dr(this.option, t, n);
          }, optionUpdated: function optionUpdated(t, e) {}, getDefaultOption: function getDefaultOption() {
            var t = zd(this);if (!t.defaultOption) {
              for (var e = [], n = this.constructor; n;) {
                var r = n.prototype.defaultOption;r && e.push(r), n = n.superClass;
              }for (var a = {}, o = e.length - 1; o >= 0; o--) {
                a = i(a, e[o], !0);
              }t.defaultOption = a;
            }return t.defaultOption;
          }, getReferringComponents: function getReferringComponents(t) {
            return this.ecModel.queryComponents({ mainType: t, index: this.get(t + "Index", !0), id: this.get(t + "Id", !0) });
          } });Pn(Fd, { registerWhenExtend: !0 }), function (t) {
          var e = {};t.registerSubTypeDefaulter = function (t, n) {
            t = In(t), e[t.main] = n;
          }, t.determineSubType = function (n, i) {
            var r = i.type;if (!r) {
              var a = In(n).main;t.hasSubTypes(n) && e[a] && (r = e[a](i));
            }return r;
          };
        }(Fd), function (t, e) {
          function n(t) {
            var n = {},
                a = [];return f(t, function (o) {
              var s = i(n, o),
                  h = r(s.originalDeps = e(o), t);s.entryCount = h.length, 0 === s.entryCount && a.push(o), f(h, function (t) {
                l(s.predecessor, t) < 0 && s.predecessor.push(t);var e = i(n, t);l(e.successor, t) < 0 && e.successor.push(o);
              });
            }), { graph: n, noEntryList: a };
          }function i(t, e) {
            return t[e] || (t[e] = { predecessor: [], successor: [] }), t[e];
          }function r(t, e) {
            var n = [];return f(t, function (t) {
              l(e, t) >= 0 && n.push(t);
            }), n;
          }t.topologicalTravel = function (t, e, i, r) {
            function a(t) {
              s[t].entryCount--, 0 === s[t].entryCount && l.push(t);
            }if (t.length) {
              var o = n(e),
                  s = o.graph,
                  l = o.noEntryList,
                  h = {};for (f(t, function (t) {
                h[t] = !0;
              }); l.length;) {
                var u = l.pop(),
                    c = s[u],
                    d = !!h[u];d && (i.call(r, u, c.originalDeps.slice()), delete h[u]), f(c.successor, d ? function (t) {
                  h[t] = !0, a(t);
                } : a);
              }f(h, function () {
                throw new Error("Circle dependency may exists");
              });
            }
          };
        }(Fd, function (t) {
          var e = [];return f(Fd.getClassesByMainType(t), function (t) {
            e = e.concat(t.prototype.dependencies || []);
          }), e = d(e, function (t) {
            return In(t).main;
          }), "dataset" !== t && l(e, "dataset") <= 0 && e.unshift("dataset"), e;
        }), u(Fd, Rd);var Vd = "";"undefined" != typeof navigator && (Vd = navigator.platform || "");var Wd = { color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"], gradientColor: ["#f6efa6", "#d88273", "#bf444c"], textStyle: { fontFamily: Vd.match(/^Win/) ? "Microsoft YaHei" : "sans-serif", fontSize: 12, fontStyle: "normal", fontWeight: "normal" }, blendMode: null, animation: "auto", animationDuration: 1e3, animationDurationUpdate: 300, animationEasing: "exponentialOut", animationEasingUpdate: "cubicOut", animationThreshold: 2e3, progressiveThreshold: 3e3, progressive: 400, hoverLayerThreshold: 3e3, useUTC: !1 },
            Hd = xn(),
            Gd = { clearColorPalette: function clearColorPalette() {
            Hd(this).colorIdx = 0, Hd(this).colorNameMap = {};
          }, getColorFromPalette: function getColorFromPalette(t, e, n) {
            var i = Hd(e = e || this),
                r = i.colorIdx || 0,
                a = i.colorNameMap = i.colorNameMap || {};if (a.hasOwnProperty(t)) return a[t];var o = cn(this.get("color", !0)),
                s = this.get("colorLayer", !0),
                l = null != n && s ? Pr(s, n) : o;if ((l = l || o) && l.length) {
              var h = l[r];return t && (a[t] = h), i.colorIdx = (r + 1) % l.length, h;
            }
          } },
            Xd = { cartesian2d: function cartesian2d(t, e, n, i) {
            var r = t.getReferringComponents("xAxis")[0],
                a = t.getReferringComponents("yAxis")[0];e.coordSysDims = ["x", "y"], n.set("x", r), n.set("y", a), Er(r) && (i.set("x", r), e.firstCategoryDimIndex = 0), Er(a) && (i.set("y", a), e.firstCategoryDimIndex = 1);
          }, singleAxis: function singleAxis(t, e, n, i) {
            var r = t.getReferringComponents("singleAxis")[0];e.coordSysDims = ["single"], n.set("single", r), Er(r) && (i.set("single", r), e.firstCategoryDimIndex = 0);
          }, polar: function polar(t, e, n, i) {
            var r = t.getReferringComponents("polar")[0],
                a = r.findAxisModel("radiusAxis"),
                o = r.findAxisModel("angleAxis");e.coordSysDims = ["radius", "angle"], n.set("radius", a), n.set("angle", o), Er(a) && (i.set("radius", a), e.firstCategoryDimIndex = 0), Er(o) && (i.set("angle", o), e.firstCategoryDimIndex = 1);
          }, geo: function geo(t, e, n, i) {
            e.coordSysDims = ["lng", "lat"];
          }, parallel: function parallel(t, e, n, i) {
            var r = t.ecModel,
                a = r.getComponent("parallel", t.get("parallelIndex")),
                o = e.coordSysDims = a.dimensions.slice();f(a.parallelAxisIndex, function (t, a) {
              var s = r.getComponent("parallelAxis", t),
                  l = o[a];n.set(l, s), Er(s) && null == e.firstCategoryDimIndex && (i.set(l, s), e.firstCategoryDimIndex = a);
            });
          } },
            qd = "original",
            Yd = "arrayRows",
            Ud = "objectRows",
            jd = "keyedColumns",
            Zd = "unknown",
            $d = "typedArray",
            Qd = "column",
            Kd = "row";Nr.seriesDataToSource = function (t) {
          return new Nr({ data: t, sourceFormat: S(t) ? $d : qd, fromDataset: !1 });
        }, Dn(Nr);var Jd = xn(),
            tp = "\0_ec_inner",
            ep = rr.extend({ init: function init(t, e, n, i) {
            n = n || {}, this.option = null, this._theme = new rr(n), this._optionManager = i;
          }, setOption: function setOption(t, e) {
            L(!(tp in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption(null);
          }, resetOption: function resetOption(t) {
            var e = !1,
                n = this._optionManager;if (!t || "recreate" === t) {
              var i = n.mountOption("recreate" === t);this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(i)) : $r.call(this, i), e = !0;
            }if ("timeline" !== t && "media" !== t || this.restoreData(), !t || "recreate" === t || "timeline" === t) {
              var r = n.getTimelineOption(this);r && (this.mergeOption(r), e = !0);
            }if (!t || "recreate" === t || "media" === t) {
              var a = n.getMediaOption(this, this._api);a.length && f(a, function (t) {
                this.mergeOption(t, e = !0);
              }, this);
            }return e;
          }, mergeOption: function mergeOption(t) {
            var e = this.option,
                r = this._componentsMap,
                o = [];zr(this), f(t, function (t, r) {
              null != t && (Fd.hasClass(r) ? r && o.push(r) : e[r] = null == e[r] ? n(t) : i(e[r], t, !0));
            }), Fd.topologicalTravel(o, Fd.getAllClassMainTypes(), function (n, i) {
              var o = cn(t[n]),
                  s = gn(r.get(n), o);vn(s), f(s, function (t, e) {
                var i = t.option;w(i) && (t.keyInfo.mainType = n, t.keyInfo.subType = Kr(n, i, t.exist));
              });var l = Qr(r, i);e[n] = [], r.set(n, []), f(s, function (t, i) {
                var o = t.exist,
                    s = t.option;if (L(w(s) || o, "Empty component definition"), s) {
                  var h = Fd.getClass(n, t.keyInfo.subType, !0);if (o && o instanceof h) o.name = t.keyInfo.name, o.mergeOption(s, this), o.optionUpdated(s, !1);else {
                    var u = a({ dependentModels: l, componentIndex: i }, t.keyInfo);a(o = new h(s, this, this, u), u), o.init(s, this, this, u), o.optionUpdated(null, !0);
                  }
                } else o.mergeOption({}, this), o.optionUpdated({}, !1);r.get(n)[i] = o, e[n][i] = o.option;
              }, this), "series" === n && Jr(this, r.get("series"));
            }, this), this._seriesIndicesMap = B(this._seriesIndices = this._seriesIndices || []);
          }, getOption: function getOption() {
            var t = n(this.option);return f(t, function (e, n) {
              if (Fd.hasClass(n)) {
                for (var i = (e = cn(e)).length - 1; i >= 0; i--) {
                  yn(e[i]) && e.splice(i, 1);
                }t[n] = e;
              }
            }), delete t[tp], t;
          }, getTheme: function getTheme() {
            return this._theme;
          }, getComponent: function getComponent(t, e) {
            var n = this._componentsMap.get(t);if (n) return n[e || 0];
          }, queryComponents: function queryComponents(t) {
            var e = t.mainType;if (!e) return [];var n = t.index,
                i = t.id,
                r = t.name,
                a = this._componentsMap.get(e);if (!a || !a.length) return [];var o;if (null != n) y(n) || (n = [n]), o = g(d(n, function (t) {
              return a[t];
            }), function (t) {
              return !!t;
            });else if (null != i) {
              var s = y(i);o = g(a, function (t) {
                return s && l(i, t.id) >= 0 || !s && t.id === i;
              });
            } else if (null != r) {
              var h = y(r);o = g(a, function (t) {
                return h && l(r, t.name) >= 0 || !h && t.name === r;
              });
            } else o = a.slice();return ta(o, t);
          }, findComponents: function findComponents(t) {
            var e = t.query,
                n = t.mainType,
                i = function (t) {
              var e = n + "Index",
                  i = n + "Id",
                  r = n + "Name";return !t || null == t[e] && null == t[i] && null == t[r] ? null : { mainType: n, index: t[e], id: t[i], name: t[r] };
            }(e);return function (e) {
              return t.filter ? g(e, t.filter) : e;
            }(ta(i ? this.queryComponents(i) : this._componentsMap.get(n), t));
          }, eachComponent: function eachComponent(t, e, n) {
            var i = this._componentsMap;"function" == typeof t ? (n = e, e = t, i.each(function (t, i) {
              f(t, function (t, r) {
                e.call(n, i, t, r);
              });
            })) : x(t) ? f(i.get(t), e, n) : w(t) && f(this.findComponents(t), e, n);
          }, getSeriesByName: function getSeriesByName(t) {
            return g(this._componentsMap.get("series"), function (e) {
              return e.name === t;
            });
          }, getSeriesByIndex: function getSeriesByIndex(t) {
            return this._componentsMap.get("series")[t];
          }, getSeriesByType: function getSeriesByType(t) {
            return g(this._componentsMap.get("series"), function (e) {
              return e.subType === t;
            });
          }, getSeries: function getSeries() {
            return this._componentsMap.get("series").slice();
          }, getSeriesCount: function getSeriesCount() {
            return this._componentsMap.get("series").length;
          }, eachSeries: function eachSeries(t, e) {
            f(this._seriesIndices, function (n) {
              var i = this._componentsMap.get("series")[n];t.call(e, i, n);
            }, this);
          }, eachRawSeries: function eachRawSeries(t, e) {
            f(this._componentsMap.get("series"), t, e);
          }, eachSeriesByType: function eachSeriesByType(t, e, n) {
            f(this._seriesIndices, function (i) {
              var r = this._componentsMap.get("series")[i];r.subType === t && e.call(n, r, i);
            }, this);
          }, eachRawSeriesByType: function eachRawSeriesByType(t, e, n) {
            return f(this.getSeriesByType(t), e, n);
          }, isSeriesFiltered: function isSeriesFiltered(t) {
            return null == this._seriesIndicesMap.get(t.componentIndex);
          }, getCurrentSeriesIndices: function getCurrentSeriesIndices() {
            return (this._seriesIndices || []).slice();
          }, filterSeries: function filterSeries(t, e) {
            Jr(this, g(this._componentsMap.get("series"), t, e));
          }, restoreData: function restoreData(t) {
            var e = this._componentsMap;Jr(this, e.get("series"));var n = [];e.each(function (t, e) {
              n.push(e);
            }), Fd.topologicalTravel(n, Fd.getAllClassMainTypes(), function (n, i) {
              f(e.get(n), function (e) {
                ("series" !== n || !jr(e, t)) && e.restoreData();
              });
            });
          } });u(ep, Gd);var np = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"],
            ip = {};na.prototype = { constructor: na, create: function create(t, e) {
            var n = [];f(ip, function (i, r) {
              var a = i.create(t, e);n = n.concat(a || []);
            }), this._coordinateSystems = n;
          }, update: function update(t, e) {
            f(this._coordinateSystems, function (n) {
              n.update && n.update(t, e);
            });
          }, getCoordinateSystems: function getCoordinateSystems() {
            return this._coordinateSystems.slice();
          } }, na.register = function (t, e) {
          ip[t] = e;
        }, na.get = function (t) {
          return ip[t];
        };var rp = f,
            ap = n,
            op = d,
            sp = i,
            lp = /^(min|max)?(.+)$/;ia.prototype = { constructor: ia, setOption: function setOption(t, e) {
            t && f(cn(t.series), function (t) {
              t && t.data && S(t.data) && O(t.data);
            }), t = ap(t, !0);var n = this._optionBackup,
                i = ra.call(this, t, e, !n);this._newBaseOption = i.baseOption, n ? (la(n.baseOption, i.baseOption), i.timelineOptions.length && (n.timelineOptions = i.timelineOptions), i.mediaList.length && (n.mediaList = i.mediaList), i.mediaDefault && (n.mediaDefault = i.mediaDefault)) : this._optionBackup = i;
          }, mountOption: function mountOption(t) {
            var e = this._optionBackup;return this._timelineOptions = op(e.timelineOptions, ap), this._mediaList = op(e.mediaList, ap), this._mediaDefault = ap(e.mediaDefault), this._currentMediaIndices = [], ap(t ? e.baseOption : this._newBaseOption);
          }, getTimelineOption: function getTimelineOption(t) {
            var e,
                n = this._timelineOptions;if (n.length) {
              var i = t.getComponent("timeline");i && (e = ap(n[i.getCurrentIndex()], !0));
            }return e;
          }, getMediaOption: function getMediaOption(t) {
            var e = this._api.getWidth(),
                n = this._api.getHeight(),
                i = this._mediaList,
                r = this._mediaDefault,
                a = [],
                o = [];if (!i.length && !r) return o;for (var s = 0, l = i.length; s < l; s++) {
              aa(i[s].query, e, n) && a.push(s);
            }return !a.length && r && (a = [-1]), a.length && !sa(a, this._currentMediaIndices) && (o = op(a, function (t) {
              return ap(-1 === t ? r.option : i[t].option);
            })), this._currentMediaIndices = a, o;
          } };var hp = f,
            up = w,
            cp = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"],
            fp = function fp(t, e) {
          hp(ga(t.series), function (t) {
            up(t) && pa(t);
          });var n = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), hp(n, function (e) {
            hp(ga(t[e]), function (t) {
              t && (fa(t, "axisLabel"), fa(t.axisPointer, "label"));
            });
          }), hp(ga(t.parallel), function (t) {
            var e = t && t.parallelAxisDefault;fa(e, "axisLabel"), fa(e && e.axisPointer, "label");
          }), hp(ga(t.calendar), function (t) {
            ua(t, "itemStyle"), fa(t, "dayLabel"), fa(t, "monthLabel"), fa(t, "yearLabel");
          }), hp(ga(t.radar), function (t) {
            fa(t, "name");
          }), hp(ga(t.geo), function (t) {
            up(t) && (da(t), hp(ga(t.regions), function (t) {
              da(t);
            }));
          }), hp(ga(t.timeline), function (t) {
            da(t), ua(t, "label"), ua(t, "itemStyle"), ua(t, "controlStyle", !0);var e = t.data;y(e) && f(e, function (t) {
              w(t) && (ua(t, "label"), ua(t, "itemStyle"));
            });
          }), hp(ga(t.toolbox), function (t) {
            ua(t, "iconStyle"), hp(t.feature, function (t) {
              ua(t, "iconStyle");
            });
          }), fa(va(t.axisPointer), "label"), fa(va(t.tooltip).axisPointer, "label");
        },
            dp = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]],
            pp = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
            gp = function gp(t, e) {
          fp(t, e), t.series = cn(t.series), f(t.series, function (t) {
            if (w(t)) {
              var e = t.type;if ("pie" !== e && "gauge" !== e || null != t.clockWise && (t.clockwise = t.clockWise), "gauge" === e) {
                var n = ma(t, "pointer.color");null != n && ya(t, "itemStyle.normal.color", n);
              }_a(t);
            }
          }), t.dataRange && (t.visualMap = t.dataRange), f(pp, function (e) {
            var n = t[e];n && (y(n) || (n = [n]), f(n, function (t) {
              _a(t);
            }));
          });
        },
            vp = wa.prototype;vp.pure = !1, vp.persistent = !0, vp.getSource = function () {
          return this._source;
        };var mp = { arrayRows_column: { pure: !0, count: function count() {
              return Math.max(0, this._data.length - this._source.startIndex);
            }, getItem: function getItem(t) {
              return this._data[t + this._source.startIndex];
            }, appendData: Ma }, arrayRows_row: { pure: !0, count: function count() {
              var t = this._data[0];return t ? Math.max(0, t.length - this._source.startIndex) : 0;
            }, getItem: function getItem(t) {
              t += this._source.startIndex;for (var e = [], n = this._data, i = 0; i < n.length; i++) {
                var r = n[i];e.push(r ? r[t] : null);
              }return e;
            }, appendData: function appendData() {
              throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
            } }, objectRows: { pure: !0, count: ba, getItem: Sa, appendData: Ma }, keyedColumns: { pure: !0, count: function count() {
              var t = this._source.dimensionsDefine[0].name,
                  e = this._data[t];return e ? e.length : 0;
            }, getItem: function getItem(t) {
              for (var e = [], n = this._source.dimensionsDefine, i = 0; i < n.length; i++) {
                var r = this._data[n[i].name];e.push(r ? r[t] : null);
              }return e;
            }, appendData: function appendData(t) {
              var e = this._data;f(t, function (t, n) {
                for (var i = e[n] || (e[n] = []), r = 0; r < (t || []).length; r++) {
                  i.push(t[r]);
                }
              });
            } }, original: { count: ba, getItem: Sa, appendData: Ma }, typedArray: { persistent: !1, pure: !0, count: function count() {
              return this._data ? this._data.length / this._dimSize : 0;
            }, getItem: function getItem(t, e) {
              t -= this._offset, e = e || [];for (var n = this._dimSize * t, i = 0; i < this._dimSize; i++) {
                e[i] = this._data[n + i];
              }return e;
            }, appendData: function appendData(t) {
              this._data = t;
            }, clean: function clean() {
              this._offset += this.count(), this._data = null;
            } } },
            yp = { arrayRows: Ta, objectRows: function objectRows(t, e, n, i) {
            return null != n ? t[i] : t;
          }, keyedColumns: Ta, original: function original(t, e, n, i) {
            var r = dn(t);return null != n && r instanceof Array ? r[n] : r;
          }, typedArray: Ta },
            _p = { arrayRows: Ia, objectRows: function objectRows(t, e, n, i) {
            return ka(t[e], this._dimensionInfos[e]);
          }, keyedColumns: Ia, original: function original(t, e, n, i) {
            var r = t && (null == t.value ? t : t.value);return !this._rawData.pure && pn(t) && (this.hasItemOption = !0), ka(r instanceof Array ? r[i] : r, this._dimensionInfos[e]);
          }, typedArray: function typedArray(t, e, n, i) {
            return t[i];
          } },
            xp = /\{@(.+?)\}/g,
            wp = { getDataParams: function getDataParams(t, e) {
            var n = this.getData(e),
                i = this.getRawValue(t, e),
                r = n.getRawIndex(t),
                a = n.getName(t),
                o = n.getRawDataItem(t),
                s = n.getItemVisual(t, "color"),
                l = this.ecModel.getComponent("tooltip"),
                h = Tn(l && l.get("renderMode")),
                u = this.mainType,
                c = "series" === u;return { componentType: u, componentSubType: this.subType, componentIndex: this.componentIndex, seriesType: c ? this.subType : null, seriesIndex: this.seriesIndex, seriesId: c ? this.id : null, seriesName: c ? this.name : null, name: a, dataIndex: r, data: o, dataType: e, value: i, color: s, marker: Mr({ color: s, renderMode: h }), $vars: ["seriesName", "name", "value"] };
          }, getFormattedLabel: function getFormattedLabel(t, e, n, i, r) {
            e = e || "normal";var a = this.getData(n),
                o = a.getItemModel(t),
                s = this.getDataParams(t, n);null != i && s.value instanceof Array && (s.value = s.value[i]);var l = o.get("normal" === e ? [r || "label", "formatter"] : [e, r || "label", "formatter"]);return "function" == typeof l ? (s.status = e, l(s)) : "string" == typeof l ? Sr(l, s).replace(xp, function (e, n) {
              var i = n.length;return "[" === n.charAt(0) && "]" === n.charAt(i - 1) && (n = +n.slice(1, i - 1)), Ca(a, t, n);
            }) : void 0;
          }, getRawValue: function getRawValue(t, e) {
            return Ca(this.getData(e), t);
          }, formatTooltip: function formatTooltip() {} },
            bp = La.prototype;bp.perform = function (t) {
          function e(t) {
            return !(t >= 1) && (t = 1), t;
          }var n = this._upstream,
              i = t && t.skip;if (this._dirty && n) {
            var r = this.context;r.data = r.outputData = n.context.outputData;
          }this.__pipeline && (this.__pipeline.currentTask = this);var a;this._plan && !i && (a = this._plan(this.context));var o = e(this._modBy),
              s = this._modDataCount || 0,
              l = e(t && t.modBy),
              h = t && t.modDataCount || 0;o === l && s === h || (a = "reset");var u;(this._dirty || "reset" === a) && (this._dirty = !1, u = Oa(this, i)), this._modBy = l, this._modDataCount = h;var c = t && t.step;if (this._dueEnd = n ? n._outputDueEnd : this._count ? this._count(this.context) : 1 / 0, this._progress) {
            var f = this._dueIndex,
                d = Math.min(null != c ? this._dueIndex + c : 1 / 0, this._dueEnd);if (!i && (u || f < d)) {
              var p = this._progress;if (y(p)) for (var g = 0; g < p.length; g++) {
                Pa(this, p[g], f, d, l, h);
              } else Pa(this, p, f, d, l, h);
            }this._dueIndex = d;var v = null != this._settedOutputEnd ? this._settedOutputEnd : d;this._outputDueEnd = v;
          } else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;return this.unfinished();
        };var Sp = function () {
          function t() {
            return i < n ? i++ : null;
          }function e() {
            var t = i % o * r + Math.ceil(i / o),
                e = i >= n ? null : t < a ? t : i;return i++, e;
          }var n,
              i,
              r,
              a,
              o,
              s = { reset: function reset(l, h, u, c) {
              i = l, n = h, r = u, a = c, o = Math.ceil(a / r), s.next = r > 1 && a > 0 ? e : t;
            } };return s;
        }();bp.dirty = function () {
          this._dirty = !0, this._onDirty && this._onDirty(this.context);
        }, bp.unfinished = function () {
          return this._progress && this._dueIndex < this._dueEnd;
        }, bp.pipe = function (t) {
          (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty());
        }, bp.dispose = function () {
          this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0);
        }, bp.getUpstream = function () {
          return this._upstream;
        }, bp.getDownstream = function () {
          return this._downstream;
        }, bp.setOutputEnd = function (t) {
          this._outputDueEnd = this._settedOutputEnd = t;
        };var Mp = xn(),
            Tp = Fd.extend({ type: "series.__base__", seriesIndex: 0, coordinateSystem: null, defaultOption: null, legendDataProvider: null, visualColorAccessPath: "itemStyle.color", layoutMode: null, init: function init(t, e, n, i) {
            this.seriesIndex = this.componentIndex, this.dataTask = Aa({ count: Ba, reset: Ra }), this.dataTask.context = { model: this }, this.mergeDefaultAndTheme(t, n), Fr(this);var r = this.getInitialData(t, n);Fa(r, this), this.dataTask.context.data = r, Mp(this).dataBeforeProcessed = r, Ea(this);
          }, mergeDefaultAndTheme: function mergeDefaultAndTheme(t, e) {
            var n = this.layoutMode,
                r = n ? Ar(t) : {},
                a = this.subType;Fd.hasClass(a) && (a += "Series"), i(t, e.getTheme().get(this.subType)), i(t, this.getDefaultOption()), fn(t, "label", ["show"]), this.fillDataTextStyle(t.data), n && Dr(t, r, n);
          }, mergeOption: function mergeOption(t, e) {
            t = i(this.option, t, !0), this.fillDataTextStyle(t.data);var n = this.layoutMode;n && Dr(this.option, t, n), Fr(this);var r = this.getInitialData(t, e);Fa(r, this), this.dataTask.dirty(), this.dataTask.context.data = r, Mp(this).dataBeforeProcessed = r, Ea(this);
          }, fillDataTextStyle: function fillDataTextStyle(t) {
            if (t && !S(t)) for (var e = ["show"], n = 0; n < t.length; n++) {
              t[n] && t[n].label && fn(t[n], "label", e);
            }
          }, getInitialData: function getInitialData() {}, appendData: function appendData(t) {
            this.getRawData().appendData(t.data);
          }, getData: function getData(t) {
            var e = Wa(this);if (e) {
              var n = e.context.data;return null == t ? n : n.getLinkedData(t);
            }return Mp(this).data;
          }, setData: function setData(t) {
            var e = Wa(this);if (e) {
              var n = e.context;n.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()), n.outputData = t, e !== this.dataTask && (n.data = t);
            }Mp(this).data = t;
          }, getSource: function getSource() {
            return Rr(this);
          }, getRawData: function getRawData() {
            return Mp(this).dataBeforeProcessed;
          }, getBaseAxis: function getBaseAxis() {
            var t = this.coordinateSystem;return t && t.getBaseAxis && t.getBaseAxis();
          }, formatTooltip: function formatTooltip(t, e, n, i) {
            function r(t) {
              return { renderMode: i, content: br(wr(t)), style: l };
            }var a = this,
                o = "html" === (i = i || "html") ? "<br/>" : "\n",
                s = "richText" === i,
                l = {},
                h = 0,
                u = this.getData(),
                c = u.mapDimension("defaultedTooltip", !0),
                d = c.length,
                g = this.getRawValue(t),
                v = y(g),
                m = u.getItemVisual(t, "color");w(m) && m.colorStops && (m = (m.colorStops[0] || {}).color), m = m || "transparent";var _ = (d > 1 || v && !d ? function (n) {
              function r(t, n) {
                var r = u.getDimensionInfo(n);if (r && !1 !== r.otherDims.tooltip) {
                  var c = r.type,
                      f = "sub" + a.seriesIndex + "at" + h,
                      p = Mr({ color: m, type: "subItem", renderMode: i, markerId: f }),
                      g = "string" == typeof p ? p : p.content,
                      v = (o ? g + br(r.displayName || "-") + ": " : "") + br("ordinal" === c ? t + "" : "time" === c ? e ? "" : Ir("yyyy/MM/dd hh:mm:ss", t) : wr(t));v && d.push(v), s && (l[f] = m, ++h);
                }
              }var o = p(n, function (t, e, n) {
                var i = u.getDimensionInfo(n);return t |= i && !1 !== i.tooltip && null != i.displayName;
              }, 0),
                  d = [];c.length ? f(c, function (e) {
                r(Ca(u, t, e), e);
              }) : f(n, r);var g = o ? s ? "\n" : "<br/>" : "",
                  v = g + d.join(g || ", ");return { renderMode: i, content: v, style: l };
            }(g) : r(d ? Ca(u, t, c[0]) : v ? g[0] : g)).content,
                x = a.seriesIndex + "at" + h,
                b = Mr({ color: m, type: "item", renderMode: i, markerId: x });l[x] = m, ++h;var S = u.getName(t),
                M = this.name;mn(this) || (M = ""), M = M ? br(M) + (e ? ": " : o) : "";var T = "string" == typeof b ? b : b.content;return { html: e ? T + M + _ : M + T + (S ? br(S) + ": " + _ : _), markers: l };
          }, isAnimationEnabled: function isAnimationEnabled() {
            if (Gh.node) return !1;var t = this.getShallow("animation");return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t;
          }, restoreData: function restoreData() {
            this.dataTask.dirty();
          }, getColorFromPalette: function getColorFromPalette(t, e, n) {
            var i = this.ecModel,
                r = Gd.getColorFromPalette.call(this, t, e, n);return r || (r = i.getColorFromPalette(t, e, n)), r;
          }, coordDimToDataDim: function coordDimToDataDim(t) {
            return this.getRawData().mapDimension(t, !0);
          }, getProgressive: function getProgressive() {
            return this.get("progressive");
          }, getProgressiveThreshold: function getProgressiveThreshold() {
            return this.get("progressiveThreshold");
          }, getAxisTooltipData: null, getTooltipPosition: null, pipeTask: null, preventIncremental: null, pipelineContext: null });u(Tp, wp), u(Tp, Gd);var Ip = function Ip() {
          this.group = new Hu(), this.uid = sr("viewComponent");
        };Ip.prototype = { constructor: Ip, init: function init(t, e) {}, render: function render(t, e, n, i) {}, dispose: function dispose() {}, filterForExposedEvent: null };var kp = Ip.prototype;kp.updateView = kp.updateLayout = kp.updateVisual = function (t, e, n, i) {}, Cn(Ip), Pn(Ip, { registerWhenExtend: !0 });var Cp = function Cp() {
          var t = xn();return function (e) {
            var n = t(e),
                i = e.pipelineContext,
                r = n.large,
                a = n.progressiveRender,
                o = n.large = i.large,
                s = n.progressiveRender = i.progressiveRender;return !!(r ^ o || a ^ s) && "reset";
          };
        },
            Dp = xn(),
            Ap = Cp();Ha.prototype = { type: "chart", init: function init(t, e) {}, render: function render(t, e, n, i) {}, highlight: function highlight(t, e, n, i) {
            Xa(t.getData(), i, "emphasis");
          }, downplay: function downplay(t, e, n, i) {
            Xa(t.getData(), i, "normal");
          }, remove: function remove(t, e) {
            this.group.removeAll();
          }, dispose: function dispose() {}, incrementalPrepareRender: null, incrementalRender: null, updateTransform: null, filterForExposedEvent: null };var Lp = Ha.prototype;Lp.updateView = Lp.updateLayout = Lp.updateVisual = function (t, e, n, i) {
          this.render(t, e, n, i);
        }, Cn(Ha), Pn(Ha, { registerWhenExtend: !0 }), Ha.markUpdateMethod = function (t, e) {
          Dp(t).updateMethod = e;
        };var Pp = { incrementalPrepareRender: { progress: function progress(t, e) {
              e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload);
            } }, render: { forceFirstProgress: !0, progress: function progress(t, e) {
              e.view.render(e.model, e.ecModel, e.api, e.payload);
            } } },
            Op = { createOnAllSeries: !0, performRawSeries: !0, reset: function reset(t, e) {
            var n = t.getData(),
                i = (t.visualColorAccessPath || "itemStyle.color").split("."),
                r = t.get(i) || t.getColorFromPalette(t.name, null, e.getSeriesCount());if (n.setVisual("color", r), !e.isSeriesFiltered(t)) {
              "function" != typeof r || r instanceof ld || n.each(function (e) {
                n.setItemVisual(e, "color", r(t.getDataParams(e)));
              });return { dataEach: n.hasItemOption ? function (t, e) {
                  var n = t.getItemModel(e).get(i, !0);null != n && t.setItemVisual(e, "color", n);
                } : null };
            }
          } },
            Ep = { toolbox: { brush: { title: { rect: "矩形选择", polygon: "圈选", lineX: "横向选择", lineY: "纵向选择", keep: "保持选择", clear: "清除选择" } }, dataView: { title: "数据视图", lang: ["数据视图", "关闭", "刷新"] }, dataZoom: { title: { zoom: "区域缩放", back: "区域缩放还原" } }, magicType: { title: { line: "切换为折线图", bar: "切换为柱状图", stack: "切换为堆叠", tiled: "切换为平铺" } }, restore: { title: "还原" }, saveAsImage: { title: "保存为图片", lang: ["右键另存为图片"] } }, series: { typeNames: { pie: "饼图", bar: "柱状图", line: "折线图", scatter: "散点图", effectScatter: "涟漪散点图", radar: "雷达图", tree: "树图", treemap: "矩形树图", boxplot: "箱型图", candlestick: "K线图", k: "K线图", heatmap: "热力图", map: "地图", parallel: "平行坐标图", lines: "线图", graph: "关系图", sankey: "桑基图", funnel: "漏斗图", gauge: "仪表盘图", pictorialBar: "象形柱图", themeRiver: "主题河流图", sunburst: "旭日图" } }, aria: { general: { withTitle: "这是一个关于“{title}”的图表。", withoutTitle: "这是一个图表，" }, series: { single: { prefix: "", withName: "图表类型是{seriesType}，表示{seriesName}。", withoutName: "图表类型是{seriesType}。" }, multiple: { prefix: "它由{seriesCount}个图表系列组成。", withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，", withoutName: "第{seriesId}个系列是一个{seriesType}，", separator: { middle: "；", end: "。" } } }, data: { allData: "其数据是——", partialData: "其中，前{displayCnt}项是——", withName: "{name}的数据是{value}", withoutName: "{value}", separator: { middle: "，", end: "" } } } },
            Np = function Np(t, e) {
          function n(t, e) {
            if ("string" != typeof t) return t;var n = t;return f(e, function (t, e) {
              n = n.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t);
            }), n;
          }function i(t) {
            var e = a.get(t);if (null == e) {
              for (var n = t.split("."), i = Ep.aria, r = 0; r < n.length; ++r) {
                i = i[n[r]];
              }return i;
            }return e;
          }function r(t) {
            return Ep.series.typeNames[t] || "自定义图";
          }var a = e.getModel("aria");if (a.get("show")) if (a.get("description")) t.setAttribute("aria-label", a.get("description"));else {
            var o = 0;e.eachSeries(function (t, e) {
              ++o;
            }, this);var s,
                l = a.get("data.maxCount") || 10,
                h = a.get("series.maxCount") || 10,
                u = Math.min(o, h);if (!(o < 1)) {
              var c = function () {
                var t = e.getModel("title").option;return t && t.length && (t = t[0]), t && t.text;
              }();s = c ? n(i("general.withTitle"), { title: c }) : i("general.withoutTitle");var d = [];s += n(i(o > 1 ? "series.multiple.prefix" : "series.single.prefix"), { seriesCount: o }), e.eachSeries(function (t, e) {
                if (e < u) {
                  var a,
                      s = t.get("name"),
                      h = "series." + (o > 1 ? "multiple" : "single") + ".";a = n(a = i(s ? h + "withName" : h + "withoutName"), { seriesId: t.seriesIndex, seriesName: t.get("name"), seriesType: r(t.subType) });var c = t.getData();window.data = c, c.count() > l ? a += n(i("data.partialData"), { displayCnt: l }) : a += i("data.allData");for (var f = [], p = 0; p < c.count(); p++) {
                    if (p < l) {
                      var g = c.getName(p),
                          v = Ca(c, p);f.push(n(i(g ? "data.withName" : "data.withoutName"), { name: g, value: v }));
                    }
                  }a += f.join(i("data.separator.middle")) + i("data.separator.end"), d.push(a);
                }
              }), s += d.join(i("series.multiple.separator.middle")) + i("series.multiple.separator.end"), t.setAttribute("aria-label", s);
            }
          }
        },
            Bp = Math.PI,
            Rp = ja.prototype;Rp.restoreData = function (t, e) {
          t.restoreData(e), this._stageTaskMap.each(function (t) {
            var e = t.overallTask;e && e.dirty();
          });
        }, Rp.getPerformArgs = function (t, e) {
          if (t.__pipeline) {
            var n = this._pipelineMap.get(t.__pipeline.id),
                i = n.context,
                r = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex ? n.step : null,
                a = i && i.modDataCount;return { step: r, modBy: null != a ? Math.ceil(a / r) : null, modDataCount: a };
          }
        }, Rp.getPipeline = function (t) {
          return this._pipelineMap.get(t);
        }, Rp.updateStreamModes = function (t, e) {
          var n = this._pipelineMap.get(t.uid),
              i = t.getData().count(),
              r = n.progressiveEnabled && e.incrementalPrepareRender && i >= n.threshold,
              a = t.get("large") && i >= t.get("largeThreshold"),
              o = "mod" === t.get("progressiveChunkMode") ? i : null;t.pipelineContext = n.context = { progressiveRender: r, modDataCount: o, large: a };
        }, Rp.restorePipelines = function (t) {
          var e = this,
              n = e._pipelineMap = B();t.eachSeries(function (t) {
            var i = t.getProgressive(),
                r = t.uid;n.set(r, { id: r, head: null, tail: null, threshold: t.getProgressiveThreshold(), progressiveEnabled: i && !(t.preventIncremental && t.preventIncremental()), blockIndex: -1, step: Math.round(i || 700), count: 0 }), oo(e, t, t.dataTask);
          });
        }, Rp.prepareStageTasks = function () {
          var t = this._stageTaskMap,
              e = this.ecInstance.getModel(),
              n = this.api;f(this._allHandlers, function (i) {
            var r = t.get(i.uid) || t.set(i.uid, []);i.reset && $a(this, i, r, e, n), i.overallReset && Qa(this, i, r, e, n);
          }, this);
        }, Rp.prepareView = function (t, e, n, i) {
          var r = t.renderTask,
              a = r.context;a.model = e, a.ecModel = n, a.api = i, r.__block = !t.incrementalPrepareRender, oo(this, e, r);
        }, Rp.performDataProcessorTasks = function (t, e) {
          Za(this, this._dataProcessorHandlers, t, e, { block: !0 });
        }, Rp.performVisualTasks = function (t, e, n) {
          Za(this, this._visualHandlers, t, e, n);
        }, Rp.performSeriesTasks = function (t) {
          var e;t.eachSeries(function (t) {
            e |= t.dataTask.perform();
          }), this.unfinished |= e;
        }, Rp.plan = function () {
          this._pipelineMap.each(function (t) {
            var e = t.tail;do {
              if (e.__block) {
                t.blockIndex = e.__idxInPipeline;break;
              }e = e.getUpstream();
            } while (e);
          });
        };var zp = Rp.updatePayload = function (t, e) {
          "remain" !== e && (t.context.payload = e);
        },
            Fp = ro(0);ja.wrapStageHandler = function (t, e) {
          return _(t) && (t = { overallReset: t, seriesType: so(t) }), t.uid = sr("stageHandler"), e && (t.visualType = e), t;
        };var Vp,
            Wp = {},
            Hp = {};lo(Wp, ep), lo(Hp, ea), Wp.eachSeriesByType = Wp.eachRawSeriesByType = function (t) {
          Vp = t;
        }, Wp.eachComponent = function (t) {
          "series" === t.mainType && t.subType && (Vp = t.subType);
        };var Gp = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
            Xp = { color: Gp, colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], Gp] },
            qp = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"],
            Yp = { color: qp, backgroundColor: "#333", tooltip: { axisPointer: { lineStyle: { color: "#eee" }, crossStyle: { color: "#eee" } } }, legend: { textStyle: { color: "#eee" } }, textStyle: { color: "#eee" }, title: { textStyle: { color: "#eee" } }, toolbox: { iconStyle: { normal: { borderColor: "#eee" } } }, dataZoom: { textStyle: { color: "#eee" } }, visualMap: { textStyle: { color: "#eee" } }, timeline: { lineStyle: { color: "#eee" }, itemStyle: { normal: { color: qp[1] } }, label: { normal: { textStyle: { color: "#eee" } } }, controlStyle: { normal: { color: "#eee", borderColor: "#eee" } } }, timeAxis: { axisLine: { lineStyle: { color: "#eee" } }, axisTick: { lineStyle: { color: "#eee" } }, axisLabel: { textStyle: { color: "#eee" } }, splitLine: { lineStyle: { type: "dashed", color: "#aaa" } }, splitArea: { areaStyle: { color: "#eee" } } }, logAxis: { axisLine: { lineStyle: { color: "#eee" } }, axisTick: { lineStyle: { color: "#eee" } }, axisLabel: { textStyle: { color: "#eee" } }, splitLine: { lineStyle: { type: "dashed", color: "#aaa" } }, splitArea: { areaStyle: { color: "#eee" } } }, valueAxis: { axisLine: { lineStyle: { color: "#eee" } }, axisTick: { lineStyle: { color: "#eee" } }, axisLabel: { textStyle: { color: "#eee" } }, splitLine: { lineStyle: { type: "dashed", color: "#aaa" } }, splitArea: { areaStyle: { color: "#eee" } } }, categoryAxis: { axisLine: { lineStyle: { color: "#eee" } }, axisTick: { lineStyle: { color: "#eee" } }, axisLabel: { textStyle: { color: "#eee" } }, splitLine: { lineStyle: { type: "dashed", color: "#aaa" } }, splitArea: { areaStyle: { color: "#eee" } } }, line: { symbol: "circle" }, graph: { color: qp }, gauge: { title: { textStyle: { color: "#eee" } } }, candlestick: { itemStyle: { normal: { color: "#FD1050", color0: "#0CF49B", borderColor: "#FD1050", borderColor0: "#0CF49B" } } } };Yp.categoryAxis.splitLine.show = !1, Fd.extend({ type: "dataset", defaultOption: { seriesLayoutBy: Qd, sourceHeader: null, dimensions: null, source: null }, optionUpdated: function optionUpdated() {
            Br(this);
          } }), Ip.extend({ type: "dataset" });var Up = ci.extend({ type: "ellipse", shape: { cx: 0, cy: 0, rx: 0, ry: 0 }, buildPath: function buildPath(t, e) {
            var n = .5522848,
                i = e.cx,
                r = e.cy,
                a = e.rx,
                o = e.ry,
                s = a * n,
                l = o * n;t.moveTo(i - a, r), t.bezierCurveTo(i - a, r - l, i - s, r - o, i, r - o), t.bezierCurveTo(i + s, r - o, i + a, r - l, i + a, r), t.bezierCurveTo(i + a, r + l, i + s, r + o, i, r + o), t.bezierCurveTo(i - s, r + o, i - a, r + l, i - a, r), t.closePath();
          } }),
            jp = /[\s,]+/;uo.prototype.parse = function (t, e) {
          e = e || {};var n = ho(t);if (!n) throw new Error("Illegal svg");var i = new Hu();this._root = i;var r = n.getAttribute("viewBox") || "",
              a = parseFloat(n.getAttribute("width") || e.width),
              o = parseFloat(n.getAttribute("height") || e.height);isNaN(a) && (a = null), isNaN(o) && (o = null), go(n, i, null, !0);for (var s = n.firstChild; s;) {
            this._parseNode(s, i), s = s.nextSibling;
          }var l, h;if (r) {
            var u = P(r).split(jp);u.length >= 4 && (l = { x: parseFloat(u[0] || 0), y: parseFloat(u[1] || 0), width: parseFloat(u[2]), height: parseFloat(u[3]) });
          }if (l && null != a && null != o && (h = _o(l, a, o), !e.ignoreViewBox)) {
            var c = i;(i = new Hu()).add(c), c.scale = h.scale.slice(), c.position = h.position.slice();
          }return e.ignoreRootClip || null == a || null == o || i.setClipPath(new nd({ shape: { x: 0, y: 0, width: a, height: o } })), { root: i, width: a, height: o, viewBoxRect: l, viewBoxTransform: h };
        }, uo.prototype._parseNode = function (t, e) {
          var n = t.nodeName.toLowerCase();"defs" === n ? this._isDefine = !0 : "text" === n && (this._isText = !0);var i;if (this._isDefine) {
            if (o = $p[n]) {
              var r = o.call(this, t),
                  a = t.getAttribute("id");a && (this._defs[a] = r);
            }
          } else {
            var o = Zp[n];o && (i = o.call(this, t, e), e.add(i));
          }for (var s = t.firstChild; s;) {
            1 === s.nodeType && this._parseNode(s, i), 3 === s.nodeType && this._isText && this._parseText(s, i), s = s.nextSibling;
          }"defs" === n ? this._isDefine = !1 : "text" === n && (this._isText = !1);
        }, uo.prototype._parseText = function (t, e) {
          if (1 === t.nodeType) {
            var n = t.getAttribute("dx") || 0,
                i = t.getAttribute("dy") || 0;this._textX += parseFloat(n), this._textY += parseFloat(i);
          }var r = new Yf({ style: { text: t.textContent, transformText: !0 }, position: [this._textX || 0, this._textY || 0] });fo(e, r), go(t, r, this._defs);var a = r.style.fontSize;a && a < 9 && (r.style.fontSize = 9, r.scale = r.scale || [1, 1], r.scale[0] *= a / 9, r.scale[1] *= a / 9);var o = r.getBoundingRect();return this._textX += o.width, e.add(r), r;
        };var Zp = { g: function g(t, e) {
            var n = new Hu();return fo(e, n), go(t, n, this._defs), n;
          }, rect: function rect(t, e) {
            var n = new nd();return fo(e, n), go(t, n, this._defs), n.setShape({ x: parseFloat(t.getAttribute("x") || 0), y: parseFloat(t.getAttribute("y") || 0), width: parseFloat(t.getAttribute("width") || 0), height: parseFloat(t.getAttribute("height") || 0) }), n;
          }, circle: function circle(t, e) {
            var n = new Uf();return fo(e, n), go(t, n, this._defs), n.setShape({ cx: parseFloat(t.getAttribute("cx") || 0), cy: parseFloat(t.getAttribute("cy") || 0), r: parseFloat(t.getAttribute("r") || 0) }), n;
          }, line: function line(t, e) {
            var n = new id();return fo(e, n), go(t, n, this._defs), n.setShape({ x1: parseFloat(t.getAttribute("x1") || 0), y1: parseFloat(t.getAttribute("y1") || 0), x2: parseFloat(t.getAttribute("x2") || 0), y2: parseFloat(t.getAttribute("y2") || 0) }), n;
          }, ellipse: function ellipse(t, e) {
            var n = new Up();return fo(e, n), go(t, n, this._defs), n.setShape({ cx: parseFloat(t.getAttribute("cx") || 0), cy: parseFloat(t.getAttribute("cy") || 0), rx: parseFloat(t.getAttribute("rx") || 0), ry: parseFloat(t.getAttribute("ry") || 0) }), n;
          }, polygon: function polygon(t, e) {
            var n = t.getAttribute("points");n && (n = po(n));var i = new td({ shape: { points: n || [] } });return fo(e, i), go(t, i, this._defs), i;
          }, polyline: function polyline(t, e) {
            var n = new ci();fo(e, n), go(t, n, this._defs);var i = t.getAttribute("points");return i && (i = po(i)), new ed({ shape: { points: i || [] } });
          }, image: function image(t, e) {
            var n = new je();return fo(e, n), go(t, n, this._defs), n.setStyle({ image: t.getAttribute("xlink:href"), x: t.getAttribute("x"), y: t.getAttribute("y"), width: t.getAttribute("width"), height: t.getAttribute("height") }), n;
          }, text: function text(t, e) {
            var n = t.getAttribute("x") || 0,
                i = t.getAttribute("y") || 0,
                r = t.getAttribute("dx") || 0,
                a = t.getAttribute("dy") || 0;this._textX = parseFloat(n) + parseFloat(r), this._textY = parseFloat(i) + parseFloat(a);var o = new Hu();return fo(e, o), go(t, o, this._defs), o;
          }, tspan: function tspan(t, e) {
            var n = t.getAttribute("x"),
                i = t.getAttribute("y");null != n && (this._textX = parseFloat(n)), null != i && (this._textY = parseFloat(i));var r = t.getAttribute("dx") || 0,
                a = t.getAttribute("dy") || 0,
                o = new Hu();return fo(e, o), go(t, o, this._defs), this._textX += r, this._textY += a, o;
          }, path: function path(t, e) {
            var n = gi(t.getAttribute("d") || "");return fo(e, n), go(t, n, this._defs), n;
          } },
            $p = { lineargradient: function lineargradient(t) {
            var e = parseInt(t.getAttribute("x1") || 0, 10),
                n = parseInt(t.getAttribute("y1") || 0, 10),
                i = parseInt(t.getAttribute("x2") || 10, 10),
                r = parseInt(t.getAttribute("y2") || 0, 10),
                a = new hd(e, n, i, r);return co(t, a), a;
          }, radialgradient: function radialgradient(t) {} },
            Qp = { fill: "fill", stroke: "stroke", "stroke-width": "lineWidth", opacity: "opacity", "fill-opacity": "fillOpacity", "stroke-opacity": "strokeOpacity", "stroke-dasharray": "lineDash", "stroke-dashoffset": "lineDashOffset", "stroke-linecap": "lineCap", "stroke-linejoin": "lineJoin", "stroke-miterlimit": "miterLimit", "font-family": "fontFamily", "font-size": "fontSize", "font-style": "fontStyle", "font-weight": "fontWeight", "text-align": "textAlign", "alignment-baseline": "textBaseline" },
            Kp = /url\(\s*#(.*?)\)/,
            Jp = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g,
            tg = /([^\s:;]+)\s*:\s*([^:;]+)/g,
            eg = B(),
            ng = { registerMap: function registerMap(t, e, n) {
            var i;return y(e) ? i = e : e.svg ? i = [{ type: "svg", source: e.svg, specialAreas: e.specialAreas }] : (e.geoJson && !e.features && (n = e.specialAreas, e = e.geoJson), i = [{ type: "geoJSON", source: e, specialAreas: n }]), f(i, function (t) {
              var e = t.type;"geoJson" === e && (e = t.type = "geoJSON"), (0, ig[e])(t);
            }), eg.set(t, i);
          }, retrieveMap: function retrieveMap(t) {
            return eg.get(t);
          } },
            ig = { geoJSON: function geoJSON(t) {
            var e = t.source;t.geoJSON = x(e) ? "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")() : e;
          }, svg: function svg(t) {
            t.svgXML = ho(t.source);
          } },
            rg = L,
            ag = f,
            og = _,
            sg = w,
            lg = Fd.parseClassType,
            hg = { zrender: "4.0.5" },
            ug = 1e3,
            cg = 1e3,
            fg = 3e3,
            dg = { PROCESSOR: { FILTER: ug, STATISTIC: 5e3 }, VISUAL: { LAYOUT: cg, GLOBAL: 2e3, CHART: fg, COMPONENT: 4e3, BRUSH: 5e3 } },
            pg = "__flagInMainProcess",
            gg = "__optionUpdated",
            vg = /^[a-zA-Z0-9_]+$/;wo.prototype.on = xo("on"), wo.prototype.off = xo("off"), wo.prototype.one = xo("one"), u(wo, su);var mg = bo.prototype;mg._onframe = function () {
          if (!this._disposed) {
            var t = this._scheduler;if (this[gg]) {
              var e = this[gg].silent;this[pg] = !0, Mo(this), yg.update.call(this), this[pg] = !1, this[gg] = !1, Co.call(this, e), Do.call(this, e);
            } else if (t.unfinished) {
              var n = 1,
                  i = this._model;this._api;t.unfinished = !1;do {
                var r = +new Date();t.performSeriesTasks(i), t.performDataProcessorTasks(i), Io(this, i), t.performVisualTasks(i), No(this, this._model, 0, "remain"), n -= +new Date() - r;
              } while (n > 0 && t.unfinished);t.unfinished || this._zr.flush();
            }
          }
        }, mg.getDom = function () {
          return this._dom;
        }, mg.getZr = function () {
          return this._zr;
        }, mg.setOption = function (t, e, n) {
          var i;if (sg(e) && (n = e.lazyUpdate, i = e.silent, e = e.notMerge), this[pg] = !0, !this._model || e) {
            var r = new ia(this._api),
                a = this._theme,
                o = this._model = new ep(null, null, a, r);o.scheduler = this._scheduler, o.init(null, null, a, r);
          }this._model.setOption(t, Sg), n ? (this[gg] = { silent: i }, this[pg] = !1) : (Mo(this), yg.update.call(this), this._zr.flush(), this[gg] = !1, this[pg] = !1, Co.call(this, i), Do.call(this, i));
        }, mg.setTheme = function () {
          console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0");
        }, mg.getModel = function () {
          return this._model;
        }, mg.getOption = function () {
          return this._model && this._model.getOption();
        }, mg.getWidth = function () {
          return this._zr.getWidth();
        }, mg.getHeight = function () {
          return this._zr.getHeight();
        }, mg.getDevicePixelRatio = function () {
          return this._zr.painter.dpr || window.devicePixelRatio || 1;
        }, mg.getRenderedCanvas = function (t) {
          if (Gh.canvasSupported) return (t = t || {}).pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor"), this._zr.painter.getRenderedCanvas(t);
        }, mg.getSvgDataUrl = function () {
          if (Gh.svgSupported) {
            var t = this._zr;return f(t.storage.getDisplayList(), function (t) {
              t.stopAnimation(!0);
            }), t.painter.pathToDataUrl();
          }
        }, mg.getDataURL = function (t) {
          var e = (t = t || {}).excludeComponents,
              n = this._model,
              i = [],
              r = this;ag(e, function (t) {
            n.eachComponent({ mainType: t }, function (t) {
              var e = r._componentsMap[t.__viewId];e.group.ignore || (i.push(e), e.group.ignore = !0);
            });
          });var a = "svg" === this._zr.painter.getType() ? this.getSvgDataUrl() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));return ag(i, function (t) {
            t.group.ignore = !1;
          }), a;
        }, mg.getConnectedDataURL = function (t) {
          if (Gh.canvasSupported) {
            var e = this.group,
                i = Math.min,
                r = Math.max;if (Dg[e]) {
              var a = 1 / 0,
                  o = 1 / 0,
                  s = -1 / 0,
                  l = -1 / 0,
                  h = [],
                  u = t && t.pixelRatio || 1;f(Cg, function (u, c) {
                if (u.group === e) {
                  var f = u.getRenderedCanvas(n(t)),
                      d = u.getDom().getBoundingClientRect();a = i(d.left, a), o = i(d.top, o), s = r(d.right, s), l = r(d.bottom, l), h.push({ dom: f, left: d.left, top: d.top });
                }
              });var c = (s *= u) - (a *= u),
                  d = (l *= u) - (o *= u),
                  p = tu();p.width = c, p.height = d;var g = un(p);return ag(h, function (t) {
                var e = new je({ style: { x: t.left * u - a, y: t.top * u - o, image: t.dom } });g.add(e);
              }), g.refreshImmediately(), p.toDataURL("image/" + (t && t.type || "png"));
            }return this.getDataURL(t);
          }
        }, mg.convertToPixel = m(So, "convertToPixel"), mg.convertFromPixel = m(So, "convertFromPixel"), mg.containPixel = function (t, e) {
          var n;return t = wn(this._model, t), f(t, function (t, i) {
            i.indexOf("Models") >= 0 && f(t, function (t) {
              var r = t.coordinateSystem;if (r && r.containPoint) n |= !!r.containPoint(e);else if ("seriesModels" === i) {
                var a = this._chartsMap[t.__viewId];a && a.containPoint && (n |= a.containPoint(e, t));
              }
            }, this);
          }, this), !!n;
        }, mg.getVisual = function (t, e) {
          var n = (t = wn(this._model, t, { defaultMainType: "series" })).seriesModel.getData(),
              i = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? n.indexOfRawIndex(t.dataIndex) : null;return null != i ? n.getItemVisual(i, e) : n.getVisual(e);
        }, mg.getViewOfComponentModel = function (t) {
          return this._componentsMap[t.__viewId];
        }, mg.getViewOfSeriesModel = function (t) {
          return this._chartsMap[t.__viewId];
        };var yg = { prepareAndUpdate: function prepareAndUpdate(t) {
            Mo(this), yg.update.call(this, t);
          }, update: function update(t) {
            var e = this._model,
                n = this._api,
                i = this._zr,
                r = this._coordSysMgr,
                a = this._scheduler;if (e) {
              a.restoreData(e, t), a.performSeriesTasks(e), r.create(e, n), a.performDataProcessorTasks(e, t), Io(this, e), r.update(e, n), Po(e), a.performVisualTasks(e, t), Oo(this, e, n, t);var o = e.get("backgroundColor") || "transparent";if (Gh.canvasSupported) i.setBackgroundColor(o);else {
                var s = kt(o);o = At(s, "rgb"), 0 === s[3] && (o = "transparent");
              }Bo(e, n);
            }
          }, updateTransform: function updateTransform(t) {
            var e = this._model,
                n = this,
                i = this._api;if (e) {
              var r = [];e.eachComponent(function (a, o) {
                var s = n.getViewOfComponentModel(o);if (s && s.__alive) if (s.updateTransform) {
                  var l = s.updateTransform(o, e, i, t);l && l.update && r.push(s);
                } else r.push(s);
              });var a = B();e.eachSeries(function (r) {
                var o = n._chartsMap[r.__viewId];if (o.updateTransform) {
                  var s = o.updateTransform(r, e, i, t);s && s.update && a.set(r.uid, 1);
                } else a.set(r.uid, 1);
              }), Po(e), this._scheduler.performVisualTasks(e, t, { setDirty: !0, dirtyMap: a }), No(n, e, 0, t, a), Bo(e, this._api);
            }
          }, updateView: function updateView(t) {
            var e = this._model;e && (Ha.markUpdateMethod(t, "updateView"), Po(e), this._scheduler.performVisualTasks(e, t, { setDirty: !0 }), Oo(this, this._model, this._api, t), Bo(e, this._api));
          }, updateVisual: function updateVisual(t) {
            yg.update.call(this, t);
          }, updateLayout: function updateLayout(t) {
            yg.update.call(this, t);
          } };mg.resize = function (t) {
          this._zr.resize(t);var e = this._model;if (this._loadingFX && this._loadingFX.resize(), e) {
            var n = e.resetOption("media"),
                i = t && t.silent;this[pg] = !0, n && Mo(this), yg.update.call(this), this[pg] = !1, Co.call(this, i), Do.call(this, i);
          }
        }, mg.showLoading = function (t, e) {
          if (sg(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), kg[t]) {
            var n = kg[t](this._api, e),
                i = this._zr;this._loadingFX = n, i.add(n);
          }
        }, mg.hideLoading = function () {
          this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;
        }, mg.makeActionFromEvent = function (t) {
          var e = a({}, t);return e.type = wg[t.type], e;
        }, mg.dispatchAction = function (t, e) {
          sg(e) || (e = { silent: !!e }), xg[t.type] && this._model && (this[pg] ? this._pendingActions.push(t) : (ko.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : !1 !== e.flush && Gh.browser.weChat && this._throttledZrFlush(), Co.call(this, e.silent), Do.call(this, e.silent)));
        }, mg.appendData = function (t) {
          var e = t.seriesIndex;this.getModel().getSeriesByIndex(e).appendData(t), this._scheduler.unfinished = !0;
        }, mg.on = xo("on"), mg.off = xo("off"), mg.one = xo("one");var _g = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];mg._initEvents = function () {
          ag(_g, function (t) {
            this._zr.on(t, function (e) {
              var n,
                  i = this.getModel(),
                  r = e.target;if ("globalout" === t) n = {};else if (r && null != r.dataIndex) {
                var o = r.dataModel || i.getSeriesByIndex(r.seriesIndex);n = o && o.getDataParams(r.dataIndex, r.dataType, r) || {};
              } else r && r.eventData && (n = a({}, r.eventData));if (n) {
                var s = n.componentType,
                    l = n.componentIndex;"markLine" !== s && "markPoint" !== s && "markArea" !== s || (s = "series", l = n.seriesIndex);var h = s && null != l && i.getComponent(s, l),
                    u = h && this["series" === h.mainType ? "_chartsMap" : "_componentsMap"][h.__viewId];n.event = e, n.type = t, this._ecEventProcessor.eventInfo = { targetEl: r, packedEvent: n, model: h, view: u }, this.trigger(t, n);
              }
            }, this);
          }, this), ag(wg, function (t, e) {
            this._messageCenter.on(e, function (t) {
              this.trigger(e, t);
            }, this);
          }, this);
        }, mg.isDisposed = function () {
          return this._disposed;
        }, mg.clear = function () {
          this.setOption({ series: [] }, !0);
        }, mg.dispose = function () {
          if (!this._disposed) {
            this._disposed = !0, Sn(this.getDom(), Pg, "");var t = this._api,
                e = this._model;ag(this._componentsViews, function (n) {
              n.dispose(e, t);
            }), ag(this._chartsViews, function (n) {
              n.dispose(e, t);
            }), this._zr.dispose(), delete Cg[this.id];
          }
        }, u(bo, su), Wo.prototype = { constructor: Wo, normalizeQuery: function normalizeQuery(t) {
            var e = {},
                n = {},
                i = {};if (x(t)) {
              var r = lg(t);e.mainType = r.main || null, e.subType = r.sub || null;
            } else {
              var a = ["Index", "Name", "Id"],
                  o = { name: 1, dataIndex: 1, dataType: 1 };f(t, function (t, r) {
                for (var s = !1, l = 0; l < a.length; l++) {
                  var h = a[l],
                      u = r.lastIndexOf(h);if (u > 0 && u === r.length - h.length) {
                    var c = r.slice(0, u);"data" !== c && (e.mainType = c, e[h.toLowerCase()] = t, s = !0);
                  }
                }o.hasOwnProperty(r) && (n[r] = t, s = !0), s || (i[r] = t);
              });
            }return { cptQuery: e, dataQuery: n, otherQuery: i };
          }, filter: function filter(t, e, n) {
            function i(t, e, n, i) {
              return null == t[n] || e[i || n] === t[n];
            }var r = this.eventInfo;if (!r) return !0;var a = r.targetEl,
                o = r.packedEvent,
                s = r.model,
                l = r.view;if (!s || !l) return !0;var h = e.cptQuery,
                u = e.dataQuery;return i(h, s, "mainType") && i(h, s, "subType") && i(h, s, "index", "componentIndex") && i(h, s, "name") && i(h, s, "id") && i(u, o, "name") && i(u, o, "dataIndex") && i(u, o, "dataType") && (!l.filterForExposedEvent || l.filterForExposedEvent(t, e.otherQuery, a, o));
          }, afterTrigger: function afterTrigger() {
            this.eventInfo = null;
          } };var xg = {},
            wg = {},
            bg = [],
            Sg = [],
            Mg = [],
            Tg = [],
            Ig = {},
            kg = {},
            Cg = {},
            Dg = {},
            Ag = new Date() - 0,
            Lg = new Date() - 0,
            Pg = "_echarts_instance_",
            Og = Go;$o(2e3, Op), Yo(gp), Uo(5e3, function (t) {
          var e = B();t.eachSeries(function (t) {
            var n = t.get("stack");if (n) {
              var i = e.get(n) || e.set(n, []),
                  r = t.getData(),
                  a = { stackResultDimension: r.getCalculationInfo("stackResultDimension"), stackedOverDimension: r.getCalculationInfo("stackedOverDimension"), stackedDimension: r.getCalculationInfo("stackedDimension"), stackedByDimension: r.getCalculationInfo("stackedByDimension"), isStackedByIndex: r.getCalculationInfo("isStackedByIndex"), data: r, seriesModel: t };if (!a.stackedDimension || !a.isStackedByIndex && !a.stackedByDimension) return;i.length && r.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel), i.push(a);
            }
          }), e.each(xa);
        }), Ko("default", function (t, e) {
          o(e = e || {}, { text: "loading", color: "#c23531", textColor: "#000", maskColor: "rgba(255, 255, 255, 0.8)", zlevel: 0 });var n = new nd({ style: { fill: e.maskColor }, zlevel: e.zlevel, z: 1e4 }),
              i = new od({ shape: { startAngle: -Bp / 2, endAngle: -Bp / 2 + .1, r: 10 }, style: { stroke: e.color, lineCap: "round", lineWidth: 5 }, zlevel: e.zlevel, z: 10001 }),
              r = new nd({ style: { fill: "none", text: e.text, textPosition: "right", textDistance: 10, textFill: e.textColor }, zlevel: e.zlevel, z: 10001 });i.animateShape(!0).when(1e3, { endAngle: 3 * Bp / 2 }).start("circularInOut"), i.animateShape(!0).when(1e3, { startAngle: 3 * Bp / 2 }).delay(300).start("circularInOut");var a = new Hu();return a.add(i), a.add(r), a.add(n), a.resize = function () {
            var e = t.getWidth() / 2,
                a = t.getHeight() / 2;i.setShape({ cx: e, cy: a });var o = i.shape.r;r.setShape({ x: e - o, y: a - o, width: 2 * o, height: 2 * o }), n.setShape({ x: 0, y: 0, width: t.getWidth(), height: t.getHeight() });
          }, a.resize(), a;
        }), jo({ type: "highlight", event: "highlight", update: "highlight" }, R), jo({ type: "downplay", event: "downplay", update: "downplay" }, R), qo("light", Xp), qo("dark", Yp);var Eg = {};is.prototype = { constructor: is, add: function add(t) {
            return this._add = t, this;
          }, update: function update(t) {
            return this._update = t, this;
          }, remove: function remove(t) {
            return this._remove = t, this;
          }, execute: function execute() {
            var t = this._old,
                e = this._new,
                n = {},
                i = [],
                r = [];for (rs(t, {}, i, "_oldKeyGetter", this), rs(e, n, r, "_newKeyGetter", this), a = 0; a < t.length; a++) {
              null != (s = n[o = i[a]]) ? ((h = s.length) ? (1 === h && (n[o] = null), s = s.unshift()) : n[o] = null, this._update && this._update(s, a)) : this._remove && this._remove(a);
            }for (var a = 0; a < r.length; a++) {
              var o = r[a];if (n.hasOwnProperty(o)) {
                var s = n[o];if (null == s) continue;if (s.length) for (var l = 0, h = s.length; l < h; l++) {
                  this._add && this._add(s[l]);
                } else this._add && this._add(s);
              }
            }
          } };var Ng = B(["tooltip", "label", "itemName", "itemId", "seriesName"]),
            Bg = w,
            Rg = "e\0\0",
            zg = { float: "undefined" == typeof Float64Array ? Array : Float64Array, int: "undefined" == typeof Int32Array ? Array : Int32Array, ordinal: Array, number: Array, time: Array },
            Fg = "undefined" == typeof Uint32Array ? Array : Uint32Array,
            Vg = "undefined" == typeof Uint16Array ? Array : Uint16Array,
            Wg = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx"],
            Hg = ["_extent", "_approximateExtent", "_rawExtent"],
            Gg = function Gg(t, e) {
          t = t || ["x", "y"];for (var n = {}, i = [], r = {}, a = 0; a < t.length; a++) {
            var o = t[a];x(o) && (o = { name: o });var s = o.name;o.type = o.type || "float", o.coordDim || (o.coordDim = s, o.coordDimIndex = 0), o.otherDims = o.otherDims || {}, i.push(s), n[s] = o, o.index = a, o.createInvertedIndices && (r[s] = []);
          }this.dimensions = i, this._dimensionInfos = n, this.hostModel = e, this.dataType, this._indices = null, this._count = 0, this._rawCount = 0, this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this.hasItemVisual = {}, this._itemLayouts = [], this._graphicEls = [], this._chunkSize = 1e5, this._chunkCount = 0, this._rawData, this._rawExtent = {}, this._extent = {}, this._approximateExtent = {}, this._dimensionsSummary = as(this), this._invertedIndicesMap = r, this._calculationInfo = {};
        },
            Xg = Gg.prototype;Xg.type = "list", Xg.hasItemOption = !0, Xg.getDimension = function (t) {
          return isNaN(t) || (t = this.dimensions[t] || t), t;
        }, Xg.getDimensionInfo = function (t) {
          return this._dimensionInfos[this.getDimension(t)];
        }, Xg.getDimensionsOnCoord = function () {
          return this._dimensionsSummary.dataDimsOnCoord.slice();
        }, Xg.mapDimension = function (t, e) {
          var n = this._dimensionsSummary;if (null == e) return n.encodeFirstDimNotExtra[t];var i = n.encode[t];return !0 === e ? (i || []).slice() : i && i[e];
        }, Xg.initData = function (t, e, n) {
          (Nr.isInstance(t) || c(t)) && (t = new wa(t, this.dimensions.length)), this._rawData = t, this._storage = {}, this._indices = null, this._nameList = e || [], this._idList = [], this._nameRepeatCount = {}, n || (this.hasItemOption = !1), this.defaultDimValueGetter = _p[this._rawData.getSource().sourceFormat], this._dimValueGetter = n = n || this.defaultDimValueGetter, this._rawExtent = {}, this._initDataFromProvider(0, t.count()), t.pure && (this.hasItemOption = !1);
        }, Xg.getProvider = function () {
          return this._rawData;
        }, Xg.appendData = function (t) {
          var e = this._rawData,
              n = this.count();e.appendData(t);var i = e.count();e.persistent || (i += n), this._initDataFromProvider(n, i);
        }, Xg._initDataFromProvider = function (t, e) {
          if (!(t >= e)) {
            for (var n, i = this._chunkSize, r = this._rawData, a = this._storage, o = this.dimensions, s = o.length, l = this._dimensionInfos, h = this._nameList, u = this._idList, c = this._rawExtent, f = this._nameRepeatCount = {}, d = this._chunkCount, p = d - 1, g = 0; g < s; g++) {
              c[I = o[g]] || (c[I] = [1 / 0, -1 / 0]);var v = l[I];0 === v.otherDims.itemName && (n = this._nameDimIdx = g), 0 === v.otherDims.itemId && (this._idDimIdx = g);var m = zg[v.type];a[I] || (a[I] = []);var y = a[I][p];if (y && y.length < i) {
                for (var _ = new m(Math.min(e - p * i, i)), x = 0; x < y.length; x++) {
                  _[x] = y[x];
                }a[I][p] = _;
              }for (T = d * i; T < e; T += i) {
                a[I].push(new m(Math.min(e - T, i)));
              }this._chunkCount = a[I].length;
            }for (var w = new Array(s), b = t; b < e; b++) {
              w = r.getItem(b, w);for (var S = Math.floor(b / i), M = b % i, T = 0; T < s; T++) {
                var I = o[T],
                    k = a[I][S],
                    C = this._dimValueGetter(w, I, b, T);k[M] = C;var D = c[I];C < D[0] && (D[0] = C), C > D[1] && (D[1] = C);
              }if (!r.pure) {
                var A = h[b];if (w && null == A) if (null != w.name) h[b] = A = w.name;else if (null != n) {
                  var L = o[n],
                      P = a[L][S];if (P) {
                    A = P[M];var O = l[L].ordinalMeta;O && O.categories.length && (A = O.categories[A]);
                  }
                }var E = null == w ? null : w.id;null == E && null != A && (f[A] = f[A] || 0, E = A, f[A] > 0 && (E += "__ec__" + f[A]), f[A]++), null != E && (u[b] = E);
              }
            }!r.persistent && r.clean && r.clean(), this._rawCount = this._count = e, this._extent = {}, cs(this);
          }
        }, Xg.count = function () {
          return this._count;
        }, Xg.getIndices = function () {
          var t = this._indices;if (t) {
            var e = t.constructor,
                n = this._count;if (e === Array) {
              i = new e(n);for (r = 0; r < n; r++) {
                i[r] = t[r];
              }
            } else i = new e(t.buffer, 0, n);
          } else for (var i = new (e = ls(this))(this.count()), r = 0; r < i.length; r++) {
            i[r] = r;
          }return i;
        }, Xg.get = function (t, e) {
          if (!(e >= 0 && e < this._count)) return NaN;var n = this._storage;if (!n[t]) return NaN;e = this.getRawIndex(e);var i = Math.floor(e / this._chunkSize),
              r = e % this._chunkSize;return n[t][i][r];
        }, Xg.getByRawIndex = function (t, e) {
          if (!(e >= 0 && e < this._rawCount)) return NaN;var n = this._storage[t];if (!n) return NaN;var i = Math.floor(e / this._chunkSize),
              r = e % this._chunkSize;return n[i][r];
        }, Xg._getFast = function (t, e) {
          var n = Math.floor(e / this._chunkSize),
              i = e % this._chunkSize;return this._storage[t][n][i];
        }, Xg.getValues = function (t, e) {
          var n = [];y(t) || (e = t, t = this.dimensions);for (var i = 0, r = t.length; i < r; i++) {
            n.push(this.get(t[i], e));
          }return n;
        }, Xg.hasValue = function (t) {
          for (var e = this._dimensionsSummary.dataDimsOnCoord, n = this._dimensionInfos, i = 0, r = e.length; i < r; i++) {
            if ("ordinal" !== n[e[i]].type && isNaN(this.get(e[i], t))) return !1;
          }return !0;
        }, Xg.getDataExtent = function (t) {
          t = this.getDimension(t);var e = [1 / 0, -1 / 0];if (!this._storage[t]) return e;var n,
              i = this.count();if (!this._indices) return this._rawExtent[t].slice();if (n = this._extent[t]) return n.slice();for (var r = (n = e)[0], a = n[1], o = 0; o < i; o++) {
            var s = this._getFast(t, this.getRawIndex(o));s < r && (r = s), s > a && (a = s);
          }return n = [r, a], this._extent[t] = n, n;
        }, Xg.getApproximateExtent = function (t) {
          return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t);
        }, Xg.setApproximateExtent = function (t, e) {
          e = this.getDimension(e), this._approximateExtent[e] = t.slice();
        }, Xg.getCalculationInfo = function (t) {
          return this._calculationInfo[t];
        }, Xg.setCalculationInfo = function (t, e) {
          Bg(t) ? a(this._calculationInfo, t) : this._calculationInfo[t] = e;
        }, Xg.getSum = function (t) {
          var e = 0;if (this._storage[t]) for (var n = 0, i = this.count(); n < i; n++) {
            var r = this.get(t, n);isNaN(r) || (e += r);
          }return e;
        }, Xg.getMedian = function (t) {
          var e = [];this.each(t, function (t, n) {
            isNaN(t) || e.push(t);
          });var n = [].concat(e).sort(function (t, e) {
            return t - e;
          }),
              i = this.count();return 0 === i ? 0 : i % 2 == 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2;
        }, Xg.rawIndexOf = function (t, e) {
          var n = (t && this._invertedIndicesMap[t])[e];return null == n || isNaN(n) ? -1 : n;
        }, Xg.indexOfName = function (t) {
          for (var e = 0, n = this.count(); e < n; e++) {
            if (this.getName(e) === t) return e;
          }return -1;
        }, Xg.indexOfRawIndex = function (t) {
          if (!this._indices) return t;if (t >= this._rawCount || t < 0) return -1;var e = this._indices,
              n = e[t];if (null != n && n < this._count && n === t) return t;for (var i = 0, r = this._count - 1; i <= r;) {
            var a = (i + r) / 2 | 0;if (e[a] < t) i = a + 1;else {
              if (!(e[a] > t)) return a;r = a - 1;
            }
          }return -1;
        }, Xg.indicesOfNearest = function (t, e, n) {
          var i = [];if (!this._storage[t]) return i;null == n && (n = 1 / 0);for (var r = Number.MAX_VALUE, a = -1, o = 0, s = this.count(); o < s; o++) {
            var l = e - this.get(t, o),
                h = Math.abs(l);l <= n && h <= r && ((h < r || l >= 0 && a < 0) && (r = h, a = l, i.length = 0), i.push(o));
          }return i;
        }, Xg.getRawIndex = ds, Xg.getRawDataItem = function (t) {
          if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));for (var e = [], n = 0; n < this.dimensions.length; n++) {
            var i = this.dimensions[n];e.push(this.get(i, t));
          }return e;
        }, Xg.getName = function (t) {
          var e = this.getRawIndex(t);return this._nameList[e] || fs(this, this._nameDimIdx, e) || "";
        }, Xg.getId = function (t) {
          return gs(this, this.getRawIndex(t));
        }, Xg.each = function (t, e, n, i) {
          if (this._count) {
            "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this;for (var r = (t = d(vs(t), this.getDimension, this)).length, a = 0; a < this.count(); a++) {
              switch (r) {case 0:
                  e.call(n, a);break;case 1:
                  e.call(n, this.get(t[0], a), a);break;case 2:
                  e.call(n, this.get(t[0], a), this.get(t[1], a), a);break;default:
                  for (var o = 0, s = []; o < r; o++) {
                    s[o] = this.get(t[o], a);
                  }s[o] = a, e.apply(n, s);}
            }
          }
        }, Xg.filterSelf = function (t, e, n, i) {
          if (this._count) {
            "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = d(vs(t), this.getDimension, this);for (var r = this.count(), a = new (ls(this))(r), o = [], s = t.length, l = 0, h = t[0], u = 0; u < r; u++) {
              var c,
                  f = this.getRawIndex(u);if (0 === s) c = e.call(n, u);else if (1 === s) {
                var p = this._getFast(h, f);c = e.call(n, p, u);
              } else {
                for (var g = 0; g < s; g++) {
                  o[g] = this._getFast(h, f);
                }o[g] = u, c = e.apply(n, o);
              }c && (a[l++] = f);
            }return l < r && (this._indices = a), this._count = l, this._extent = {}, this.getRawIndex = this._indices ? ps : ds, this;
          }
        }, Xg.selectRange = function (t) {
          if (this._count) {
            var e = [];for (var n in t) {
              t.hasOwnProperty(n) && e.push(n);
            }var i = e.length;if (i) {
              var r = this.count(),
                  a = new (ls(this))(r),
                  o = 0,
                  s = e[0],
                  l = t[s][0],
                  h = t[s][1],
                  u = !1;if (!this._indices) {
                var c = 0;if (1 === i) {
                  for (var f = this._storage[e[0]], d = 0; d < this._chunkCount; d++) {
                    for (var p = f[d], g = Math.min(this._count - d * this._chunkSize, this._chunkSize), v = 0; v < g; v++) {
                      ((w = p[v]) >= l && w <= h || isNaN(w)) && (a[o++] = c), c++;
                    }
                  }u = !0;
                } else if (2 === i) {
                  for (var f = this._storage[s], m = this._storage[e[1]], y = t[e[1]][0], _ = t[e[1]][1], d = 0; d < this._chunkCount; d++) {
                    for (var p = f[d], x = m[d], g = Math.min(this._count - d * this._chunkSize, this._chunkSize), v = 0; v < g; v++) {
                      var w = p[v],
                          b = x[v];(w >= l && w <= h || isNaN(w)) && (b >= y && b <= _ || isNaN(b)) && (a[o++] = c), c++;
                    }
                  }u = !0;
                }
              }if (!u) if (1 === i) for (v = 0; v < r; v++) {
                M = this.getRawIndex(v);((w = this._getFast(s, M)) >= l && w <= h || isNaN(w)) && (a[o++] = M);
              } else for (v = 0; v < r; v++) {
                for (var S = !0, M = this.getRawIndex(v), d = 0; d < i; d++) {
                  var T = e[d];((w = this._getFast(n, M)) < t[T][0] || w > t[T][1]) && (S = !1);
                }S && (a[o++] = this.getRawIndex(v));
              }return o < r && (this._indices = a), this._count = o, this._extent = {}, this.getRawIndex = this._indices ? ps : ds, this;
            }
          }
        }, Xg.mapArray = function (t, e, n, i) {
          "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this;var r = [];return this.each(t, function () {
            r.push(e && e.apply(this, arguments));
          }, n), r;
        }, Xg.map = function (t, e, n, i) {
          n = n || i || this;var r = ms(this, t = d(vs(t), this.getDimension, this));r._indices = this._indices, r.getRawIndex = r._indices ? ps : ds;for (var a = r._storage, o = [], s = this._chunkSize, l = t.length, h = this.count(), u = [], c = r._rawExtent, f = 0; f < h; f++) {
            for (var p = 0; p < l; p++) {
              u[p] = this.get(t[p], f);
            }u[l] = f;var g = e && e.apply(n, u);if (null != g) {
              "object" != (typeof g === "undefined" ? "undefined" : _typeof(g)) && (o[0] = g, g = o);for (var v = this.getRawIndex(f), m = Math.floor(v / s), y = v % s, _ = 0; _ < g.length; _++) {
                var x = t[_],
                    w = g[_],
                    b = c[x],
                    S = a[x];S && (S[m][y] = w), w < b[0] && (b[0] = w), w > b[1] && (b[1] = w);
              }
            }
          }return r;
        }, Xg.downSample = function (t, e, n, i) {
          for (var r = ms(this, [t]), a = r._storage, o = [], s = Math.floor(1 / e), l = a[t], h = this.count(), u = this._chunkSize, c = r._rawExtent[t], f = new (ls(this))(h), d = 0, p = 0; p < h; p += s) {
            s > h - p && (s = h - p, o.length = s);for (var g = 0; g < s; g++) {
              var v = this.getRawIndex(p + g),
                  m = Math.floor(v / u),
                  y = v % u;o[g] = l[m][y];
            }var _ = n(o),
                x = this.getRawIndex(Math.min(p + i(o, _) || 0, h - 1)),
                w = x % u;l[Math.floor(x / u)][w] = _, _ < c[0] && (c[0] = _), _ > c[1] && (c[1] = _), f[d++] = x;
          }return r._count = d, r._indices = f, r.getRawIndex = ps, r;
        }, Xg.getItemModel = function (t) {
          var e = this.hostModel;return new rr(this.getRawDataItem(t), e, e && e.ecModel);
        }, Xg.diff = function (t) {
          var e = this;return new is(t ? t.getIndices() : [], this.getIndices(), function (e) {
            return gs(t, e);
          }, function (t) {
            return gs(e, t);
          });
        }, Xg.getVisual = function (t) {
          var e = this._visual;return e && e[t];
        }, Xg.setVisual = function (t, e) {
          if (Bg(t)) for (var n in t) {
            t.hasOwnProperty(n) && this.setVisual(n, t[n]);
          } else this._visual = this._visual || {}, this._visual[t] = e;
        }, Xg.setLayout = function (t, e) {
          if (Bg(t)) for (var n in t) {
            t.hasOwnProperty(n) && this.setLayout(n, t[n]);
          } else this._layout[t] = e;
        }, Xg.getLayout = function (t) {
          return this._layout[t];
        }, Xg.getItemLayout = function (t) {
          return this._itemLayouts[t];
        }, Xg.setItemLayout = function (t, e, n) {
          this._itemLayouts[t] = n ? a(this._itemLayouts[t] || {}, e) : e;
        }, Xg.clearItemLayouts = function () {
          this._itemLayouts.length = 0;
        }, Xg.getItemVisual = function (t, e, n) {
          var i = this._itemVisuals[t],
              r = i && i[e];return null != r || n ? r : this.getVisual(e);
        }, Xg.setItemVisual = function (t, e, n) {
          var i = this._itemVisuals[t] || {},
              r = this.hasItemVisual;if (this._itemVisuals[t] = i, Bg(e)) for (var a in e) {
            e.hasOwnProperty(a) && (i[a] = e[a], r[a] = !0);
          } else i[e] = n, r[e] = !0;
        }, Xg.clearAllVisual = function () {
          this._visual = {}, this._itemVisuals = [], this.hasItemVisual = {};
        };var qg = function qg(t) {
          t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType;
        };Xg.setItemGraphicEl = function (t, e) {
          var n = this.hostModel;e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = n && n.seriesIndex, "group" === e.type && e.traverse(qg, e)), this._graphicEls[t] = e;
        }, Xg.getItemGraphicEl = function (t) {
          return this._graphicEls[t];
        }, Xg.eachItemGraphicEl = function (t, e) {
          f(this._graphicEls, function (n, i) {
            n && t && t.call(e, n, i);
          });
        }, Xg.cloneShallow = function (t) {
          if (!t) {
            var e = d(this.dimensions, this.getDimensionInfo, this);t = new Gg(e, this.hostModel);
          }if (t._storage = this._storage, us(t, this), this._indices) {
            var n = this._indices.constructor;t._indices = new n(this._indices);
          } else t._indices = null;return t.getRawIndex = t._indices ? ps : ds, t;
        }, Xg.wrapMethod = function (t, e) {
          var n = this[t];"function" == typeof n && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {
            var t = n.apply(this, arguments);return e.apply(this, [t].concat(D(arguments)));
          });
        }, Xg.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], Xg.CHANGABLE_METHODS = ["filterSelf", "selectRange"];var Yg = function Yg(t, e) {
          return e = e || {}, xs(e.coordDimensions || [], t, { dimsDef: e.dimensionsDefine || t.dimensionsDefine, encodeDef: e.encodeDefine || t.encodeDefine, dimCount: e.dimensionsCount, generateCoord: e.generateCoord, generateCoordCount: e.generateCoordCount });
        };Tp.extend({ type: "series.line", dependencies: ["grid", "polar"], getInitialData: function getInitialData(t, e) {
            return Is(this.getSource(), this);
          }, defaultOption: { zlevel: 0, z: 2, coordinateSystem: "cartesian2d", legendHoverLink: !0, hoverAnimation: !0, clipOverflow: !0, label: { position: "top" }, lineStyle: { width: 2, type: "solid" }, step: !1, smooth: !1, smoothMonotone: null, symbol: "emptyCircle", symbolSize: 4, symbolRotate: null, showSymbol: !0, showAllSymbol: "auto", connectNulls: !1, sampling: "none", animationEasing: "linear", progressive: 0, hoverLayerThreshold: 1 / 0 } });var Ug = wi({ type: "triangle", shape: { cx: 0, cy: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {
            var n = e.cx,
                i = e.cy,
                r = e.width / 2,
                a = e.height / 2;t.moveTo(n, i - a), t.lineTo(n + r, i + a), t.lineTo(n - r, i + a), t.closePath();
          } }),
            jg = wi({ type: "diamond", shape: { cx: 0, cy: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {
            var n = e.cx,
                i = e.cy,
                r = e.width / 2,
                a = e.height / 2;t.moveTo(n, i - a), t.lineTo(n + r, i), t.lineTo(n, i + a), t.lineTo(n - r, i), t.closePath();
          } }),
            Zg = wi({ type: "pin", shape: { x: 0, y: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {
            var n = e.x,
                i = e.y,
                r = e.width / 5 * 3,
                a = Math.max(r, e.height),
                o = r / 2,
                s = o * o / (a - o),
                l = i - a + o + s,
                h = Math.asin(s / o),
                u = Math.cos(h) * o,
                c = Math.sin(h),
                f = Math.cos(h),
                d = .6 * o,
                p = .7 * o;t.moveTo(n - u, l + s), t.arc(n, l, o, Math.PI - h, 2 * Math.PI + h), t.bezierCurveTo(n + u - c * d, l + s + f * d, n, i - p, n, i), t.bezierCurveTo(n, i - p, n - u + c * d, l + s + f * d, n - u, l + s), t.closePath();
          } }),
            $g = wi({ type: "arrow", shape: { x: 0, y: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {
            var n = e.height,
                i = e.width,
                r = e.x,
                a = e.y,
                o = i / 3 * 2;t.moveTo(r, a), t.lineTo(r + o, a + n), t.lineTo(r, a + n / 4 * 3), t.lineTo(r - o, a + n), t.lineTo(r, a), t.closePath();
          } }),
            Qg = { line: function line(t, e, n, i, r) {
            r.x1 = t, r.y1 = e + i / 2, r.x2 = t + n, r.y2 = e + i / 2;
          }, rect: function rect(t, e, n, i, r) {
            r.x = t, r.y = e, r.width = n, r.height = i;
          }, roundRect: function roundRect(t, e, n, i, r) {
            r.x = t, r.y = e, r.width = n, r.height = i, r.r = Math.min(n, i) / 4;
          }, square: function square(t, e, n, i, r) {
            var a = Math.min(n, i);r.x = t, r.y = e, r.width = a, r.height = a;
          }, circle: function circle(t, e, n, i, r) {
            r.cx = t + n / 2, r.cy = e + i / 2, r.r = Math.min(n, i) / 2;
          }, diamond: function diamond(t, e, n, i, r) {
            r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i;
          }, pin: function pin(t, e, n, i, r) {
            r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i;
          }, arrow: function arrow(t, e, n, i, r) {
            r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i;
          }, triangle: function triangle(t, e, n, i, r) {
            r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i;
          } },
            Kg = {};f({ line: id, rect: nd, roundRect: nd, square: nd, circle: Uf, diamond: jg, pin: Zg, arrow: $g, triangle: Ug }, function (t, e) {
          Kg[e] = new t();
        });var Jg = wi({ type: "symbol", shape: { symbolType: "", x: 0, y: 0, width: 0, height: 0 }, beforeBrush: function beforeBrush() {
            var t = this.style;"pin" === this.shape.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t.textAlign = "center", t.textVerticalAlign = "middle");
          }, buildPath: function buildPath(t, e, n) {
            var i = e.symbolType,
                r = Kg[i];"none" !== e.symbolType && (r || (r = Kg[i = "rect"]), Qg[i](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, n));
          } }),
            tv = Ps.prototype,
            ev = Ps.getSymbolSize = function (t, e) {
          var n = t.getItemVisual(e, "symbolSize");return n instanceof Array ? n.slice() : [+n, +n];
        };tv._createSymbol = function (t, e, n, i, r) {
          this.removeAll();var a = As(t, -1, -1, 2, 2, e.getItemVisual(n, "color"), r);a.attr({ z2: 100, culling: !0, scale: Os(i) }), a.drift = Es, this._symbolType = t, this.add(a);
        }, tv.stopSymbolAnimation = function (t) {
          this.childAt(0).stopAnimation(t);
        }, tv.getSymbolPath = function () {
          return this.childAt(0);
        }, tv.getScale = function () {
          return this.childAt(0).scale;
        }, tv.highlight = function () {
          this.childAt(0).trigger("emphasis");
        }, tv.downplay = function () {
          this.childAt(0).trigger("normal");
        }, tv.setZ = function (t, e) {
          var n = this.childAt(0);n.zlevel = t, n.z = e;
        }, tv.setDraggable = function (t) {
          var e = this.childAt(0);e.draggable = t, e.cursor = t ? "move" : "pointer";
        }, tv.updateData = function (t, e, n) {
          this.silent = !1;var i = t.getItemVisual(e, "symbol") || "circle",
              r = t.hostModel,
              a = ev(t, e),
              o = i !== this._symbolType;if (o) {
            var s = t.getItemVisual(e, "symbolKeepAspect");this._createSymbol(i, t, e, a, s);
          } else (l = this.childAt(0)).silent = !1, tr(l, { scale: Os(a) }, r, e);if (this._updateCommon(t, e, a, n), o) {
            var l = this.childAt(0),
                h = n && n.fadeIn,
                u = { scale: l.scale.slice() };h && (u.style = { opacity: l.style.opacity }), l.scale = [0, 0], h && (l.style.opacity = 0), er(l, u, r, e);
          }this._seriesModel = r;
        };var nv = ["itemStyle"],
            iv = ["emphasis", "itemStyle"],
            rv = ["label"],
            av = ["emphasis", "label"];tv._updateCommon = function (t, e, n, i) {
          var r = this.childAt(0),
              o = t.hostModel,
              s = t.getItemVisual(e, "color");"image" !== r.type && r.useStyle({ strokeNoScale: !0 });var l = i && i.itemStyle,
              h = i && i.hoverItemStyle,
              u = i && i.symbolRotate,
              c = i && i.symbolOffset,
              f = i && i.labelModel,
              d = i && i.hoverLabelModel,
              p = i && i.hoverAnimation,
              g = i && i.cursorStyle;if (!i || t.hasItemOption) {
            var v = i && i.itemModel ? i.itemModel : t.getItemModel(e);l = v.getModel(nv).getItemStyle(["color"]), h = v.getModel(iv).getItemStyle(), u = v.getShallow("symbolRotate"), c = v.getShallow("symbolOffset"), f = v.getModel(rv), d = v.getModel(av), p = v.getShallow("hoverAnimation"), g = v.getShallow("cursor");
          } else h = a({}, h);var m = r.style;r.attr("rotation", (u || 0) * Math.PI / 180 || 0), c && r.attr("position", [ur(c[0], n[0]), ur(c[1], n[1])]), g && r.attr("cursor", g), r.setColor(s, i && i.symbolInnerColor), r.setStyle(l);var y = t.getItemVisual(e, "opacity");null != y && (m.opacity = y);var _ = t.getItemVisual(e, "liftZ"),
              x = r.__z2Origin;null != _ ? null == x && (r.__z2Origin = r.z2, r.z2 += _) : null != x && (r.z2 = x, r.__z2Origin = null);var w = i && i.useNameLabel;Xi(m, h, f, d, { labelFetcher: o, labelDataIndex: e, defaultText: function defaultText(e, n) {
              return w ? t.getName(e) : Ls(t, e);
            }, isRectText: !0, autoColor: s }), r.off("mouseover").off("mouseout").off("emphasis").off("normal"), r.hoverStyle = h, Hi(r), r.__symbolOriginalScale = Os(n), p && o.isAnimationEnabled() && r.on("mouseover", Ns).on("mouseout", Bs).on("emphasis", Rs).on("normal", zs);
        }, tv.fadeOut = function (t, e) {
          var n = this.childAt(0);this.silent = n.silent = !0, !(e && e.keepLabel) && (n.style.text = null), tr(n, { style: { opacity: 0 }, scale: [0, 0] }, this._seriesModel, this.dataIndex, t);
        }, h(Ps, Hu);var ov = Fs.prototype;ov.updateData = function (t, e) {
          e = Ws(e);var n = this.group,
              i = t.hostModel,
              r = this._data,
              a = this._symbolCtor,
              o = Hs(t);r || n.removeAll(), t.diff(r).add(function (i) {
            var r = t.getItemLayout(i);if (Vs(t, r, i, e)) {
              var s = new a(t, i, o);s.attr("position", r), t.setItemGraphicEl(i, s), n.add(s);
            }
          }).update(function (s, l) {
            var h = r.getItemGraphicEl(l),
                u = t.getItemLayout(s);Vs(t, u, s, e) ? (h ? (h.updateData(t, s, o), tr(h, { position: u }, i)) : (h = new a(t, s)).attr("position", u), n.add(h), t.setItemGraphicEl(s, h)) : n.remove(h);
          }).remove(function (t) {
            var e = r.getItemGraphicEl(t);e && e.fadeOut(function () {
              n.remove(e);
            });
          }).execute(), this._data = t;
        }, ov.isPersistent = function () {
          return !0;
        }, ov.updateLayout = function () {
          var t = this._data;t && t.eachItemGraphicEl(function (e, n) {
            var i = t.getItemLayout(n);e.attr("position", i);
          });
        }, ov.incrementalPrepareUpdate = function (t) {
          this._seriesScope = Hs(t), this._data = null, this.group.removeAll();
        }, ov.incrementalUpdate = function (t, e, n) {
          n = Ws(n);for (var i = t.start; i < t.end; i++) {
            var r = e.getItemLayout(i);if (Vs(e, r, i, n)) {
              var a = new this._symbolCtor(e, i, this._seriesScope);a.traverse(function (t) {
                t.isGroup || (t.incremental = t.useHoverLayer = !0);
              }), a.attr("position", r), this.group.add(a), e.setItemGraphicEl(i, a);
            }
          }
        }, ov.remove = function (t) {
          var e = this.group,
              n = this._data;n && t ? n.eachItemGraphicEl(function (t) {
            t.fadeOut(function () {
              e.remove(t);
            });
          }) : e.removeAll();
        };var sv = function sv(t, e, n, i, r, a, o, s) {
          for (var l = Ys(t, e), h = [], u = [], c = [], f = [], d = [], p = [], g = [], v = Gs(r, e, o), m = Gs(a, t, s), y = 0; y < l.length; y++) {
            var _ = l[y],
                x = !0;switch (_.cmd) {case "=":
                var w = t.getItemLayout(_.idx),
                    b = e.getItemLayout(_.idx1);(isNaN(w[0]) || isNaN(w[1])) && (w = b.slice()), h.push(w), u.push(b), c.push(n[_.idx]), f.push(i[_.idx1]), g.push(e.getRawIndex(_.idx1));break;case "+":
                S = _.idx;h.push(r.dataToPoint([e.get(v.dataDimsForPoint[0], S), e.get(v.dataDimsForPoint[1], S)])), u.push(e.getItemLayout(S).slice()), c.push(qs(v, r, e, S)), f.push(i[S]), g.push(e.getRawIndex(S));break;case "-":
                var S = _.idx,
                    M = t.getRawIndex(S);M !== S ? (h.push(t.getItemLayout(S)), u.push(a.dataToPoint([t.get(m.dataDimsForPoint[0], S), t.get(m.dataDimsForPoint[1], S)])), c.push(n[S]), f.push(qs(m, a, t, S)), g.push(M)) : x = !1;}x && (d.push(_), p.push(p.length));
          }p.sort(function (t, e) {
            return g[t] - g[e];
          });for (var T = [], I = [], k = [], C = [], D = [], y = 0; y < p.length; y++) {
            S = p[y];T[y] = h[S], I[y] = u[S], k[y] = c[S], C[y] = f[S], D[y] = d[S];
          }return { current: T, next: I, stackedOnCurrent: k, stackedOnNext: C, status: D };
        },
            lv = j,
            hv = Z,
            uv = function uv(t, e, n, i) {
          return t[0] = e[0] + n[0] * i, t[1] = e[1] + n[1] * i, t;
        },
            cv = function cv(t, e) {
          return t[0] = e[0], t[1] = e[1], t;
        },
            fv = [],
            dv = [],
            pv = [],
            gv = ci.extend({ type: "ec-polyline", shape: { points: [], smooth: 0, smoothConstraint: !0, smoothMonotone: null, connectNulls: !1 }, style: { fill: null, stroke: "#000" }, brush: Zf(ci.prototype.brush), buildPath: function buildPath(t, e) {
            var n = e.points,
                i = 0,
                r = n.length,
                a = Qs(n, e.smoothConstraint);if (e.connectNulls) {
              for (; r > 0 && Us(n[r - 1]); r--) {}for (; i < r && Us(n[i]); i++) {}
            }for (; i < r;) {
              i += js(t, n, i, r, r, 1, a.min, a.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1;
            }
          } }),
            vv = ci.extend({ type: "ec-polygon", shape: { points: [], stackedOnPoints: [], smooth: 0, stackedOnSmooth: 0, smoothConstraint: !0, smoothMonotone: null, connectNulls: !1 }, brush: Zf(ci.prototype.brush), buildPath: function buildPath(t, e) {
            var n = e.points,
                i = e.stackedOnPoints,
                r = 0,
                a = n.length,
                o = e.smoothMonotone,
                s = Qs(n, e.smoothConstraint),
                l = Qs(i, e.smoothConstraint);if (e.connectNulls) {
              for (; a > 0 && Us(n[a - 1]); a--) {}for (; r < a && Us(n[r]); r++) {}
            }for (; r < a;) {
              var h = js(t, n, r, a, a, 1, s.min, s.max, e.smooth, o, e.connectNulls);js(t, i, r + h - 1, h, a, -1, l.min, l.max, e.stackedOnSmooth, o, e.connectNulls), r += h + 1, t.closePath();
            }
          } });Ha.extend({ type: "line", init: function init() {
            var t = new Hu(),
                e = new Fs();this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t;
          }, render: function render(t, e, n) {
            var i = t.coordinateSystem,
                r = this.group,
                a = t.getData(),
                s = t.getModel("lineStyle"),
                l = t.getModel("areaStyle"),
                h = a.mapArray(a.getItemLayout),
                u = "polar" === i.type,
                c = this._coordSys,
                f = this._symbolDraw,
                d = this._polyline,
                p = this._polygon,
                g = this._lineGroup,
                v = t.get("animation"),
                m = !l.isEmpty(),
                y = l.get("origin"),
                _ = el(i, a, Gs(i, a, y)),
                x = t.get("showSymbol"),
                w = x && !u && sl(t, a, i),
                b = this._data;b && b.eachItemGraphicEl(function (t, e) {
              t.__temp && (r.remove(t), b.setItemGraphicEl(e, null));
            }), x || f.remove(), r.add(g);var S = !u && t.get("step");d && c.type === i.type && S === this._step ? (m && !p ? p = this._newPolygon(h, _, i, v) : p && !m && (g.remove(p), p = this._polygon = null), g.setClipPath(rl(i, !1, !1, t)), x && f.updateData(a, { isIgnore: w, clipShape: rl(i, !1, !0, t) }), a.eachItemGraphicEl(function (t) {
              t.stopAnimation(!0);
            }), Ks(this._stackedOnPoints, _) && Ks(this._points, h) || (v ? this._updateAnimation(a, _, i, n, S, y) : (S && (h = al(h, i, S), _ = al(_, i, S)), d.setShape({ points: h }), p && p.setShape({ points: h, stackedOnPoints: _ })))) : (x && f.updateData(a, { isIgnore: w, clipShape: rl(i, !1, !0, t) }), S && (h = al(h, i, S), _ = al(_, i, S)), d = this._newPolyline(h, i, v), m && (p = this._newPolygon(h, _, i, v)), g.setClipPath(rl(i, !0, !1, t)));var M = ol(a, i) || a.getVisual("color");d.useStyle(o(s.getLineStyle(), { fill: "none", stroke: M, lineJoin: "bevel" }));var T = t.get("smooth");if (T = Js(t.get("smooth")), d.setShape({ smooth: T, smoothMonotone: t.get("smoothMonotone"), connectNulls: t.get("connectNulls") }), p) {
              var I = a.getCalculationInfo("stackedOnSeries"),
                  k = 0;p.useStyle(o(l.getAreaStyle(), { fill: M, opacity: .7, lineJoin: "bevel" })), I && (k = Js(I.get("smooth"))), p.setShape({ smooth: T, stackedOnSmooth: k, smoothMonotone: t.get("smoothMonotone"), connectNulls: t.get("connectNulls") });
            }this._data = a, this._coordSys = i, this._stackedOnPoints = _, this._points = h, this._step = S, this._valueOrigin = y;
          }, dispose: function dispose() {}, highlight: function highlight(t, e, n, i) {
            var r = t.getData(),
                a = _n(r, i);if (!(a instanceof Array) && null != a && a >= 0) {
              var o = r.getItemGraphicEl(a);if (!o) {
                var s = r.getItemLayout(a);if (!s) return;(o = new Ps(r, a)).position = s, o.setZ(t.get("zlevel"), t.get("z")), o.ignore = isNaN(s[0]) || isNaN(s[1]), o.__temp = !0, r.setItemGraphicEl(a, o), o.stopSymbolAnimation(!0), this.group.add(o);
              }o.highlight();
            } else Ha.prototype.highlight.call(this, t, e, n, i);
          }, downplay: function downplay(t, e, n, i) {
            var r = t.getData(),
                a = _n(r, i);if (null != a && a >= 0) {
              var o = r.getItemGraphicEl(a);o && (o.__temp ? (r.setItemGraphicEl(a, null), this.group.remove(o)) : o.downplay());
            } else Ha.prototype.downplay.call(this, t, e, n, i);
          }, _newPolyline: function _newPolyline(t) {
            var e = this._polyline;return e && this._lineGroup.remove(e), e = new gv({ shape: { points: t }, silent: !0, z2: 10 }), this._lineGroup.add(e), this._polyline = e, e;
          }, _newPolygon: function _newPolygon(t, e) {
            var n = this._polygon;return n && this._lineGroup.remove(n), n = new vv({ shape: { points: t, stackedOnPoints: e }, silent: !0 }), this._lineGroup.add(n), this._polygon = n, n;
          }, _updateAnimation: function _updateAnimation(t, e, n, i, r, a) {
            var o = this._polyline,
                s = this._polygon,
                l = t.hostModel,
                h = sv(this._data, t, this._stackedOnPoints, e, this._coordSys, n, this._valueOrigin, a),
                u = h.current,
                c = h.stackedOnCurrent,
                f = h.next,
                d = h.stackedOnNext;r && (u = al(h.current, n, r), c = al(h.stackedOnCurrent, n, r), f = al(h.next, n, r), d = al(h.stackedOnNext, n, r)), o.shape.__points = h.current, o.shape.points = u, tr(o, { shape: { points: f } }, l), s && (s.setShape({ points: u, stackedOnPoints: c }), tr(s, { shape: { points: f, stackedOnPoints: d } }, l));for (var p = [], g = h.status, v = 0; v < g.length; v++) {
              if ("=" === g[v].cmd) {
                var m = t.getItemGraphicEl(g[v].idx1);m && p.push({ el: m, ptIdx: v });
              }
            }o.animators && o.animators.length && o.animators[0].during(function () {
              for (var t = 0; t < p.length; t++) {
                p[t].el.attr("position", o.shape.__points[p[t].ptIdx]);
              }
            });
          }, remove: function remove(t) {
            var e = this.group,
                n = this._data;this._lineGroup.removeAll(), this._symbolDraw.remove(!0), n && n.eachItemGraphicEl(function (t, i) {
              t.__temp && (e.remove(t), n.setItemGraphicEl(i, null));
            }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null;
          } });var mv = { average: function average(t) {
            for (var e = 0, n = 0, i = 0; i < t.length; i++) {
              isNaN(t[i]) || (e += t[i], n++);
            }return 0 === n ? NaN : e / n;
          }, sum: function sum(t) {
            for (var e = 0, n = 0; n < t.length; n++) {
              e += t[n] || 0;
            }return e;
          }, max: function max(t) {
            for (var e = -1 / 0, n = 0; n < t.length; n++) {
              t[n] > e && (e = t[n]);
            }return isFinite(e) ? e : NaN;
          }, min: function min(t) {
            for (var e = 1 / 0, n = 0; n < t.length; n++) {
              t[n] < e && (e = t[n]);
            }return isFinite(e) ? e : NaN;
          }, nearest: function nearest(t) {
            return t[0];
          } },
            yv = function yv(t, e) {
          return Math.round(t.length / 2);
        };hl.prototype.parse = function (t) {
          return t;
        }, hl.prototype.getSetting = function (t) {
          return this._setting[t];
        }, hl.prototype.contain = function (t) {
          var e = this._extent;return t >= e[0] && t <= e[1];
        }, hl.prototype.normalize = function (t) {
          var e = this._extent;return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0]);
        }, hl.prototype.scale = function (t) {
          var e = this._extent;return t * (e[1] - e[0]) + e[0];
        }, hl.prototype.unionExtent = function (t) {
          var e = this._extent;t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]);
        }, hl.prototype.unionExtentFromData = function (t, e) {
          this.unionExtent(t.getApproximateExtent(e));
        }, hl.prototype.getExtent = function () {
          return this._extent.slice();
        }, hl.prototype.setExtent = function (t, e) {
          var n = this._extent;isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e);
        }, hl.prototype.isBlank = function () {
          return this._isBlank;
        }, hl.prototype.setBlank = function (t) {
          this._isBlank = t;
        }, hl.prototype.getLabel = null, Cn(hl), Pn(hl, { registerWhenExtend: !0 }), ul.createByAxisModel = function (t) {
          var e = t.option,
              n = e.data,
              i = n && d(n, fl);return new ul({ categories: i, needCollect: !i, deduplication: !1 !== e.dedplication });
        };var _v = ul.prototype;_v.getOrdinal = function (t) {
          return cl(this).get(t);
        }, _v.parseAndCollect = function (t) {
          var e,
              n = this._needCollect;if ("string" != typeof t && !n) return t;if (n && !this._deduplication) return e = this.categories.length, this.categories[e] = t, e;var i = cl(this);return null == (e = i.get(t)) && (n ? (e = this.categories.length, this.categories[e] = t, i.set(t, e)) : e = NaN), e;
        };var xv = hl.prototype,
            wv = hl.extend({ type: "ordinal", init: function init(t, e) {
            t && !y(t) || (t = new ul({ categories: t })), this._ordinalMeta = t, this._extent = e || [0, t.categories.length - 1];
          }, parse: function parse(t) {
            return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t);
          }, contain: function contain(t) {
            return t = this.parse(t), xv.contain.call(this, t) && null != this._ordinalMeta.categories[t];
          }, normalize: function normalize(t) {
            return xv.normalize.call(this, this.parse(t));
          }, scale: function scale(t) {
            return Math.round(xv.scale.call(this, t));
          }, getTicks: function getTicks() {
            for (var t = [], e = this._extent, n = e[0]; n <= e[1];) {
              t.push(n), n++;
            }return t;
          }, getLabel: function getLabel(t) {
            if (!this.isBlank()) return this._ordinalMeta.categories[t];
          }, count: function count() {
            return this._extent[1] - this._extent[0] + 1;
          }, unionExtentFromData: function unionExtentFromData(t, e) {
            this.unionExtent(t.getApproximateExtent(e));
          }, getOrdinalMeta: function getOrdinalMeta() {
            return this._ordinalMeta;
          }, niceTicks: R, niceExtent: R });wv.create = function () {
          return new wv();
        };var bv = cr,
            Sv = cr,
            Mv = hl.extend({ type: "interval", _interval: 0, _intervalPrecision: 2, setExtent: function setExtent(t, e) {
            var n = this._extent;isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e));
          }, unionExtent: function unionExtent(t) {
            var e = this._extent;t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), Mv.prototype.setExtent.call(this, e[0], e[1]);
          }, getInterval: function getInterval() {
            return this._interval;
          }, setInterval: function setInterval(t) {
            this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = pl(t);
          }, getTicks: function getTicks() {
            return ml(this._interval, this._extent, this._niceExtent, this._intervalPrecision);
          }, getLabel: function getLabel(t, e) {
            if (null == t) return "";var n = e && e.precision;return null == n ? n = fr(t) || 0 : "auto" === n && (n = this._intervalPrecision), t = Sv(t, n, !0), wr(t);
          }, niceTicks: function niceTicks(t, e, n) {
            t = t || 5;var i = this._extent,
                r = i[1] - i[0];if (isFinite(r)) {
              r < 0 && (r = -r, i.reverse());var a = dl(i, t, e, n);this._intervalPrecision = a.intervalPrecision, this._interval = a.interval, this._niceExtent = a.niceTickExtent;
            }
          }, niceExtent: function niceExtent(t) {
            var e = this._extent;if (e[0] === e[1]) if (0 !== e[0]) {
              var n = e[0];t.fixMax ? e[0] -= n / 2 : (e[1] += n / 2, e[0] -= n / 2);
            } else e[1] = 1;var i = e[1] - e[0];isFinite(i) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);var r = this._interval;t.fixMin || (e[0] = Sv(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = Sv(Math.ceil(e[1] / r) * r));
          } });Mv.create = function () {
          return new Mv();
        };var Tv = "__ec_stack_",
            Iv = "undefined" != typeof Float32Array ? Float32Array : Array,
            kv = { seriesType: "bar", plan: Cp(), reset: function reset(t) {
            if (Ml(t) && Tl(t)) {
              var e = t.getData(),
                  n = t.coordinateSystem,
                  i = n.getBaseAxis(),
                  r = n.getOtherAxis(i),
                  a = e.mapDimension(r.dim),
                  o = e.mapDimension(i.dim),
                  s = r.isHorizontal(),
                  l = s ? 0 : 1,
                  h = Sl(wl([t]), i, t).width;return h > .5 || (h = .5), { progress: function progress(t, e) {
                  for (var i, u = new Iv(2 * t.count), c = [], f = [], d = 0; null != (i = t.next());) {
                    f[l] = e.get(a, i), f[1 - l] = e.get(o, i), c = n.dataToPoint(f, null, c), u[d++] = c[0], u[d++] = c[1];
                  }e.setLayout({ largePoints: u, barWidth: h, valueAxisStart: Il(0, r), valueAxisHorizontal: s });
                } };
            }
          } },
            Cv = Mv.prototype,
            Dv = Math.ceil,
            Av = Math.floor,
            Lv = function Lv(t, e, n, i) {
          for (; n < i;) {
            var r = n + i >>> 1;t[r][1] < e ? n = r + 1 : i = r;
          }return n;
        },
            Pv = Mv.extend({ type: "time", getLabel: function getLabel(t) {
            var e = this._stepLvl,
                n = new Date(t);return Ir(e[0], n, this.getSetting("useUTC"));
          }, niceExtent: function niceExtent(t) {
            var e = this._extent;if (e[0] === e[1] && (e[0] -= 864e5, e[1] += 864e5), e[1] === -1 / 0 && e[0] === 1 / 0) {
              var n = new Date();e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), e[0] = e[1] - 864e5;
            }this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);var i = this._interval;t.fixMin || (e[0] = cr(Av(e[0] / i) * i)), t.fixMax || (e[1] = cr(Dv(e[1] / i) * i));
          }, niceTicks: function niceTicks(t, e, n) {
            t = t || 10;var i = this._extent,
                r = i[1] - i[0],
                a = r / t;null != e && a < e && (a = e), null != n && a > n && (a = n);var o = Ov.length,
                s = Lv(Ov, a, 0, o),
                l = Ov[Math.min(s, o - 1)],
                h = l[1];"year" === l[0] && (h *= xr(r / h / t, !0));var u = this.getSetting("useUTC") ? 0 : 60 * new Date(+i[0] || +i[1]).getTimezoneOffset() * 1e3,
                c = [Math.round(Dv((i[0] - u) / h) * h + u), Math.round(Av((i[1] - u) / h) * h + u)];vl(c, i), this._stepLvl = l, this._interval = h, this._niceExtent = c;
          }, parse: function parse(t) {
            return +mr(t);
          } });f(["contain", "normalize"], function (t) {
          Pv.prototype[t] = function (e) {
            return Cv[t].call(this, this.parse(e));
          };
        });var Ov = [["hh:mm:ss", 1e3], ["hh:mm:ss", 5e3], ["hh:mm:ss", 1e4], ["hh:mm:ss", 15e3], ["hh:mm:ss", 3e4], ["hh:mm\nMM-dd", 6e4], ["hh:mm\nMM-dd", 3e5], ["hh:mm\nMM-dd", 6e5], ["hh:mm\nMM-dd", 9e5], ["hh:mm\nMM-dd", 18e5], ["hh:mm\nMM-dd", 36e5], ["hh:mm\nMM-dd", 72e5], ["hh:mm\nMM-dd", 216e5], ["hh:mm\nMM-dd", 432e5], ["MM-dd\nyyyy", 864e5], ["MM-dd\nyyyy", 1728e5], ["MM-dd\nyyyy", 2592e5], ["MM-dd\nyyyy", 3456e5], ["MM-dd\nyyyy", 432e6], ["MM-dd\nyyyy", 5184e5], ["week", 6048e5], ["MM-dd\nyyyy", 864e6], ["week", 12096e5], ["week", 18144e5], ["month", 26784e5], ["week", 36288e5], ["month", 53568e5], ["week", 6048e6], ["quarter", 8208e6], ["month", 107136e5], ["month", 13392e6], ["half-year", 16416e6], ["month", 214272e5], ["month", 26784e6], ["year", 32832e6]];Pv.create = function (t) {
          return new Pv({ useUTC: t.ecModel.get("useUTC") });
        };var Ev = hl.prototype,
            Nv = Mv.prototype,
            Bv = fr,
            Rv = cr,
            zv = Math.floor,
            Fv = Math.ceil,
            Vv = Math.pow,
            Wv = Math.log,
            Hv = hl.extend({ type: "log", base: 10, $constructor: function $constructor() {
            hl.apply(this, arguments), this._originalScale = new Mv();
          }, getTicks: function getTicks() {
            var t = this._originalScale,
                e = this._extent,
                n = t.getExtent();return d(Nv.getTicks.call(this), function (i) {
              var r = cr(Vv(this.base, i));return r = i === e[0] && t.__fixMin ? kl(r, n[0]) : r, r = i === e[1] && t.__fixMax ? kl(r, n[1]) : r;
            }, this);
          }, getLabel: Nv.getLabel, scale: function scale(t) {
            return t = Ev.scale.call(this, t), Vv(this.base, t);
          }, setExtent: function setExtent(t, e) {
            var n = this.base;t = Wv(t) / Wv(n), e = Wv(e) / Wv(n), Nv.setExtent.call(this, t, e);
          }, getExtent: function getExtent() {
            var t = this.base,
                e = Ev.getExtent.call(this);e[0] = Vv(t, e[0]), e[1] = Vv(t, e[1]);var n = this._originalScale,
                i = n.getExtent();return n.__fixMin && (e[0] = kl(e[0], i[0])), n.__fixMax && (e[1] = kl(e[1], i[1])), e;
          }, unionExtent: function unionExtent(t) {
            this._originalScale.unionExtent(t);var e = this.base;t[0] = Wv(t[0]) / Wv(e), t[1] = Wv(t[1]) / Wv(e), Ev.unionExtent.call(this, t);
          }, unionExtentFromData: function unionExtentFromData(t, e) {
            this.unionExtent(t.getApproximateExtent(e));
          }, niceTicks: function niceTicks(t) {
            t = t || 10;var e = this._extent,
                n = e[1] - e[0];if (!(n === 1 / 0 || n <= 0)) {
              var i = yr(n);for (t / n * i <= .5 && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0;) {
                i *= 10;
              }var r = [cr(Fv(e[0] / i) * i), cr(zv(e[1] / i) * i)];this._interval = i, this._niceExtent = r;
            }
          }, niceExtent: function niceExtent(t) {
            Nv.niceExtent.call(this, t);var e = this._originalScale;e.__fixMin = t.fixMin, e.__fixMax = t.fixMax;
          } });f(["contain", "normalize"], function (t) {
          Hv.prototype[t] = function (e) {
            return e = Wv(e) / Wv(this.base), Ev[t].call(this, e);
          };
        }), Hv.create = function () {
          return new Hv();
        };var Gv = function Gv(t) {
          this._axes = {}, this._dimList = [], this.name = t || "";
        };Gv.prototype = { constructor: Gv, type: "cartesian", getAxis: function getAxis(t) {
            return this._axes[t];
          }, getAxes: function getAxes() {
            return d(this._dimList, Rl, this);
          }, getAxesByScale: function getAxesByScale(t) {
            return t = t.toLowerCase(), g(this.getAxes(), function (e) {
              return e.scale.type === t;
            });
          }, addAxis: function addAxis(t) {
            var e = t.dim;this._axes[e] = t, this._dimList.push(e);
          }, dataToCoord: function dataToCoord(t) {
            return this._dataCoordConvert(t, "dataToCoord");
          }, coordToData: function coordToData(t) {
            return this._dataCoordConvert(t, "coordToData");
          }, _dataCoordConvert: function _dataCoordConvert(t, e) {
            for (var n = this._dimList, i = t instanceof Array ? [] : {}, r = 0; r < n.length; r++) {
              var a = n[r],
                  o = this._axes[a];i[a] = o[e](t[a]);
            }return i;
          } }, zl.prototype = { constructor: zl, type: "cartesian2d", dimensions: ["x", "y"], getBaseAxis: function getBaseAxis() {
            return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x");
          }, containPoint: function containPoint(t) {
            var e = this.getAxis("x"),
                n = this.getAxis("y");return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]));
          }, containData: function containData(t) {
            return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1]);
          }, dataToPoint: function dataToPoint(t, e, n) {
            var i = this.getAxis("x"),
                r = this.getAxis("y");return n = n || [], n[0] = i.toGlobalCoord(i.dataToCoord(t[0])), n[1] = r.toGlobalCoord(r.dataToCoord(t[1])), n;
          }, clampData: function clampData(t, e) {
            var n = this.getAxis("x").scale,
                i = this.getAxis("y").scale,
                r = n.getExtent(),
                a = i.getExtent(),
                o = n.parse(t[0]),
                s = i.parse(t[1]);return e = e || [], e[0] = Math.min(Math.max(Math.min(r[0], r[1]), o), Math.max(r[0], r[1])), e[1] = Math.min(Math.max(Math.min(a[0], a[1]), s), Math.max(a[0], a[1])), e;
          }, pointToData: function pointToData(t, e) {
            var n = this.getAxis("x"),
                i = this.getAxis("y");return e = e || [], e[0] = n.coordToData(n.toLocalCoord(t[0])), e[1] = i.coordToData(i.toLocalCoord(t[1])), e;
          }, getOtherAxis: function getOtherAxis(t) {
            return this.getAxis("x" === t.dim ? "y" : "x");
          } }, h(zl, Gv);var Xv = xn(),
            qv = [0, 1],
            Yv = function Yv(t, e, n) {
          this.dim = t, this.scale = e, this._extent = n || [0, 0], this.inverse = !1, this.onBand = !1;
        };Yv.prototype = { constructor: Yv, contain: function contain(t) {
            var e = this._extent,
                n = Math.min(e[0], e[1]),
                i = Math.max(e[0], e[1]);return t >= n && t <= i;
          }, containData: function containData(t) {
            return this.contain(this.dataToCoord(t));
          }, getExtent: function getExtent() {
            return this._extent.slice();
          }, getPixelPrecision: function getPixelPrecision(t) {
            return dr(t || this.scale.getExtent(), this._extent);
          }, setExtent: function setExtent(t, e) {
            var n = this._extent;n[0] = t, n[1] = e;
          }, dataToCoord: function dataToCoord(t, e) {
            var n = this._extent,
                i = this.scale;return t = i.normalize(t), this.onBand && "ordinal" === i.type && th(n = n.slice(), i.count()), hr(t, qv, n, e);
          }, coordToData: function coordToData(t, e) {
            var n = this._extent,
                i = this.scale;this.onBand && "ordinal" === i.type && th(n = n.slice(), i.count());var r = hr(t, n, qv, e);return this.scale.scale(r);
          }, pointToData: function pointToData(t, e) {}, getTicksCoords: function getTicksCoords(t) {
            var e = (t = t || {}).tickModel || this.getTickModel(),
                n = Vl(this, e),
                i = d(n.ticks, function (t) {
              return { coord: this.dataToCoord(t), tickValue: t };
            }, this),
                r = e.get("alignWithLabel");return eh(this, i, n.tickCategoryInterval, r, t.clamp), i;
          }, getViewLabels: function getViewLabels() {
            return Fl(this).labels;
          }, getLabelModel: function getLabelModel() {
            return this.model.getModel("axisLabel");
          }, getTickModel: function getTickModel() {
            return this.model.getModel("axisTick");
          }, getBandWidth: function getBandWidth() {
            var t = this._extent,
                e = this.scale.getExtent(),
                n = e[1] - e[0] + (this.onBand ? 1 : 0);0 === n && (n = 1);var i = Math.abs(t[1] - t[0]);return Math.abs(i) / n;
          }, isHorizontal: null, getRotate: null, calculateCategoryInterval: function calculateCategoryInterval() {
            return Zl(this);
          } };var Uv = function Uv(t, e, n, i, r) {
          Yv.call(this, t, e, n), this.type = i || "value", this.position = r || "bottom";
        };Uv.prototype = { constructor: Uv, index: 0, getAxesOnZeroOf: null, model: null, isHorizontal: function isHorizontal() {
            var t = this.position;return "top" === t || "bottom" === t;
          }, getGlobalExtent: function getGlobalExtent(t) {
            var e = this.getExtent();return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e.reverse(), e;
          }, getOtherAxis: function getOtherAxis() {
            this.grid.getOtherAxis();
          }, pointToData: function pointToData(t, e) {
            return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e);
          }, toLocalCoord: null, toGlobalCoord: null }, h(Uv, Yv);var jv = { show: !0, zlevel: 0, z: 0, inverse: !1, name: "", nameLocation: "end", nameRotate: null, nameTruncate: { maxWidth: null, ellipsis: "...", placeholder: "." }, nameTextStyle: {}, nameGap: 15, silent: !1, triggerEvent: !1, tooltip: { show: !1 }, axisPointer: {}, axisLine: { show: !0, onZero: !0, onZeroAxisIndex: null, lineStyle: { color: "#333", width: 1, type: "solid" }, symbol: ["none", "none"], symbolSize: [10, 15] }, axisTick: { show: !0, inside: !1, length: 5, lineStyle: { width: 1 } }, axisLabel: { show: !0, inside: !1, rotate: 0, showMinLabel: null, showMaxLabel: null, margin: 8, fontSize: 12 }, splitLine: { show: !0, lineStyle: { color: ["#ccc"], width: 1, type: "solid" } }, splitArea: { show: !1, areaStyle: { color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"] } } },
            Zv = {};Zv.categoryAxis = i({ boundaryGap: !0, deduplication: null, splitLine: { show: !1 }, axisTick: { alignWithLabel: !1, interval: "auto" }, axisLabel: { interval: "auto" } }, jv), Zv.valueAxis = i({ boundaryGap: [0, 0], splitNumber: 5 }, jv), Zv.timeAxis = o({ scale: !0, min: "dataMin", max: "dataMax" }, Zv.valueAxis), Zv.logAxis = o({ scale: !0, logBase: 10 }, Zv.valueAxis);var $v = ["value", "category", "time", "log"],
            Qv = function Qv(t, e, n, a) {
          f($v, function (o) {
            e.extend({ type: t + "Axis." + o, mergeDefaultAndTheme: function mergeDefaultAndTheme(e, r) {
                var a = this.layoutMode,
                    s = a ? Ar(e) : {};i(e, r.getTheme().get(o + "Axis")), i(e, this.getDefaultOption()), e.type = n(t, e), a && Dr(e, s, a);
              }, optionUpdated: function optionUpdated() {
                "category" === this.option.type && (this.__ordinalMeta = ul.createByAxisModel(this));
              }, getCategories: function getCategories(t) {
                var e = this.option;if ("category" === e.type) return t ? e.data : this.__ordinalMeta.categories;
              }, getOrdinalMeta: function getOrdinalMeta() {
                return this.__ordinalMeta;
              }, defaultOption: r([{}, Zv[o + "Axis"], a], !0) });
          }), Fd.registerSubTypeDefaulter(t + "Axis", m(n, t));
        },
            Kv = { getMin: function getMin(t) {
            var e = this.option,
                n = t || null == e.rangeStart ? e.min : e.rangeStart;return this.axis && null != n && "dataMin" !== n && "function" != typeof n && !T(n) && (n = this.axis.scale.parse(n)), n;
          }, getMax: function getMax(t) {
            var e = this.option,
                n = t || null == e.rangeEnd ? e.max : e.rangeEnd;return this.axis && null != n && "dataMax" !== n && "function" != typeof n && !T(n) && (n = this.axis.scale.parse(n)), n;
          }, getNeedCrossZero: function getNeedCrossZero() {
            var t = this.option;return null == t.rangeStart && null == t.rangeEnd && !t.scale;
          }, getCoordSysModel: R, setRange: function setRange(t, e) {
            this.option.rangeStart = t, this.option.rangeEnd = e;
          }, resetRange: function resetRange() {
            this.option.rangeStart = this.option.rangeEnd = null;
          } },
            Jv = Fd.extend({ type: "cartesian2dAxis", axis: null, init: function init() {
            Jv.superApply(this, "init", arguments), this.resetRange();
          }, mergeOption: function mergeOption() {
            Jv.superApply(this, "mergeOption", arguments), this.resetRange();
          }, restoreData: function restoreData() {
            Jv.superApply(this, "restoreData", arguments), this.resetRange();
          }, getCoordSysModel: function getCoordSysModel() {
            return this.ecModel.queryComponents({ mainType: "grid", index: this.option.gridIndex, id: this.option.gridId })[0];
          } });i(Jv.prototype, Kv);var tm = { offset: 0 };Qv("x", Jv, nh, tm), Qv("y", Jv, nh, tm), Fd.extend({ type: "grid", dependencies: ["xAxis", "yAxis"], layoutMode: "box", coordinateSystem: null, defaultOption: { show: !1, zlevel: 0, z: 0, left: "10%", top: 60, right: "10%", bottom: 60, containLabel: !1, backgroundColor: "rgba(0,0,0,0)", borderWidth: 1, borderColor: "#ccc" } });var em = rh.prototype;em.type = "grid", em.axisPointerEnabled = !0, em.getRect = function () {
          return this._rect;
        }, em.update = function (t, e) {
          var n = this._axesMap;this._updateScale(t, this.model), f(n.x, function (t) {
            Al(t.scale, t.model);
          }), f(n.y, function (t) {
            Al(t.scale, t.model);
          });var i = {};f(n.x, function (t) {
            ah(n, "y", t, i);
          }), f(n.y, function (t) {
            ah(n, "x", t, i);
          }), this.resize(this.model, e);
        }, em.resize = function (t, e, n) {
          function i() {
            f(a, function (t) {
              var e = t.isHorizontal(),
                  n = e ? [0, r.width] : [0, r.height],
                  i = t.inverse ? 1 : 0;t.setExtent(n[i], n[1 - i]), sh(t, e ? r.x : r.y);
            });
          }var r = Cr(t.getBoxLayoutParams(), { width: e.getWidth(), height: e.getHeight() });this._rect = r;var a = this._axesList;i(), !n && t.get("containLabel") && (f(a, function (t) {
            if (!t.model.get("axisLabel.inside")) {
              var e = Nl(t);if (e) {
                var n = t.isHorizontal() ? "height" : "width",
                    i = t.model.get("axisLabel.margin");r[n] -= e[n] + i, "top" === t.position ? r.y += e.height + i : "left" === t.position && (r.x += e.width + i);
              }
            }
          }), i());
        }, em.getAxis = function (t, e) {
          var n = this._axesMap[t];if (null != n) {
            if (null == e) for (var i in n) {
              if (n.hasOwnProperty(i)) return n[i];
            }return n[e];
          }
        }, em.getAxes = function () {
          return this._axesList.slice();
        }, em.getCartesian = function (t, e) {
          if (null != t && null != e) {
            var n = "x" + t + "y" + e;return this._coordsMap[n];
          }w(t) && (e = t.yAxisIndex, t = t.xAxisIndex);for (var i = 0, r = this._coordsList; i < r.length; i++) {
            if (r[i].getAxis("x").index === t || r[i].getAxis("y").index === e) return r[i];
          }
        }, em.getCartesians = function () {
          return this._coordsList.slice();
        }, em.convertToPixel = function (t, e, n) {
          var i = this._findConvertTarget(t, e);return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null;
        }, em.convertFromPixel = function (t, e, n) {
          var i = this._findConvertTarget(t, e);return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null;
        }, em._findConvertTarget = function (t, e) {
          var n,
              i,
              r = e.seriesModel,
              a = e.xAxisModel || r && r.getReferringComponents("xAxis")[0],
              o = e.yAxisModel || r && r.getReferringComponents("yAxis")[0],
              s = e.gridModel,
              h = this._coordsList;return r ? l(h, n = r.coordinateSystem) < 0 && (n = null) : a && o ? n = this.getCartesian(a.componentIndex, o.componentIndex) : a ? i = this.getAxis("x", a.componentIndex) : o ? i = this.getAxis("y", o.componentIndex) : s && s.coordinateSystem === this && (n = this._coordsList[0]), { cartesian: n, axis: i };
        }, em.containPoint = function (t) {
          var e = this._coordsList[0];if (e) return e.containPoint(t);
        }, em._initCartesian = function (t, e, n) {
          function i(n) {
            return function (i, s) {
              if (ih(i, t, e)) {
                var l = i.get("position");"x" === n ? "top" !== l && "bottom" !== l && r[l = "bottom"] && (l = "top" === l ? "bottom" : "top") : "left" !== l && "right" !== l && r[l = "left"] && (l = "left" === l ? "right" : "left"), r[l] = !0;var h = new Uv(n, Ll(i), [0, 0], i.get("type"), l),
                    u = "category" === h.type;h.onBand = u && i.get("boundaryGap"), h.inverse = i.get("inverse"), i.axis = h, h.model = i, h.grid = this, h.index = s, this._axesList.push(h), a[n][s] = h, o[n]++;
              }
            };
          }var r = { left: !1, right: !1, top: !1, bottom: !1 },
              a = { x: {}, y: {} },
              o = { x: 0, y: 0 };if (e.eachComponent("xAxis", i("x"), this), e.eachComponent("yAxis", i("y"), this), !o.x || !o.y) return this._axesMap = {}, void (this._axesList = []);this._axesMap = a, f(a.x, function (e, n) {
            f(a.y, function (i, r) {
              var a = "x" + n + "y" + r,
                  o = new zl(a);o.grid = this, o.model = t, this._coordsMap[a] = o, this._coordsList.push(o), o.addAxis(e), o.addAxis(i);
            }, this);
          }, this);
        }, em._updateScale = function (t, e) {
          function n(t, e, n) {
            f(t.mapDimension(e.dim, !0), function (n) {
              e.scale.unionExtentFromData(t, Ts(t, n));
            });
          }f(this._axesList, function (t) {
            t.scale.setExtent(1 / 0, -1 / 0);
          }), t.eachSeries(function (i) {
            if (hh(i)) {
              var r = lh(i),
                  a = r[0],
                  o = r[1];if (!ih(a, e, t) || !ih(o, e, t)) return;var s = this.getCartesian(a.componentIndex, o.componentIndex),
                  l = i.getData(),
                  h = s.getAxis("x"),
                  u = s.getAxis("y");"list" === l.type && (n(l, h), n(l, u));
            }
          }, this);
        }, em.getTooltipAxes = function (t) {
          var e = [],
              n = [];return f(this.getCartesians(), function (i) {
            var r = null != t && "auto" !== t ? i.getAxis(t) : i.getBaseAxis(),
                a = i.getOtherAxis(r);l(e, r) < 0 && e.push(r), l(n, a) < 0 && n.push(a);
          }), { baseAxes: e, otherAxes: n };
        };var nm = ["xAxis", "yAxis"];rh.create = function (t, e) {
          var n = [];return t.eachComponent("grid", function (i, r) {
            var a = new rh(i, t, e);a.name = "grid_" + r, a.resize(i, e, !0), i.coordinateSystem = a, n.push(a);
          }), t.eachSeries(function (t) {
            if (hh(t)) {
              var e = lh(t),
                  n = e[0],
                  i = e[1],
                  r = n.getCoordSysModel().coordinateSystem;t.coordinateSystem = r.getCartesian(n.componentIndex, i.componentIndex);
            }
          }), n;
        }, rh.dimensions = rh.prototype.dimensions = zl.prototype.dimensions, na.register("cartesian2d", rh);var im = Math.PI,
            rm = function rm(t, e) {
          this.opt = e, this.axisModel = t, o(e, { labelOffset: 0, nameDirection: 1, tickDirection: 1, labelDirection: 1, silent: !0 }), this.group = new Hu();var n = new Hu({ position: e.position.slice(), rotation: e.rotation });n.updateTransform(), this._transform = n.transform, this._dumbGroup = n;
        };rm.prototype = { constructor: rm, hasBuilder: function hasBuilder(t) {
            return !!am[t];
          }, add: function add(t) {
            am[t].call(this);
          }, getGroup: function getGroup() {
            return this.group;
          } };var am = { axisLine: function axisLine() {
            var t = this.opt,
                e = this.axisModel;if (e.get("axisLine.show")) {
              var n = this.axisModel.axis.getExtent(),
                  i = this._transform,
                  r = [n[0], 0],
                  o = [n[1], 0];i && (U(r, r, i), U(o, o, i));var s = a({ lineCap: "round" }, e.getModel("axisLine.lineStyle").getLineStyle());this.group.add(new id(Ii({ anid: "line", shape: { x1: r[0], y1: r[1], x2: o[0], y2: o[1] }, style: s, strokeContainThreshold: t.strokeContainThreshold || 5, silent: !0, z2: 1 })));var l = e.get("axisLine.symbol"),
                  h = e.get("axisLine.symbolSize"),
                  u = e.get("axisLine.symbolOffset") || 0;if ("number" == typeof u && (u = [u, u]), null != l) {
                "string" == typeof l && (l = [l, l]), "string" != typeof h && "number" != typeof h || (h = [h, h]);var c = h[0],
                    d = h[1];f([{ rotate: t.rotation + Math.PI / 2, offset: u[0], r: 0 }, { rotate: t.rotation - Math.PI / 2, offset: u[1], r: Math.sqrt((r[0] - o[0]) * (r[0] - o[0]) + (r[1] - o[1]) * (r[1] - o[1])) }], function (e, n) {
                  if ("none" !== l[n] && null != l[n]) {
                    var i = As(l[n], -c / 2, -d / 2, c, d, s.stroke, !0),
                        a = e.r + e.offset,
                        o = [r[0] + a * Math.cos(t.rotation), r[1] - a * Math.sin(t.rotation)];i.attr({ rotation: e.rotate, position: o, silent: !0 }), this.group.add(i);
                  }
                }, this);
              }
            }
          }, axisTickLabel: function axisTickLabel() {
            var t = this.axisModel,
                e = this.opt,
                n = mh(this, t, e);dh(t, yh(this, t, e), n);
          }, axisName: function axisName() {
            var t = this.opt,
                e = this.axisModel,
                n = I(t.axisName, e.get("name"));if (n) {
              var i,
                  r = e.get("nameLocation"),
                  o = t.nameDirection,
                  s = e.getModel("nameTextStyle"),
                  l = e.get("nameGap") || 0,
                  h = this.axisModel.axis.getExtent(),
                  u = h[0] > h[1] ? -1 : 1,
                  c = ["start" === r ? h[0] - u * l : "end" === r ? h[1] + u * l : (h[0] + h[1]) / 2, vh(r) ? t.labelOffset + o * l : 0],
                  f = e.get("nameRotate");null != f && (f = f * im / 180);var d;vh(r) ? i = om(t.rotation, null != f ? f : t.rotation, o) : (i = ch(t, r, f || 0, h), null != (d = t.axisNameAvailableWidth) && (d = Math.abs(d / Math.sin(i.rotation)), !isFinite(d) && (d = null)));var p = s.getFont(),
                  g = e.get("nameTruncate", !0) || {},
                  v = g.ellipsis,
                  m = I(t.nameTruncateMaxWidth, g.maxWidth, d),
                  y = null != v && null != m ? Od(n, m, p, v, { minChar: 2, placeholder: g.placeholder }) : n,
                  _ = e.get("tooltip", !0),
                  x = e.mainType,
                  w = { componentType: x, name: n, $vars: ["name"] };w[x + "Index"] = e.componentIndex;var b = new Yf({ anid: "name", __fullText: n, __truncatedText: y, position: c, rotation: i.rotation, silent: fh(e), z2: 1, tooltip: _ && _.show ? a({ content: n, formatter: function formatter() {
                    return n;
                  }, formatterParams: w }, _) : null });qi(b.style, s, { text: y, textFont: p, textFill: s.getTextColor() || e.get("axisLine.lineStyle.color"), textAlign: i.textAlign, textVerticalAlign: i.textVerticalAlign }), e.get("triggerEvent") && (b.eventData = uh(e), b.eventData.targetType = "axisName", b.eventData.name = n), this._dumbGroup.add(b), b.updateTransform(), this.group.add(b), b.decomposeTransform();
            }
          } },
            om = rm.innerTextLayout = function (t, e, n) {
          var i,
              r,
              a = gr(e - t);return vr(a) ? (r = n > 0 ? "top" : "bottom", i = "center") : vr(a - im) ? (r = n > 0 ? "bottom" : "top", i = "center") : (r = "middle", i = a > 0 && a < im ? n > 0 ? "right" : "left" : n > 0 ? "left" : "right"), { rotation: a, textAlign: i, textVerticalAlign: r };
        },
            sm = Jo({ type: "axis", _axisPointer: null, axisPointerClass: null, render: function render(t, e, n, i) {
            this.axisPointerClass && _h(t), sm.superApply(this, "render", arguments), Mh(this, t, 0, n, 0, !0);
          }, updateAxisPointer: function updateAxisPointer(t, e, n, i, r) {
            Mh(this, t, 0, n, 0, !1);
          }, remove: function remove(t, e) {
            var n = this._axisPointer;n && n.remove(e), sm.superApply(this, "remove", arguments);
          }, dispose: function dispose(t, e) {
            Th(this, e), sm.superApply(this, "dispose", arguments);
          } }),
            lm = [];sm.registerAxisPointerClass = function (t, e) {
          lm[t] = e;
        }, sm.getAxisPointerClass = function (t) {
          return t && lm[t];
        };var hm = ["axisLine", "axisTickLabel", "axisName"],
            um = ["splitArea", "splitLine"],
            cm = sm.extend({ type: "cartesianAxis", axisPointerClass: "CartesianAxisPointer", render: function render(t, e, n, i) {
            this.group.removeAll();var r = this._axisGroup;if (this._axisGroup = new Hu(), this.group.add(this._axisGroup), t.get("show")) {
              var a = t.getCoordSysModel(),
                  o = Ih(a, t),
                  s = new rm(t, o);f(hm, s.add, s), this._axisGroup.add(s.getGroup()), f(um, function (e) {
                t.get(e + ".show") && this["_" + e](t, a);
              }, this), ir(r, this._axisGroup, t), cm.superCall(this, "render", t, e, n, i);
            }
          }, remove: function remove() {
            this._splitAreaColors = null;
          }, _splitLine: function _splitLine(t, e) {
            var n = t.axis;if (!n.scale.isBlank()) {
              var i = t.getModel("splitLine"),
                  r = i.getModel("lineStyle"),
                  a = r.get("color");a = y(a) ? a : [a];for (var s = e.coordinateSystem.getRect(), l = n.isHorizontal(), h = 0, u = n.getTicksCoords({ tickModel: i }), c = [], f = [], d = r.getLineStyle(), p = 0; p < u.length; p++) {
                var g = n.toGlobalCoord(u[p].coord);l ? (c[0] = g, c[1] = s.y, f[0] = g, f[1] = s.y + s.height) : (c[0] = s.x, c[1] = g, f[0] = s.x + s.width, f[1] = g);var v = h++ % a.length,
                    m = u[p].tickValue;this._axisGroup.add(new id(Ii({ anid: null != m ? "line_" + u[p].tickValue : null, shape: { x1: c[0], y1: c[1], x2: f[0], y2: f[1] }, style: o({ stroke: a[v] }, d), silent: !0 })));
              }
            }
          }, _splitArea: function _splitArea(t, e) {
            var n = t.axis;if (!n.scale.isBlank()) {
              var i = t.getModel("splitArea"),
                  r = i.getModel("areaStyle"),
                  a = r.get("color"),
                  s = e.coordinateSystem.getRect(),
                  l = n.getTicksCoords({ tickModel: i, clamp: !0 });if (l.length) {
                var h = a.length,
                    u = this._splitAreaColors,
                    c = B(),
                    f = 0;if (u) for (v = 0; v < l.length; v++) {
                  var d = u.get(l[v].tickValue);if (null != d) {
                    f = (d + (h - 1) * v) % h;break;
                  }
                }var p = n.toGlobalCoord(l[0].coord),
                    g = r.getAreaStyle();a = y(a) ? a : [a];for (var v = 1; v < l.length; v++) {
                  var m,
                      _,
                      x,
                      w,
                      b = n.toGlobalCoord(l[v].coord);n.isHorizontal() ? (m = p, _ = s.y, x = b - m, w = s.height, p = m + x) : (m = s.x, _ = p, x = s.width, p = _ + (w = b - _));var S = l[v - 1].tickValue;null != S && c.set(S, f), this._axisGroup.add(new nd({ anid: null != S ? "area_" + S : null, shape: { x: m, y: _, width: x, height: w }, style: o({ fill: a[f] }, g), silent: !0 })), f = (f + 1) % h;
                }this._splitAreaColors = c;
              }
            }
          } });cm.extend({ type: "xAxis" }), cm.extend({ type: "yAxis" }), Jo({ type: "grid", render: function render(t, e) {
            this.group.removeAll(), t.get("show") && this.group.add(new nd({ shape: t.coordinateSystem.getRect(), style: o({ fill: t.get("backgroundColor") }, t.getItemStyle()), silent: !0, z2: -1 }));
          } }), Yo(function (t) {
          t.xAxis && t.yAxis && !t.grid && (t.grid = {});
        }), $o(function (t, e, n) {
          return { seriesType: t, performRawSeries: !0, reset: function reset(t, i, r) {
              var a = t.getData(),
                  o = t.get("symbol") || e,
                  s = t.get("symbolSize"),
                  l = t.get("symbolKeepAspect");if (a.setVisual({ legendSymbol: n || o, symbol: o, symbolSize: s, symbolKeepAspect: l }), !i.isSeriesFiltered(t)) {
                var h = "function" == typeof s;return { dataEach: a.hasItemOption || h ? function (e, n) {
                    if ("function" == typeof s) {
                      var i = t.getRawValue(n),
                          r = t.getDataParams(n);e.setItemVisual(n, "symbolSize", s(i, r));
                    }if (e.hasItemOption) {
                      var a = e.getItemModel(n),
                          o = a.getShallow("symbol", !0),
                          l = a.getShallow("symbolSize", !0),
                          h = a.getShallow("symbolKeepAspect", !0);null != o && e.setItemVisual(n, "symbol", o), null != l && e.setItemVisual(n, "symbolSize", l), null != h && e.setItemVisual(n, "symbolKeepAspect", h);
                    }
                  } : null };
              }
            } };
        }("line", "circle", "line")), Zo(function (t) {
          return { seriesType: t, plan: Cp(), reset: function reset(t) {
              var e = t.getData(),
                  n = t.coordinateSystem,
                  i = t.pipelineContext.large;if (n) {
                var r = d(n.dimensions, function (t) {
                  return e.mapDimension(t);
                }).slice(0, 2),
                    a = r.length,
                    o = e.getCalculationInfo("stackResultDimension");return Ms(e, r[0]) && (r[0] = o), Ms(e, r[1]) && (r[1] = o), a && { progress: function progress(t, e) {
                    for (var o = t.end - t.start, s = i && new Float32Array(o * a), l = t.start, h = 0, u = [], c = []; l < t.end; l++) {
                      var f;if (1 === a) d = e.get(r[0], l), f = !isNaN(d) && n.dataToPoint(d, null, c);else {
                        var d = u[0] = e.get(r[0], l),
                            p = u[1] = e.get(r[1], l);f = !isNaN(d) && !isNaN(p) && n.dataToPoint(u, null, c);
                      }i ? (s[h++] = f ? f[0] : NaN, s[h++] = f ? f[1] : NaN) : e.setItemLayout(l, f && f.slice() || [NaN, NaN]);
                    }i && e.setLayout("symbolPoints", s);
                  } };
              }
            } };
        }("line")), Uo(dg.PROCESSOR.STATISTIC, function (t) {
          return { seriesType: t, modifyOutputEnd: !0, reset: function reset(t, e, n) {
              var i = t.getData(),
                  r = t.get("sampling"),
                  a = t.coordinateSystem;if ("cartesian2d" === a.type && r) {
                var o = a.getBaseAxis(),
                    s = a.getOtherAxis(o),
                    l = o.getExtent(),
                    h = l[1] - l[0],
                    u = Math.round(i.count() / h);if (u > 1) {
                  var c;"string" == typeof r ? c = mv[r] : "function" == typeof r && (c = r), c && t.setData(i.downSample(i.mapDimension(s.dim), 1 / u, c, yv));
                }
              }
            } };
        }("line")), Tp.extend({ type: "series.__base_bar__", getInitialData: function getInitialData(t, e) {
            return Is(this.getSource(), this);
          }, getMarkerPosition: function getMarkerPosition(t) {
            var e = this.coordinateSystem;if (e) {
              var n = e.dataToPoint(e.clampData(t)),
                  i = this.getData(),
                  r = i.getLayout("offset"),
                  a = i.getLayout("size");return n[e.getBaseAxis().isHorizontal() ? 0 : 1] += r + a / 2, n;
            }return [NaN, NaN];
          }, defaultOption: { zlevel: 0, z: 2, coordinateSystem: "cartesian2d", legendHoverLink: !0, barMinHeight: 0, barMinAngle: 0, large: !1, largeThreshold: 400, progressive: 3e3, progressiveChunkMode: "mod", itemStyle: {}, emphasis: {} } }).extend({ type: "series.bar", dependencies: ["grid", "polar"], brushSelector: "rect", getProgressive: function getProgressive() {
            return !!this.get("large") && this.get("progressive");
          }, getProgressiveThreshold: function getProgressiveThreshold() {
            var t = this.get("progressiveThreshold"),
                e = this.get("largeThreshold");return e > t && (t = e), t;
          } });var fm = zc([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["stroke", "barBorderColor"], ["lineWidth", "barBorderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),
            dm = { getBarItemStyle: function getBarItemStyle(t) {
            var e = fm(this, t);if (this.getBorderLineDash) {
              var n = this.getBorderLineDash();n && (e.lineDash = n);
            }return e;
          } },
            pm = ["itemStyle", "barBorderWidth"];a(rr.prototype, dm), es({ type: "bar", render: function render(t, e, n) {
            this._updateDrawMode(t);var i = t.get("coordinateSystem");return "cartesian2d" !== i && "polar" !== i || (this._isLargeDraw ? this._renderLarge(t, e, n) : this._renderNormal(t, e, n)), this.group;
          }, incrementalPrepareRender: function incrementalPrepareRender(t, e, n) {
            this._clear(), this._updateDrawMode(t);
          }, incrementalRender: function incrementalRender(t, e, n, i) {
            this._incrementalRenderLarge(t, e);
          }, _updateDrawMode: function _updateDrawMode(t) {
            var e = t.pipelineContext.large;(null == this._isLargeDraw || e ^ this._isLargeDraw) && (this._isLargeDraw = e, this._clear());
          }, _renderNormal: function _renderNormal(t, e, n) {
            var i,
                r = this.group,
                a = t.getData(),
                o = this._data,
                s = t.coordinateSystem,
                l = s.getBaseAxis();"cartesian2d" === s.type ? i = l.isHorizontal() : "polar" === s.type && (i = "angle" === l.dim);var h = t.isAnimationEnabled() ? t : null;a.diff(o).add(function (e) {
              if (a.hasValue(e)) {
                var n = a.getItemModel(e),
                    o = vm[s.type](a, e, n),
                    l = gm[s.type](a, e, n, o, i, h);a.setItemGraphicEl(e, l), r.add(l), Lh(l, a, e, n, o, t, i, "polar" === s.type);
              }
            }).update(function (e, n) {
              var l = o.getItemGraphicEl(n);if (a.hasValue(e)) {
                var u = a.getItemModel(e),
                    c = vm[s.type](a, e, u);l ? tr(l, { shape: c }, h, e) : l = gm[s.type](a, e, u, c, i, h, !0), a.setItemGraphicEl(e, l), r.add(l), Lh(l, a, e, u, c, t, i, "polar" === s.type);
              } else r.remove(l);
            }).remove(function (t) {
              var e = o.getItemGraphicEl(t);"cartesian2d" === s.type ? e && Dh(t, h, e) : e && Ah(t, h, e);
            }).execute(), this._data = a;
          }, _renderLarge: function _renderLarge(t, e, n) {
            this._clear(), Oh(t, this.group);
          }, _incrementalRenderLarge: function _incrementalRenderLarge(t, e) {
            Oh(e, this.group, !0);
          }, dispose: R, remove: function remove(t) {
            this._clear(t);
          }, _clear: function _clear(t) {
            var e = this.group,
                n = this._data;t && t.get("animation") && n && !this._isLargeDraw ? n.eachItemGraphicEl(function (e) {
              "sector" === e.type ? Ah(e.dataIndex, t, e) : Dh(e.dataIndex, t, e);
            }) : e.removeAll(), this._data = null;
          } });var gm = { cartesian2d: function cartesian2d(t, e, n, i, r, o, s) {
            var l = new nd({ shape: a({}, i) });if (o) {
              var h = l.shape,
                  u = r ? "height" : "width",
                  c = {};h[u] = 0, c[u] = i[u], yd[s ? "updateProps" : "initProps"](l, { shape: c }, o, e);
            }return l;
          }, polar: function polar(t, e, n, i, r, a, s) {
            var l = i.startAngle < i.endAngle,
                h = new $f({ shape: o({ clockwise: l }, i) });if (a) {
              var u = h.shape,
                  c = r ? "r" : "endAngle",
                  f = {};u[c] = r ? 0 : i.startAngle, f[c] = i[c], yd[s ? "updateProps" : "initProps"](h, { shape: f }, a, e);
            }return h;
          } },
            vm = { cartesian2d: function cartesian2d(t, e, n) {
            var i = t.getItemLayout(e),
                r = Ph(n, i),
                a = i.width > 0 ? 1 : -1,
                o = i.height > 0 ? 1 : -1;return { x: i.x + a * r / 2, y: i.y + o * r / 2, width: i.width - a * r, height: i.height - o * r };
          }, polar: function polar(t, e, n) {
            var i = t.getItemLayout(e);return { cx: i.cx, cy: i.cy, r0: i.r0, r: i.r, startAngle: i.startAngle, endAngle: i.endAngle };
          } },
            mm = ci.extend({ type: "largeBar", shape: { points: [] }, buildPath: function buildPath(t, e) {
            for (var n = e.points, i = this.__startPoint, r = this.__valueIdx, a = 0; a < n.length; a += 2) {
              i[this.__valueIdx] = n[a + r], t.moveTo(i[0], i[1]), t.lineTo(n[a], n[a + 1]);
            }
          } });Zo(m(function (t, e) {
          var n = xl(t, e),
              i = wl(n),
              r = {};f(n, function (t) {
            var e = t.getData(),
                n = t.coordinateSystem,
                a = n.getBaseAxis(),
                o = yl(t),
                s = i[_l(a)][o],
                l = s.offset,
                h = s.width,
                u = n.getOtherAxis(a),
                c = t.get("barMinHeight") || 0;r[o] = r[o] || [], e.setLayout({ offset: l, size: h });for (var f = e.mapDimension(u.dim), d = e.mapDimension(a.dim), p = Ms(e, f), g = u.isHorizontal(), v = Il(0, u), m = 0, y = e.count(); m < y; m++) {
              var _ = e.get(f, m),
                  x = e.get(d, m);if (!isNaN(_)) {
                var w = _ >= 0 ? "p" : "n",
                    b = v;p && (r[o][x] || (r[o][x] = { p: v, n: v }), b = r[o][x][w]);var S, M, T, I;if (g) S = b, M = (k = n.dataToPoint([_, x]))[1] + l, T = k[0] - v, I = h, Math.abs(T) < c && (T = (T < 0 ? -1 : 1) * c), p && (r[o][x][w] += T);else {
                  var k = n.dataToPoint([x, _]);S = k[0] + l, M = b, T = h, I = k[1] - v, Math.abs(I) < c && (I = (I <= 0 ? -1 : 1) * c), p && (r[o][x][w] += I);
                }e.setItemLayout(m, { x: S, y: M, width: T, height: I });
              }
            }
          }, this);
        }, "bar")), Zo(kv), $o({ seriesType: "bar", reset: function reset(t) {
            t.getData().setVisual("legendSymbol", "roundRect");
          } });var ym = function ym(t, e, n) {
          e = y(e) && { coordDimensions: e } || a({}, e);var i = t.getSource(),
              r = Yg(i, e),
              o = new Gg(r, t);return o.initData(i, n), o;
        },
            _m = { updateSelectedMap: function updateSelectedMap(t) {
            this._targetList = y(t) ? t.slice() : [], this._selectTargetMap = p(t || [], function (t, e) {
              return t.set(e.name, e), t;
            }, B());
          }, select: function select(t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);"single" === this.get("selectedMode") && this._selectTargetMap.each(function (t) {
              t.selected = !1;
            }), n && (n.selected = !0);
          }, unSelect: function unSelect(t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);n && (n.selected = !1);
          }, toggleSelected: function toggleSelected(t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);if (null != n) return this[n.selected ? "unSelect" : "select"](t, e), n.selected;
          }, isSelected: function isSelected(t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);return n && n.selected;
          } },
            xm = ts({ type: "series.pie", init: function init(t) {
            xm.superApply(this, "init", arguments), this.legendDataProvider = function () {
              return this.getRawData();
            }, this.updateSelectedMap(this._createSelectableList()), this._defaultLabelLine(t);
          }, mergeOption: function mergeOption(t) {
            xm.superCall(this, "mergeOption", t), this.updateSelectedMap(this._createSelectableList());
          }, getInitialData: function getInitialData(t, e) {
            return ym(this, ["value"]);
          }, _createSelectableList: function _createSelectableList() {
            for (var t = this.getRawData(), e = t.mapDimension("value"), n = [], i = 0, r = t.count(); i < r; i++) {
              n.push({ name: t.getName(i), value: t.get(e, i), selected: Da(t, i, "selected") });
            }return n;
          }, getDataParams: function getDataParams(t) {
            var e = this.getData(),
                n = xm.superCall(this, "getDataParams", t),
                i = [];return e.each(e.mapDimension("value"), function (t) {
              i.push(t);
            }), n.percent = pr(i, t, e.hostModel.get("percentPrecision")), n.$vars.push("percent"), n;
          }, _defaultLabelLine: function _defaultLabelLine(t) {
            fn(t, "labelLine", ["show"]);var e = t.labelLine,
                n = t.emphasis.labelLine;e.show = e.show && t.label.show, n.show = n.show && t.emphasis.label.show;
          }, defaultOption: { zlevel: 0, z: 2, legendHoverLink: !0, hoverAnimation: !0, center: ["50%", "50%"], radius: [0, "75%"], clockwise: !0, startAngle: 90, minAngle: 0, selectedOffset: 10, hoverOffset: 10, avoidLabelOverlap: !0, percentPrecision: 2, stillShowZeroSum: !0, label: { rotate: !1, show: !0, position: "outer" }, labelLine: { show: !0, length: 15, length2: 15, smooth: !1, lineStyle: { width: 1, type: "solid" } }, itemStyle: { borderWidth: 1 }, animationType: "expansion", animationEasing: "cubicOut" } });u(xm, _m);var wm = Rh.prototype;wm.updateData = function (t, e, n) {
          function i() {
            s.stopAnimation(!0), s.animateTo({ shape: { r: u.r + l.get("hoverOffset") } }, 300, "elasticOut");
          }function r() {
            s.stopAnimation(!0), s.animateTo({ shape: { r: u.r } }, 300, "elasticOut");
          }var s = this.childAt(0),
              l = t.hostModel,
              h = t.getItemModel(e),
              u = t.getItemLayout(e),
              c = a({}, u);c.label = null, n ? (s.setShape(c), "scale" === l.getShallow("animationType") ? (s.shape.r = u.r0, er(s, { shape: { r: u.r } }, l, e)) : (s.shape.endAngle = u.startAngle, tr(s, { shape: { endAngle: u.endAngle } }, l, e))) : tr(s, { shape: c }, l, e);var f = t.getItemVisual(e, "color");s.useStyle(o({ lineJoin: "bevel", fill: f }, h.getModel("itemStyle").getItemStyle())), s.hoverStyle = h.getModel("emphasis.itemStyle").getItemStyle();var d = h.getShallow("cursor");d && s.attr("cursor", d), Bh(this, t.getItemLayout(e), l.isSelected(null, e), l.get("selectedOffset"), l.get("animation")), s.off("mouseover").off("mouseout").off("emphasis").off("normal"), h.get("hoverAnimation") && l.isAnimationEnabled() && s.on("mouseover", i).on("mouseout", r).on("emphasis", i).on("normal", r), this._updateLabel(t, e), Hi(this);
        }, wm._updateLabel = function (t, e) {
          var n = this.childAt(1),
              i = this.childAt(2),
              r = t.hostModel,
              a = t.getItemModel(e),
              o = t.getItemLayout(e).label,
              s = t.getItemVisual(e, "color");tr(n, { shape: { points: o.linePoints || [[o.x, o.y], [o.x, o.y], [o.x, o.y]] } }, r, e), tr(i, { style: { x: o.x, y: o.y } }, r, e), i.attr({ rotation: o.rotation, origin: [o.x, o.y], z2: 10 });var l = a.getModel("label"),
              h = a.getModel("emphasis.label"),
              u = a.getModel("labelLine"),
              c = a.getModel("emphasis.labelLine"),
              s = t.getItemVisual(e, "color");Xi(i.style, i.hoverStyle = {}, l, h, { labelFetcher: t.hostModel, labelDataIndex: e, defaultText: t.getName(e), autoColor: s, useInsideStyle: !!o.inside }, { textAlign: o.textAlign, textVerticalAlign: o.verticalAlign, opacity: t.getItemVisual(e, "opacity") }), i.ignore = i.normalIgnore = !l.get("show"), i.hoverIgnore = !h.get("show"), n.ignore = n.normalIgnore = !u.get("show"), n.hoverIgnore = !c.get("show"), n.setStyle({ stroke: s, opacity: t.getItemVisual(e, "opacity") }), n.setStyle(u.getModel("lineStyle").getLineStyle()), n.hoverStyle = c.getModel("lineStyle").getLineStyle();var f = u.get("smooth");f && !0 === f && (f = .4), n.setShape({ smooth: f });
        }, h(Rh, Hu);Ha.extend({ type: "pie", init: function init() {
            var t = new Hu();this._sectorGroup = t;
          }, render: function render(t, e, n, i) {
            if (!i || i.from !== this.uid) {
              var r = t.getData(),
                  a = this._data,
                  o = this.group,
                  s = e.get("animation"),
                  l = !a,
                  h = t.get("animationType"),
                  u = m(Nh, this.uid, t, s, n),
                  c = t.get("selectedMode");if (r.diff(a).add(function (t) {
                var e = new Rh(r, t);l && "scale" !== h && e.eachChild(function (t) {
                  t.stopAnimation(!0);
                }), c && e.on("click", u), r.setItemGraphicEl(t, e), o.add(e);
              }).update(function (t, e) {
                var n = a.getItemGraphicEl(e);n.updateData(r, t), n.off("click"), c && n.on("click", u), o.add(n), r.setItemGraphicEl(t, n);
              }).remove(function (t) {
                var e = a.getItemGraphicEl(t);o.remove(e);
              }).execute(), s && l && r.count() > 0 && "scale" !== h) {
                var f = r.getItemLayout(0),
                    d = Math.max(n.getWidth(), n.getHeight()) / 2,
                    p = v(o.removeClipPath, o);o.setClipPath(this._createClipPath(f.cx, f.cy, d, f.startAngle, f.clockwise, p, t));
              } else o.removeClipPath();this._data = r;
            }
          }, dispose: function dispose() {}, _createClipPath: function _createClipPath(t, e, n, i, r, a, o) {
            var s = new $f({ shape: { cx: t, cy: e, r0: 0, r: n, startAngle: i, endAngle: i, clockwise: r } });return er(s, { shape: { endAngle: i + (r ? 1 : -1) * Math.PI * 2 } }, o, a), s;
          }, containPoint: function containPoint(t, e) {
            var n = e.getData().getItemLayout(0);if (n) {
              var i = t[0] - n.cx,
                  r = t[1] - n.cy,
                  a = Math.sqrt(i * i + r * r);return a <= n.r && a >= n.r0;
            }
          } });var bm = function bm(t, e, n, i) {
          var r,
              a,
              o = t.getData(),
              s = [],
              l = !1;o.each(function (n) {
            var i,
                h,
                u,
                c,
                f = o.getItemLayout(n),
                d = o.getItemModel(n),
                p = d.getModel("label"),
                g = p.get("position") || d.get("emphasis.label.position"),
                v = d.getModel("labelLine"),
                m = v.get("length"),
                y = v.get("length2"),
                _ = (f.startAngle + f.endAngle) / 2,
                x = Math.cos(_),
                w = Math.sin(_);r = f.cx, a = f.cy;var b = "inside" === g || "inner" === g;if ("center" === g) i = f.cx, h = f.cy, c = "center";else {
              var S = (b ? (f.r + f.r0) / 2 * x : f.r * x) + r,
                  M = (b ? (f.r + f.r0) / 2 * w : f.r * w) + a;if (i = S + 3 * x, h = M + 3 * w, !b) {
                var T = S + x * (m + e - f.r),
                    I = M + w * (m + e - f.r),
                    k = T + (x < 0 ? -1 : 1) * y,
                    C = I;i = k + (x < 0 ? -5 : 5), h = C, u = [[S, M], [T, I], [k, C]];
              }c = b ? "center" : x > 0 ? "left" : "right";
            }var D = p.getFont(),
                A = p.get("rotate") ? x < 0 ? -_ + Math.PI : -_ : 0,
                L = fe(t.getFormattedLabel(n, "normal") || o.getName(n), D, c, "top");l = !!A, f.label = { x: i, y: h, position: g, height: L.height, len: m, len2: y, linePoints: u, textAlign: c, verticalAlign: "middle", rotation: A, inside: b }, b || s.push(f.label);
          }), !l && t.get("avoidLabelOverlap") && Fh(s, r, a, e, n, i);
        },
            Sm = 2 * Math.PI,
            Mm = Math.PI / 180;!function (t, e) {
          f(e, function (e) {
            e.update = "updateView", jo(e, function (n, i) {
              var r = {};return i.eachComponent({ mainType: "series", subType: t, query: n }, function (t) {
                t[e.method] && t[e.method](n.name, n.dataIndex);var i = t.getData();i.each(function (e) {
                  var n = i.getName(e);r[n] = t.isSelected(n) || !1;
                });
              }), { name: n.name, selected: r };
            });
          });
        }("pie", [{ type: "pieToggleSelect", event: "pieselectchanged", method: "toggleSelected" }, { type: "pieSelect", event: "pieselected", method: "select" }, { type: "pieUnSelect", event: "pieunselected", method: "unSelect" }]), $o(function (t) {
          return { getTargetSeries: function getTargetSeries(e) {
              var n = {},
                  i = B();return e.eachSeriesByType(t, function (t) {
                t.__paletteScope = n, i.set(t.uid, t);
              }), i;
            }, reset: function reset(t, e) {
              var n = t.getRawData(),
                  i = {},
                  r = t.getData();r.each(function (t) {
                var e = r.getRawIndex(t);i[e] = t;
              }), n.each(function (e) {
                var a = i[e],
                    o = null != a && r.getItemVisual(a, "color", !0);if (o) n.setItemVisual(e, "color", o);else {
                  var s = n.getItemModel(e).get("itemStyle.color") || t.getColorFromPalette(n.getName(e) || e + "", t.__paletteScope, n.count());n.setItemVisual(e, "color", s), null != a && r.setItemVisual(a, "color", s);
                }
              });
            } };
        }("pie")), Zo(m(function (t, e, n, i) {
          e.eachSeriesByType(t, function (t) {
            var e = t.getData(),
                i = e.mapDimension("value"),
                r = t.get("center"),
                a = t.get("radius");y(a) || (a = [0, a]), y(r) || (r = [r, r]);var o = n.getWidth(),
                s = n.getHeight(),
                l = Math.min(o, s),
                h = ur(r[0], o),
                u = ur(r[1], s),
                c = ur(a[0], l / 2),
                f = ur(a[1], l / 2),
                d = -t.get("startAngle") * Mm,
                p = t.get("minAngle") * Mm,
                g = 0;e.each(i, function (t) {
              !isNaN(t) && g++;
            });var v = e.getSum(i),
                m = Math.PI / (v || g) * 2,
                _ = t.get("clockwise"),
                x = t.get("roseType"),
                w = t.get("stillShowZeroSum"),
                b = e.getDataExtent(i);b[0] = 0;var S = Sm,
                M = 0,
                T = d,
                I = _ ? 1 : -1;if (e.each(i, function (t, n) {
              var i;if (isNaN(t)) e.setItemLayout(n, { angle: NaN, startAngle: NaN, endAngle: NaN, clockwise: _, cx: h, cy: u, r0: c, r: x ? NaN : f });else {
                (i = "area" !== x ? 0 === v && w ? m : t * m : Sm / g) < p ? (i = p, S -= p) : M += t;var r = T + I * i;e.setItemLayout(n, { angle: i, startAngle: T, endAngle: r, clockwise: _, cx: h, cy: u, r0: c, r: x ? hr(t, b, [c, f]) : f }), T = r;
              }
            }), S < Sm && g) if (S <= .001) {
              var k = Sm / g;e.each(i, function (t, n) {
                if (!isNaN(t)) {
                  var i = e.getItemLayout(n);i.angle = k, i.startAngle = d + I * n * k, i.endAngle = d + I * (n + 1) * k;
                }
              });
            } else m = S / M, T = d, e.each(i, function (t, n) {
              if (!isNaN(t)) {
                var i = e.getItemLayout(n),
                    r = i.angle === p ? p : t * m;i.startAngle = T, i.endAngle = T + I * r, T += I * r;
              }
            });bm(t, f, o, s);
          });
        }, "pie")), Uo(function (t) {
          return { seriesType: t, reset: function reset(t, e) {
              var n = e.findComponents({ mainType: "legend" });if (n && n.length) {
                var i = t.getData();i.filterSelf(function (t) {
                  for (var e = i.getName(t), r = 0; r < n.length; r++) {
                    if (!n[r].isSelected(e)) return !1;
                  }return !0;
                });
              }
            } };
        }("pie")), t.version = "4.2.0", t.dependencies = hg, t.PRIORITY = dg, t.init = function (t, e, n) {
          var i = Xo(t);if (i) return i;var r = new bo(t, e, n);return r.id = "ec_" + Ag++, Cg[r.id] = r, Sn(t, Pg, r.id), Ho(r), r;
        }, t.connect = function (t) {
          if (y(t)) {
            var e = t;t = null, ag(e, function (e) {
              null != e.group && (t = e.group);
            }), t = t || "g_" + Lg++, ag(e, function (e) {
              e.group = t;
            });
          }return Dg[t] = !0, t;
        }, t.disConnect = Go, t.disconnect = Og, t.dispose = function (t) {
          "string" == typeof t ? t = Cg[t] : t instanceof bo || (t = Xo(t)), t instanceof bo && !t.isDisposed() && t.dispose();
        }, t.getInstanceByDom = Xo, t.getInstanceById = function (t) {
          return Cg[t];
        }, t.registerTheme = qo, t.registerPreprocessor = Yo, t.registerProcessor = Uo, t.registerPostUpdate = function (t) {
          Mg.push(t);
        }, t.registerAction = jo, t.registerCoordinateSystem = function (t, e) {
          na.register(t, e);
        }, t.getCoordinateSystemDimensions = function (t) {
          var e = na.get(t);if (e) return e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice();
        }, t.registerLayout = Zo, t.registerVisual = $o, t.registerLoading = Ko, t.extendComponentModel = function (t) {
          return Fd.extend(t);
        }, t.extendComponentView = Jo, t.extendSeriesModel = ts, t.extendChartView = es, t.setCanvasCreator = function (t) {
          e("createCanvas", t);
        }, t.registerMap = function (t, e, n) {
          ng.registerMap(t, e, n);
        }, t.getMap = function (t) {
          var e = ng.retrieveMap(t);return e && e[0] && { geoJson: e[0].geoJSON, specialAreas: e[0].specialAreas };
        }, t.dataTool = Eg;
      });
    }
  };
});
//# sourceMappingURL=echarts.js.map
