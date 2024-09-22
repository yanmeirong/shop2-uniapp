"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      str: "default str",
      num: 0,
      array: [{
        mode: "scaleToFill",
        text: "scaleToFill：不保持纵横比缩放图片，使图片完全适应"
      }, {
        mode: "aspectFit",
        text: "aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来"
      }, {
        mode: "aspectFill",
        text: "aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来"
      }, {
        mode: "top",
        text: "top：不缩放图片，只显示图片的顶部区域"
      }, {
        mode: "bottom",
        text: "bottom：不缩放图片，只显示图片的底部区域"
      }, {
        mode: "center",
        text: "center：不缩放图片，只显示图片的中间区域"
      }, {
        mode: "left",
        text: "left：不缩放图片，只显示图片的左边区域"
      }, {
        mode: "right",
        text: "right：不缩放图片，只显示图片的右边边区域"
      }, {
        mode: "top left",
        text: "top left：不缩放图片，只显示图片的左上边区域"
      }, {
        mode: "top right",
        text: "top right：不缩放图片，只显示图片的右上边区域"
      }, {
        mode: "bottom left",
        text: "bottom left：不缩放图片，只显示图片的左下边区域"
      }, {
        mode: "bottom right",
        text: "bottom right：不缩放图片，只显示图片的右下边区域"
      }],
      src: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg"
    };
  },
  methods: {
    inputchange(e2, str) {
      console.log("dddd", e2, str);
      this.num = e2.detail.value;
    },
    //按钮点击事件
    btnClick() {
      console.log("点击按钮", this.src);
      this.src = "/static/cat.webp";
    },
    //图片报错事件e
    imageError() {
      console.error("image发生error事件，携带值为" + e.detail.errMsg);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.num,
    b: common_vendor.o(($event) => $data.num = $event.detail.value),
    c: common_vendor.o(($event) => $options.inputchange($event, $data.str)),
    d: common_vendor.o((...args) => $options.btnClick && $options.btnClick(...args)),
    e: common_vendor.f($data.array, (item, index, i0) => {
      return {
        a: item.mode,
        b: common_vendor.o((...args) => $options.imageError && $options.imageError(...args), index),
        c: common_vendor.t(item.text),
        d: index
      };
    }),
    f: $data.src
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
