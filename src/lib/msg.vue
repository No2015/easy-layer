<template>
    <div :class="classname">
        <div :class="iconclass" v-html="content"></div>
    </div>
</template>

<script>
export default {
    name: 'Msg',
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
            this.yes(this.layero)
        }, this.time)
    },
    mounted(){
        this.init()
    },
    data () {
        return {
            content: this.options.content,
            time: this.options.time,
            layero: this.options.layero,
            yes: this.options.yes,
            zIndex: this.options.zIndex,
            maxWidth: this.options.maxWidth,
            classname: 'layer-dialog layer-msg layer-dialog-anima layer-dialog-' + this.options.skin,
            iconclass: this.options.icon ? 'layer-icon layer-icon-'+this.options.icon : ''
        }
    },
    methods: {
    	init(){
            let $el = this.$el
            let o = $el.getBoundingClientRect()
            $el.style.marginLeft = -o.width/2 + 'px'
            $el.style.marginTop = -o.height/2 + 'px'
            $el.style.zIndex = this.zIndex
            $el.style.maxWidth = this.maxWidth + 'px'
        }
    }
}
</script>
