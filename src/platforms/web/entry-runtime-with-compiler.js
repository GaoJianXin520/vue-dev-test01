import Vue from './runtime/index.js';
import { query } from './util/index.js';

const mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (el, hydrating) {
    el = el && query(el);
    const options = this.$options;
    if (!options.render) {
        let template = options.template;
        if (template) {
            if (typeof template === 'string') {
                if (template.charAt(0) === '#') {

                }
            } else if (template.nodeType) {

            } else {
                return this;
            }
        } else if (el) {

        }

        if (template) {
            let render = function() {
                return 'template render';
            };
            options.render = render;
        }
    }
    return mount.call(this, el, hydrating);
}

export default Vue;
