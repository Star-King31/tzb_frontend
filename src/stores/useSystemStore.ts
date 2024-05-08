import { defineStore } from 'pinia'
import type { Ref } from 'vue'

type State = {
  isLoading: boolean
}
export const useSystemStore = defineStore('system', () => {
  const state: Ref<State> = ref({
    isLoading: false
  })
  const loadingBar = useLoadingBar()

  watch(() => state.value.isLoading, value => {
    if (value) {
      loadingBar.start()
    } else {
      loadingBar.finish()
    }
  })

  function startLoading() {
    state.value.isLoading = true
  }

  function stopLoading() {
    state.value.isLoading = false
  }

  function errorLoading() {
    loadingBar.error()
  }


  return {
    state,
    startLoading,
    stopLoading,
    errorLoading
  }
})
