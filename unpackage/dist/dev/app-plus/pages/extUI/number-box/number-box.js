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

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/uni-card.js
  var import_vue2 = __toESM(require_vue());

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
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "view",
      {
        class: (0, import_vue2.normalizeClass)(["uni-card", { "uni-card--full": $props.isFull, "uni-card--shadow": $props.isShadow, "uni-card--border": $props.border }]),
        style: (0, import_vue2.normalizeStyle)({ "margin": $props.isFull ? 0 : $props.margin, "padding": $props.spacing, "box-shadow": $props.isShadow ? $props.shadow : "" }),
        renderWhole: true
      },
      [
        (0, import_vue2.createCommentVNode)(" \u5C01\u9762 "),
        (0, import_vue2.renderSlot)(_ctx.$slots, "cover", {}, () => [
          $props.cover ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
            key: 0,
            class: "uni-card__cover"
          }, [
            (0, import_vue2.createElementVNode)("u-image", {
              class: "uni-card__cover-image",
              mode: "widthFix",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick("cover")),
              src: $props.cover
            }, null, 8, ["src"])
          ])) : (0, import_vue2.createCommentVNode)("v-if", true)
        ]),
        (0, import_vue2.renderSlot)(_ctx.$slots, "title", {}, () => [
          $props.title || $props.extra ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
            key: 0,
            class: "uni-card__header"
          }, [
            (0, import_vue2.createCommentVNode)(" \u5361\u7247\u6807\u9898 "),
            (0, import_vue2.createElementVNode)("view", {
              class: "uni-card__header-box",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.onClick("title"))
            }, [
              $props.thumbnail ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                key: 0,
                class: "uni-card__header-avatar"
              }, [
                (0, import_vue2.createElementVNode)("u-image", {
                  class: "uni-card__header-avatar-image",
                  src: $props.thumbnail,
                  mode: "aspectFit"
                }, null, 8, ["src"])
              ])) : (0, import_vue2.createCommentVNode)("v-if", true),
              (0, import_vue2.createElementVNode)("view", { class: "uni-card__header-content" }, [
                (0, import_vue2.createElementVNode)(
                  "u-text",
                  { class: "uni-card__header-content-title uni-ellipsis" },
                  (0, import_vue2.toDisplayString)($props.title),
                  1
                  /* TEXT */
                ),
                $props.title && $props.subTitle ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
                  "u-text",
                  {
                    key: 0,
                    class: "uni-card__header-content-subtitle uni-ellipsis"
                  },
                  (0, import_vue2.toDisplayString)($props.subTitle),
                  1
                  /* TEXT */
                )) : (0, import_vue2.createCommentVNode)("v-if", true)
              ])
            ]),
            (0, import_vue2.createElementVNode)("view", {
              class: "uni-card__header-extra",
              onClick: _cache[2] || (_cache[2] = ($event) => $options.onClick("extra"))
            }, [
              (0, import_vue2.createElementVNode)(
                "u-text",
                { class: "uni-card__header-extra-text" },
                (0, import_vue2.toDisplayString)($props.extra),
                1
                /* TEXT */
              )
            ])
          ])) : (0, import_vue2.createCommentVNode)("v-if", true)
        ]),
        (0, import_vue2.createCommentVNode)(" \u5361\u7247\u5185\u5BB9 "),
        (0, import_vue2.createElementVNode)(
          "view",
          {
            class: "uni-card__content",
            style: (0, import_vue2.normalizeStyle)({ padding: $props.padding }),
            onClick: _cache[3] || (_cache[3] = ($event) => $options.onClick("content"))
          },
          [
            (0, import_vue2.renderSlot)(_ctx.$slots, "default")
          ],
          4
          /* STYLE */
        ),
        (0, import_vue2.createElementVNode)("view", {
          class: "uni-card__actions",
          onClick: _cache[4] || (_cache[4] = ($event) => $options.onClick("actions"))
        }, [
          (0, import_vue2.renderSlot)(_ctx.$slots, "actions")
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/workspace/HelloUniApp/uni_modules/uni-card/components/uni-card/uni-card.vue"]]);

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/extUI/number-box/number-box.js
  var import_vue4 = __toESM(require_vue());

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

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/extUI/number-box/number-box.js
  var _style_03 = { "uni-numbox": { "": { "flexDirection": "row" } }, "uni-numbox-btns": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "backgroundColor": "#f5f5f5" } }, "uni-numbox__value": { "": { "marginTop": 0, "marginRight": 2, "marginBottom": 0, "marginLeft": 2, "backgroundColor": "#f5f5f5", "width": 40, "height": 26, "textAlign": "center", "fontSize": 14, "borderLeftWidth": 0, "borderRightWidth": 0, "color": "#333333" } }, "uni-numbox__minus": { "": { "borderTopLeftRadius": 2, "borderBottomLeftRadius": 2 } }, "uni-numbox__plus": { "": { "borderTopRightRadius": 2, "borderBottomRightRadius": 2 } }, "uni-numbox--text": { "": { "lineHeight": 20, "fontSize": 20, "fontWeight": "300", "color": "#333333" } }, "uni-numbox--disabled": { ".uni-numbox ": { "!color": "#c0c0c0" } } };
  var _sfc_main$1 = {
    name: "UniNumberBox",
    emits: ["change", "input", "update:modelValue", "blur", "focus"],
    props: {
      value: {
        type: [Number, String],
        default: 1
      },
      modelValue: {
        type: [Number, String],
        default: 1
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: Number,
        default: 1
      },
      background: {
        type: String,
        default: "#f5f5f5"
      },
      color: {
        type: String,
        default: "#333"
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        inputValue: 0
      };
    },
    watch: {
      value(val) {
        this.inputValue = +val;
      },
      modelValue(val) {
        this.inputValue = +val;
      }
    },
    created() {
      if (this.value === 1) {
        this.inputValue = +this.modelValue;
      }
      if (this.modelValue === 1) {
        this.inputValue = +this.value;
      }
    },
    methods: {
      _calcValue(type) {
        if (this.disabled) {
          return;
        }
        const scale = this._getDecimalScale();
        let value = this.inputValue * scale;
        let step = this.step * scale;
        if (type === "minus") {
          value -= step;
          if (value < this.min * scale) {
            return;
          }
          if (value > this.max * scale) {
            value = this.max * scale;
          }
        }
        if (type === "plus") {
          value += step;
          if (value > this.max * scale) {
            return;
          }
          if (value < this.min * scale) {
            value = this.min * scale;
          }
        }
        this.inputValue = (value / scale).toFixed(String(scale).length - 1);
        this.$emit("change", +this.inputValue);
        this.$emit("input", +this.inputValue);
        this.$emit("update:modelValue", +this.inputValue);
      },
      _getDecimalScale() {
        let scale = 1;
        if (~~this.step !== this.step) {
          scale = Math.pow(10, String(this.step).split(".")[1].length);
        }
        return scale;
      },
      _onBlur(event) {
        this.$emit("blur", event);
        let value = event.detail.value;
        if (!value) {
          return;
        }
        value = +value;
        if (value > this.max) {
          value = this.max;
        } else if (value < this.min) {
          value = this.min;
        }
        const scale = this._getDecimalScale();
        this.inputValue = value.toFixed(String(scale).length - 1);
        this.$emit("change", +this.inputValue);
        this.$emit("input", +this.inputValue);
      },
      _onFocus(event) {
        this.$emit("focus", event);
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("view", {
      class: "uni-numbox",
      renderWhole: true
    }, [
      (0, import_vue4.createElementVNode)(
        "view",
        {
          onClick: _cache[0] || (_cache[0] = ($event) => $options._calcValue("minus")),
          class: "uni-numbox__minus uni-numbox-btns",
          style: (0, import_vue4.normalizeStyle)({ background: $props.background })
        },
        [
          (0, import_vue4.createElementVNode)(
            "u-text",
            {
              class: (0, import_vue4.normalizeClass)(["uni-numbox--text", { "uni-numbox--disabled": $data.inputValue <= $props.min || $props.disabled }]),
              style: (0, import_vue4.normalizeStyle)({ color: $props.color })
            },
            "-",
            6
            /* CLASS, STYLE */
          )
        ],
        4
        /* STYLE */
      ),
      (0, import_vue4.createElementVNode)("u-input", {
        disabled: $props.disabled,
        onFocus: _cache[1] || (_cache[1] = (...args) => $options._onFocus && $options._onFocus(...args)),
        onBlur: _cache[2] || (_cache[2] = (...args) => $options._onBlur && $options._onBlur(...args)),
        class: "uni-numbox__value",
        type: "number",
        modelValue: $data.inputValue,
        onInput: _cache[3] || (_cache[3] = ($event) => $data.inputValue = $event.detail.value),
        style: (0, import_vue4.normalizeStyle)({ background: $props.background, color: $props.color })
      }, null, 44, ["disabled", "modelValue"]),
      (0, import_vue4.createElementVNode)(
        "view",
        {
          onClick: _cache[4] || (_cache[4] = ($event) => $options._calcValue("plus")),
          class: "uni-numbox__plus uni-numbox-btns",
          style: (0, import_vue4.normalizeStyle)({ background: $props.background })
        },
        [
          (0, import_vue4.createElementVNode)(
            "u-text",
            {
              class: (0, import_vue4.normalizeClass)(["uni-numbox--text", { "uni-numbox--disabled": $data.inputValue >= $props.max || $props.disabled }]),
              style: (0, import_vue4.normalizeStyle)({ color: $props.color })
            },
            "+",
            6
            /* CLASS, STYLE */
          )
        ],
        4
        /* STYLE */
      )
    ]);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_03]], ["__file", "E:/workspace/HelloUniApp/uni_modules/uni-number-box/components/uni-number-box/uni-number-box.vue"]]);
  var _sfc_main3 = {
    components: {},
    data() {
      return {
        numberValue: 0,
        vModelValue: 3
      };
    },
    methods: {
      change(value) {
        this.numberValue = value;
      },
      changeValue(value) {
        formatAppLog("log", "at pages/extUI/number-box/number-box.nvue:43", "\u8FD4\u56DE\u6570\u503C\uFF1A", value);
      },
      blur(e) {
        formatAppLog("log", "at pages/extUI/number-box/number-box.nvue:46", "-------blur:", e);
      },
      focus(e) {
        formatAppLog("log", "at pages/extUI/number-box/number-box.nvue:49", "-------focus:", e);
      }
    }
  };
  function _sfc_render3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_card = resolveEasycom((0, import_vue4.resolveDynamicComponent)("uni-card"), __easycom_0);
    const _component_uni_number_box = resolveEasycom((0, import_vue4.resolveDynamicComponent)("uni-number-box"), __easycom_1);
    const _component_uni_section = resolveEasycom((0, import_vue4.resolveDynamicComponent)("uni-section"), __easycom_2);
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue4.createElementVNode)("view", { class: "container" }, [
        (0, import_vue4.createVNode)(_component_uni_card, {
          "is-shadow": false,
          "is-full": ""
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createElementVNode)("u-text", { class: "uni-h6" }, "\u6570\u5B57\u8F93\u5165\u6846\u7EC4\u4EF6\u591A\u7528\u4E8E\u8D2D\u7269\u8F66\u52A0\u51CF\u5546\u54C1\u7B49\u573A\u666F")
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue4.createVNode)(_component_uni_section, {
          title: "\u57FA\u672C\u7528\u6CD5",
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createVNode)(_component_uni_number_box, { onChange: $options.changeValue }, null, 8, ["onChange"])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue4.createVNode)(_component_uni_section, {
          title: "\u4F7F\u7528v-model : " + $data.vModelValue,
          subTitle: "\u4F7F\u7528 v-model \u663E\u793A\u9ED8\u8BA4\u503C",
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createVNode)(_component_uni_number_box, {
              modelValue: $data.vModelValue,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.vModelValue = $event),
              onBlur: $options.blur,
              onFocus: $options.focus,
              onChange: $options.changeValue
            }, null, 8, ["modelValue", "onBlur", "onFocus", "onChange"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["title"]),
        (0, import_vue4.createVNode)(_component_uni_section, {
          title: "\u8BBE\u7F6E\u6700\u5C0F\u503C\u548C\u6700\u5927\u503C",
          subTitle: "\u4F7F\u7528 min \\ max \u5C5E\u6027\u8BBE\u7F6E\u6700\u5927\u6700\u5C0F\u503C",
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createVNode)(_component_uni_number_box, {
              min: 2,
              max: 9,
              value: 555
            })
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue4.createVNode)(_component_uni_section, {
          title: "\u8BBE\u7F6E\u6B65\u957F\uFF08\u6B65\u957F0.1)",
          subTitle: "\u4F7F\u7528 step \u5C5E\u6027\u8BBE\u7F6E\u6B65\u957F",
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createVNode)(_component_uni_number_box, {
              value: 1.1,
              step: 0.1
            })
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue4.createVNode)(_component_uni_section, {
          title: "\u81EA\u5B9A\u4E49\u80CC\u666F",
          type: "line",
          subTitle: "\u4F7F\u7528 background \u5C5E\u6027\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u80CC\u666F\u8272",
          padding: ""
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createVNode)(_component_uni_number_box, {
              value: 50,
              background: "#2979FF",
              color: "#fff"
            })
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue4.createVNode)(_component_uni_section, {
          title: "\u7981\u7528\u72B6\u6001",
          subTitle: "\u4F7F\u7528 disabled \u5C5E\u6027\u8BBE\u7F6E\u7EC4\u4EF6\u7981\u7528",
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createVNode)(_component_uni_number_box, { disabled: true })
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue4.createVNode)(_component_uni_section, {
          title: "\u83B7\u53D6\u8F93\u5165\u7684\u503C : " + $data.numberValue,
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createVNode)(_component_uni_number_box, {
              value: $data.numberValue,
              onChange: $options.change
            }, null, 8, ["value", "onChange"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["title"])
      ])
    ]);
  }
  var numberBox = /* @__PURE__ */ _export_sfc(_sfc_main3, [["render", _sfc_render3], ["__file", "E:/workspace/HelloUniApp/pages/extUI/number-box/number-box.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/extUI/number-box/number-box";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    numberBox.mpType = "page";
    const app = Vue.createPageApp(numberBox, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...numberBox.styles || []]));
    app.mount("#root");
  }
})();
