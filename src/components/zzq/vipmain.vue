<template>
  <div class="vip-main">
    <vipbanner></vipbanner>
    <vipsort></vipsort>
    <viptuijian></viptuijian>
    <vipjifen></vipjifen>
    <viphym></viphym>
    <vipshen></vipshen>
    <viprebo></viprebo>
  </div>
</template>
<script>
import vipbanner from "./vipbanner";
import vipsort from "./vipsort";
import viptuijian from "./viptuijian";
import vipjifen from "./vipjifen";
import viphym from "./viphym";
import vipshen from "./vipshen";
import viprebo from "./viprebo";

export default {
  name: "vipmain",
  data: function() {
		return {}
	},
  components: {
    vipbanner,vipsort,viptuijian,vipjifen,viphym,vipshen,viprebo
  }
};
</script>
<style lang="" scoped>
.vip-main {
  width: 100%;
  position: absolute;
  top: 0.65rem;
  bottom: 0.5rem;
  overflow: auto;
}
</style>
