<template>
	<div>
		<a-three :datas='datas'></a-three>
	</div>
</template>

<script>
	import aThree from '@/components/public/aThree'
	export default {
		name: 'otuijian',
		data() {
			return {
				datas: [
					{
						"id": "相关推荐",
						"content": [{
								"img": "../../../static/img/qinggan/content/1.jpg", //对应图片
								"title": "十点读书", //标题
								"text": "比林徽因大气，比宋美龄有才，她才是中国最有风骨的女先生-度公子", //简要文本介绍
								"loopnumber": "2417.0万", //播放量
								"setnumber": "36" //一共有多少期
							},
							{
								"img": "../../../static/img/qinggan/content/r.jpg", //对应图片
								"title": "蕊希电台", //标题
								"text": "听她的声音，会上瘾", //简要文本介绍
								"loopnumber": "2417.0万", //播放量
								"setnumber": "36" //一共有多少期
							},
							{
								"img": "../../../static/img/qinggan/content/3.png", //对应图片
								"title": "沐语", //标题
								"text": "vol.390回来吧", //简要文本介绍
								"loopnumber": "2417.0万", //播放量
								"setnumber": "36" //一共有多少期
							}
						]
					}
				]

			}
		},
		components: {
			aThree
		}
	}
</script>

<style>
</style>
