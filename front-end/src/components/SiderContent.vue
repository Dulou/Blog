<template>
  <div class="sider-content">
    <div class="sider-up-colorblock"></div>
    <div :class="siderclass">
      <div class="sider-avatar">
        <img src="../assets/testavatar.jpeg" />
      </div>
      <h1 class="margin-top">{{name}}</h1>
      <h3 class="normal-weight margin-bottom"> {{individualSig}} </h3>
      <div class="post-info-disp margin-bottom no-background">
        <router-link v-for="info in postInfo" :key="info" :to="info.path" class="post-info-item">
          <span class="post-info-item-num">{{info.num}}</span>
          <span class="post-info-item-name">{{info.name}}</span>
        </router-link>
      </div>
      <div class="sider-icon-group margin-top no-background">
        <a v-for="icon in iconGroup" :key="icon.name" :href="icon.path" target="_blank">
          <v-icon :name="icon.name" :style="icon.style" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/brands/github'
import 'vue-awesome/icons/brands/facebook'
import 'vue-awesome/icons/brands/twitter'
import 'vue-awesome/icons/brands/weibo'
export default {
  name: 'SiderContent',
  components: {
    'v-icon': Icon
  },
  props: {
    ifCollapsed: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      default: 'fengdulou'
    },
    individualSig: {
      type: String,
      default: '混吃等死的大四老腊肉'
    },
    postInfo: {
      type: Array,
      default: () => [
        {'name': '文章', 'num': 122, 'path': '/articles'},
        {'name': '分类', 'num': 12, 'path': '/categories'},
        {'name': '标签', 'num': 49, 'path': '/tags'}
      ]
    }
  },
  data () {
    return {
      iconGroup: [
        {
          'name': 'brands/github',
          'path': 'https://github.com',
          'style': 'color: black'
        },
        {
          'name': 'brands/facebook',
          'path': '',
          'style': 'color: #425f9b'
        },
        {
          'name': 'brands/twitter',
          'path': '',
          'style': 'color: #55acee'
        },
        {
          'name': 'brands/weibo',
          'path': '',
          'style': 'color: #d32024'
        }
      ]
    }
  },
  computed: {
    siderclass () {
      return this.ifCollapsed ? '' : 'open-menu'
    }
  }
}
</script>

<style scoped>
/*normal style*/
.no-background {
  background: none;
}
.margin-top {
  margin-top: 1rem;
}
.margin-bottom {
  margin-bottom: 1rem;
}
.normal-weight {
  font-weight: normal;
}
h1, h3, .post-info-disp, .sider-icon-group {
  transform: translateX(-250px);
}
.open-menu h1, .open-menu h3, .open-menu .post-info-disp, .open-menu .sider-icon-group {
  width: 100%;
  height: auto;
  transform: translateX(0);
  transition: transform 0.3s ease-in-out 0.2s;
}
/*background on top*/
.sider-up-colorblock {
  height: 15rem;
  width: 100%;
  background: url("../assets/siderup.jpg") center;
  background-size: cover;
}
/*avatar style*/
.sider-avatar {
  height: 100px;
  width: 40%;
  margin: -50px auto 0;
  border-radius: 50%;
  padding: 3px;
  background: white;
  box-shadow: 0 0 5px;
}
.sider-avatar img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}
.open-menu img {
  transform: rotate(360deg);
  opacity: 1;
  transition: transform 0.3s ease-in-out 0.2s, opacity 0.3s ease-in-out 0.2s;
}
/*post information display*/
.post-info-item {
  display: inline-block;
  border-left: #b5abab 1px solid;
  color: #2c3e50;
  padding: 0 1rem;
}
.post-info-item:first-child {
  border-left: none;
}
.post-info-item-num {
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
  opacity: 0.7;
}
a:hover .post-info-item-num {
  opacity: 1;
}
.post-info-item-name {
  display: block;
  font-size: 0.9rem;
  opacity: 0.8;
  font-weight: bold;
}
/*icon group*/
.fa-icon {
  height: 1.5rem;
  width: auto;
  padding: 0 0.3rem;
}
</style>
<style>
.ivu-layout-sider-children {
  position: fixed;
  width: inherit;
}
</style>
