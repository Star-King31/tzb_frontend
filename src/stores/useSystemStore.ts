import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import { MAX_RETRY_COUNT } from '@/config'

type State = {
  isLoading: boolean
}

export const useSystemStore = defineStore('system', () => {
  const state: Ref<State> = ref({
    isLoading: false
  })
  const loadingBar = useLoadingBar()
  const message = useMessage()

  function startLoading() {
    state.value.isLoading = true
    loadingBar.start()
  }

  function stopLoading() {
    state.value.isLoading = false
    loadingBar.finish()
  }

  function errorLoading() {
    // state.value.isLoading = false
    loadingBar.error()
  }

  async function fetchData(cb: Function, retryCount: number = 0) {
    try {
      startLoading()
      await cb()
      if (retryCount !== 0) {
        message.destroyAll()
        message.success('数据加载成功。')
      }
      stopLoading()
    } catch (e) {
      message.destroyAll()
      if (/.*timeout.*/.test(e.message) && retryCount < MAX_RETRY_COUNT) {
        retryCount++
        const remainingRetries = MAX_RETRY_COUNT - retryCount
        const retryMessage = remainingRetries > 0 ? `重新尝试中 (${remainingRetries} 次尝试剩余)` : '最后一次重新尝试中'
        message.loading(retryMessage)
        await fetchData(cb, retryCount)
      } else if (retryCount >= MAX_RETRY_COUNT) {
        message.error('连接超时，尝试重新连接失败，请检查您的网络连接。')
      } else {
        message.error('请求数据时发生错误，请稍后重试或联系系统管理员。')
      }
      errorLoading()
    }
  }


  return {
    state,
    fetchData
  }
})
