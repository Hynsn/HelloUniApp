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

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/extUI/countdown/countdown.js
  var import_vue4 = __toESM(require_vue());

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/uni-app.es.js
  var import_vue2 = __toESM(require_vue());
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }

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
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
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
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
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

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/extUI/countdown/countdown.js
  var en = {
    "uni-countdown.day": "day",
    "uni-countdown.h": "h",
    "uni-countdown.m": "m",
    "uni-countdown.s": "s"
  };
  var zhHans = {
    "uni-countdown.day": "\u5929",
    "uni-countdown.h": "\u65F6",
    "uni-countdown.m": "\u5206",
    "uni-countdown.s": "\u79D2"
  };
  var zhHant = {
    "uni-countdown.day": "\u5929",
    "uni-countdown.h": "\u6642",
    "uni-countdown.m": "\u5206",
    "uni-countdown.s": "\u79D2"
  };
  var messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  var _style_03 = { "uni-countdown": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "flex-start", "alignItems": "center" } }, "uni-countdown__splitor": { "": { "marginTop": 0, "marginRight": 2, "marginBottom": 0, "marginLeft": 2, "fontSize": 14, "color": "#333333" } }, "uni-countdown__number": { "": { "borderRadius": 3, "textAlign": "center", "fontSize": 14 } } };
  var {
    t
  } = initVueI18n(messages);
  var _sfc_main$1 = {
    name: "UniCountdown",
    emits: ["timeup"],
    props: {
      showDay: {
        type: Boolean,
        default: true
      },
      showColon: {
        type: Boolean,
        default: true
      },
      start: {
        type: Boolean,
        default: true
      },
      backgroundColor: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333"
      },
      fontSize: {
        type: Number,
        default: 14
      },
      splitorColor: {
        type: String,
        default: "#333"
      },
      day: {
        type: Number,
        default: 0
      },
      hour: {
        type: Number,
        default: 0
      },
      minute: {
        type: Number,
        default: 0
      },
      second: {
        type: Number,
        default: 0
      },
      timestamp: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        timer: null,
        syncFlag: false,
        d: "00",
        h: "00",
        i: "00",
        s: "00",
        leftTime: 0,
        seconds: 0
      };
    },
    computed: {
      dayText() {
        return t("uni-countdown.day");
      },
      hourText(val) {
        return t("uni-countdown.h");
      },
      minuteText(val) {
        return t("uni-countdown.m");
      },
      secondText(val) {
        return t("uni-countdown.s");
      },
      timeStyle() {
        const {
          color,
          backgroundColor,
          fontSize
        } = this;
        return {
          color,
          backgroundColor,
          fontSize: `${fontSize}px`,
          width: `${fontSize * 22 / 14}px`,
          // 按字体大小为 14px 时的比例缩放
          lineHeight: `${fontSize * 20 / 14}px`,
          borderRadius: `${fontSize * 3 / 14}px`
        };
      },
      splitorStyle() {
        const { splitorColor, fontSize, backgroundColor } = this;
        return {
          color: splitorColor,
          fontSize: `${fontSize * 12 / 14}px`,
          margin: backgroundColor ? `${fontSize * 4 / 14}px` : ""
        };
      }
    },
    watch: {
      day(val) {
        this.changeFlag();
      },
      hour(val) {
        this.changeFlag();
      },
      minute(val) {
        this.changeFlag();
      },
      second(val) {
        this.changeFlag();
      },
      start: {
        immediate: true,
        handler(newVal, oldVal) {
          if (newVal) {
            this.startData();
          } else {
            if (!oldVal)
              return;
            clearInterval(this.timer);
          }
        }
      }
    },
    created: function(e) {
      this.seconds = this.toSeconds(this.timestamp, this.day, this.hour, this.minute, this.second);
      this.countDown();
    },
    unmounted() {
      clearInterval(this.timer);
    },
    methods: {
      toSeconds(timestamp, day, hours, minutes, seconds) {
        if (timestamp) {
          return timestamp - parseInt((/* @__PURE__ */ new Date()).getTime() / 1e3, 10);
        }
        return day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;
      },
      timeUp() {
        clearInterval(this.timer);
        this.$emit("timeup");
      },
      countDown() {
        let seconds = this.seconds;
        let [day, hour, minute, second] = [0, 0, 0, 0];
        if (seconds > 0) {
          day = Math.floor(seconds / (60 * 60 * 24));
          hour = Math.floor(seconds / (60 * 60)) - day * 24;
          minute = Math.floor(seconds / 60) - day * 24 * 60 - hour * 60;
          second = Math.floor(seconds) - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60;
        } else {
          this.timeUp();
        }
        if (day < 10) {
          day = "0" + day;
        }
        if (hour < 10) {
          hour = "0" + hour;
        }
        if (minute < 10) {
          minute = "0" + minute;
        }
        if (second < 10) {
          second = "0" + second;
        }
        this.d = day;
        this.h = hour;
        this.i = minute;
        this.s = second;
      },
      startData() {
        this.seconds = this.toSeconds(this.timestamp, this.day, this.hour, this.minute, this.second);
        if (this.seconds <= 0) {
          this.seconds = this.toSeconds(0, 0, 0, 0, 0);
          this.countDown();
          return;
        }
        clearInterval(this.timer);
        this.countDown();
        this.timer = setInterval(() => {
          this.seconds--;
          if (this.seconds < 0) {
            this.timeUp();
            return;
          }
          this.countDown();
        }, 1e3);
      },
      update() {
        this.startData();
      },
      changeFlag() {
        if (!this.syncFlag) {
          this.seconds = this.toSeconds(this.timestamp, this.day, this.hour, this.minute, this.second);
          this.startData();
          this.syncFlag = true;
        }
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("view", {
      class: "uni-countdown",
      renderWhole: true
    }, [
      $props.showDay ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
        "u-text",
        {
          key: 0,
          style: (0, import_vue4.normalizeStyle)([$options.timeStyle]),
          class: "uni-countdown__number"
        },
        (0, import_vue4.toDisplayString)($data.d),
        5
        /* TEXT, STYLE */
      )) : (0, import_vue4.createCommentVNode)("v-if", true),
      $props.showDay ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
        "u-text",
        {
          key: 1,
          style: (0, import_vue4.normalizeStyle)([$options.splitorStyle]),
          class: "uni-countdown__splitor"
        },
        (0, import_vue4.toDisplayString)($options.dayText),
        5
        /* TEXT, STYLE */
      )) : (0, import_vue4.createCommentVNode)("v-if", true),
      (0, import_vue4.createElementVNode)(
        "u-text",
        {
          style: (0, import_vue4.normalizeStyle)([$options.timeStyle]),
          class: "uni-countdown__number"
        },
        (0, import_vue4.toDisplayString)($data.h),
        5
        /* TEXT, STYLE */
      ),
      (0, import_vue4.createElementVNode)(
        "u-text",
        {
          style: (0, import_vue4.normalizeStyle)([$options.splitorStyle]),
          class: "uni-countdown__splitor"
        },
        (0, import_vue4.toDisplayString)($props.showColon ? ":" : $options.hourText),
        5
        /* TEXT, STYLE */
      ),
      (0, import_vue4.createElementVNode)(
        "u-text",
        {
          style: (0, import_vue4.normalizeStyle)([$options.timeStyle]),
          class: "uni-countdown__number"
        },
        (0, import_vue4.toDisplayString)($data.i),
        5
        /* TEXT, STYLE */
      ),
      (0, import_vue4.createElementVNode)(
        "u-text",
        {
          style: (0, import_vue4.normalizeStyle)([$options.splitorStyle]),
          class: "uni-countdown__splitor"
        },
        (0, import_vue4.toDisplayString)($props.showColon ? ":" : $options.minuteText),
        5
        /* TEXT, STYLE */
      ),
      (0, import_vue4.createElementVNode)(
        "u-text",
        {
          style: (0, import_vue4.normalizeStyle)([$options.timeStyle]),
          class: "uni-countdown__number"
        },
        (0, import_vue4.toDisplayString)($data.s),
        5
        /* TEXT, STYLE */
      ),
      !$props.showColon ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
        "u-text",
        {
          key: 2,
          style: (0, import_vue4.normalizeStyle)([$options.splitorStyle]),
          class: "uni-countdown__splitor"
        },
        (0, import_vue4.toDisplayString)($options.secondText),
        5
        /* TEXT, STYLE */
      )) : (0, import_vue4.createCommentVNode)("v-if", true)
    ]);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_03]], ["__file", "E:/workspace/HelloUniApp/uni_modules/uni-countdown/components/uni-countdown/uni-countdown.vue"]]);
  var _sfc_main3 = {
    components: {},
    data() {
      return {
        testHour: 1,
        testMinute: 0,
        testSecond: 0,
        start: false,
        timeupSecond: 10
      };
    },
    mounted() {
      setTimeout(() => {
        this.testHour = 1;
        this.testMinute = 1;
        this.testSecond = 0;
        this.start = true;
      }, 3e3);
      setTimeout(() => {
        this.start = false;
      }, 1e4);
    },
    methods: {
      timeup() {
        uni.showToast({
          title: "\u65F6\u95F4\u5230"
        });
        this.timeupSecond = 29;
      }
    }
  };
  function _sfc_render3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_card = resolveEasycom((0, import_vue4.resolveDynamicComponent)("uni-card"), __easycom_0);
    const _component_uni_countdown = resolveEasycom((0, import_vue4.resolveDynamicComponent)("uni-countdown"), __easycom_1);
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
            (0, import_vue4.createElementVNode)("u-text", { class: "uni-h6" }, "\u5012\u8BA1\u65F6\u7EC4\u4EF6\u4E3B\u8981\u7528\u4E8E\u4FC3\u9500\u5546\u54C1\u5269\u4F59\u65F6\u95F4\uFF0C\u53D1\u9001\u77ED\u4FE1\u9A8C\u8BC1\u7B49\u5F85\u65F6\u95F4\u7B49\u573A\u666F")
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue4.createVNode)(_component_uni_section, {
          title: "\u4E00\u822C\u7528\u6CD5",
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createVNode)(_component_uni_countdown, {
              day: 1,
              hour: 1,
              minute: 12,
              second: 40
            })
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue4.createVNode)(_component_uni_section, {
          title: "\u4E0D\u663E\u793A\u5929\u6570",
          subTitle: "\u8BBE\u7F6E show-day = false \u4E0D\u663E\u793A\u5929",
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createVNode)(_component_uni_countdown, {
              "show-day": false,
              hour: 12,
              minute: 12,
              second: 12
            })
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue4.createVNode)(_component_uni_section, {
          title: "\u6587\u5B57\u5206\u9694\u7B26",
          subTitle: "\u8BBE\u7F6E show-colon \u5C5E\u6027\u8BBE\u7F6E\u5206\u9694\u7B26\u6837\u5F0F",
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createVNode)(_component_uni_countdown, {
              minute: 30,
              second: 0,
              "show-colon": false
            })
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue4.createVNode)(_component_uni_section, {
          title: "\u4FEE\u6539\u989C\u8272",
          subTitle: "\u8BBE\u7F6E color \\ background \u5C5E\u6027\u8BBE\u7F6E\u7EC4\u4EF6\u989C\u8272",
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createVNode)(_component_uni_countdown, {
              day: 1,
              hour: 2,
              minute: 30,
              second: 0,
              color: "#FFFFFF",
              "background-color": "#007AFF"
            })
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue4.createVNode)(_component_uni_section, {
          title: "\u4FEE\u6539\u5B57\u4F53\u5927\u5C0F",
          subTitle: "\u8BBE\u7F6E font-size \u5C5E\u6027\u8BBE\u7F6E\u7EC4\u4EF6\u5927\u5C0F",
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createVNode)(_component_uni_countdown, {
              "font-size": 30,
              day: 1,
              hour: 2,
              minute: 30,
              second: 0
            })
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue4.createVNode)(_component_uni_section, {
          title: "\u4FEE\u6539\u989C\u8272 + \u5B57\u4F53\u5927\u5C0F",
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createVNode)(_component_uni_countdown, {
              "font-size": 30,
              day: 1,
              hour: 2,
              minute: 30,
              second: 0,
              color: "#FFFFFF",
              "background-color": "#007AFF"
            })
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue4.createVNode)(_component_uni_section, {
          title: "\u81EA\u7531\u63A7\u5236\u5F00\u59CB/\u6682\u505C",
          subTitle: "\u8BBE\u7F6E start \u5C5E\u6027\u63A7\u5236\u662F\u5426\u81EA\u52A8\u5F00\u542F",
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createVNode)(_component_uni_countdown, {
              start: $data.start,
              day: 1,
              hour: 1,
              minute: 12,
              second: 40
            }, null, 8, ["start"])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue4.createVNode)(_component_uni_section, {
          title: "\u5012\u8BA1\u65F6\u56DE\u8C03\u4E8B\u4EF6",
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createVNode)(_component_uni_countdown, {
              "show-day": false,
              second: $data.timeupSecond,
              onTimeup: $options.timeup
            }, null, 8, ["second", "onTimeup"])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue4.createVNode)(_component_uni_section, {
          title: "\u52A8\u6001\u8D4B\u503C",
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createVNode)(_component_uni_countdown, {
              "show-day": false,
              hour: $data.testHour,
              minute: $data.testMinute,
              second: $data.testSecond
            }, null, 8, ["hour", "minute", "second"])
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]);
  }
  var countdown = /* @__PURE__ */ _export_sfc(_sfc_main3, [["render", _sfc_render3], ["__file", "E:/workspace/HelloUniApp/pages/extUI/countdown/countdown.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/extUI/countdown/countdown";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    countdown.mpType = "page";
    const app = Vue.createPageApp(countdown, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...countdown.styles || []]));
    app.mount("#root");
  }
})();
