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

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/extUI/grid/grid.js
  var import_vue6 = __toESM(require_vue());

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/uni-app.es.js
  var import_vue2 = __toESM(require_vue());
  function requireNativePlugin(name) {
    return weex.requireModule(name);
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/uni-icons.js
  var import_vue3 = __toESM(require_vue());
  var icons = {
    "id": "2852637",
    "name": "uniui\u56FE\u6807\u5E93",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  var iconUrl = "/assets/uniicons.89ed7d6d.ttf";
  var _style_02 = { "uni-icons": { "": { "fontFamily": "uniicons", "textDecoration": "none", "textAlign": "center" } } };
  var getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  var domModule = weex.requireModule("dom");
  domModule.addRule("fontFace", {
    "fontFamily": "uniicons",
    "src": "url('" + iconUrl + "')"
  });
  var _sfc_main2 = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
      "u-text",
      {
        style: (0, import_vue3.normalizeStyle)({ color: $props.color, "font-size": $options.iconSize }),
        class: "uni-icons",
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      (0, import_vue3.toDisplayString)($options.unicode),
      5
      /* TEXT, STYLE */
    );
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "E:/workspace/HelloUniApp/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/uni-section.js
  var import_vue4 = __toESM(require_vue());
  var _style_03 = { "uni-section": { "": { "backgroundColor": "#ffffff" } }, "uni-section-header": { ".uni-section ": { "position": "relative", "flexDirection": "row", "alignItems": "center", "paddingTop": 12, "paddingRight": 10, "paddingBottom": 12, "paddingLeft": 10, "fontWeight": "normal" } }, "uni-section-header__decoration": { ".uni-section ": { "marginRight": 6, "backgroundColor": "#2979ff" }, ".uni-section .line": { "width": 4, "height": 12, "borderRadius": 10 }, ".uni-section .circle": { "width": 8, "height": 8, "borderTopRightRadius": 50, "borderTopLeftRadius": 50, "borderBottomLeftRadius": 50, "borderBottomRightRadius": 50 }, ".uni-section .square": { "width": 8, "height": 8 } }, "uni-section-header__content": { ".uni-section ": { "flexDirection": "column", "flex": 1, "color": "#333333" } }, "distraction": { ".uni-section .uni-section-header__content ": { "flexDirection": "row", "alignItems": "center" } }, "uni-section-header__content-sub": { ".uni-section ": { "marginTop": 2 } }, "uni-section-header__slot-right": { ".uni-section ": { "fontSize": 14 } }, "uni-section-content": { ".uni-section ": { "fontSize": 14 } } };
  var _sfc_main3 = {
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
  function _sfc_render3(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("view", {
      class: "uni-section",
      renderWhole: true
    }, [
      (0, import_vue4.createElementVNode)("view", {
        class: "uni-section-header",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
      }, [
        $props.type ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
          "view",
          {
            key: 0,
            class: (0, import_vue4.normalizeClass)(["uni-section-header__decoration", $props.type])
          },
          null,
          2
          /* CLASS */
        )) : (0, import_vue4.renderSlot)(_ctx.$slots, "decoration", { key: 1 }),
        (0, import_vue4.createElementVNode)("view", { class: "uni-section-header__content" }, [
          (0, import_vue4.createElementVNode)(
            "u-text",
            {
              style: (0, import_vue4.normalizeStyle)({ "font-size": $props.titleFontSize, "color": $props.titleColor }),
              class: (0, import_vue4.normalizeClass)(["uni-section__content-title", { "distraction": !$props.subTitle }])
            },
            (0, import_vue4.toDisplayString)($props.title),
            7
            /* TEXT, CLASS, STYLE */
          ),
          $props.subTitle ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
            "u-text",
            {
              key: 0,
              style: (0, import_vue4.normalizeStyle)({ "font-size": $props.subTitleFontSize, "color": $props.subTitleColor }),
              class: "uni-section-header__content-sub"
            },
            (0, import_vue4.toDisplayString)($props.subTitle),
            5
            /* TEXT, STYLE */
          )) : (0, import_vue4.createCommentVNode)("v-if", true)
        ]),
        (0, import_vue4.createElementVNode)("view", { class: "uni-section-header__slot-right" }, [
          (0, import_vue4.renderSlot)(_ctx.$slots, "right")
        ])
      ]),
      (0, import_vue4.createElementVNode)(
        "view",
        {
          class: "uni-section-content",
          style: (0, import_vue4.normalizeStyle)({ padding: $options._padding })
        },
        [
          (0, import_vue4.renderSlot)(_ctx.$slots, "default")
        ],
        4
        /* STYLE */
      )
    ]);
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main3, [["render", _sfc_render3], ["styles", [_style_03]], ["__file", "E:/workspace/HelloUniApp/uni_modules/uni-section/components/uni-section/uni-section.vue"]]);

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/uni-badge.js
  var import_vue5 = __toESM(require_vue());
  var _style_04 = { "uni-badge--x": { "": { "position": "relative" } }, "uni-badge--absolute": { "": { "position": "absolute" } }, "uni-badge--small": { "": { "transform": "scale(0.8)", "transformOrigin": "center center" } }, "uni-badge": { "": { "justifyContent": "center", "flexDirection": "row", "height": 20, "minWidth": "20px", "paddingTop": 0, "paddingRight": 4, "paddingBottom": 0, "paddingLeft": 4, "lineHeight": 18, "color": "#ffffff", "borderRadius": 100, "backgroundColor": "rgba(0,0,0,0)", "borderWidth": 1, "borderStyle": "solid", "borderColor": "#ffffff", "textAlign": "center", "fontFamily": '"Helvetica Neue", Helvetica, sans-serif', "fontFeatureSettings": '"tnum"', "fontSize": 12 } }, "uni-badge--info": { "": { "color": "#ffffff", "backgroundColor": "#909399" } }, "uni-badge--primary": { "": { "backgroundColor": "#2979ff" } }, "uni-badge--success": { "": { "backgroundColor": "#4cd964" } }, "uni-badge--warning": { "": { "backgroundColor": "#f0ad4e" } }, "uni-badge--error": { "": { "backgroundColor": "#dd524d" } }, "uni-badge--inverted": { "": { "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 0, "color": "#909399" } }, "uni-badge--info-inverted": { "": { "color": "#909399", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--primary-inverted": { "": { "color": "#2979ff", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--success-inverted": { "": { "color": "#4cd964", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--warning-inverted": { "": { "color": "#f0ad4e", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--error-inverted": { "": { "color": "#dd524d", "backgroundColor": "rgba(0,0,0,0)" } } };
  var _sfc_main4 = {
    name: "UniBadge",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: "error"
      },
      inverted: {
        type: Boolean,
        default: false
      },
      isDot: {
        type: Boolean,
        default: false
      },
      maxNum: {
        type: Number,
        default: 99
      },
      absolute: {
        type: String,
        default: ""
      },
      offset: {
        type: Array,
        default() {
          return [0, 0];
        }
      },
      text: {
        type: [String, Number],
        default: ""
      },
      size: {
        type: String,
        default: "small"
      },
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {};
    },
    computed: {
      width() {
        return String(this.text).length * 8 + 12;
      },
      classNames() {
        const {
          inverted,
          type,
          size,
          absolute
        } = this;
        return [
          inverted ? "uni-badge--" + type + "-inverted" : "",
          "uni-badge--" + type,
          "uni-badge--" + size,
          absolute ? "uni-badge--absolute" : ""
        ].join(" ");
      },
      positionStyle() {
        if (!this.absolute)
          return {};
        let w = this.width / 2, h = 10;
        if (this.isDot) {
          w = 5;
          h = 5;
        }
        const x = `${-w + this.offset[0]}px`;
        const y = `${-h + this.offset[1]}px`;
        const whiteList = {
          rightTop: {
            right: x,
            top: y
          },
          rightBottom: {
            right: x,
            bottom: y
          },
          leftBottom: {
            left: x,
            bottom: y
          },
          leftTop: {
            left: x,
            top: y
          }
        };
        const match = whiteList[this.absolute];
        return match ? match : whiteList["rightTop"];
      },
      dotStyle() {
        if (!this.isDot)
          return {};
        return {
          width: "10px",
          minWidth: "0",
          height: "10px",
          padding: "0",
          borderRadius: "10px"
        };
      },
      displayValue() {
        const {
          isDot,
          text,
          maxNum
        } = this;
        return isDot ? "" : Number(text) > maxNum ? `${maxNum}+` : text;
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render4(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("view", {
      class: "uni-badge--x",
      renderWhole: true
    }, [
      (0, import_vue5.renderSlot)(_ctx.$slots, "default"),
      $props.text ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
        "u-text",
        {
          key: 0,
          class: (0, import_vue5.normalizeClass)([$options.classNames, "uni-badge"]),
          style: (0, import_vue5.normalizeStyle)([$options.positionStyle, $props.customStyle, $options.dotStyle]),
          onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick())
        },
        (0, import_vue5.toDisplayString)($options.displayValue),
        7
        /* TEXT, CLASS, STYLE */
      )) : (0, import_vue5.createCommentVNode)("v-if", true)
    ]);
  }
  var __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main4, [["render", _sfc_render4], ["styles", [_style_04]], ["__file", "E:/workspace/HelloUniApp/uni_modules/uni-badge/components/uni-badge/uni-badge.vue"]]);

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/extUI/grid/grid.js
  var _style_0$2 = { "uni-grid-item__box": { "": { "position": "relative", "flex": 1, "flexDirection": "column" } }, "uni-grid-item--border": { "": { "position": "relative", "borderBottomColor": "#D2D2D2", "borderBottomStyle": "solid", "borderBottomWidth": 0.5, "borderRightColor": "#D2D2D2", "borderRightStyle": "solid", "borderRightWidth": 0.5 } }, "uni-grid-item--border-top": { "": { "position": "relative", "borderTopColor": "#D2D2D2", "borderTopStyle": "solid", "borderTopWidth": 0.5 } }, "uni-highlight": { "": { "backgroundColor:active": "#f1f1f1" } } };
  var _sfc_main$2 = {
    name: "UniGridItem",
    inject: ["grid"],
    props: {
      index: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        column: 0,
        showBorder: true,
        square: true,
        highlight: true,
        left: 0,
        top: 0,
        openNum: 2,
        width: 0,
        borderColor: "#e5e5e5"
      };
    },
    created() {
      this.column = this.grid.column;
      this.showBorder = this.grid.showBorder;
      this.square = this.grid.square;
      this.highlight = this.grid.highlight;
      this.top = this.hor === 0 ? this.grid.hor : this.hor;
      this.left = this.ver === 0 ? this.grid.ver : this.ver;
      this.borderColor = this.grid.borderColor;
      this.grid.children.push(this);
      this.width = this.grid.width;
    },
    beforeDestroy() {
      this.grid.children.forEach((item, index) => {
        if (item === this) {
          this.grid.children.splice(index, 1);
        }
      });
    },
    methods: {
      _onClick() {
        this.grid.change({
          detail: {
            index: this.index
          }
        });
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.width ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
      "view",
      {
        key: 0,
        style: (0, import_vue6.normalizeStyle)("width:" + $data.width + ";" + ($data.square ? "height:" + $data.width : "")),
        class: "uni-grid-item",
        renderWhole: true
      },
      [
        (0, import_vue6.createElementVNode)(
          "view",
          {
            class: (0, import_vue6.normalizeClass)([{ "uni-grid-item--border": $data.showBorder, "uni-grid-item--border-top": $data.showBorder && $props.index < $data.column, "uni-highlight": $data.highlight }, "uni-grid-item__box"]),
            style: (0, import_vue6.normalizeStyle)({ "border-right-color": $data.borderColor, "border-bottom-color": $data.borderColor, "border-top-color": $data.borderColor }),
            onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
          },
          [
            (0, import_vue6.renderSlot)(_ctx.$slots, "default")
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      4
      /* STYLE */
    )) : (0, import_vue6.createCommentVNode)("v-if", true);
  }
  var __easycom_22 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "E:/workspace/HelloUniApp/uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.vue"]]);
  var _style_0$1 = { "uni-grid-wrap": { "": { "flex": 1, "flexDirection": "column" } }, "uni-grid": { "": { "flexDirection": "row", "flexWrap": "wrap" } }, "uni-grid--border": { "": { "position": "relative", "borderLeftColor": "#D2D2D2", "borderLeftStyle": "solid", "borderLeftWidth": 0.5 } } };
  var dom = requireNativePlugin("dom");
  var _sfc_main$1 = {
    name: "UniGrid",
    emits: ["change"],
    props: {
      // 每列显示个数
      column: {
        type: Number,
        default: 3
      },
      // 是否显示边框
      showBorder: {
        type: Boolean,
        default: true
      },
      // 边框颜色
      borderColor: {
        type: String,
        default: "#D2D2D2"
      },
      // 是否正方形显示,默认为 true
      square: {
        type: Boolean,
        default: true
      },
      highlight: {
        type: Boolean,
        default: true
      }
    },
    provide() {
      return {
        grid: this
      };
    },
    data() {
      const elId = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      return {
        elId,
        width: 0
      };
    },
    created() {
      this.children = [];
    },
    mounted() {
      this.$nextTick(() => {
        this.init();
      });
    },
    methods: {
      init() {
        setTimeout(() => {
          this._getSize((width) => {
            this.children.forEach((item, index) => {
              item.width = width;
            });
          });
        }, 50);
      },
      change(e) {
        this.$emit("change", e);
      },
      _getSize(fn) {
        dom.getComponentRect(this.$refs["uni-grid"], (ret) => {
          this.width = parseInt((ret.size.width - 1) / this.column) + "px";
          fn(this.width);
        });
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
      class: "uni-grid-wrap",
      renderWhole: true
    }, [
      (0, import_vue6.createElementVNode)("view", {
        id: $data.elId,
        ref: "uni-grid",
        class: (0, import_vue6.normalizeClass)(["uni-grid", { "uni-grid--border": $props.showBorder }]),
        style: (0, import_vue6.normalizeStyle)({ "border-left-color": $props.borderColor })
      }, [
        (0, import_vue6.renderSlot)(_ctx.$slots, "default")
      ], 14, ["id"])
    ]);
  }
  var __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "E:/workspace/HelloUniApp/uni_modules/uni-grid/components/uni-grid/uni-grid.vue"]]);
  var _imports_0 = "/static/c1.png";
  var _imports_1 = "/static/c2.png";
  var _imports_2 = "/static/c3.png";
  var _imports_3 = "/static/c4.png";
  var _style_05 = { "image": { "": { "width": 25, "height": 25 } }, "text": { "": { "fontSize": 14, "marginTop": 5 } }, "grid-dynamic-box": { "": { "marginBottom": 15 } }, "grid-item-box": { "": { "flex": 1, "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "paddingTop": 15, "paddingRight": 0, "paddingBottom": 15, "paddingLeft": 0 } }, "grid-item-box-row": { "": { "flex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "paddingTop": 15, "paddingRight": 0, "paddingBottom": 15, "paddingLeft": 0 } }, "grid-dot": { "": { "position": "absolute", "top": 5, "right": 15 } }, "swiper": { "": { "height": 420 } } };
  var _sfc_main5 = {
    components: {},
    data() {
      return {
        dynamicList: [],
        list: [
          {
            url: "/static/c1.png",
            text: "Grid 1",
            badge: "0",
            type: "primary"
          },
          {
            url: "/static/c2.png",
            text: "Grid 2",
            badge: "1",
            type: "success"
          },
          {
            url: "/static/c3.png",
            text: "Grid 3",
            badge: "99",
            type: "warning"
          },
          {
            url: "/static/c4.png",
            text: "Grid 4",
            badge: "2",
            type: "error"
          },
          {
            url: "/static/c5.png",
            text: "Grid 5"
          },
          {
            url: "/static/c6.png",
            text: "Grid 6"
          },
          {
            url: "/static/c7.png",
            text: "Grid 7"
          },
          {
            url: "/static/c8.png",
            text: "Grid 8"
          },
          {
            url: "/static/c9.png",
            text: "Grid 9"
          }
        ]
      };
    },
    methods: {
      change(e) {
        let {
          index
        } = e.detail;
        this.list[index].badge && this.list[index].badge++;
        uni.showToast({
          title: `\u70B9\u51FB\u7B2C${index + 1}\u4E2A\u5BAB\u683C`,
          icon: "none"
        });
      },
      add() {
        if (this.dynamicList.length < 9) {
          this.dynamicList.push({
            url: `/static/c${this.dynamicList.length + 1}.png`,
            text: `Grid ${this.dynamicList.length + 1}`,
            color: this.dynamicList.length % 2 === 0 ? "#f5f5f5" : "#fff"
          });
        } else {
          uni.showToast({
            title: "\u6700\u591A\u6DFB\u52A09\u4E2A",
            icon: "none"
          });
        }
      },
      del() {
        this.dynamicList.splice(this.dynamicList.length - 1, 1);
      }
    }
  };
  function _sfc_render5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_card = resolveEasycom((0, import_vue6.resolveDynamicComponent)("uni-card"), __easycom_0);
    const _component_uni_icons = resolveEasycom((0, import_vue6.resolveDynamicComponent)("uni-icons"), __easycom_1);
    const _component_uni_grid_item = resolveEasycom((0, import_vue6.resolveDynamicComponent)("uni-grid-item"), __easycom_22);
    const _component_uni_grid = resolveEasycom((0, import_vue6.resolveDynamicComponent)("uni-grid"), __easycom_3);
    const _component_uni_section = resolveEasycom((0, import_vue6.resolveDynamicComponent)("uni-section"), __easycom_2);
    const _component_swiper_item = (0, import_vue6.resolveComponent)("swiper-item");
    const _component_swiper = (0, import_vue6.resolveComponent)("swiper");
    const _component_button = (0, import_vue6.resolveComponent)("button");
    const _component_uni_badge = resolveEasycom((0, import_vue6.resolveDynamicComponent)("uni-badge"), __easycom_5);
    return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue6.createElementVNode)("view", { class: "container" }, [
        (0, import_vue6.createVNode)(_component_uni_card, {
          "is-full": "",
          "is-shadow": false
        }, {
          default: (0, import_vue6.withCtx)(() => [
            (0, import_vue6.createElementVNode)("u-text", { class: "uni-h6" }, "\u5BAB\u683C\u7EC4\u4EF6\u4E3B\u8981\u4F7F\u7528\u573A\u666F\u5982\uFF1A\u5546\u54C1\u63A8\u8350\u5217\u8868\u3001\u70ED\u95E8\u5185\u5BB9\u7B49")
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue6.createVNode)(_component_uni_section, {
          title: "\u57FA\u7840\u6837\u5F0F",
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue6.withCtx)(() => [
            (0, import_vue6.createVNode)(_component_uni_grid, {
              column: 4,
              highlight: true,
              onChange: $options.change
            }, {
              default: (0, import_vue6.withCtx)(() => [
                ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
                  import_vue6.Fragment,
                  null,
                  (0, import_vue6.renderList)(4, (item, index) => {
                    return (0, import_vue6.createVNode)(_component_uni_grid_item, {
                      index,
                      key: index
                    }, {
                      default: (0, import_vue6.withCtx)(() => [
                        (0, import_vue6.createElementVNode)("view", {
                          class: "grid-item-box",
                          style: { "background-color": "#fff" }
                        }, [
                          (0, import_vue6.createVNode)(_component_uni_icons, {
                            type: "image",
                            size: 30,
                            color: "#777"
                          }),
                          (0, import_vue6.createElementVNode)("u-text", { class: "text" }, "\u6587\u672C\u4FE1\u606F")
                        ])
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["index"]);
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onChange"])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue6.createVNode)(_component_uni_section, {
          title: "\u81EA\u5B9A\u4E49\u5217\u6570",
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue6.withCtx)(() => [
            (0, import_vue6.createVNode)(_component_uni_grid, {
              column: 4,
              highlight: true,
              onChange: $options.change
            }, {
              default: (0, import_vue6.withCtx)(() => [
                ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
                  import_vue6.Fragment,
                  null,
                  (0, import_vue6.renderList)(8, (item, index) => {
                    return (0, import_vue6.createVNode)(_component_uni_grid_item, {
                      index,
                      key: index
                    }, {
                      default: (0, import_vue6.withCtx)(() => [
                        (0, import_vue6.createElementVNode)("view", {
                          class: "grid-item-box",
                          style: { "background-color": "#fff" }
                        }, [
                          (0, import_vue6.createVNode)(_component_uni_icons, {
                            type: "image",
                            size: 30,
                            color: "#777"
                          }),
                          (0, import_vue6.createElementVNode)("u-text", { class: "text" }, "\u6587\u672C\u4FE1\u606F")
                        ])
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["index"]);
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onChange"])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue6.createVNode)(_component_uni_section, {
          title: "\u6ED1\u52A8\u89C6\u56FE",
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue6.withCtx)(() => [
            (0, import_vue6.createCommentVNode)(" \u56E0\u4E3Aswiper\u7279\u6027\u7684\u5173\u7CFB\uFF0C\u8BF7\u6307\u5B9Aswiper\u7684\u9AD8\u5EA6 \uFF0Cswiper\u7684\u9AD8\u5EA6\u5E76\u4E0D\u4F1A\u88AB\u5185\u5BB9\u6491\u5F00"),
            (0, import_vue6.createVNode)(_component_swiper, {
              class: "swiper",
              "indicator-dots": true
            }, {
              default: (0, import_vue6.withCtx)(() => [
                (0, import_vue6.createVNode)(_component_swiper_item, null, {
                  default: (0, import_vue6.withCtx)(() => [
                    (0, import_vue6.createVNode)(_component_uni_grid, {
                      column: 3,
                      highlight: true,
                      onChange: $options.change
                    }, {
                      default: (0, import_vue6.withCtx)(() => [
                        ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
                          import_vue6.Fragment,
                          null,
                          (0, import_vue6.renderList)($data.list, (item, index) => {
                            return (0, import_vue6.openBlock)(), (0, import_vue6.createBlock)(_component_uni_grid_item, {
                              index,
                              key: index
                            }, {
                              default: (0, import_vue6.withCtx)(() => [
                                (0, import_vue6.createElementVNode)("view", { class: "grid-item-box" }, [
                                  (0, import_vue6.createElementVNode)("u-image", {
                                    src: item.url,
                                    class: "image",
                                    mode: "aspectFill"
                                  }, null, 8, ["src"]),
                                  (0, import_vue6.createElementVNode)(
                                    "u-text",
                                    { class: "text" },
                                    (0, import_vue6.toDisplayString)(item.text),
                                    1
                                    /* TEXT */
                                  )
                                ])
                              ]),
                              _: 2
                              /* DYNAMIC */
                            }, 1032, ["index"]);
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["onChange"])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue6.createVNode)(_component_swiper_item, null, {
                  default: (0, import_vue6.withCtx)(() => [
                    (0, import_vue6.createVNode)(_component_uni_grid, {
                      column: 3,
                      highlight: true,
                      onChange: $options.change
                    }, {
                      default: (0, import_vue6.withCtx)(() => [
                        ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
                          import_vue6.Fragment,
                          null,
                          (0, import_vue6.renderList)($data.list, (item, index) => {
                            return (0, import_vue6.openBlock)(), (0, import_vue6.createBlock)(_component_uni_grid_item, {
                              index,
                              key: index
                            }, {
                              default: (0, import_vue6.withCtx)(() => [
                                (0, import_vue6.createElementVNode)("view", { class: "grid-item-box" }, [
                                  (0, import_vue6.createElementVNode)("u-image", {
                                    src: item.url,
                                    class: "image",
                                    mode: "aspectFill"
                                  }, null, 8, ["src"]),
                                  (0, import_vue6.createElementVNode)(
                                    "u-text",
                                    { class: "text" },
                                    (0, import_vue6.toDisplayString)(item.text),
                                    1
                                    /* TEXT */
                                  )
                                ])
                              ]),
                              _: 2
                              /* DYNAMIC */
                            }, 1032, ["index"]);
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["onChange"])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue6.createVNode)(_component_swiper_item, null, {
                  default: (0, import_vue6.withCtx)(() => [
                    (0, import_vue6.createVNode)(_component_uni_grid, {
                      column: 3,
                      highlight: true,
                      onChange: $options.change
                    }, {
                      default: (0, import_vue6.withCtx)(() => [
                        ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
                          import_vue6.Fragment,
                          null,
                          (0, import_vue6.renderList)($data.list, (item, index) => {
                            return (0, import_vue6.openBlock)(), (0, import_vue6.createBlock)(_component_uni_grid_item, {
                              index,
                              key: index
                            }, {
                              default: (0, import_vue6.withCtx)(() => [
                                (0, import_vue6.createElementVNode)("view", { class: "grid-item-box" }, [
                                  (0, import_vue6.createElementVNode)("u-image", {
                                    src: item.url,
                                    class: "image",
                                    mode: "aspectFill"
                                  }, null, 8, ["src"]),
                                  (0, import_vue6.createElementVNode)(
                                    "u-text",
                                    { class: "text" },
                                    (0, import_vue6.toDisplayString)(item.text),
                                    1
                                    /* TEXT */
                                  )
                                ])
                              ]),
                              _: 2
                              /* DYNAMIC */
                            }, 1032, ["index"]);
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["onChange"])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue6.createVNode)(_component_uni_section, {
          title: "\u52A8\u6001\u52A0\u8F7D",
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue6.withCtx)(() => [
            (0, import_vue6.createElementVNode)("view", { class: "grid-dynamic-box" }, [
              (0, import_vue6.createVNode)(_component_uni_grid, {
                column: 3,
                highlight: true,
                onChange: $options.change
              }, {
                default: (0, import_vue6.withCtx)(() => [
                  ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
                    import_vue6.Fragment,
                    null,
                    (0, import_vue6.renderList)($data.dynamicList, (item, index) => {
                      return (0, import_vue6.openBlock)(), (0, import_vue6.createBlock)(_component_uni_grid_item, {
                        index,
                        key: index
                      }, {
                        default: (0, import_vue6.withCtx)(() => [
                          (0, import_vue6.createElementVNode)(
                            "view",
                            {
                              class: "grid-item-box",
                              style: (0, import_vue6.normalizeStyle)({ "backgroundColor": item.color })
                            },
                            [
                              (0, import_vue6.createElementVNode)("u-image", {
                                src: item.url,
                                class: "image",
                                mode: "aspectFill"
                              }, null, 8, ["src"]),
                              (0, import_vue6.createElementVNode)(
                                "u-text",
                                { class: "text" },
                                (0, import_vue6.toDisplayString)(item.text),
                                1
                                /* TEXT */
                              )
                            ],
                            4
                            /* STYLE */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["index"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onChange"])
            ]),
            (0, import_vue6.createVNode)(_component_button, {
              type: "primary",
              onClick: $options.add
            }, {
              default: (0, import_vue6.withCtx)(() => [
                (0, import_vue6.createTextVNode)("\u70B9\u51FB\u6DFB\u52A0\u4E00\u4E2A\u5BAB\u683C")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onClick"]),
            $data.dynamicList.length !== 0 ? ((0, import_vue6.openBlock)(), (0, import_vue6.createBlock)(_component_button, {
              key: 0,
              type: "primary",
              style: { "margin-top": "15px" },
              onClick: $options.del
            }, {
              default: (0, import_vue6.withCtx)(() => [
                (0, import_vue6.createTextVNode)("\u70B9\u51FB\u5220\u9664\u4E00\u4E2A\u5BAB\u683C")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onClick"])) : (0, import_vue6.createCommentVNode)("v-if", true)
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue6.createVNode)(_component_uni_section, {
          title: "\u65E0\u8FB9\u6846\u5E26\u89D2\u6807\uFF083\u5217\uFF09",
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue6.withCtx)(() => [
            (0, import_vue6.createVNode)(_component_uni_grid, {
              column: 3,
              "show-border": false,
              square: false,
              onChange: $options.change
            }, {
              default: (0, import_vue6.withCtx)(() => [
                ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
                  import_vue6.Fragment,
                  null,
                  (0, import_vue6.renderList)($data.list, (item, index) => {
                    return (0, import_vue6.openBlock)(), (0, import_vue6.createBlock)(_component_uni_grid_item, {
                      index,
                      key: index
                    }, {
                      default: (0, import_vue6.withCtx)(() => [
                        (0, import_vue6.createElementVNode)("view", { class: "grid-item-box" }, [
                          (0, import_vue6.createElementVNode)("u-image", {
                            class: "image",
                            src: item.url,
                            mode: "aspectFill"
                          }, null, 8, ["src"]),
                          (0, import_vue6.createElementVNode)(
                            "u-text",
                            { class: "text" },
                            (0, import_vue6.toDisplayString)(item.text),
                            1
                            /* TEXT */
                          ),
                          item.badge ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                            key: 0,
                            class: "grid-dot"
                          }, [
                            (0, import_vue6.createVNode)(_component_uni_badge, {
                              text: item.badge,
                              type: item.type
                            }, null, 8, ["text", "type"])
                          ])) : (0, import_vue6.createCommentVNode)("v-if", true)
                        ])
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["index"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onChange"])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue6.createVNode)(_component_uni_section, {
          title: "\u77E9\u5F62\u5BAB\u683C\uFF083\u5217\uFF09",
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue6.withCtx)(() => [
            (0, import_vue6.createVNode)(_component_uni_grid, {
              column: 3,
              square: false,
              highlight: false,
              onChange: $options.change
            }, {
              default: (0, import_vue6.withCtx)(() => [
                ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
                  import_vue6.Fragment,
                  null,
                  (0, import_vue6.renderList)($data.list, (item, index) => {
                    return (0, import_vue6.openBlock)(), (0, import_vue6.createBlock)(_component_uni_grid_item, {
                      index,
                      key: index
                    }, {
                      default: (0, import_vue6.withCtx)(() => [
                        (0, import_vue6.createElementVNode)("view", { class: "grid-item-box" }, [
                          (0, import_vue6.createElementVNode)("u-image", {
                            src: item.url,
                            class: "image",
                            mode: "aspectFill"
                          }, null, 8, ["src"]),
                          (0, import_vue6.createElementVNode)(
                            "u-text",
                            { class: "text" },
                            (0, import_vue6.toDisplayString)(item.text),
                            1
                            /* TEXT */
                          )
                        ])
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["index"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onChange"])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue6.createVNode)(_component_uni_section, {
          title: "\u8FB9\u6846\u989C\u8272\uFF084\u5217 \u65E0\u6587\u5B57\uFF09",
          type: "line",
          padding: ""
        }, {
          default: (0, import_vue6.withCtx)(() => [
            (0, import_vue6.createVNode)(_component_uni_grid, {
              column: 4,
              "border-color": "#03a9f4",
              onChange: $options.change
            }, {
              default: (0, import_vue6.withCtx)(() => [
                (0, import_vue6.createVNode)(_component_uni_grid_item, { index: 0 }, {
                  default: (0, import_vue6.withCtx)(() => [
                    (0, import_vue6.createElementVNode)("view", { class: "grid-item-box" }, [
                      (0, import_vue6.createElementVNode)("u-image", {
                        class: "image",
                        src: _imports_0,
                        mode: "aspectFill"
                      })
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue6.createVNode)(_component_uni_grid_item, { index: 1 }, {
                  default: (0, import_vue6.withCtx)(() => [
                    (0, import_vue6.createElementVNode)("view", { class: "grid-item-box" }, [
                      (0, import_vue6.createElementVNode)("u-image", {
                        class: "image",
                        src: _imports_1,
                        mode: "aspectFill"
                      })
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue6.createVNode)(_component_uni_grid_item, { index: 2 }, {
                  default: (0, import_vue6.withCtx)(() => [
                    (0, import_vue6.createElementVNode)("view", { class: "grid-item-box" }, [
                      (0, import_vue6.createElementVNode)("u-image", {
                        class: "image",
                        src: _imports_2,
                        mode: "aspectFill"
                      })
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue6.createVNode)(_component_uni_grid_item, { index: 3 }, {
                  default: (0, import_vue6.withCtx)(() => [
                    (0, import_vue6.createElementVNode)("view", { class: "grid-item-box" }, [
                      (0, import_vue6.createElementVNode)("u-image", {
                        class: "image",
                        src: _imports_3,
                        mode: "aspectFill"
                      })
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onChange"])
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]);
  }
  var grid = /* @__PURE__ */ _export_sfc(_sfc_main5, [["render", _sfc_render5], ["styles", [_style_05]], ["__file", "E:/workspace/HelloUniApp/pages/extUI/grid/grid.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/extUI/grid/grid";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    grid.mpType = "page";
    const app = Vue.createPageApp(grid, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...grid.styles || []]));
    app.mount("#root");
  }
})();
