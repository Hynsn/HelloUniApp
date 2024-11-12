"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/uni-app.es.js
  var import_vue = __toESM(require_vue());
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/API/map/map.js
  var import_vue2 = __toESM(require_vue());

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/API/map/map.js
  var _style_0 = { "content": { "": { "flex": 1 } }, "map": { "": { "width": "750rpx", "height": 250, "backgroundColor": "#f0f0f0" } }, "scrollview": { "": { "flex": 1, "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10 } }, "list-item": { "": { "flexDirection": "row", "flexWrap": "nowrap", "alignItems": "center", "paddingTop": 5, "paddingRight": 0, "paddingBottom": 5, "paddingLeft": 0 } }, "list-text": { "": { "flex": 1 } }, "button": { "": { "marginTop": 5, "marginBottom": 5 } } };
  var testMarkers = [
    {
      id: 0,
      latitude: 39.989631,
      longitude: 116.481018,
      title: "\u65B9\u6052\u56FD\u9645 \u961C\u901A\u4E1C\u5927\u88576\u53F7",
      zIndex: "1",
      rotate: 0,
      width: 20,
      height: 20,
      anchor: {
        x: 0.5,
        y: 1
      },
      callout: {
        content: "\u65B9\u6052\u56FD\u9645 \u961C\u901A\u4E1C\u5927\u88576\u53F7",
        color: "#00BFFF",
        fontSize: 10,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#333300",
        bgColor: "#CCFF99",
        padding: "5",
        display: "ALWAYS"
      }
    },
    {
      id: 1,
      latitude: 39.908692,
      longitude: 116.397477,
      title: "\u5929\u5B89\u95E8",
      zIndex: "1",
      iconPath: "/static/location.png",
      width: 40,
      height: 40,
      anchor: {
        x: 0.5,
        y: 1
      },
      callout: {
        content: "\u9996\u90FD\u5317\u4EAC\n\u5929\u5B89\u95E8",
        color: "#00BFFF",
        fontSize: 12,
        borderRadius: 2,
        borderWidth: 0,
        borderColor: "#333300",
        bgColor: "#CCFF11",
        padding: "1",
        display: "ALWAYS"
      }
    }
  ];
  var testPolyline = [
    {
      points: [
        {
          latitude: 39.925539,
          longitude: 116.279037
        },
        {
          latitude: 39.925539,
          longitude: 116.520285
        }
      ],
      color: "#FFCCFF",
      width: 7,
      dottedLine: true,
      arrowLine: true,
      borderColor: "#000000",
      borderWidth: 2
    },
    {
      points: [
        {
          latitude: 39.938698,
          longitude: 116.275177
        },
        {
          latitude: 39.966069,
          longitude: 116.289253
        },
        {
          latitude: 39.944226,
          longitude: 116.306076
        },
        {
          latitude: 39.966069,
          longitude: 116.322899
        },
        {
          latitude: 39.938698,
          longitude: 116.336975
        }
      ],
      color: "#CCFFFF",
      width: 5,
      dottedLine: true,
      arrowLine: true,
      borderColor: "#CC0000",
      borderWidth: 3
    }
  ];
  var testPolygons = [
    {
      points: [
        {
          latitude: 39.781892,
          longitude: 116.293413
        },
        {
          latitude: 39.7876,
          longitude: 116.391842
        },
        {
          latitude: 39.733187,
          longitude: 116.417932
        },
        {
          latitude: 39.704653,
          longitude: 116.338255
        }
      ],
      fillColor: "#FFCCFF",
      strokeWidth: 3,
      strokeColor: "#CC99CC",
      zIndex: 11
    },
    {
      points: [
        {
          latitude: 39.8876,
          longitude: 116.518932
        },
        {
          latitude: 39.781892,
          longitude: 116.518932
        },
        {
          latitude: 39.781892,
          longitude: 116.428932
        },
        {
          latitude: 39.8876,
          longitude: 116.428932
        }
      ],
      fillColor: "#CCFFFF",
      strokeWidth: 5,
      strokeColor: "#CC0000",
      zIndex: 3
    }
  ];
  var testCircles = [
    {
      latitude: 39.996441,
      longitude: 116.411146,
      radius: 15e3,
      strokeWidth: 5,
      color: "#CCFFFF",
      fillColor: "#CC0000"
    },
    {
      latitude: 40.096441,
      longitude: 116.511146,
      radius: 12e3,
      strokeWidth: 3,
      color: "#CCFFFF",
      fillColor: "#FFCCFF"
    },
    {
      latitude: 39.896441,
      longitude: 116.311146,
      radius: 9e3,
      strokeWidth: 1,
      color: "#CCFFFF",
      fillColor: "#CC0000"
    }
  ];
  var testIncludePoints = [
    {
      latitude: 39.989631,
      longitude: 116.481018
    },
    {
      latitude: 39.908692,
      longitude: 116.397477
    }
  ];
  var _sfc_main = {
    data() {
      return {
        location: {
          longitude: 116.397477,
          latitude: 39.908692
        },
        controls: [{
          id: 1,
          position: {
            left: 5,
            top: 180,
            width: 30,
            height: 30
          },
          iconPath: "/static/logo.png",
          clickable: true
        }],
        showLocation: false,
        scale: 13,
        showCompass: true,
        enable3D: true,
        enableOverlooking: true,
        enableZoom: true,
        enableScroll: true,
        enableRotate: true,
        enableSatellite: false,
        enableTraffic: false,
        polyline: [],
        markers: [],
        polygons: [],
        circles: [],
        includePoints: [],
        rotate: 0,
        skew: 0
      };
    },
    onLoad() {
    },
    onReady() {
      this.map = uni.createMapContext("map1", this);
    },
    methods: {
      changeScale() {
        this.scale = this.scale == 9 ? 15 : 9;
      },
      changeRotate() {
        this.rotate = this.rotate == 90 ? 0 : 90;
      },
      changeSkew() {
        this.skew = this.skew == 30 ? 0 : 30;
      },
      enableThreeD(e) {
        this.enable3D = e.detail.value;
      },
      changeShowCompass(e) {
        this.showCompass = e.detail.value;
      },
      changeEnableOverlooking(e) {
        this.enableOverlooking = e.detail.value;
      },
      changeEnableZoom(e) {
        this.enableZoom = e.detail.value;
      },
      changeEnableScroll(e) {
        this.enableScroll = e.detail.value;
      },
      changeEnableRotate(e) {
        this.enableRotate = e.detail.value;
      },
      changeEnableSatellite(e) {
        this.enableSatellite = e.detail.value;
      },
      changeEnableTraffic(e) {
        this.enableTraffic = e.detail.value;
      },
      addMarkers() {
        this.markers = testMarkers;
      },
      addPolyline() {
        this.polyline = testPolyline;
      },
      addPolygons() {
        this.polygons = testPolygons;
      },
      addCircles() {
        this.circles = testCircles;
      },
      includePoint() {
        this.includePoints = testIncludePoints;
      },
      handleGetCenterLocation() {
        this.map.getCenterLocation({
          success: (ret) => {
            formatAppLog("log", "at pages/API/map/map.nvue:341", JSON.stringify(ret));
            uni.showModal({
              content: JSON.stringify(ret)
            });
          }
        });
      },
      handleGetRegion() {
        this.map.getRegion({
          success: (ret) => {
            formatAppLog("log", "at pages/API/map/map.nvue:351", JSON.stringify(ret));
            uni.showModal({
              content: JSON.stringify(ret)
            });
          }
        });
      },
      handleTranslateMarker() {
        this.map.translateMarker({
          markerId: 1,
          destination: {
            latitude: 39.989631,
            longitude: 116.481018
          },
          duration: 2e3
        }, (ret) => {
          formatAppLog("log", "at pages/API/map/map.nvue:368", JSON.stringify(ret));
          uni.showModal({
            content: JSON.stringify(ret)
          });
        });
      },
      maptap(e) {
        uni.showModal({
          content: JSON.stringify(e)
        });
      },
      onmarkertap(e) {
        uni.showModal({
          content: JSON.stringify(e)
        });
      },
      oncontroltap(e) {
        uni.showModal({
          content: JSON.stringify(e)
        });
      },
      oncallouttap(e) {
        uni.showModal({
          content: JSON.stringify(e)
        });
      },
      onupdated(e) {
        formatAppLog("log", "at pages/API/map/map.nvue:396", JSON.stringify(e));
      },
      onregionchange(e) {
        formatAppLog("log", "at pages/API/map/map.nvue:399", JSON.stringify(e));
      },
      onpoitap(e) {
        uni.showModal({
          content: JSON.stringify(e)
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_button = (0, import_vue2.resolveComponent)("button");
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)("view", { class: "content" }, [
        (0, import_vue2.createElementVNode)("map", {
          class: "map",
          id: "map1",
          ref: "map1",
          controls: $data.controls,
          scale: $data.scale,
          longitude: $data.location.longitude,
          latitude: $data.location.latitude,
          showLocation: $data.showLocation,
          enable3D: $data.enable3D,
          rotate: $data.rotate,
          skew: $data.skew,
          showCompass: $data.showCompass,
          enableOverlooking: $data.enableOverlooking,
          enableZoom: $data.enableZoom,
          enableScroll: $data.enableScroll,
          enableRotate: $data.enableRotate,
          enableSatellite: $data.enableSatellite,
          enableTraffic: $data.enableTraffic,
          markers: $data.markers,
          polyline: $data.polyline,
          circles: $data.circles,
          polygons: $data.polygons,
          includePoints: $data.includePoints,
          onTap: _cache[0] || (_cache[0] = (...args) => $options.maptap && $options.maptap(...args)),
          onControltap: _cache[1] || (_cache[1] = (...args) => $options.oncontroltap && $options.oncontroltap(...args)),
          onMarkertap: _cache[2] || (_cache[2] = (...args) => $options.onmarkertap && $options.onmarkertap(...args)),
          onCallouttap: _cache[3] || (_cache[3] = (...args) => $options.oncallouttap && $options.oncallouttap(...args)),
          onPoitap: _cache[4] || (_cache[4] = (...args) => $options.onpoitap && $options.onpoitap(...args)),
          onUpdated: _cache[5] || (_cache[5] = (...args) => $options.onupdated && $options.onupdated(...args)),
          onRegionchange: _cache[6] || (_cache[6] = (...args) => $options.onregionchange && $options.onregionchange(...args))
        }, null, 40, ["controls", "scale", "longitude", "latitude", "showLocation", "enable3D", "rotate", "skew", "showCompass", "enableOverlooking", "enableZoom", "enableScroll", "enableRotate", "enableSatellite", "enableTraffic", "markers", "polyline", "circles", "polygons", "includePoints"]),
        (0, import_vue2.createElementVNode)("scroll-view", {
          class: "scrollview",
          scrollY: "true"
        }, [
          (0, import_vue2.createCommentVNode)(' <view class="list-item">\n                <text class="list-text">\u663E\u793A3D\u697C\u5757</text>\n                <switch :checked="enable3D" @change="enableThreeD" />\n            </view>\n            <view class="list-item">\n                <text class="list-text">\u663E\u793A\u6307\u5357\u9488</text>\n                <switch :checked="showCompass" @change="changeShowCompass" />\n            </view>\n            <view class="list-item">\n                <text class="list-text">\u5F00\u542F\u4FEF\u89C6</text>\n                <switch :checked="enableOverlooking" @change="changeEnableOverlooking" />\n            </view>\n            <view class="list-item">\n                <text class="list-text">\u662F\u5426\u652F\u6301\u7F29\u653E</text>\n                <switch :checked="enableZoom" @change="changeEnableZoom" />\n            </view>\n            <view class="list-item">\n                <text class="list-text">\u662F\u5426\u652F\u6301\u62D6\u52A8</text>\n                <switch :checked="enableScroll" @change="changeEnableScroll" />\n            </view>\n            <view class="list-item">\n                <text class="list-text">\u662F\u5426\u652F\u6301\u65CB\u8F6C</text>\n                <switch :checked="enableRotate" @change="changeEnableRotate" />\n            </view>\n            <view class="list-item">\n                <text class="list-text">\u662F\u5426\u5F00\u542F\u536B\u661F\u56FE</text>\n                <switch :checked="enableSatellite" @change="changeEnableSatellite" />\n            </view>\n            <view class="list-item">\n                <text class="list-text">\u662F\u5426\u5F00\u542F\u5B9E\u65F6\u8DEF\u51B5</text>\n                <switch :checked="enableTraffic" @change="changeEnableTraffic" />\n            </view> '),
          (0, import_vue2.createVNode)(_component_button, {
            class: "button",
            onClick: $options.changeScale
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createTextVNode)("changeScale")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"]),
          (0, import_vue2.createVNode)(_component_button, {
            class: "button",
            onClick: $options.changeRotate
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createTextVNode)("changeRotate")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"]),
          (0, import_vue2.createVNode)(_component_button, {
            class: "button",
            onClick: $options.changeSkew
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createTextVNode)("skew")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"]),
          (0, import_vue2.createVNode)(_component_button, {
            class: "button",
            onClick: $options.addMarkers
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createTextVNode)("addMarkers")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"]),
          (0, import_vue2.createVNode)(_component_button, {
            class: "button",
            onClick: $options.addPolyline
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createTextVNode)("addPolyline")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"]),
          (0, import_vue2.createVNode)(_component_button, {
            class: "button",
            onClick: $options.addPolygons
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createTextVNode)("addPolygons")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"]),
          (0, import_vue2.createVNode)(_component_button, {
            class: "button",
            onClick: $options.addCircles
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createTextVNode)("addCircles")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"]),
          (0, import_vue2.createVNode)(_component_button, {
            class: "button",
            onClick: $options.includePoint
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createTextVNode)("includePoints")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"]),
          (0, import_vue2.createVNode)(_component_button, {
            class: "button",
            onClick: $options.handleGetCenterLocation
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createTextVNode)("getCenterLocation")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"]),
          (0, import_vue2.createVNode)(_component_button, {
            class: "button",
            onClick: $options.handleGetRegion
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createTextVNode)("getRegion")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"]),
          (0, import_vue2.createVNode)(_component_button, {
            class: "button",
            onClick: $options.handleTranslateMarker
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createTextVNode)("translateMarker")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"])
        ])
      ])
    ]);
  }
  var map = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/workspace/HelloUniApp/pages/API/map/map.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/API/map/map";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    map.mpType = "page";
    const app = Vue.createPageApp(map, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...map.styles || []]));
    app.mount("#root");
  }
})();
