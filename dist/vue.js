(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.Vue = factory());
}(this, (function () { 'use strict';

    function initMixin (Vue) {
        Vue.prototype._init = function (options) {
            const vm = this;
            if (options && options._isComponent) ; else {
                vm.$options = options;
            }

            if (vm.$options.el) {
                console.log(vm.$options.el);
                vm.$mount(vm.$options.el);
            }
        };
    }

    function Vue(options){
        this._init(options);
    }

    initMixin(Vue);

    Vue.prototype.$mount = function (el, hydrating) {
        console.log(el);
    };

    return Vue;

})));
