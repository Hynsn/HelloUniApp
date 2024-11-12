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

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/template/swiper-vertical/swiper-vertical.js
  var import_vue2 = __toESM(require_vue());

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/template/swiper-vertical/swiper-vertical.js
  var _style_0 = { "page": { "": { "flex": 1 } }, "swiper": { "": { "flex": 1, "backgroundColor": "#007AFF" } }, "swiper-item": { "": { "flex": 1 } }, "video": { "": { "flex": 1 } } };
  var videoData = [
    {
      src: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-01.mp4"
    },
    {
      src: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-02.mp4"
    },
    {
      src: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-03.mp4"
    },
    {
      src: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-01.mp4"
    },
    {
      src: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-02.mp4"
    },
    {
      src: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-03.mp4"
    }
  ];
  var _sfc_main = {
    data() {
      return {
        circular: true,
        videoList: [
          {
            id: "video0",
            src: "",
            img: ""
          },
          {
            id: "video1",
            src: "",
            img: ""
          },
          {
            id: "video2",
            src: "",
            img: ""
          }
        ],
        videoDataList: []
      };
    },
    onLoad(e) {
    },
    onReady() {
      this.init();
      this.getData();
    },
    methods: {
      init() {
        this._videoIndex = 0;
        this._videoContextList = [];
        for (var i = 0; i < this.videoList.length; i++) {
          this._videoContextList.push(uni.createVideoContext("video" + i, this));
        }
        this._videoDataIndex = 0;
      },
      getData(e) {
        this.videoDataList = videoData;
        setTimeout(() => {
          this.updateVideo(true);
        }, 200);
      },
      onSwiperChange(e) {
        let currentIndex = e.detail.current;
        if (currentIndex === this._videoIndex) {
          return;
        }
        let isNext = false;
        if (currentIndex === 0 && this._videoIndex === this.videoList.length - 1) {
          isNext = true;
        } else if (currentIndex === this.videoList.length - 1 && this._videoIndex === 0) {
          isNext = false;
        } else if (currentIndex > this._videoIndex) {
          isNext = true;
        }
        if (isNext) {
          this._videoDataIndex++;
        } else {
          this._videoDataIndex--;
        }
        if (this._videoDataIndex < 0) {
          this._videoDataIndex = this.videoDataList.length - 1;
        } else if (this._videoDataIndex >= this.videoDataList.length) {
          this._videoDataIndex = 0;
        }
        this.circular = this._videoDataIndex != 0;
        if (this._videoIndex >= 0) {
          this._videoContextList[this._videoIndex].pause();
          this._videoContextList[this._videoIndex].seek(0);
        }
        this._videoIndex = currentIndex;
        setTimeout(() => {
          this.updateVideo(isNext);
        }, 200);
      },
      getNextIndex(isNext) {
        let index = this._videoIndex + (isNext ? 1 : -1);
        if (index < 0) {
          return this.videoList.length - 1;
        } else if (index >= this.videoList.length) {
          return 0;
        }
        return index;
      },
      getNextDataIndex(isNext) {
        let index = this._videoDataIndex + (isNext ? 1 : -1);
        if (index < 0) {
          return this.videoDataList.length - 1;
        } else if (index >= this.videoDataList.length) {
          return 0;
        }
        return index;
      },
      updateVideo(isNext) {
        this.$set(this.videoList[this._videoIndex], "src", this.videoDataList[this._videoDataIndex].src);
        this.$set(this.videoList[this.getNextIndex(isNext)], "src", this.videoDataList[this.getNextDataIndex(isNext)].src);
        setTimeout(() => {
          this._videoContextList[this._videoIndex].play();
        }, 200);
        formatAppLog("log", "at pages/template/swiper-vertical/swiper-vertical.nvue:139", "v:" + this._videoIndex + " d:" + this._videoDataIndex + "; next v:" + this.getNextIndex(
          isNext
        ) + " next d:" + this.getNextDataIndex(isNext));
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_swiper_item = (0, import_vue2.resolveComponent)("swiper-item");
    const _component_swiper = (0, import_vue2.resolveComponent)("swiper");
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)("view", { class: "page" }, [
        (0, import_vue2.createVNode)(_component_swiper, {
          class: "swiper",
          circular: $data.circular,
          vertical: true,
          onChange: $options.onSwiperChange
        }, {
          default: (0, import_vue2.withCtx)(() => [
            ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
              import_vue2.Fragment,
              null,
              (0, import_vue2.renderList)($data.videoList, (item) => {
                return (0, import_vue2.openBlock)(), (0, import_vue2.createBlock)(
                  _component_swiper_item,
                  {
                    key: item.id
                  },
                  {
                    default: (0, import_vue2.withCtx)(() => [
                      (0, import_vue2.createElementVNode)("u-video", {
                        class: "video",
                        id: item.id,
                        ref_for: true,
                        ref: item.id,
                        src: item.src,
                        controls: false,
                        loop: true,
                        showCenterPlayBtn: false
                      }, null, 8, ["id", "src"])
                    ]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1024
                  /* DYNAMIC_SLOTS */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["circular", "onChange"])
      ])
    ]);
  }
  var swiperVertical = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/workspace/HelloUniApp/pages/template/swiper-vertical/swiper-vertical.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/template/swiper-vertical/swiper-vertical";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    swiperVertical.mpType = "page";
    const app = Vue.createPageApp(swiperVertical, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...swiperVertical.styles || []]));
    app.mount("#root");
  }
})();
