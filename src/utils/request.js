import axios from 'axios'
import qs from 'qs'
import store from '../store'
import { MessageBox } from 'element-ui'

/*
 * 一、request：
 *    1. 说明：封装对后台的请求，可以选择自动处理一些异常。
 *    2. 参数：
 *        - url：          后台地址，必填，String，如："/user/add"
 *        - params：       请求参数，选填，Object，，默认值：{}
 *        - config：       axios参数，选填，Object，默认值：{}
 *        - autoErrorRes： 是否自动处理响应错误，选填，Boolean，默认值：true
 *        - autoErrorData：是否自动处理后台错误，选填，Boolean，默认值：true
 *        - autoCancel：   离开路由时是否自动取消请求，选填，Boolean，默认值：true
 *    3. 返回：
 *        - 成功：Promise.resolve(请求成功后的结果：response.data)
 *        - 失败：
 *            - 请求异常：Promise.reject(http响应错误)
 *            - 请求失败：Promise.reject(请求失败后的结果：response.data)
 *    4. 约定后台返回数据格式：
 *        response.data = {
 *          "code": 1,                    // 成功/失败标识，1=成功，-1=失败
 *          "data": {},                   // 成功时可选参数，请求的响应数据
 *          "errorMessage": "用户名字重复"  // 失败时必需参数，错误提示
 *        }
 *
 * 二、sessionRequest：
 *    1. 说明：利用sessionStorage缓存请求，可以选择outTime，其他同request。
 *    2. 参数：
 *        - outTime：距离上次请求多少秒后需要重新请求，选填，Integer，小于0表示不重新请求，默认值：-1
 *
 * 三、localRequest：
 *    1. 说明：利用localStorage缓存请求，可以选择outTime，其他同request。
 *    2. 参数：
 *        - outTime：距离上次请求多少秒后需要重新请求，选填，Integer，小于0表示不重新请求，默认值：604800（一周）
 *
 **/

const axiosCustom = axios.create({
  baseURL: process.env.BASE_URL;
  withCredentials: true
})