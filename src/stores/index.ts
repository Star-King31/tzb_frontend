import { useUserStore } from '@/stores/useUserStore'
import { useSpecialExhibitsStore } from '@/stores/useSpecialExhibitsStore'
import { useSystemStore } from '@/stores/useSystemStore'

export const useStore = {
  user: useUserStore(),
  specialExhibits: useSpecialExhibitsStore(),
  system: useSystemStore()
}
