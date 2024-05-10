/**
 * 时间戳转日期
 * @param timestamp
 * @param format
 */
export function formatDateTime(timestamp: number, format: string = 'yyyy-MM-dd hh:mm:ss') {
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return format
    .replace('yyyy', year.toString())
    .replace('MM', month.toString().padStart(2, '0'))
    .replace('M', month.toString())
    .replace('dd', day.toString().padStart(2, '0'))
    .replace('d', day.toString())
    .replace('hh', hour.toString().padStart(2, '0'))
    .replace('mm', minute.toString().padStart(2, '0'))
    .replace('ss', second.toString().padStart(2, '0'))
}

/**
 * 时间戳转日期
 * @param timestamp
 * @param format
 */
export function formatDate(timestamp: number, format: string = 'yyyy-MM-dd') {
  return formatDateTime(timestamp, format)
}

/**
 * 时间戳转时间
 * @param timestamp
 * @param format
 */
export function formatTime(timestamp: number, format: string = 'hh:mm:ss') {
  return formatDateTime(timestamp, format)
}

/**
 * 节流
 */
export function throttle(fn: Function, delay: number = 500) {
  let timer: any = null
  return function () {
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}

/**
 * 防抖
 */
export function debounce(fn: Function, delay: number = 500) {
  let timer: any = null
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

/**
 * 深拷贝
 */
export function deepClone(obj: any) {
  let result: any
  if (typeof obj === 'object') {
    result = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
      }
    }
  } else {
    result = obj
  }
  return result
}


import { computed, defineComponent, ref } from 'vue'
import {
  createDiscreteApi,
  ConfigProviderProps,
  darkTheme,
  lightTheme
} from 'naive-ui'

const themeRef = ref<'light' | 'dark'>('light')
const configProviderPropsRef = computed<ConfigProviderProps>(() => ({
  theme: themeRef.value === 'light' ? lightTheme : darkTheme
}))

export const { message, notification, dialog, loadingBar, modal } = createDiscreteApi(
  ['message', 'dialog', 'notification', 'loadingBar', 'modal'],
  {
    configProviderProps: configProviderPropsRef
  }
)
