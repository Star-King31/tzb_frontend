import { useUserStore } from '@/stores/useUserStore'

//将上面两条合为一句
export const useStore = {
  user: useUserStore()
}
