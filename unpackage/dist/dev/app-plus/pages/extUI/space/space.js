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
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a2, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a2, prop, b2[prop]);
      }
    return a2;
  };
  var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
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
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e2) {
          reject(e2);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e2) {
          reject(e2);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/uni-card.js
  var import_vue = __toESM(require_vue());

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/uni-card.js
  var _style_0 = { "uni-card": { "": { "marginTop": 10, "marginRight": 10, "marginBottom": 10, "marginLeft": 10, "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "borderRadius": 4, "overflow": "hidden", "fontFamily": "Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif", "backgroundColor": "#ffffff", "flex": 1 } }, "uni-card__cover": { ".uni-card ": { "position": "relative", "marginTop": 10, "flexDirection": "row", "overflow": "hidden", "borderRadius": 4 } }, "uni-card__cover-image": { ".uni-card .uni-card__cover ": { "flex": 1 } }, "uni-card__header": { ".uni-card ": { "display": "flex", "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#EBEEF5", "flexDirection": "row", "alignItems": "center", "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "overflow": "hidden" } }, "uni-card__header-box": { ".uni-card .uni-card__header ": { "flex": 1, "flexDirection": "row", "alignItems": "center", "overflow": "hidden" } }, "uni-card__header-avatar": { ".uni-card .uni-card__header ": { "width": 40, "height": 40, "overflow": "hidden", "borderRadius": 5, "marginRight": 10 } }, "uni-card__header-avatar-image": { ".uni-card .uni-card__header .uni-card__header-avatar ": { "flex": 1, "width": 40, "height": 40 } }, "uni-card__header-content": { ".uni-card .uni-card__header ": { "flexDirection": "column", "justifyContent": "center", "flex": 1, "overflow": "hidden" } }, "uni-card__header-content-title": { ".uni-card .uni-card__header .uni-card__header-content ": { "fontSize": 15, "color": "#3a3a3a" } }, "uni-card__header-content-subtitle": { ".uni-card .uni-card__header .uni-card__header-content ": { "fontSize": 12, "marginTop": 5, "color": "#909399" } }, "uni-card__header-extra": { ".uni-card .uni-card__header ": { "lineHeight": 12 } }, "uni-card__header-extra-text": { ".uni-card .uni-card__header .uni-card__header-extra ": { "fontSize": 12, "color": "#909399" } }, "uni-card__content": { ".uni-card ": { "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "fontSize": 14, "color": "#6a6a6a", "lineHeight": 22 } }, "uni-card__actions": { ".uni-card ": { "fontSize": 12 } }, "uni-card--border": { "": { "borderWidth": 1, "borderStyle": "solid", "borderColor": "#EBEEF5" } }, "uni-card--shadow": { "": { "position": "relative" } }, "uni-card--full": { "": { "marginTop": 0, "marginRight": 0, "marginBottom": 0, "marginLeft": 0, "borderLeftWidth": 0, "borderRadius": 0 } }, "uni-ellipsis": { "": { "lines": 1 } } };
  var _sfc_main = {
    name: "UniCard",
    emits: ["click"],
    props: {
      title: {
        type: String,
        default: ""
      },
      subTitle: {
        type: String,
        default: ""
      },
      padding: {
        type: String,
        default: "10px"
      },
      margin: {
        type: String,
        default: "15px"
      },
      spacing: {
        type: String,
        default: "0 10px"
      },
      extra: {
        type: String,
        default: ""
      },
      cover: {
        type: String,
        default: ""
      },
      thumbnail: {
        type: String,
        default: ""
      },
      isFull: {
        // 内容区域是否通栏
        type: Boolean,
        default: false
      },
      isShadow: {
        // 是否开启阴影
        type: Boolean,
        default: true
      },
      shadow: {
        type: String,
        default: "0px 0px 3px 1px rgba(0, 0, 0, 0.08)"
      },
      border: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      onClick(type) {
        this.$emit("click", type);
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "view",
      {
        class: (0, import_vue.normalizeClass)(["uni-card", { "uni-card--full": $props.isFull, "uni-card--shadow": $props.isShadow, "uni-card--border": $props.border }]),
        style: (0, import_vue.normalizeStyle)({ "margin": $props.isFull ? 0 : $props.margin, "padding": $props.spacing, "box-shadow": $props.isShadow ? $props.shadow : "" }),
        renderWhole: true
      },
      [
        (0, import_vue.createCommentVNode)(" \u5C01\u9762 "),
        (0, import_vue.renderSlot)(_ctx.$slots, "cover", {}, () => [
          $props.cover ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
            key: 0,
            class: "uni-card__cover"
          }, [
            (0, import_vue.createElementVNode)("u-image", {
              class: "uni-card__cover-image",
              mode: "widthFix",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick("cover")),
              src: $props.cover
            }, null, 8, ["src"])
          ])) : (0, import_vue.createCommentVNode)("v-if", true)
        ]),
        (0, import_vue.renderSlot)(_ctx.$slots, "title", {}, () => [
          $props.title || $props.extra ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
            key: 0,
            class: "uni-card__header"
          }, [
            (0, import_vue.createCommentVNode)(" \u5361\u7247\u6807\u9898 "),
            (0, import_vue.createElementVNode)("view", {
              class: "uni-card__header-box",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.onClick("title"))
            }, [
              $props.thumbnail ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
                key: 0,
                class: "uni-card__header-avatar"
              }, [
                (0, import_vue.createElementVNode)("u-image", {
                  class: "uni-card__header-avatar-image",
                  src: $props.thumbnail,
                  mode: "aspectFit"
                }, null, 8, ["src"])
              ])) : (0, import_vue.createCommentVNode)("v-if", true),
              (0, import_vue.createElementVNode)("view", { class: "uni-card__header-content" }, [
                (0, import_vue.createElementVNode)(
                  "u-text",
                  { class: "uni-card__header-content-title uni-ellipsis" },
                  (0, import_vue.toDisplayString)($props.title),
                  1
                  /* TEXT */
                ),
                $props.title && $props.subTitle ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                  "u-text",
                  {
                    key: 0,
                    class: "uni-card__header-content-subtitle uni-ellipsis"
                  },
                  (0, import_vue.toDisplayString)($props.subTitle),
                  1
                  /* TEXT */
                )) : (0, import_vue.createCommentVNode)("v-if", true)
              ])
            ]),
            (0, import_vue.createElementVNode)("view", {
              class: "uni-card__header-extra",
              onClick: _cache[2] || (_cache[2] = ($event) => $options.onClick("extra"))
            }, [
              (0, import_vue.createElementVNode)(
                "u-text",
                { class: "uni-card__header-extra-text" },
                (0, import_vue.toDisplayString)($props.extra),
                1
                /* TEXT */
              )
            ])
          ])) : (0, import_vue.createCommentVNode)("v-if", true)
        ]),
        (0, import_vue.createCommentVNode)(" \u5361\u7247\u5185\u5BB9 "),
        (0, import_vue.createElementVNode)(
          "view",
          {
            class: "uni-card__content",
            style: (0, import_vue.normalizeStyle)({ padding: $props.padding }),
            onClick: _cache[3] || (_cache[3] = ($event) => $options.onClick("content"))
          },
          [
            (0, import_vue.renderSlot)(_ctx.$slots, "default")
          ],
          4
          /* STYLE */
        ),
        (0, import_vue.createElementVNode)("view", {
          class: "uni-card__actions",
          onClick: _cache[4] || (_cache[4] = ($event) => $options.onClick("actions"))
        }, [
          (0, import_vue.renderSlot)(_ctx.$slots, "actions")
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/workspace/HelloUniApp/uni_modules/uni-card/components/uni-card/uni-card.vue"]]);

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/extUI/space/space.js
  var import_vue7 = __toESM(require_vue());

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/uni-app.es.js
  var import_vue2 = __toESM(require_vue());
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/uni-cloud.es.js
  var import_vue3 = __toESM(require_vue());
  var leftWindow = {
    path: "windows/left-window.vue",
    style: {
      width: "350px"
    }
  };
  var topWindow = {
    path: "windows/top-window.vue",
    style: {
      height: "60px"
    }
  };
  var pages = [
    {
      path: "pages/tabBar/component/component",
      style: {
        navigationBarTitleText: "\u5185\u7F6E\u7EC4\u4EF6",
        "app-plus": {
          bounce: "vertical",
          titleNView: {
            buttons: [
              {
                text: "\uE534",
                fontSrc: "/static/uni.ttf",
                fontSize: "22px",
                color: "#FFFFFF"
              }
            ]
          }
        }
      }
    },
    {
      path: "pages/tabBar/API/API",
      style: {
        navigationBarTitleText: "\u63A5\u53E3",
        "app-plus": {
          titleNView: {
            buttons: [
              {
                text: "\uE534",
                fontSrc: "/static/uni.ttf",
                fontSize: "22px",
                color: "#FFFFFF"
              }
            ]
          }
        }
      }
    },
    {
      path: "pages/tabBar/template/template",
      style: {
        navigationBarTitleText: "\u6A21\u7248",
        "app-plus": {
          titleNView: {
            buttons: [
              {
                text: "\uE534",
                fontSrc: "/static/uni.ttf",
                fontSize: "22px",
                color: "#FFFFFF"
              }
            ]
          }
        }
      }
    },
    {
      path: "pages/tabBar/extUI/extUI",
      style: {
        navigationBarTitleText: "\u6269\u5C55\u7EC4\u4EF6",
        "app-plus": {
          titleNView: {
            buttons: [
              {
                text: "\uE534",
                fontSrc: "/static/uni.ttf",
                fontSize: "22px",
                color: "#FFFFFF"
              }
            ]
          }
        }
      }
    },
    {
      path: "pages/component/view/view",
      style: {
        navigationBarTitleText: "view"
      }
    },
    {
      path: "pages/component/scroll-view/scroll-view",
      style: {
        navigationBarTitleText: "scroll-view"
      }
    },
    {
      path: "pages/component/swiper/swiper",
      style: {
        navigationBarTitleText: "swiper"
      }
    },
    {
      path: "pages/component/cover-view/cover-view",
      style: {
        navigationBarTitleText: "cover-view"
      }
    },
    {
      path: "pages/component/movable-view/movable-view",
      style: {
        navigationBarTitleText: "movable-view"
      }
    },
    {
      path: "pages/component/text/text",
      style: {
        navigationBarTitleText: "text"
      }
    },
    {
      path: "pages/component/rich-text/rich-text",
      style: {
        navigationBarTitleText: "rich-text"
      }
    },
    {
      path: "pages/component/progress/progress",
      style: {
        navigationBarTitleText: "progress"
      }
    },
    {
      path: "pages/component/button/button",
      style: {
        navigationBarTitleText: "button"
      }
    },
    {
      path: "pages/component/checkbox/checkbox",
      style: {
        navigationBarTitleText: "checkbox"
      }
    },
    {
      path: "pages/component/form/form",
      style: {
        navigationBarTitleText: "form"
      }
    },
    {
      path: "pages/component/input/input",
      style: {
        navigationBarTitleText: "input",
        "app-plus": {
          softinputNavBar: "none"
        }
      }
    },
    {
      path: "pages/component/label/label",
      style: {
        navigationBarTitleText: "label"
      }
    },
    {
      path: "pages/component/picker/picker",
      style: {
        navigationBarTitleText: "picker"
      }
    },
    {
      path: "pages/component/picker-view/picker-view",
      style: {
        navigationBarTitleText: "picker-view"
      }
    },
    {
      path: "pages/component/radio/radio",
      style: {
        navigationBarTitleText: "radio"
      }
    },
    {
      path: "pages/component/slider/slider",
      style: {
        navigationBarTitleText: "slider"
      }
    },
    {
      path: "pages/component/switch/switch",
      style: {
        navigationBarTitleText: "switch"
      }
    },
    {
      path: "pages/component/textarea/textarea",
      style: {
        navigationBarTitleText: "textarea"
      }
    },
    {
      path: "pages/component/editor/editor",
      style: {
        navigationBarTitleText: "editor",
        "app-plus": {
          softinputMode: "adjustResize"
        }
      }
    },
    {
      path: "pages/component/navigator/navigator",
      style: {
        navigationBarTitleText: "navigator"
      }
    },
    {
      path: "pages/component/navigator/navigate/navigate",
      style: {
        navigationBarTitleText: "navigatePage"
      }
    },
    {
      path: "pages/component/navigator/redirect/redirect",
      style: {
        navigationBarTitleText: "redirectPage"
      }
    },
    {
      path: "pages/component/image/image",
      style: {
        navigationBarTitleText: "image"
      }
    },
    {
      path: "pages/component/video/video",
      style: {
        navigationBarTitleText: "video"
      }
    },
    {
      path: "pages/component/map/map",
      style: {
        navigationBarTitleText: "map"
      }
    },
    {
      path: "pages/component/canvas/canvas",
      style: {
        navigationBarTitleText: "canvas"
      }
    },
    {
      path: "pages/component/web-view/web-view",
      style: {
        navigationBarTitleText: "web-view"
      }
    },
    {
      path: "pages/component/ad/ad",
      style: {
        navigationBarTitleText: "AD"
      }
    },
    {
      path: "pages/component/web-view-local/web-view-local",
      style: {}
    },
    {
      path: "platforms/app-plus/speech/speech",
      style: {
        navigationBarTitleText: "\u8BED\u97F3\u8BC6\u522B"
      }
    },
    {
      path: "platforms/app-plus/orientation/orientation",
      style: {
        navigationBarTitleText: "\u65B9\u5411\u4F20\u611F\u5668"
      }
    },
    {
      path: "platforms/app-plus/proximity/proximity",
      style: {
        navigationBarTitleText: "\u8DDD\u79BB\u4F20\u611F\u5668"
      }
    },
    {
      path: "platforms/app-plus/push/push",
      style: {
        navigationBarTitleText: "\u63A8\u9001"
      }
    },
    {
      path: "platforms/app-plus/shake/shake",
      style: {
        navigationBarTitleText: "\u6447\u4E00\u6447"
      }
    },
    {
      path: "pages/about/about",
      style: {
        navigationBarTitleText: "\u5173\u4E8E"
      }
    },
    {
      path: "platforms/app-plus/feedback/feedback",
      style: {
        navigationBarTitleText: "\u95EE\u9898\u53CD\u9988"
      }
    },
    {
      path: "uni_modules/uni-upgrade-center-app/pages/upgrade-popup",
      style: {
        "app-plus": {
          animationDuration: 200,
          animationType: "fade-in",
          background: "transparent",
          backgroundColorTop: "transparent",
          popGesture: "none",
          scrollIndicator: false,
          titleNView: false
        },
        disableScroll: true
      }
    }
  ];
  var subPackages = [
    {
      root: "pages/API",
      pages: [
        {
          path: "login/login",
          style: {
            navigationBarTitleText: "\u6388\u6743\u767B\u5F55"
          }
        },
        {
          path: "subnvue/subnvue",
          style: {
            navigationBarTitleText: "\u539F\u751F\u5B50\u7A97\u4F53",
            "app-plus": {
              subNVues: [
                {
                  id: "drawer",
                  path: "subnvue/subnvue/drawer",
                  type: "popup",
                  style: {
                    width: "50%"
                  }
                },
                {
                  id: "popup",
                  path: "subnvue/subnvue/popup",
                  type: "popup",
                  style: {
                    margin: "auto",
                    width: "80%",
                    height: "600rpx"
                  }
                },
                {
                  id: "video_mask",
                  path: "subnvue/subnvue/video-mask",
                  style: {
                    position: "absolute",
                    bottom: "30px",
                    left: "0",
                    width: "230px",
                    height: "110px",
                    background: "transparent"
                  }
                }
              ]
            }
          }
        },
        {
          path: "get-user-info/get-user-info",
          style: {
            navigationBarTitleText: "\u83B7\u53D6\u7528\u6237\u4FE1\u606F"
          }
        },
        {
          path: "request-payment/request-payment",
          style: {
            navigationBarTitleText: "\u53D1\u8D77\u652F\u4ED8"
          }
        },
        {
          path: "share/share",
          style: {
            navigationBarTitleText: "\u5206\u4EAB"
          }
        },
        {
          path: "set-navigation-bar-title/set-navigation-bar-title",
          style: {
            navigationBarTitleText: "\u8BBE\u7F6E\u754C\u9762\u6807\u9898"
          }
        },
        {
          path: "show-loading/show-loading",
          style: {
            navigationBarTitleText: "\u52A0\u8F7D\u63D0\u793A\u6846"
          }
        },
        {
          path: "navigator/navigator",
          style: {
            navigationBarTitleText: "\u9875\u9762\u8DF3\u8F6C"
          }
        },
        {
          path: "navigator/new-page/new-vue-page-1",
          style: {
            navigationBarTitleText: "\u65B0VUE\u9875\u97621"
          }
        },
        {
          path: "navigator/new-page/new-vue-page-2",
          style: {
            navigationBarTitleText: "\u65B0VUE\u9875\u97622"
          }
        },
        {
          path: "pull-down-refresh/pull-down-refresh",
          style: {
            navigationBarTitleText: "\u4E0B\u62C9\u5237\u65B0",
            enablePullDownRefresh: true
          }
        },
        {
          path: "animation/animation",
          style: {
            navigationBarTitleText: "\u521B\u5EFA\u52A8\u753B"
          }
        },
        {
          path: "get-node-info/get-node-info",
          style: {
            navigationBarTitleText: "\u8282\u70B9\u4FE1\u606F"
          }
        },
        {
          path: "intersection-observer/intersection-observer",
          style: {
            navigationBarTitleText: "\u8282\u70B9\u5E03\u5C40\u76F8\u4EA4\u72B6\u6001"
          }
        },
        {
          path: "canvas/canvas",
          style: {
            navigationBarTitleText: "\u521B\u5EFA\u7ED8\u753B"
          }
        },
        {
          path: "action-sheet/action-sheet",
          style: {
            navigationBarTitleText: "\u64CD\u4F5C\u83DC\u5355"
          }
        },
        {
          path: "modal/modal",
          style: {
            navigationBarTitleText: "\u6A21\u6001\u5F39\u7A97"
          }
        },
        {
          path: "toast/toast",
          style: {
            navigationBarTitleText: "\u6D88\u606F\u63D0\u793A\u6846"
          }
        },
        {
          path: "get-network-type/get-network-type",
          style: {
            navigationBarTitleText: "\u83B7\u53D6\u8BBE\u5907\u7F51\u7EDC\u72B6\u6001"
          }
        },
        {
          path: "get-system-info/get-system-info",
          style: {
            navigationBarTitleText: "\u83B7\u53D6\u8BBE\u5907\u7CFB\u7EDF\u4FE1\u606F"
          }
        },
        {
          path: "add-phone-contact/add-phone-contact",
          style: {
            navigationBarTitleText: "\u6DFB\u52A0\u624B\u673A\u8054\u7CFB\u4EBA"
          }
        },
        {
          path: "on-accelerometer-change/on-accelerometer-change",
          style: {
            navigationBarTitleText: "\u76D1\u542C\u52A0\u901F\u5EA6\u8BA1\u6570\u636E"
          }
        },
        {
          path: "on-compass-change/on-compass-change",
          style: {
            navigationBarTitleText: "\u76D1\u542C\u7F57\u76D8\u6570\u636E"
          }
        },
        {
          path: "make-phone-call/make-phone-call",
          style: {
            navigationBarTitleText: "\u6253\u7535\u8BDD"
          }
        },
        {
          path: "scan-code/scan-code",
          style: {
            navigationBarTitleText: "\u626B\u7801"
          }
        },
        {
          path: "clipboard/clipboard",
          style: {
            navigationBarTitleText: "\u526A\u8D34\u677F"
          }
        },
        {
          path: "request/request",
          style: {
            navigationBarTitleText: "\u7F51\u7EDC\u8BF7\u6C42"
          }
        },
        {
          path: "upload-file/upload-file",
          style: {
            navigationBarTitleText: "\u4E0A\u4F20\u6587\u4EF6"
          }
        },
        {
          path: "download-file/download-file",
          style: {
            navigationBarTitleText: "\u4E0B\u8F7D\u6587\u4EF6"
          }
        },
        {
          path: "image/image",
          style: {
            navigationBarTitleText: "\u56FE\u7247"
          }
        },
        {
          path: "voice/voice",
          style: {
            navigationBarTitleText: "\u5F55\u97F3"
          }
        },
        {
          path: "inner-audio/inner-audio",
          style: {
            navigationBarTitleText: "\u97F3\u9891"
          }
        },
        {
          path: "background-audio/background-audio",
          style: {
            navigationBarTitleText: "\u80CC\u666F\u97F3\u9891"
          }
        },
        {
          path: "video/video",
          style: {
            navigationBarTitleText: "\u89C6\u9891"
          }
        },
        {
          path: "file/file",
          style: {
            navigationBarTitleText: "\u6587\u4EF6"
          }
        },
        {
          path: "map/map",
          style: {
            navigationBarTitleText: "map"
          }
        },
        {
          path: "map-search/map-search",
          style: {
            navigationBarTitleText: "map search"
          }
        },
        {
          path: "get-location/get-location",
          style: {
            navigationBarTitleText: "\u83B7\u53D6\u4F4D\u7F6E"
          }
        },
        {
          path: "open-location/open-location",
          style: {
            navigationBarTitleText: "\u67E5\u770B\u4F4D\u7F6E"
          }
        },
        {
          path: "choose-location/choose-location",
          style: {
            navigationBarTitleText: "\u4F7F\u7528\u5730\u56FE\u9009\u62E9\u4F4D\u7F6E"
          }
        },
        {
          path: "storage/storage",
          style: {
            navigationBarTitleText: "\u6570\u636E\u5B58\u50A8"
          }
        },
        {
          path: "sqlite/sqlite",
          style: {
            navigationBarTitleText: "SQLite"
          }
        },
        {
          path: "rewarded-video-ad/rewarded-video-ad",
          style: {
            navigationBarTitleText: "\u6FC0\u52B1\u89C6\u9891\u5E7F\u544A"
          }
        },
        {
          path: "full-screen-video-ad/full-screen-video-ad",
          style: {
            navigationBarTitleText: "\u5168\u5C4F\u89C6\u9891\u5E7F\u544A"
          }
        },
        {
          path: "brightness/brightness",
          style: {
            navigationBarTitleText: "\u5C4F\u5E55\u4EAE\u5EA6"
          }
        },
        {
          path: "save-media/save-media",
          style: {
            navigationBarTitleText: "\u4FDD\u5B58\u5A92\u4F53\u5230\u672C\u5730"
          }
        },
        {
          path: "bluetooth/bluetooth",
          style: {
            navigationBarTitleText: "\u84DD\u7259"
          }
        },
        {
          path: "soter/soter",
          style: {
            navigationBarTitleText: "\u751F\u7269\u8BA4\u8BC1"
          }
        },
        {
          path: "ibeacon/ibeacon",
          style: {
            navigationBarTitleText: "iBeacon"
          }
        },
        {
          path: "vibrate/vibrate",
          style: {
            navigationBarTitleText: "\u9707\u52A8"
          }
        },
        {
          path: "websocket-socketTask/websocket-socketTask",
          style: {
            navigationBarTitleText: "websocket-socketTask"
          }
        },
        {
          path: "websocket-global/websocket-global",
          style: {
            navigationBarTitleText: "websocket-global"
          }
        }
      ]
    },
    {
      root: "pages/extUI",
      pages: [
        {
          path: "forms/forms",
          style: {
            navigationBarTitleText: "Form \u8868\u5355"
          }
        },
        {
          path: "group/group",
          style: {
            navigationBarTitleText: "Group \u5206\u7EC4"
          }
        },
        {
          path: "badge/badge",
          style: {
            navigationBarTitleText: "Badge \u6570\u5B57\u89D2\u6807"
          }
        },
        {
          path: "breadcrumb/breadcrumb",
          style: {
            navigationBarTitleText: "Breadcrumb \u9762\u5305\u5C51"
          }
        },
        {
          path: "countdown/countdown",
          style: {
            navigationBarTitleText: "Countdown \u5012\u8BA1\u65F6"
          }
        },
        {
          path: "drawer/drawer",
          style: {
            navigationBarTitleText: "Drawer \u62BD\u5C49"
          }
        },
        {
          path: "icons/icons",
          style: {
            navigationBarTitleText: "Icons \u56FE\u6807"
          }
        },
        {
          path: "load-more/load-more",
          style: {
            navigationBarTitleText: "LoadMore \u52A0\u8F7D\u66F4\u591A"
          }
        },
        {
          path: "nav-bar/nav-bar",
          style: {
            navigationBarTitleText: "NavBar \u5BFC\u822A\u680F",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            "app-plus": {
              titleNView: false,
              bounce: "none",
              pullToRefresh: {
                style: "circle",
                offset: "70px"
              }
            }
          }
        },
        {
          path: "number-box/number-box",
          style: {
            navigationBarTitleText: "NumberBox \u6570\u5B57\u8F93\u5165\u6846"
          }
        },
        {
          path: "popup/popup",
          style: {
            navigationBarTitleText: "Popup \u5F39\u51FA\u5C42",
            "app-plus": {
              softinputMode: "adjustResize"
            }
          }
        },
        {
          path: "segmented-control/segmented-control",
          style: {
            navigationBarTitleText: "SegmentedControl \u5206\u6BB5\u5668"
          }
        },
        {
          path: "tag/tag",
          style: {
            navigationBarTitleText: "Tag \u6807\u7B7E"
          }
        },
        {
          path: "list/list",
          style: {
            navigationBarTitleText: "List \u5217\u8868"
          }
        },
        {
          path: "card/card",
          style: {
            navigationBarTitleText: "Card \u5361\u7247"
          }
        },
        {
          path: "collapse/collapse",
          style: {
            navigationBarTitleText: "Collapse \u6298\u53E0\u9762\u677F"
          }
        },
        {
          path: "pagination/pagination",
          style: {
            navigationBarTitleText: "Pagination \u5206\u9875\u5668"
          }
        },
        {
          path: "swiper-dot/swiper-dot",
          style: {
            navigationBarTitleText: "SwiperDot \u8F6E\u64AD\u56FE\u6307\u793A\u70B9",
            "mp-baidu": {
              disableSwipeBack: true
            }
          }
        },
        {
          path: "grid/grid",
          style: {
            navigationBarTitleText: "Grid \u5BAB\u683C"
          }
        },
        {
          path: "rate/rate",
          style: {
            navigationBarTitleText: "Rate \u8BC4\u5206"
          }
        },
        {
          path: "steps/steps",
          style: {
            navigationBarTitleText: "Steps \u6B65\u9AA4\u6761"
          }
        },
        {
          path: "notice-bar/notice-bar",
          style: {
            navigationBarTitleText: "NoticeBar \u901A\u544A\u680F"
          }
        },
        {
          path: "swipe-action/swipe-action",
          style: {
            navigationBarTitleText: "SwipeAction \u6ED1\u52A8\u64CD\u4F5C",
            "app-plus": {
              bounce: "none"
            }
          }
        },
        {
          path: "search-bar/search-bar",
          style: {
            navigationBarTitleText: "SearchBar \u641C\u7D22\u680F"
          }
        },
        {
          path: "calendar/calendar",
          style: {
            navigationBarTitleText: "Calendar \u65E5\u5386"
          }
        },
        {
          path: "indexed-list/indexed-list",
          style: {
            navigationBarTitleText: "IndexedList \u7D22\u5F15\u5217\u8868",
            "mp-weixin": {
              disableScroll: true
            },
            "app-plus": {
              bounce: "none"
            },
            "mp-alipay": {
              allowsBounceVertical: "NO"
            },
            "mp-baidu": {
              disableScroll: true
            }
          }
        },
        {
          path: "fab/fab",
          style: {
            navigationBarTitleText: "Fab \u60AC\u6D6E\u6309\u94AE"
          }
        },
        {
          path: "fav/fav",
          style: {
            navigationBarTitleText: "Fav \u6536\u85CF\u6309\u94AE"
          }
        },
        {
          path: "goods-nav/goods-nav",
          style: {
            navigationBarTitleText: "GoodsNav \u5546\u54C1\u5BFC\u822A"
          }
        },
        {
          path: "section/section",
          style: {
            navigationBarTitleText: "Section \u6807\u9898\u680F"
          }
        },
        {
          path: "transition/transition",
          style: {
            navigationBarTitleText: "Transition \u8FC7\u6E21\u52A8\u753B"
          }
        },
        {
          path: "title/title",
          style: {
            navigationBarTitleText: "Title \u7AE0\u8282\u6807\u9898"
          }
        },
        {
          path: "tooltip/tooltip",
          style: {
            navigationBarTitleText: "Tooltip \u6587\u5B57\u63D0\u793A"
          }
        },
        {
          path: "link/link",
          style: {
            navigationBarTitleText: "Link \u94FE\u63A5"
          }
        },
        {
          path: "combox/combox",
          style: {
            navigationBarTitleText: "Combox \u7EC4\u5408\u6846"
          }
        },
        {
          path: "list/chat",
          style: {}
        },
        {
          path: "table/table",
          style: {
            navigationBarTitleText: "",
            enablePullDownRefresh: false
          }
        },
        {
          path: "dateformat/dateformat",
          style: {
            navigationBarTitleText: "Dateformat \u65E5\u671F\u683C\u5F0F\u5316",
            enablePullDownRefresh: false
          }
        },
        {
          path: "data-checkbox/data-checkbox",
          style: {
            navigationBarTitleText: "DataCheckbox \u5355\u9009\u590D\u9009\u6846",
            enablePullDownRefresh: false
          }
        },
        {
          path: "easyinput/easyinput",
          style: {
            navigationBarTitleText: "Easyinput \u589E\u5F3A\u8F93\u5165\u6846",
            enablePullDownRefresh: false
          }
        },
        {
          path: "data-picker/data-picker",
          style: {
            navigationBarTitleText: "DataPicker \u7EA7\u8054\u9009\u62E9",
            enablePullDownRefresh: false
          }
        },
        {
          path: "data-select/data-select",
          style: {
            navigationBarTitleText: "DataSelect \u4E0B\u62C9\u6846",
            enablePullDownRefresh: false
          }
        },
        {
          path: "datetime-picker/datetime-picker",
          style: {
            navigationBarTitleText: "DatetimePicker \u65E5\u671F\u65F6\u95F4",
            enablePullDownRefresh: false
          }
        },
        {
          path: "row/row",
          style: {
            navigationBarTitleText: "Layout \u5E03\u5C40",
            enablePullDownRefresh: false
          }
        },
        {
          path: "file-picker/file-picker",
          style: {
            navigationBarTitleText: "FilePicker \u6587\u4EF6\u9009\u62E9\u4E0A\u4F20",
            enablePullDownRefresh: false
          }
        },
        {
          path: "space/space",
          style: {
            navigationBarTitleText: "\u95F4\u8DDD",
            enablePullDownRefresh: false
          }
        },
        {
          path: "font/font",
          style: {
            navigationBarTitleText: "\u5B57\u4F53",
            enablePullDownRefresh: false
          }
        },
        {
          path: "color/color",
          style: {
            navigationBarTitleText: "\u989C\u8272",
            enablePullDownRefresh: false
          }
        },
        {
          path: "radius/radius",
          style: {
            navigationBarTitleText: "\u5706\u89D2",
            enablePullDownRefresh: false
          }
        },
        {
          path: "button/button",
          style: {
            navigationBarTitleText: "",
            enablePullDownRefresh: false
          }
        }
      ]
    },
    {
      root: "pages/template",
      pages: [
        {
          path: "nav-default/nav-default",
          style: {
            navigationBarTitleText: "\u9ED8\u8BA4\u5BFC\u822A\u680F"
          }
        },
        {
          path: "component-communication/component-communication",
          style: {
            navigationBarTitleText: "\u7EC4\u4EF6\u901A\u8BAF"
          }
        },
        {
          path: "nav-transparent/nav-transparent",
          style: {
            navigationBarTitleText: "\u900F\u660E\u6E10\u53D8\u5BFC\u822A\u680F",
            transparentTitle: "auto"
          }
        },
        {
          path: "nav-button/nav-button",
          style: {
            navigationBarTitleText: "\u5BFC\u822A\u680F\u5E26\u81EA\u5B9A\u4E49\u6309\u94AE",
            "app-plus": {
              titleNView: {
                buttons: [
                  {
                    type: "share"
                  },
                  {
                    type: "favorite"
                  }
                ]
              }
            }
          }
        },
        {
          path: "nav-image/nav-image",
          style: {
            navigationBarBackgroundColor: "#FFFFFF",
            navigationBarTextStyle: "black",
            titleImage: "https://web-assets.dcloud.net.cn/unidoc/zh/logo1@2x.png"
          }
        },
        {
          path: "nav-city-dropdown/nav-city-dropdown",
          style: {
            navigationBarTitleText: "\u5BFC\u822A\u680F\u5E26\u57CE\u5E02\u9009\u62E9",
            "app-plus": {
              titleNView: {
                buttons: [
                  {
                    text: "\u5317\u4EAC\u5E02",
                    fontSize: "14",
                    select: true,
                    width: "auto"
                  }
                ]
              }
            }
          }
        },
        {
          path: "nav-dot/nav-dot",
          style: {
            navigationBarTitleText: "\u5BFC\u822A\u680F\u5E26\u7EA2\u70B9\u548C\u89D2\u6807",
            "app-plus": {
              titleNView: {
                buttons: [
                  {
                    text: "\u6D88\u606F",
                    fontSize: "14",
                    redDot: true
                  },
                  {
                    text: "\u5173\u6CE8",
                    fontSize: "14",
                    badgeText: "12"
                  }
                ]
              }
            }
          }
        },
        {
          path: "nav-search-input/nav-search-input",
          style: {
            navigationBarTitleText: "\u5BFC\u822A\u680F\u5E26\u641C\u7D22\u6846",
            "app-plus": {
              titleNView: {
                type: "transparent",
                titleColor: "#fff",
                backgroundColor: "#007AFF",
                buttons: [
                  {
                    fontSrc: "/static/uni.ttf",
                    text: "\uE537",
                    width: "40px",
                    fontSize: "28px",
                    color: "#fff",
                    background: "rgba(0,0,0,0)"
                  }
                ],
                searchInput: {
                  backgroundColor: "#fff",
                  borderRadius: "6px",
                  placeholder: "\u8BF7\u8F93\u5165\u5730\u5740 \u5982\uFF1A\u5927\u949F\u5BFA",
                  disabled: true
                }
              }
            }
          }
        },
        {
          path: "nav-search-input/detail/detail",
          style: {
            navigationBarTitleText: "\u641C\u7D22",
            "app-plus": {
              titleNView: {
                titleColor: "#fff",
                backgroundColor: "#007AFF",
                buttons: [
                  {
                    fontSrc: "/static/uni.ttf",
                    text: "\uE537",
                    width: "auto",
                    fontSize: "28px",
                    color: "#fff"
                  }
                ],
                searchInput: {
                  backgroundColor: "#fff",
                  borderRadius: "6px",
                  placeholder: "\u8BF7\u8F93\u5165\u5730\u5740 \u5982\uFF1A\u5927\u949F\u5BFA",
                  autoFocus: true
                }
              }
            }
          }
        },
        {
          path: "list2detail-list/list2detail-list",
          style: {
            navigationBarTitleText: "\u5217\u8868\u5230\u8BE6\u60C5\u793A\u4F8B",
            enablePullDownRefresh: true
          }
        },
        {
          path: "list2detail-detail/list2detail-detail",
          style: {
            navigationBarTitleText: "\u8BE6\u60C5",
            "app-plus": {
              titleNView: {
                type: "transparent",
                buttons: [
                  {
                    type: "share"
                  }
                ]
              }
            },
            h5: {
              titleNView: {
                type: "transparent",
                buttons: []
              }
            }
          }
        },
        {
          path: "tabbar/tabbar",
          style: {
            navigationBarTitleText: "\u53EF\u62D6\u52A8\u9876\u90E8\u9009\u9879\u5361"
          }
        },
        {
          path: "tabbar/detail/detail",
          style: {
            navigationBarTitleText: "\u8BE6\u60C5\u9875\u9762"
          }
        },
        {
          path: "swiper-vertical/swiper-vertical",
          style: {
            navigationBarTitleText: "\u4E0A\u4E0B\u6ED1\u52A8\u5207\u6362\u89C6\u9891",
            "app-plus": {
              titleNView: false
            }
          }
        },
        {
          path: "swiper-list/swiper-list",
          style: {
            navigationBarTitleText: "swiper-list"
          }
        },
        {
          path: "swiper-list-nvue/swiper-list-nvue",
          style: {
            navigationBarTitleText: "swiper-list"
          }
        },
        {
          path: "scheme/scheme",
          style: {
            navigationBarTitleText: "\u6253\u5F00\u5916\u90E8\u5E94\u7528"
          }
        },
        {
          path: "global/global",
          style: {
            navigationBarTitleText: "GlobalData\u548Cvuex"
          }
        }
      ]
    }
  ];
  var globalStyle = {
    pageOrientation: "portrait",
    navigationBarTitleText: "Hello uniapp",
    navigationBarTextStyle: "white",
    navigationBarBackgroundColor: "#007AFF",
    backgroundColor: "#F8F8F8",
    backgroundColorTop: "#F4F5F6",
    backgroundColorBottom: "#F4F5F6",
    "mp-360": {
      navigationStyle: "custom"
    },
    h5: {
      maxWidth: 1190,
      navigationBarTextStyle: "black",
      navigationBarBackgroundColor: "#F1F1F1"
    }
  };
  var tabBar = {
    color: "#7A7E83",
    selectedColor: "#007AFF",
    borderStyle: "black",
    backgroundColor: "#F8F8F8",
    list: [
      {
        pagePath: "pages/tabBar/component/component",
        iconPath: "static/component.png",
        selectedIconPath: "static/componentHL.png",
        text: "\u5185\u7F6E\u7EC4\u4EF6"
      },
      {
        pagePath: "pages/tabBar/API/API",
        iconPath: "static/api.png",
        selectedIconPath: "static/apiHL.png",
        text: "\u63A5\u53E3"
      },
      {
        pagePath: "pages/tabBar/extUI/extUI",
        iconPath: "static/extui.png",
        selectedIconPath: "static/extuiHL.png",
        text: "\u6269\u5C55\u7EC4\u4EF6"
      },
      {
        pagePath: "pages/tabBar/template/template",
        iconPath: "static/template.png",
        selectedIconPath: "static/templateHL.png",
        text: "\u6A21\u677F"
      }
    ]
  };
  var e = {
    leftWindow,
    topWindow,
    pages,
    subPackages,
    globalStyle,
    tabBar
  };
  var define_process_env_UNI_SECURE_NETWORK_CONFIG_default = [];
  function t(e2) {
    return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
  }
  function n(e2, t22, n2) {
    return e2(n2 = { path: t22, exports: {}, require: function(e3, t3) {
      return function() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t3 && n2.path);
    } }, n2.exports), n2.exports;
  }
  var s = n(function(e2, t22) {
    var n2;
    e2.exports = (n2 = n2 || function(e3, t3) {
      var n3 = Object.create || /* @__PURE__ */ function() {
        function e4() {
        }
        return function(t4) {
          var n4;
          return e4.prototype = t4, n4 = new e4(), e4.prototype = null, n4;
        };
      }(), s2 = {}, r2 = s2.lib = {}, i2 = r2.Base = { extend: function(e4) {
        var t4 = n3(this);
        return e4 && t4.mixIn(e4), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
          t4.$super.init.apply(this, arguments);
        }), t4.init.prototype = t4, t4.$super = this, t4;
      }, create: function() {
        var e4 = this.extend();
        return e4.init.apply(e4, arguments), e4;
      }, init: function() {
      }, mixIn: function(e4) {
        for (var t4 in e4)
          e4.hasOwnProperty(t4) && (this[t4] = e4[t4]);
        e4.hasOwnProperty("toString") && (this.toString = e4.toString);
      }, clone: function() {
        return this.init.prototype.extend(this);
      } }, o2 = r2.WordArray = i2.extend({ init: function(e4, n4) {
        e4 = this.words = e4 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e4.length;
      }, toString: function(e4) {
        return (e4 || c2).stringify(this);
      }, concat: function(e4) {
        var t4 = this.words, n4 = e4.words, s3 = this.sigBytes, r3 = e4.sigBytes;
        if (this.clamp(), s3 % 4)
          for (var i3 = 0; i3 < r3; i3++) {
            var o3 = n4[i3 >>> 2] >>> 24 - i3 % 4 * 8 & 255;
            t4[s3 + i3 >>> 2] |= o3 << 24 - (s3 + i3) % 4 * 8;
          }
        else
          for (i3 = 0; i3 < r3; i3 += 4)
            t4[s3 + i3 >>> 2] = n4[i3 >>> 2];
        return this.sigBytes += r3, this;
      }, clamp: function() {
        var t4 = this.words, n4 = this.sigBytes;
        t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e3.ceil(n4 / 4);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4.words = this.words.slice(0), e4;
      }, random: function(t4) {
        for (var n4, s3 = [], r3 = function(t5) {
          t5 = t5;
          var n5 = 987654321, s4 = 4294967295;
          return function() {
            var r4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
            return r4 /= 4294967296, (r4 += 0.5) * (e3.random() > 0.5 ? 1 : -1);
          };
        }, i3 = 0; i3 < t4; i3 += 4) {
          var a3 = r3(4294967296 * (n4 || e3.random()));
          n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
        }
        return new o2.init(s3, t4);
      } }), a2 = s2.enc = {}, c2 = a2.Hex = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push((i3 >>> 4).toString(16)), s3.push((15 & i3).toString(16));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3 += 2)
          n4[s3 >>> 3] |= parseInt(e4.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
        return new o2.init(n4, t4 / 2);
      } }, u2 = a2.Latin1 = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push(String.fromCharCode(i3));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3++)
          n4[s3 >>> 2] |= (255 & e4.charCodeAt(s3)) << 24 - s3 % 4 * 8;
        return new o2.init(n4, t4);
      } }, l2 = a2.Utf8 = { stringify: function(e4) {
        try {
          return decodeURIComponent(escape(u2.stringify(e4)));
        } catch (e5) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse: function(e4) {
        return u2.parse(unescape(encodeURIComponent(e4)));
      } }, h2 = r2.BufferedBlockAlgorithm = i2.extend({ reset: function() {
        this._data = new o2.init(), this._nDataBytes = 0;
      }, _append: function(e4) {
        "string" == typeof e4 && (e4 = l2.parse(e4)), this._data.concat(e4), this._nDataBytes += e4.sigBytes;
      }, _process: function(t4) {
        var n4 = this._data, s3 = n4.words, r3 = n4.sigBytes, i3 = this.blockSize, a3 = r3 / (4 * i3), c3 = (a3 = t4 ? e3.ceil(a3) : e3.max((0 | a3) - this._minBufferSize, 0)) * i3, u3 = e3.min(4 * c3, r3);
        if (c3) {
          for (var l3 = 0; l3 < c3; l3 += i3)
            this._doProcessBlock(s3, l3);
          var h3 = s3.splice(0, c3);
          n4.sigBytes -= u3;
        }
        return new o2.init(h3, u3);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._data = this._data.clone(), e4;
      }, _minBufferSize: 0 });
      r2.Hasher = h2.extend({ cfg: i2.extend(), init: function(e4) {
        this.cfg = this.cfg.extend(e4), this.reset();
      }, reset: function() {
        h2.reset.call(this), this._doReset();
      }, update: function(e4) {
        return this._append(e4), this._process(), this;
      }, finalize: function(e4) {
        return e4 && this._append(e4), this._doFinalize();
      }, blockSize: 16, _createHelper: function(e4) {
        return function(t4, n4) {
          return new e4.init(n4).finalize(t4);
        };
      }, _createHmacHelper: function(e4) {
        return function(t4, n4) {
          return new d2.HMAC.init(e4, n4).finalize(t4);
        };
      } });
      var d2 = s2.algo = {};
      return s2;
    }(Math), n2);
  });
  var r = s;
  var i = (n(function(e2, t22) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [];
      !function() {
        for (var t4 = 0; t4 < 64; t4++)
          a2[t4] = 4294967296 * e3.abs(e3.sin(t4 + 1)) | 0;
      }();
      var c2 = o2.MD5 = i2.extend({ _doReset: function() {
        this._hash = new r2.init([1732584193, 4023233417, 2562383102, 271733878]);
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = 0; n3 < 16; n3++) {
          var s3 = t4 + n3, r3 = e4[s3];
          e4[s3] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8);
        }
        var i3 = this._hash.words, o3 = e4[t4 + 0], c3 = e4[t4 + 1], p2 = e4[t4 + 2], f2 = e4[t4 + 3], g2 = e4[t4 + 4], m2 = e4[t4 + 5], y2 = e4[t4 + 6], _2 = e4[t4 + 7], w2 = e4[t4 + 8], v2 = e4[t4 + 9], I2 = e4[t4 + 10], S2 = e4[t4 + 11], b2 = e4[t4 + 12], k2 = e4[t4 + 13], A2 = e4[t4 + 14], C2 = e4[t4 + 15], P2 = i3[0], T2 = i3[1], x2 = i3[2], O2 = i3[3];
        P2 = u2(P2, T2, x2, O2, o3, 7, a2[0]), O2 = u2(O2, P2, T2, x2, c3, 12, a2[1]), x2 = u2(x2, O2, P2, T2, p2, 17, a2[2]), T2 = u2(T2, x2, O2, P2, f2, 22, a2[3]), P2 = u2(P2, T2, x2, O2, g2, 7, a2[4]), O2 = u2(O2, P2, T2, x2, m2, 12, a2[5]), x2 = u2(x2, O2, P2, T2, y2, 17, a2[6]), T2 = u2(T2, x2, O2, P2, _2, 22, a2[7]), P2 = u2(P2, T2, x2, O2, w2, 7, a2[8]), O2 = u2(O2, P2, T2, x2, v2, 12, a2[9]), x2 = u2(x2, O2, P2, T2, I2, 17, a2[10]), T2 = u2(T2, x2, O2, P2, S2, 22, a2[11]), P2 = u2(P2, T2, x2, O2, b2, 7, a2[12]), O2 = u2(O2, P2, T2, x2, k2, 12, a2[13]), x2 = u2(x2, O2, P2, T2, A2, 17, a2[14]), P2 = l2(P2, T2 = u2(T2, x2, O2, P2, C2, 22, a2[15]), x2, O2, c3, 5, a2[16]), O2 = l2(O2, P2, T2, x2, y2, 9, a2[17]), x2 = l2(x2, O2, P2, T2, S2, 14, a2[18]), T2 = l2(T2, x2, O2, P2, o3, 20, a2[19]), P2 = l2(P2, T2, x2, O2, m2, 5, a2[20]), O2 = l2(O2, P2, T2, x2, I2, 9, a2[21]), x2 = l2(x2, O2, P2, T2, C2, 14, a2[22]), T2 = l2(T2, x2, O2, P2, g2, 20, a2[23]), P2 = l2(P2, T2, x2, O2, v2, 5, a2[24]), O2 = l2(O2, P2, T2, x2, A2, 9, a2[25]), x2 = l2(x2, O2, P2, T2, f2, 14, a2[26]), T2 = l2(T2, x2, O2, P2, w2, 20, a2[27]), P2 = l2(P2, T2, x2, O2, k2, 5, a2[28]), O2 = l2(O2, P2, T2, x2, p2, 9, a2[29]), x2 = l2(x2, O2, P2, T2, _2, 14, a2[30]), P2 = h2(P2, T2 = l2(T2, x2, O2, P2, b2, 20, a2[31]), x2, O2, m2, 4, a2[32]), O2 = h2(O2, P2, T2, x2, w2, 11, a2[33]), x2 = h2(x2, O2, P2, T2, S2, 16, a2[34]), T2 = h2(T2, x2, O2, P2, A2, 23, a2[35]), P2 = h2(P2, T2, x2, O2, c3, 4, a2[36]), O2 = h2(O2, P2, T2, x2, g2, 11, a2[37]), x2 = h2(x2, O2, P2, T2, _2, 16, a2[38]), T2 = h2(T2, x2, O2, P2, I2, 23, a2[39]), P2 = h2(P2, T2, x2, O2, k2, 4, a2[40]), O2 = h2(O2, P2, T2, x2, o3, 11, a2[41]), x2 = h2(x2, O2, P2, T2, f2, 16, a2[42]), T2 = h2(T2, x2, O2, P2, y2, 23, a2[43]), P2 = h2(P2, T2, x2, O2, v2, 4, a2[44]), O2 = h2(O2, P2, T2, x2, b2, 11, a2[45]), x2 = h2(x2, O2, P2, T2, C2, 16, a2[46]), P2 = d2(P2, T2 = h2(T2, x2, O2, P2, p2, 23, a2[47]), x2, O2, o3, 6, a2[48]), O2 = d2(O2, P2, T2, x2, _2, 10, a2[49]), x2 = d2(x2, O2, P2, T2, A2, 15, a2[50]), T2 = d2(T2, x2, O2, P2, m2, 21, a2[51]), P2 = d2(P2, T2, x2, O2, b2, 6, a2[52]), O2 = d2(O2, P2, T2, x2, f2, 10, a2[53]), x2 = d2(x2, O2, P2, T2, I2, 15, a2[54]), T2 = d2(T2, x2, O2, P2, c3, 21, a2[55]), P2 = d2(P2, T2, x2, O2, w2, 6, a2[56]), O2 = d2(O2, P2, T2, x2, C2, 10, a2[57]), x2 = d2(x2, O2, P2, T2, y2, 15, a2[58]), T2 = d2(T2, x2, O2, P2, k2, 21, a2[59]), P2 = d2(P2, T2, x2, O2, g2, 6, a2[60]), O2 = d2(O2, P2, T2, x2, S2, 10, a2[61]), x2 = d2(x2, O2, P2, T2, p2, 15, a2[62]), T2 = d2(T2, x2, O2, P2, v2, 21, a2[63]), i3[0] = i3[0] + P2 | 0, i3[1] = i3[1] + T2 | 0, i3[2] = i3[2] + x2 | 0, i3[3] = i3[3] + O2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        n3[r3 >>> 5] |= 128 << 24 - r3 % 32;
        var i3 = e3.floor(s3 / 4294967296), o3 = s3;
        n3[15 + (r3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), n3[14 + (r3 + 64 >>> 9 << 4)] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), t4.sigBytes = 4 * (n3.length + 1), this._process();
        for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
          var l3 = c3[u3];
          c3[u3] = 16711935 & (l3 << 8 | l3 >>> 24) | 4278255360 & (l3 << 24 | l3 >>> 8);
        }
        return a3;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      function u2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & n3 | ~t4 & s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function l2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & s3 | n3 & ~s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function h2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 ^ n3 ^ s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function d2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (n3 ^ (t4 | ~s3)) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      t3.MD5 = i2._createHelper(c2), t3.HmacMD5 = i2._createHmacHelper(c2);
    }(Math), n2.MD5);
  }), n(function(e2, t22) {
    var n2;
    e2.exports = (n2 = r, void function() {
      var e3 = n2, t3 = e3.lib.Base, s2 = e3.enc.Utf8;
      e3.algo.HMAC = t3.extend({ init: function(e4, t4) {
        e4 = this._hasher = new e4.init(), "string" == typeof t4 && (t4 = s2.parse(t4));
        var n3 = e4.blockSize, r2 = 4 * n3;
        t4.sigBytes > r2 && (t4 = e4.finalize(t4)), t4.clamp();
        for (var i2 = this._oKey = t4.clone(), o2 = this._iKey = t4.clone(), a2 = i2.words, c2 = o2.words, u2 = 0; u2 < n3; u2++)
          a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
        i2.sigBytes = o2.sigBytes = r2, this.reset();
      }, reset: function() {
        var e4 = this._hasher;
        e4.reset(), e4.update(this._iKey);
      }, update: function(e4) {
        return this._hasher.update(e4), this;
      }, finalize: function(e4) {
        var t4 = this._hasher, n3 = t4.finalize(e4);
        return t4.reset(), t4.finalize(this._oKey.clone().concat(n3));
      } });
    }());
  }), n(function(e2, t22) {
    e2.exports = r.HmacMD5;
  }));
  var o = n(function(e2, t22) {
    e2.exports = r.enc.Utf8;
  });
  var a = n(function(e2, t22) {
    var n2;
    e2.exports = (n2 = r, function() {
      var e3 = n2, t3 = e3.lib.WordArray;
      function s2(e4, n3, s3) {
        for (var r2 = [], i2 = 0, o2 = 0; o2 < n3; o2++)
          if (o2 % 4) {
            var a2 = s3[e4.charCodeAt(o2 - 1)] << o2 % 4 * 2, c2 = s3[e4.charCodeAt(o2)] >>> 6 - o2 % 4 * 2;
            r2[i2 >>> 2] |= (a2 | c2) << 24 - i2 % 4 * 8, i2++;
          }
        return t3.create(r2, i2);
      }
      e3.enc.Base64 = { stringify: function(e4) {
        var t4 = e4.words, n3 = e4.sigBytes, s3 = this._map;
        e4.clamp();
        for (var r2 = [], i2 = 0; i2 < n3; i2 += 3)
          for (var o2 = (t4[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255) << 16 | (t4[i2 + 1 >>> 2] >>> 24 - (i2 + 1) % 4 * 8 & 255) << 8 | t4[i2 + 2 >>> 2] >>> 24 - (i2 + 2) % 4 * 8 & 255, a2 = 0; a2 < 4 && i2 + 0.75 * a2 < n3; a2++)
            r2.push(s3.charAt(o2 >>> 6 * (3 - a2) & 63));
        var c2 = s3.charAt(64);
        if (c2)
          for (; r2.length % 4; )
            r2.push(c2);
        return r2.join("");
      }, parse: function(e4) {
        var t4 = e4.length, n3 = this._map, r2 = this._reverseMap;
        if (!r2) {
          r2 = this._reverseMap = [];
          for (var i2 = 0; i2 < n3.length; i2++)
            r2[n3.charCodeAt(i2)] = i2;
        }
        var o2 = n3.charAt(64);
        if (o2) {
          var a2 = e4.indexOf(o2);
          -1 !== a2 && (t4 = a2);
        }
        return s2(e4, t4, r2);
      }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
    }(), n2.enc.Base64);
  });
  var c = "FUNCTION";
  var u = "OBJECT";
  var l = "CLIENT_DB";
  var h = "pending";
  var d = "fulfilled";
  var p = "rejected";
  function f(e2) {
    return Object.prototype.toString.call(e2).slice(8, -1).toLowerCase();
  }
  function g(e2) {
    return "object" === f(e2);
  }
  function m(e2) {
    return "function" == typeof e2;
  }
  function y(e2) {
    return function() {
      try {
        return e2.apply(e2, arguments);
      } catch (e3) {
        console.error(e3);
      }
    };
  }
  var _ = "REJECTED";
  var w = "NOT_PENDING";
  var v = class {
    constructor({ createPromise: e2, retryRule: t22 = _ } = {}) {
      this.createPromise = e2, this.status = null, this.promise = null, this.retryRule = t22;
    }
    get needRetry() {
      if (!this.status)
        return true;
      switch (this.retryRule) {
        case _:
          return this.status === p;
        case w:
          return this.status !== h;
      }
    }
    exec() {
      return this.needRetry ? (this.status = h, this.promise = this.createPromise().then((e2) => (this.status = d, Promise.resolve(e2)), (e2) => (this.status = p, Promise.reject(e2))), this.promise) : this.promise;
    }
  };
  function I(e2) {
    return e2 && "string" == typeof e2 ? JSON.parse(e2) : e2;
  }
  var S = true;
  var b = "app";
  var A = I(define_process_env_UNI_SECURE_NETWORK_CONFIG_default);
  var C = b;
  var P = I("");
  var T = I("[]") || [];
  var O = "";
  try {
    O = "";
  } catch (e2) {
  }
  var E = {};
  function L(e2, t22 = {}) {
    var n2, s2;
    return n2 = E, s2 = e2, Object.prototype.hasOwnProperty.call(n2, s2) || (E[e2] = t22), E[e2];
  }
  E = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {};
  var R = ["invoke", "success", "fail", "complete"];
  var U = L("_globalUniCloudInterceptor");
  function N(e2, t22) {
    U[e2] || (U[e2] = {}), g(t22) && Object.keys(t22).forEach((n2) => {
      R.indexOf(n2) > -1 && function(e3, t3, n3) {
        let s2 = U[e3][t3];
        s2 || (s2 = U[e3][t3] = []), -1 === s2.indexOf(n3) && m(n3) && s2.push(n3);
      }(e2, n2, t22[n2]);
    });
  }
  function D(e2, t22) {
    U[e2] || (U[e2] = {}), g(t22) ? Object.keys(t22).forEach((n2) => {
      R.indexOf(n2) > -1 && function(e3, t3, n3) {
        const s2 = U[e3][t3];
        if (!s2)
          return;
        const r2 = s2.indexOf(n3);
        r2 > -1 && s2.splice(r2, 1);
      }(e2, n2, t22[n2]);
    }) : delete U[e2];
  }
  function M(e2, t22) {
    return e2 && 0 !== e2.length ? e2.reduce((e3, n2) => e3.then(() => n2(t22)), Promise.resolve()) : Promise.resolve();
  }
  function q(e2, t22) {
    return U[e2] && U[e2][t22] || [];
  }
  function F(e2) {
    N("callObject", e2);
  }
  var K = L("_globalUniCloudListener");
  var j = "response";
  var $ = "needLogin";
  var B = "refreshToken";
  var W = "clientdb";
  var H = "cloudfunction";
  var J = "cloudobject";
  function z(e2) {
    return K[e2] || (K[e2] = []), K[e2];
  }
  function V(e2, t22) {
    const n2 = z(e2);
    n2.includes(t22) || n2.push(t22);
  }
  function G(e2, t22) {
    const n2 = z(e2), s2 = n2.indexOf(t22);
    -1 !== s2 && n2.splice(s2, 1);
  }
  function Y(e2, t22) {
    const n2 = z(e2);
    for (let e3 = 0; e3 < n2.length; e3++) {
      (0, n2[e3])(t22);
    }
  }
  var Q;
  var X = false;
  function Z() {
    return Q || (Q = new Promise((e2) => {
      X && e2(), function t22() {
        if ("function" == typeof getCurrentPages) {
          const t3 = getCurrentPages();
          t3 && t3[0] && (X = true, e2());
        }
        X || setTimeout(() => {
          t22();
        }, 30);
      }();
    }), Q);
  }
  function ee(e2) {
    const t22 = {};
    for (const n2 in e2) {
      const s2 = e2[n2];
      m(s2) && (t22[n2] = y(s2));
    }
    return t22;
  }
  var te = class extends Error {
    constructor(e2) {
      super(e2.message), this.errMsg = e2.message || e2.errMsg || "unknown system error", this.code = this.errCode = e2.code || e2.errCode || "SYSTEM_ERROR", this.errSubject = this.subject = e2.subject || e2.errSubject, this.cause = e2.cause, this.requestId = e2.requestId;
    }
    toJson(e2 = 0) {
      if (!(e2 >= 10))
        return e2++, { errCode: this.errCode, errMsg: this.errMsg, errSubject: this.errSubject, cause: this.cause && this.cause.toJson ? this.cause.toJson(e2) : this.cause };
    }
  };
  var ne = { request: (e2) => uni.request(e2), uploadFile: (e2) => uni.uploadFile(e2), setStorageSync: (e2, t22) => uni.setStorageSync(e2, t22), getStorageSync: (e2) => uni.getStorageSync(e2), removeStorageSync: (e2) => uni.removeStorageSync(e2), clearStorageSync: () => uni.clearStorageSync(), connectSocket: (e2) => uni.connectSocket(e2) };
  function se(e2) {
    return e2 && se(e2.__v_raw) || e2;
  }
  function re() {
    return { token: ne.getStorageSync("uni_id_token") || ne.getStorageSync("uniIdToken"), tokenExpired: ne.getStorageSync("uni_id_token_expired") };
  }
  function ie({ token: e2, tokenExpired: t22 } = {}) {
    e2 && ne.setStorageSync("uni_id_token", e2), t22 && ne.setStorageSync("uni_id_token_expired", t22);
  }
  var oe;
  var ae;
  function ce() {
    return oe || (oe = uni.getSystemInfoSync()), oe;
  }
  function ue() {
    let e2, t22;
    try {
      if (uni.getLaunchOptionsSync) {
        if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1)
          return;
        const { scene: n2, channel: s2 } = uni.getLaunchOptionsSync();
        e2 = s2, t22 = n2;
      }
    } catch (e3) {
    }
    return { channel: e2, scene: t22 };
  }
  var le = {};
  function he() {
    const e2 = uni.getLocale && uni.getLocale() || "en";
    if (ae)
      return __spreadProps(__spreadValues(__spreadValues({}, le), ae), { locale: e2, LOCALE: e2 });
    const t22 = ce(), { deviceId: n2, osName: s2, uniPlatform: r2, appId: i2 } = t22, o2 = ["appId", "appLanguage", "appName", "appVersion", "appVersionCode", "appWgtVersion", "browserName", "browserVersion", "deviceBrand", "deviceId", "deviceModel", "deviceType", "osName", "osVersion", "romName", "romVersion", "ua", "hostName", "hostVersion", "uniPlatform", "uniRuntimeVersion", "uniRuntimeVersionCode", "uniCompilerVersion", "uniCompilerVersionCode"];
    for (const e3 in t22)
      Object.hasOwnProperty.call(t22, e3) && -1 === o2.indexOf(e3) && delete t22[e3];
    return ae = __spreadValues(__spreadValues({ PLATFORM: r2, OS: s2, APPID: i2, DEVICEID: n2 }, ue()), t22), __spreadProps(__spreadValues(__spreadValues({}, le), ae), { locale: e2, LOCALE: e2 });
  }
  var de = { sign: function(e2, t22) {
    let n2 = "";
    return Object.keys(e2).sort().forEach(function(t3) {
      e2[t3] && (n2 = n2 + "&" + t3 + "=" + e2[t3]);
    }), n2 = n2.slice(1), i(n2, t22).toString();
  }, wrappedRequest: function(e2, t22) {
    return new Promise((n2, s2) => {
      t22(Object.assign(e2, { complete(e3) {
        e3 || (e3 = {});
        const t3 = e3.data && e3.data.header && e3.data.header["x-serverless-request-id"] || e3.header && e3.header["request-id"];
        if (!e3.statusCode || e3.statusCode >= 400) {
          const n3 = e3.data && e3.data.error && e3.data.error.code || "SYS_ERR", r3 = e3.data && e3.data.error && e3.data.error.message || e3.errMsg || "request:fail";
          return s2(new te({ code: n3, message: r3, requestId: t3 }));
        }
        const r2 = e3.data;
        if (r2.error)
          return s2(new te({ code: r2.error.code, message: r2.error.message, requestId: t3 }));
        r2.result = r2.data, r2.requestId = t3, delete r2.data, n2(r2);
      } }));
    });
  }, toBase64: function(e2) {
    return a.stringify(o.parse(e2));
  } };
  var pe = class {
    constructor(e2) {
      ["spaceId", "clientSecret"].forEach((t22) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t22))
          throw new Error(`${t22} required`);
      }), this.config = Object.assign({}, { endpoint: 0 === e2.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com" }, e2), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = ne, this._getAccessTokenPromiseHub = new v({ createPromise: () => this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e3) => {
        if (!e3.result || !e3.result.accessToken)
          throw new te({ code: "AUTH_FAILED", message: "\u83B7\u53D6accessToken\u5931\u8D25" });
        this.setAccessToken(e3.result.accessToken);
      }), retryRule: w });
    }
    get hasAccessToken() {
      return !!this.accessToken;
    }
    setAccessToken(e2) {
      this.accessToken = e2;
    }
    requestWrapped(e2) {
      return de.wrappedRequest(e2, this.adapter.request);
    }
    requestAuth(e2) {
      return this.requestWrapped(e2);
    }
    request(e2, t22) {
      return Promise.resolve().then(() => this.hasAccessToken ? t22 ? this.requestWrapped(e2) : this.requestWrapped(e2).catch((t3) => new Promise((e3, n2) => {
        !t3 || "GATEWAY_INVALID_TOKEN" !== t3.code && "InvalidParameter.InvalidToken" !== t3.code ? n2(t3) : e3();
      }).then(() => this.getAccessToken()).then(() => {
        const t4 = this.rebuildRequest(e2);
        return this.request(t4, true);
      })) : this.getAccessToken().then(() => {
        const t3 = this.rebuildRequest(e2);
        return this.request(t3, true);
      }));
    }
    rebuildRequest(e2) {
      const t22 = Object.assign({}, e2);
      return t22.data.token = this.accessToken, t22.header["x-basement-token"] = this.accessToken, t22.header["x-serverless-sign"] = de.sign(t22.data, this.config.clientSecret), t22;
    }
    setupRequest(e2, t22) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      return "auth" !== t22 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = de.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
    }
    getAccessToken() {
      return this._getAccessTokenPromiseHub.exec();
    }
    authorize() {
      return __async(this, null, function* () {
        yield this.getAccessToken();
      });
    }
    callFunction(e2) {
      const t22 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e2.name, functionArgs: e2.data || {} }) };
      return this.request(__spreadProps(__spreadValues({}, this.setupRequest(t22)), { timeout: e2.timeout }));
    }
    getOSSUploadOptionsFromPath(e2) {
      const t22 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t22));
    }
    uploadFileToOSS({ url: e2, formData: t22, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e2, formData: t22, name: n2, filePath: s2, fileType: r2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e3) {
          e3 && e3.statusCode < 400 ? o2(e3) : a2(new te({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e3) {
          a2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
          i2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    reportOSSUpload(e2) {
      const t22 = { method: "serverless.file.resource.report", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t22));
    }
    uploadFile(_0) {
      return __async(this, arguments, function* ({ filePath: e2, cloudPath: t22, fileType: n2 = "image", cloudPathAsRealPath: s2 = false, onUploadProgress: r2, config: i2 }) {
        if ("string" !== f(t22))
          throw new te({ code: "INVALID_PARAM", message: "cloudPath\u5FC5\u987B\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B" });
        if (!(t22 = t22.trim()))
          throw new te({ code: "INVALID_PARAM", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
        if (/:\/\//.test(t22))
          throw new te({ code: "INVALID_PARAM", message: "cloudPath\u4E0D\u5408\u6CD5" });
        const o2 = i2 && i2.envType || this.config.envType;
        if (s2 && ("/" !== t22[0] && (t22 = "/" + t22), t22.indexOf("\\") > -1))
          throw new te({ code: "INVALID_PARAM", message: "\u4F7F\u7528cloudPath\u4F5C\u4E3A\u8DEF\u5F84\u65F6\uFF0CcloudPath\u4E0D\u53EF\u5305\u542B\u201C\\\u201D" });
        const a2 = (yield this.getOSSUploadOptionsFromPath({ env: o2, filename: s2 ? t22.split("/").pop() : t22, fileId: s2 ? t22 : void 0 })).result, c2 = "https://" + a2.cdnDomain + "/" + a2.ossPath, { securityToken: u2, accessKeyId: l2, signature: h2, host: d2, ossPath: p2, id: g2, policy: m2, ossCallbackUrl: y2 } = a2, _2 = { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: l2, Signature: h2, host: d2, id: g2, key: p2, policy: m2, success_action_status: 200 };
        if (u2 && (_2["x-oss-security-token"] = u2), y2) {
          const e3 = JSON.stringify({ callbackUrl: y2, callbackBody: JSON.stringify({ fileId: g2, spaceId: this.config.spaceId }), callbackBodyType: "application/json" });
          _2.callback = de.toBase64(e3);
        }
        const w2 = { url: "https://" + a2.host, formData: _2, fileName: "file", name: "file", filePath: e2, fileType: n2 };
        if (yield this.uploadFileToOSS(Object.assign({}, w2, { onUploadProgress: r2 })), y2)
          return { success: true, filePath: e2, fileID: c2 };
        if ((yield this.reportOSSUpload({ id: g2 })).success)
          return { success: true, filePath: e2, fileID: c2 };
        throw new te({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" });
      });
    }
    getTempFileURL({ fileList: e2 } = {}) {
      return new Promise((t22, n2) => {
        Array.isArray(e2) && 0 !== e2.length || n2(new te({ code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" })), t22({ fileList: e2.map((e3) => ({ fileID: e3, tempFileURL: e3 })) });
      });
    }
    getFileInfo() {
      return __async(this, arguments, function* ({ fileList: e2 } = {}) {
        if (!Array.isArray(e2) || 0 === e2.length)
          throw new te({ code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" });
        const t22 = { method: "serverless.file.resource.info", params: JSON.stringify({ id: e2.map((e3) => e3.split("?")[0]).join(",") }) };
        return { fileList: (yield this.request(this.setupRequest(t22))).result };
      });
    }
  };
  var fe = { init(e2) {
    const t22 = new pe(e2), n2 = { signInAnonymously: function() {
      return t22.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t22.auth = function() {
      return n2;
    }, t22.customAuth = t22.auth, t22;
  } };
  var ge = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
  var me;
  !function(e2) {
    e2.local = "local", e2.none = "none", e2.session = "session";
  }(me || (me = {}));
  var ye = function() {
  };
  var _e = n(function(e2, t22) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [], c2 = [];
      !function() {
        function t4(t5) {
          for (var n4 = e3.sqrt(t5), s4 = 2; s4 <= n4; s4++)
            if (!(t5 % s4))
              return false;
          return true;
        }
        function n3(e4) {
          return 4294967296 * (e4 - (0 | e4)) | 0;
        }
        for (var s3 = 2, r3 = 0; r3 < 64; )
          t4(s3) && (r3 < 8 && (a2[r3] = n3(e3.pow(s3, 0.5))), c2[r3] = n3(e3.pow(s3, 1 / 3)), r3++), s3++;
      }();
      var u2 = [], l2 = o2.SHA256 = i2.extend({ _doReset: function() {
        this._hash = new r2.init(a2.slice(0));
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = this._hash.words, s3 = n3[0], r3 = n3[1], i3 = n3[2], o3 = n3[3], a3 = n3[4], l3 = n3[5], h2 = n3[6], d2 = n3[7], p2 = 0; p2 < 64; p2++) {
          if (p2 < 16)
            u2[p2] = 0 | e4[t4 + p2];
          else {
            var f2 = u2[p2 - 15], g2 = (f2 << 25 | f2 >>> 7) ^ (f2 << 14 | f2 >>> 18) ^ f2 >>> 3, m2 = u2[p2 - 2], y2 = (m2 << 15 | m2 >>> 17) ^ (m2 << 13 | m2 >>> 19) ^ m2 >>> 10;
            u2[p2] = g2 + u2[p2 - 7] + y2 + u2[p2 - 16];
          }
          var _2 = s3 & r3 ^ s3 & i3 ^ r3 & i3, w2 = (s3 << 30 | s3 >>> 2) ^ (s3 << 19 | s3 >>> 13) ^ (s3 << 10 | s3 >>> 22), v2 = d2 + ((a3 << 26 | a3 >>> 6) ^ (a3 << 21 | a3 >>> 11) ^ (a3 << 7 | a3 >>> 25)) + (a3 & l3 ^ ~a3 & h2) + c2[p2] + u2[p2];
          d2 = h2, h2 = l3, l3 = a3, a3 = o3 + v2 | 0, o3 = i3, i3 = r3, r3 = s3, s3 = v2 + (w2 + _2) | 0;
        }
        n3[0] = n3[0] + s3 | 0, n3[1] = n3[1] + r3 | 0, n3[2] = n3[2] + i3 | 0, n3[3] = n3[3] + o3 | 0, n3[4] = n3[4] + a3 | 0, n3[5] = n3[5] + l3 | 0, n3[6] = n3[6] + h2 | 0, n3[7] = n3[7] + d2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        return n3[r3 >>> 5] |= 128 << 24 - r3 % 32, n3[14 + (r3 + 64 >>> 9 << 4)] = e3.floor(s3 / 4294967296), n3[15 + (r3 + 64 >>> 9 << 4)] = s3, t4.sigBytes = 4 * n3.length, this._process(), this._hash;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      t3.SHA256 = i2._createHelper(l2), t3.HmacSHA256 = i2._createHmacHelper(l2);
    }(Math), n2.SHA256);
  });
  var we = _e;
  var ve = n(function(e2, t22) {
    e2.exports = r.HmacSHA256;
  });
  var Ie = () => {
    let e2;
    if (!Promise) {
      e2 = () => {
      }, e2.promise = {};
      const t3 = () => {
        throw new te({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });
      };
      return Object.defineProperty(e2.promise, "then", { get: t3 }), Object.defineProperty(e2.promise, "catch", { get: t3 }), e2;
    }
    const t22 = new Promise((t3, n2) => {
      e2 = (e3, s2) => e3 ? n2(e3) : t3(s2);
    });
    return e2.promise = t22, e2;
  };
  function Se(e2) {
    return void 0 === e2;
  }
  function be(e2) {
    return "[object Null]" === Object.prototype.toString.call(e2);
  }
  var ke;
  function Ae(e2) {
    const t22 = (n2 = e2, "[object Array]" === Object.prototype.toString.call(n2) ? e2 : [e2]);
    var n2;
    for (const e3 of t22) {
      const { isMatch: t3, genAdapter: n3, runtime: s2 } = e3;
      if (t3())
        return { adapter: n3(), runtime: s2 };
    }
  }
  !function(e2) {
    e2.WEB = "web", e2.WX_MP = "wx_mp";
  }(ke || (ke = {}));
  var Ce = { adapter: null, runtime: void 0 };
  var Pe = ["anonymousUuidKey"];
  var Te = class extends ye {
    constructor() {
      super(), Ce.adapter.root.tcbObject || (Ce.adapter.root.tcbObject = {});
    }
    setItem(e2, t22) {
      Ce.adapter.root.tcbObject[e2] = t22;
    }
    getItem(e2) {
      return Ce.adapter.root.tcbObject[e2];
    }
    removeItem(e2) {
      delete Ce.adapter.root.tcbObject[e2];
    }
    clear() {
      delete Ce.adapter.root.tcbObject;
    }
  };
  function xe(e2, t22) {
    switch (e2) {
      case "local":
        return t22.localStorage || new Te();
      case "none":
        return new Te();
      default:
        return t22.sessionStorage || new Te();
    }
  }
  var Oe = class {
    constructor(e2) {
      if (!this._storage) {
        this._persistence = Ce.adapter.primaryStorage || e2.persistence, this._storage = xe(this._persistence, Ce.adapter);
        const t22 = `access_token_${e2.env}`, n2 = `access_token_expire_${e2.env}`, s2 = `refresh_token_${e2.env}`, r2 = `anonymous_uuid_${e2.env}`, i2 = `login_type_${e2.env}`, o2 = `user_info_${e2.env}`;
        this.keys = { accessTokenKey: t22, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: r2, loginTypeKey: i2, userInfoKey: o2 };
      }
    }
    updatePersistence(e2) {
      if (e2 === this._persistence)
        return;
      const t22 = "local" === this._persistence;
      this._persistence = e2;
      const n2 = xe(e2, Ce.adapter);
      for (const e3 in this.keys) {
        const s2 = this.keys[e3];
        if (t22 && Pe.includes(e3))
          continue;
        const r2 = this._storage.getItem(s2);
        Se(r2) || be(r2) || (n2.setItem(s2, r2), this._storage.removeItem(s2));
      }
      this._storage = n2;
    }
    setStore(e2, t22, n2) {
      if (!this._storage)
        return;
      const s2 = { version: n2 || "localCachev1", content: t22 }, r2 = JSON.stringify(s2);
      try {
        this._storage.setItem(e2, r2);
      } catch (e3) {
        throw e3;
      }
    }
    getStore(e2, t22) {
      try {
        if (!this._storage)
          return;
      } catch (e3) {
        return "";
      }
      t22 = t22 || "localCachev1";
      const n2 = this._storage.getItem(e2);
      if (!n2)
        return "";
      if (n2.indexOf(t22) >= 0) {
        return JSON.parse(n2).content;
      }
      return "";
    }
    removeStore(e2) {
      this._storage.removeItem(e2);
    }
  };
  var Ee = {};
  var Le = {};
  function Re(e2) {
    return Ee[e2];
  }
  var Ue = class {
    constructor(e2, t22) {
      this.data = t22 || null, this.name = e2;
    }
  };
  var Ne = class extends Ue {
    constructor(e2, t22) {
      super("error", { error: e2, data: t22 }), this.error = e2;
    }
  };
  var De = new class {
    constructor() {
      this._listeners = {};
    }
    on(e2, t22) {
      return function(e3, t3, n2) {
        n2[e3] = n2[e3] || [], n2[e3].push(t3);
      }(e2, t22, this._listeners), this;
    }
    off(e2, t22) {
      return function(e3, t3, n2) {
        if (n2 && n2[e3]) {
          const s2 = n2[e3].indexOf(t3);
          -1 !== s2 && n2[e3].splice(s2, 1);
        }
      }(e2, t22, this._listeners), this;
    }
    fire(e2, t22) {
      if (e2 instanceof Ne)
        return console.error(e2.error), this;
      const n2 = "string" == typeof e2 ? new Ue(e2, t22 || {}) : e2;
      const s2 = n2.name;
      if (this._listens(s2)) {
        n2.target = this;
        const e3 = this._listeners[s2] ? [...this._listeners[s2]] : [];
        for (const t3 of e3)
          t3.call(this, n2);
      }
      return this;
    }
    _listens(e2) {
      return this._listeners[e2] && this._listeners[e2].length > 0;
    }
  }();
  function Me(e2, t22) {
    De.on(e2, t22);
  }
  function qe(e2, t22 = {}) {
    De.fire(e2, t22);
  }
  function Fe(e2, t22) {
    De.off(e2, t22);
  }
  var Ke = "loginStateChanged";
  var je = "loginStateExpire";
  var $e = "loginTypeChanged";
  var Be = "anonymousConverted";
  var We = "refreshAccessToken";
  var He;
  !function(e2) {
    e2.ANONYMOUS = "ANONYMOUS", e2.WECHAT = "WECHAT", e2.WECHAT_PUBLIC = "WECHAT-PUBLIC", e2.WECHAT_OPEN = "WECHAT-OPEN", e2.CUSTOM = "CUSTOM", e2.EMAIL = "EMAIL", e2.USERNAME = "USERNAME", e2.NULL = "NULL";
  }(He || (He = {}));
  var Je = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"];
  var ze = { "X-SDK-Version": "1.3.5" };
  function Ve(e2, t22, n2) {
    const s2 = e2[t22];
    e2[t22] = function(t3) {
      const r2 = {}, i2 = {};
      n2.forEach((n3) => {
        const { data: s3, headers: o3 } = n3.call(e2, t3);
        Object.assign(r2, s3), Object.assign(i2, o3);
      });
      const o2 = t3.data;
      return o2 && (() => {
        var e3;
        if (e3 = o2, "[object FormData]" !== Object.prototype.toString.call(e3))
          t3.data = __spreadValues(__spreadValues({}, o2), r2);
        else
          for (const e4 in r2)
            o2.append(e4, r2[e4]);
      })(), t3.headers = __spreadValues(__spreadValues({}, t3.headers || {}), i2), s2.call(e2, t3);
    };
  }
  function Ge() {
    const e2 = Math.random().toString(16).slice(2);
    return { data: { seqId: e2 }, headers: __spreadProps(__spreadValues({}, ze), { "x-seqid": e2 }) };
  }
  var Ye = class {
    constructor(e2 = {}) {
      var t22;
      this.config = e2, this._reqClass = new Ce.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `\u8BF7\u6C42\u5728${this.config.timeout / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD`, restrictedMethods: ["post"] }), this._cache = Re(this.config.env), this._localCache = (t22 = this.config.env, Le[t22]), Ve(this._reqClass, "post", [Ge]), Ve(this._reqClass, "upload", [Ge]), Ve(this._reqClass, "download", [Ge]);
    }
    post(e2) {
      return __async(this, null, function* () {
        return yield this._reqClass.post(e2);
      });
    }
    upload(e2) {
      return __async(this, null, function* () {
        return yield this._reqClass.upload(e2);
      });
    }
    download(e2) {
      return __async(this, null, function* () {
        return yield this._reqClass.download(e2);
      });
    }
    refreshAccessToken() {
      return __async(this, null, function* () {
        let e2, t22;
        this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
        try {
          e2 = yield this._refreshAccessTokenPromise;
        } catch (e3) {
          t22 = e3;
        }
        if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t22)
          throw t22;
        return e2;
      });
    }
    _refreshAccessToken() {
      return __async(this, null, function* () {
        const { accessTokenKey: e2, accessTokenExpireKey: t22, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: r2 } = this._cache.keys;
        this._cache.removeStore(e2), this._cache.removeStore(t22);
        let i2 = this._cache.getStore(n2);
        if (!i2)
          throw new te({ message: "\u672A\u767B\u5F55CloudBase" });
        const o2 = { refresh_token: i2 }, a2 = yield this.request("auth.fetchAccessTokenWithRefreshToken", o2);
        if (a2.data.code) {
          const { code: e3 } = a2.data;
          if ("SIGN_PARAM_INVALID" === e3 || "REFRESH_TOKEN_EXPIRED" === e3 || "INVALID_REFRESH_TOKEN" === e3) {
            if (this._cache.getStore(s2) === He.ANONYMOUS && "INVALID_REFRESH_TOKEN" === e3) {
              const e4 = this._cache.getStore(r2), t3 = this._cache.getStore(n2), s3 = yield this.send("auth.signInAnonymously", { anonymous_uuid: e4, refresh_token: t3 });
              return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
            }
            qe(je), this._cache.removeStore(n2);
          }
          throw new te({ code: a2.data.code, message: `\u5237\u65B0access token\u5931\u8D25\uFF1A${a2.data.code}` });
        }
        if (a2.data.access_token)
          return qe(We), this._cache.setStore(e2, a2.data.access_token), this._cache.setStore(t22, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
        a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
      });
    }
    getAccessToken() {
      return __async(this, null, function* () {
        const { accessTokenKey: e2, accessTokenExpireKey: t22, refreshTokenKey: n2 } = this._cache.keys;
        if (!this._cache.getStore(n2))
          throw new te({ message: "refresh token\u4E0D\u5B58\u5728\uFF0C\u767B\u5F55\u72B6\u6001\u5F02\u5E38" });
        let s2 = this._cache.getStore(e2), r2 = this._cache.getStore(t22), i2 = true;
        return this._shouldRefreshAccessTokenHook && !(yield this._shouldRefreshAccessTokenHook(s2, r2)) && (i2 = false), (!s2 || !r2 || r2 < Date.now()) && i2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: r2 };
      });
    }
    request(e2, t22, n2) {
      return __async(this, null, function* () {
        const s2 = `x-tcb-trace_${this.config.env}`;
        let r2 = "application/x-www-form-urlencoded";
        const i2 = __spreadValues({ action: e2, env: this.config.env, dataVersion: "2019-08-16" }, t22);
        if (-1 === Je.indexOf(e2)) {
          const { refreshTokenKey: e3 } = this._cache.keys;
          this._cache.getStore(e3) && (i2.access_token = (yield this.getAccessToken()).accessToken);
        }
        let o2;
        if ("storage.uploadFile" === e2) {
          o2 = new FormData();
          for (let e3 in o2)
            o2.hasOwnProperty(e3) && void 0 !== o2[e3] && o2.append(e3, i2[e3]);
          r2 = "multipart/form-data";
        } else {
          r2 = "application/json", o2 = {};
          for (let e3 in i2)
            void 0 !== i2[e3] && (o2[e3] = i2[e3]);
        }
        let a2 = { headers: { "content-type": r2 } };
        n2 && n2.timeout && (a2.timeout = n2.timeout), n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
        const c2 = this._localCache.getStore(s2);
        c2 && (a2.headers["X-TCB-Trace"] = c2);
        const { parse: u2, inQuery: l2, search: h2 } = t22;
        let d2 = { env: this.config.env };
        u2 && (d2.parse = true), l2 && (d2 = __spreadValues(__spreadValues({}, l2), d2));
        let p2 = function(e3, t3, n3 = {}) {
          const s3 = /\?/.test(t3);
          let r3 = "";
          for (let e4 in n3)
            "" === r3 ? !s3 && (t3 += "?") : r3 += "&", r3 += `${e4}=${encodeURIComponent(n3[e4])}`;
          return /^http(s)?\:\/\//.test(t3 += r3) ? t3 : `${e3}${t3}`;
        }(ge, "//tcb-api.tencentcloudapi.com/web", d2);
        h2 && (p2 += h2);
        const f2 = yield this.post(__spreadValues({ url: p2, data: o2 }, a2)), g2 = f2.header && f2.header["x-tcb-trace"];
        if (g2 && this._localCache.setStore(s2, g2), 200 !== Number(f2.status) && 200 !== Number(f2.statusCode) || !f2.data)
          throw new te({ code: "NETWORK_ERROR", message: "network request error" });
        return f2;
      });
    }
    send(_0) {
      return __async(this, arguments, function* (e2, t22 = {}, n2 = {}) {
        const s2 = yield this.request(e2, t22, __spreadProps(__spreadValues({}, n2), { onUploadProgress: t22.onUploadProgress }));
        if ("ACCESS_TOKEN_EXPIRED" === s2.data.code && -1 === Je.indexOf(e2)) {
          yield this.refreshAccessToken();
          const s3 = yield this.request(e2, t22, __spreadProps(__spreadValues({}, n2), { onUploadProgress: t22.onUploadProgress }));
          if (s3.data.code)
            throw new te({ code: s3.data.code, message: s3.data.message });
          return s3.data;
        }
        if (s2.data.code)
          throw new te({ code: s2.data.code, message: s2.data.message });
        return s2.data;
      });
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t22, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t22), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
  };
  var Qe = {};
  function Xe(e2) {
    return Qe[e2];
  }
  var Ze = class {
    constructor(e2) {
      this.config = e2, this._cache = Re(e2.env), this._request = Xe(e2.env);
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t22, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t22), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
    setAccessToken(e2, t22) {
      const { accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys;
      this._cache.setStore(n2, e2), this._cache.setStore(s2, t22);
    }
    refreshUserInfo() {
      return __async(this, null, function* () {
        const { data: e2 } = yield this._request.send("auth.getUserInfo", {});
        return this.setLocalUserInfo(e2), e2;
      });
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t22 } = this._cache.keys;
      this._cache.setStore(t22, e2);
    }
  };
  var et = class {
    constructor(e2) {
      if (!e2)
        throw new te({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._envId = e2, this._cache = Re(this._envId), this._request = Xe(this._envId), this.setUserInfo();
    }
    linkWithTicket(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "ticket must be string" });
      return this._request.send("auth.linkWithTicket", { ticket: e2 });
    }
    linkWithRedirect(e2) {
      e2.signInWithRedirect();
    }
    updatePassword(e2, t22) {
      return this._request.send("auth.updatePassword", { oldPassword: t22, newPassword: e2 });
    }
    updateEmail(e2) {
      return this._request.send("auth.updateEmail", { newEmail: e2 });
    }
    updateUsername(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
      return this._request.send("auth.updateUsername", { username: e2 });
    }
    getLinkedUidList() {
      return __async(this, null, function* () {
        const { data: e2 } = yield this._request.send("auth.getLinkedUidList", {});
        let t22 = false;
        const { users: n2 } = e2;
        return n2.forEach((e3) => {
          e3.wxOpenId && e3.wxPublicId && (t22 = true);
        }), { users: n2, hasPrimaryUid: t22 };
      });
    }
    setPrimaryUid(e2) {
      return this._request.send("auth.setPrimaryUid", { uid: e2 });
    }
    unlink(e2) {
      return this._request.send("auth.unlink", { platform: e2 });
    }
    update(e2) {
      return __async(this, null, function* () {
        const { nickName: t22, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 } = e2, { data: a2 } = yield this._request.send("auth.updateUserInfo", { nickName: t22, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 });
        this.setLocalUserInfo(a2);
      });
    }
    refresh() {
      return __async(this, null, function* () {
        const { data: e2 } = yield this._request.send("auth.getUserInfo", {});
        return this.setLocalUserInfo(e2), e2;
      });
    }
    setUserInfo() {
      const { userInfoKey: e2 } = this._cache.keys, t22 = this._cache.getStore(e2);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e3) => {
        this[e3] = t22[e3];
      }), this.location = { country: t22.country, province: t22.province, city: t22.city };
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t22 } = this._cache.keys;
      this._cache.setStore(t22, e2), this.setUserInfo();
    }
  };
  var tt = class {
    constructor(e2) {
      if (!e2)
        throw new te({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._cache = Re(e2);
      const { refreshTokenKey: t22, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, r2 = this._cache.getStore(t22), i2 = this._cache.getStore(n2), o2 = this._cache.getStore(s2);
      this.credential = { refreshToken: r2, accessToken: i2, accessTokenExpire: o2 }, this.user = new et(e2);
    }
    get isAnonymousAuth() {
      return this.loginType === He.ANONYMOUS;
    }
    get isCustomAuth() {
      return this.loginType === He.CUSTOM;
    }
    get isWeixinAuth() {
      return this.loginType === He.WECHAT || this.loginType === He.WECHAT_OPEN || this.loginType === He.WECHAT_PUBLIC;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  };
  var nt = class extends Ze {
    signIn() {
      return __async(this, null, function* () {
        this._cache.updatePersistence("local");
        const { anonymousUuidKey: e2, refreshTokenKey: t22 } = this._cache.keys, n2 = this._cache.getStore(e2) || void 0, s2 = this._cache.getStore(t22) || void 0, r2 = yield this._request.send("auth.signInAnonymously", { anonymous_uuid: n2, refresh_token: s2 });
        if (r2.uuid && r2.refresh_token) {
          this._setAnonymousUUID(r2.uuid), this.setRefreshToken(r2.refresh_token), yield this._request.refreshAccessToken(), qe(Ke), qe($e, { env: this.config.env, loginType: He.ANONYMOUS, persistence: "local" });
          const e3 = new tt(this.config.env);
          return yield e3.user.refresh(), e3;
        }
        throw new te({ message: "\u533F\u540D\u767B\u5F55\u5931\u8D25" });
      });
    }
    linkAndRetrieveDataWithTicket(e2) {
      return __async(this, null, function* () {
        const { anonymousUuidKey: t22, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t22), r2 = this._cache.getStore(n2), i2 = yield this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: r2, ticket: e2 });
        if (i2.refresh_token)
          return this._clearAnonymousUUID(), this.setRefreshToken(i2.refresh_token), yield this._request.refreshAccessToken(), qe(Be, { env: this.config.env }), qe($e, { loginType: He.CUSTOM, persistence: "local" }), { credential: { refreshToken: i2.refresh_token } };
        throw new te({ message: "\u533F\u540D\u8F6C\u5316\u5931\u8D25" });
      });
    }
    _setAnonymousUUID(e2) {
      const { anonymousUuidKey: t22, loginTypeKey: n2 } = this._cache.keys;
      this._cache.removeStore(t22), this._cache.setStore(t22, e2), this._cache.setStore(n2, He.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  };
  var st = class extends Ze {
    signIn(e2) {
      return __async(this, null, function* () {
        if ("string" != typeof e2)
          throw new te({ code: "PARAM_ERROR", message: "ticket must be a string" });
        const { refreshTokenKey: t22 } = this._cache.keys, n2 = yield this._request.send("auth.signInWithTicket", { ticket: e2, refresh_token: this._cache.getStore(t22) || "" });
        if (n2.refresh_token)
          return this.setRefreshToken(n2.refresh_token), yield this._request.refreshAccessToken(), qe(Ke), qe($e, { env: this.config.env, loginType: He.CUSTOM, persistence: this.config.persistence }), yield this.refreshUserInfo(), new tt(this.config.env);
        throw new te({ message: "\u81EA\u5B9A\u4E49\u767B\u5F55\u5931\u8D25" });
      });
    }
  };
  var rt = class extends Ze {
    signIn(e2, t22) {
      return __async(this, null, function* () {
        if ("string" != typeof e2)
          throw new te({ code: "PARAM_ERROR", message: "email must be a string" });
        const { refreshTokenKey: n2 } = this._cache.keys, s2 = yield this._request.send("auth.signIn", { loginType: "EMAIL", email: e2, password: t22, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token: i2, access_token_expire: o2 } = s2;
        if (r2)
          return this.setRefreshToken(r2), i2 && o2 ? this.setAccessToken(i2, o2) : yield this._request.refreshAccessToken(), yield this.refreshUserInfo(), qe(Ke), qe($e, { env: this.config.env, loginType: He.EMAIL, persistence: this.config.persistence }), new tt(this.config.env);
        throw s2.code ? new te({ code: s2.code, message: `\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: ${s2.message}` }) : new te({ message: "\u90AE\u7BB1\u767B\u5F55\u5931\u8D25" });
      });
    }
    activate(e2) {
      return __async(this, null, function* () {
        return this._request.send("auth.activateEndUserMail", { token: e2 });
      });
    }
    resetPasswordWithToken(e2, t22) {
      return __async(this, null, function* () {
        return this._request.send("auth.resetPasswordWithToken", { token: e2, newPassword: t22 });
      });
    }
  };
  var it = class extends Ze {
    signIn(e2, t22) {
      return __async(this, null, function* () {
        if ("string" != typeof e2)
          throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
        "string" != typeof t22 && (t22 = "", console.warn("password is empty"));
        const { refreshTokenKey: n2 } = this._cache.keys, s2 = yield this._request.send("auth.signIn", { loginType: He.USERNAME, username: e2, password: t22, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token_expire: i2, access_token: o2 } = s2;
        if (r2)
          return this.setRefreshToken(r2), o2 && i2 ? this.setAccessToken(o2, i2) : yield this._request.refreshAccessToken(), yield this.refreshUserInfo(), qe(Ke), qe($e, { env: this.config.env, loginType: He.USERNAME, persistence: this.config.persistence }), new tt(this.config.env);
        throw s2.code ? new te({ code: s2.code, message: `\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: ${s2.message}` }) : new te({ message: "\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25" });
      });
    }
  };
  var ot = class {
    constructor(e2) {
      this.config = e2, this._cache = Re(e2.env), this._request = Xe(e2.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), Me($e, this._onLoginTypeChanged);
    }
    get currentUser() {
      const e2 = this.hasLoginState();
      return e2 && e2.user || null;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
    anonymousAuthProvider() {
      return new nt(this.config);
    }
    customAuthProvider() {
      return new st(this.config);
    }
    emailAuthProvider() {
      return new rt(this.config);
    }
    usernameAuthProvider() {
      return new it(this.config);
    }
    signInAnonymously() {
      return __async(this, null, function* () {
        return new nt(this.config).signIn();
      });
    }
    signInWithEmailAndPassword(e2, t22) {
      return __async(this, null, function* () {
        return new rt(this.config).signIn(e2, t22);
      });
    }
    signInWithUsernameAndPassword(e2, t22) {
      return new it(this.config).signIn(e2, t22);
    }
    linkAndRetrieveDataWithTicket(e2) {
      return __async(this, null, function* () {
        this._anonymousAuthProvider || (this._anonymousAuthProvider = new nt(this.config)), Me(Be, this._onAnonymousConverted);
        return yield this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e2);
      });
    }
    signOut() {
      return __async(this, null, function* () {
        if (this.loginType === He.ANONYMOUS)
          throw new te({ message: "\u533F\u540D\u7528\u6237\u4E0D\u652F\u6301\u767B\u51FA\u64CD\u4F5C" });
        const { refreshTokenKey: e2, accessTokenKey: t22, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e2);
        if (!s2)
          return;
        const r2 = yield this._request.send("auth.logout", { refresh_token: s2 });
        return this._cache.removeStore(e2), this._cache.removeStore(t22), this._cache.removeStore(n2), qe(Ke), qe($e, { env: this.config.env, loginType: He.NULL, persistence: this.config.persistence }), r2;
      });
    }
    signUpWithEmailAndPassword(e2, t22) {
      return __async(this, null, function* () {
        return this._request.send("auth.signUpWithEmailAndPassword", { email: e2, password: t22 });
      });
    }
    sendPasswordResetEmail(e2) {
      return __async(this, null, function* () {
        return this._request.send("auth.sendPasswordResetEmail", { email: e2 });
      });
    }
    onLoginStateChanged(e2) {
      Me(Ke, () => {
        const t3 = this.hasLoginState();
        e2.call(this, t3);
      });
      const t22 = this.hasLoginState();
      e2.call(this, t22);
    }
    onLoginStateExpired(e2) {
      Me(je, e2.bind(this));
    }
    onAccessTokenRefreshed(e2) {
      Me(We, e2.bind(this));
    }
    onAnonymousConverted(e2) {
      Me(Be, e2.bind(this));
    }
    onLoginTypeChanged(e2) {
      Me($e, () => {
        const t22 = this.hasLoginState();
        e2.call(this, t22);
      });
    }
    getAccessToken() {
      return __async(this, null, function* () {
        return { accessToken: (yield this._request.getAccessToken()).accessToken, env: this.config.env };
      });
    }
    hasLoginState() {
      const { refreshTokenKey: e2 } = this._cache.keys;
      return this._cache.getStore(e2) ? new tt(this.config.env) : null;
    }
    isUsernameRegistered(e2) {
      return __async(this, null, function* () {
        if ("string" != typeof e2)
          throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
        const { data: t22 } = yield this._request.send("auth.isUsernameRegistered", { username: e2 });
        return t22 && t22.isRegistered;
      });
    }
    getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
    signInWithTicket(e2) {
      return __async(this, null, function* () {
        return new st(this.config).signIn(e2);
      });
    }
    shouldRefreshAccessToken(e2) {
      this._request._shouldRefreshAccessTokenHook = e2.bind(this);
    }
    getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then((e2) => e2.code ? e2 : __spreadProps(__spreadValues({}, e2.data), { requestId: e2.seqId }));
    }
    getAuthHeader() {
      const { refreshTokenKey: e2, accessTokenKey: t22 } = this._cache.keys, n2 = this._cache.getStore(e2);
      return { "x-cloudbase-credentials": this._cache.getStore(t22) + "/@@/" + n2 };
    }
    _onAnonymousConverted(e2) {
      const { env: t22 } = e2.data;
      t22 === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
    _onLoginTypeChanged(e2) {
      const { loginType: t22, persistence: n2, env: s2 } = e2.data;
      s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t22));
    }
  };
  var at = function(e2, t22) {
    t22 = t22 || Ie();
    const n2 = Xe(this.config.env), { cloudPath: s2, filePath: r2, onUploadProgress: i2, fileType: o2 = "image" } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      const { data: { url: a2, authorization: c2, token: u2, fileId: l2, cosFileId: h2 }, requestId: d2 } = e3, p2 = { key: s2, signature: c2, "x-cos-meta-fileid": h2, success_action_status: "201", "x-cos-security-token": u2 };
      n2.upload({ url: a2, data: p2, file: r2, name: s2, fileType: o2, onUploadProgress: i2 }).then((e4) => {
        201 === e4.statusCode ? t22(null, { fileID: l2, requestId: d2 }) : t22(new te({ code: "STORAGE_REQUEST_FAIL", message: `STORAGE_REQUEST_FAIL: ${e4.data}` }));
      }).catch((e4) => {
        t22(e4);
      });
    }).catch((e3) => {
      t22(e3);
    }), t22.promise;
  };
  var ct = function(e2, t22) {
    t22 = t22 || Ie();
    const n2 = Xe(this.config.env), { cloudPath: s2 } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      t22(null, e3);
    }).catch((e3) => {
      t22(e3);
    }), t22.promise;
  };
  var ut = function({ fileList: e2 }, t22) {
    if (t22 = t22 || Ie(), !e2 || !Array.isArray(e2))
      return { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" };
    for (let t3 of e2)
      if (!t3 || "string" != typeof t3)
        return { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" };
    const n2 = { fileid_list: e2 };
    return Xe(this.config.env).send("storage.batchDeleteFile", n2).then((e3) => {
      e3.code ? t22(null, e3) : t22(null, { fileList: e3.data.delete_list, requestId: e3.requestId });
    }).catch((e3) => {
      t22(e3);
    }), t22.promise;
  };
  var lt = function({ fileList: e2 }, t22) {
    t22 = t22 || Ie(), e2 && Array.isArray(e2) || t22(null, { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" });
    let n2 = [];
    for (let s3 of e2)
      "object" == typeof s3 ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t22(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5305\u542BfileID\u548CmaxAge\u7684\u5BF9\u8C61" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : "string" == typeof s3 ? n2.push({ fileid: s3 }) : t22(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5B57\u7B26\u4E32" });
    const s2 = { file_list: n2 };
    return Xe(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e3) => {
      e3.code ? t22(null, e3) : t22(null, { fileList: e3.data.download_list, requestId: e3.requestId });
    }).catch((e3) => {
      t22(e3);
    }), t22.promise;
  };
  var ht = function(_0, _1) {
    return __async(this, arguments, function* ({ fileID: e2 }, t22) {
      const n2 = (yield lt.call(this, { fileList: [{ fileID: e2, maxAge: 600 }] })).fileList[0];
      if ("SUCCESS" !== n2.code)
        return t22 ? t22(n2) : new Promise((e3) => {
          e3(n2);
        });
      const s2 = Xe(this.config.env);
      let r2 = n2.download_url;
      if (r2 = encodeURI(r2), !t22)
        return s2.download({ url: r2 });
      t22(yield s2.download({ url: r2 }));
    });
  };
  var dt = function({ name: e2, data: t22, query: n2, parse: s2, search: r2, timeout: i2 }, o2) {
    const a2 = o2 || Ie();
    let c2;
    try {
      c2 = t22 ? JSON.stringify(t22) : "";
    } catch (e3) {
      return Promise.reject(e3);
    }
    if (!e2)
      return Promise.reject(new te({ code: "PARAM_ERROR", message: "\u51FD\u6570\u540D\u4E0D\u80FD\u4E3A\u7A7A" }));
    const u2 = { inQuery: n2, parse: s2, search: r2, function_name: e2, request_data: c2 };
    return Xe(this.config.env).send("functions.invokeFunction", u2, { timeout: i2 }).then((e3) => {
      if (e3.code)
        a2(null, e3);
      else {
        let t3 = e3.data.response_data;
        if (s2)
          a2(null, { result: t3, requestId: e3.requestId });
        else
          try {
            t3 = JSON.parse(e3.data.response_data), a2(null, { result: t3, requestId: e3.requestId });
          } catch (e4) {
            a2(new te({ message: "response data must be json" }));
          }
      }
      return a2.promise;
    }).catch((e3) => {
      a2(e3);
    }), a2.promise;
  };
  var pt = { timeout: 15e3, persistence: "session" };
  var ft = {};
  var gt = class _gt {
    constructor(e2) {
      this.config = e2 || this.config, this.authObj = void 0;
    }
    init(e2) {
      switch (Ce.adapter || (this.requestClient = new Ce.adapter.reqClass({ timeout: e2.timeout || 5e3, timeoutMsg: `\u8BF7\u6C42\u5728${(e2.timeout || 5e3) / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD` })), this.config = __spreadValues(__spreadValues({}, pt), e2), true) {
        case this.config.timeout > 6e5:
          console.warn("timeout\u5927\u4E8E\u53EF\u914D\u7F6E\u4E0A\u9650[10\u5206\u949F]\uFF0C\u5DF2\u91CD\u7F6E\u4E3A\u4E0A\u9650\u6570\u503C"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout\u5C0F\u4E8E\u53EF\u914D\u7F6E\u4E0B\u9650[100ms]\uFF0C\u5DF2\u91CD\u7F6E\u4E3A\u4E0B\u9650\u6570\u503C"), this.config.timeout = 100;
      }
      return new _gt(this.config);
    }
    auth({ persistence: e2 } = {}) {
      if (this.authObj)
        return this.authObj;
      const t22 = e2 || Ce.adapter.primaryStorage || pt.persistence;
      var n2;
      return t22 !== this.config.persistence && (this.config.persistence = t22), function(e3) {
        const { env: t3 } = e3;
        Ee[t3] = new Oe(e3), Le[t3] = new Oe(__spreadProps(__spreadValues({}, e3), { persistence: "local" }));
      }(this.config), n2 = this.config, Qe[n2.env] = new Ye(n2), this.authObj = new ot(this.config), this.authObj;
    }
    on(e2, t22) {
      return Me.apply(this, [e2, t22]);
    }
    off(e2, t22) {
      return Fe.apply(this, [e2, t22]);
    }
    callFunction(e2, t22) {
      return dt.apply(this, [e2, t22]);
    }
    deleteFile(e2, t22) {
      return ut.apply(this, [e2, t22]);
    }
    getTempFileURL(e2, t22) {
      return lt.apply(this, [e2, t22]);
    }
    downloadFile(e2, t22) {
      return ht.apply(this, [e2, t22]);
    }
    uploadFile(e2, t22) {
      return at.apply(this, [e2, t22]);
    }
    getUploadMetadata(e2, t22) {
      return ct.apply(this, [e2, t22]);
    }
    registerExtension(e2) {
      ft[e2.name] = e2;
    }
    invokeExtension(e2, t22) {
      return __async(this, null, function* () {
        const n2 = ft[e2];
        if (!n2)
          throw new te({ message: `\u6269\u5C55${e2} \u5FC5\u987B\u5148\u6CE8\u518C` });
        return yield n2.invoke(t22, this);
      });
    }
    useAdapters(e2) {
      const { adapter: t22, runtime: n2 } = Ae(e2) || {};
      t22 && (Ce.adapter = t22), n2 && (Ce.runtime = n2);
    }
  };
  var mt = new gt();
  function yt(e2, t22, n2) {
    void 0 === n2 && (n2 = {});
    var s2 = /\?/.test(t22), r2 = "";
    for (var i2 in n2)
      "" === r2 ? !s2 && (t22 += "?") : r2 += "&", r2 += i2 + "=" + encodeURIComponent(n2[i2]);
    return /^http(s)?:\/\//.test(t22 += r2) ? t22 : "" + e2 + t22;
  }
  var _t = class {
    post(e2) {
      const { url: t22, data: n2, headers: s2, timeout: r2 } = e2;
      return new Promise((e3, i2) => {
        ne.request({ url: yt("https:", t22), data: n2, method: "POST", header: s2, timeout: r2, success(t3) {
          e3(t3);
        }, fail(e4) {
          i2(e4);
        } });
      });
    }
    upload(e2) {
      return new Promise((t22, n2) => {
        const { url: s2, file: r2, data: i2, headers: o2, fileType: a2 } = e2, c2 = ne.uploadFile({ url: yt("https:", s2), name: "file", formData: Object.assign({}, i2), filePath: r2, fileType: a2, header: o2, success(e3) {
          const n3 = { statusCode: e3.statusCode, data: e3.data || {} };
          200 === e3.statusCode && i2.success_action_status && (n3.statusCode = parseInt(i2.success_action_status, 10)), t22(n3);
        }, fail(e3) {
          n2(new Error(e3.errMsg || "uploadFile:fail"));
        } });
        "function" == typeof e2.onUploadProgress && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((t3) => {
          e2.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
        });
      });
    }
  };
  var wt = { setItem(e2, t22) {
    ne.setStorageSync(e2, t22);
  }, getItem: (e2) => ne.getStorageSync(e2), removeItem(e2) {
    ne.removeStorageSync(e2);
  }, clear() {
    ne.clearStorageSync();
  } };
  var vt = { genAdapter: function() {
    return { root: {}, reqClass: _t, localStorage: wt, primaryStorage: "local" };
  }, isMatch: function() {
    return true;
  }, runtime: "uni_app" };
  mt.useAdapters(vt);
  var It = mt;
  var St = It.init;
  It.init = function(e2) {
    e2.env = e2.spaceId;
    const t22 = St.call(this, e2);
    t22.config.provider = "tencent", t22.config.spaceId = e2.spaceId;
    const n2 = t22.auth;
    return t22.auth = function(e3) {
      const t3 = n2.call(this, e3);
      return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e4) => {
        var n3;
        t3[e4] = (n3 = t3[e4], function(e5) {
          e5 = e5 || {};
          const { success: t4, fail: s2, complete: r2 } = ee(e5);
          if (!(t4 || s2 || r2))
            return n3.call(this, e5);
          n3.call(this, e5).then((e6) => {
            t4 && t4(e6), r2 && r2(e6);
          }, (e6) => {
            s2 && s2(e6), r2 && r2(e6);
          });
        }).bind(t3);
      }), t3;
    }, t22.customAuth = t22.auth, t22;
  };
  var bt = It;
  function kt(e2, t22) {
    return __async(this, null, function* () {
      const n2 = `http://${e2}:${t22}/system/ping`;
      try {
        const e3 = yield (s2 = { url: n2, timeout: 500 }, new Promise((e4, t3) => {
          ne.request(__spreadProps(__spreadValues({}, s2), { success(t4) {
            e4(t4);
          }, fail(e5) {
            t3(e5);
          } }));
        }));
        return !(!e3.data || 0 !== e3.data.code);
      } catch (e3) {
        return false;
      }
      var s2;
    });
  }
  function At(e2, t22) {
    return __async(this, null, function* () {
      let n2;
      for (let s2 = 0; s2 < e2.length; s2++) {
        const r2 = e2[s2];
        if (yield kt(r2, t22)) {
          n2 = r2;
          break;
        }
      }
      return { address: n2, port: t22 };
    });
  }
  var Ct = { "serverless.file.resource.generateProximalSign": "storage/generate-proximal-sign", "serverless.file.resource.report": "storage/report", "serverless.file.resource.delete": "storage/delete", "serverless.file.resource.getTempFileURL": "storage/get-temp-file-url" };
  var Pt = class {
    constructor(e2) {
      if (["spaceId", "clientSecret"].forEach((t22) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t22))
          throw new Error(`${t22} required`);
      }), !e2.endpoint)
        throw new Error("\u96C6\u7FA4\u7A7A\u95F4\u672A\u914D\u7F6EApiEndpoint\uFF0C\u914D\u7F6E\u540E\u9700\u8981\u91CD\u65B0\u5173\u8054\u670D\u52A1\u7A7A\u95F4\u540E\u751F\u6548");
      this.config = Object.assign({}, e2), this.config.provider = "dcloud", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.adapter = ne;
    }
    request(e2, t22 = true) {
      return __async(this, null, function* () {
        const n2 = t22;
        return e2 = n2 ? yield this.setupLocalRequest(e2) : this.setupRequest(e2), Promise.resolve().then(() => n2 ? this.requestLocal(e2) : de.wrappedRequest(e2, this.adapter.request));
      });
    }
    requestLocal(e2) {
      return new Promise((t22, n2) => {
        this.adapter.request(Object.assign(e2, { complete(e3) {
          if (e3 || (e3 = {}), !e3.statusCode || e3.statusCode >= 400) {
            const t3 = e3.data && e3.data.code || "SYS_ERR", s2 = e3.data && e3.data.message || "request:fail";
            return n2(new te({ code: t3, message: s2 }));
          }
          t22({ success: true, result: e3.data });
        } }));
      });
    }
    setupRequest(e2) {
      const t22 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), n2 = { "Content-Type": "application/json" };
      n2["x-serverless-sign"] = de.sign(t22, this.config.clientSecret);
      const s2 = he();
      n2["x-client-info"] = encodeURIComponent(JSON.stringify(s2));
      const { token: r2 } = re();
      return n2["x-client-token"] = r2, { url: this.config.requestUrl, method: "POST", data: t22, dataType: "json", header: JSON.parse(JSON.stringify(n2)) };
    }
    setupLocalRequest(e2) {
      return __async(this, null, function* () {
        const t22 = he(), { token: n2 } = re(), s2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now(), clientInfo: t22, token: n2 }), { address: r2, servePort: i2 } = this.__dev__ && this.__dev__.debugInfo || {}, { address: o2 } = yield At(r2, i2);
        return { url: `http://${o2}:${i2}/${Ct[e2.method]}`, method: "POST", data: s2, dataType: "json", header: JSON.parse(JSON.stringify({ "Content-Type": "application/json" })) };
      });
    }
    callFunction(e2) {
      const t22 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e2.name, functionArgs: e2.data || {} }) };
      return this.request(t22, false);
    }
    getUploadFileOptions(e2) {
      const t22 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e2) };
      return this.request(t22);
    }
    reportUploadFile(e2) {
      const t22 = { method: "serverless.file.resource.report", params: JSON.stringify(e2) };
      return this.request(t22);
    }
    uploadFile({ filePath: e2, cloudPath: t22, fileType: n2 = "image", onUploadProgress: s2 }) {
      if (!t22)
        throw new te({ code: "CLOUDPATH_REQUIRED", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
      let r2;
      return this.getUploadFileOptions({ cloudPath: t22 }).then((t3) => {
        const { url: i2, formData: o2, name: a2 } = t3.result;
        return r2 = t3.result.fileUrl, new Promise((t4, r3) => {
          const c2 = this.adapter.uploadFile({ url: i2, formData: o2, name: a2, filePath: e2, fileType: n2, success(e3) {
            e3 && e3.statusCode < 400 ? t4(e3) : r3(new te({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
          }, fail(e3) {
            r3(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
          } });
          "function" == typeof s2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
            s2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
          });
        });
      }).then(() => this.reportUploadFile({ cloudPath: t22 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e2, fileID: r2 }) : s3(new te({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
      }));
    }
    deleteFile({ fileList: e2 }) {
      const t22 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e2 }) };
      return this.request(t22).then((e3) => {
        if (e3.success)
          return e3.result;
        throw new te({ code: "DELETE_FILE_FAILED", message: "\u5220\u9664\u6587\u4EF6\u5931\u8D25" });
      });
    }
    getTempFileURL({ fileList: e2, maxAge: t22 } = {}) {
      if (!Array.isArray(e2) || 0 === e2.length)
        throw new te({ code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" });
      const n2 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e2, maxAge: t22 }) };
      return this.request(n2).then((e3) => {
        if (e3.success)
          return { fileList: e3.result.fileList.map((e4) => ({ fileID: e4.fileID, tempFileURL: e4.tempFileURL })) };
        throw new te({ code: "GET_TEMP_FILE_URL_FAILED", message: "\u83B7\u53D6\u4E34\u65F6\u6587\u4EF6\u94FE\u63A5\u5931\u8D25" });
      });
    }
  };
  var Tt = { init(e2) {
    const t22 = new Pt(e2), n2 = { signInAnonymously: function() {
      return Promise.resolve();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t22.auth = function() {
      return n2;
    }, t22.customAuth = t22.auth, t22;
  } };
  var xt = n(function(e2, t22) {
    e2.exports = r.enc.Hex;
  });
  function Ot() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e2) {
      var t22 = 16 * Math.random() | 0;
      return ("x" === e2 ? t22 : 3 & t22 | 8).toString(16);
    });
  }
  function Et(e2 = "", t22 = {}) {
    const { data: n2, functionName: s2, method: r2, headers: i2, signHeaderKeys: o2 = [], config: a2 } = t22, c2 = Date.now(), u2 = Ot(), l2 = Object.assign({}, i2, { "x-from-app-id": a2.spaceAppId, "x-from-env-id": a2.spaceId, "x-to-env-id": a2.spaceId, "x-from-instance-id": c2, "x-from-function-name": s2, "x-client-timestamp": c2, "x-alipay-source": "client", "x-request-id": u2, "x-alipay-callid": u2, "x-trace-id": u2 }), h2 = ["x-from-app-id", "x-from-env-id", "x-to-env-id", "x-from-instance-id", "x-from-function-name", "x-client-timestamp"].concat(o2), [d2 = "", p2 = ""] = e2.split("?") || [], f2 = function(e3) {
      const t3 = e3.signedHeaders.join(";"), n3 = e3.signedHeaders.map((t4) => `${t4.toLowerCase()}:${e3.headers[t4]}
`).join(""), s3 = we(e3.body).toString(xt), r3 = `${e3.method.toUpperCase()}
${e3.path}
${e3.query}
${n3}
${t3}
${s3}
`, i3 = we(r3).toString(xt), o3 = `HMAC-SHA256
${e3.timestamp}
${i3}
`, a3 = ve(o3, e3.secretKey).toString(xt);
      return `HMAC-SHA256 Credential=${e3.secretId}, SignedHeaders=${t3}, Signature=${a3}`;
    }({ path: d2, query: p2, method: r2, headers: l2, timestamp: c2, body: JSON.stringify(n2), secretId: a2.accessKey, secretKey: a2.secretKey, signedHeaders: h2.sort() });
    return { url: `${a2.endpoint}${e2}`, headers: Object.assign({}, l2, { Authorization: f2 }) };
  }
  function Lt({ url: e2, data: t22, method: n2 = "POST", headers: s2 = {}, timeout: r2 }) {
    return new Promise((i2, o2) => {
      ne.request({ url: e2, method: n2, data: "object" == typeof t22 ? JSON.stringify(t22) : t22, header: s2, dataType: "json", timeout: r2, complete: (e3 = {}) => {
        const t3 = s2["x-trace-id"] || "";
        if (!e3.statusCode || e3.statusCode >= 400) {
          const { message: n3, errMsg: s3, trace_id: r3 } = e3.data || {};
          return o2(new te({ code: "SYS_ERR", message: n3 || s3 || "request:fail", requestId: r3 || t3 }));
        }
        i2({ status: e3.statusCode, data: e3.data, headers: e3.header, requestId: t3 });
      } });
    });
  }
  function Rt(e2, t22) {
    const { path: n2, data: s2, method: r2 = "GET" } = e2, { url: i2, headers: o2 } = Et(n2, { functionName: "", data: s2, method: r2, headers: { "x-alipay-cloud-mode": "oss", "x-data-api-type": "oss", "x-expire-timestamp": Date.now() + 6e4 }, signHeaderKeys: ["x-data-api-type", "x-expire-timestamp"], config: t22 });
    return Lt({ url: i2, data: s2, method: r2, headers: o2 }).then((e3) => {
      const t3 = e3.data || {};
      if (!t3.success)
        throw new te({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
      return t3.data || {};
    }).catch((e3) => {
      throw new te({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
    });
  }
  function Ut(e2 = "") {
    const t22 = e2.trim().replace(/^cloud:\/\//, ""), n2 = t22.indexOf("/");
    if (n2 <= 0)
      throw new te({ code: "INVALID_PARAM", message: "fileID\u4E0D\u5408\u6CD5" });
    const s2 = t22.substring(0, n2), r2 = t22.substring(n2 + 1);
    return s2 !== this.config.spaceId && console.warn("file ".concat(e2, " does not belong to env ").concat(this.config.spaceId)), r2;
  }
  function Nt(e2 = "") {
    return "cloud://".concat(this.config.spaceId, "/").concat(e2.replace(/^\/+/, ""));
  }
  var Dt = class {
    constructor(e2) {
      this.config = e2;
    }
    signedURL(e2, t22 = {}) {
      const n2 = `/ws/function/${e2}`, s2 = this.config.wsEndpoint.replace(/^ws(s)?:\/\//, ""), r2 = Object.assign({}, t22, { accessKeyId: this.config.accessKey, signatureNonce: Ot(), timestamp: "" + Date.now() }), i2 = [n2, ["accessKeyId", "authorization", "signatureNonce", "timestamp"].sort().map(function(e3) {
        return r2[e3] ? "".concat(e3, "=").concat(r2[e3]) : null;
      }).filter(Boolean).join("&"), `host:${s2}`].join("\n"), o2 = ["HMAC-SHA256", we(i2).toString(xt)].join("\n"), a2 = ve(o2, this.config.secretKey).toString(xt), c2 = Object.keys(r2).map((e3) => `${e3}=${encodeURIComponent(r2[e3])}`).join("&");
      return `${this.config.wsEndpoint}${n2}?${c2}&signature=${a2}`;
    }
  };
  var Mt = class {
    constructor(e2) {
      if (["spaceId", "spaceAppId", "accessKey", "secretKey"].forEach((t22) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t22))
          throw new Error(`${t22} required`);
      }), e2.endpoint) {
        if ("string" != typeof e2.endpoint)
          throw new Error("endpoint must be string");
        if (!/^https:\/\//.test(e2.endpoint))
          throw new Error("endpoint must start with https://");
        e2.endpoint = e2.endpoint.replace(/\/$/, "");
      }
      this.config = Object.assign({}, e2, { endpoint: e2.endpoint || `https://${e2.spaceId}.api-hz.cloudbasefunction.cn`, wsEndpoint: e2.wsEndpoint || `wss://${e2.spaceId}.api-hz.cloudbasefunction.cn` }), this._websocket = new Dt(this.config);
    }
    callFunction(e2) {
      return function(e3, t22) {
        const { name: n2, data: s2, async: r2 = false, timeout: i2 } = e3, o2 = "POST", a2 = { "x-to-function-name": n2 };
        r2 && (a2["x-function-invoke-type"] = "async");
        const { url: c2, headers: u2 } = Et("/functions/invokeFunction", { functionName: n2, data: s2, method: o2, headers: a2, signHeaderKeys: ["x-to-function-name"], config: t22 });
        return Lt({ url: c2, data: s2, method: o2, headers: u2, timeout: i2 }).then((e4) => {
          let t3 = 0;
          if (r2) {
            const n3 = e4.data || {};
            t3 = "200" === n3.errCode ? 0 : n3.errCode, e4.data = n3.data || {}, e4.errMsg = n3.errMsg;
          }
          if (0 !== t3)
            throw new te({ code: t3, message: e4.errMsg, requestId: e4.requestId });
          return { errCode: t3, success: 0 === t3, requestId: e4.requestId, result: e4.data };
        }).catch((e4) => {
          throw new te({ code: e4.errCode, message: e4.errMsg, requestId: e4.requestId });
        });
      }(e2, this.config);
    }
    uploadFileToOSS({ url: e2, filePath: t22, fileType: n2, formData: s2, onUploadProgress: r2 }) {
      return new Promise((i2, o2) => {
        const a2 = ne.uploadFile({ url: e2, filePath: t22, fileType: n2, formData: s2, name: "file", success(e3) {
          e3 && e3.statusCode < 400 ? i2(e3) : o2(new te({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e3) {
          o2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        "function" == typeof r2 && a2 && "function" == typeof a2.onProgressUpdate && a2.onProgressUpdate((e3) => {
          r2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    uploadFile(_0) {
      return __async(this, arguments, function* ({ filePath: e2, cloudPath: t22 = "", fileType: n2 = "image", onUploadProgress: s2 }) {
        if ("string" !== f(t22))
          throw new te({ code: "INVALID_PARAM", message: "cloudPath\u5FC5\u987B\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B" });
        if (!(t22 = t22.trim()))
          throw new te({ code: "INVALID_PARAM", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
        if (/:\/\//.test(t22))
          throw new te({ code: "INVALID_PARAM", message: "cloudPath\u4E0D\u5408\u6CD5" });
        const r2 = yield Rt({ path: "/".concat(t22.replace(/^\//, ""), "?post_url") }, this.config), { file_id: i2, upload_url: o2, form_data: a2 } = r2, c2 = a2 && a2.reduce((e3, t3) => (e3[t3.key] = t3.value, e3), {});
        return this.uploadFileToOSS({ url: o2, filePath: e2, fileType: n2, formData: c2, onUploadProgress: s2 }).then(() => ({ fileID: i2 }));
      });
    }
    getTempFileURL(_0) {
      return __async(this, arguments, function* ({ fileList: e2 }) {
        return new Promise((t22, n2) => {
          (!e2 || e2.length < 0) && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList\u4E0D\u80FD\u4E3A\u7A7A\u6570\u7EC4" })), e2.length > 50 && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList\u6570\u7EC4\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC750" }));
          const s2 = [];
          for (const t3 of e2) {
            "string" !== f(t3) && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" }));
            const e3 = Ut.call(this, t3);
            s2.push({ file_id: e3, expire: 600 });
          }
          Rt({ path: "/?download_url", data: { file_list: s2 }, method: "POST" }, this.config).then((e3) => {
            const { file_list: n3 = [] } = e3;
            t22({ fileList: n3.map((e4) => ({ fileID: Nt.call(this, e4.file_id), tempFileURL: e4.download_url })) });
          }).catch((e3) => n2(e3));
        });
      });
    }
    connectWebSocket(e2) {
      return __async(this, null, function* () {
        const { name: t22, query: n2 } = e2;
        return ne.connectSocket({ url: this._websocket.signedURL(t22, n2), complete: () => {
        } });
      });
    }
  };
  var qt = { init: (e2) => {
    e2.provider = "alipay";
    const t22 = new Mt(e2);
    return t22.auth = function() {
      return { signInAnonymously: function() {
        return Promise.resolve();
      }, getLoginState: function() {
        return Promise.resolve(true);
      } };
    }, t22;
  } };
  function Ft({ data: e2 }) {
    let t22;
    t22 = he();
    const n2 = JSON.parse(JSON.stringify(e2 || {}));
    if (Object.assign(n2, { clientInfo: t22 }), !n2.uniIdToken) {
      const { token: e3 } = re();
      e3 && (n2.uniIdToken = e3);
    }
    return n2;
  }
  function Kt() {
    return __async(this, arguments, function* (e2 = {}) {
      yield this.__dev__.initLocalNetwork();
      const { localAddress: t22, localPort: n2 } = this.__dev__, s2 = { aliyun: "aliyun", tencent: "tcb", alipay: "alipay", dcloud: "dcloud" }[this.config.provider], r2 = this.config.spaceId, i2 = `http://${t22}:${n2}/system/check-function`, o2 = `http://${t22}:${n2}/cloudfunctions/${e2.name}`;
      return new Promise((t3, n3) => {
        ne.request({ method: "POST", url: i2, data: { name: e2.name, platform: C, provider: s2, spaceId: r2 }, timeout: 3e3, success(e3) {
          t3(e3);
        }, fail() {
          t3({ data: { code: "NETWORK_ERROR", message: "\u8FDE\u63A5\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u548C\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570\u3002" } });
        } });
      }).then(({ data: e3 } = {}) => {
        const { code: t3, message: n3 } = e3 || {};
        return { code: 0 === t3 ? 0 : t3 || "SYS_ERR", message: n3 || "SYS_ERR" };
      }).then(({ code: t3, message: n3 }) => {
        if (0 !== t3) {
          switch (t3) {
            case "MODULE_ENCRYPTED":
              console.error(`\u6B64\u4E91\u51FD\u6570\uFF08${e2.name}\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570`);
              break;
            case "FUNCTION_ENCRYPTED":
              console.error(`\u6B64\u4E91\u51FD\u6570\uFF08${e2.name}\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570`);
              break;
            case "ACTION_ENCRYPTED":
              console.error(n3 || "\u9700\u8981\u8BBF\u95EE\u52A0\u5BC6\u7684uni-clientDB-action\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u73AF\u5883");
              break;
            case "NETWORK_ERROR":
              console.error(n3 || "\u8FDE\u63A5\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u548C\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B");
              break;
            case "SWITCH_TO_CLOUD":
              break;
            default: {
              const e3 = `\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A${n3}\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5`;
              throw console.error(e3), new Error(e3);
            }
          }
          return this._callCloudFunction(e2);
        }
        return new Promise((t4, n4) => {
          const r3 = Ft.call(this, { data: e2.data });
          ne.request({ method: "POST", url: o2, data: { provider: s2, platform: C, param: r3 }, timeout: e2.timeout, success: ({ statusCode: e3, data: s3 } = {}) => !e3 || e3 >= 400 ? n4(new te({ code: s3.code || "SYS_ERR", message: s3.message || "request:fail" })) : t4({ result: s3 }), fail(e3) {
            n4(new te({ code: e3.code || e3.errCode || "SYS_ERR", message: e3.message || e3.errMsg || "request:fail" }));
          } });
        });
      });
    });
  }
  var jt = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "\uFF0C\u4E91\u51FD\u6570[{functionName}]\u5728\u4E91\u7AEF\u4E0D\u5B58\u5728\uFF0C\u8BF7\u68C0\u67E5\u6B64\u4E91\u51FD\u6570\u540D\u79F0\u662F\u5426\u6B63\u786E\u4EE5\u53CA\u8BE5\u4E91\u51FD\u6570\u662F\u5426\u5DF2\u4E0A\u4F20\u5230\u670D\u52A1\u7A7A\u95F4", mode: "append" }];
  var $t = /[\\^$.*+?()[\]{}|]/g;
  var Bt = RegExp($t.source);
  function Wt(e2, t22, n2) {
    return e2.replace(new RegExp((s2 = t22) && Bt.test(s2) ? s2.replace($t, "\\$&") : s2, "g"), n2);
    var s2;
  }
  var Jt = "request";
  var zt = "response";
  var Vt = "both";
  var En = { code: 2e4, message: "System error" };
  var Ln = { code: 20101, message: "Invalid client" };
  function Nn(e2) {
    const { errSubject: t22, subject: n2, errCode: s2, errMsg: r2, code: i2, message: o2, cause: a2 } = e2 || {};
    return new te({ subject: t22 || n2 || "uni-secure-network", code: s2 || i2 || En.code, message: r2 || o2, cause: a2 });
  }
  var Mn;
  function $n({ secretType: e2 } = {}) {
    return e2 === Jt || e2 === zt || e2 === Vt;
  }
  function Bn({ name: e2, data: t22 = {} } = {}) {
    return "DCloud-clientDB" === e2 && "encryption" === t22.redirectTo && "getAppClientKey" === t22.action;
  }
  function Wn({ provider: e2, spaceId: t22, functionName: n2 } = {}) {
    const { appId: s2, uniPlatform: r2, osName: i2 } = ce();
    let o2 = r2;
    "app" === r2 && (o2 = i2);
    const a2 = function({ provider: e3, spaceId: t3 } = {}) {
      const n3 = A;
      if (!n3)
        return {};
      e3 = /* @__PURE__ */ function(e4) {
        return "tencent" === e4 ? "tcb" : e4;
      }(e3);
      const s3 = n3.find((n4) => n4.provider === e3 && n4.spaceId === t3);
      return s3 && s3.config;
    }({ provider: e2, spaceId: t22 });
    if (!a2 || !a2.accessControl || !a2.accessControl.enable)
      return false;
    const c2 = a2.accessControl.function || {}, u2 = Object.keys(c2);
    if (0 === u2.length)
      return true;
    const l2 = function(e3, t3) {
      let n3, s3, r3;
      for (let i3 = 0; i3 < e3.length; i3++) {
        const o3 = e3[i3];
        o3 !== t3 ? "*" !== o3 ? o3.split(",").map((e4) => e4.trim()).indexOf(t3) > -1 && (s3 = o3) : r3 = o3 : n3 = o3;
      }
      return n3 || s3 || r3;
    }(u2, n2);
    if (!l2)
      return false;
    if ((c2[l2] || []).find((e3 = {}) => e3.appId === s2 && (e3.platform || "").toLowerCase() === o2.toLowerCase()))
      return true;
    throw console.error(`\u6B64\u5E94\u7528[appId: ${s2}, platform: ${o2}]\u4E0D\u5728\u4E91\u7AEF\u914D\u7F6E\u7684\u5141\u8BB8\u8BBF\u95EE\u7684\u5E94\u7528\u5217\u8868\u5185\uFF0C\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client`), Nn(Ln);
  }
  function Hn({ functionName: e2, result: t22, logPvd: n2 }) {
    if (this.__dev__.debugLog && t22 && t22.requestId) {
      const s2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e2, requestId: t22.requestId });
      console.log(`[${n2}-request]${s2}[/${n2}-request]`);
    }
  }
  function Jn(e2) {
    const t22 = e2.callFunction, n2 = function(n3) {
      const s2 = n3.name;
      n3.data = Ft.call(e2, { data: n3.data });
      const r2 = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb", alipay: "alipay", dcloud: "dcloud" }[this.config.provider], i2 = $n(n3), o2 = Bn(n3), a2 = i2 || o2;
      return t22.call(this, n3).then((e3) => (e3.errCode = 0, !a2 && Hn.call(this, { functionName: s2, result: e3, logPvd: r2 }), Promise.resolve(e3)), (e3) => (!a2 && Hn.call(this, { functionName: s2, result: e3, logPvd: r2 }), e3 && e3.message && (e3.message = function({ message: e4 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
        for (let s3 = 0; s3 < n4.length; s3++) {
          const { rule: r3, content: i3, mode: o3 } = n4[s3], a3 = e4.match(r3);
          if (!a3)
            continue;
          let c2 = i3;
          for (let e5 = 1; e5 < a3.length; e5++)
            c2 = Wt(c2, `{$${e5}}`, a3[e5]);
          for (const e5 in t3)
            c2 = Wt(c2, `{${e5}}`, t3[e5]);
          return "replace" === o3 ? c2 : e4 + c2;
        }
        return e4;
      }({ message: `[${n3.name}]: ${e3.message}`, formatter: jt, extraInfo: { functionName: s2 } })), Promise.reject(e3)));
    };
    e2.callFunction = function(t3) {
      const { provider: s2, spaceId: r2 } = e2.config, i2 = t3.name;
      let o2, a2;
      if (t3.data = t3.data || {}, e2.__dev__.debugInfo && !e2.__dev__.debugInfo.forceRemote && T ? (e2._callCloudFunction || (e2._callCloudFunction = n2, e2._callLocalFunction = Kt), o2 = Kt) : o2 = n2, o2 = o2.bind(e2), Bn(t3))
        a2 = n2.call(e2, t3);
      else if ($n(t3)) {
        a2 = new Mn({ secretType: t3.secretType, uniCloudIns: e2 }).wrapEncryptDataCallFunction(n2.bind(e2))(t3);
      } else if (Wn({ provider: s2, spaceId: r2, functionName: i2 })) {
        a2 = new Mn({ secretType: t3.secretType, uniCloudIns: e2 }).wrapVerifyClientCallFunction(n2.bind(e2))(t3);
      } else
        a2 = o2(t3);
      return Object.defineProperty(a2, "result", { get: () => (console.warn("\u5F53\u524D\u8FD4\u56DE\u7ED3\u679C\u4E3APromise\u7C7B\u578B\uFF0C\u4E0D\u53EF\u76F4\u63A5\u8BBF\u95EE\u5176result\u5C5E\u6027\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), a2.then((e3) => ("undefined" != typeof UTSJSONObject && (e3.result = new UTSJSONObject(e3.result)), e3));
    };
  }
  Mn = class {
    constructor() {
      throw Nn({ message: `Platform ${C} is not enabled, please check whether secure network module is enabled in your manifest.json` });
    }
  };
  var zn = Symbol("CLIENT_DB_INTERNAL");
  function Vn(e2, t22) {
    return e2.then = "DoNotReturnProxyWithAFunctionNamedThen", e2._internalType = zn, e2.inspect = null, e2.__v_raw = void 0, new Proxy(e2, { get(e3, n2, s2) {
      if ("_uniClient" === n2)
        return null;
      if ("symbol" == typeof n2)
        return e3[n2];
      if (n2 in e3 || "string" != typeof n2) {
        const t3 = e3[n2];
        return "function" == typeof t3 ? t3.bind(e3) : t3;
      }
      return t22.get(e3, n2, s2);
    } });
  }
  function Gn(e2) {
    return { on: (t22, n2) => {
      e2[t22] = e2[t22] || [], e2[t22].indexOf(n2) > -1 || e2[t22].push(n2);
    }, off: (t22, n2) => {
      e2[t22] = e2[t22] || [];
      const s2 = e2[t22].indexOf(n2);
      -1 !== s2 && e2[t22].splice(s2, 1);
    } };
  }
  var Yn = ["db.Geo", "db.command", "command.aggregate"];
  function Qn(e2, t22) {
    return Yn.indexOf(`${e2}.${t22}`) > -1;
  }
  function Xn(e2) {
    switch (f(e2 = se(e2))) {
      case "array":
        return e2.map((e3) => Xn(e3));
      case "object":
        return e2._internalType === zn || Object.keys(e2).forEach((t22) => {
          e2[t22] = Xn(e2[t22]);
        }), e2;
      case "regexp":
        return { $regexp: { source: e2.source, flags: e2.flags } };
      case "date":
        return { $date: e2.toISOString() };
      default:
        return e2;
    }
  }
  function Zn(e2) {
    return e2 && e2.content && e2.content.$method;
  }
  var es = class {
    constructor(e2, t22, n2) {
      this.content = e2, this.prevStage = t22 || null, this.udb = null, this._database = n2;
    }
    toJSON() {
      let e2 = this;
      const t22 = [e2.content];
      for (; e2.prevStage; )
        e2 = e2.prevStage, t22.push(e2.content);
      return { $db: t22.reverse().map((e3) => ({ $method: e3.$method, $param: Xn(e3.$param) })) };
    }
    toString() {
      return JSON.stringify(this.toJSON());
    }
    getAction() {
      const e2 = this.toJSON().$db.find((e3) => "action" === e3.$method);
      return e2 && e2.$param && e2.$param[0];
    }
    getCommand() {
      return { $db: this.toJSON().$db.filter((e2) => "action" !== e2.$method) };
    }
    get isAggregate() {
      let e2 = this;
      for (; e2; ) {
        const t22 = Zn(e2), n2 = Zn(e2.prevStage);
        if ("aggregate" === t22 && "collection" === n2 || "pipeline" === t22)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isCommand() {
      let e2 = this;
      for (; e2; ) {
        if ("command" === Zn(e2))
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isAggregateCommand() {
      let e2 = this;
      for (; e2; ) {
        const t22 = Zn(e2), n2 = Zn(e2.prevStage);
        if ("aggregate" === t22 && "command" === n2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    getNextStageFn(e2) {
      const t22 = this;
      return function() {
        return ts({ $method: e2, $param: Xn(Array.from(arguments)) }, t22, t22._database);
      };
    }
    get count() {
      return this.isAggregate ? this.getNextStageFn("count") : function() {
        return this._send("count", Array.from(arguments));
      };
    }
    get remove() {
      return this.isCommand ? this.getNextStageFn("remove") : function() {
        return this._send("remove", Array.from(arguments));
      };
    }
    get() {
      return this._send("get", Array.from(arguments));
    }
    get add() {
      return this.isCommand ? this.getNextStageFn("add") : function() {
        return this._send("add", Array.from(arguments));
      };
    }
    update() {
      return this._send("update", Array.from(arguments));
    }
    end() {
      return this._send("end", Array.from(arguments));
    }
    get set() {
      return this.isCommand ? this.getNextStageFn("set") : function() {
        throw new Error("JQL\u7981\u6B62\u4F7F\u7528set\u65B9\u6CD5");
      };
    }
    _send(e2, t22) {
      const n2 = this.getAction(), s2 = this.getCommand();
      if (s2.$db.push({ $method: e2, $param: Xn(t22) }), S) {
        const e3 = s2.$db.find((e4) => "collection" === e4.$method), t3 = e3 && e3.$param;
        t3 && 1 === t3.length && "string" == typeof e3.$param[0] && e3.$param[0].indexOf(",") > -1 && console.warn("\u68C0\u6D4B\u5230\u4F7F\u7528JQL\u8BED\u6CD5\u8054\u8868\u67E5\u8BE2\u65F6\uFF0C\u672A\u4F7F\u7528getTemp\u5148\u8FC7\u6EE4\u4E3B\u8868\u6570\u636E\uFF0C\u5728\u4E3B\u8868\u6570\u636E\u91CF\u5927\u7684\u60C5\u51B5\u4E0B\u53EF\u80FD\u4F1A\u67E5\u8BE2\u7F13\u6162\u3002\n- \u5982\u4F55\u4F18\u5316\u8BF7\u53C2\u8003\u6B64\u6587\u6863\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- \u5982\u679C\u4E3B\u8868\u6570\u636E\u91CF\u5F88\u5C0F\u8BF7\u5FFD\u7565\u6B64\u4FE1\u606F\uFF0C\u9879\u76EE\u53D1\u884C\u65F6\u4E0D\u4F1A\u51FA\u73B0\u6B64\u63D0\u793A\u3002");
      }
      return this._database._callCloudFunction({ action: n2, command: s2 });
    }
  };
  function ts(e2, t22, n2) {
    return Vn(new es(e2, t22, n2), { get(e3, t3) {
      let s2 = "db";
      return e3 && e3.content && (s2 = e3.content.$method), Qn(s2, t3) ? ts({ $method: t3 }, e3, n2) : function() {
        return ts({ $method: t3, $param: Xn(Array.from(arguments)) }, e3, n2);
      };
    } });
  }
  function ns({ path: e2, method: t22 }) {
    return class {
      constructor() {
        this.param = Array.from(arguments);
      }
      toJSON() {
        return { $newDb: [...e2.map((e3) => ({ $method: e3 })), { $method: t22, $param: this.param }] };
      }
      toString() {
        return JSON.stringify(this.toJSON());
      }
    };
  }
  function ss(e2, t22 = {}) {
    return Vn(new e2(t22), { get: (e3, t3) => Qn("db", t3) ? ts({ $method: t3 }, null, e3) : function() {
      return ts({ $method: t3, $param: Xn(Array.from(arguments)) }, null, e3);
    } });
  }
  var rs = class extends class {
    constructor({ uniClient: e2 = {}, isJQL: t22 = false } = {}) {
      this._uniClient = e2, this._authCallBacks = {}, this._dbCallBacks = {}, e2._isDefault && (this._dbCallBacks = L("_globalUniCloudDatabaseCallback")), t22 || (this.auth = Gn(this._authCallBacks)), this._isJQL = t22, Object.assign(this, Gn(this._dbCallBacks)), this.env = Vn({}, { get: (e3, t3) => ({ $env: t3 }) }), this.Geo = Vn({}, { get: (e3, t3) => ns({ path: ["Geo"], method: t3 }) }), this.serverDate = ns({ path: [], method: "serverDate" }), this.RegExp = ns({ path: [], method: "RegExp" });
    }
    getCloudEnv(e2) {
      if ("string" != typeof e2 || !e2.trim())
        throw new Error("getCloudEnv\u53C2\u6570\u9519\u8BEF");
      return { $env: e2.replace("$cloudEnv_", "") };
    }
    _callback(e2, t22) {
      const n2 = this._dbCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t22);
      });
    }
    _callbackAuth(e2, t22) {
      const n2 = this._authCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t22);
      });
    }
    multiSend() {
      const e2 = Array.from(arguments), t22 = e2.map((e3) => {
        const t3 = e3.getAction(), n2 = e3.getCommand();
        if ("getTemp" !== n2.$db[n2.$db.length - 1].$method)
          throw new Error("multiSend\u53EA\u652F\u6301\u5B50\u547D\u4EE4\u5185\u4F7F\u7528getTemp");
        return { action: t3, command: n2 };
      });
      return this._callCloudFunction({ multiCommand: t22, queryList: e2 });
    }
  } {
    _parseResult(e2) {
      return this._isJQL ? e2.result : e2;
    }
    _callCloudFunction({ action: e2, command: t22, multiCommand: n2, queryList: s2 }) {
      function r2(e3, t3) {
        if (n2 && s2)
          for (let n3 = 0; n3 < s2.length; n3++) {
            const r3 = s2[n3];
            r3.udb && "function" == typeof r3.udb.setResult && (t3 ? r3.udb.setResult(t3) : r3.udb.setResult(e3.result.dataList[n3]));
          }
      }
      const i2 = this, o2 = this._isJQL ? "databaseForJQL" : "database";
      function a2(e3) {
        return i2._callback("error", [e3]), M(q(o2, "fail"), e3).then(() => M(q(o2, "complete"), e3)).then(() => (r2(null, e3), Y(j, { type: W, content: e3 }), Promise.reject(e3)));
      }
      const c2 = M(q(o2, "invoke")), u2 = this._uniClient;
      return c2.then(() => u2.callFunction({ name: "DCloud-clientDB", type: l, data: { action: e2, command: t22, multiCommand: n2 } })).then((e3) => {
        const { code: t3, message: n3, token: s3, tokenExpired: c3, systemInfo: u3 = [] } = e3.result;
        if (u3)
          for (let e4 = 0; e4 < u3.length; e4++) {
            const { level: t4, message: n4, detail: s4 } = u3[e4], r3 = console["warn" === t4 ? "error" : t4] || console.log;
            let i3 = "[System Info]" + n4;
            s4 && (i3 = `${i3}
\u8BE6\u7EC6\u4FE1\u606F\uFF1A${s4}`), r3(i3);
          }
        if (t3) {
          return a2(new te({ code: t3, message: n3, requestId: e3.requestId }));
        }
        e3.result.errCode = e3.result.errCode || e3.result.code, e3.result.errMsg = e3.result.errMsg || e3.result.message, s3 && c3 && (ie({ token: s3, tokenExpired: c3 }), this._callbackAuth("refreshToken", [{ token: s3, tokenExpired: c3 }]), this._callback("refreshToken", [{ token: s3, tokenExpired: c3 }]), Y(B, { token: s3, tokenExpired: c3 }));
        const l2 = [{ prop: "affectedDocs", tips: "affectedDocs\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528inserted/deleted/updated/data.length\u66FF\u4EE3" }, { prop: "code", tips: "code\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528errCode\u66FF\u4EE3" }, { prop: "message", tips: "message\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528errMsg\u66FF\u4EE3" }];
        for (let t4 = 0; t4 < l2.length; t4++) {
          const { prop: n4, tips: s4 } = l2[t4];
          if (n4 in e3.result) {
            const t5 = e3.result[n4];
            Object.defineProperty(e3.result, n4, { get: () => (console.warn(s4), t5) });
          }
        }
        return function(e4) {
          return M(q(o2, "success"), e4).then(() => M(q(o2, "complete"), e4)).then(() => {
            r2(e4, null);
            const t4 = i2._parseResult(e4);
            return Y(j, { type: W, content: t4 }), Promise.resolve(t4);
          });
        }(e3);
      }, (e3) => {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e3.message) && console.warn("clientDB\u672A\u521D\u59CB\u5316\uFF0C\u8BF7\u5728web\u63A7\u5236\u53F0\u4FDD\u5B58\u4E00\u6B21schema\u4EE5\u5F00\u542FclientDB");
        return a2(new te({ code: e3.code || "SYSTEM_ERROR", message: e3.message, requestId: e3.requestId }));
      });
    }
  };
  var is = "token\u65E0\u6548\uFF0C\u8DF3\u8F6C\u767B\u5F55\u9875\u9762";
  var os = "token\u8FC7\u671F\uFF0C\u8DF3\u8F6C\u767B\u5F55\u9875\u9762";
  var as = { TOKEN_INVALID_TOKEN_EXPIRED: os, TOKEN_INVALID_INVALID_CLIENTID: is, TOKEN_INVALID: is, TOKEN_INVALID_WRONG_TOKEN: is, TOKEN_INVALID_ANONYMOUS_USER: is };
  var cs = { "uni-id-token-expired": os, "uni-id-check-token-failed": is, "uni-id-token-not-exist": is, "uni-id-check-device-feature-failed": is };
  function us(e2, t22) {
    let n2 = "";
    return n2 = e2 ? `${e2}/${t22}` : t22, n2.replace(/^\//, "");
  }
  function ls(e2 = [], t22 = "") {
    const n2 = [], s2 = [];
    return e2.forEach((e3) => {
      true === e3.needLogin ? n2.push(us(t22, e3.path)) : false === e3.needLogin && s2.push(us(t22, e3.path));
    }), { needLoginPage: n2, notNeedLoginPage: s2 };
  }
  function hs(e2) {
    return e2.split("?")[0].replace(/^\//, "");
  }
  function ds() {
    return function(e2) {
      let t22 = e2 && e2.$page && e2.$page.fullPath || "";
      return t22 ? ("/" !== t22.charAt(0) && (t22 = "/" + t22), t22) : t22;
    }(function() {
      const e2 = getCurrentPages();
      return e2[e2.length - 1];
    }());
  }
  function ps() {
    return hs(ds());
  }
  function fs(e2 = "", t22 = {}) {
    if (!e2)
      return false;
    if (!(t22 && t22.list && t22.list.length))
      return false;
    const n2 = t22.list, s2 = hs(e2);
    return n2.some((e3) => e3.pagePath === s2);
  }
  var gs = !!e.uniIdRouter;
  var { loginPage: ms, routerNeedLogin: ys, resToLogin: _s, needLoginPage: ws, notNeedLoginPage: vs, loginPageInTabBar: Is } = function({ pages: t22 = [], subPackages: n2 = [], uniIdRouter: s2 = {}, tabBar: r2 = {} } = e) {
    const { loginPage: i2, needLogin: o2 = [], resToLogin: a2 = true } = s2, { needLoginPage: c2, notNeedLoginPage: u2 } = ls(t22), { needLoginPage: l2, notNeedLoginPage: h2 } = function(e2 = []) {
      const t3 = [], n3 = [];
      return e2.forEach((e3) => {
        const { root: s3, pages: r3 = [] } = e3, { needLoginPage: i3, notNeedLoginPage: o3 } = ls(r3, s3);
        t3.push(...i3), n3.push(...o3);
      }), { needLoginPage: t3, notNeedLoginPage: n3 };
    }(n2);
    return { loginPage: i2, routerNeedLogin: o2, resToLogin: a2, needLoginPage: [...c2, ...l2], notNeedLoginPage: [...u2, ...h2], loginPageInTabBar: fs(i2, r2) };
  }();
  if (ws.indexOf(ms) > -1)
    throw new Error(`Login page [${ms}] should not be "needLogin", please check your pages.json`);
  function Ss(e2) {
    const t22 = ps();
    if ("/" === e2.charAt(0))
      return e2;
    const [n2, s2] = e2.split("?"), r2 = n2.replace(/^\//, "").split("/"), i2 = t22.split("/");
    i2.pop();
    for (let e3 = 0; e3 < r2.length; e3++) {
      const t3 = r2[e3];
      ".." === t3 ? i2.pop() : "." !== t3 && i2.push(t3);
    }
    return "" === i2[0] && i2.shift(), "/" + i2.join("/") + (s2 ? "?" + s2 : "");
  }
  function bs(e2) {
    const t22 = hs(Ss(e2));
    return !(vs.indexOf(t22) > -1) && (ws.indexOf(t22) > -1 || ys.some((t3) => function(e3, t4) {
      return new RegExp(t4).test(e3);
    }(e2, t3)));
  }
  function ks({ redirect: e2 }) {
    const t22 = hs(e2), n2 = hs(ms);
    return ps() !== n2 && t22 !== n2;
  }
  function As({ api: e2, redirect: t22 } = {}) {
    if (!t22 || !ks({ redirect: t22 }))
      return;
    const n2 = function(e3, t3) {
      return "/" !== e3.charAt(0) && (e3 = "/" + e3), t3 ? e3.indexOf("?") > -1 ? e3 + `&uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3 + `?uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3;
    }(ms, t22);
    Is ? "navigateTo" !== e2 && "redirectTo" !== e2 || (e2 = "switchTab") : "switchTab" === e2 && (e2 = "navigateTo");
    const s2 = { navigateTo: uni.navigateTo, redirectTo: uni.redirectTo, switchTab: uni.switchTab, reLaunch: uni.reLaunch };
    setTimeout(() => {
      s2[e2]({ url: n2 });
    }, 0);
  }
  function Cs({ url: e2 } = {}) {
    const t22 = { abortLoginPageJump: false, autoToLoginPage: false }, n2 = function() {
      const { token: e3, tokenExpired: t3 } = re();
      let n3;
      if (e3) {
        if (t3 < Date.now()) {
          const e4 = "uni-id-token-expired";
          n3 = { errCode: e4, errMsg: cs[e4] };
        }
      } else {
        const e4 = "uni-id-check-token-failed";
        n3 = { errCode: e4, errMsg: cs[e4] };
      }
      return n3;
    }();
    if (bs(e2) && n2) {
      n2.uniIdRedirectUrl = e2;
      if (z($).length > 0)
        return setTimeout(() => {
          Y($, n2);
        }, 0), t22.abortLoginPageJump = true, t22;
      t22.autoToLoginPage = true;
    }
    return t22;
  }
  function Ps() {
    !function() {
      const e3 = ds(), { abortLoginPageJump: t22, autoToLoginPage: n2 } = Cs({ url: e3 });
      t22 || n2 && As({ api: "redirectTo", redirect: e3 });
    }();
    const e2 = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
    for (let t22 = 0; t22 < e2.length; t22++) {
      const n2 = e2[t22];
      uni.addInterceptor(n2, { invoke(e3) {
        const { abortLoginPageJump: t3, autoToLoginPage: s2 } = Cs({ url: e3.url });
        return t3 ? e3 : s2 ? (As({ api: n2, redirect: Ss(e3.url) }), false) : e3;
      } });
    }
  }
  function Ts() {
    this.onResponse((e2) => {
      const { type: t22, content: n2 } = e2;
      let s2 = false;
      switch (t22) {
        case "cloudobject":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in cs;
          }(n2);
          break;
        case "clientdb":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in as;
          }(n2);
      }
      s2 && function(e3 = {}) {
        const t3 = z($);
        Z().then(() => {
          const n3 = ds();
          if (n3 && ks({ redirect: n3 }))
            return t3.length > 0 ? Y($, Object.assign({ uniIdRedirectUrl: n3 }, e3)) : void (ms && As({ api: "navigateTo", redirect: n3 }));
        });
      }(n2);
    });
  }
  function xs(e2) {
    !function(e3) {
      e3.onResponse = function(e4) {
        V(j, e4);
      }, e3.offResponse = function(e4) {
        G(j, e4);
      };
    }(e2), function(e3) {
      e3.onNeedLogin = function(e4) {
        V($, e4);
      }, e3.offNeedLogin = function(e4) {
        G($, e4);
      }, gs && (L("_globalUniCloudStatus").needLoginInit || (L("_globalUniCloudStatus").needLoginInit = true, Z().then(() => {
        Ps.call(e3);
      }), _s && Ts.call(e3)));
    }(e2), function(e3) {
      e3.onRefreshToken = function(e4) {
        V(B, e4);
      }, e3.offRefreshToken = function(e4) {
        G(B, e4);
      };
    }(e2);
  }
  var Os;
  var Es = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var Ls = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function Rs() {
    const e2 = re().token || "", t22 = e2.split(".");
    if (!e2 || 3 !== t22.length)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let n2;
    try {
      n2 = JSON.parse((s2 = t22[1], decodeURIComponent(Os(s2).split("").map(function(e3) {
        return "%" + ("00" + e3.charCodeAt(0).toString(16)).slice(-2);
      }).join(""))));
    } catch (e3) {
      throw new Error("\u83B7\u53D6\u5F53\u524D\u7528\u6237\u4FE1\u606F\u51FA\u9519\uFF0C\u8BE6\u7EC6\u9519\u8BEF\u4FE1\u606F\u4E3A\uFF1A" + e3.message);
    }
    var s2;
    return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
  }
  Os = "function" != typeof atob ? function(e2) {
    if (e2 = String(e2).replace(/[\t\n\f\r ]+/g, ""), !Ls.test(e2))
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t22;
    e2 += "==".slice(2 - (3 & e2.length));
    for (var n2, s2, r2 = "", i2 = 0; i2 < e2.length; )
      t22 = Es.indexOf(e2.charAt(i2++)) << 18 | Es.indexOf(e2.charAt(i2++)) << 12 | (n2 = Es.indexOf(e2.charAt(i2++))) << 6 | (s2 = Es.indexOf(e2.charAt(i2++))), r2 += 64 === n2 ? String.fromCharCode(t22 >> 16 & 255) : 64 === s2 ? String.fromCharCode(t22 >> 16 & 255, t22 >> 8 & 255) : String.fromCharCode(t22 >> 16 & 255, t22 >> 8 & 255, 255 & t22);
    return r2;
  } : atob;
  var Us = n(function(e2, t22) {
    Object.defineProperty(t22, "__esModule", { value: true });
    const n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
    function r2(e3, t3) {
      return e3.tempFiles.forEach((e4, n3) => {
        e4.name || (e4.name = e4.path.substring(e4.path.lastIndexOf("/") + 1)), t3 && (e4.fileType = t3), e4.cloudPath = Date.now() + "_" + n3 + e4.name.substring(e4.name.lastIndexOf("."));
      }), e3.tempFilePaths || (e3.tempFilePaths = e3.tempFiles.map((e4) => e4.path)), e3;
    }
    function i2(e3, t3, { onChooseFile: s3, onUploadProgress: r3 }) {
      return t3.then((e4) => {
        if (s3) {
          const t4 = s3(e4);
          if (void 0 !== t4)
            return Promise.resolve(t4).then((t5) => void 0 === t5 ? e4 : t5);
        }
        return e4;
      }).then((t4) => false === t4 ? { errMsg: n2, tempFilePaths: [], tempFiles: [] } : function(e4, t5, s4 = 5, r4) {
        (t5 = Object.assign({}, t5)).errMsg = n2;
        const i3 = t5.tempFiles, o2 = i3.length;
        let a2 = 0;
        return new Promise((n3) => {
          for (; a2 < s4; )
            c2();
          function c2() {
            const s5 = a2++;
            if (s5 >= o2)
              return void (!i3.find((e5) => !e5.url && !e5.errMsg) && n3(t5));
            const u2 = i3[s5];
            e4.uploadFile({ provider: u2.provider, filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, cloudPathAsRealPath: u2.cloudPathAsRealPath, onUploadProgress(e5) {
              e5.index = s5, e5.tempFile = u2, e5.tempFilePath = u2.path, r4 && r4(e5);
            } }).then((e5) => {
              u2.url = e5.fileID, s5 < o2 && c2();
            }).catch((e5) => {
              u2.errMsg = e5.errMsg || e5.message, s5 < o2 && c2();
            });
          }
        });
      }(e3, t4, 5, r3));
    }
    t22.initChooseAndUploadFile = function(e3) {
      return function(t3 = { type: "all" }) {
        return "image" === t3.type ? i2(e3, function(e4) {
          const { count: t4, sizeType: n3, sourceType: i3 = ["album", "camera"], extension: o2 } = e4;
          return new Promise((e5, a2) => {
            uni.chooseImage({ count: t4, sizeType: n3, sourceType: i3, extension: o2, success(t5) {
              e5(r2(t5, "image"));
            }, fail(e6) {
              a2({ errMsg: e6.errMsg.replace("chooseImage:fail", s2) });
            } });
          });
        }(t3), t3) : "video" === t3.type ? i2(e3, function(e4) {
          const { camera: t4, compressed: n3, maxDuration: i3, sourceType: o2 = ["album", "camera"], extension: a2 } = e4;
          return new Promise((e5, c2) => {
            uni.chooseVideo({ camera: t4, compressed: n3, maxDuration: i3, sourceType: o2, extension: a2, success(t5) {
              const { tempFilePath: n4, duration: s3, size: i4, height: o3, width: a3 } = t5;
              e5(r2({ errMsg: "chooseVideo:ok", tempFilePaths: [n4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: n4, size: i4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: o3, duration: s3, fileType: "video", cloudPath: "" }] }, "video"));
            }, fail(e6) {
              c2({ errMsg: e6.errMsg.replace("chooseVideo:fail", s2) });
            } });
          });
        }(t3), t3) : i2(e3, function(e4) {
          const { count: t4, extension: n3 } = e4;
          return new Promise((e5, i3) => {
            let o2 = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o2 = wx.chooseMessageFile), "function" != typeof o2)
              return i3({ errMsg: s2 + " \u8BF7\u6307\u5B9A type \u7C7B\u578B\uFF0C\u8BE5\u5E73\u53F0\u4EC5\u652F\u6301\u9009\u62E9 image \u6216 video\u3002" });
            o2({ type: "all", count: t4, extension: n3, success(t5) {
              e5(r2(t5));
            }, fail(e6) {
              i3({ errMsg: e6.errMsg.replace("chooseFile:fail", s2) });
            } });
          });
        }(t3), t3);
      };
    };
  });
  var Ns = t(Us);
  var Ds = "manual";
  function Ms(e2) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {}, mixinDatacomError: null }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e3 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t22) => {
          e3.push(this[t22]);
        }), e3;
      }, (e3, t22) => {
        if (this.loadtime === Ds)
          return;
        let n2 = false;
        const s2 = [];
        for (let r2 = 2; r2 < e3.length; r2++)
          e3[r2] !== t22[r2] && (s2.push(e3[r2]), n2 = true);
        e3[0] !== t22[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
      });
    }, methods: { onMixinDatacomPropsChange(e3, t22) {
    }, mixinDatacomEasyGet({ getone: e3 = false, success: t22, fail: n2 } = {}) {
      this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomError = null, this.mixinDatacomGet().then((n3) => {
        this.mixinDatacomLoading = false;
        const { data: s2, count: r2 } = n3.result;
        this.getcount && (this.mixinDatacomPage.count = r2), this.mixinDatacomHasMore = s2.length < this.pageSize;
        const i2 = e3 ? s2.length ? s2[0] : void 0 : s2;
        this.mixinDatacomResData = i2, t22 && t22(i2);
      }).catch((e4) => {
        this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e4, this.mixinDatacomError = e4, n2 && n2(e4);
      }));
    }, mixinDatacomGet(t22 = {}) {
      let n2;
      t22 = t22 || {}, n2 = "undefined" != typeof __uniX && __uniX ? e2.databaseForJQL(this.spaceInfo) : e2.database(this.spaceInfo);
      const s2 = t22.action || this.action;
      s2 && (n2 = n2.action(s2));
      const r2 = t22.collection || this.collection;
      n2 = Array.isArray(r2) ? n2.collection(...r2) : n2.collection(r2);
      const i2 = t22.where || this.where;
      i2 && Object.keys(i2).length && (n2 = n2.where(i2));
      const o2 = t22.field || this.field;
      o2 && (n2 = n2.field(o2));
      const a2 = t22.foreignKey || this.foreignKey;
      a2 && (n2 = n2.foreignKey(a2));
      const c2 = t22.groupby || this.groupby;
      c2 && (n2 = n2.groupBy(c2));
      const u2 = t22.groupField || this.groupField;
      u2 && (n2 = n2.groupField(u2));
      true === (void 0 !== t22.distinct ? t22.distinct : this.distinct) && (n2 = n2.distinct());
      const l2 = t22.orderby || this.orderby;
      l2 && (n2 = n2.orderBy(l2));
      const h2 = void 0 !== t22.pageCurrent ? t22.pageCurrent : this.mixinDatacomPage.current, d2 = void 0 !== t22.pageSize ? t22.pageSize : this.mixinDatacomPage.size, p2 = void 0 !== t22.getcount ? t22.getcount : this.getcount, f2 = void 0 !== t22.gettree ? t22.gettree : this.gettree, g2 = void 0 !== t22.gettreepath ? t22.gettreepath : this.gettreepath, m2 = { getCount: p2 }, y2 = { limitLevel: void 0 !== t22.limitlevel ? t22.limitlevel : this.limitlevel, startWith: void 0 !== t22.startwith ? t22.startwith : this.startwith };
      return f2 && (m2.getTree = y2), g2 && (m2.getTreePath = y2), n2 = n2.skip(d2 * (h2 - 1)).limit(d2).get(m2), n2;
    } } };
  }
  function qs(e2) {
    return function(t22, n2 = {}) {
      n2 = function(e3, t3 = {}) {
        return e3.customUI = t3.customUI || e3.customUI, e3.parseSystemError = t3.parseSystemError || e3.parseSystemError, Object.assign(e3.loadingOptions, t3.loadingOptions), Object.assign(e3.errorOptions, t3.errorOptions), "object" == typeof t3.secretMethods && (e3.secretMethods = t3.secretMethods), e3;
      }({ customUI: false, loadingOptions: { title: "\u52A0\u8F7D\u4E2D...", mask: true }, errorOptions: { type: "modal", retry: false } }, n2);
      const { customUI: s2, loadingOptions: r2, errorOptions: i2, parseSystemError: o2 } = n2, a2 = !s2;
      return new Proxy({}, { get(s3, c2) {
        switch (c2) {
          case "toString":
            return "[object UniCloudObject]";
          case "toJSON":
            return {};
        }
        return function({ fn: e3, interceptorName: t3, getCallbackArgs: n3 } = {}) {
          return function(...s4) {
            return __async(this, null, function* () {
              const r3 = n3 ? n3({ params: s4 }) : {};
              let i3, o3;
              try {
                return yield M(q(t3, "invoke"), __spreadValues({}, r3)), i3 = yield e3(...s4), yield M(q(t3, "success"), __spreadProps(__spreadValues({}, r3), { result: i3 })), i3;
              } catch (e4) {
                throw o3 = e4, yield M(q(t3, "fail"), __spreadProps(__spreadValues({}, r3), { error: o3 })), o3;
              } finally {
                yield M(q(t3, "complete"), o3 ? __spreadProps(__spreadValues({}, r3), { error: o3 }) : __spreadProps(__spreadValues({}, r3), { result: i3 }));
              }
            });
          };
        }({ fn: function s4(...l2) {
          return __async(this, null, function* () {
            let h2;
            a2 && uni.showLoading({ title: r2.title, mask: r2.mask });
            const d2 = { name: t22, type: u, data: { method: c2, params: l2 } };
            "object" == typeof n2.secretMethods && function(e3, t3) {
              const n3 = t3.data.method, s5 = e3.secretMethods || {}, r3 = s5[n3] || s5["*"];
              r3 && (t3.secretType = r3);
            }(n2, d2);
            let p2 = false;
            try {
              h2 = yield e2.callFunction(d2);
            } catch (e3) {
              p2 = true, h2 = { result: new te(e3) };
            }
            const { errSubject: f2, errCode: g2, errMsg: m2, newToken: y2 } = h2.result || {};
            if (a2 && uni.hideLoading(), y2 && y2.token && y2.tokenExpired && (ie(y2), Y(B, __spreadValues({}, y2))), g2) {
              let e3 = m2;
              if (p2 && o2) {
                e3 = (yield o2({ objectName: t22, methodName: c2, params: l2, errSubject: f2, errCode: g2, errMsg: m2 })).errMsg || m2;
              }
              if (a2)
                if ("toast" === i2.type)
                  uni.showToast({ title: e3, icon: "none" });
                else {
                  if ("modal" !== i2.type)
                    throw new Error(`Invalid errorOptions.type: ${i2.type}`);
                  {
                    const { confirm: t3 } = yield function() {
                      return __async(this, arguments, function* ({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3 } = {}) {
                        return new Promise((i3, o3) => {
                          uni.showModal({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3, success(e5) {
                            i3(e5);
                          }, fail() {
                            i3({ confirm: false, cancel: true });
                          } });
                        });
                      });
                    }({ title: "\u63D0\u793A", content: e3, showCancel: i2.retry, cancelText: "\u53D6\u6D88", confirmText: i2.retry ? "\u91CD\u8BD5" : "\u786E\u5B9A" });
                    if (i2.retry && t3)
                      return s4(...l2);
                  }
                }
              const n3 = new te({ subject: f2, code: g2, message: m2, requestId: h2.requestId });
              throw n3.detail = h2.result, Y(j, { type: J, content: n3 }), n3;
            }
            return Y(j, { type: J, content: h2.result }), h2.result;
          });
        }, interceptorName: "callObject", getCallbackArgs: function({ params: e3 } = {}) {
          return { objectName: t22, methodName: c2, params: e3 };
        } });
      } });
    };
  }
  function Fs(e2) {
    return L("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e2.config.spaceId));
  }
  function Ks() {
    return __async(this, arguments, function* ({ openid: e2, callLoginByWeixin: t22 = false } = {}) {
      Fs(this);
      throw new Error(`[SecureNetwork] API \`initSecureNetworkByWeixin\` is not supported on platform \`${C}\``);
    });
  }
  function js(e2) {
    return __async(this, null, function* () {
      const t22 = Fs(this);
      return t22.initPromise || (t22.initPromise = Ks.call(this, e2).then((e3) => e3).catch((e3) => {
        throw delete t22.initPromise, e3;
      })), t22.initPromise;
    });
  }
  function $s(e2) {
    return function({ openid: t22, callLoginByWeixin: n2 = false } = {}) {
      return js.call(e2, { openid: t22, callLoginByWeixin: n2 });
    };
  }
  function Bs(e2) {
    !function(e3) {
      le = e3;
    }(e2);
  }
  function Ws(e2) {
    const t22 = { getSystemInfo: uni.getSystemInfo, getPushClientId: uni.getPushClientId };
    return function(n2) {
      return new Promise((s2, r2) => {
        t22[e2](__spreadProps(__spreadValues({}, n2), { success(e3) {
          s2(e3);
        }, fail(e3) {
          r2(e3);
        } }));
      });
    };
  }
  var Hs = class extends class {
    constructor() {
      this._callback = {};
    }
    addListener(e2, t22) {
      this._callback[e2] || (this._callback[e2] = []), this._callback[e2].push(t22);
    }
    on(e2, t22) {
      return this.addListener(e2, t22);
    }
    removeListener(e2, t22) {
      if (!t22)
        throw new Error('The "listener" argument must be of type function. Received undefined');
      const n2 = this._callback[e2];
      if (!n2)
        return;
      const s2 = function(e3, t3) {
        for (let n3 = e3.length - 1; n3 >= 0; n3--)
          if (e3[n3] === t3)
            return n3;
        return -1;
      }(n2, t22);
      n2.splice(s2, 1);
    }
    off(e2, t22) {
      return this.removeListener(e2, t22);
    }
    removeAllListener(e2) {
      delete this._callback[e2];
    }
    emit(e2, ...t22) {
      const n2 = this._callback[e2];
      if (n2)
        for (let e3 = 0; e3 < n2.length; e3++)
          n2[e3](...t22);
    }
  } {
    constructor() {
      super(), this._uniPushMessageCallback = this._receivePushMessage.bind(this), this._currentMessageId = -1, this._payloadQueue = [];
    }
    init() {
      return Promise.all([Ws("getSystemInfo")(), Ws("getPushClientId")()]).then(([{ appId: e2 } = {}, { cid: t22 } = {}] = []) => {
        if (!e2)
          throw new Error("Invalid appId, please check the manifest.json file");
        if (!t22)
          throw new Error("Invalid push client id");
        this._appId = e2, this._pushClientId = t22, this._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), this.emit("open"), this._initMessageListener();
      }, (e2) => {
        throw this.emit("error", e2), this.close(), e2;
      });
    }
    open() {
      return __async(this, null, function* () {
        return this.init();
      });
    }
    _isUniCloudSSE(e2) {
      if ("receive" !== e2.type)
        return false;
      const t22 = e2 && e2.data && e2.data.payload;
      return !(!t22 || "UNI_CLOUD_SSE" !== t22.channel || t22.seqId !== this._seqId);
    }
    _receivePushMessage(e2) {
      if (!this._isUniCloudSSE(e2))
        return;
      const t22 = e2 && e2.data && e2.data.payload, { action: n2, messageId: s2, message: r2 } = t22;
      this._payloadQueue.push({ action: n2, messageId: s2, message: r2 }), this._consumMessage();
    }
    _consumMessage() {
      for (; ; ) {
        const e2 = this._payloadQueue.find((e3) => e3.messageId === this._currentMessageId + 1);
        if (!e2)
          break;
        this._currentMessageId++, this._parseMessagePayload(e2);
      }
    }
    _parseMessagePayload(e2) {
      const { action: t22, messageId: n2, message: s2 } = e2;
      "end" === t22 ? this._end({ messageId: n2, message: s2 }) : "message" === t22 && this._appendMessage({ messageId: n2, message: s2 });
    }
    _appendMessage({ messageId: e2, message: t22 } = {}) {
      this.emit("message", t22);
    }
    _end({ messageId: e2, message: t22 } = {}) {
      this.emit("end", t22), this.close();
    }
    _initMessageListener() {
      uni.onPushMessage(this._uniPushMessageCallback);
    }
    _destroy() {
      uni.offPushMessage(this._uniPushMessageCallback);
    }
    toJSON() {
      return { appId: this._appId, pushClientId: this._pushClientId, seqId: this._seqId };
    }
    close() {
      this._destroy(), this.emit("close");
    }
  };
  function Js(e2) {
    return __async(this, null, function* () {
      {
        const { osName: e3, osVersion: t3 } = ce();
        "ios" === e3 && function(e4) {
          if (!e4 || "string" != typeof e4)
            return 0;
          const t4 = e4.match(/^(\d+)./);
          return t4 && t4[1] ? parseInt(t4[1]) : 0;
        }(t3) >= 14 && console.warn("iOS 14\u53CA\u4EE5\u4E0A\u7248\u672C\u8FDE\u63A5uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u9700\u8981\u5141\u8BB8\u5BA2\u6237\u7AEF\u67E5\u627E\u5E76\u8FDE\u63A5\u5230\u672C\u5730\u7F51\u7EDC\u4E0A\u7684\u8BBE\u5907\uFF08\u4EC5\u5F00\u53D1\u671F\u95F4\u9700\u8981\uFF0C\u53D1\u884C\u540E\u4E0D\u9700\u8981\uFF09");
      }
      const t22 = e2.__dev__;
      if (!t22.debugInfo)
        return;
      const { address: n2, servePort: s2 } = t22.debugInfo, { address: r2 } = yield At(n2, s2);
      if (r2)
        return t22.localAddress = r2, void (t22.localPort = s2);
      const i2 = console["error"];
      let o2 = "";
      if ("remote" === t22.debugInfo.initialLaunchType ? (t22.debugInfo.forceRemote = true, o2 = "\u5F53\u524D\u5BA2\u6237\u7AEF\u548CHBuilderX\u4E0D\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\uFF08\u6216\u5176\u4ED6\u7F51\u7EDC\u539F\u56E0\u65E0\u6CD5\u8FDE\u63A5HBuilderX\uFF09\uFF0CuniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u4E0D\u5BF9\u5F53\u524D\u5BA2\u6237\u7AEF\u751F\u6548\u3002\n- \u5982\u679C\u4E0D\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u76F4\u63A5\u5FFD\u7565\u6B64\u4FE1\u606F\u3002\n- \u5982\u9700\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u5C06\u5BA2\u6237\u7AEF\u4E0E\u4E3B\u673A\u8FDE\u63A5\u5230\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u5E76\u91CD\u65B0\u8FD0\u884C\u5230\u5BA2\u6237\u7AEF\u3002") : o2 = "\u65E0\u6CD5\u8FDE\u63A5uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u68C0\u67E5\u5F53\u524D\u5BA2\u6237\u7AEF\u662F\u5426\u4E0E\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u3002\n- \u5982\u9700\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u5C06\u5BA2\u6237\u7AEF\u4E0E\u4E3B\u673A\u8FDE\u63A5\u5230\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u5E76\u91CD\u65B0\u8FD0\u884C\u5230\u5BA2\u6237\u7AEF\u3002", o2 += "\n- \u5982\u679C\u5728HBuilderX\u5F00\u542F\u7684\u72B6\u6001\u4E0B\u5207\u6362\u8FC7\u7F51\u7EDC\u73AF\u5883\uFF0C\u8BF7\u91CD\u542FHBuilderX\u540E\u518D\u8BD5\n- \u68C0\u67E5\u7CFB\u7EDF\u9632\u706B\u5899\u662F\u5426\u62E6\u622A\u4E86HBuilderX\u81EA\u5E26\u7684nodejs\n- \u68C0\u67E5\u662F\u5426\u9519\u8BEF\u7684\u4F7F\u7528\u62E6\u622A\u5668\u4FEE\u6539uni.request\u65B9\u6CD5\u7684\u53C2\u6570", 0 === C.indexOf("mp-") && (o2 += "\n- \u5C0F\u7A0B\u5E8F\u4E2D\u5982\u4F55\u4F7F\u7528uniCloud\uFF0C\u8BF7\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), !t22.debugInfo.forceRemote)
        throw new Error(o2);
      i2(o2);
    });
  }
  function zs(e2) {
    e2._initPromiseHub || (e2._initPromiseHub = new v({ createPromise: function() {
      let t22 = Promise.resolve();
      var n2;
      n2 = 1, t22 = new Promise((e3) => {
        setTimeout(() => {
          e3();
        }, n2);
      });
      const s2 = e2.auth();
      return t22.then(() => s2.getLoginState()).then((e3) => e3 ? Promise.resolve() : s2.signInAnonymously());
    } }));
  }
  var Vs = { tcb: bt, tencent: bt, aliyun: fe, private: Tt, dcloud: Tt, alipay: qt };
  var Gs = new class {
    init(e2) {
      let t22 = {};
      const n2 = Vs[e2.provider];
      if (!n2)
        throw new Error("\u672A\u63D0\u4F9B\u6B63\u786E\u7684provider\u53C2\u6570");
      t22 = n2.init(e2), function(e3) {
        const t3 = {};
        e3.__dev__ = t3, t3.debugLog = "app" === C;
        const n3 = P;
        n3 && !n3.code && (t3.debugInfo = n3);
        const s2 = new v({ createPromise: function() {
          return Js(e3);
        } });
        t3.initLocalNetwork = function() {
          return s2.exec();
        };
      }(t22), zs(t22), Jn(t22), function(e3) {
        const t3 = e3.uploadFile;
        e3.uploadFile = function(e4) {
          return t3.call(this, e4);
        };
      }(t22), function(e3) {
        e3.database = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).database();
          if (this._database)
            return this._database;
          const n3 = ss(rs, { uniClient: e3 });
          return this._database = n3, n3;
        }, e3.databaseForJQL = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).databaseForJQL();
          if (this._databaseForJQL)
            return this._databaseForJQL;
          const n3 = ss(rs, { uniClient: e3, isJQL: true });
          return this._databaseForJQL = n3, n3;
        };
      }(t22), function(e3) {
        e3.getCurrentUserInfo = Rs, e3.chooseAndUploadFile = Ns.initChooseAndUploadFile(e3), Object.assign(e3, { get mixinDatacom() {
          return Ms(e3);
        } }), e3.SSEChannel = Hs, e3.initSecureNetworkByWeixin = $s(e3), e3.setCustomClientInfo = Bs, e3.importObject = qs(e3);
      }(t22);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e3) => {
        if (!t22[e3])
          return;
        const n3 = t22[e3];
        t22[e3] = function() {
          return n3.apply(t22, Array.from(arguments));
        }, t22[e3] = (/* @__PURE__ */ function(e4, t3) {
          return function(n4) {
            let s2 = false;
            if ("callFunction" === t3) {
              const e5 = n4 && n4.type || c;
              s2 = e5 !== c;
            }
            const r2 = "callFunction" === t3 && !s2, i2 = this._initPromiseHub.exec();
            n4 = n4 || {};
            const { success: o2, fail: a2, complete: u2 } = ee(n4), l2 = i2.then(() => s2 ? Promise.resolve() : M(q(t3, "invoke"), n4)).then(() => e4.call(this, n4)).then((e5) => s2 ? Promise.resolve(e5) : M(q(t3, "success"), e5).then(() => M(q(t3, "complete"), e5)).then(() => (r2 && Y(j, { type: H, content: e5 }), Promise.resolve(e5))), (e5) => s2 ? Promise.reject(e5) : M(q(t3, "fail"), e5).then(() => M(q(t3, "complete"), e5)).then(() => (Y(j, { type: H, content: e5 }), Promise.reject(e5))));
            if (!(o2 || a2 || u2))
              return l2;
            l2.then((e5) => {
              o2 && o2(e5), u2 && u2(e5), r2 && Y(j, { type: H, content: e5 });
            }, (e5) => {
              a2 && a2(e5), u2 && u2(e5), r2 && Y(j, { type: H, content: e5 });
            });
          };
        }(t22[e3], e3)).bind(t22);
      }), t22.init = this.init, t22;
    }
  }();
  (() => {
    const e2 = T;
    let t22 = {};
    if (e2 && 1 === e2.length)
      t22 = e2[0], Gs = Gs.init(t22), Gs._isDefault = true;
    else {
      const t3 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
      let n2;
      n2 = e2 && e2.length > 0 ? "\u5E94\u7528\u6709\u591A\u4E2A\u670D\u52A1\u7A7A\u95F4\uFF0C\u8BF7\u901A\u8FC7uniCloud.init\u65B9\u6CD5\u6307\u5B9A\u8981\u4F7F\u7528\u7684\u670D\u52A1\u7A7A\u95F4" : "\u5E94\u7528\u672A\u5173\u8054\u670D\u52A1\u7A7A\u95F4\uFF0C\u8BF7\u5728uniCloud\u76EE\u5F55\u53F3\u952E\u5173\u8054\u670D\u52A1\u7A7A\u95F4", t3.forEach((e3) => {
        Gs[e3] = function() {
          return console.error(n2), Promise.reject(new te({ code: "SYS_ERR", message: n2 }));
        };
      });
    }
    Object.assign(Gs, { get mixinDatacom() {
      return Ms(Gs);
    } }), xs(Gs), Gs.addInterceptor = N, Gs.removeInterceptor = D, Gs.interceptObject = F;
  })();
  var Ys = Gs;

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/uni-i18n.es.js
  var isObject = (val) => val !== null && typeof val === "object";
  var defaultDelimiters = ["{", "}"];
  var BaseFormatter = class {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  };
  var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  var LOCALE_ZH_HANS = "zh-Hans";
  var LOCALE_ZH_HANT = "zh-Hant";
  var LOCALE_EN = "en";
  var LOCALE_FR = "fr";
  var LOCALE_ES = "es";
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  var I18n = class {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater: formater2 }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater2 || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  };
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      const options = [
        messages2,
        locale
      ];
      locale = options[0];
      messages2 = options[1];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t3 = (key, values) => {
      if (typeof getApp !== "function") {
        t3 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t3 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t3(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t3(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/uni-load-more.js
  var import_vue4 = __toESM(require_vue());
  var en = {
    "uni-load-more.contentdown": "Pull up to show more",
    "uni-load-more.contentrefresh": "loading...",
    "uni-load-more.contentnomore": "No more data"
  };
  var zhHans = {
    "uni-load-more.contentdown": "\u4E0A\u62C9\u663E\u793A\u66F4\u591A",
    "uni-load-more.contentrefresh": "\u6B63\u5728\u52A0\u8F7D...",
    "uni-load-more.contentnomore": "\u6CA1\u6709\u66F4\u591A\u6570\u636E\u4E86"
  };
  var zhHant = {
    "uni-load-more.contentdown": "\u4E0A\u62C9\u986F\u793A\u66F4\u591A",
    "uni-load-more.contentrefresh": "\u6B63\u5728\u52A0\u8F09...",
    "uni-load-more.contentnomore": "\u6C92\u6709\u66F4\u591A\u6578\u64DA\u4E86"
  };
  var messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  var _style_02 = { "uni-load-more": { "": { "flexDirection": "row", "height": 40, "alignItems": "center", "justifyContent": "center" } }, "uni-load-more__text": { "": { "fontSize": 14, "marginLeft": 8 } }, "uni-load-more__img": { "": { "width": 24, "height": 24 } }, "uni-load-more__img--nvue": { "": { "color": "#666666" } }, "uni-load-more__img--android": { "": { "width": 24, "height": 24, "transform": "rotate(0deg)" } }, "uni-load-more__img--ios": { "": { "width": 24, "height": 24, "transform": "rotate(0deg)" } } };
  var platform;
  setTimeout(() => {
    platform = uni.getSystemInfoSync().platform;
  }, 16);
  var {
    t: t2
  } = initVueI18n(messages);
  var _sfc_main2 = {
    name: "UniLoadMore",
    emits: ["clickLoadMore"],
    props: {
      status: {
        // 上拉的状态：more-loading前；loading-loading中；noMore-没有更多了
        type: String,
        default: "more"
      },
      showIcon: {
        type: Boolean,
        default: true
      },
      iconType: {
        type: String,
        default: "auto"
      },
      iconSize: {
        type: Number,
        default: 24
      },
      color: {
        type: String,
        default: "#777777"
      },
      contentText: {
        type: Object,
        default() {
          return {
            contentdown: "",
            contentrefresh: "",
            contentnomore: ""
          };
        }
      },
      showText: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        webviewHide: false,
        platform,
        imgBase64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlBMzU3OTlEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlBMzU3OUFEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUEzNTc5N0Q5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUEzNTc5OEQ5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt+ALSwAAA6CSURBVHja1FsLkFZVHb98LM+F5bHL8khA1iSeiyQBCRM+YGqKUnnJTDLGI0BGZlKDIU2MMglUiDApEZvSsZnQtBRJtKwQNKQMFYeRDR10WOLd8ljYXdh+v8v5fR3Od+797t1dnOnO/Ofce77z+J//+b/P+ZqtXbs2sJ9MJhNUV1cHJ06cCJo3bx7EPc2aNcvpy7pWrVoF+/fvDyoqKoI2bdoE9fX1F7TjN8a+EXBn/fkfvw942Tf+wYMHg9mzZwfjxo0LDhw4EPa1x2MbFw/fOGfPng1qa2tzcCkILsLDydq2bRsunpOTMM7TD/W/tZDZhPdeKD+yGxHhdu3aBV27dg3OnDlzMVANMheLAO3btw8KCwuDmpoaX5OxbgUIMEq7K8IcPnw4KCsrC/r37x8cP378/4cAXAB3vqSkJMuiDhTkw+XcuXNhOWbMmKBly5YhUT8xArhyFvP0BfwRsAuwxJZJsm/nzp2DTp06he/OU+cZ64K6o0ePBkOHDg2GDx8e6gEbJ5Q/NHNuAJQ1hgBeHUDlR7nVTkY8rQAvAi4z34vR/mPs1FoRsaCgIJThI0eOBC1atEiFGGV+5MiRoS45efJkqFjJFXV1dQuA012m2WcwTw98fy6CqBdsaiIO4CScrGPHjvk4odhavPquRtFWXEC25VgkREKOCh/qDSq+vn37htzD/mZTOmOc5U7zKzBPEedygWshcDyWvs30igAbU+6oyMgJBCFhwQE0fccxN60Ay9iebbjoDh06hMowjQxT4fXq1SskArmHZpkArvixp/kWzHdMeArExSJEaiXIjjRjRJ4DaAGWpibLzXN3Fm1vA5teBgh3j1Rv3bp1YgKwPdmf2p9zcyNYYgPKMfY0T5f5nNYdw158nJ8QawW4CLKwiOBSEgO/hok2eBydR+3dYH+PLxA5J8Vv0KBBwenTp0P2JWAx6+yFEBfs8lMY+y0SWMBNI9E4ThKi58VKTg3FQZS1RQF1cz27eC0QHMu+3E0SkUowjhVt5VdaWhp07949ZHv2Qd1EjDXM2cla1M0nl3GxAs3J9yREzyTdFVKVFOaE9qRA8GM0WebRuo9JGZKA7Mv2SeS/Z8+eoQ9BArMfFrLGo6jvxbhHbJZnKX2Rzz1O7QhJJ9Cs2ZMaWIyq/zhdeqPNfIoHd58clIQD+JSXl4dKlyIAuBdVXZwFVWKspSSoxE++h8x4k3uCnEhE4I5KwRiFWGOU0QWKiCYLbdoRMRKAu2kQ9vkfLU6dOhX06NEjlH+yMRZSinnuyWnYosVcji8CEA/6Cg2JF+IIUBqnGKUTCNwtwBN4f89RiK1R96DEgO2o0NDmtEdvVFdVVYV+P3UAPUEs6GFwV3PHmXkD4vh74iDFJysVI/MlaQhwKeBNTLYX5VuA8T4/gZxA4MRGFxDB6R7OmYPfyykGRJbyie+XnGYnQIC/coH9+vULiYrxrkL9ZA9+0ykaHIfEpM7ge8TiJ2CsHYwyMfafAF1yCGBHYIbCVDjDjKt7BeB51D+LgQa6OkG7IDYEEtvQ7lnXLKLtLdLuJBpE4gPUXcW2+PkZwOex+4cGDhwYDBkyRL7/HFcEwUGPo/8uWRUpYnfxGHco8HkewLHLyYmAawAPuIFZxhOpDfJQ8gbUv41yORAptMWBNr6oqMhWird5+u+iHmBb2nhjDV7HWBNQTgK8y11l5NetWzc5ULscAtSj7nbNI0skhWeUZCc0W4nyH/jO4Vz0u1IeYhbk4AiwM6tjxIWByHsoZ9qcIBPJd/y+DwPfBESOmCa/QF3WiZHucLlEDpNxcNhmheEOPgdQNx6/VZFQzFZ5TN08AHXQt2Ii3EdyFuUsPtTcGPhW5iMiCNELvz+Gdn9huG4HUJaW/w3g0wxV0XaG7arG2WeKiUWYM4Y7GO5ezshTARbbWGw/DvXkpp/ivVvE0JVoMxN4rpGzJMhE5Pl+xlATsDIqikP9F9D2z3h9nOksEUFhK+qO4rcPkoalMQ/HqJLIyb3F3JdjrCcw1yZ8joyJLR5gCo54etlag7qIoeNh1N1BRYj3DTFJ0elotxPlVzkGuYAmL0VSJVGAJA41c4Z6A3BzTLfn0HYwYKEI6CUAMzZEWvLsIcQOo1AmmyyM72nHJCfYsogflGV6jEk9vyQZXSuq6w4c16NsGcGZbwOPr+H1RkOk2LEzjNepxQkihHSCQ4ynAYNRx2zMKV92CQMWqj8J0BRE8EShxRFN6YrfCRhC0x3r/Zm4IbQCcmJoV0kMamllccR6FjHqUC5F2R/wS2dcymOlfAKOS4KmzQb5cpNC2MC7JhVn5wjXoJ44rYhLh8n0eXOCorJxa7POjbSlCGVczr34/RsAmrcvo9s+wGp3tzVhntxiXiJ4nvEYb4FJkf0O8HocAePmLvCxnL0AORraVekJk6TYjDabRVXfRE2lCN1h6ZQRN1+InUbsCpKwoBZHh0dODN9JBCUffItXxEavTQkUtnfTVAplCWL3JISz29h4NjotnuSsQKJCk8dF+kJR6RARjrqFVmfPnj3ZbK8cIJ0msd6jgHPGtfVTQ8VLmlvh4mct9sobRmPic0DyDQQnx/NlfYUgyz59+oScsH379pAwXABD32nTpoUHIToESeI5mnbE/UqDdyLcafEBf2MCqgC7NwxIbMREJQ0g4D4sfJwnD+AmRrII05cfMWJE+L1169bQr+fip06dGp4oJ83lmYd5wj/EmMa4TaHivo4EeCguYZBnkB5g2aWA69OIEnUHOaGysjIYMGBAMGnSpODYsWPZwCpFmm4lNq+4gSLQA7jcX8DwtjEyRC8wjabnXEx9kfWnTJkSJkAo90xpJVV+FmcVNeYAF5zWngS4C4O91MBxmAv8blLEpbjI5sz9MTdAhcgkCT1RO8mZkAjfiYpTEvStAS53Uw1vAiUGgZ3GpuQEYvoiBqlIan7kSDHnTwJQFNiPu0+5VxCVYhcZIjNrdXUDdp+Eq5AZ3Gkg8QAyVZRZIk4Tl4QAbF9cXJxNYZMAtAokgs4BrNxEpCtteXg7DDTMDKYNSuQdKsnJBek7HxewvxaosWxLYXtw+cJp18217wql4aKCfBNoEu0O5VU+PhctJ0YeXD4C6JQpyrlpSLTojpGGGN5YwNziChdIZLk4lvLcFJ9jMX3QdiImY9bmGQU+TRUL5CHITTRlgF8D9ouD1MfmLoEPl5xokIumZ2cfgMpHt47IW9N64Hsh7wQYYjyIugWuF5fCqYncXRd5vPMWyizzvhi/32+nvG0dZc9vR6fZOu0md5e+uC408FvKSIOZwXlGvxPv95izA2Vtvg1xKFWARI+vMX66HUhpQQb643uW1bSjuTWyw2SBvDrBvjFic1eGGlz5esq3ko9uSIlBRqPuFcCv8F4WIcN12nVaBd0SaYwI6PDDImR11JkqgHcPmQssjxIn6bUshygDFJUTxPMpHk+jfjPgupgdnYV2R/g7xSjtpah8RJBewhwf0gGK6XI92u4wXFEU40afJ4DN4h5LcAd+40HI3JgJecuT0c062W0i2hQJUTcxan3/CMW1PF2K6bbA+Daz4xRs1D3Br1Cm0OihKCqizW78/nXAF/G5TXrEcVzaNMH6CyMswqsAHqDyDLEyou8lwOXnKF8DjI6KjV3KzMBiXkDH8ij/H214J5A596ekrZ3F0zXlWeL7+P5eUrNo3/QwC15uxthuzidy7DzKRwEDaAViiDgKbTbz7CJnzo0bN7pIfIiid8SuPwn25o3QCmpnyjlZkyxPP8EomCJzrGb7GJMx7tNsq4MT2xMUYaiErZOluTzKsnz3gwCeCZyVRZJfYplNEokEjwrPtxlxjeYAk+F1F74VAzPxQRNYYdtpOUvWs8J1sGhBJMNsb7igN8plJs1eSmLIhLKE4rvaCX27gOhLpLOsIzJ7qn/i+wZzcvSOZ23/du8TZjwV8zHIXoP4R3ifBxiFz1dcVpa3aPntPE+c6TmIWE9EtcMmAcPdWAhYhAXxcLOQi9L1WhD1Sc8p1d2oL7XGiRKp8F4A2i8K/nfI+y/gsTDJ/YC/8+AD5Uh04KHiGl+cIFPnBDDrPMjwRGkLXyxO4VGbfQWnDH2v0bVWE3C9QOXlepbgjEfIJQI6XDG3z5ahD9cw2pS78ipB85wyScNTvsVzlzzhL8/jRrnmVjfFJK/m3m4nj9vbgQTguT8XZTjsm672R5uJKEaQmBI/c58gyus8ZDagLpEVSJBIyHp4jn++xqPV71OgQgJYEWOtZ/haxRtKmWOBu8xdBLftWltsY84zE6WIEy/eIOWL+BaayMx+KHtL7EAkqdNDLiEXmEMUHniedtJqg9HmZtfvt26vNi0BdG3Ft3g8ZOf7PAu59TxtzivLNIekyi+wD1i8CuUiD9FXAa8C+/xS3JPmZnomyc7H+fb4/Se0bk41Fel621r4cgVxbq91V4jVqwB7HTe2M7jgB+QWHavZkDRPmZcASoZEmBx6i75bGjPcMdL4/VKGFAGWZkGzPG0XAbdL9A81G5LOmUnC9hHKJeO7dcUMjblSl12867ElFTtaGl20xvvLGPdVz/8TVuU7y0x1PG7vtNg24oz9Uo/Z412++VFWI7Fcog9tu9Lm6gvRmIPv9x1xmQAu6RDkXtbOtlGEmpgD5Nvnyc0dcv0EE6cfdi1HmhMf9wDF3k3gtRvEedhxjpgfqPb9PU9iEJHnyOUA7bQUXh6kq/D7l2iTjWv7XOD530BDr8jIrus+srXjt4MzumJMHuTsBa63YKE1+RR5lBjEikCCnWKWiHdzOgKO+nRIBAF88za/IFmJ3eMZov4CYxGBabcpGL8EYx+SeMXJeRwHNsV/h+vdxeuhEpN3ZyNY78Gm2fknJxVGhyjixPiQvVkNzT1elD9Py/aTAL64Hb9vcYmC9zfdXdT/C1LeGbg4rnBaAihDFJH12W5ulfNCNe/xTsP3bp8ikzJs5BF+5PNfAQYAPaseTdsEcaYAAAAASUVORK5CYII="
      };
    },
    computed: {
      iconSnowWidth() {
        return (Math.floor(this.iconSize / 24) || 1) * 2;
      },
      contentdownText() {
        return this.contentText.contentdown || t2("uni-load-more.contentdown");
      },
      contentrefreshText() {
        return this.contentText.contentrefresh || t2("uni-load-more.contentrefresh");
      },
      contentnomoreText() {
        return this.contentText.contentnomore || t2("uni-load-more.contentnomore");
      }
    },
    mounted() {
      var pages2 = getCurrentPages();
      var page = pages2[pages2.length - 1];
      var currentWebview = page.$getAppWebview();
      currentWebview.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview.addEventListener("show", () => {
        this.webviewHide = false;
      });
    },
    methods: {
      onClick() {
        this.$emit("clickLoadMore", {
          detail: {
            status: this.status
          }
        });
      }
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("view", {
      class: "uni-load-more",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args)),
      renderWhole: true
    }, [
      !$data.webviewHide && $props.status === "loading" && $props.showIcon ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
        "loading-indicator",
        {
          key: 0,
          style: (0, import_vue4.normalizeStyle)({ color: $props.color, width: $props.iconSize + "px", height: $props.iconSize + "px" }),
          animating: true,
          class: "uni-load-more__img uni-load-more__img--nvue"
        },
        null,
        4
        /* STYLE */
      )) : (0, import_vue4.createCommentVNode)("v-if", true),
      $props.showText ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
        "u-text",
        {
          key: 1,
          class: "uni-load-more__text",
          style: (0, import_vue4.normalizeStyle)({ color: $props.color })
        },
        (0, import_vue4.toDisplayString)($props.status === "more" ? $options.contentdownText : $props.status === "loading" ? $options.contentrefreshText : $options.contentnomoreText),
        5
        /* TEXT, STYLE */
      )) : (0, import_vue4.createCommentVNode)("v-if", true)
    ]);
  }
  var __easycom_02 = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "E:/workspace/HelloUniApp/uni_modules/uni-load-more/components/uni-load-more/uni-load-more.vue"]]);

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/uni-data-checkbox.js
  var import_vue5 = __toESM(require_vue());
  var _style_03 = { "uni-data-loading": { "": { "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "height": 36, "paddingLeft": 10, "color": "#999999" } }, "uni-data-checklist": { "": { "position": "relative", "zIndex": 0, "flex": 1 } }, "checklist-group": { ".uni-data-checklist ": { "flexDirection": "row", "flexWrap": "wrap" }, ".uni-data-checklist .is-list": { "flexDirection": "column" } }, "checklist-box": { ".uni-data-checklist .checklist-group ": { "flexDirection": "row", "alignItems": "center", "position": "relative", "marginTop": 5, "marginRight": 25, "marginBottom": 5, "marginLeft": 0 }, ".uni-data-checklist .checklist-group .is--button": { "marginRight": 10, "paddingTop": 5, "paddingRight": 10, "paddingBottom": 5, "paddingLeft": 10, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#DCDFE6", "borderRadius": 3, "transitionProperty": "borderColor", "transitionDuration": 200 }, ".uni-data-checklist .checklist-group .is--button.is-disable": { "borderWidth": 1, "borderStyle": "solid", "borderColor": "#eeeeee", "opacity": 0.4 }, ".uni-data-checklist .checklist-group .is--button.is-checked": { "borderColor": "#2979ff" }, ".uni-data-checklist .checklist-group .is--button.is-checked.is-disable": { "opacity": 0.4 }, ".uni-data-checklist .checklist-group .is--tag": { "marginRight": 10, "paddingTop": 5, "paddingRight": 10, "paddingBottom": 5, "paddingLeft": 10, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#DCDFE6", "borderRadius": 3, "backgroundColor": "#f5f5f5" }, ".uni-data-checklist .checklist-group .is--tag.is-disable": { "opacity": 0.4 }, ".uni-data-checklist .checklist-group .is--tag.is-checked": { "backgroundColor": "#2979ff", "borderColor": "#2979ff" }, ".uni-data-checklist .checklist-group .is--list": { "paddingTop": 10, "paddingRight": 15, "paddingBottom": 10, "paddingLeft": 0, "marginTop": 0, "marginRight": 0, "marginBottom": 0, "marginLeft": 0 }, ".uni-data-checklist .checklist-group .is--list.is-list-border": { "borderTopWidth": 1, "borderTopStyle": "solid", "borderTopColor": "#eeeeee" } }, "hidden": { ".uni-data-checklist .checklist-group .checklist-box ": { "position": "absolute", "opacity": 0 } }, "checklist-content": { ".uni-data-checklist .checklist-group .checklist-box ": { "flex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between" } }, "checklist-text": { ".uni-data-checklist .checklist-group .checklist-box .checklist-content ": { "fontSize": 14, "color": "#666666", "marginLeft": 5, "lineHeight": 14 }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-disable ": { "color": "#999999" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked ": { "color": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked.is-disable ": { "opacity": 0.4 }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-disable ": { "color": "#999999" }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked ": { "color": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--tag ": { "marginTop": 0, "marginRight": 0, "marginBottom": 0, "marginLeft": 0, "color": "#666666" }, ".uni-data-checklist .checklist-group .checklist-box.is--tag.is-checked ": { "color": "#ffffff" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-disable ": { "color": "#999999" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked ": { "color": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked.is-disable ": { "opacity": 0.4 } }, "checkobx__list": { ".uni-data-checklist .checklist-group .checklist-box .checklist-content ": { "borderRightWidth": 1, "borderRightColor": "#007aff", "borderRightStyle": "solid", "borderBottomWidth": 1, "borderBottomColor": "#007aff", "borderBottomStyle": "solid", "height": 12, "width": 6, "left": -5, "transformOrigin": "center", "transform": "rotate(45deg)", "opacity": 0 }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked .checklist-content ": { "opacity": 1, "borderColor": "#2979ff" } }, "checkbox__inner": { ".uni-data-checklist .checklist-group .checklist-box ": { "position": "relative", "width": 16, "height": 16, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#DCDFE6", "borderRadius": 4, "backgroundColor": "#ffffff", "zIndex": 1 }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-disable ": { "backgroundColor": "#F2F6FC", "borderColor": "#DCDFE6" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked ": { "borderColor": "#2979ff", "backgroundColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked.is-disable ": { "opacity": 0.4 }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-disable ": { "backgroundColor": "#F2F6FC", "borderColor": "#DCDFE6" }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked ": { "borderColor": "#2979ff", "backgroundColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-disable ": { "backgroundColor": "#F2F6FC", "borderColor": "#DCDFE6" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked ": { "borderColor": "#2979ff", "backgroundColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked.is-disable ": { "opacity": 0.4 } }, "checkbox__inner-icon": { ".uni-data-checklist .checklist-group .checklist-box .checkbox__inner ": { "position": "absolute", "top": 2, "left": 5, "height": 8, "width": 4, "borderRightWidth": 1, "borderRightColor": "#ffffff", "borderRightStyle": "solid", "borderBottomWidth": 1, "borderBottomColor": "#ffffff", "borderBottomStyle": "solid", "opacity": 0, "transformOrigin": "center", "transform": "rotate(40deg)" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked .checkbox__inner ": { "opacity": 1, "transform": "rotate(45deg)" }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked .checkbox__inner ": { "opacity": 1, "transform": "rotate(45deg)" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked .checkbox__inner ": { "opacity": 1, "transform": "rotate(45deg)" } }, "radio__inner": { ".uni-data-checklist .checklist-group .checklist-box ": { "justifyContent": "center", "alignItems": "center", "position": "relative", "width": 16, "height": 16, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#DCDFE6", "borderRadius": 16, "backgroundColor": "#ffffff", "zIndex": 1 }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-disable ": { "backgroundColor": "#F2F6FC", "borderColor": "#DCDFE6" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked ": { "borderColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked.is-disable ": { "opacity": 0.4 }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-disable ": { "backgroundColor": "#F2F6FC", "borderColor": "#DCDFE6" }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked ": { "borderColor": "#2979ff" } }, "radio__inner-icon": { ".uni-data-checklist .checklist-group .checklist-box .radio__inner ": { "width": 8, "height": 8, "borderRadius": 10, "opacity": 0 }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked .radio__inner ": { "opacity": 1, "backgroundColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked .radio__inner ": { "opacity": 1, "backgroundColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked .radio__inner ": { "opacity": 1 } }, "@TRANSITION": { "checklist-box": { "property": "borderColor", "duration": 200 } } };
  var _sfc_main3 = {
    name: "uniDataChecklist",
    mixins: [Ys.mixinDatacom || {}],
    emits: ["input", "update:modelValue", "change"],
    props: {
      mode: {
        type: String,
        default: "default"
      },
      multiple: {
        type: Boolean,
        default: false
      },
      value: {
        type: [Array, String, Number],
        default() {
          return "";
        }
      },
      // TODO vue3
      modelValue: {
        type: [Array, String, Number],
        default() {
          return "";
        }
      },
      localdata: {
        type: Array,
        default() {
          return [];
        }
      },
      min: {
        type: [Number, String],
        default: ""
      },
      max: {
        type: [Number, String],
        default: ""
      },
      wrap: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: "left"
      },
      selectedColor: {
        type: String,
        default: ""
      },
      selectedTextColor: {
        type: String,
        default: ""
      },
      emptyText: {
        type: String,
        default: "\u6682\u65E0\u6570\u636E"
      },
      disabled: {
        type: Boolean,
        default: false
      },
      map: {
        type: Object,
        default() {
          return {
            text: "text",
            value: "value"
          };
        }
      }
    },
    watch: {
      localdata: {
        handler(newVal) {
          this.range = newVal;
          this.dataList = this.getDataList(this.getSelectedValue(newVal));
        },
        deep: true
      },
      mixinDatacomResData(newVal) {
        this.range = newVal;
        this.dataList = this.getDataList(this.getSelectedValue(newVal));
      },
      value(newVal) {
        this.dataList = this.getDataList(newVal);
      },
      modelValue(newVal) {
        this.dataList = this.getDataList(newVal);
      }
    },
    data() {
      return {
        dataList: [],
        range: [],
        contentText: {
          contentdown: "\u67E5\u770B\u66F4\u591A",
          contentrefresh: "\u52A0\u8F7D\u4E2D",
          contentnomore: "\u6CA1\u6709\u66F4\u591A"
        },
        isLocal: true,
        styles: {
          selectedColor: "#2979ff",
          selectedTextColor: "#666"
        },
        isTop: 0
      };
    },
    computed: {
      dataValue() {
        if (this.value === "")
          return this.modelValue;
        if (this.modelValue === "")
          return this.value;
        return this.value;
      }
    },
    created() {
      if (this.localdata && this.localdata.length !== 0) {
        this.isLocal = true;
        this.range = this.localdata;
        this.dataList = this.getDataList(this.getSelectedValue(this.range));
      } else {
        if (this.collection) {
          this.isLocal = false;
          this.loadData();
        }
      }
    },
    methods: {
      loadData() {
        this.mixinDatacomGet().then((res) => {
          this.mixinDatacomResData = res.result.data;
          if (this.mixinDatacomResData.length === 0) {
            this.isLocal = false;
            this.mixinDatacomErrorMessage = this.emptyText;
          } else {
            this.isLocal = true;
          }
        }).catch((err) => {
          this.mixinDatacomErrorMessage = err.message;
        });
      },
      /**
       * 获取父元素实例
       */
      getForm(name = "uniForms") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      chagne(e2) {
        const values = e2.detail.value;
        let detail = {
          value: [],
          data: []
        };
        if (this.multiple) {
          this.range.forEach((item) => {
            if (values.includes(item[this.map.value] + "")) {
              detail.value.push(item[this.map.value]);
              detail.data.push(item);
            }
          });
        } else {
          const range = this.range.find((item) => item[this.map.value] + "" === values);
          if (range) {
            detail = {
              value: range[this.map.value],
              data: range
            };
          }
        }
        this.$emit("input", detail.value);
        this.$emit("update:modelValue", detail.value);
        this.$emit("change", {
          detail
        });
        if (this.multiple) {
          this.dataList = this.getDataList(detail.value, true);
        } else {
          this.dataList = this.getDataList(detail.value);
        }
      },
      /**
       * 获取渲染的新数组
       * @param {Object} value 选中内容
       */
      getDataList(value) {
        let dataList = JSON.parse(JSON.stringify(this.range));
        let list = [];
        if (this.multiple) {
          if (!Array.isArray(value)) {
            value = [];
          }
        }
        dataList.forEach((item, index) => {
          item.disabled = item.disable || item.disabled || false;
          if (this.multiple) {
            if (value.length > 0) {
              let have = value.find((val) => val === item[this.map.value]);
              item.selected = have !== void 0;
            } else {
              item.selected = false;
            }
          } else {
            item.selected = value === item[this.map.value];
          }
          list.push(item);
        });
        return this.setRange(list);
      },
      /**
       * 处理最大最小值
       * @param {Object} list
       */
      setRange(list) {
        let selectList = list.filter((item) => item.selected);
        let min = Number(this.min) || 0;
        let max = Number(this.max) || "";
        list.forEach((item, index) => {
          if (this.multiple) {
            if (selectList.length <= min) {
              let have = selectList.find((val) => val[this.map.value] === item[this.map.value]);
              if (have !== void 0) {
                item.disabled = true;
              }
            }
            if (selectList.length >= max && max !== "") {
              let have = selectList.find((val) => val[this.map.value] === item[this.map.value]);
              if (have === void 0) {
                item.disabled = true;
              }
            }
          }
          this.setStyles(item, index);
          list[index] = item;
        });
        return list;
      },
      /**
       * 设置 class
       * @param {Object} item
       * @param {Object} index
       */
      setStyles(item, index) {
        item.styleBackgroud = this.setStyleBackgroud(item);
        item.styleIcon = this.setStyleIcon(item);
        item.styleIconText = this.setStyleIconText(item);
        item.styleRightIcon = this.setStyleRightIcon(item);
      },
      /**
       * 获取选中值
       * @param {Object} range
       */
      getSelectedValue(range) {
        if (!this.multiple)
          return this.dataValue;
        let selectedArr = [];
        range.forEach((item) => {
          if (item.selected) {
            selectedArr.push(item[this.map.value]);
          }
        });
        return this.dataValue.length > 0 ? this.dataValue : selectedArr;
      },
      /**
       * 设置背景样式
       */
      setStyleBackgroud(item) {
        let styles = {};
        let selectedColor = this.selectedColor ? this.selectedColor : "#2979ff";
        if (this.selectedColor) {
          if (this.mode !== "list") {
            styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
          }
          if (this.mode === "tag") {
            styles["background-color"] = item.selected ? selectedColor : "#f5f5f5";
          }
        }
        let classles = "";
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      },
      setStyleIcon(item) {
        let styles = {};
        let classles = "";
        if (this.selectedColor) {
          let selectedColor = this.selectedColor ? this.selectedColor : "#2979ff";
          styles["background-color"] = item.selected ? selectedColor : "#fff";
          styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
          if (!item.selected && item.disabled) {
            styles["background-color"] = "#F2F6FC";
            styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
          }
        }
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      },
      setStyleIconText(item) {
        let styles = {};
        let classles = "";
        if (this.selectedColor) {
          let selectedColor = this.selectedColor ? this.selectedColor : "#2979ff";
          if (this.mode === "tag") {
            styles.color = item.selected ? this.selectedTextColor ? this.selectedTextColor : "#fff" : "#666";
          } else {
            styles.color = item.selected ? this.selectedTextColor ? this.selectedTextColor : selectedColor : "#666";
          }
          if (!item.selected && item.disabled) {
            styles.color = "#999";
          }
        }
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      },
      setStyleRightIcon(item) {
        let styles = {};
        let classles = "";
        if (this.mode === "list") {
          styles["border-color"] = item.selected ? this.styles.selectedColor : "#DCDFE6";
        }
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      }
    }
  };
  function _sfc_render3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_load_more = resolveEasycom((0, import_vue5.resolveDynamicComponent)("uni-load-more"), __easycom_02);
    const _component_checkbox = (0, import_vue5.resolveComponent)("checkbox");
    const _component_label = (0, import_vue5.resolveComponent)("label");
    const _component_checkbox_group = (0, import_vue5.resolveComponent)("checkbox-group");
    const _component_radio = (0, import_vue5.resolveComponent)("radio");
    const _component_radio_group = (0, import_vue5.resolveComponent)("radio-group");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
      "view",
      {
        class: "uni-data-checklist",
        style: (0, import_vue5.normalizeStyle)({ "margin-top": $data.isTop + "px" }),
        renderWhole: true
      },
      [
        !$data.isLocal ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("view", {
          key: 0,
          class: "uni-data-loading"
        }, [
          !_ctx.mixinDatacomErrorMessage ? ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_uni_load_more, {
            key: 0,
            status: "loading",
            iconType: "snow",
            iconSize: 18,
            "content-text": $data.contentText
          }, null, 8, ["content-text"])) : ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
            "u-text",
            { key: 1 },
            (0, import_vue5.toDisplayString)(_ctx.mixinDatacomErrorMessage),
            1
            /* TEXT */
          ))
        ])) : ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
          import_vue5.Fragment,
          { key: 1 },
          [
            $props.multiple ? ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_checkbox_group, {
              key: 0,
              class: (0, import_vue5.normalizeClass)(["checklist-group", { "is-list": $props.mode === "list" || $props.wrap }]),
              onChange: $options.chagne
            }, {
              default: (0, import_vue5.withCtx)(() => [
                ((0, import_vue5.openBlock)(true), (0, import_vue5.createElementBlock)(
                  import_vue5.Fragment,
                  null,
                  (0, import_vue5.renderList)($data.dataList, (item, index) => {
                    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_label, {
                      class: (0, import_vue5.normalizeClass)(["checklist-box", ["is--" + $props.mode, item.selected ? "is-checked" : "", $props.disabled || !!item.disabled ? "is-disable" : "", index !== 0 && $props.mode === "list" ? "is-list-border" : ""]]),
                      style: (0, import_vue5.normalizeStyle)(item.styleBackgroud),
                      key: index
                    }, {
                      default: (0, import_vue5.withCtx)(() => [
                        (0, import_vue5.createVNode)(_component_checkbox, {
                          class: "hidden",
                          hidden: "",
                          disabled: $props.disabled || !!item.disabled,
                          value: item[$props.map.value] + "",
                          checked: item.selected
                        }, null, 8, ["disabled", "value", "checked"]),
                        $props.mode !== "tag" && $props.mode !== "list" || $props.mode === "list" && $props.icon === "left" ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
                          "view",
                          {
                            key: 0,
                            class: "checkbox__inner",
                            style: (0, import_vue5.normalizeStyle)(item.styleIcon)
                          },
                          [
                            (0, import_vue5.createElementVNode)("view", { class: "checkbox__inner-icon" })
                          ],
                          4
                          /* STYLE */
                        )) : (0, import_vue5.createCommentVNode)("v-if", true),
                        (0, import_vue5.createElementVNode)(
                          "view",
                          {
                            class: (0, import_vue5.normalizeClass)(["checklist-content", { "list-content": $props.mode === "list" && $props.icon === "left" }])
                          },
                          [
                            (0, import_vue5.createElementVNode)(
                              "u-text",
                              {
                                class: "checklist-text",
                                style: (0, import_vue5.normalizeStyle)(item.styleIconText)
                              },
                              (0, import_vue5.toDisplayString)(item[$props.map.text]),
                              5
                              /* TEXT, STYLE */
                            ),
                            $props.mode === "list" && $props.icon === "right" ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
                              "view",
                              {
                                key: 0,
                                class: "checkobx__list",
                                style: (0, import_vue5.normalizeStyle)(item.styleBackgroud)
                              },
                              null,
                              4
                              /* STYLE */
                            )) : (0, import_vue5.createCommentVNode)("v-if", true)
                          ],
                          2
                          /* CLASS */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["class", "style"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["class", "onChange"])) : ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_radio_group, {
              key: 1,
              class: (0, import_vue5.normalizeClass)(["checklist-group", { "is-list": $props.mode === "list", "is-wrap": $props.wrap }]),
              onChange: $options.chagne
            }, {
              default: (0, import_vue5.withCtx)(() => [
                (0, import_vue5.createCommentVNode)(" "),
                ((0, import_vue5.openBlock)(true), (0, import_vue5.createElementBlock)(
                  import_vue5.Fragment,
                  null,
                  (0, import_vue5.renderList)($data.dataList, (item, index) => {
                    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_label, {
                      class: (0, import_vue5.normalizeClass)(["checklist-box", ["is--" + $props.mode, item.selected ? "is-checked" : "", $props.disabled || !!item.disabled ? "is-disable" : "", index !== 0 && $props.mode === "list" ? "is-list-border" : ""]]),
                      style: (0, import_vue5.normalizeStyle)(item.styleBackgroud),
                      key: index
                    }, {
                      default: (0, import_vue5.withCtx)(() => [
                        (0, import_vue5.createVNode)(_component_radio, {
                          class: "hidden",
                          hidden: "",
                          disabled: $props.disabled || item.disabled,
                          value: item[$props.map.value] + "",
                          checked: item.selected
                        }, null, 8, ["disabled", "value", "checked"]),
                        $props.mode !== "tag" && $props.mode !== "list" || $props.mode === "list" && $props.icon === "left" ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
                          "view",
                          {
                            key: 0,
                            class: "radio__inner",
                            style: (0, import_vue5.normalizeStyle)(item.styleBackgroud)
                          },
                          [
                            (0, import_vue5.createElementVNode)(
                              "view",
                              {
                                class: "radio__inner-icon",
                                style: (0, import_vue5.normalizeStyle)(item.styleIcon)
                              },
                              null,
                              4
                              /* STYLE */
                            )
                          ],
                          4
                          /* STYLE */
                        )) : (0, import_vue5.createCommentVNode)("v-if", true),
                        (0, import_vue5.createElementVNode)(
                          "view",
                          {
                            class: (0, import_vue5.normalizeClass)(["checklist-content", { "list-content": $props.mode === "list" && $props.icon === "left" }])
                          },
                          [
                            (0, import_vue5.createElementVNode)(
                              "u-text",
                              {
                                class: "checklist-text",
                                style: (0, import_vue5.normalizeStyle)(item.styleIconText)
                              },
                              (0, import_vue5.toDisplayString)(item[$props.map.text]),
                              5
                              /* TEXT, STYLE */
                            ),
                            $props.mode === "list" && $props.icon === "right" ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
                              "view",
                              {
                                key: 0,
                                style: (0, import_vue5.normalizeStyle)(item.styleRightIcon),
                                class: "checkobx__list"
                              },
                              null,
                              4
                              /* STYLE */
                            )) : (0, import_vue5.createCommentVNode)("v-if", true)
                          ],
                          2
                          /* CLASS */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["class", "style"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["class", "onChange"]))
          ],
          64
          /* STABLE_FRAGMENT */
        ))
      ],
      4
      /* STYLE */
    );
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main3, [["render", _sfc_render3], ["styles", [_style_03]], ["__file", "E:/workspace/HelloUniApp/uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.vue"]]);

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/uni-section.js
  var import_vue6 = __toESM(require_vue());
  var _style_04 = { "uni-section": { "": { "backgroundColor": "#ffffff" } }, "uni-section-header": { ".uni-section ": { "position": "relative", "flexDirection": "row", "alignItems": "center", "paddingTop": 12, "paddingRight": 10, "paddingBottom": 12, "paddingLeft": 10, "fontWeight": "normal" } }, "uni-section-header__decoration": { ".uni-section ": { "marginRight": 6, "backgroundColor": "#2979ff" }, ".uni-section .line": { "width": 4, "height": 12, "borderRadius": 10 }, ".uni-section .circle": { "width": 8, "height": 8, "borderTopRightRadius": 50, "borderTopLeftRadius": 50, "borderBottomLeftRadius": 50, "borderBottomRightRadius": 50 }, ".uni-section .square": { "width": 8, "height": 8 } }, "uni-section-header__content": { ".uni-section ": { "flexDirection": "column", "flex": 1, "color": "#333333" } }, "distraction": { ".uni-section .uni-section-header__content ": { "flexDirection": "row", "alignItems": "center" } }, "uni-section-header__content-sub": { ".uni-section ": { "marginTop": 2 } }, "uni-section-header__slot-right": { ".uni-section ": { "fontSize": 14 } }, "uni-section-content": { ".uni-section ": { "fontSize": 14 } } };
  var _sfc_main4 = {
    name: "UniSection",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        required: true,
        default: ""
      },
      titleFontSize: {
        type: String,
        default: "14px"
      },
      titleColor: {
        type: String,
        default: "#333"
      },
      subTitle: {
        type: String,
        default: ""
      },
      subTitleFontSize: {
        type: String,
        default: "12px"
      },
      subTitleColor: {
        type: String,
        default: "#999"
      },
      padding: {
        type: [Boolean, String],
        default: false
      }
    },
    computed: {
      _padding() {
        if (typeof this.padding === "string") {
          return this.padding;
        }
        return this.padding ? "10px" : "";
      }
    },
    watch: {
      title(newVal) {
        if (uni.report && newVal !== "") {
          uni.report("title", newVal);
        }
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render4(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
      class: "uni-section",
      renderWhole: true
    }, [
      (0, import_vue6.createElementVNode)("view", {
        class: "uni-section-header",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
      }, [
        $props.type ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
          "view",
          {
            key: 0,
            class: (0, import_vue6.normalizeClass)(["uni-section-header__decoration", $props.type])
          },
          null,
          2
          /* CLASS */
        )) : (0, import_vue6.renderSlot)(_ctx.$slots, "decoration", { key: 1 }),
        (0, import_vue6.createElementVNode)("view", { class: "uni-section-header__content" }, [
          (0, import_vue6.createElementVNode)(
            "u-text",
            {
              style: (0, import_vue6.normalizeStyle)({ "font-size": $props.titleFontSize, "color": $props.titleColor }),
              class: (0, import_vue6.normalizeClass)(["uni-section__content-title", { "distraction": !$props.subTitle }])
            },
            (0, import_vue6.toDisplayString)($props.title),
            7
            /* TEXT, CLASS, STYLE */
          ),
          $props.subTitle ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
            "u-text",
            {
              key: 0,
              style: (0, import_vue6.normalizeStyle)({ "font-size": $props.subTitleFontSize, "color": $props.subTitleColor }),
              class: "uni-section-header__content-sub"
            },
            (0, import_vue6.toDisplayString)($props.subTitle),
            5
            /* TEXT, STYLE */
          )) : (0, import_vue6.createCommentVNode)("v-if", true)
        ]),
        (0, import_vue6.createElementVNode)("view", { class: "uni-section-header__slot-right" }, [
          (0, import_vue6.renderSlot)(_ctx.$slots, "right")
        ])
      ]),
      (0, import_vue6.createElementVNode)(
        "view",
        {
          class: "uni-section-content",
          style: (0, import_vue6.normalizeStyle)({ padding: $options._padding })
        },
        [
          (0, import_vue6.renderSlot)(_ctx.$slots, "default")
        ],
        4
        /* STYLE */
      )
    ]);
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main4, [["render", _sfc_render4], ["styles", [_style_04]], ["__file", "E:/workspace/HelloUniApp/uni_modules/uni-section/components/uni-section/uni-section.vue"]]);

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/extUI/space/space.js
  var _style_05 = { "header": { "": { "display": "flex", "flexDirection": "row", "flexWrap": "wrap" } }, "margin": { "": { "display": "flex", "height": 200, "marginTop": 10, "marginRight": 10, "marginBottom": 10, "marginLeft": 10, "overflow": "hidden", "borderRadius": 5, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#eeeeee" } }, "margin-item": { "": { "display": "flex", "flex": 1 } }, "box": { "": { "display": "flex", "alignItems": "center", "justifyContent": "center", "flex": 1 } }, "actions": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center" } }, "action-label": { "": { "width": 70, "marginLeft": 10, "marginRight": 10, "fontSize": 12 } } };
  var _sfc_main5 = {
    data() {
      return {
        paddingClass: "uni-pa-5",
        marginClass: "uni-ma-5",
        formData: {
          margin: ["t", "r", "l", "b"],
          marginSize: "5",
          padding: ["t", "r", "l", "b"],
          paddingSize: "5"
        },
        directionData: [{
          value: "t",
          text: "\u4E0A"
        }, {
          value: "r",
          text: "\u53F3"
        }, {
          value: "b",
          text: "\u4E0B"
        }, {
          value: "l",
          text: "\u5DE6"
        }],
        sizeData: [{
          value: "0",
          text: "0"
        }, {
          value: "2",
          text: "4px"
        }, {
          value: "5",
          text: "10px"
        }, {
          value: "10",
          text: "20px"
        }]
      };
    },
    onLoad() {
    },
    methods: {
      change(e2, type) {
        let {
          margin,
          marginSize,
          padding,
          paddingSize
        } = this.formData;
        this.marginClass = "";
        this.paddingClass = "";
        margin.forEach((v2) => {
          this.marginClass += `uni-m${v2}-${marginSize} `;
        });
        padding.forEach((v2) => {
          this.marginClass += `uni-p${v2}-${paddingSize} `;
        });
      }
    }
  };
  function _sfc_render5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_card = resolveEasycom((0, import_vue7.resolveDynamicComponent)("uni-card"), __easycom_0);
    const _component_uni_data_checkbox = resolveEasycom((0, import_vue7.resolveDynamicComponent)("uni-data-checkbox"), __easycom_1);
    const _component_uni_section = resolveEasycom((0, import_vue7.resolveDynamicComponent)("uni-section"), __easycom_2);
    return (0, import_vue7.openBlock)(), (0, import_vue7.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue7.createElementVNode)("view", { class: "container" }, [
        (0, import_vue7.createVNode)(_component_uni_card, {
          "is-shadow": false,
          "is-full": ""
        }, {
          default: (0, import_vue7.withCtx)(() => [
            (0, import_vue7.createElementVNode)("view", { class: "header" }, [
              (0, import_vue7.createElementVNode)("u-text", { class: "uni-h6" }, "\u4F7F\u7528\u95F4\u8DDD\u8F85\u52A9\u7C7B\u5BF9\u5143\u7D20\u5FEB\u901F\u5E94\u7528"),
              (0, import_vue7.createElementVNode)("u-text", null, " "),
              (0, import_vue7.createElementVNode)("u-text", { class: "uni-primary uni-px-3 uni-h6" }, "margin"),
              (0, import_vue7.createElementVNode)("u-text", { class: "uni-h6" }, " \u6216 "),
              (0, import_vue7.createElementVNode)("u-text", { class: "uni-primary uni-px-3 uni-h6" }, "padding"),
              (0, import_vue7.createElementVNode)("u-text", null, " "),
              (0, import_vue7.createElementVNode)("u-text", { class: "uni-h6" }, "\u6837\u5F0F\uFF0C \u8303\u56F4\u662F\u4ECE 0 \u5230 16\u3002")
            ]),
            (0, import_vue7.createElementVNode)("view", { class: "header uni-mt-5" }, [
              (0, import_vue7.createElementVNode)("u-text", { class: "uni-h6" }, "\u89C4\u5219\u4E3A"),
              (0, import_vue7.createElementVNode)("u-text", null, " "),
              (0, import_vue7.createElementVNode)("u-text", { class: "uni-primary uni-pl-3 uni-h6" }, "uni-${property}${direction}-${size}")
            ]),
            (0, import_vue7.createElementVNode)("view", { class: "uni-mt-5" }, [
              (0, import_vue7.createElementVNode)("u-text", { class: "uni-h6" }, "\u5404\u503C\u7684\u542B\u4E49\u8BF7\u53C2\u8003\u6587\u6863")
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue7.createVNode)(_component_uni_section, {
          title: "\u6548\u679C\u5C55\u793A",
          type: "line"
        }, {
          default: (0, import_vue7.withCtx)(() => [
            (0, import_vue7.createElementVNode)("view", { class: "margin" }, [
              (0, import_vue7.createElementVNode)(
                "view",
                {
                  class: (0, import_vue7.normalizeClass)(["margin-item uni-border-4-bg", [$data.paddingClass, $data.marginClass]])
                },
                [
                  (0, import_vue7.createElementVNode)("view", { class: "box uni-primary-bg" }, [
                    (0, import_vue7.createElementVNode)("u-text", { class: "uni-white uni-body" }, "\u901A\u8FC7\u4E0B\u9762\u7684\u9009\u9879\u63A7\u5236\u8FB9\u8DDD")
                  ])
                ],
                2
                /* CLASS */
              )
            ]),
            (0, import_vue7.createElementVNode)("view", { class: "actions uni-mt-10" }, [
              (0, import_vue7.createElementVNode)("u-text", { class: "action-label" }, "\u5916\u8FB9\u8DDD"),
              (0, import_vue7.createVNode)(_component_uni_data_checkbox, {
                modelValue: $data.formData.margin,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.formData.margin = $event),
                multiple: "",
                localdata: $data.directionData,
                onChange: _cache[1] || (_cache[1] = ($event) => $options.change($event, 1))
              }, null, 8, ["modelValue", "localdata"])
            ]),
            (0, import_vue7.createElementVNode)("view", { class: "actions uni-mt-3 uni-mb-10" }, [
              (0, import_vue7.createElementVNode)("u-text", { class: "action-label" }, "\u5916\u8FB9\u8DDD\u5927\u5C0F"),
              (0, import_vue7.createVNode)(_component_uni_data_checkbox, {
                modelValue: $data.formData.marginSize,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.formData.marginSize = $event),
                localdata: $data.sizeData,
                onChange: _cache[3] || (_cache[3] = ($event) => $options.change($event, 1))
              }, null, 8, ["modelValue", "localdata"])
            ]),
            (0, import_vue7.createElementVNode)("view", { class: "actions" }, [
              (0, import_vue7.createElementVNode)("u-text", { class: "action-label" }, "\u5185\u8FB9\u8DDD"),
              (0, import_vue7.createVNode)(_component_uni_data_checkbox, {
                modelValue: $data.formData.padding,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.formData.padding = $event),
                multiple: "",
                localdata: $data.directionData,
                onChange: _cache[5] || (_cache[5] = ($event) => $options.change($event, 2))
              }, null, 8, ["modelValue", "localdata"])
            ]),
            (0, import_vue7.createElementVNode)("view", { class: "actions uni-mt-3 uni-mb-10" }, [
              (0, import_vue7.createElementVNode)("u-text", { class: "action-label" }, "\u5185\u8FB9\u8DDD\u5927\u5C0F"),
              (0, import_vue7.createVNode)(_component_uni_data_checkbox, {
                modelValue: $data.formData.paddingSize,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.formData.paddingSize = $event),
                localdata: $data.sizeData,
                onChange: _cache[7] || (_cache[7] = ($event) => $options.change($event, 3))
              }, null, 8, ["modelValue", "localdata"])
            ])
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]);
  }
  var space = /* @__PURE__ */ _export_sfc(_sfc_main5, [["render", _sfc_render5], ["styles", [_style_05]], ["__file", "E:/workspace/HelloUniApp/pages/extUI/space/space.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/extUI/space/space";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e2) {
    }
    space.mpType = "page";
    const app = Vue.createPageApp(space, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...space.styles || []]));
    app.mount("#root");
  }
})();
