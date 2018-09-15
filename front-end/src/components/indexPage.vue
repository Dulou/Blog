<template>
  <div id="indexPage">
    <div class="index-background">
      <div style="position: relative; top: -2rem">
        <span class="index-title index-title-top">{{ msg1 }}</span>
        <span class="index-title">{{ msg2 }}</span>
        <h2 class="index-info"> {{info}} </h2>
      </div>
    </div>
    <div style="height: 1000px"></div>
  </div>
</template>

<script>
export default {
  name: 'indexPage',
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
</style>
