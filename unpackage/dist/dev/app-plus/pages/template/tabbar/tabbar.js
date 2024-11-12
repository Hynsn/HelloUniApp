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

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/template/tabbar/tabbar.js
  var import_vue = __toESM(require_vue());

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // E:/workspace/HelloUniApp/unpackage/dist/dev/.nvue/pages/template/tabbar/tabbar.js
  var _style_0$1 = { "view": { "": { "flexDirection": "column" } }, "flex-row": { "": { "flexDirection": "row" } }, "flex-col": { "": { "flexDirection": "column" } }, "list-cell": { "": { "width": "750rpx", "paddingTop": 0, "paddingRight": "30rpx", "paddingBottom": 0, "paddingLeft": "30rpx" } }, "uni-list-cell-hover": { "": { "backgroundColor": "#eeeeee" } }, "media-item": { "": { "position": "relative", "flex": 1, "flexDirection": "column", "paddingTop": "20rpx", "paddingRight": "30rpx", "paddingBottom": "21rpx", "paddingLeft": "30rpx" } }, "media-item-hover": { "": { "backgroundColor": "#eeeeee" } }, "media-item-line": { "": { "position": "absolute", "left": "30rpx", "right": "30rpx", "bottom": 0, "height": "1rpx", "backgroundColor": "#ebebeb" } }, "media-image-right": { "": { "flexDirection": "row" } }, "media-image-left": { "": { "flexDirection": "row-reverse" } }, "media-title": { "": { "flex": 1, "lines": 3, "textOverflow": "ellipsis", "fontSize": "30rpx", "color": "#555555" } }, "media-title2": { "": { "flex": 1, "marginTop": "6rpx", "lineHeight": "40rpx" } }, "image-section": { "": { "marginTop": "20rpx", "flexDirection": "row", "justifyContent": "space-between" } }, "image-section-right": { "": { "marginTop": "0rpx", "marginLeft": "10rpx", "width": "225rpx", "height": "146rpx" } }, "image-section-left": { "": { "marginTop": "0rpx", "marginRight": "10rpx", "width": "225rpx", "height": "146rpx" } }, "image-list1": { "": { "width": "690rpx", "height": "481rpx" } }, "image-list2": { "": { "width": "225rpx", "height": "146rpx" } }, "image-list3": { "": { "width": "225rpx", "height": "146rpx" } }, "media-info": { "": { "flexDirection": "row", "alignItems": "center" } }, "info-text": { "": { "marginRight": "20rpx", "color": "#999999", "fontSize": "24rpx" } }, "media-foot": { "": { "marginTop": "25rpx", "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between" } }, "max-close-view": { "": { "position": "relative", "alignItems": "center", "flexDirection": "row", "width": "40rpx", "height": "30rpx", "lineHeight": "30rpx", "borderWidth": "1rpx", "borderStyle": "solid", "borderColor": "#aaaaaa", "borderRadius": 4, "justifyContent": "center", "textAlign": "center" } }, "close-l": { "": { "position": "absolute", "width": "18rpx", "height": "1rpx", "backgroundColor": "#aaaaaa" } }, "close-h": { "": { "transform": "rotate(45deg)" } }, "close-v": { "": { "transform": "rotate(-45deg)" } } };
  var _sfc_main$1 = {
    props: {
      options: {
        type: Object,
        default: function(e) {
          return {};
        }
      }
    },
    methods: {
      click() {
        this.$emit("click");
      },
      close(e) {
        this.$emit("close");
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      import_vue.Fragment,
      null,
      [
        (0, import_vue.createCommentVNode)(" remove list-cell layer fix android 4.x overflow limit error: 28 layers! "),
        (0, import_vue.createCommentVNode)(' <view class="list-cell view" @click="click"></view> '),
        $props.options.title ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
          key: 0,
          class: "media-item view",
          hoverClass: "media-item-hover",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.click && $options.click(...args))
        }, [
          (0, import_vue.createCommentVNode)(` <view class="view" :style="options.article_type === 2 ? 'flex-direction: row';" :class="{'media-image-right': options.article_type === 2, 'media-image-left': options.article_type === 1}"> `),
          (0, import_vue.createCommentVNode)(" TODO \u5728\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u4E0B \u9700\u8981\u7528 style \u8986\u76D6\u6807\u7B7E\u7684\u9ED8\u8BA4\u6837\u5F0F "),
          (0, import_vue.createElementVNode)(
            "view",
            {
              class: "view",
              style: (0, import_vue.normalizeStyle)({ flexDirection: $props.options.article_type === 1 || $props.options.article_type === 2 ? $props.options.article_type === 2 ? "row" : "row-reverse" : "column" })
            },
            [
              (0, import_vue.createElementVNode)(
                "u-text",
                {
                  class: (0, import_vue.normalizeClass)(["media-title", { "media-title2": $props.options.article_type === 1 || $props.options.article_type === 2 }])
                },
                (0, import_vue.toDisplayString)($props.options.title),
                3
                /* TEXT, CLASS */
              ),
              $props.options.image_list || $props.options.image_url ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                "view",
                {
                  key: 0,
                  class: (0, import_vue.normalizeClass)(["image-section flex-row", { "image-section-right": $props.options.article_type === 2, "image-section-left": $props.options.article_type === 1 }]),
                  style: { flexDirection: "row" }
                },
                [
                  $props.options.image_url ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-image", {
                    key: 0,
                    class: (0, import_vue.normalizeClass)(["image-list1", { "image-list2": $props.options.article_type === 1 || $props.options.article_type === 2 }]),
                    src: $props.options.image_url
                  }, null, 10, ["src"])) : (0, import_vue.createCommentVNode)("v-if", true),
                  $props.options.image_list ? ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                    import_vue.Fragment,
                    { key: 1 },
                    (0, import_vue.renderList)($props.options.image_list, (source, i) => {
                      return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-image", {
                        class: "image-list3",
                        src: source.url,
                        key: i
                      }, null, 8, ["src"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  )) : (0, import_vue.createCommentVNode)("v-if", true)
                ],
                2
                /* CLASS */
              )) : (0, import_vue.createCommentVNode)("v-if", true)
            ],
            4
            /* STYLE */
          ),
          (0, import_vue.createElementVNode)("view", {
            class: "media-foot flex-row",
            style: { "flex-direction": "row" }
          }, [
            (0, import_vue.createElementVNode)("view", {
              class: "media-info flex-row",
              style: { "flex-direction": "row" }
            }, [
              (0, import_vue.createElementVNode)(
                "u-text",
                { class: "info-text" },
                (0, import_vue.toDisplayString)($props.options.source),
                1
                /* TEXT */
              ),
              (0, import_vue.createElementVNode)(
                "u-text",
                { class: "info-text" },
                (0, import_vue.toDisplayString)($props.options.comment_count) + "\u6761\u8BC4\u8BBA",
                1
                /* TEXT */
              ),
              (0, import_vue.createElementVNode)(
                "u-text",
                { class: "info-text" },
                (0, import_vue.toDisplayString)($props.options.datetime),
                1
                /* TEXT */
              )
            ]),
            (0, import_vue.createElementVNode)("view", {
              class: "max-close-view",
              onClick: _cache[0] || (_cache[0] = (0, import_vue.withModifiers)((...args) => $options.close && $options.close(...args), ["stop"]))
            }, [
              (0, import_vue.createElementVNode)("view", { class: "close-l close-h" }),
              (0, import_vue.createElementVNode)("view", { class: "close-l close-v" })
            ])
          ]),
          (0, import_vue.createElementVNode)("view", {
            class: "media-item-line",
            style: { "position": "absolute" }
          })
        ])) : (0, import_vue.createCommentVNode)("v-if", true)
      ],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    );
  }
  var mediaItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "E:/workspace/HelloUniApp/pages/template/tabbar/news-item.nvue"]]);
  var _style_0 = { "tabs": { "": { "flex": 1, "flexDirection": "column", "overflow": "hidden", "backgroundColor": "#ffffff" } }, "scroll-h": { "": { "width": "750rpx", "height": "80rpx", "flexDirection": "row" } }, "line-h": { "": { "height": "1rpx", "backgroundColor": "#cccccc" } }, "uni-tab-item": { "": { "flexWrap": "nowrap", "paddingLeft": "34rpx", "paddingRight": "34rpx" } }, "uni-tab-item-title": { "": { "color": "#555555", "fontSize": "30rpx", "height": "80rpx", "lineHeight": "80rpx", "flexWrap": "nowrap" } }, "uni-tab-item-title-active": { "": { "color": "#007AFF" } }, "swiper-box": { "": { "flex": 1 } }, "swiper-item": { "": { "flex": 1, "flexDirection": "row" } }, "scroll-v": { "": { "flex": 1, "flexDirection": "column", "width": 100 } }, "update-tips": { "": { "position": "absolute", "left": 0, "top": 41, "right": 0, "paddingTop": 5, "paddingBottom": 5, "backgroundColor": "#FDDD9B", "alignItems": "center", "justifyContent": "center", "textAlign": "center" } }, "update-tips-text": { "": { "fontSize": 14, "color": "#ffffff" } }, "refresh": { "": { "width": 100, "height": 64, "justifyContent": "center" } }, "refresh-view": { "": { "flexDirection": "row", "flexWrap": "nowrap", "alignItems": "center", "justifyContent": "center" } }, "refresh-icon": { "": { "width": 30, "height": 30, "transitionDuration": 500, "transitionProperty": "transform", "transform": "rotate(0deg)", "transformOrigin": "15px 15px" } }, "refresh-icon-active": { "": { "transform": "rotate(180deg)" } }, "loading-icon": { "": { "width": 20, "height": 20, "marginRight": 5, "color": "#999999" } }, "loading-text": { "": { "marginLeft": 2, "fontSize": 16, "color": "#999999" } }, "loading-more": { "": { "alignItems": "center", "justifyContent": "center", "paddingTop": 10, "paddingBottom": 10, "textAlign": "center" } }, "loading-more-text": { "": { "fontSize": "28rpx", "color": "#999999" } }, "@TRANSITION": { "refresh-icon": { "duration": 500, "property": "transform" } } };
  var MAX_CACHE_DATA = 100;
  var MAX_CACHE_PAGE = 3;
  var newsData = {
    data0: {
      "datetime": "40\u5206\u949F\u524D",
      "article_type": 0,
      "title": "uni-app\u884C\u4E1A\u5CF0\u4F1A\u9891\u9891\u4EAE\u76F8\uFF0C\u5F00\u53D1\u8005\u53CD\u54CD\u70ED\u70C8!",
      "source": "DCloud",
      "comment_count": 639
    },
    data1: {
      "datetime": "\u4E00\u5929\u524D",
      "article_type": 1,
      "title": "DCloud\u5B8C\u6210B2\u8F6E\u878D\u8D44\uFF0Cuni-app\u9707\u64BC\u53D1\u5E03!",
      "image_url": "https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao-small.jpg",
      "source": "DCloud",
      "comment_count": 11395
    },
    data2: {
      "datetime": "\u4E00\u5929\u524D",
      "article_type": 2,
      "title": "\u4E2D\u56FD\u6280\u672F\u754C\u5C0F\u5947\u8FF9\uFF1AHBuilder\u5F00\u53D1\u8005\u7A81\u7834200\u4E07",
      "image_url": "https://web-assets.dcloud.net.cn/unidoc/zh/muwu-samll.jpg",
      "source": "DCloud",
      "comment_count": 11395
    },
    data3: {
      "article_type": 3,
      "image_list": [{
        "url": "https://web-assets.dcloud.net.cn/unidoc/zh/cbd%20-small.jpg",
        "width": 563,
        "height": 316
      }, {
        "url": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b4cd3000-517d-11eb-a16f-5b3e54966275.jpg",
        "width": 641,
        "height": 360
      }, {
        "url": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b7c7f970-517d-11eb-97b7-0dc4655d6e68.jpg",
        "width": 640,
        "height": 360
      }],
      "datetime": "5\u5206\u949F\u524D",
      "title": "uni-app \u652F\u6301\u4F7F\u7528 npm \u5B89\u88C5\u7B2C\u4E09\u65B9\u5305\uFF0C\u751F\u6001\u66F4\u8D8B\u4E30\u5BCC",
      "source": "DCloud",
      "comment_count": 11
    },
    data4: {
      "datetime": "2\u5C0F\u65F6\u524D",
      "article_type": 4,
      "title": "uni-app \u652F\u6301\u539F\u751F\u5C0F\u7A0B\u5E8F\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u66F4\u5F00\u653E\u3001\u66F4\u81EA\u7531",
      "image_url": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b2e201d0-517d-11eb-8a36-ebb87efcf8c0.jpg",
      "source": "DCloud",
      "comment_count": 69
    }
  };
  var _sfc_main = {
    components: {
      mediaItem
    },
    data() {
      return {
        newsList: [],
        cacheTab: [],
        tabIndex: 0,
        tabBars: [{
          name: "\u5173\u6CE8",
          id: "guanzhu"
        }, {
          name: "\u63A8\u8350",
          id: "tuijian"
        }, {
          name: "\u4F53\u80B2",
          id: "tiyu"
        }, {
          name: "\u70ED\u70B9",
          id: "redian"
        }, {
          name: "\u8D22\u7ECF",
          id: "caijing"
        }, {
          name: "\u5A31\u4E50",
          id: "yule"
        }, {
          name: "\u519B\u4E8B",
          id: "junshi"
        }, {
          name: "\u5386\u53F2",
          id: "lishi"
        }, {
          name: "\u672C\u5730",
          id: "bendi"
        }],
        scrollInto: "",
        showTips: false,
        navigateFlag: false,
        pulling: false,
        refreshIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg=="
      };
    },
    onLoad() {
      setTimeout(() => {
        this.tabBars.forEach((tabBar) => {
          this.newsList.push({
            data: [],
            isLoading: false,
            refreshText: "",
            loadingText: "\u52A0\u8F7D\u66F4\u591A..."
          });
        });
        this.getList(0);
      }, 350);
    },
    methods: {
      getList(index) {
        let activeTab = this.newsList[index];
        let list = [];
        for (let i = 1; i <= 10; i++) {
          let item = Object.assign({}, newsData["data" + Math.floor(Math.random() * 5)]);
          item.id = this.newGuid();
          list.push(item);
        }
        activeTab.data = activeTab.data.concat(list);
      },
      goDetail(e) {
        if (this.navigateFlag) {
          return;
        }
        this.navigateFlag = true;
        uni.navigateTo({
          url: "./detail/detail?title=" + e.title
        });
        setTimeout(() => {
          this.navigateFlag = false;
        }, 200);
      },
      close(index1, index2) {
        uni.showModal({
          content: "\u662F\u5426\u5220\u9664\u672C\u6761\u4FE1\u606F\uFF1F",
          success: (res) => {
            if (res.confirm) {
              this.newsList[index1].data.splice(index2, 1);
            }
          }
        });
      },
      loadMore(e) {
        setTimeout(() => {
          this.getList(this.tabIndex);
        }, 500);
      },
      ontabtap(e) {
        let index = e.target.dataset.current || e.currentTarget.dataset.current;
        this.switchTab(index);
      },
      ontabchange(e) {
        let index = e.target.current || e.detail.current;
        this.switchTab(index);
      },
      switchTab(index) {
        if (this.newsList[index].data.length === 0) {
          this.getList(index);
        }
        if (this.tabIndex === index) {
          return;
        }
        if (this.newsList[this.tabIndex].data.length > MAX_CACHE_DATA) {
          let isExist = this.cacheTab.indexOf(this.tabIndex);
          if (isExist < 0) {
            this.cacheTab.push(this.tabIndex);
          }
        }
        this.tabIndex = index;
        this.scrollInto = this.tabBars[index].id;
        if (this.cacheTab.length > MAX_CACHE_PAGE) {
          let cacheIndex = this.cacheTab[0];
          this.clearTabData(cacheIndex);
          this.cacheTab.splice(0, 1);
        }
      },
      clearTabData(e) {
        this.newsList[e].data.length = 0;
        this.newsList[e].loadingText = "\u52A0\u8F7D\u66F4\u591A...";
      },
      refreshData() {
      },
      onrefresh(e) {
        var tab = this.newsList[this.tabIndex];
        if (!tab.refreshFlag) {
          return;
        }
        tab.refreshing = true;
        tab.refreshText = "\u6B63\u5728\u5237\u65B0...";
        setTimeout(() => {
          this.refreshData();
          this.pulling = true;
          tab.refreshing = false;
          tab.refreshFlag = false;
          tab.refreshText = "\u5DF2\u5237\u65B0";
          setTimeout(() => {
            this.pulling = false;
          }, 500);
        }, 2e3);
      },
      onpullingdown(e) {
        var tab = this.newsList[this.tabIndex];
        if (tab.refreshing || this.pulling) {
          return;
        }
        if (Math.abs(e.pullingDistance) > Math.abs(e.viewHeight)) {
          tab.refreshFlag = true;
          tab.refreshText = "\u91CA\u653E\u7ACB\u5373\u5237\u65B0";
        } else {
          tab.refreshFlag = false;
          tab.refreshText = "\u4E0B\u62C9\u53EF\u4EE5\u5237\u65B0";
        }
      },
      newGuid() {
        let s4 = function() {
          return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
        };
        return (s4() + s4() + "-" + s4() + "-4" + s4().substr(0, 3) + "-" + s4() + "-" + s4() + s4() + s4()).toUpperCase();
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_media_item = (0, import_vue.resolveComponent)("media-item");
    const _component_swiper_item = (0, import_vue.resolveComponent)("swiper-item");
    const _component_swiper = (0, import_vue.resolveComponent)("swiper");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue.createElementVNode)("view", { class: "tabs" }, [
        (0, import_vue.createElementVNode)("scroll-view", {
          id: "tab-bar",
          class: "scroll-h",
          scrollX: true,
          showScrollbar: false,
          scrollIntoView: $data.scrollInto
        }, [
          ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
            import_vue.Fragment,
            null,
            (0, import_vue.renderList)($data.tabBars, (tab, index) => {
              return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
                key: tab.id,
                class: "uni-tab-item",
                id: tab.id,
                "data-current": index,
                onClick: _cache[0] || (_cache[0] = (...args) => $options.ontabtap && $options.ontabtap(...args))
              }, [
                (0, import_vue.createElementVNode)(
                  "u-text",
                  {
                    class: (0, import_vue.normalizeClass)(["uni-tab-item-title", $data.tabIndex == index ? "uni-tab-item-title-active" : ""])
                  },
                  (0, import_vue.toDisplayString)(tab.name),
                  3
                  /* TEXT, CLASS */
                )
              ], 8, ["id", "data-current"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ], 8, ["scrollIntoView"]),
        (0, import_vue.createElementVNode)("view", { class: "line-h" }),
        (0, import_vue.createVNode)(_component_swiper, {
          current: $data.tabIndex,
          class: "swiper-box",
          style: { "flex": "1" },
          duration: 300,
          onChange: $options.ontabchange
        }, {
          default: (0, import_vue.withCtx)(() => [
            ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
              import_vue.Fragment,
              null,
              (0, import_vue.renderList)($data.newsList, (tab, index1) => {
                return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(
                  _component_swiper_item,
                  {
                    class: "swiper-item",
                    key: index1
                  },
                  {
                    default: (0, import_vue.withCtx)(() => [
                      (0, import_vue.createElementVNode)("list", {
                        class: "scroll-v list",
                        enableBackToTop: "true",
                        scrollY: "",
                        loadmoreoffset: "15",
                        onLoadmore: ($event) => $options.loadMore(index1)
                      }, [
                        (0, import_vue.createElementVNode)("refresh", {
                          class: "refresh",
                          onRefresh: ($event) => $options.onrefresh(index1),
                          onPullingdown: _cache[1] || (_cache[1] = (...args) => $options.onpullingdown && $options.onpullingdown(...args)),
                          display: tab.refreshing ? "show" : "hide"
                        }, [
                          (0, import_vue.createElementVNode)("div", { class: "refresh-view" }, [
                            (0, import_vue.createElementVNode)("u-image", {
                              class: (0, import_vue.normalizeClass)(["refresh-icon", { "refresh-icon-active": tab.refreshFlag }]),
                              src: $data.refreshIcon,
                              style: (0, import_vue.normalizeStyle)({ width: tab.refreshing || $data.pulling ? 0 : "30px" })
                            }, null, 14, ["src"]),
                            tab.refreshing ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("loading-indicator", {
                              key: 0,
                              class: "loading-icon",
                              animating: "true"
                            })) : (0, import_vue.createCommentVNode)("v-if", true),
                            (0, import_vue.createElementVNode)(
                              "u-text",
                              { class: "loading-text" },
                              (0, import_vue.toDisplayString)(tab.refreshText),
                              1
                              /* TEXT */
                            )
                          ])
                        ], 40, ["onRefresh", "display"]),
                        ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                          import_vue.Fragment,
                          null,
                          (0, import_vue.renderList)(tab.data, (newsitem, index2) => {
                            return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("cell", {
                              key: newsitem.id
                            }, [
                              (0, import_vue.createVNode)(_component_media_item, {
                                options: newsitem,
                                onClose: ($event) => $options.close(index1, index2),
                                onClick: ($event) => $options.goDetail(newsitem)
                              }, null, 8, ["options", "onClose", "onClick"])
                            ]);
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        )),
                        tab.isLoading || tab.data.length > 4 ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("cell", {
                          key: 0,
                          class: "loading-more"
                        }, [
                          (0, import_vue.createElementVNode)(
                            "u-text",
                            { class: "loading-more-text" },
                            (0, import_vue.toDisplayString)(tab.loadingText),
                            1
                            /* TEXT */
                          )
                        ])) : (0, import_vue.createCommentVNode)("v-if", true)
                      ], 40, ["onLoadmore"])
                    ]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1024
                  /* DYNAMIC_SLOTS */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["current", "onChange"])
      ])
    ]);
  }
  var tabbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/workspace/HelloUniApp/pages/template/tabbar/tabbar.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/template/tabbar/tabbar";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    tabbar.mpType = "page";
    const app = Vue.createPageApp(tabbar, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...tabbar.styles || []]));
    app.mount("#root");
  }
})();
