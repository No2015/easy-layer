<template>
	<div :class="classname">
        <div v-show="mask" class="layer-dialog-mask"></div>
        <div class="layer-alert-wrap">
            <div class="layer-alert-head" @mousedown.prevent.stop="down">
                <span v-html="title"></span>
                <a href="javascript:;" class="layer-alert-close" @click="close"></a>
            </div>
            <div class="layer-alert-cont">
                <div v-html="content"></div>
            </div>
            <div class="layer-alert-foot">
                <a href="javascript:;" class="layer-alert-btn" @click="yes(layero)">{{ btn }}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Alert',
    props: {
        options: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    mounted(){
        this.init()
    },
    data () {
        return {
            title: this.options.title,
            content: this.options.content,
            btn: this.options.btn,
            yes: this.options.yes,
            maxWidth: this.options.maxWidth,
            mask: this.options.mask,
            layero: this.options.layero,
            zIndex: this.options.zIndex,
            success: this.options.success,
            classname: 'layer-dialog layer-alert layer-dialog-anima layer-dialog-' + this.options.skin,
            grip: !1,
            page: {
                x: 0,
                y: 0,
                w: 0,
                h: 0
            },
            layer: {
                x: 0,
                y: 0
            },
        }
    },
    methods: {
    	init(){
            let that = this
            let $el = that.$el
            $el.style.maxWidth = this.maxWidth + 'px'
            that.rect = $el.getBoundingClientRect()
            that.resize($el)
            window.onresize = () => {
                that.resize($el)
            }
            $el.style.zIndex = this.zIndex
            this.success(this.layero)
        },
        down(event){
            if(event.target.classList.contains('layer-alert-close') || event.button != 0){
                return !1
            }
            let that = this
            that.page.x = event.pageX
            that.page.y = event.pageY            
            that.layer.x = event.x - event.offsetX - 1
            that.layer.y = event.y - event.offsetY - 1
            that.grip = !0
            document.addEventListener('mousemove', that.move, false)
            document.addEventListener('mouseup', that.up, false)
        },
        move(event){
            let that = this
            if(that.grip){
                let $el = that.$el
                let x = event.pageX - that.page.x + that.layer.x
                let y = event.pageY - that.page.y + that.layer.y
                x = x < 0 ? 0 : (x > that.page.w - that.rect.width ? that.page.w - that.rect.width : x)
                y = y < 0 ? 0 : (y > that.page.h - that.rect.height ? that.page.h - that.rect.height : y)
                $el.style.left = x + 'px'
                $el.style.top = y + 'px'
            }            
        },
        up(){
            let that = this
            document.removeEventListener('mousemove',that.move)
            document.removeEventListener('mouseup',that.up)
            that.grip = !1
        },
        close(){
            this.$layer.close(this.layero)
        },
        resize(){
            let that = this
            let $el = that.$el
            that.page.w = document.documentElement.clientWidth ||  document.body.clientWidth
            that.page.h = document.documentElement.clientHeight || document.body.clientHeight
            $el.style.left = parseInt(that.page.w/2 - that.rect.width/2) + 'px'
            $el.style.top = parseInt(that.page.h/2 - that.rect.height/2) + 'px'
        }
    }
}
</script>
