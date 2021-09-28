import request from '@/utils/request'

const api_name = '/service_video/content-video'

export default {

  saveVideoInfo(videoInfo) {
    return request({
      url: `${api_name}/addContentVideo`,
      method: 'post',
      data: videoInfo
    })
  },

  getVideoInfoById(id) {
    return request({
      url: `${api_name}/getOneVideoInfo/${id}`,
      method: 'get'
    })
  },

  updateVideoInfo(videoInfo) {
    return request({
      url: `${api_name}/updateVideoInfo`,
      method: 'post',
      data: videoInfo
    })
  },

  deleteVideoById(id) {
    return request({
      url: `${api_name}/deleteContentVideoInfo/${id}`,
      method: 'post'
    })
  }
}
