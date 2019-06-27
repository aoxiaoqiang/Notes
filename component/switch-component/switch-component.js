/**
 * 自定义switch组件
 *
 * 切换状态必须在外部改变 `checked` 值
 *
 * 用于需要在点击switch组件时可以自主控制是否激活状态
 *
 * @property {Boolean} checked 是否是激活状态，默认false
 *
 * @event bindswitch
 *
 * @example
 * ```xml
 * <custom-switch checked="{{checked}}" bindswitch="eventName"></custom-switch>
 * ```
 */
Component({
  properties: {
    checked: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    toSwitch(e) {
      const { checked } = e.currentTarget.dataset;
      console.warn('tap my switch')
      this.triggerEvent('switch', { checked: !checked });
    }
  }
})
