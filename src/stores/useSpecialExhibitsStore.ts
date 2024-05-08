import { defineStore } from 'pinia'
import type { SpecialExhibit } from '@/types/specialExhibits'
import type { Ref } from 'vue'
import { getSpecialExhibitById, getSpecialExhibits } from '@/api/specialExhibits'
import { useStore } from '@/stores/index'
import { useSystemStore } from '@/stores/useSystemStore'


type State = {
  specialExhibits: SpecialExhibit[],
  specialExhibitsLoading: boolean,
  currentSpecialExhibit: SpecialExhibit | null
}
export const useSpecialExhibitsStore = defineStore('specialExhibits', () => {
  const state: Ref<State> = ref({
    specialExhibits: [],
    specialExhibitsLoading: false,
    currentSpecialExhibit: null
  })

  const systemStore = useSystemStore()


  async function fetchSpecialExhibits() {
    try {
      state.value.specialExhibitsLoading = true
      systemStore.startLoading()
      state.value.specialExhibits = (await getSpecialExhibits()).data.data
    } finally {
      state.value.specialExhibitsLoading = false
      systemStore.stopLoading()
    }
  }

  async function fetchSpecialExhibitById(id: number) {
    state.value.currentSpecialExhibit = (await getSpecialExhibitById(id)).data.data
  }

  return {
    state,
    fetchSpecialExhibits,
    fetchSpecialExhibitById
  }
})
