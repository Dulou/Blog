<template>
  <Menu mode="horizontal"  active-name="1">
    <span class="nav-name">Feng's Home</span>
    <MenuItem name="1" >
      <Icon class="icon-size" type="ios-planet" />
      首&nbsp; 页
    </MenuItem>
    <MenuItem name="2" to="/a">
      <Icon class="icon-size" type="md-pricetag" />
      标&nbsp; 签
    </MenuItem>
    <MenuItem name="3">
      <Icon class="icon-size" type="md-apps" />
      归&nbsp; 档
    </MenuItem>
    <Submenu name="4">
      <template slot="title">
        <Icon class="icon-size" type="ios-home" />
        House
      </template>
      <MenuGroup title="使用">
        <MenuItem name="4-1">新增和启动</MenuItem>
        <MenuItem name="4-2">活跃分析</MenuItem>
        <MenuItem name="4-3">时段分析</MenuItem>
      </MenuGroup>
      <MenuGroup title="留存">
        <MenuItem name="4-4">用户留存</MenuItem>
        <MenuItem name="4-5">流失用户</MenuItem>
      </MenuGroup>
    </Submenu>
  </Menu>
</template>

<script>
export default {
  name: 'iview-nav'
}
</script>

<style scoped>
.nav-name {
  float: left;
  height: 100%;
  line-height: 2.5em;
  font-size: 1.5em;
  margin: 0 1em;
}
.icon-size {
  font-size: 1.5em
}
</style>
<style>
  .ivu-menu-horizontal {
    height: 3.6em;
    line-height: 3.6em;
  }
  .ivu-menu-horizontal.ivu-menu-light:after {
    height: 1px;
    background: #D5D5D5;
    box-shadow: 0 0.001em 0.001em gray;
  }
  .ivu-menu-horizontal .ivu-menu-item, .ivu-menu-horizontal .ivu-menu-submenu {
    font-size: 1em;
    font-weight: bold;
  }
  .ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item
  , .ivu-menu-item-group-title{
    font-size: 1em !important;
  }
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu {
    height: 3.2em;
    margin: 0.4em 0.3em 0 0.3em;
    line-height: 3em;
    width: 8em;
  }
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu {
    width: 10.5em
  }
  .ivu-menu-item-group-title {
    float: left;
    padding-left: 1em;
  }
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active {
    border: #D5D5D5 0.1em solid;
    border-bottom: white 2px solid;
    border-radius: 10% 10% 0 0 / 30% 30%;
  }
</style>
