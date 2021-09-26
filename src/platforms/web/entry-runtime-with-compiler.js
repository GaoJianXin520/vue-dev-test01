import Vue from './runtime/index.js';

Vue.prototype.$mount = function (el, hydrating) {
    console.log(el);
}

export default Vue;
