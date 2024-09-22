<template>
  <view class="page">
    <view>第一层</view>
	<view>第二层</view>
	<view>第三层</view>
	<text>hhhhh</text>
	<input v-model="num" placeholder="请输入数字"/>
	<input @input= "inputchange($event,str)" type="number" placeholder="请输入数字"/>
	<button @click="btnClick" size="mini" type="primary">点击</button>
	<view class="image-list">
	            <view class="image-item" v-for="(item,index) in array" :key="index">
	                <view class="image-content">
	                    <image style="width: 100%; height: 200px; background-color: #eeeeee;" :mode="item.mode" v-bind:src="src"
	                        @error="imageError"></image>
	                </view>
	                <view class="image-title">{{item.text}}hhh</view>
	            </view>
	        </view>
  </view>
</template>

<script lang="uts">
  type Obj = {
    str : string,
    num : number,
    arr : number[]
  }
  export default {
    data() {
      return {
        str: 'default str',
		num: 0,
		     array: [{
		                mode: 'scaleToFill',
		                text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
		            }, {
		                mode: 'aspectFit',
		                text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
		            }, {
		                mode: 'aspectFill',
		                text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
		            }, {
		                mode: 'top',
		                text: 'top：不缩放图片，只显示图片的顶部区域'
		            }, {
		                mode: 'bottom',
		                text: 'bottom：不缩放图片，只显示图片的底部区域'
		            }, {
		                mode: 'center',
		                text: 'center：不缩放图片，只显示图片的中间区域'
		            }, {
		                mode: 'left',
		                text: 'left：不缩放图片，只显示图片的左边区域'
		            }, {
		                mode: 'right',
		                text: 'right：不缩放图片，只显示图片的右边边区域'
		            }, {
		                mode: 'top left',
		                text: 'top left：不缩放图片，只显示图片的左上边区域'
		            }, {
		                mode: 'top right',
		                text: 'top right：不缩放图片，只显示图片的右上边区域'
		            }, {
		                mode: 'bottom left',
		                text: 'bottom left：不缩放图片，只显示图片的左下边区域'
		            }, {
		                mode: 'bottom right',
		                text: 'bottom right：不缩放图片，只显示图片的右下边区域'
		            }],
		            src: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg'
      }
    },
    methods: {
     inputchange(e,str){
		console.log('dddd',e,str)
		this.num=e.detail.value
	 },
	 //按钮点击事件
	 btnClick(){
		 console.log('点击按钮',this.src)
         // 替换src地址
          this.src="/static/cat.webp"
	 },
	  //图片报错事件e
	 imageError(){
		console.error('image发生error事件，携带值为' + e.detail.errMsg)
	 }
    },
  }
</script>
<style>
	input {
		border:1px solid red;
	}
</style>

