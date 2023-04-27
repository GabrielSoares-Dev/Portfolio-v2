import { create } from 'zustand'
import { ChatState } from '@/store/types'

export const useChatStore = create<ChatState>((set) => ({
  isOpenChat: false,
  setIsOpenChat: (value) => set(() => ({ isOpenChat: value })),
}))
