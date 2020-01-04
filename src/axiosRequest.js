import axios from 'axios'
import { Toast } from 'cube-ui'

// 请求拦截  token
// 响应拦截 res.data
// 保证每一次请求的唯一
class AxiosRequest {
  constructor() {
    this.timeout = 5000
    // 在当前的ajax对象，挂一个toast
    this.toast = Toast.$create({
      txt: '正在加载中...',
      time: 0
    })
    this.queue = {} // 保存着请求的url
  }
  // 设置拦截
  setInterceptor(instance, url) {
    // 请求拦截
    instance.interceptors.request.use((config) => {
      if (Object.keys(this.queue).length === 0) {
        // 显示出loading
        this.toast.show()
      }
      this.queue[url] = url
      // console.log("请求拦截")
      return config
    }, error => {
      // DOTO...
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use((response) => {
      delete this.queue[url]
      if (Object.keys(this.queue).length === 0) {
        // 显示出loading
        this.toast.hide()
      }

      return response
    }, (error) => {
      delete this.queue[url]
      if (Object.keys(this.queue).length === 0) {
        // 显示出loading
        this.toast.hide()
      }
      return Promise.reject(error)
    })
  }
  request(options) {
    // instance 就可以发出一个请求 返回promise
    const instance = axios.create()
    const config = {
      ...options,
      withCredentials: true,
      timeout: this.timeout
    }
    this.setInterceptor(instance, options.url)
    return instance(config)
  }
}
// 导出ajax对象
export default new AxiosRequest()

// let ax = new AxiosRequest()
// ax.request({url:"/getnews",methods:"post","name:"xx"}).then(data=>{})
