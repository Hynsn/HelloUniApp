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

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/API/map-search/map-search.js
  var import_vue2 = __toESM(require_vue());

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/API/map-search/map-search.js
  var _style_0 = { "content": { "": { "flex": 1 } }, "map": { "": { "width": "750rpx", "height": "500rpx", "backgroundColor": "#000000" } }, "scrollview": { "": { "flex": 1 } }, "button": { "": { "marginTop": "30rpx", "marginBottom": "20rpx" } } };
  var mapSearch = weex.requireModule("mapSearch");
  var _sfc_main = {
    data() {
      return {
        markers: [{
          id: "1",
          latitude: 39.908692,
          longitude: 116.397477,
          title: "\u5929\u5B89\u95E8",
          zIndex: "1",
          iconPath: "/static/gps.png",
          width: 20,
          height: 20,
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
        }]
      };
    },
    methods: {
      selectPoint(e) {
        formatAppLog("log", "at pages/API/map-search/map-search.nvue:46", e);
      },
      reverseGeocode() {
        var point = this.markers[0];
        mapSearch.reverseGeocode({
          point: {
            latitude: point.latitude,
            longitude: point.longitude
          }
        }, (ret) => {
          formatAppLog("log", "at pages/API/map-search/map-search.nvue:56", JSON.stringify(ret));
          uni.showModal({
            content: JSON.stringify(ret)
          });
        });
      },
      poiSearchNearBy() {
        var point = this.markers[0];
        mapSearch.poiSearchNearBy({
          point: {
            latitude: point.latitude,
            longitude: point.longitude
          },
          key: "\u505C\u8F66\u573A",
          radius: 1e3
        }, (ret) => {
          formatAppLog("log", "at pages/API/map-search/map-search.nvue:72", ret);
          uni.showModal({
            content: JSON.stringify(ret)
          });
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
          ref: "dcmap",
          markers: $data.markers,
          onTap: _cache[0] || (_cache[0] = (...args) => $options.selectPoint && $options.selectPoint(...args))
        }, null, 40, ["markers"]),
        (0, import_vue2.createElementVNode)("scroll-view", {
          class: "scrollview",
          scrollY: "true"
        }, [
          (0, import_vue2.createVNode)(_component_button, {
            class: "button",
            onClick: $options.reverseGeocode
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createTextVNode)("reverseGeocode")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"]),
          (0, import_vue2.createVNode)(_component_button, {
            class: "button",
            onClick: $options.poiSearchNearBy
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createTextVNode)("poiSearchNearBy")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"])
        ])
      ])
    ]);
  }
  var mapSearch$1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/workspace/HelloUniApp/pages/API/map-search/map-search.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/API/map-search/map-search";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    mapSearch$1.mpType = "page";
    const app = Vue.createPageApp(mapSearch$1, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...mapSearch$1.styles || []]));
    app.mount("#root");
  }
})();
