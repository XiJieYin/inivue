<template>
    <div class="layout">
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">                
                <Menu active-name="1-1" theme="dark" width="auto" :class="menuitemClasses">
                  <MenuItem name="1-1" to="goods">
                    <Icon type="logo-buffer"/>
                    <span>{{goods}}</span>
                  </MenuItem>
                  <MenuItem name="1-2" to="shoppingcar">
                      <Icon type="ios-cart-outline"/>
                      <span>{{shoppingcar}}</span>
                  </MenuItem>
                  <MenuItem name="1-3" to="mine">
                      <Icon type="ios-contact"/>
                      <span>{{mine}}</span>
                  </MenuItem>
                </Menu>
                <Icon @click.native="collapsedSider" style="width: 100%;cursor:pointer;text-align:center;" :type="turnRightOrLeft" size="24"/>
            </Sider>
            <Layout>
              <Header :style="{padding: 0}" class="layout-header-bar">
              </Header>
              <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                <router-view @parentFieldChange="updateField($event)" :mine="mine" />
              </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                isCollapsed: false,
                goods:'商品',
                shoppingcar:'购物车',
                mine:'我的'
            }
        },
        computed: {
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            },
            turnRightOrLeft(){
              return this.isCollapsed? 'ios-arrow-forward':'ios-arrow-back'
            }
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            },
            updateField(mine){
              this.mine = mine;
            }
        }
    }
</script>
<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>