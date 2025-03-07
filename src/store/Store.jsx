import { create } from "zustand";

export const useGlobalStore = create((set, get) => {
  const fetchClones = async (limit) => {
    try {
      const response = await fetch(`https://api.example.com/clones?limit=${limit}`);
      const data = await response.json();
      set({ clones: data });
    } catch (error) {
      console.error("Error al obtener preguntas:", error);
    }
  };

  fetchClones(6)

  return {
    clones: [],
    currentClone: 0,

    fetchClones,

    addClone: (clone) => {
      set((state) => ({
        clones: [...state.clones, clone],
      }));
    },

    updateClone: (id, updatedData) => {
      set((state) => ({
        clones: state.clones.map((q) =>
          q.id === id ? { ...q, ...updatedData } : q
        ),
      }));
    },

    deleteClone: (id) => {
      set((state) => ({
        clones: state.clones.filter((q) => q.id !== id),
      }));
    },

    clearClones: () => set({ clones: [] }),
  };
});
