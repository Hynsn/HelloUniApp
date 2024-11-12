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

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/component/cover-view/cover-view.js
  var import_vue = __toESM(require_vue());

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/component/cover-view/cover-view.js
  var _style_0 = { "content": { "": { "textAlign": "center", "height": "400rpx" } }, "logo": { "": { "height": "200rpx", "width": "200rpx", "marginTop": "200rpx" } }, "title": { "": { "fontSize": "36rpx", "color": "#8f8f94" } }, "text": { "": { "color": "#4CD964", "fontFamily": "unincomponents" } }, "video": { "": { "width": "750rpx", "height": "400rpx", "backgroundColor": "#808080" } }, "coverview": { "": { "position": "absolute", "left": 0, "right": 0, "top": "0rpx", "height": "150rpx", "borderWidth": "10rpx", "borderColor": "#4CD964" } } };
  var _sfc_main = {
    data() {
      return {
        title: "cover-view",
        src: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v"
      };
    },
    onLoad() {
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue.createElementVNode)("view", null, [
        (0, import_vue.createElementVNode)("u-video", {
          ref: "video",
          id: "myVideo",
          class: "video",
          src: $data.src,
          controls: "true"
        }, [
          (0, import_vue.createElementVNode)("u-scalable", { style: { position: "absolute", left: "0", right: "0", top: "0", bottom: "0" } }, [
            (0, import_vue.createElementVNode)("cover-view", {
              class: "coverview",
              style: { "overflow-y": "scroll" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "text" }, (0, import_vue.toDisplayString)("\uEA06\uEA0E\uEA0C\uEA0A \u6211\u662F\u53EF\u4EE5\u6EDA\u52A8\u7684cover-view \u6211\u662F\u53EF\u4EE5\u6EDA\u52A8\u7684cover-view \u6211\u662F\u53EF\u4EE5\u6EDA\u52A8\u7684cover-view \u6211\u662F\u53EF\u4EE5\u6EDA\u52A8\u7684cover-view \u6211\u662F\u53EF\u4EE5\u6EDA\u52A8\u7684cover-view \u6211\u662F\u53EF\u4EE5\u6EDA\u52A8\u7684cover-view \u6211\u662F\u53EF\u4EE5\u6EDA\u52A8\u7684cover-view \u6211\u662F\u53EF\u4EE5\u6EDA\u52A8\u7684cover-view \u6211\u662F\u53EF\u4EE5\u6EDA\u52A8\u7684cover-view"))
            ])
          ])
        ], 8, ["src"])
      ])
    ]);
  }
  var coverView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/workspace/HelloUniApp/pages/component/cover-view/cover-view.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/cover-view/cover-view";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    coverView.mpType = "page";
    const app = Vue.createPageApp(coverView, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...coverView.styles || []]));
    app.mount("#root");
  }
})();
