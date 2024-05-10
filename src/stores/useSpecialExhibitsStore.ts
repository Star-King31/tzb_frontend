import { defineStore } from 'pinia'
import type { SpecialExhibit } from '@/types/specialExhibits'
import type { Ref } from 'vue'
import { getSpecialExhibitById, getSpecialExhibits } from '@/api/specialExhibits'
import { useSystemStore } from '@/stores/useSystemStore'
import { useMessage } from 'naive-ui'


type State = {
  specialExhibits: SpecialExhibit[],
  currentSpecialExhibit: SpecialExhibit | null
}
export const useSpecialExhibitsStore = defineStore('specialExhibits', () => {
  const state: Ref<State> = ref({
    specialExhibits: [],
    currentSpecialExhibit: null
  })

  async function fetchSpecialExhibits() {
    state.value.specialExhibits = (await getSpecialExhibits()).data.data
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
