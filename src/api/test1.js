import request from '@/utils/request'

export function testGet() {
  return request({
    url: '/api/data.php',
    method: 'get'
  })
}
