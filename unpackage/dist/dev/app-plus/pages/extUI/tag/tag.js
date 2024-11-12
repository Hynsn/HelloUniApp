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

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/extUI/tag/tag.js
  var import_vue4 = __toESM(require_vue());

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/uni-app.es.js
  var import_vue2 = __toESM(require_vue());
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/uni-section.js
  var import_vue3 = __toESM(require_vue());
  var _style_02 = { "uni-section": { "": { "backgroundColor": "#ffffff" } }, "uni-section-header": { ".uni-section ": { "position": "relative", "flexDirection": "row", "alignItems": "center", "paddingTop": 12, "paddingRight": 10, "paddingBottom": 12, "paddingLeft": 10, "fontWeight": "normal" } }, "uni-section-header__decoration": { ".uni-section ": { "marginRight": 6, "backgroundColor": "#2979ff" }, ".uni-section .line": { "width": 4, "height": 12, "borderRadius": 10 }, ".uni-section .circle": { "width": 8, "height": 8, "borderTopRightRadius": 50, "borderTopLeftRadius": 50, "borderBottomLeftRadius": 50, "borderBottomRightRadius": 50 }, ".uni-section .square": { "width": 8, "height": 8 } }, "uni-section-header__content": { ".uni-section ": { "flexDirection": "column", "flex": 1, "color": "#333333" } }, "distraction": { ".uni-section .uni-section-header__content ": { "flexDirection": "row", "alignItems": "center" } }, "uni-section-header__content-sub": { ".uni-section ": { "marginTop": 2 } }, "uni-section-header__slot-right": { ".uni-section ": { "fontSize": 14 } }, "uni-section-content": { ".uni-section ": { "fontSize": 14 } } };
  var _sfc_main2 = {
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
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
      class: "uni-section",
      renderWhole: true
    }, [
      (0, import_vue3.createElementVNode)("view", {
        class: "uni-section-header",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
      }, [
        $props.type ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
          "view",
          {
            key: 0,
            class: (0, import_vue3.normalizeClass)(["uni-section-header__decoration", $props.type])
          },
          null,
          2
          /* CLASS */
        )) : (0, import_vue3.renderSlot)(_ctx.$slots, "decoration", { key: 1 }),
        (0, import_vue3.createElementVNode)("view", { class: "uni-section-header__content" }, [
          (0, import_vue3.createElementVNode)(
            "u-text",
            {
              style: (0, import_vue3.normalizeStyle)({ "font-size": $props.titleFontSize, "color": $props.titleColor }),
              class: (0, import_vue3.normalizeClass)(["uni-section__content-title", { "distraction": !$props.subTitle }])
            },
            (0, import_vue3.toDisplayString)($props.title),
            7
            /* TEXT, CLASS, STYLE */
          ),
          $props.subTitle ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
            "u-text",
            {
              key: 0,
              style: (0, import_vue3.normalizeStyle)({ "font-size": $props.subTitleFontSize, "color": $props.subTitleColor }),
              class: "uni-section-header__content-sub"
            },
            (0, import_vue3.toDisplayString)($props.subTitle),
            5
            /* TEXT, STYLE */
          )) : (0, import_vue3.createCommentVNode)("v-if", true)
        ]),
        (0, import_vue3.createElementVNode)("view", { class: "uni-section-header__slot-right" }, [
          (0, import_vue3.renderSlot)(_ctx.$slots, "right")
        ])
      ]),
      (0, import_vue3.createElementVNode)(
        "view",
        {
          class: "uni-section-content",
          style: (0, import_vue3.normalizeStyle)({ padding: $options._padding })
        },
        [
          (0, import_vue3.renderSlot)(_ctx.$slots, "default")
        ],
        4
        /* STYLE */
      )
    ]);
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "E:/workspace/HelloUniApp/uni_modules/uni-section/components/uni-section/uni-section.vue"]]);

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/extUI/tag/tag.js
  var _style_0$1 = { "uni-tag": { "": { "lineHeight": 14, "fontSize": 12, "fontWeight": "200", "paddingTop": 4, "paddingRight": 7, "paddingBottom": 4, "paddingLeft": 7, "color": "#ffffff", "borderRadius": 3, "backgroundColor": "#8f939c", "borderWidth": "1rpx", "borderStyle": "solid", "borderColor": "#8f939c" } }, "uni-tag--default": { "": { "fontSize": 12 } }, "uni-tag--default--inverted": { "": { "color": "#8f939c", "borderColor": "#8f939c" } }, "uni-tag--small": { "": { "paddingTop": 2, "paddingRight": 5, "paddingBottom": 2, "paddingLeft": 5, "fontSize": 12, "borderRadius": 2 } }, "uni-tag--mini": { "": { "paddingTop": 1, "paddingRight": 3, "paddingBottom": 1, "paddingLeft": 3, "fontSize": 12, "borderRadius": 2 } }, "uni-tag--primary": { "": { "backgroundColor": "#2979ff", "borderColor": "#2979ff", "color": "#ffffff" } }, "uni-tag--success": { "": { "color": "#ffffff", "backgroundColor": "#18bc37", "borderColor": "#18bc37" } }, "uni-tag--warning": { "": { "color": "#ffffff", "backgroundColor": "#f3a73f", "borderColor": "#f3a73f" } }, "uni-tag--error": { "": { "color": "#ffffff", "backgroundColor": "#e43d33", "borderColor": "#e43d33" } }, "uni-tag--primary--inverted": { "": { "color": "#2979ff", "borderColor": "#2979ff" } }, "uni-tag--success--inverted": { "": { "color": "#18bc37", "borderColor": "#18bc37" } }, "uni-tag--warning--inverted": { "": { "color": "#f3a73f", "borderColor": "#f3a73f" } }, "uni-tag--error--inverted": { "": { "color": "#e43d33", "borderColor": "#e43d33" } }, "uni-tag--inverted": { "": { "backgroundColor": "#ffffff" } }, "uni-tag--circle": { "": { "!borderRadius": 15 } }, "uni-tag--mark": { "": { "!borderTopLeftRadius": 0, "!borderBottomLeftRadius": 0, "!borderTopRightRadius": 15, "!borderBottomRightRadius": 15 } }, "uni-tag--disabled": { "": { "opacity": 0.5 } }, "uni-tag-text": { "": { "color": "#ffffff", "fontSize": 14 } }, "uni-tag-text--primary": { "": { "color": "#2979ff" } }, "uni-tag-text--success": { "": { "color": "#18bc37" } }, "uni-tag-text--warning": { "": { "color": "#f3a73f" } }, "uni-tag-text--error": { "": { "color": "#e43d33" } }, "uni-tag-text--small": { "": { "fontSize": 12 } } };
  var _sfc_main$1 = {
    name: "UniTag",
    emits: ["click"],
    props: {
      type: {
        // 标签类型default、primary、success、warning、error、royal
        type: String,
        default: "default"
      },
      size: {
        // 标签大小 normal, small
        type: String,
        default: "normal"
      },
      // 标签内容
      text: {
        type: String,
        default: ""
      },
      disabled: {
        // 是否为禁用状态
        type: [Boolean, String],
        default: false
      },
      inverted: {
        // 是否为空心
        type: [Boolean, String],
        default: false
      },
      circle: {
        // 是否为圆角样式
        type: [Boolean, String],
        default: false
      },
      mark: {
        // 是否为标记样式
        type: [Boolean, String],
        default: false
      },
      customStyle: {
        type: String,
        default: ""
      }
    },
    computed: {
      classes() {
        const {
          type,
          disabled,
          inverted,
          circle,
          mark,
          size,
          isTrue
        } = this;
        const classArr = [
          "uni-tag--" + type,
          "uni-tag--" + size,
          isTrue(disabled) ? "uni-tag--disabled" : "",
          isTrue(inverted) ? "uni-tag--" + type + "--inverted" : "",
          isTrue(circle) ? "uni-tag--circle" : "",
          isTrue(mark) ? "uni-tag--mark" : "",
          // type === 'default' ? 'uni-tag--default' : 'uni-tag-text',
          isTrue(inverted) ? "uni-tag--inverted uni-tag-text--" + type : "",
          size === "small" ? "uni-tag-text--small" : ""
        ];
        return classArr.join(" ");
      }
    },
    methods: {
      isTrue(value) {
        return value === true || value === "true";
      },
      onClick() {
        if (this.isTrue(this.disabled))
          return;
        this.$emit("click");
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return $props.text ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
      "u-text",
      {
        key: 0,
        class: (0, import_vue4.normalizeClass)(["uni-tag", $options.classes]),
        style: (0, import_vue4.normalizeStyle)($props.customStyle),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
      },
      (0, import_vue4.toDisplayString)($props.text),
      7
      /* TEXT, CLASS, STYLE */
    )) : (0, import_vue4.createCommentVNode)("v-if", true);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "E:/workspace/HelloUniApp/uni_modules/uni-tag/components/uni-tag/uni-tag.vue"]]);
  var _style_03 = { "example-body": { "": { "flexDirection": "row", "justifyContent": "flex-start", "alignItems": "flex-end", "flexWrap": "wrap" } }, "tag-view": { "": { "marginRight": 10 } } };
  var _sfc_main3 = {
    components: {},
    data() {
      return {
        type: "default",
        inverted: false
      };
    },
    methods: {
      setType() {
        let types = ["default", "primary", "success", "warning", "error"];
        let index = types.indexOf(this.type);
        types.splice(index, 1);
        let randomIndex = Math.floor(Math.random() * 4);
        this.type = types[randomIndex];
      },
      setInverted() {
        this.inverted = !this.inverted;
      }
    }
  };
  function _sfc_render3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_card = resolveEasycom((0, import_vue4.resolveDynamicComponent)("uni-card"), __easycom_0);
    const _component_uni_tag = resolveEasycom((0, import_vue4.resolveDynamicComponent)("uni-tag"), __easycom_1);
    const _component_uni_section = resolveEasycom((0, import_vue4.resolveDynamicComponent)("uni-section"), __easycom_2);
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue4.createElementVNode)("view", { class: "container" }, [
        (0, import_vue4.createVNode)(_component_uni_card, { "is-full": "" }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createElementVNode)("u-text", { class: "uni-h6" }, "\u6807\u7B7E\u7EC4\u4EF6\u591A\u7528\u4E8E\u5546\u54C1\u5206\u7C7B\u3001\u91CD\u70B9\u5185\u5BB9\u663E\u793A\u7B49\u573A\u666F\u3002")
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue4.createVNode)(_component_uni_section, {
          title: "\u5B9E\u5FC3\u6807\u7B7E",
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createElementVNode)("view", { class: "example-body" }, [
              (0, import_vue4.createElementVNode)("view", { class: "tag-view" }, [
                (0, import_vue4.createVNode)(_component_uni_tag, {
                  text: "\u6807\u7B7E",
                  type: "primary"
                })
              ]),
              (0, import_vue4.createElementVNode)("view", { class: "tag-view" }, [
                (0, import_vue4.createVNode)(_component_uni_tag, {
                  text: "\u6807\u7B7E",
                  type: "success"
                })
              ]),
              (0, import_vue4.createElementVNode)("view", { class: "tag-view" }, [
                (0, import_vue4.createVNode)(_component_uni_tag, {
                  text: "\u6807\u7B7E",
                  type: "warning"
                })
              ]),
              (0, import_vue4.createElementVNode)("view", { class: "tag-view" }, [
                (0, import_vue4.createVNode)(_component_uni_tag, {
                  text: "\u6807\u7B7E",
                  type: "error"
                })
              ]),
              (0, import_vue4.createElementVNode)("view", { class: "tag-view" }, [
                (0, import_vue4.createVNode)(_component_uni_tag, { text: "\u6807\u7B7E" })
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue4.createVNode)(_component_uni_section, {
          title: "\u7A7A\u5FC3\u6807\u7B7E",
          subTitle: "\u4F7F\u7528 inverted \u5C5E\u6027\u663E\u793A\u7A7A\u5FC3\u8868\u7B7E",
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createElementVNode)("view", { class: "example-body" }, [
              (0, import_vue4.createElementVNode)("view", { class: "tag-view" }, [
                (0, import_vue4.createVNode)(_component_uni_tag, {
                  inverted: true,
                  text: "\u6807\u7B7E",
                  type: "primary"
                })
              ]),
              (0, import_vue4.createElementVNode)("view", { class: "tag-view" }, [
                (0, import_vue4.createVNode)(_component_uni_tag, {
                  inverted: true,
                  text: "\u6807\u7B7E",
                  type: "success"
                })
              ]),
              (0, import_vue4.createElementVNode)("view", { class: "tag-view" }, [
                (0, import_vue4.createVNode)(_component_uni_tag, {
                  inverted: true,
                  text: "\u6807\u7B7E",
                  type: "warning"
                })
              ]),
              (0, import_vue4.createElementVNode)("view", { class: "tag-view" }, [
                (0, import_vue4.createVNode)(_component_uni_tag, {
                  inverted: true,
                  text: "\u6807\u7B7E",
                  type: "error"
                })
              ]),
              (0, import_vue4.createElementVNode)("view", { class: "tag-view" }, [
                (0, import_vue4.createVNode)(_component_uni_tag, {
                  inverted: true,
                  text: "\u6807\u7B7E"
                })
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue4.createVNode)(_component_uni_section, {
          title: "\u6807\u7B7E\u5C3A\u5BF8",
          subTitle: "\u4F7F\u7528 size \u5C5E\u6027\u63A7\u5236\u6807\u7B7E\u5927\u5C0F",
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createElementVNode)("view", { class: "example-body" }, [
              (0, import_vue4.createElementVNode)("view", { class: "tag-view" }, [
                (0, import_vue4.createVNode)(_component_uni_tag, {
                  text: "\u6807\u7B7E",
                  type: "primary",
                  size: "normal"
                })
              ]),
              (0, import_vue4.createElementVNode)("view", { class: "tag-view" }, [
                (0, import_vue4.createVNode)(_component_uni_tag, {
                  text: "\u6807\u7B7E",
                  type: "primary",
                  size: "small"
                })
              ]),
              (0, import_vue4.createElementVNode)("view", { class: "tag-view" }, [
                (0, import_vue4.createVNode)(_component_uni_tag, {
                  text: "\u6807\u7B7E",
                  type: "primary",
                  size: "mini"
                })
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue4.createVNode)(_component_uni_section, {
          title: "\u5706\u89D2\u6837\u5F0F",
          subTitle: "\u4F7F\u7528 circle \u5C5E\u6027\u63A7\u5236\u6807\u7B7E\u5706\u89D2",
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createElementVNode)("view", { class: "example-body" }, [
              (0, import_vue4.createElementVNode)("view", { class: "tag-view" }, [
                (0, import_vue4.createVNode)(_component_uni_tag, {
                  circle: true,
                  text: "\u6807\u7B7E",
                  type: "primary"
                })
              ]),
              (0, import_vue4.createElementVNode)("view", { class: "tag-view" }, [
                (0, import_vue4.createVNode)(_component_uni_tag, {
                  circle: true,
                  text: "\u6807\u7B7E",
                  type: "primary",
                  size: "small"
                })
              ]),
              (0, import_vue4.createElementVNode)("view", { class: "tag-view" }, [
                (0, import_vue4.createVNode)(_component_uni_tag, {
                  circle: true,
                  text: "\u6807\u7B7E",
                  type: "primary",
                  size: "mini"
                })
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue4.createVNode)(_component_uni_section, {
          title: "\u6807\u8BB0\u6837\u5F0F",
          subTitle: "\u4F7F\u7528 mark \u5C5E\u6027\u663E\u793A\u6807\u8BB0\u6837\u5F0F",
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createElementVNode)("view", { class: "example-body" }, [
              (0, import_vue4.createElementVNode)("view", { class: "tag-view" }, [
                (0, import_vue4.createVNode)(_component_uni_tag, {
                  mark: true,
                  text: "\u6807\u7B7E",
                  type: "primary",
                  size: "default"
                })
              ]),
              (0, import_vue4.createElementVNode)("view", { class: "tag-view" }, [
                (0, import_vue4.createVNode)(_component_uni_tag, {
                  mark: true,
                  text: "\u6807\u7B7E",
                  type: "primary",
                  size: "small"
                })
              ]),
              (0, import_vue4.createElementVNode)("view", { class: "tag-view" }, [
                (0, import_vue4.createVNode)(_component_uni_tag, {
                  mark: true,
                  text: "\u6807\u7B7E",
                  type: "primary",
                  size: "mini"
                })
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue4.createVNode)(_component_uni_section, {
          title: "\u4E0D\u53EF\u70B9\u51FB\u72B6\u6001",
          subTitle: "\u4F7F\u7528 disabled \u5C5E\u6027 \u663E\u793A\u7981\u7528\u6837\u5F0F",
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createElementVNode)("view", { class: "example-body" }, [
              (0, import_vue4.createElementVNode)("view", { class: "tag-view" }, [
                (0, import_vue4.createVNode)(_component_uni_tag, {
                  disabled: "",
                  text: "\u6807\u7B7E",
                  type: "primary"
                })
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue4.createVNode)(_component_uni_section, {
          title: "\u81EA\u5B9A\u4E49\u6837\u5F0F",
          subTitle: "\u4F7F\u7528 custom-style \u5C5E\u6027\u81EA\u5B9A\u4E49\u6837\u5F0F",
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createElementVNode)("view", { class: "example-body" }, [
              (0, import_vue4.createElementVNode)("view", { class: "tag-view" }, [
                (0, import_vue4.createVNode)(_component_uni_tag, {
                  text: "\u81EA\u5B9A\u4E49\u6807\u7B7E\u6837\u5F0F",
                  "custom-style": "background-color: #4335d6; border-color: #4335d6; color: #fff;"
                })
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue4.createVNode)(_component_uni_section, {
          title: "\u70B9\u51FB\u4E8B\u4EF6",
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createElementVNode)("view", { class: "example-body" }, [
              (0, import_vue4.createElementVNode)("view", { class: "tag-view" }, [
                (0, import_vue4.createVNode)(_component_uni_tag, {
                  type: $data.type,
                  text: "\u6807\u7B7E",
                  onClick: $options.setType
                }, null, 8, ["type", "onClick"])
              ]),
              (0, import_vue4.createElementVNode)("view", { class: "tag-view" }, [
                (0, import_vue4.createVNode)(_component_uni_tag, {
                  circle: true,
                  inverted: $data.inverted,
                  text: "\u6807\u7B7E",
                  type: "primary",
                  onClick: $options.setInverted
                }, null, 8, ["inverted", "onClick"])
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]);
  }
  var tag = /* @__PURE__ */ _export_sfc(_sfc_main3, [["render", _sfc_render3], ["styles", [_style_03]], ["__file", "E:/workspace/HelloUniApp/pages/extUI/tag/tag.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/extUI/tag/tag";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    tag.mpType = "page";
    const app = Vue.createPageApp(tag, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...tag.styles || []]));
    app.mount("#root");
  }
})();
