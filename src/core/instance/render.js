export function renderMixin (Vue) {
    Vue.prototype._render = function() {
        const vm = this;
        const { render } = vm.$options;
        let vnode;
        vnode = render.call(vm._renderProxy, vm.$createElement);
        return vnode;
    }
}