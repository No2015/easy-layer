<template>
    <component :is="showComponent" :options="options"></component>
</template>

<script>
import Msg from './msg'
import Alert from './alert'
import Tips from './tips'
import Loading from './loading'
export default {
    name: 'Layer',
    props: {
        options: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    components: {
        Msg,
        Alert,
        Tips,
        Loading
    },
    data(){
        return {}
    },
    computed: {
        showComponent(){
            return this.options.type
        }
    }
}
</script>
