const BASE_URL = "http://codercba.com:9002"

class HRRequest {
  request(url, method, params) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: BASE_URL + url,
        data: params,
        method: method,
        success: (res) => {
          resolve(res.data)
        },
        fail: reject
        // 等同于
        // fail: (err) => {
        //   reject(err)
        // },
      })
    })
  }

  get(url, params) {
    return this.request(url, "GET", params)
  }

  post(url, data) {
    return this.request(url, "POST", data)
  }
}

const hrRequest = new HRRequest()

export default hrRequest