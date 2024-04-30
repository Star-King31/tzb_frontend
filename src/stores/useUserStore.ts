import { defineStore } from 'pinia'
import type { User } from '@/types/user'

type State = {
  user: User
  token: string
}

export const useUserStore = defineStore(
  'user',
  () => {
    const state = ref<State>({
      user: null,
      token: 'null'
    })

    return {
      state
    }
  },
  {
    // 开启持久化
    //@ts-ignore
    persist: true
  }
)
