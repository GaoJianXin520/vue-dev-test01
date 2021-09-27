import Watcher from '../observer/watcher.js';
import { noop } from '../util/index.js';

export function lifecycleMixin (Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
        console.log('lifecycleMixin _update');
    }
}

export function mountComponent(vm, el, hydrating) {
    vm.$el = el;
    let updateComponent;
    updateComponent = () => {
        vm._update(vm._render(), hydrating);
    }

    new Watcher(vm, updateComponent, noop, {}, true);
    return vm;
}