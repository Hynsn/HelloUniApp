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

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/extUI/swiper-dot/swiper-dot.js
  var import_vue3 = __toESM(require_vue());

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/uni-section.js
  var import_vue2 = __toESM(require_vue());
  var _style_0 = { "uni-section": { "": { "backgroundColor": "#ffffff" } }, "uni-section-header": { ".uni-section ": { "position": "relative", "flexDirection": "row", "alignItems": "center", "paddingTop": 12, "paddingRight": 10, "paddingBottom": 12, "paddingLeft": 10, "fontWeight": "normal" } }, "uni-section-header__decoration": { ".uni-section ": { "marginRight": 6, "backgroundColor": "#2979ff" }, ".uni-section .line": { "width": 4, "height": 12, "borderRadius": 10 }, ".uni-section .circle": { "width": 8, "height": 8, "borderTopRightRadius": 50, "borderTopLeftRadius": 50, "borderBottomLeftRadius": 50, "borderBottomRightRadius": 50 }, ".uni-section .square": { "width": 8, "height": 8 } }, "uni-section-header__content": { ".uni-section ": { "flexDirection": "column", "flex": 1, "color": "#333333" } }, "distraction": { ".uni-section .uni-section-header__content ": { "flexDirection": "row", "alignItems": "center" } }, "uni-section-header__content-sub": { ".uni-section ": { "marginTop": 2 } }, "uni-section-header__slot-right": { ".uni-section ": { "fontSize": 14 } }, "uni-section-content": { ".uni-section ": { "fontSize": 14 } } };
  var _sfc_main = {
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
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
      class: "uni-section",
      renderWhole: true
    }, [
      (0, import_vue2.createElementVNode)("view", {
        class: "uni-section-header",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
      }, [
        $props.type ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
          "view",
          {
            key: 0,
            class: (0, import_vue2.normalizeClass)(["uni-section-header__decoration", $props.type])
          },
          null,
          2
          /* CLASS */
        )) : (0, import_vue2.renderSlot)(_ctx.$slots, "decoration", { key: 1 }),
        (0, import_vue2.createElementVNode)("view", { class: "uni-section-header__content" }, [
          (0, import_vue2.createElementVNode)(
            "u-text",
            {
              style: (0, import_vue2.normalizeStyle)({ "font-size": $props.titleFontSize, "color": $props.titleColor }),
              class: (0, import_vue2.normalizeClass)(["uni-section__content-title", { "distraction": !$props.subTitle }])
            },
            (0, import_vue2.toDisplayString)($props.title),
            7
            /* TEXT, CLASS, STYLE */
          ),
          $props.subTitle ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
            "u-text",
            {
              key: 0,
              style: (0, import_vue2.normalizeStyle)({ "font-size": $props.subTitleFontSize, "color": $props.subTitleColor }),
              class: "uni-section-header__content-sub"
            },
            (0, import_vue2.toDisplayString)($props.subTitle),
            5
            /* TEXT, STYLE */
          )) : (0, import_vue2.createCommentVNode)("v-if", true)
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "uni-section-header__slot-right" }, [
          (0, import_vue2.renderSlot)(_ctx.$slots, "right")
        ])
      ]),
      (0, import_vue2.createElementVNode)(
        "view",
        {
          class: "uni-section-content",
          style: (0, import_vue2.normalizeStyle)({ padding: $options._padding })
        },
        [
          (0, import_vue2.renderSlot)(_ctx.$slots, "default")
        ],
        4
        /* STYLE */
      )
    ]);
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/workspace/HelloUniApp/uni_modules/uni-section/components/uni-section/uni-section.vue"]]);

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/extUI/swiper-dot/swiper-dot.js
  var _style_0$1 = { "uni-swiper__warp": { "": { "flex": 1, "flexDirection": "column", "position": "relative", "overflow": "hidden" } }, "uni-swiper__dots-box": { "": { "position": "absolute", "bottom": 10, "left": 0, "right": 0, "flex": 1, "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } }, "uni-swiper__dots-item": { "": { "width": 8, "borderRadius": 100, "marginLeft": 6, "backgroundColor": "rgba(0,0,0,0.4)", "marginTop:first-child": 0, "marginRight:first-child": 0, "marginBottom:first-child": 0, "marginLeft:first-child": 0 } }, "uni-swiper__dots-default": { "": { "borderRadius": 100 } }, "uni-swiper__dots-long": { "": { "borderRadius": 50 } }, "uni-swiper__dots-bar": { "": { "borderRadius": 50 } }, "uni-swiper__dots-nav": { "": { "bottom": 0, "paddingTop": 8, "paddingRight": 0, "paddingBottom": 8, "paddingLeft": 0, "flex": 1, "flexDirection": "row", "justifyContent": "flex-start", "alignItems": "center", "backgroundColor": "rgba(0,0,0,0.2)" } }, "uni-swiper__dots-nav-item": { "": { "fontSize": 14, "color": "#ffffff", "marginTop": 0, "marginRight": 15, "marginBottom": 0, "marginLeft": 15 } }, "uni-swiper__dots-indexes": { "": { "justifyContent": "center", "alignItems": "center" } }, "uni-swiper__dots-indexes-text": { "": { "color": "#ffffff", "fontSize": 12, "lineHeight": 14 } } };
  var _sfc_main$1 = {
    name: "UniSwiperDot",
    emits: ["clickItem"],
    props: {
      info: {
        type: Array,
        default() {
          return [];
        }
      },
      current: {
        type: Number,
        default: 0
      },
      dotsStyles: {
        type: Object,
        default() {
          return {};
        }
      },
      // 类型 ：default(默认) indexes long nav
      mode: {
        type: String,
        default: "default"
      },
      // 只在 nav 模式下生效，变量名称
      field: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        dots: {
          width: 6,
          height: 6,
          bottom: 10,
          color: "#fff",
          backgroundColor: "rgba(0, 0, 0, .3)",
          border: "1px rgba(0, 0, 0, .3) solid",
          selectedBackgroundColor: "#333",
          selectedBorder: "1px rgba(0, 0, 0, .9) solid"
        }
      };
    },
    watch: {
      dotsStyles(newVal) {
        this.dots = Object.assign(this.dots, this.dotsStyles);
      },
      mode(newVal) {
        if (newVal === "indexes") {
          this.dots.width = 14;
          this.dots.height = 14;
        } else {
          this.dots.width = 6;
          this.dots.height = 6;
        }
      }
    },
    created() {
      if (this.mode === "indexes") {
        this.dots.width = 12;
        this.dots.height = 12;
      }
      this.dots = Object.assign(this.dots, this.dotsStyles);
    },
    methods: {
      clickItem(index) {
        this.$emit("clickItem", index);
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
      class: "uni-swiper__warp",
      renderWhole: true
    }, [
      (0, import_vue3.renderSlot)(_ctx.$slots, "default"),
      $props.mode === "default" ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
        "view",
        {
          style: (0, import_vue3.normalizeStyle)({ "bottom": $data.dots.bottom + "px" }),
          class: "uni-swiper__dots-box",
          key: "default"
        },
        [
          ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
            import_vue3.Fragment,
            null,
            (0, import_vue3.renderList)($props.info, (item, index) => {
              return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
                onClick: ($event) => $options.clickItem(index),
                style: (0, import_vue3.normalizeStyle)({
                  "width": (index === $props.current ? $data.dots.width * 2 : $data.dots.width) + "px",
                  "height": $data.dots.width / 2 + "px",
                  "background-color": index !== $props.current ? $data.dots.backgroundColor : $data.dots.selectedBackgroundColor,
                  "border-radius": "0px"
                }),
                key: index,
                class: "uni-swiper__dots-item uni-swiper__dots-bar"
              }, null, 12, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        4
        /* STYLE */
      )) : (0, import_vue3.createCommentVNode)("v-if", true),
      $props.mode === "dot" ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
        "view",
        {
          style: (0, import_vue3.normalizeStyle)({ "bottom": $data.dots.bottom + "px" }),
          class: "uni-swiper__dots-box",
          key: "dot"
        },
        [
          ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
            import_vue3.Fragment,
            null,
            (0, import_vue3.renderList)($props.info, (item, index) => {
              return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
                onClick: ($event) => $options.clickItem(index),
                style: (0, import_vue3.normalizeStyle)({
                  "width": $data.dots.width + "px",
                  "height": $data.dots.height + "px",
                  "background-color": index !== $props.current ? $data.dots.backgroundColor : $data.dots.selectedBackgroundColor,
                  "border": index !== $props.current ? $data.dots.border : $data.dots.selectedBorder
                }),
                key: index,
                class: "uni-swiper__dots-item"
              }, null, 12, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        4
        /* STYLE */
      )) : (0, import_vue3.createCommentVNode)("v-if", true),
      $props.mode === "round" ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
        "view",
        {
          style: (0, import_vue3.normalizeStyle)({ "bottom": $data.dots.bottom + "px" }),
          class: "uni-swiper__dots-box",
          key: "round"
        },
        [
          ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
            import_vue3.Fragment,
            null,
            (0, import_vue3.renderList)($props.info, (item, index) => {
              return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
                onClick: ($event) => $options.clickItem(index),
                class: (0, import_vue3.normalizeClass)([[index === $props.current && "uni-swiper__dots-long"], "uni-swiper__dots-item"]),
                style: (0, import_vue3.normalizeStyle)({
                  "width": (index === $props.current ? $data.dots.width * 3 : $data.dots.width) + "px",
                  "height": $data.dots.height + "px",
                  "background-color": index !== $props.current ? $data.dots.backgroundColor : $data.dots.selectedBackgroundColor,
                  "border": index !== $props.current ? $data.dots.border : $data.dots.selectedBorder
                }),
                key: index
              }, null, 14, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        4
        /* STYLE */
      )) : (0, import_vue3.createCommentVNode)("v-if", true),
      $props.mode === "nav" ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
        "view",
        {
          key: "nav",
          style: (0, import_vue3.normalizeStyle)({ "background-color": $props.dotsStyles.backgroundColor, "bottom": "0" }),
          class: "uni-swiper__dots-box uni-swiper__dots-nav"
        },
        [
          (0, import_vue3.createElementVNode)(
            "u-text",
            {
              style: (0, import_vue3.normalizeStyle)({ "color": $props.dotsStyles.color }),
              class: "uni-swiper__dots-nav-item"
            },
            (0, import_vue3.toDisplayString)($props.current + 1 + "/" + $props.info.length + " " + $props.info[$props.current][$props.field]),
            5
            /* TEXT, STYLE */
          )
        ],
        4
        /* STYLE */
      )) : (0, import_vue3.createCommentVNode)("v-if", true),
      $props.mode === "indexes" ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
        "view",
        {
          key: "indexes",
          style: (0, import_vue3.normalizeStyle)({ "bottom": $data.dots.bottom + "px" }),
          class: "uni-swiper__dots-box"
        },
        [
          ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
            import_vue3.Fragment,
            null,
            (0, import_vue3.renderList)($props.info, (item, index) => {
              return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
                onClick: ($event) => $options.clickItem(index),
                style: (0, import_vue3.normalizeStyle)({
                  "width": $data.dots.width + "px",
                  "height": $data.dots.height + "px",
                  "color": index === $props.current ? $data.dots.selectedColor : $data.dots.color,
                  "background-color": index !== $props.current ? $data.dots.backgroundColor : $data.dots.selectedBackgroundColor,
                  "border": index !== $props.current ? $data.dots.border : $data.dots.selectedBorder
                }),
                key: index,
                class: "uni-swiper__dots-item uni-swiper__dots-indexes"
              }, [
                (0, import_vue3.createElementVNode)(
                  "u-text",
                  { class: "uni-swiper__dots-indexes-text" },
                  (0, import_vue3.toDisplayString)(index + 1),
                  1
                  /* TEXT */
                )
              ], 12, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        4
        /* STYLE */
      )) : (0, import_vue3.createCommentVNode)("v-if", true)
    ]);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "E:/workspace/HelloUniApp/uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.vue"]]);
  var _style_02 = { "swiper-box": { "": { "height": 200 } }, "swiper-item": { "": { "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "height": 200, "color": "#ffffff" } }, "swiper-item0": { "": { "backgroundColor": "#cee1fd" } }, "swiper-item1": { "": { "backgroundColor": "#b2cef7" } }, "swiper-item2": { "": { "backgroundColor": "#cee1fd" } }, "image": { "": { "width": "750rpx" } }, "uni-bg-red": { "": { "backgroundColor": "#ff5a5f" } }, "uni-bg-green": { "": { "backgroundColor": "#09bb07" } }, "uni-bg-blue": { "": { "backgroundColor": "#007aff" } }, "example-body": { "": { "flexDirection": "row", "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx" } }, "example-body-item": { "": { "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "marginTop": "15rpx", "marginRight": "15rpx", "marginBottom": "15rpx", "marginLeft": "15rpx", "paddingTop": "15rpx", "paddingRight": "15rpx", "paddingBottom": "15rpx", "paddingLeft": "15rpx", "height": "60rpx", "flex": 1, "borderColor": "#e5e5e5", "borderStyle": "solid", "borderWidth": 1, "borderRadius": 5 } }, "example-body-item-text": { "": { "fontSize": "28rpx", "color": "#333333" } }, "example-body-dots": { "": { "width": "16rpx", "height": "16rpx", "borderRadius": 50, "backgroundColor": "#333333", "marginLeft": "10rpx" } }, "active": { "": { "borderStyle": "solid", "borderColor": "#007aff", "borderWidth": 1 } }, "@FONT-FACE": [{ "uni-swiper-dot-box": { "": { "width": 400, "marginTop": 8 } }, "image": { "": { "width": 100 } } }] };
  var _sfc_main2 = {
    components: {},
    data() {
      return {
        info: [
          {
            colorClass: "uni-bg-red",
            url: "https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg",
            content: "\u5185\u5BB9 A"
          },
          {
            colorClass: "uni-bg-green",
            url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg",
            content: "\u5185\u5BB9 B"
          },
          {
            colorClass: "uni-bg-blue",
            url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg",
            content: "\u5185\u5BB9 C"
          }
        ],
        dotStyle: [
          {
            backgroundColor: "rgba(0, 0, 0, .3)",
            border: "1px rgba(0, 0, 0, .3) solid",
            color: "#fff",
            selectedBackgroundColor: "rgba(0, 0, 0, .9)",
            selectedBorder: "1px rgba(0, 0, 0, .9) solid"
          },
          {
            backgroundColor: "rgba(255, 90, 95,0.3)",
            border: "1px rgba(255, 90, 95,0.3) solid",
            color: "#fff",
            selectedBackgroundColor: "rgba(255, 90, 95,0.9)",
            selectedBorder: "1px rgba(255, 90, 95,0.9) solid"
          },
          {
            backgroundColor: "rgba(83, 200, 249,0.3)",
            border: "1px rgba(83, 200, 249,0.3) solid",
            color: "#fff",
            selectedBackgroundColor: "rgba(83, 200, 249,0.9)",
            selectedBorder: "1px rgba(83, 200, 249,0.9) solid"
          }
        ],
        modeIndex: -1,
        styleIndex: -1,
        current: 0,
        mode: "default",
        dotsStyles: {},
        swiperDotIndex: 0
      };
    },
    onLoad() {
    },
    methods: {
      change(e) {
        this.current = e.detail.current;
      },
      selectStyle(index) {
        this.dotsStyles = this.dotStyle[index];
        this.styleIndex = index;
      },
      selectMode(mode, index) {
        this.mode = mode;
        this.modeIndex = index;
        this.styleIndex = -1;
        this.dotsStyles = this.dotStyle[0];
      },
      clickItem(e) {
        this.swiperDotIndex = e;
      },
      onBanner(index) {
        formatAppLog("log", "at pages/extUI/swiper-dot/swiper-dot.nvue:124", 22222, index);
      }
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_swiper_item = (0, import_vue3.resolveComponent)("swiper-item");
    const _component_swiper = (0, import_vue3.resolveComponent)("swiper");
    const _component_uni_swiper_dot = resolveEasycom((0, import_vue3.resolveDynamicComponent)("uni-swiper-dot"), __easycom_0);
    const _component_uni_section = resolveEasycom((0, import_vue3.resolveDynamicComponent)("uni-section"), __easycom_2);
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue3.createElementVNode)("view", { class: "content" }, [
        (0, import_vue3.createVNode)(_component_uni_swiper_dot, {
          class: "uni-swiper-dot-box",
          onClickItem: $options.clickItem,
          info: $data.info,
          current: $data.current,
          mode: $data.mode,
          "dots-styles": $data.dotsStyles,
          field: "content"
        }, {
          default: (0, import_vue3.withCtx)(() => [
            (0, import_vue3.createVNode)(_component_swiper, {
              class: "swiper-box",
              onChange: $options.change,
              current: $data.swiperDotIndex
            }, {
              default: (0, import_vue3.withCtx)(() => [
                ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
                  import_vue3.Fragment,
                  null,
                  (0, import_vue3.renderList)(3, (item, index) => {
                    return (0, import_vue3.createVNode)(
                      _component_swiper_item,
                      { key: index },
                      {
                        default: (0, import_vue3.withCtx)(() => [
                          (0, import_vue3.createElementVNode)(
                            "view",
                            {
                              class: (0, import_vue3.normalizeClass)(["swiper-item", "swiper-item" + index])
                            },
                            [
                              (0, import_vue3.createElementVNode)(
                                "u-text",
                                { style: { "color": "#fff", "font-size": "32px" } },
                                (0, import_vue3.toDisplayString)(index + 1),
                                1
                                /* TEXT */
                              )
                            ],
                            2
                            /* CLASS */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    );
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onChange", "current"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClickItem", "info", "current", "mode", "dots-styles"]),
        (0, import_vue3.createVNode)(_component_uni_section, {
          title: "\u6A21\u5F0F\u9009\u62E9",
          type: "line"
        }, {
          default: (0, import_vue3.withCtx)(() => [
            (0, import_vue3.createElementVNode)("view", { class: "example-body" }, [
              (0, import_vue3.createElementVNode)(
                "view",
                {
                  class: (0, import_vue3.normalizeClass)([{ active: $data.modeIndex === 0 }, "example-body-item"]),
                  onClick: _cache[0] || (_cache[0] = ($event) => $options.selectMode("default", 0))
                },
                [
                  (0, import_vue3.createElementVNode)("u-text", { class: "example-body-item-text" }, "default")
                ],
                2
                /* CLASS */
              ),
              (0, import_vue3.createElementVNode)(
                "view",
                {
                  class: (0, import_vue3.normalizeClass)([{ active: $data.modeIndex === 1 }, "example-body-item"]),
                  onClick: _cache[1] || (_cache[1] = ($event) => $options.selectMode("dot", 1))
                },
                [
                  (0, import_vue3.createElementVNode)("u-text", { class: "example-body-item-text" }, "dot")
                ],
                2
                /* CLASS */
              ),
              (0, import_vue3.createElementVNode)(
                "view",
                {
                  class: (0, import_vue3.normalizeClass)([{ active: $data.modeIndex === 2 }, "example-body-item"]),
                  onClick: _cache[2] || (_cache[2] = ($event) => $options.selectMode("round", 2))
                },
                [
                  (0, import_vue3.createElementVNode)("u-text", { class: "example-body-item-text" }, "round")
                ],
                2
                /* CLASS */
              ),
              (0, import_vue3.createElementVNode)(
                "view",
                {
                  class: (0, import_vue3.normalizeClass)([{ active: $data.modeIndex === 3 }, "example-body-item"]),
                  onClick: _cache[3] || (_cache[3] = ($event) => $options.selectMode("nav", 3))
                },
                [
                  (0, import_vue3.createElementVNode)("u-text", { class: "example-body-item-text" }, "nav")
                ],
                2
                /* CLASS */
              ),
              (0, import_vue3.createElementVNode)(
                "view",
                {
                  class: (0, import_vue3.normalizeClass)([{ active: $data.modeIndex === 4 }, "example-body-item"]),
                  onClick: _cache[4] || (_cache[4] = ($event) => $options.selectMode("indexes", 4))
                },
                [
                  (0, import_vue3.createElementVNode)("u-text", { class: "example-body-item-text" }, "indexes")
                ],
                2
                /* CLASS */
              )
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue3.createVNode)(_component_uni_section, {
          title: "\u989C\u8272\u6837\u5F0F\u9009\u62E9",
          type: "line"
        }, {
          default: (0, import_vue3.withCtx)(() => [
            (0, import_vue3.createElementVNode)("view", { class: "example-body" }, [
              $data.mode !== "nav" ? ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
                import_vue3.Fragment,
                { key: 0 },
                (0, import_vue3.renderList)($data.dotStyle, (item, index) => {
                  return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
                    class: (0, import_vue3.normalizeClass)([{ active: $data.styleIndex === index }, "example-body-item"]),
                    key: index,
                    onClick: ($event) => $options.selectStyle(index)
                  }, [
                    (0, import_vue3.createElementVNode)(
                      "view",
                      {
                        style: (0, import_vue3.normalizeStyle)({ "background-color": item.selectedBackgroundColor, border: item.selectedBorder }),
                        class: "example-body-dots"
                      },
                      null,
                      4
                      /* STYLE */
                    ),
                    (0, import_vue3.createElementVNode)(
                      "view",
                      {
                        style: (0, import_vue3.normalizeStyle)({ "background-color": item.backgroundColor, border: item.border }),
                        class: "example-body-dots"
                      },
                      null,
                      4
                      /* STYLE */
                    ),
                    (0, import_vue3.createElementVNode)(
                      "view",
                      {
                        style: (0, import_vue3.normalizeStyle)({ "background-color": item.backgroundColor, border: item.border }),
                        class: "example-body-dots"
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              )) : (0, import_vue3.createCommentVNode)("v-if", true),
              $data.mode === "nav" ? ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
                import_vue3.Fragment,
                { key: 1 },
                (0, import_vue3.renderList)($data.dotStyle, (item, index) => {
                  return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
                    class: (0, import_vue3.normalizeClass)([{ active: $data.styleIndex === index }, "example-body-item"]),
                    key: index,
                    style: (0, import_vue3.normalizeStyle)({ "background-color": item.selectedBackgroundColor }),
                    onClick: ($event) => $options.selectStyle(index)
                  }, [
                    (0, import_vue3.createElementVNode)(
                      "u-text",
                      {
                        class: "example-body-item-text",
                        style: (0, import_vue3.normalizeStyle)({ color: item.color })
                      },
                      "\u5185\u5BB9",
                      4
                      /* STYLE */
                    )
                  ], 14, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              )) : (0, import_vue3.createCommentVNode)("v-if", true)
            ])
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]);
  }
  var swiperDot = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "E:/workspace/HelloUniApp/pages/extUI/swiper-dot/swiper-dot.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/extUI/swiper-dot/swiper-dot";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    swiperDot.mpType = "page";
    const app = Vue.createPageApp(swiperDot, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...swiperDot.styles || []]));
    app.mount("#root");
  }
})();
