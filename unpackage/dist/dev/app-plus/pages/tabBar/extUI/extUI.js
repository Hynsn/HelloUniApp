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
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/u-link.js
  var import_vue2 = __toESM(require_vue());

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/u-link.js
  var _sfc_main = {
    name: "u-link",
    props: {
      href: {
        type: String,
        default: ""
      },
      text: {
        type: String,
        default: ""
      },
      inWhiteList: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      openURL() {
        plus.runtime.openURL(this.href);
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("u-text", {
      style: { "text-decoration": "underline" },
      href: $props.href,
      onClick: _cache[0] || (_cache[0] = (...args) => $options.openURL && $options.openURL(...args)),
      inWhiteList: $props.inWhiteList
    }, (0, import_vue2.toDisplayString)($props.text), 9, ["href", "inWhiteList"]);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/workspace/HelloUniApp/components/u-link/u-link.vue"]]);

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/tabBar/extUI/extUI.js
  var import_vue3 = __toESM(require_vue());
  var _imports_0 = "/static/extuiIndex.png";
  var _style_0 = { "uni-icon": { "": { "fontFamily": "uniicons", "fontWeight": "normal" } }, "uni-container": { "": { "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "backgroundColor": "#f8f8f8" } }, "uni-header-logo": { "": { "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "marginTop": "10rpx" } }, "uni-header-image": { "": { "width": 80, "height": 80 } }, "uni-hello-text": { "": { "marginBottom": 20 } }, "hello-text": { "": { "color": "#7A7E83", "fontSize": 14, "lineHeight": 20 } }, "hello-link": { "": { "color": "#7A7E83", "fontSize": 14, "lineHeight": 20 } }, "uni-panel": { "": { "marginBottom": 12 } }, "uni-panel-h": { "": { "backgroundColor": "#ffffff", "!flexDirection": "row", "!alignItems": "center", "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12 } }, "uni-panel-h-on": { "": { "backgroundColor": "#f0f0f0" } }, "uni-panel-text": { "": { "flex": 1, "color": "#000000", "fontSize": 14, "fontWeight": "normal" } }, "uni-panel-icon": { "": { "marginLeft": 15, "color": "#999999", "fontSize": 14, "fontWeight": "normal", "transform": "rotate(0deg)", "transitionDuration": 0, "transitionProperty": "transform" } }, "uni-panel-icon-on": { "": { "transform": "rotate(180deg)" } }, "uni-navigate-item": { "": { "flexDirection": "row", "alignItems": "center", "backgroundColor": "#FFFFFF", "borderTopStyle": "solid", "borderTopColor": "#f0f0f0", "borderTopWidth": 1, "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12, "backgroundColor:active": "#f8f8f8" } }, "uni-navigate-text": { "": { "flex": 1, "color": "#000000", "fontSize": 14, "fontWeight": "normal" } }, "uni-navigate-icon": { "": { "marginLeft": 15, "color": "#999999", "fontSize": 14, "fontWeight": "normal" } }, "@TRANSITION": { "uni-panel-icon": { "duration": 0, "property": "transform" } } };
  var _sfc_main2 = {
    props: {
      hasLeftWin: {
        type: Boolean
      },
      leftWinActive: {
        type: String
      }
    },
    data() {
      return {
        hideList: [
          "load-more"
        ],
        lists: [
          {
            name: "uni-badge \u6570\u5B57\u89D2\u6807",
            url: "badge"
          },
          {
            name: "uni-breadcrumb \u9762\u5305\u5C51",
            url: "breadcrumb"
          },
          {
            name: "uni-calendar \u65E5\u5386",
            url: "calendar"
          },
          {
            name: "uni-card \u5361\u7247",
            url: "card"
          },
          {
            name: "uni-collapse \u6298\u53E0\u9762\u677F",
            url: "collapse"
          },
          {
            name: "uni-countdown \u5012\u8BA1\u65F6",
            url: "countdown"
          },
          {
            name: "uni-data-checkbox \u6570\u636E\u9009\u62E9\u5668",
            url: "data-checkbox"
          },
          {
            name: "uni-data-picker \u6570\u636E\u9A71\u52A8\u7684picker\u9009\u62E9\u5668",
            url: "data-picker"
          },
          {
            name: "uni-data-select \u6570\u636E\u9A71\u52A8\u7684\u4E0B\u62C9\u6846",
            url: "data-select"
          },
          {
            name: "uni-dateformat \u65E5\u671F\u683C\u5F0F\u5316",
            url: "dateformat"
          },
          {
            name: "uni-datetime-picker \u65E5\u671F\u9009\u62E9\u5668",
            url: "datetime-picker"
          },
          {
            name: "uni-drawer \u62BD\u5C49",
            url: "drawer"
          },
          {
            name: "uni-easyinput \u589E\u5F3A\u8F93\u5165\u6846",
            url: "easyinput"
          },
          {
            name: "uni-fab \u60AC\u6D6E\u6309\u94AE",
            url: "fab"
          },
          {
            name: "uni-fav \u6536\u85CF\u6309\u94AE",
            url: "fav"
          },
          {
            name: "uni-forms \u8868\u5355",
            url: "forms"
          },
          {
            name: "uni-goods-nav \u5546\u54C1\u5BFC\u822A",
            url: "goods-nav"
          },
          {
            name: "uni-grid \u5BAB\u683C",
            url: "grid"
          },
          {
            name: "uni-group \u5206\u7EC4",
            url: "group"
          },
          {
            name: "uni-icons \u56FE\u6807",
            url: "icons"
          },
          {
            name: "uni-indexed-list \u7D22\u5F15\u5217\u8868",
            url: "indexed-list"
          },
          {
            name: "uni-link \u8D85\u94FE\u63A5",
            url: "link"
          },
          {
            name: "uni-list \u5217\u8868",
            url: "list"
          },
          {
            name: "uni-load-more \u52A0\u8F7D\u66F4\u591A",
            url: "load-more"
          },
          {
            name: "uni-nav-bar \u81EA\u5B9A\u4E49\u5BFC\u822A\u680F",
            url: "nav-bar"
          },
          {
            name: "uni-notice-bar \u901A\u544A\u680F",
            url: "notice-bar"
          },
          {
            name: "uni-number-box \u6570\u5B57\u8F93\u5165\u6846",
            url: "number-box"
          },
          {
            name: "uni-pagination \u5206\u9875\u5668",
            url: "pagination"
          },
          {
            name: "uni-popup \u5F39\u51FA\u5C42",
            url: "popup"
          },
          {
            name: "uni-rate \u8BC4\u5206",
            url: "rate"
          },
          {
            name: "uni-row \u5E03\u5C40-\u884C",
            url: "row"
          },
          {
            name: "uni-search-bar \u641C\u7D22\u680F",
            url: "search-bar"
          },
          {
            name: "uni-section \u6807\u9898\u680F",
            url: "section"
          },
          {
            name: "uni-segmented-control \u5206\u6BB5\u5668",
            url: "segmented-control"
          },
          {
            name: "uni-steps \u6B65\u9AA4\u6761",
            url: "steps"
          },
          {
            name: "uni-swipe-action \u6ED1\u52A8\u64CD\u4F5C",
            url: "swipe-action"
          },
          {
            name: "uni-swiper-dot \u8F6E\u64AD\u56FE\u6307\u793A\u70B9",
            url: "swiper-dot"
          },
          {
            name: "uni-tag \u6807\u7B7E",
            url: "tag"
          },
          {
            name: "uni-title \u7AE0\u8282\u6807\u9898",
            url: "title"
          },
          {
            name: "uni-tooltip \u6587\u5B57\u63D0\u793A",
            url: "tooltip"
          },
          {
            name: "uni-transition \u8FC7\u6E21\u52A8\u753B",
            url: "transition"
          }
        ]
      };
    },
    onLoad() {
    },
    onReady() {
      uni.preloadPage({
        url: "/pages/extUI/calendar/calendar",
        success() {
          formatAppLog("log", "at pages/tabBar/extUI/extUI.nvue:230", "preloadPage /pages/extUI/calendar/calendar");
        },
        fail() {
        }
      });
    },
    onShareAppMessage() {
      return {
        title: "\u6B22\u8FCE\u4F53\u9A8Cuni-app",
        path: "/pages/tabBar/extUI/extUI"
      };
    },
    onNavigationBarButtonTap(e) {
      uni.navigateTo({
        url: "/pages/about/about"
      });
    },
    methods: {
      goDetailPage(path) {
        const url = "/pages/extUI/" + path + "/" + path;
        if (this.hasLeftWin) {
          uni.reLaunch({
            url
          });
        } else {
          uni.navigateTo({
            url
          });
        }
      }
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_link = resolveEasycom((0, import_vue3.resolveDynamicComponent)("u-link"), __easycom_0);
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue3.createElementVNode)("view", { class: "uni-container" }, [
        !$props.hasLeftWin ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
          key: 0,
          class: "uni-header-logo"
        }, [
          (0, import_vue3.createElementVNode)("u-image", {
            class: "uni-header-image",
            src: _imports_0
          })
        ])) : (0, import_vue3.createCommentVNode)("v-if", true),
        !$props.hasLeftWin ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
          key: 1,
          class: "uni-hello-text"
        }, [
          (0, import_vue3.createElementVNode)("u-text", { class: "hello-text" }, "\u4EE5\u4E0B\u662Funi-app\u6269\u5C55\u7EC4\u4EF6\u793A\u4F8B\uFF0C\u66F4\u591A\u7EC4\u4EF6\u89C1\u63D2\u4EF6\u5E02\u573A\uFF1A"),
          (0, import_vue3.createVNode)(_component_u_link, {
            class: "hello-link",
            href: "https://ext.dcloud.net.cn/",
            text: "https://ext.dcloud.net.cn",
            inWhiteList: true
          }, null, 8, ["href", "text"])
        ])) : (0, import_vue3.createCommentVNode)("v-if", true),
        ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
          import_vue3.Fragment,
          null,
          (0, import_vue3.renderList)($data.lists, (item) => {
            return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
              "view",
              {
                class: (0, import_vue3.normalizeClass)([{ "pc-hide": $data.hideList.indexOf(item.url) !== -1 && $props.hasLeftWin }, "uni-panel"]),
                key: item.url
              },
              [
                (0, import_vue3.createElementVNode)("view", {
                  class: (0, import_vue3.normalizeClass)([{ "left-win-active": $props.leftWinActive === item.url && $props.hasLeftWin }, "uni-panel-h"]),
                  onClick: ($event) => $options.goDetailPage(item.url)
                }, [
                  (0, import_vue3.createElementVNode)(
                    "u-text",
                    { class: "uni-panel-text" },
                    (0, import_vue3.toDisplayString)(item.name),
                    1
                    /* TEXT */
                  ),
                  (0, import_vue3.createElementVNode)("u-text", { class: "uni-panel-icon uni-icon" }, "\uE470")
                ], 10, ["onClick"])
              ],
              2
              /* CLASS */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  var extUI = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_0]], ["__file", "E:/workspace/HelloUniApp/pages/tabBar/extUI/extUI.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/tabBar/extUI/extUI";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    extUI.mpType = "page";
    const app = Vue.createPageApp(extUI, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...extUI.styles || []]));
    app.mount("#root");
  }
})();
