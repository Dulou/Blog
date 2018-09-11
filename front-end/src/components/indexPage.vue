<template>
  <div id="indexPage">
    <div class="index-background">
      <h1 class="index-title">{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'indexPage',
  data () {
    return {
      msg: '莫负平生意，快走踏清秋',
      info: '出自李贺《莫愁曲》和《马诗（其五）》'
    }
  }
}
</script>

<style scoped>
.index-background {
  padding: 10rem 0 10rem 0;
  background-size: cover;
  background: url("../assets/index.jpg") center;
  margin-top: -3.2rem;
}
.index-title {
  font-size: 4rem;
  color: white;
  font-family: '华文楷体', serif;
  text-shadow: 1px 1px 2px;
}
</style>
