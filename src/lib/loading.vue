<template>
    <div :class="classname">
        <div v-show="mask" class="layer-dialog-mask"></div>
        </div>
</template>

<script>
export default {
    name: 'Loading',
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
            mask: this.options.mask,
            zIndex: this.options.zIndex,
            classname: 'layer-dialog layer-loading layer-dialog-anima layer-dialog-' + this.options.skin
        }
    },
    methods: {
        init(){
            let $el = this.$el
            $el.style.zIndex = this.zIndex
        }
    }
}
</script>
