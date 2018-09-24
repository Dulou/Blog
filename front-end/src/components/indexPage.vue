<template>
  <div id="indexPage">
    <div class="index-background">
      <div style="position: relative; top: -2rem">
        <span class="index-title index-title-top">{{ msg1 }}</span>
        <span class="index-title">{{ msg2 }}</span>
        <h2 class="index-info"> {{info}} </h2>
      </div>
    </div>
    <div class="index-current-article">
      最近文章
    </div>
    <div>
      <index-item></index-item>
      <index-item></index-item>
    </div>
    <div style="height: 1000px"></div>
  </div>
</template>

<script>
import indexItem from '@/components/indexItem'
export default {
  name: 'indexPage',
  components: {
    indexItem
  },
  data () {
    return {
      msg1: '莫负平生意',
      msg2: '快走踏清秋',
      info: '—— 出自李贺《莫愁曲》和《马诗（其五）》'
    }
  }
}
</script>

<style scoped>
.index-background {
  padding: 6rem 0 3rem 0;
  background: url("../assets/index.jpg") no-repeat center;
  background-size: cover;
  margin-top: -3.2rem;
}
.index-title {
  font-size: 3rem;
  /*color: #15c787;*/
  color: greenyellow;
  font-family: '华文仿宋',sans-serif;
  writing-mode: vertical-lr;
  line-height: 4rem;
  height: 20rem;
  margin: 0 auto;
  font-weight: bold;
  text-shadow: 1px -1px 1px #516e41;
}
.index-title-top {
  margin-bottom: 2rem
}
.index-info {
  padding-left: 20rem;
  color: yellow;
}
.index-current-article {
  position: relative;
  margin: 1.5rem 0;
  font-size: 1.5rem;
  letter-spacing: 12px;
  color: #4c82f9;
  height: 3.8rem;
  line-height: 3.8rem;
}
.index-current-article:before, .index-current-article:after {
  content: "";
  position: absolute;
  background-color: #0aa344;
  height: 2px;
  width: 7%;
  left: 46%;
}
.index-current-article:after {
  bottom: 0;
}
.index-current-article:before {
  top: 0;
}
</style>
