<template>
    <div id="app">
        <div class="item">
            <button @click="msg">msg</button>
            <button @click="tips">tips</button>
            <button @click="loading">loading</button>
            <button @click="alert">alert</button>
        </div>
        <div class="item">
            账号：<input type="text" id="name" name="" v-model.trim="name" placeholder="请输入账号">
        </div>
        <div class="item">
            密码：<input type="password" id="password" v-model.trim="password" name="" placeholder="请输入密码">
        </div>
        <div class="api">
            API:
            <div class="pat20">
                <p><strong>option</strong>: 默认参数在不同方法中使用不一样</p>
                <p>
                    <pre>
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
                    </pre>
                </p>
                <p>
                    <strong>skin</strong>: 'white' & 'black' 目前仅支持两个皮肤，其他的可以自己扩展，默认'white'
                </p>
                <p>
                    <strong>time</strong>: ms 默认'1500ms'
                </p>
                <p>
                    <strong>maxWidth</strong>: 最大宽度 默认'280px'
                </p>
                <p>
                    <strong>btn</strong>: 按钮内容 默认'确定''
                </p>
                <p>
                    <strong>content</strong>: 内容 默认'无内容'
                </p>
                <p>
                    <strong>yes</strong>: 回调方法 默认为'空函数'
                </p>
                <p>
                    <strong>success</strong>: 弹窗打开后执行 默认为'空函数'
                </p>
                <p>
                    <strong>selector</strong>: 锚点，只支持css选择器 默认为'body'
                </p>
                <p>
                    <strong>tips</strong>: 锚点位置，1、2、3、4分别是上、由、下、左 默认'1'
                </p>
                <p>
                    <strong>zIndex</strong>: 层级 默认'999'
                </p>
                <p>
                    <strong>mask</strong>: 遮罩层 默认'false'
                </p>
            </div>
            <div class="pat20">
                <p><strong>methods</strong>: 方法的参数调用请参照option</p>
                <p>
                    <strong>msg</strong>: msg(content = '无内容', {time = 2000, maxWidth = maxWidth, yes = () => {}} = {})
                </p>
                <p>
                    <strong>alert</strong>: alert({title = '信息', content = '无内容', btn = '确认', maxWidth = maxWidth, mask = !0, yes = () => this.close(), success = () => {}} = {})
                </p>
                <p>
                    <strong>tips</strong>: tips(content = '无内容', selector = 'body', {tips = 1, time = 1500} = {})
                </p>
                <p>
                    <strong>loading</strong>: loading(mask = !1)
                </p>
                <p>
                    <strong>close</strong>: close(layero)
                </p>
                <p>
                    <strong>apply</strong>: apply(option)
                </p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'App',
    data(){
        return {
            name: '',
            password: '',
            keypassword: ''
        }
    },
    methods: {
        msg(){
            this.$layer.msg('请输入账号',{icon: 1, time: 1e3})
        },
        tips(){
            this.$layer.tips('请输入账号','#name')
        },
        loading(){
            let layero = this.$layer.loading()
            setTimeout(() => {
                this.$layer.close(layero)
            },1500)
        },
        alert(){
            let that = this
            if(!that.name){
                this.$layer.tips('请输入账号','#name',{tips: 2, time: 1500})
                return !1
            }
            if(!that.password){
                this.$layer.tips('请输入密码','#password',{tips: 2, time: 1500})
                return !1
            }
            this.$layer.alert({
                title: '信息验证',
                content: '<div class="item"><p>口令：</p><input type="password" id="keypassword" name="" placeholder="请输入口令"></div>',
                maxWidth: 360,
                yes(layero){
                    let keypassword = document.querySelector('#keypassword').value.trim()
                    if(keypassword != that.keypassword){
                        that.$layer.tips('请输入正确的口令','#keypassword',{tips: 2, time: 1500})
                        return !1
                    }
                    that.$layer.close(layero)
                    let layero2 = this.$layer.loading()
                    setTimeout(() => {
                        this.$layer.close(layero2)
                        this.$layer.msg('通过，页面即将跳转...',{time: 1e3, yes(){
                            alert('跳转失败,O(∩_∩)O哈哈~')
                        }})
                    },1500)
                },
                success(layero){
                    that.keypassword = '5201314'
                    this.$layer.msg('口令：' + that.keypassword)
                }
            })
        },
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
    width: 400px;
    margin: 20px auto;
    text-align: left;
    outline: none;
}
.item{margin-bottom: 10px;}
.api{padding-top: 50px; border-top: 1px dashed #999; margin-top: 60px;}
button{margin-bottom: 10px;}
p{margin: 5px 0;}
.pat20{padding-top: 20px}
input{height: 28px; line-height: 26px; padding: 0; width: 280px; outline: none;}
</style>
