// pages/vehicles/show.js
// 全局的getApp函数拿到整个应用对象
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    design:[]
  },
  textDrive(){
    wx.showToast({
      title: '我们的工作人员会和您联系',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log(app.globalData);
    // api data里面数据的修改 修改后自动更新页面
    this.setData({
      design: 
      app.globalData.vehicles[0].meta.exterior_design
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})