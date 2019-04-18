# demo1

> 

## Setup node.js 先安装node.js
```
# download node.js (environment)
1 - [download link] https://nodejs.org/dist/v10.14.2/node-v10.14.2-x64.msi
2 - [setup]
```

#Setup vue.js 再安装vue脚手架
```
# download vue.js
1 - npm install --global vue-cli
```

## Checkup environment  检查环境齐了没
```
# node
 node -v   (cmd/powershell/other)
# npm
 npm -v (cmd/powershell/other)
# vue 
 vue -v (cmd/powershell/other)
```


## Build Setup 创建项目和跑起来，创建项目的时候（init webpack）只选择安装一个 [Router]（路由）就行了，选择Y， 后面的几个如 [Eslint]可以选择N，然后他会自动帮你创建好一个项目然后就跑起来了
``` 
# init webpack
vue init webpack my-project

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##项目结构 注意，所有的组件，都有且只有一个根元素，一般会用 <template></template>
```
build -- 字面意思
config -- 字面意思，可以在里面配置一些配置，比如在index.js里面配置启动的端口，也可以在index.js里面配置跨域等
my-them -- 这个是后面创建的，结合iview，就是一个定制的主题，样式什么都在里面导
node_modules -- 安装的插件，或者组件都在这个里面
*src* -- 主目录，主要是在这个文件夹下面写代码，
    assets -- module assets (processed by webpack)
    components -- 组件，所有的组件都放在这里面
    router -- 路由，路由的配置都在这里面，在index.js里面配置路由,已经有示例了，先导vue,再导router,vue.use(router),照葫芦画瓢
    App.vue 主组件
    main.js 调用了App.vue 主要的js，程序入口可以这么理解
    `
    new Vue({
        el: '#app',
        router,
        components: { App },
        template: '<App/>'
    })
    `
    el指定的元素，可以在外层目录的index.html里面找到只能对应一个
static -- 放一些静态文件
.babelrc -- 可以在里面配置iview的按需导入组件和一些其它组件
.editorconfig -- 一些编辑的配置，像什么字符集什么的
.gitignore -- 如果用了git，这个是用来忽略一些不需要上传的文件
.postcssrc.js -- 配置一些loader啊什么的
index.html -- 程序主文件，一打开就是它
package-look.json -- 内容太多，看不懂
package.json -- 构建脚本和依赖项
```

##配置 resource 可以随便使用http请求
```
1   npm install vue-resource --save-dev
2   使用    
    import Resource from 'vue-resource'
    Vue.use(Resource)
```

## iview 光跑起来太low了，搞个ui玩一玩 [https://www.iviewui.com/docs/guide/install]，注意，全部导入和按需导入不要一起用
```
#Setup 安装
1   npm install iview --save
2   [使用]
    import iView from 'iview';
    import 'iview/dist/styles/iview.css';
    Vue.use(iView);

#按需导入组件
1   npm install babel-plugin-import --save-dev
2   [在.babelrc 文件里面配置]
    {
    "plugins": [["import", {
        "libraryName": "iview",
        "libraryDirectory": "src/components"
    }]]
    }
    [如果已经有配置了]
    把
    ["import", {
        "libraryName": "iview",
        "libraryDirectory": "src/components"
    }]
    加到Plugins对象里面去，我一般选择注释掉，只是要知道有这么个东西，万一要用到
    [使用]
    import 'iview/dist/styles/iview.css'
    import { Button, Table } from 'iview';
    Vue.component('Button', Button);
    Vue.component('Table', Table);

#定制主题
1   npm install iview-theme -g
2   iview-theme init my-theme
3   cd my-theme
4   iview-theme build -o dist/
5   [使用]
    import Vue from 'vue';
    import iView from 'iview';
    import '../my-theme/dist/iview.css';
    Vue.use(iView);

#iview-loader 安装 ，可以使用一些 [i-] 开头的标签，因为如果不用这个loader的话，想使用iview的组件标签，首字母就都是大写的，如<Button>按钮</Button>，但是如果有loader可以写成  <i-button>按钮</i-button>
1   npm install iview-loader --save-dev
2   [在postcssrc.js文件里面配置]
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            
                        }
                    },
                    {
                        loader: 'iview-loader',
                        options: {
                            prefix: false
                        }
                    }
                ]
            }
        ]
    }
end 可以用的标签名：
{
    'i-affix': 'Affix',
    'i-alert': 'Alert',
    'i-anchor': 'Anchor',
    'i-anchor-link': 'AnchorLink',
    'i-auto-complete': 'AutoComplete',
    'i-avatar': 'Avatar',
    'i-back-top': 'BackTop',
    'i-badge': 'Badge',
    'i-breadcrumb': 'Breadcrumb',
    'i-breadcrumb-item': 'BreadcrumbItem',
    'i-button': 'Button',
    'i-button-group': 'ButtonGroup',
    'i-card': 'Card',
    'i-carousel': 'Carousel',
    'i-carousel-item': 'CarouselItem',
    'i-cascader': 'Cascader',
    'i-cell': 'Cell',
    'i-cell-group': 'CellGroup',
    'i-checkbox': 'Checkbox',
    'i-checkbox-group': 'CheckboxGroup',
    'i-circle': 'i-circle',
    'i-col': 'Col',
    'i-collapse': 'Collapse',
    'i-color-picker': 'ColorPicker',
    'i-content': 'Content',
    'i-divider': 'Divider',
    'i-date-picker': 'DatePicker',
    'i-drawer': 'Drawer',
    'i-dropdown': 'Dropdown',
    'i-dropdown-item': 'DropdownItem',
    'i-dropdown-menu': 'DropdownMenu',
    'i-footer': 'Footer',
    'i-form': 'Form',
    'i-form-item': 'FormItem',
    'i-header': 'Header',
    'i-icon': 'Icon',
    'i-input': 'Input',
    'i-input-number': 'InputNumber',
    'i-layout': 'Layout',
    'i-menu': 'Menu',
    'i-menu-group': 'MenuGroup',
    'i-menu-item': 'MenuItem',
    'i-sider': 'Sider',
    'i-submenu': 'Submenu',
    'i-modal': 'Modal',
    'i-option': 'Option',
    'i-option-group': 'OptionGroup',
    'i-page': 'Page',
    'i-panel': 'Panel',
    'i-poptip': 'Poptip',
    'i-progress': 'Progress',
    'i-radio': 'Radio',
    'i-radio-group': 'RadioGroup',
    'i-rate': 'Rate',
    'i-row': 'Row',
    'i-select': 'Select',
    'i-slider': 'Slider',
    'i-spin': 'Spin',
    'i-split': 'Split',
    'i-step': 'Step',
    'i-steps': 'Steps',
    'i-switch': 'i-switch',
    'i-table': 'Table',
    'i-tabs': 'Tabs',
    'i-tab-pane': 'TabPane',
    'i-tag': 'Tag',
    'i-time': 'Time',
    'i-timeline': 'Timeline',
    'i-timeline-item': 'TimelineItem',
    'i-time-picker': 'TimePicker',
    'i-tooltip': 'Tooltip',
    'i-transfer': 'Transfer',
    'i-tree': 'Tree',
    'i-upload': 'Upload'
}
```
##最后说一下，以上版本是以vue -version 2.9.6做的demo， 最新的vue 3.0 安装更方便，还可以直接把ui加进来，然后有专门命令添加插件，非常方便，可以了解一下
##还有一个VueX 并没有加进来，那是一些大型项目才会用到了，如果只是做个小demo了解vue，没必要搞VueX。
##Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 devtools extension，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。 

## 总结
```
index.html -> main.js -> App.vue -> components

1   通过路由的配置调用对应的组件，组件里面嵌套组件，路由下面有子路由，路由调用后，dom构造前后有守卫，最后有钩子
2   父组件可以向子组件传值，用[:field="value"] 在 [<router-view/>] 标签里面，子组件可以在[props]属性里面接传过来的值（最要是指明传过来的值的类型）
3   在父组件里面 [<router-view/>] 里面 [:function="function(data)"], 然后在子组件可以注册方法用[this.$emit(function,data...)]，可以找到绑定了这个[function]方法的是父组件，就能把值传给父组件
4   如果是一些需要计算才能拿到值的，不要把方法写在[methods{}]里面，写在[computed{}]里面
```

### Vue [https://cn.vuejs.org/v2/guide/index.html]
## Router [https://router.vuejs.org/zh/]
## VueX [https://vuex.vuejs.org/zh/]
## 本文git [https://github.com/XiJieYin/XiJieYin.github.io]
