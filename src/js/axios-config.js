import axios from 'axios';
import {domain} from './api-config.js';

// 配置默认域名,这样请求的时候就不需要在url里添加域名了
axios.defaults.baseURL = domain;

// 跨域请求的接口,默认不会携带cookie等信息，后端需要这些信息来验证，所以要设置为True
axios.defaults.withCredentials = true;

export default axios;