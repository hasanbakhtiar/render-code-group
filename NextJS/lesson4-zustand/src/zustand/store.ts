import { create } from 'zustand'

const useBear = create((set) => ({
    bears: 10,
    increment: () => set((state: { bears: number; }) => ({ bears: state.bears + 1 })),
    deleteAll: () => set({ bears: 0 }),
    payloadUpdate: (newBears: any) => set({ bears: newBears }),
}))

export default useBear;