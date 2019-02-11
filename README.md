# activity 活动

## 增加全局 toast 提示 和 loading 提示

1. 在全局中使用
```
import Vue from 'vue'

Vue.prototype.$loading('显示文案')
Vue.prototype.$loading.open('显示文案')

Vue.prototype.$loading.close()

Vue.prototype.$toast('提示文案')
Vue.prototype.$toast.top('提示文案')
Vue.prototype.$toast.center('提示文案')
Vue.prototype.$toast.bottom('提示文案')

```

2. 在vue实例中使用

```
this.$loading('显示文案')
this.$loading.open('显示文案')

this.$loading.close()

this.$toast('提示文案')
this.$toast.top('提示文案')
this.$toast.center('提示文案')
this.$toast.bottom('提示文案')

```

> taost 默认展示时长为 2500ms,展示位置为bottom