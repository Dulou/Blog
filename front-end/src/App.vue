<template>
  <div id="app">
    <!--<vue-canvas-next el="#page"></vue-canvas-next>-->
    <Layout id="page" :style="{minHeight: '100vh'}">
      <Button style="position: fixed; top: 35rem; z-index: 100" @click="showAside" type="primary">Open</Button>
      <Sider ref="side1" width="250" hide-trigger collapsible :collapsed-width="0" v-model="isCollapsed">
        <sider-content :ifCollapsed="isCollapsed" />
      </Sider>
      <Layout>
        <Header>
          <nav-menu/>
        </Header>
        <Content>
          <router-view/>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import NavMenu from '@/components/iview-nav'
import SiderContent from '@/components/SiderContent'

export default {
  name: 'App',
  components: {
    NavMenu,
    SiderContent
  },
  data () {
    return {
      isCollapsed: true
    }
  },
  methods: {
    showAside () {
      this.$refs.side1.toggleCollapse()
      console.log(this.isCollapsed)
    }
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.ivu-layout {
  background: none;
}
.ivu-layout-header {
  padding: 0;
  height: 3.2rem;
  line-height: 3.2rem;
  background: none;
}
.ivu-layout-sider {
  background: none;
}
</style>
