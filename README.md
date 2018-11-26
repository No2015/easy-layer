# easy-layer

> 一个简单的vue-layer组件

## 功能

msg、
tips、
loading、
alert

## 使用
引入
```
import layer from 'easy-layer'

Vue.use(layer)
```
基本参数
```
options = {
    skin: 'white',
    time: 1500,
    maxWidth: 280,
    btn: '确定',
    content: '无内容',
    title: '信息',
    yes(){},
    success(){},
    selector: 'body',
    tips: 1,
    zIndex: 999,
    mask: !1
}
```
基本功能
```
this.$layer.msg(content, {
	time: time,
	maxWidth: maxWidth,
	yes(){}
})
this.$layer.tips(content, selector {
	tips: tips,
	time: time
})
this.$layer.loading(mask = Boolean)
this.$layer.alert({
	title: title,
	content: content,
	btn: btn,
	maxWidth: maxWidth,
	mask: Boolean,
	yes(layero){},
	success(layero){}
})
```
辅助功能
```
let layero = this.$layer.loading()
this.$layer.close(layero)

let option = {skin: skin}
this.$layer.apply(option)
```
辅助功能说明：

close方法参数为需要关闭的弹窗

apply方法参数为需要修改的参数，比如皮肤修改，目前仅支持两种皮肤，white、black

其他详细，请参考源码


## 1.0.12 新增
```
this.$layer.msg(msg,{icon: icon})
```
其中，icon的取值范围为{1,7}，分别代表不同的提示icon，默认是0，不带icon


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```