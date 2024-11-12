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

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/component/input/input.js
  var import_vue = __toESM(require_vue());

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/component/input/input.js
  var _style_0 = { "nvue-page-root": { "": { "backgroundColor": "#F8F8F8", "paddingBottom": 20 } }, "page-title": { "": { "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "paddingTop": "35rpx", "paddingRight": "35rpx", "paddingBottom": "35rpx", "paddingLeft": "35rpx" } }, "page-title__wrapper": { "": { "paddingTop": 0, "paddingRight": 20, "paddingBottom": 0, "paddingLeft": 20, "borderBottomColor": "#D8D8D8", "borderBottomWidth": 1 } }, "page-title__text": { "": { "fontSize": 16, "height": 48, "lineHeight": 48, "color": "#BEBEBE" } }, "title": { "": { "paddingTop": 5, "paddingRight": 13, "paddingBottom": 5, "paddingLeft": 13 } }, "uni-form-item__title": { "": { "fontSize": 16, "lineHeight": 24 } }, "uni-input-wrapper": { "": { "paddingTop": 8, "paddingRight": 13, "paddingBottom": 8, "paddingLeft": 13, "flexDirection": "row", "flexWrap": "nowrap", "backgroundColor": "#FFFFFF" } }, "uni-input": { "": { "height": 28, "lineHeight": 28, "fontSize": 15, "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0, "flex": 1, "backgroundColor": "#FFFFFF" } }, "uni-icon": { "": { "fontFamily": "uniicons", "fontSize": 24, "fontWeight": "normal", "fontStyle": "normal", "width": 24, "height": 24, "lineHeight": 24, "color": "#999999" } }, "uni-eye-active": { "": { "color": "#007AFF" } } };
  var _sfc_main = {
    data() {
      return {
        title: "input",
        focus: false,
        inputValue: "",
        showClearIcon: false,
        inputClearValue: "",
        changeValue: "",
        showPassword: true,
        src: "../../../static/eye-1.png",
        platform: "",
        isNvue: false
      };
    },
    methods: {
      onKeyInput: function(event) {
        this.inputValue = event.detail.value;
      },
      replaceInput: function(event) {
        var value = event.detail.value;
        if (value === "11") {
          this.changeValue = "2";
        }
      },
      hideKeyboard: function(event) {
        if (event.detail.value === "123") {
          uni.hideKeyboard();
        }
      },
      clearInput: function(event) {
        this.inputClearValue = event.detail.value;
        if (event.detail.value.length > 0) {
          this.showClearIcon = true;
        } else {
          this.showClearIcon = false;
        }
      },
      clearIcon: function() {
        this.inputClearValue = "";
        this.showClearIcon = false;
      },
      changePassword: function() {
        this.showPassword = !this.showPassword;
      },
      onFocus() {
        this.$mp.page.$getAppWebview().setStyle({
          softinputNavBar: "none"
        });
      },
      onBlur() {
        this.$mp.page.$getAppWebview().setStyle({
          softinputNavBar: "auto"
        });
      }
    },
    onLoad() {
      this.platform = uni.getSystemInfoSync().platform;
      this.isNvue = true;
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue.createElementVNode)("view", { class: "nvue-page-root" }, [
        (0, import_vue.createElementVNode)("view", { class: "page-title" }, [
          (0, import_vue.createElementVNode)("view", { class: "page-title__wrapper" }, [
            (0, import_vue.createElementVNode)(
              "u-text",
              { class: "page-title__text" },
              (0, import_vue.toDisplayString)($data.title),
              1
              /* TEXT */
            )
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "uni-common-mt" }, [
          (0, import_vue.createElementVNode)("view", { class: "uni-form-item uni-column" }, [
            (0, import_vue.createElementVNode)("view", { class: "title" }, [
              (0, import_vue.createElementVNode)("u-text", { class: "uni-form-item__title" }, "\u53EF\u81EA\u52A8\u805A\u7126\u7684 input")
            ]),
            (0, import_vue.createElementVNode)("view", { class: "uni-input-wrapper" }, [
              (0, import_vue.createElementVNode)("u-input", {
                class: "uni-input",
                focus: "",
                placeholder: "\u81EA\u52A8\u83B7\u5F97\u7126\u70B9"
              })
            ])
          ]),
          $data.platform === "ios" && !$data.isNvue ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
            key: 0,
            class: "uni-form-item uni-column"
          }, [
            (0, import_vue.createElementVNode)("view", { class: "title" }, [
              (0, import_vue.createElementVNode)("u-text", { class: "uni-form-item__title" }, "\u9690\u85CF iOS \u8F6F\u952E\u76D8\u4E0A\u7684\u5BFC\u822A\u6761")
            ]),
            (0, import_vue.createElementVNode)("view", { class: "uni-input-wrapper" }, [
              (0, import_vue.createElementVNode)(
                "u-input",
                {
                  class: "uni-input",
                  placeholder: "\u89E6\u6478\u5176\u4ED6\u5730\u65B9\u6536\u8D77\u952E\u76D8",
                  onFocus: _cache[0] || (_cache[0] = (...args) => $options.onFocus && $options.onFocus(...args)),
                  onBlur: _cache[1] || (_cache[1] = (...args) => $options.onBlur && $options.onBlur(...args))
                },
                null,
                32
                /* NEED_HYDRATION */
              )
            ])
          ])) : (0, import_vue.createCommentVNode)("v-if", true),
          (0, import_vue.createElementVNode)("view", { class: "uni-form-item uni-column" }, [
            (0, import_vue.createElementVNode)("view", { class: "title" }, [
              (0, import_vue.createElementVNode)("u-text", { class: "uni-form-item__title" }, "\u952E\u76D8\u53F3\u4E0B\u89D2\u6309\u94AE\u663E\u793A\u4E3A\u641C\u7D22")
            ]),
            (0, import_vue.createElementVNode)("view", { class: "uni-input-wrapper" }, [
              (0, import_vue.createElementVNode)("u-input", {
                class: "uni-input",
                confirmType: "search",
                placeholder: "\u952E\u76D8\u53F3\u4E0B\u89D2\u6309\u94AE\u663E\u793A\u4E3A\u641C\u7D22"
              })
            ])
          ]),
          (0, import_vue.createElementVNode)("view", { class: "uni-form-item uni-column" }, [
            (0, import_vue.createElementVNode)("view", { class: "title" }, [
              (0, import_vue.createElementVNode)("u-text", { class: "uni-form-item__title" }, "\u952E\u76D8\u53F3\u4E0B\u89D2\u6309\u94AE\u663E\u793A\u4E3A\u53D1\u9001")
            ]),
            (0, import_vue.createElementVNode)("view", { class: "uni-input-wrapper" }, [
              (0, import_vue.createElementVNode)("u-input", {
                class: "uni-input",
                confirmType: "send",
                placeholder: "\u952E\u76D8\u53F3\u4E0B\u89D2\u6309\u94AE\u663E\u793A\u4E3A\u53D1\u9001"
              })
            ])
          ]),
          (0, import_vue.createElementVNode)("view", { class: "uni-form-item uni-column" }, [
            (0, import_vue.createElementVNode)("view", { class: "title" }, [
              (0, import_vue.createElementVNode)("u-text", { class: "uni-form-item__title" }, "\u63A7\u5236\u6700\u5927\u8F93\u5165\u957F\u5EA6\u7684 input")
            ]),
            (0, import_vue.createElementVNode)("view", { class: "uni-input-wrapper" }, [
              (0, import_vue.createElementVNode)("u-input", {
                class: "uni-input",
                maxlength: "10",
                placeholder: "\u6700\u5927\u8F93\u5165\u957F\u5EA6\u4E3A10"
              })
            ])
          ]),
          (0, import_vue.createElementVNode)("view", { class: "uni-form-item uni-column" }, [
            (0, import_vue.createElementVNode)("view", { class: "title" }, [
              (0, import_vue.createElementVNode)(
                "u-text",
                { class: "uni-form-item__title" },
                "\u5B9E\u65F6\u83B7\u53D6\u8F93\u5165\u503C\uFF1A" + (0, import_vue.toDisplayString)($data.inputValue),
                1
                /* TEXT */
              )
            ]),
            (0, import_vue.createElementVNode)("view", { class: "uni-input-wrapper" }, [
              (0, import_vue.createElementVNode)(
                "u-input",
                {
                  class: "uni-input",
                  onInput: _cache[2] || (_cache[2] = (...args) => $options.onKeyInput && $options.onKeyInput(...args)),
                  placeholder: "\u8F93\u5165\u540C\u6B65\u5230view\u4E2D"
                },
                null,
                32
                /* NEED_HYDRATION */
              )
            ])
          ]),
          (0, import_vue.createElementVNode)("view", { class: "uni-form-item uni-column" }, [
            (0, import_vue.createElementVNode)("view", { class: "title" }, [
              (0, import_vue.createElementVNode)("u-text", { class: "uni-form-item__title" }, "\u63A7\u5236\u8F93\u5165\u7684 input")
            ]),
            (0, import_vue.createElementVNode)("view", { class: "uni-input-wrapper" }, [
              (0, import_vue.createElementVNode)("u-input", {
                class: "uni-input",
                onInput: [
                  _cache[3] || (_cache[3] = (...args) => $options.replaceInput && $options.replaceInput(...args)),
                  _cache[4] || (_cache[4] = ($event) => $data.changeValue = $event.detail.value)
                ],
                modelValue: $data.changeValue,
                placeholder: "\u8FDE\u7EED\u7684\u4E24\u4E2A1\u4F1A\u53D8\u62102"
              }, null, 40, ["modelValue"])
            ])
          ]),
          (0, import_vue.createElementVNode)("view", { class: "uni-form-item uni-column" }, [
            (0, import_vue.createElementVNode)("view", { class: "title" }, [
              (0, import_vue.createElementVNode)("u-text", { class: "uni-form-item__title" }, "\u63A7\u5236\u952E\u76D8\u7684 input")
            ]),
            (0, import_vue.createElementVNode)("view", { class: "uni-input-wrapper" }, [
              (0, import_vue.createElementVNode)(
                "u-input",
                {
                  class: "uni-input",
                  ref: "input1",
                  onInput: _cache[5] || (_cache[5] = (...args) => $options.hideKeyboard && $options.hideKeyboard(...args)),
                  placeholder: "\u8F93\u5165123\u81EA\u52A8\u6536\u8D77\u952E\u76D8"
                },
                null,
                544
                /* NEED_HYDRATION, NEED_PATCH */
              )
            ])
          ]),
          (0, import_vue.createElementVNode)("view", { class: "uni-form-item uni-column" }, [
            (0, import_vue.createElementVNode)("view", { class: "title" }, [
              (0, import_vue.createElementVNode)("u-text", { class: "uni-form-item__title" }, "\u6570\u5B57\u8F93\u5165\u7684 input")
            ]),
            (0, import_vue.createElementVNode)("view", { class: "uni-input-wrapper" }, [
              (0, import_vue.createElementVNode)("u-input", {
                class: "uni-input",
                type: "number",
                placeholder: "\u8FD9\u662F\u4E00\u4E2A\u6570\u5B57\u8F93\u5165\u6846"
              })
            ])
          ]),
          (0, import_vue.createElementVNode)("view", { class: "uni-form-item uni-column" }, [
            (0, import_vue.createElementVNode)("view", { class: "title" }, [
              (0, import_vue.createElementVNode)("u-text", { class: "uni-form-item__title" }, "\u5BC6\u7801\u8F93\u5165\u7684 input")
            ]),
            (0, import_vue.createElementVNode)("view", { class: "uni-input-wrapper" }, [
              (0, import_vue.createElementVNode)("u-input", {
                class: "uni-input",
                password: "",
                type: "text",
                placeholder: "\u8FD9\u662F\u4E00\u4E2A\u5BC6\u7801\u8F93\u5165\u6846"
              })
            ])
          ]),
          (0, import_vue.createElementVNode)("view", { class: "uni-form-item uni-column" }, [
            (0, import_vue.createElementVNode)("view", { class: "title" }, [
              (0, import_vue.createElementVNode)("u-text", { class: "uni-form-item__title" }, "\u5E26\u5C0F\u6570\u70B9\u7684 input")
            ]),
            (0, import_vue.createElementVNode)("view", { class: "uni-input-wrapper" }, [
              (0, import_vue.createElementVNode)("u-input", {
                class: "uni-input",
                type: "digit",
                placeholder: "\u5E26\u5C0F\u6570\u70B9\u7684\u6570\u5B57\u952E\u76D8"
              })
            ])
          ]),
          (0, import_vue.createElementVNode)("view", { class: "uni-form-item uni-column" }, [
            (0, import_vue.createElementVNode)("view", { class: "title" }, [
              (0, import_vue.createElementVNode)("u-text", { class: "uni-form-item__title" }, "\u8EAB\u4EFD\u8BC1\u8F93\u5165\u7684 input")
            ]),
            (0, import_vue.createElementVNode)("view", { class: "uni-input-wrapper" }, [
              (0, import_vue.createElementVNode)("u-input", {
                class: "uni-input",
                type: "idcard",
                placeholder: "\u8EAB\u4EFD\u8BC1\u8F93\u5165\u952E\u76D8"
              })
            ])
          ]),
          (0, import_vue.createElementVNode)("view", { class: "uni-form-item uni-column" }, [
            (0, import_vue.createElementVNode)("view", { class: "title" }, [
              (0, import_vue.createElementVNode)("u-text", { class: "uni-form-item__title" }, "\u63A7\u5236\u5360\u4F4D\u7B26\u989C\u8272\u7684 input")
            ]),
            (0, import_vue.createElementVNode)("view", { class: "uni-input-wrapper" }, [
              (0, import_vue.createElementVNode)("u-input", {
                class: "uni-input",
                placeholderStyle: "color:#F76260",
                placeholder: "\u5360\u4F4D\u7B26\u5B57\u4F53\u662F\u7EA2\u8272\u7684"
              })
            ])
          ]),
          (0, import_vue.createElementVNode)("view", { class: "uni-form-item uni-column" }, [
            (0, import_vue.createElementVNode)("view", { class: "title" }, [
              (0, import_vue.createElementVNode)("u-text", { class: "uni-form-item__title" }, "\u5E26\u6E05\u9664\u6309\u94AE\u7684\u8F93\u5165\u6846")
            ]),
            (0, import_vue.createElementVNode)("view", { class: "uni-input-wrapper" }, [
              (0, import_vue.createElementVNode)("u-input", {
                class: "uni-input",
                placeholder: "\u5E26\u6E05\u9664\u6309\u94AE\u7684\u8F93\u5165\u6846",
                value: $data.inputClearValue,
                onInput: _cache[6] || (_cache[6] = (...args) => $options.clearInput && $options.clearInput(...args))
              }, null, 40, ["value"]),
              $data.showClearIcon ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-text", {
                key: 0,
                class: "uni-icon",
                onClick: _cache[7] || (_cache[7] = (...args) => $options.clearIcon && $options.clearIcon(...args))
              }, "\uE434")) : (0, import_vue.createCommentVNode)("v-if", true)
            ])
          ]),
          (0, import_vue.createElementVNode)("view", { class: "uni-form-item uni-column" }, [
            (0, import_vue.createElementVNode)("view", { class: "title" }, [
              (0, import_vue.createElementVNode)("u-text", { class: "uni-form-item__title" }, "\u53EF\u67E5\u770B\u5BC6\u7801\u7684\u8F93\u5165\u6846")
            ]),
            (0, import_vue.createElementVNode)("view", { class: "uni-input-wrapper" }, [
              (0, import_vue.createElementVNode)("u-input", {
                class: "uni-input",
                placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
                password: $data.showPassword
              }, null, 8, ["password"]),
              (0, import_vue.createElementVNode)(
                "u-text",
                {
                  class: (0, import_vue.normalizeClass)(["uni-icon", [!$data.showPassword ? "uni-eye-active" : ""]]),
                  onClick: _cache[8] || (_cache[8] = (...args) => $options.changePassword && $options.changePassword(...args))
                },
                "\uE568",
                2
                /* CLASS */
              )
            ])
          ])
        ])
      ])
    ]);
  }
  var input = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/workspace/HelloUniApp/pages/component/input/input.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/component/input/input";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    input.mpType = "page";
    const app = Vue.createPageApp(input, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...input.styles || []]));
    app.mount("#root");
  }
})();
