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
                vm.$mount(vm.$options.el);
            }
        };
    }

    function Vue(options){
        this._init(options);
    }

    initMixin(Vue);

    function mountComponent() {

    }

    Vue.prototype.$mount = function (el, hydrating) {
        return mountComponent();
    };

    function query (el) {
        if (typeof el === 'string') {
          const selected = document.querySelector(el);
          if (!selected) {
            return document.createElement('div');
          }
          return selected;
        } else {
          return el;
        }
    }

    const mount = Vue.prototype.$mount;
    Vue.prototype.$mount = function (el, hydrating) {
        el = el && query(el);
        const options = this.$options;
        if (!options.render) {
            let template = options.template;
            if (template) {
                if (typeof template === 'string') {
                    if (template.charAt(0) === '#') ;
                } else if (template.nodeType) ; else {
                    return this;
                }
            }

            if (template) {
                let render = function() {
                    console.log('template render');
                };
                console.log('name options', options);
                options.render = render;
            }
        }
        return mount.call(this, el, hydrating);
    };

    return Vue;

})));
