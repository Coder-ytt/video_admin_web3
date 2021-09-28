import request from '@/utils/request'
const apiName = '/service_video/chapter'
export default {
  //请求章节列表
  getChapterContentVideo(content_id){
    return request({
      url: `${apiName}/getChapterContentVideo/${content_id}`,  //路由参数拼接
      method: 'get'
    })
  },

  saveChapter(chapter){
    return request({
      url: `${apiName}/addChapter`,  //路由参数拼接
      method: 'post',
      data:chapter
    })
  },
  getOneChapterWithId(id){
    return request({
      url: `${apiName}/getOneChapter/${id}`,  //路由参数拼接
      method: 'get'
    })
  },
  updateChapter(chapter){
    return request({
      url: `${apiName}/updateChapter`,  //路由参数拼接
      method: 'post',
      data:chapter
    })
  },
  deleteChapter(id) {
    return request({
      url: `${apiName}/deleteChapterWithId/${id}`,  //路由参数拼接
      method: 'post'
    })
  }

}
