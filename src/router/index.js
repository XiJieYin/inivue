import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Goods from '@/components/Goods'
import Mine from '@/components/Mine'
import ShoppingCar from '@/components/ShoppingCar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[{
        path: '/goods',
        name: 'Goods',
        component: Goods
      },{
        path: '/mine',
        name: 'Mine',
        component: Mine
      },{
        path: '/shoppingcar',
        name: 'ShoppingCar',
        component: ShoppingCar
      }]
    },{
      path:'*',
      name:'404',
      component:HelloWorld
    }
  ],
  mode:'history'
})
