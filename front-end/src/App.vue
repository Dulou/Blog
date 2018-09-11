<template>
  <div id="app">
    <Layout :style="{minHeight: '100vh'}">
      <Button style="position: fixed; top: 20rem; z-index: 100" @click="showAside" type="primary">Open</Button>
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="0" v-model="isCollapsed">
        <sider-content />
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
      isCollapsed: false
    }
  },
  methods: {
    showAside () {
      this.$refs.side1.toggleCollapse()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
