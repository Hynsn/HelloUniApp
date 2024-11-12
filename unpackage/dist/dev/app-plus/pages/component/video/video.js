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

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/component/video/video.js
  var import_vue2 = __toESM(require_vue());

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/component/video/video.js
  var _style_0 = { "video": { "": { "width": "750rpx", "height": "400rpx", "backgroundColor": "#808080" } }, "btn": { "": { "marginTop": 5, "marginBottom": 5 } } };
  var _sfc_main = {
    data() {
      return {
        src: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4",
        fil: true,
        list: [{
          text: "\u8981\u663E\u793A\u7684\u6587\u672C",
          color: "#FF0000",
          time: 9
        }]
      };
    },
    onReady() {
      this.context = uni.createVideoContext("video1", this);
    },
    methods: {
      onstart(e) {
        formatAppLog("log", "at pages/component/video/video.nvue:36", "onstart:" + JSON.stringify(e));
      },
      onpause(e) {
        formatAppLog("log", "at pages/component/video/video.nvue:39", "onpause:" + JSON.stringify(e));
      },
      onfinish(e) {
        formatAppLog("log", "at pages/component/video/video.nvue:42", "onfinish:" + JSON.stringify(e));
      },
      onfail(e) {
        formatAppLog("log", "at pages/component/video/video.nvue:45", "onfail:" + JSON.stringify(e));
      },
      fullscreenchange(e) {
        formatAppLog("log", "at pages/component/video/video.nvue:48", "fullscreenchange:" + JSON.stringify(e));
      },
      waiting(e) {
        formatAppLog("log", "at pages/component/video/video.nvue:51", "waiting:" + JSON.stringify(e));
      },
      timeupdate(e) {
        formatAppLog("log", "at pages/component/video/video.nvue:54", "timeupdate:" + JSON.stringify(e));
      },
      play() {
        this.context.play();
      },
      pause() {
        this.context.pause();
      },
      seek() {
        this.context.seek(20);
      },
      stop() {
        this.context.stop();
      },
      fullScreen() {
        this.context.requestFullScreen({
          direction: 90
        });
      },
      exitFullScreen() {
        this.context.exitFullScreen();
      },
      sendDanmu() {
        this.context.sendDanmu({
          text: "\u8981\u663E\u793A\u7684\u5F39\u5E55\u6587\u672C",
          color: "#FF0000"
        });
      },
      playbackRate() {
        this.context.playbackRate(2);
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
      (0, import_vue2.createElementVNode)("div", null, [
        (0, import_vue2.createElementVNode)("u-video", {
          id: "video1",
          class: "video",
          src: $data.src,
          autoplay: "false",
          duration: "",
          controls: "true",
          danmuList: $data.list,
          danmuBtn: "true",
          enableDanmu: "true",
          loop: true,
          muted: "true",
          initialTime: "",
          direction: "-90",
          showMuteBtn: "true",
          onPlay: _cache[0] || (_cache[0] = (...args) => $options.onstart && $options.onstart(...args)),
          onPause: _cache[1] || (_cache[1] = (...args) => $options.onpause && $options.onpause(...args)),
          onEnded: _cache[2] || (_cache[2] = (...args) => $options.onfinish && $options.onfinish(...args)),
          onError: _cache[3] || (_cache[3] = (...args) => $options.onfail && $options.onfail(...args)),
          onWaiting: _cache[4] || (_cache[4] = (...args) => $options.waiting && $options.waiting(...args)),
          onTimeupdate: _cache[5] || (_cache[5] = (...args) => $options.timeupdate && $options.timeupdate(...args)),
          onFullscreenchange: _cache[6] || (_cache[6] = (...args) => $options.fullscreenchange && $options.fullscreenchange(...args))
        }, null, 40, ["src", "danmuList"]),
        (0, import_vue2.createVNode)(_component_button, {
          class: "btn",
          onClick: $options.play
        }, {
          default: (0, import_vue2.withCtx)(() => [
            (0, import_vue2.createTextVNode)("\u64AD\u653E")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"]),
        (0, import_vue2.createVNode)(_component_button, {
          class: "btn",
          onClick: $options.pause
        }, {
          default: (0, import_vue2.withCtx)(() => [
            (0, import_vue2.createTextVNode)("\u6682\u505C")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"]),
        (0, import_vue2.createVNode)(_component_button, {
          class: "btn",
          onClick: $options.seek
        }, {
          default: (0, import_vue2.withCtx)(() => [
            (0, import_vue2.createTextVNode)("\u8DF3\u8F6C\u5230\u6307\u5B9A\u4F4D\u7F6E")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"]),
        (0, import_vue2.createVNode)(_component_button, {
          class: "btn",
          onClick: $options.stop
        }, {
          default: (0, import_vue2.withCtx)(() => [
            (0, import_vue2.createTextVNode)("\u505C\u6B62")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"]),
        (0, import_vue2.createVNode)(_component_button, {
          class: "btn",
          onClick: $options.fullScreen
        }, {
          default: (0, import_vue2.withCtx)(() => [
            (0, import_vue2.createTextVNode)("\u5168\u5C4F")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"]),
        (0, import_vue2.createVNode)(_component_button, {
          class: "btn",
          onClick: $options.exitFullScreen
        }, {
          default: (0, import_vue2.withCtx)(() => [
            (0, import_vue2.createTextVNode)("\u9000\u51FA\u5168\u5C4F")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"]),
        (0, import_vue2.createVNode)(_component_button, {
          class: "btn",
          onClick: $options.playbackRate
        }, {
          default: (0, import_vue2.withCtx)(() => [
            (0, import_vue2.createTextVNode)("\u8BBE\u7F6E\u500D\u901F")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"]),
        (0, import_vue2.createVNode)(_component_button, {
          class: "btn",
          onClick: $options.sendDanmu
        }, {
          default: (0, import_vue2.withCtx)(() => [
            (0, import_vue2.createTextVNode)("\u53D1\u9001\u5F39\u5E55")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"])
      ])
    ]);
  }
  var video = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/workspace/HelloUniApp/pages/component/video/video.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/video/video";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    video.mpType = "page";
    const app = Vue.createPageApp(video, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...video.styles || []]));
    app.mount("#root");
  }
})();
