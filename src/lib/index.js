import LayerComponent from './layer'
import '../assets/style.css'

export default {
    install(Vue, options){
        const LayerPlugin = Vue.extend(LayerComponent)
        let vms = {}
        let layer = {
            init(option){
                this.options = {
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
                    mask: !1,
                    icon: 0
                }
                this.options = {...this.options, ...option}
            },
            apply(option){
                this.options = {...this.options, ...option}
            },
            msg(content = '无内容', {time = 2000, icon = 0, maxWidth = maxWidth, yes = () => {}} = {}){
                return this.create({
                    type: 'Msg',
                    content: content,
                    time: time,
                    icon:icon,
                    yes: yes,
                    maxWidth: maxWidth
                })
            },
            alert({title = '信息', content = '无内容', btn = '确认', maxWidth = maxWidth, mask = !0, yes = () => this.close(), success = () => {}} = {}){
                return this.create({
                    type: 'Alert',
                    title: title,
                    content: content,
                    btn: btn,
                    yes: yes,
                    success: success,
                    maxWidth: maxWidth,
                    mask: mask
                })
            },
            tips(content = '无内容', selector = 'body', {tips = 1, time = 1500} = {}){
                return this.create({
                    type: 'Tips',
                    content: content,
                    selector: selector,
                    tips: tips,
                    time: time
                })
            },
            loading(mask = !1){
                return this.create({
                    type: 'Loading',
                    mask: mask
                })
            },
            close(layero){
                if(!vms[layero]){
                    console.log('没有这个layer >> :',layero)
                    return !1
                }
                if(layero){
                    //vms[layero].$el.remove()
                    document.body.removeChild(vms[layero].$el)
                    delete vms[layero]
                }else{
                    for(let layero in vms){
                        this.close(layero)
                    }
                }
            },
            create(option){
                let $vm = new LayerPlugin({ 
                    el: document.createElement('div'),
                });
                vms[$vm._uid] = $vm
                $vm.options = {...this.options, ...option, ...{layero: $vm._uid}}
                document.body.appendChild($vm.$el)
                return $vm._uid
            }
        }; 
        layer.init(options)
        if(!Vue.$layer){
            Vue.$layer = layer; 
        } 
        Vue.prototype.$layer = Vue.$layer; 
        Vue.mixin({ 
            created(){
                this.$layer = Vue.$layer; 
            } 
        })
    } 
}
