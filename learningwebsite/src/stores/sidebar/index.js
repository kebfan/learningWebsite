import create from 'zustand'
export const SidebarStore = create((set) => ({
  extend: true,
  setExtend: (extend) => {
    set({ extend: extend })
  }
}))
