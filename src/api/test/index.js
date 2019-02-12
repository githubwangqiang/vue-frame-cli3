/**
 * Created by wq on 2019/2/11.
 */
/**
 * article模块接口列表
 */

import base from '@/config/base'; // 导入接口域名列表
import axios from '@/utils/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const test = {
  douban (params) {
    return axios.get(`${base.api}/v2/movie/top250`, {
      params: params
    })
  },
  // e.g
  articleList () {
    return axios.get(`${base.api}/topics`);
  },
  // e.g
  articleDetail (id, params) {
    return axios.get(`${base.api}/topic/${id}`, {
      params: params
    });
  },
  // post提交
  login (params) {
    return axios.post(`${base.base}/accesstoken`, qs.stringify(params));
  }
  // 其他接口…………
}

export default test;
