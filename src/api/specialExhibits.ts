import request from '@/api/request'

export function getSpecialExhibits() {
  return request({
    url: '/specialExhibits',
    method: 'get'
  })
}

export function getSpecialExhibitById(id) {
  return request({
    url: '/specialExhibit/' + id,
    method: 'get'
  })
}
