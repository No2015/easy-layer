<template>
    <div :class="classname">
        <div v-html="content"></div>
        <span class="layer-tips-arr"></span>
    </div>
</template>

<script>
export default {
    name: 'Tips',
    props: {
        options: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    created(){
        setTimeout(() => {
            this.$layer.close(this.layero)
        }, this.time)
    },
    mounted(){
        this.init()
    },
    data () {
        return {
            content: this.options.content,
            selector: this.options.selector,
            tips: this.options.tips,
            time: this.options.time,
            layero: this.options.layero,
            zIndex: this.options.zIndex,
            maxWidth: this.options.maxWidth,
            classname: 'layer-dialog layer-tips layer-dialog-' + this.options.skin + ' layer-tips-' + this.options.tips
        }
    },
    methods: {
        init(){
            let $el = this.$el
            let o = $el.getBoundingClientRect()
            let $selector = document.querySelector(this.selector)
            if(!$selector){
                console.log('找不到tips元素 >> :',this.selector)
                return !1
            }
            let s = $selector.getBoundingClientRect()
            let left = 0, top = 0
            switch(this.tips){
                case 2 : left = s.left + s.width + 6, top = s.top + s.height / 2 - o.height/2; break
                case 4 : left = s.left - o.width - 6, top = s.top + s.height / 2 - o.height/2; break
                case 3 : left = s.left + s.width/2 - o.width/2, top = s.top + s.height + 6; break
                default : left = s.left + s.width/2 - o.width/2, top = s.top - s.height - 6
            }
            $el.style.left = left + 'px'
            $el.style.top = top + 'px'
            $el.style.zIndex = this.zIndex
            $el.style.maxWidth = this.maxWidth + 'px'
        }    	
    }
}
</script>
