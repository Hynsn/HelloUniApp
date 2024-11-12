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

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/u-link.js
  var import_vue = __toESM(require_vue());

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
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-text", {
      style: { "text-decoration": "underline" },
      href: $props.href,
      onClick: _cache[0] || (_cache[0] = (...args) => $options.openURL && $options.openURL(...args)),
      inWhiteList: $props.inWhiteList
    }, (0, import_vue.toDisplayString)($props.text), 9, ["href", "inWhiteList"]);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/workspace/HelloUniApp/components/u-link/u-link.vue"]]);

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/tabBar/template/template.js
  var import_vue3 = __toESM(require_vue());

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/uni-app.es.js
  var import_vue2 = __toESM(require_vue());
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/tabBar/template/template.js
  var _imports_0 = "/static/templateIndex.png";
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
          "ucharts",
          "nav-city-dropdown"
        ],
        list: [
          {
            id: "navbar",
            name: "\u9876\u90E8\u539F\u751F\u5BFC\u822A\u6807\u9898\u680F",
            open: false,
            pages: [
              {
                name: "\u5BFC\u822A\u680F\u5E26\u81EA\u5B9A\u4E49\u6309\u94AE",
                url: "nav-button"
              },
              {
                name: "\u5BFC\u822A\u680F\u5E26\u7EA2\u70B9\u548C\u89D2\u6807",
                url: "nav-dot"
              },
              {
                name: "\u5BFC\u822A\u680F\u5E26\u57CE\u5E02\u9009\u62E9",
                url: "nav-city-dropdown"
              },
              {
                name: "\u5BFC\u822A\u680F\u5E26\u641C\u7D22\u6846",
                url: "nav-search-input"
              },
              {
                name: "\u900F\u660E\u6E10\u53D8\u6837\u5F0F",
                url: "nav-transparent"
              },
              {
                name: "\u5BFC\u822A\u680F\u5E26\u56FE\u7247",
                url: "nav-image"
              }
            ]
          },
          {
            name: "\u9876\u90E8\u9009\u9879\u5361",
            url: "tabbar"
          },
          {
            name: "\u7EC4\u4EF6\u901A\u8BAF",
            url: "component-communication"
          },
          // {
          // 	name: 'uCharts 图表',
          // 	url: 'ucharts'
          // },
          {
            name: "\u5217\u8868\u5230\u8BE6\u60C5\u793A\u4F8B",
            url: "list2detail-list"
          },
          {
            name: "swiper-list",
            url: "swiper-list-nvue"
          },
          {
            name: "GlobalData\u548Cvuex",
            url: "global"
          },
          {
            name: "\u95EE\u9898\u53CD\u9988",
            url: "/platforms/app-plus/feedback/feedback"
          },
          {
            name: "\u6253\u5F00\u5916\u90E8\u5E94\u7528",
            url: "scheme"
          }
          // {
          // 	name: '微信自定义组件示例（vant ui）',
          // 	url: 'vant-button'
          // }
        ]
      };
    },
    onShareAppMessage() {
      return {
        title: "\u6B22\u8FCE\u4F53\u9A8Cuni-app",
        path: "/pages/tabBar/template/template"
      };
    },
    onNavigationBarButtonTap(e) {
      uni.navigateTo({
        url: "/pages/about/about"
      });
    },
    methods: {
      triggerCollapse(e, id) {
        if (!this.list[e].pages) {
          this.goDetailPage(this.list[e].url);
          return;
        }
        for (var i = 0; i < this.list.length; ++i) {
          if (e === i) {
            this.list[i].open = !this.list[i].open;
          } else {
            this.list[i].open = false;
          }
        }
      },
      goDetailPage(e) {
        let path = e.url ? e.url : e;
        let url = ~path.indexOf("platform") ? path : "/pages/template/" + path + "/" + path;
        if (this.hasLeftWin) {
          uni.reLaunch({
            url
          });
        } else {
          uni.navigateTo({
            url
          });
        }
        return false;
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
          (0, import_vue3.createElementVNode)("u-text", { class: "hello-text" }, "\u4EE5\u4E0B\u662F\u90E8\u5206\u6A21\u677F\u793A\u4F8B\uFF0C\u66F4\u591A\u6A21\u677F\u89C1\u63D2\u4EF6\u5E02\u573A\uFF1A"),
          (0, import_vue3.createVNode)(_component_u_link, {
            class: "hello-link",
            href: "https://ext.dcloud.net.cn",
            text: "https://ext.dcloud.net.cn",
            inWhiteList: true
          }, null, 8, ["text"])
        ])) : (0, import_vue3.createCommentVNode)("v-if", true),
        ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
          import_vue3.Fragment,
          null,
          (0, import_vue3.renderList)($data.list, (item, index) => {
            return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
              "view",
              {
                class: (0, import_vue3.normalizeClass)([{ "pc-hide": $data.hideList.indexOf(item.url) !== -1 && $props.hasLeftWin }, "uni-panel"]),
                key: item.id
              },
              [
                (0, import_vue3.createElementVNode)("view", {
                  class: (0, import_vue3.normalizeClass)([{ "left-win-active": $props.leftWinActive === item.url && $props.hasLeftWin, "uni-panel-h-on": item.open }, "uni-panel-h"]),
                  onClick: ($event) => $options.triggerCollapse(index, item.id)
                }, [
                  (0, import_vue3.createElementVNode)(
                    "u-text",
                    { class: "uni-panel-text" },
                    (0, import_vue3.toDisplayString)(item.name),
                    1
                    /* TEXT */
                  ),
                  (0, import_vue3.createElementVNode)(
                    "u-text",
                    {
                      class: (0, import_vue3.normalizeClass)(["uni-panel-icon uni-icon", item.open ? "uni-panel-icon-on" : ""])
                    },
                    (0, import_vue3.toDisplayString)(item.pages ? "\uE581" : "\uE470"),
                    3
                    /* TEXT, CLASS */
                  )
                ], 10, ["onClick"]),
                item.open ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
                  key: 0,
                  class: "uni-panel-c"
                }, [
                  ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
                    import_vue3.Fragment,
                    null,
                    (0, import_vue3.renderList)(item.pages, (item2, key) => {
                      return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
                        class: (0, import_vue3.normalizeClass)([{ "left-win-active": $props.leftWinActive === item2.url && $props.hasLeftWin, "pc-hide": $data.hideList.indexOf(item2.url) !== -1 && $props.hasLeftWin }, "uni-navigate-item"]),
                        key,
                        onClick: ($event) => $options.goDetailPage(item2)
                      }, [
                        (0, import_vue3.createElementVNode)(
                          "u-text",
                          { class: "uni-navigate-text" },
                          (0, import_vue3.toDisplayString)(item2.name ? item2.name : item2),
                          1
                          /* TEXT */
                        ),
                        (0, import_vue3.createElementVNode)("u-text", { class: "uni-navigate-icon uni-icon" }, "\uE470")
                      ], 10, ["onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : (0, import_vue3.createCommentVNode)("v-if", true)
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
  var template = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_0]], ["__file", "E:/workspace/HelloUniApp/pages/tabBar/template/template.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/tabBar/template/template";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    template.mpType = "page";
    const app = Vue.createPageApp(template, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...template.styles || []]));
    app.mount("#root");
  }
})();
