<template>
  <div class="index-article-item">
    <div class="index-item-image">
      <img src="../assets/itemtest.jpg" />
    </div>
    <div class="index-item-background"></div>
    <div class="index-item-info">
      <h1>{{title}}</h1>
      <h3>{{subtitle}}</h3>
      <div class="line"></div>
      <div class="attr-info">
        <span style="width: 25%"><Icon type="md-apps" />{{category}}</span>
        <span style="width: 40%"><Icon type="md-pricetag" />{{tag}}</span>
        <span style="width: 25%"><Icon type="ios-calendar" />{{date}}</span>
      </div>
      <div class="brief-intro">{{brief}}</div>
      <div class="read-more">
        <Button v-bind:to="'/artcile/'+id" type="success">查看更多</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'indexItem',
  props: {
    id: {
      type: Number,
      default: 1
    },
    title: {
      type: String,
      default: 'Vue.js初次使用经验谈'
    },
    subtitle: {
      type: String,
      default: '论如何在组件中使用props传递数值'
    },
    date: {
      type: String,
      default: '2018-09-22'
    },
    category: {
      type: String,
      default: '前端'
    },
    tag: {
      type: String,
      default: 'vue,html,css'
    },
    brief: {
      type: String,
      default: 'Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。\n' +
        '\n' +
        '如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。\n' +
        '\n' +
        '如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架。'
    }
  },
  data () {
    return {
      imgPath: ''
    }
  }
}
</script>

<style scoped>
.index-article-item {
  width: 70%;
  height: 400px;
  margin: 1rem auto;
  border: 1px solid #f1e9fd;
  border-radius: 10px;
  position: relative;
}
.index-item-image {
  float: left;
  height: 100%;
  width: 60%;
  border-radius: 10px 0 0 10px;
}
.index-item-image img {
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
}
.index-item-background {
  height: 100%;
  width: auto;
  background: url("../assets/itemback.jpg") center no-repeat;
  background-size: cover;
  border-radius: 0 10px 10px 0;
}
.index-item-info {
  position: absolute;
  background: #f9ffff;
  right: 0;
  top: 10px;
  bottom: 10px;
  left: 50%;
  border-radius: 10px 0 0 10px;
  box-shadow: -2px 0 0 #f9ffff;
  transition: box-shadow 0.3s ease-in-out;
}
.index-item-info:hover {
  box-shadow: -2px 0 5px #f9ffff;
  transition: box-shadow 0.3s ease-in-out;
}
.index-item-info h1 {
  text-align: center;
  padding: 10px 10px 5px;
  font-size: 1.8rem;
  font-weight: normal;
  text-shadow: 1px 1px 1px;
}
.index-item-info h3 {
  text-align: right;
  padding-right: 10px;
  font-size: 1.2rem;
  font-weight: normal;
}
.index-item-info .line {
  height: 1px;
  background-color: gray;
  margin: 5px 0 10px;
}
.index-item-info .attr-info span {
  display: inline-block;
  font-size: 0.9rem;
  opacity: 0.5;
}
.ivu-icon {
  vertical-align: baseline;
}
.brief-intro {
  margin: 10px 20px;
  text-align: left;
  font-size: 0.8rem;
}
.read-more {
  margin-top: 30px;
}
</style>
