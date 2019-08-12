<template>
  <div>
    <div class="FenLei">
      <HdIndexFenLeiZi
        v-for="(v,i) in arr"
        :key="i"
        :title="v.title"
        :imgurl="v.imgurl"
        :url="v.url"
      ></HdIndexFenLeiZi>
    </div>
    <div class="FenLei">
      <HdIndexFenLeiZi
        v-for="(v,i) in arrs"
        :key="i"
        :title="v.title"
        :imgurl="v.imgurl"
        :url="v.url"
      ></HdIndexFenLeiZi>
    </div>
  </div>
</template>

<script>
import HdIndexFenLeiZi from "./HdIndexFenLeiZi";
export default {
  components: {
    HdIndexFenLeiZi
  },
  data() {
    return {
      arr: [
        { imgurl: "../../../static/img/1.webp", title: "借钱", url: "/hdloans" },
        { imgurl: "../../../static/img/2.webp", title: "银行精选", url: "/hdculling" },
        { imgurl: "../../../static/img/3.webp", title: "信用卡", url: "/df" },
        { imgurl: "../../../static/img/4.webp", title: "免费领", url: "/hdinsurancefree" }
      ],
      arrs: [
        { imgurl: "../../../static/img/5.webp", title: "我的客服", url: "/customerservice" },
        { imgurl: "../../../static/img/6.webp", title: "分期商城", url: "/hdamortize" },
        { imgurl: "../../../static/img/7.webp", title: "保险优选", url: "/hdinsurance" },
        { imgurl: "../../../static/img/8.webp", title: "有品商城", url: "/df" }
      ]
    };
  }
};
</script>
<style scoped>
.FenLei {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 0.3rem;
  padding-bottom: 0.18rem;
  justify-content: space-between;
}
</style>
