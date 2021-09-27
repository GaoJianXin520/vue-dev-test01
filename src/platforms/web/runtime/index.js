import Vue from '../../../core/index.js';
import { mountComponent } from '../../../core/instance/lifecycle.js';

Vue.prototype.$mount = function (el, hydrating) {
    return mountComponent(this, el, hydrating);
}  

export default Vue;
