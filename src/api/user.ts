import type { LoginForm } from '@/types/user'
import request from '@/api/request'

/**
 * 登录
 * @param data 登录参数
 */
export function login(data: LoginForm) {
  return request({
    url: '/api/login',
    method: 'post',
    data
  })
}
