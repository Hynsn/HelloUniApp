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

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/uni-icons.js
  var import_vue2 = __toESM(require_vue());

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/uni-icons.js
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
  var _style_0 = { "uni-icons": { "": { "fontFamily": "uniicons", "textDecoration": "none", "textAlign": "center" } } };
  var getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  var domModule = weex.requireModule("dom");
  domModule.addRule("fontFace", {
    "fontFamily": "uniicons",
    "src": "url('" + iconUrl + "')"
  });
  var _sfc_main = {
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
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "u-text",
      {
        style: (0, import_vue2.normalizeStyle)({ color: $props.color, "font-size": $options.iconSize }),
        class: "uni-icons",
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      (0, import_vue2.toDisplayString)($options.unicode),
      5
      /* TEXT, STYLE */
    );
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/workspace/HelloUniApp/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/extUI/nav-bar/nav-bar.js
  var import_vue5 = __toESM(require_vue());

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/uni-card.js
  var import_vue3 = __toESM(require_vue());
  var _style_02 = { "uni-card": { "": { "marginTop": 10, "marginRight": 10, "marginBottom": 10, "marginLeft": 10, "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "borderRadius": 4, "overflow": "hidden", "fontFamily": "Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif", "backgroundColor": "#ffffff", "flex": 1 } }, "uni-card__cover": { ".uni-card ": { "position": "relative", "marginTop": 10, "flexDirection": "row", "overflow": "hidden", "borderRadius": 4 } }, "uni-card__cover-image": { ".uni-card .uni-card__cover ": { "flex": 1 } }, "uni-card__header": { ".uni-card ": { "display": "flex", "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#EBEEF5", "flexDirection": "row", "alignItems": "center", "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "overflow": "hidden" } }, "uni-card__header-box": { ".uni-card .uni-card__header ": { "flex": 1, "flexDirection": "row", "alignItems": "center", "overflow": "hidden" } }, "uni-card__header-avatar": { ".uni-card .uni-card__header ": { "width": 40, "height": 40, "overflow": "hidden", "borderRadius": 5, "marginRight": 10 } }, "uni-card__header-avatar-image": { ".uni-card .uni-card__header .uni-card__header-avatar ": { "flex": 1, "width": 40, "height": 40 } }, "uni-card__header-content": { ".uni-card .uni-card__header ": { "flexDirection": "column", "justifyContent": "center", "flex": 1, "overflow": "hidden" } }, "uni-card__header-content-title": { ".uni-card .uni-card__header .uni-card__header-content ": { "fontSize": 15, "color": "#3a3a3a" } }, "uni-card__header-content-subtitle": { ".uni-card .uni-card__header .uni-card__header-content ": { "fontSize": 12, "marginTop": 5, "color": "#909399" } }, "uni-card__header-extra": { ".uni-card .uni-card__header ": { "lineHeight": 12 } }, "uni-card__header-extra-text": { ".uni-card .uni-card__header .uni-card__header-extra ": { "fontSize": 12, "color": "#909399" } }, "uni-card__content": { ".uni-card ": { "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "fontSize": 14, "color": "#6a6a6a", "lineHeight": 22 } }, "uni-card__actions": { ".uni-card ": { "fontSize": 12 } }, "uni-card--border": { "": { "borderWidth": 1, "borderStyle": "solid", "borderColor": "#EBEEF5" } }, "uni-card--shadow": { "": { "position": "relative" } }, "uni-card--full": { "": { "marginTop": 0, "marginRight": 0, "marginBottom": 0, "marginLeft": 0, "borderLeftWidth": 0, "borderRadius": 0 } }, "uni-ellipsis": { "": { "lines": 1 } } };
  var _sfc_main2 = {
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
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
      "view",
      {
        class: (0, import_vue3.normalizeClass)(["uni-card", { "uni-card--full": $props.isFull, "uni-card--shadow": $props.isShadow, "uni-card--border": $props.border }]),
        style: (0, import_vue3.normalizeStyle)({ "margin": $props.isFull ? 0 : $props.margin, "padding": $props.spacing, "box-shadow": $props.isShadow ? $props.shadow : "" }),
        renderWhole: true
      },
      [
        (0, import_vue3.createCommentVNode)(" \u5C01\u9762 "),
        (0, import_vue3.renderSlot)(_ctx.$slots, "cover", {}, () => [
          $props.cover ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
            key: 0,
            class: "uni-card__cover"
          }, [
            (0, import_vue3.createElementVNode)("u-image", {
              class: "uni-card__cover-image",
              mode: "widthFix",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick("cover")),
              src: $props.cover
            }, null, 8, ["src"])
          ])) : (0, import_vue3.createCommentVNode)("v-if", true)
        ]),
        (0, import_vue3.renderSlot)(_ctx.$slots, "title", {}, () => [
          $props.title || $props.extra ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
            key: 0,
            class: "uni-card__header"
          }, [
            (0, import_vue3.createCommentVNode)(" \u5361\u7247\u6807\u9898 "),
            (0, import_vue3.createElementVNode)("view", {
              class: "uni-card__header-box",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.onClick("title"))
            }, [
              $props.thumbnail ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
                key: 0,
                class: "uni-card__header-avatar"
              }, [
                (0, import_vue3.createElementVNode)("u-image", {
                  class: "uni-card__header-avatar-image",
                  src: $props.thumbnail,
                  mode: "aspectFit"
                }, null, 8, ["src"])
              ])) : (0, import_vue3.createCommentVNode)("v-if", true),
              (0, import_vue3.createElementVNode)("view", { class: "uni-card__header-content" }, [
                (0, import_vue3.createElementVNode)(
                  "u-text",
                  { class: "uni-card__header-content-title uni-ellipsis" },
                  (0, import_vue3.toDisplayString)($props.title),
                  1
                  /* TEXT */
                ),
                $props.title && $props.subTitle ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
                  "u-text",
                  {
                    key: 0,
                    class: "uni-card__header-content-subtitle uni-ellipsis"
                  },
                  (0, import_vue3.toDisplayString)($props.subTitle),
                  1
                  /* TEXT */
                )) : (0, import_vue3.createCommentVNode)("v-if", true)
              ])
            ]),
            (0, import_vue3.createElementVNode)("view", {
              class: "uni-card__header-extra",
              onClick: _cache[2] || (_cache[2] = ($event) => $options.onClick("extra"))
            }, [
              (0, import_vue3.createElementVNode)(
                "u-text",
                { class: "uni-card__header-extra-text" },
                (0, import_vue3.toDisplayString)($props.extra),
                1
                /* TEXT */
              )
            ])
          ])) : (0, import_vue3.createCommentVNode)("v-if", true)
        ]),
        (0, import_vue3.createCommentVNode)(" \u5361\u7247\u5185\u5BB9 "),
        (0, import_vue3.createElementVNode)(
          "view",
          {
            class: "uni-card__content",
            style: (0, import_vue3.normalizeStyle)({ padding: $props.padding }),
            onClick: _cache[3] || (_cache[3] = ($event) => $options.onClick("content"))
          },
          [
            (0, import_vue3.renderSlot)(_ctx.$slots, "default")
          ],
          4
          /* STYLE */
        ),
        (0, import_vue3.createElementVNode)("view", {
          class: "uni-card__actions",
          onClick: _cache[4] || (_cache[4] = ($event) => $options.onClick("actions"))
        }, [
          (0, import_vue3.renderSlot)(_ctx.$slots, "actions")
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "E:/workspace/HelloUniApp/uni_modules/uni-card/components/uni-card/uni-card.vue"]]);

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

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/extUI/nav-bar/nav-bar.js
  var _style_0$2 = { "uni-status-bar": { "": { "height": 20 } } };
  var _sfc_main$2 = {
    name: "UniStatusBar",
    data() {
      return {
        statusBarHeight: 20
      };
    },
    mounted() {
      this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + "px";
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
      "view",
      {
        style: (0, import_vue5.normalizeStyle)({ height: $data.statusBarHeight }),
        class: "uni-status-bar",
        renderWhole: true
      },
      [
        (0, import_vue5.renderSlot)(_ctx.$slots, "default")
      ],
      4
      /* STYLE */
    );
  }
  var statusBar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "E:/workspace/HelloUniApp/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar.vue"]]);
  var _style_0$1 = { "uni-nvue-fixed": { "": { "position": "sticky" } }, "uni-nav-bar-text": { "": { "fontSize": "34rpx" } }, "uni-nav-bar-right-text": { "": { "fontSize": 12 } }, "uni-navbar__content": { "": { "position": "relative", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-navbar-btn-text": { "": { "flexDirection": "column", "justifyContent": "flex-start", "alignItems": "center", "lineHeight": 12 } }, "uni-navbar__header": { "": { "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10, "flexDirection": "row", "height": 44, "fontSize": 12 } }, "uni-navbar__header-btns": { "": { "flexWrap": "nowrap", "flexDirection": "row", "width": "120rpx", "justifyContent": "center", "alignItems": "center" } }, "uni-navbar__header-btns-left": { "": { "width": "120rpx", "justifyContent": "flex-start", "alignItems": "center" } }, "uni-navbar__header-btns-right": { "": { "flexDirection": "row", "justifyContent": "flex-end", "alignItems": "center" } }, "uni-navbar__header-container": { "": { "flex": 1, "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10, "overflow": "hidden" } }, "uni-navbar__header-container-inner": { "": { "flex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "fontSize": 12, "overflow": "hidden" } }, "uni-navbar__placeholder-view": { "": { "height": 44 } }, "uni-navbar--fixed": { "": { "position": "fixed", "zIndex": 998, "left": 0, "right": 0 } }, "uni-navbar--shadow": { "": { "boxShadow": "0 1px 6px #ccc" } }, "uni-navbar--border": { "": { "borderBottomWidth": "1rpx", "borderBottomStyle": "solid", "borderBottomColor": "#eeeeee" } }, "uni-ellipsis-1": { "": { "overflow": "hidden", "lines": 1, "textOverflow": "ellipsis" } } };
  var getVal2 = (val) => typeof val === "number" ? val + "px" : val;
  var _sfc_main$1 = {
    name: "UniNavBar",
    components: {
      statusBar
    },
    emits: ["clickLeft", "clickRight", "clickTitle"],
    props: {
      dark: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ""
      },
      leftText: {
        type: String,
        default: ""
      },
      rightText: {
        type: String,
        default: ""
      },
      leftIcon: {
        type: String,
        default: ""
      },
      rightIcon: {
        type: String,
        default: ""
      },
      fixed: {
        type: [Boolean, String],
        default: false
      },
      color: {
        type: String,
        default: ""
      },
      backgroundColor: {
        type: String,
        default: ""
      },
      statusBar: {
        type: [Boolean, String],
        default: false
      },
      shadow: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: [Boolean, String],
        default: true
      },
      height: {
        type: [Number, String],
        default: 44
      },
      leftWidth: {
        type: [Number, String],
        default: 60
      },
      rightWidth: {
        type: [Number, String],
        default: 60
      },
      stat: {
        type: [Boolean, String],
        default: ""
      }
    },
    computed: {
      themeBgColor() {
        if (this.dark) {
          if (this.backgroundColor) {
            return this.backgroundColor;
          } else {
            return this.dark ? "#333" : "#FFF";
          }
        }
        return this.backgroundColor || "#FFF";
      },
      themeColor() {
        if (this.dark) {
          if (this.color) {
            return this.color;
          } else {
            return this.dark ? "#fff" : "#333";
          }
        }
        return this.color || "#333";
      },
      navbarHeight() {
        return getVal2(this.height);
      },
      leftIconWidth() {
        return getVal2(this.leftWidth);
      },
      rightIconWidth() {
        return getVal2(this.rightWidth);
      }
    },
    mounted() {
      if (uni.report && this.stat && this.title !== "") {
        uni.report("title", this.title);
      }
    },
    methods: {
      onClickLeft() {
        this.$emit("clickLeft");
      },
      onClickRight() {
        this.$emit("clickRight");
      },
      onClickTitle() {
        this.$emit("clickTitle");
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = (0, import_vue5.resolveComponent)("status-bar");
    const _component_uni_icons = resolveEasycom((0, import_vue5.resolveDynamicComponent)("uni-icons"), __easycom_1);
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
      "view",
      {
        class: (0, import_vue5.normalizeClass)(["uni-navbar", { "uni-dark": $props.dark, "uni-nvue-fixed": $props.fixed }]),
        renderWhole: true
      },
      [
        (0, import_vue5.createElementVNode)(
          "view",
          {
            class: (0, import_vue5.normalizeClass)(["uni-navbar__content", { "uni-navbar--fixed": $props.fixed, "uni-navbar--shadow": $props.shadow, "uni-navbar--border": $props.border }]),
            style: (0, import_vue5.normalizeStyle)({ "background-color": $options.themeBgColor })
          },
          [
            $props.statusBar ? ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_status_bar, { key: 0 })) : (0, import_vue5.createCommentVNode)("v-if", true),
            (0, import_vue5.createElementVNode)(
              "view",
              {
                style: (0, import_vue5.normalizeStyle)({ color: $options.themeColor, backgroundColor: $options.themeBgColor, height: $options.navbarHeight }),
                class: "uni-navbar__header"
              },
              [
                (0, import_vue5.createElementVNode)(
                  "view",
                  {
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.onClickLeft && $options.onClickLeft(...args)),
                    class: "uni-navbar__header-btns uni-navbar__header-btns-left",
                    style: (0, import_vue5.normalizeStyle)({ width: $options.leftIconWidth })
                  },
                  [
                    (0, import_vue5.renderSlot)(_ctx.$slots, "left", {}, () => [
                      $props.leftIcon.length > 0 ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("view", {
                        key: 0,
                        class: "uni-navbar__content_view"
                      }, [
                        (0, import_vue5.createVNode)(_component_uni_icons, {
                          color: $options.themeColor,
                          type: $props.leftIcon,
                          size: "20"
                        }, null, 8, ["color", "type"])
                      ])) : (0, import_vue5.createCommentVNode)("v-if", true),
                      $props.leftText.length ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
                        "view",
                        {
                          key: 1,
                          class: (0, import_vue5.normalizeClass)([{ "uni-navbar-btn-icon-left": !$props.leftIcon.length > 0 }, "uni-navbar-btn-text"])
                        },
                        [
                          (0, import_vue5.createElementVNode)(
                            "u-text",
                            {
                              style: (0, import_vue5.normalizeStyle)({ color: $options.themeColor, fontSize: "12px" })
                            },
                            (0, import_vue5.toDisplayString)($props.leftText),
                            5
                            /* TEXT, STYLE */
                          )
                        ],
                        2
                        /* CLASS */
                      )) : (0, import_vue5.createCommentVNode)("v-if", true)
                    ])
                  ],
                  4
                  /* STYLE */
                ),
                (0, import_vue5.createElementVNode)("view", {
                  class: "uni-navbar__header-container",
                  onClick: _cache[1] || (_cache[1] = (...args) => $options.onClickTitle && $options.onClickTitle(...args))
                }, [
                  (0, import_vue5.renderSlot)(_ctx.$slots, "default", {}, () => [
                    $props.title.length > 0 ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("view", {
                      key: 0,
                      class: "uni-navbar__header-container-inner"
                    }, [
                      (0, import_vue5.createElementVNode)(
                        "u-text",
                        {
                          class: "uni-nav-bar-text uni-ellipsis-1",
                          style: (0, import_vue5.normalizeStyle)({ color: $options.themeColor })
                        },
                        (0, import_vue5.toDisplayString)($props.title),
                        5
                        /* TEXT, STYLE */
                      )
                    ])) : (0, import_vue5.createCommentVNode)("v-if", true)
                  ])
                ]),
                (0, import_vue5.createElementVNode)(
                  "view",
                  {
                    onClick: _cache[2] || (_cache[2] = (...args) => $options.onClickRight && $options.onClickRight(...args)),
                    class: "uni-navbar__header-btns uni-navbar__header-btns-right",
                    style: (0, import_vue5.normalizeStyle)({ width: $options.rightIconWidth })
                  },
                  [
                    (0, import_vue5.renderSlot)(_ctx.$slots, "right", {}, () => [
                      $props.rightIcon.length ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("view", { key: 0 }, [
                        (0, import_vue5.createVNode)(_component_uni_icons, {
                          color: $options.themeColor,
                          type: $props.rightIcon,
                          size: "22"
                        }, null, 8, ["color", "type"])
                      ])) : (0, import_vue5.createCommentVNode)("v-if", true),
                      $props.rightText.length && !$props.rightIcon.length ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("view", {
                        key: 1,
                        class: "uni-navbar-btn-text"
                      }, [
                        (0, import_vue5.createElementVNode)(
                          "u-text",
                          {
                            class: "uni-nav-bar-right-text",
                            style: (0, import_vue5.normalizeStyle)({ color: $options.themeColor })
                          },
                          (0, import_vue5.toDisplayString)($props.rightText),
                          5
                          /* TEXT, STYLE */
                        )
                      ])) : (0, import_vue5.createCommentVNode)("v-if", true)
                    ])
                  ],
                  4
                  /* STYLE */
                )
              ],
              4
              /* STYLE */
            )
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      2
      /* CLASS */
    );
  }
  var __easycom_02 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "E:/workspace/HelloUniApp/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue"]]);
  var _style_04 = { "box-bg": { "": { "backgroundColor": "#F5F5F5", "paddingTop": 5, "paddingRight": 0, "paddingBottom": 5, "paddingLeft": 0 } }, "city": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "flex-start", "marginLeft": 4 } }, "input-view": { "": { "flexDirection": "row", "flex": 1, "backgroundColor": "#f8f8f8", "height": 30, "borderRadius": 15, "paddingTop": 0, "paddingRight": 15, "paddingBottom": 0, "paddingLeft": 15, "flexWrap": "nowrap", "marginTop": 7, "marginRight": 0, "marginBottom": 7, "marginLeft": 0, "lineHeight": 30 } }, "input-uni-icon": { "": { "lineHeight": 30 } }, "nav-bar-input": { "": { "height": 30, "lineHeight": 30, "width": "370rpx", "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 5, "fontSize": 12, "backgroundColor": "#f8f8f8" } } };
  var _sfc_main4 = {
    components: {},
    data() {
      return {
        city: "\u5317\u4EAC"
      };
    },
    methods: {
      back() {
        uni.navigateBack({
          delta: 1
        });
      },
      showMenu() {
        uni.showToast({
          title: "\u83DC\u5355"
        });
      },
      clickLeft() {
        uni.showToast({
          title: "\u5DE6\u4FA7\u6309\u94AE"
        });
      },
      search() {
        uni.showToast({
          title: "\u641C\u7D22"
        });
      },
      showCity() {
        uni.showToast({
          title: "\u9009\u62E9\u57CE\u5E02"
        });
      },
      scan() {
        uni.showToast({
          title: "\u626B\u7801"
        });
      },
      confirm() {
        uni.showToast({
          title: "\u641C\u7D22"
        });
      }
    },
    onPullDownRefresh() {
      formatAppLog("log", "at pages/extUI/nav-bar/nav-bar.nvue:128", "onPullDownRefresh");
      setTimeout(function() {
        uni.stopPullDownRefresh();
        formatAppLog("log", "at pages/extUI/nav-bar/nav-bar.nvue:131", "stopPullDownRefresh");
      }, 1e3);
    }
  };
  function _sfc_render4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_nav_bar = resolveEasycom((0, import_vue5.resolveDynamicComponent)("uni-nav-bar"), __easycom_02);
    const _component_uni_card = resolveEasycom((0, import_vue5.resolveDynamicComponent)("uni-card"), __easycom_0);
    const _component_uni_section = resolveEasycom((0, import_vue5.resolveDynamicComponent)("uni-section"), __easycom_2);
    const _component_uni_icons = resolveEasycom((0, import_vue5.resolveDynamicComponent)("uni-icons"), __easycom_1);
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue5.createElementVNode)("view", { class: "container" }, [
        (0, import_vue5.createVNode)(_component_uni_nav_bar, {
          dark: "",
          fixed: true,
          shadow: "",
          "background-color": "#007AFF",
          "status-bar": "",
          "left-icon": "left",
          "left-text": "\u8FD4\u56DE",
          title: "\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F",
          onClickLeft: $options.back
        }, null, 8, ["onClickLeft"]),
        (0, import_vue5.createVNode)(_component_uni_card, {
          "is-full": "",
          isShadow: false
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createElementVNode)("u-text", { class: "uni-h6" }, "\u672C\u5BFC\u822A\u680F\u4E3A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u5E76\u975E\u539F\u751F\u5BFC\u822A\u680F\u3002\u9664\u975E\u539F\u751F\u5BFC\u822A\u680F\u65E0\u6CD5\u6EE1\u8DB3\u9700\u6C42\uFF0C\u5426\u5219\u4E0D\u63A8\u8350\u4F7F\u7528\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u7EC4\u4EF6\u3002\u5177\u4F53\u53C2\u8003https://ask.dcloud.net.cn/article/34921")
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue5.createVNode)(_component_uni_section, {
          title: "\u57FA\u672C\u7528\u6CD5",
          subTitle: "\u4F7F\u7528 title \u5C5E\u6027\u8BBE\u7F6E\u5BFC\u822A\u680F\u6807\u9898",
          type: "line",
          style: { "margin-bottom": "3px" }
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createElementVNode)("view", { class: "box-bg" }, [
              (0, import_vue5.createVNode)(_component_uni_nav_bar, { title: "\u6807\u9898" })
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue5.createVNode)(_component_uni_section, {
          title: "\u5F00\u542F\u9634\u5F71",
          subTitle: "\u4F7F\u7528 shadow \u5C5E\u6027\u542F\u7528\u9634\u5F71",
          type: "line",
          style: { "margin-bottom": "3px" }
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createElementVNode)("view", { class: "box-bg" }, [
              (0, import_vue5.createVNode)(_component_uni_nav_bar, {
                shadow: "",
                "left-icon": "left",
                title: "\u5F00\u542F\u9634\u5F71",
                onClickLeft: $options.back
              }, null, 8, ["onClickLeft"])
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue5.createVNode)(_component_uni_section, {
          title: "\u5F00\u542F\u6697\u9ED1\u6A21\u5F0F",
          subTitle: "\u4F7F\u7528 dark \u5C5E\u6027\u8BBE\u7F6E\u6697\u9ED1\u6A21\u5F0F",
          type: "line",
          style: { "margin-bottom": "3px" }
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createElementVNode)("view", { class: "box-bg" }, [
              (0, import_vue5.createVNode)(_component_uni_nav_bar, {
                shadow: "",
                "left-icon": "left",
                dark: "",
                title: "\u6697\u9ED1\u6A21\u5F0F",
                onClickLeft: $options.back
              }, null, 8, ["onClickLeft"])
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue5.createVNode)(_component_uni_section, {
          title: "\u5E26\u8FD4\u56DE\u7BAD\u5934+\u53F3\u4FA7\u56FE\u6807",
          subTitle: "\u4F7F\u7528 left-icon/right-icon \u8BBE\u7F6E\u5DE6\u53F3\u56FE\u6807",
          type: "line",
          style: { "margin-bottom": "3px" }
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createElementVNode)("view", { class: "box-bg" }, [
              (0, import_vue5.createVNode)(_component_uni_nav_bar, {
                shadow: "",
                "left-icon": "left",
                "right-icon": "cart",
                title: "\u6807\u9898"
              })
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue5.createVNode)(_component_uni_section, {
          title: "\u5DE6\u4FA7\u6587\u5B57+\u53F3\u4FA7\u6587\u5B57",
          subTitle: "\u4F7F\u7528 left-text/right-text \u8BBE\u7F6E\u5DE6\u53F3\u6587\u5B57",
          type: "line",
          style: { "margin-bottom": "3px" }
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createElementVNode)("view", { class: "box-bg" }, [
              (0, import_vue5.createVNode)(_component_uni_nav_bar, {
                shadow: "",
                "left-icon": "left",
                leftText: "\u8FD4\u56DE",
                rightText: "\u8BBE\u7F6E",
                title: "\u6807\u9898"
              })
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue5.createVNode)(_component_uni_section, {
          title: "\u81EA\u5B9A\u4E49\u989C\u8272",
          subTitle: "\u4F7F\u7528 color/background-color \u5C5E\u6027\u8BBE\u7F6E\u524D\u666F\u80CC\u666F\u8272",
          type: "line",
          style: { "margin-bottom": "3px" }
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createElementVNode)("view", { class: "box-bg" }, [
              (0, import_vue5.createElementVNode)("view", { class: "box-bg" }, [
                (0, import_vue5.createVNode)(_component_uni_nav_bar, {
                  dark: "",
                  color: "#999",
                  backgroundColor: "#f5f5f5",
                  shadow: "",
                  "left-icon": "left",
                  leftText: "\u8FD4\u56DE",
                  rightText: "\u8BBE\u7F6E",
                  title: "\u81EA\u5B9A\u4E49\u989C\u8272"
                })
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue5.createVNode)(_component_uni_section, {
          title: "\u81EA\u5B9A\u4E49\u9AD8\u5EA6",
          subTitle: "\u4F7F\u7528 height \u4FEE\u6539\u7EC4\u4EF6\u9AD8\u5EA6",
          type: "line",
          style: { "margin-bottom": "3px" }
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createElementVNode)("view", { class: "box-bg" }, [
              (0, import_vue5.createElementVNode)("view", { class: "box-bg" }, [
                (0, import_vue5.createVNode)(_component_uni_nav_bar, {
                  height: "65px",
                  dark: "",
                  shadow: "",
                  "left-icon": "left",
                  leftText: "\u8FD4\u56DE",
                  rightText: "\u8BBE\u7F6E",
                  title: "\u81EA\u5B9A\u4E49\u9AD8\u5EA6"
                })
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue5.createVNode)(_component_uni_section, {
          title: "\u81EA\u5B9A\u4E49\u5185\u5BB9",
          subTitle: "\u4F7F\u7528 left/right/default \u63D2\u69FD\u81EA\u5B9A\u4E49\u5185\u5BB9",
          type: "line",
          style: { "margin-bottom": "3px" }
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createElementVNode)("view", { class: "box-bg" }, [
              (0, import_vue5.createVNode)(_component_uni_nav_bar, null, {
                left: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createElementVNode)("view", { class: "city" }, [
                    (0, import_vue5.createElementVNode)("view", null, [
                      (0, import_vue5.createElementVNode)(
                        "u-text",
                        { class: "uni-nav-bar-text" },
                        (0, import_vue5.toDisplayString)($data.city),
                        1
                        /* TEXT */
                      )
                    ]),
                    (0, import_vue5.createVNode)(_component_uni_icons, {
                      type: "arrowdown",
                      color: "#666",
                      size: "18"
                    })
                  ])
                ]),
                right: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createElementVNode)("view", { class: "city" }, [
                    (0, import_vue5.createElementVNode)("u-text", null, " \u641C\u7D22 ")
                  ])
                ]),
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createElementVNode)("view", { class: "input-view" }, [
                    (0, import_vue5.createVNode)(_component_uni_icons, {
                      class: "input-uni-icon",
                      type: "search",
                      size: "18",
                      color: "#999"
                    }),
                    (0, import_vue5.createElementVNode)(
                      "u-input",
                      {
                        confirmType: "search",
                        class: "nav-bar-input",
                        type: "text",
                        placeholder: "\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD",
                        onConfirm: _cache[0] || (_cache[0] = (...args) => $options.confirm && $options.confirm(...args))
                      },
                      null,
                      32
                      /* NEED_HYDRATION */
                    )
                  ])
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]);
  }
  var navBar = /* @__PURE__ */ _export_sfc(_sfc_main4, [["render", _sfc_render4], ["styles", [_style_04]], ["__file", "E:/workspace/HelloUniApp/pages/extUI/nav-bar/nav-bar.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/extUI/nav-bar/nav-bar";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    navBar.mpType = "page";
    const app = Vue.createPageApp(navBar, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...navBar.styles || []]));
    app.mount("#root");
  }
})();
