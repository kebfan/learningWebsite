import create from 'zustand'

export const UserStore = create((set) => ({
  user: null,
  setUser: (user) => {
    set({ user: user })
  }
}))
