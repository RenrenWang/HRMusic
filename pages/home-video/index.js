// pages/home-video/index.js
// project.config.json文件中的checkSiteMap改为false可以去除Console中的站点索引警告
import { getTopMv } from '../../service/api-video'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        topMvs: []
    },

    /**
     * 生命周期函数--监听页面加载(vue中的created)
     * 使用await和async来优化，已同步的方式编写异步的代码
     */
    onLoad: async function (options) {
        // getTopMv(0).then((res) => {
        //     this.setData({ topMvs: res.data })
        // })
        const res = await getTopMv(0)
        this.setData({ topMvs: res.data})
    },
})