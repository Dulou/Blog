<template>
  <Menu mode="horizontal"  active-name="1">
    <span class="nav-name"><router-link to="/">Feng</router-link></span>
    <MenuItem name="1" >
      <Icon class="icon-size" type="md-apps" />
      分&nbsp; 类
    </MenuItem>
    <MenuItem name="2" to="/a">
      <Icon class="icon-size" type="md-pricetag" />
      标&nbsp; 签
    </MenuItem>
    <MenuItem name="3">
      <Icon class="icon-size" type="ios-albums" />
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
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 0.8rem;
  font-family: "Times New Roman", Serif;
  text-shadow: -1px 1px 2px #006;
}
.nav-name:first-letter {
  color: #0054ff;
  font-size: 1.8rem;
}
a, a:hover {
  color: inherit;
}
.icon-size {
  font-size: 1rem
}
.ivu-menu-horizontal.ivu-menu-light:after {
  display: none;
}
.ivu-menu-horizontal {
  height: 3.2rem;
  line-height: 3.2rem;
}
.ivu-menu-light {
  background: none
}
.ivu-menu-horizontal.ivu-menu-light:after {
  height: 2px;
  background: #D5D5D5;
  box-shadow: 0 0.001rem 0.001rem gray;
}
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu {
  height: 2.6rem;
  margin-top: 0.6rem;
  line-height: 2.6rem;
  width: 5.5rem;
  padding: 0
}
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu,
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu .ivu-menu-item {
  width: 7rem
}
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal
.ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active,
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover.ivu-menu-light.ivu-menu-horizontal
.ivu-menu-submenu .ivu-menu-drop-list .ivu-menu-item {
  color: #0054ff
}
.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-horizontal .ivu-menu-submenu {
  font-size: 0.9rem;
  font-weight: bold
}
.ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item {
  font-size: 0.9rem !important;
  font-weight: normal;
  margin: 0 auto;
}
</style>
<style>
  .ivu-menu-item-group-title {
    font-weight: normal;
    float: left;
    margin-left: 0.5rem;
  }
</style>
