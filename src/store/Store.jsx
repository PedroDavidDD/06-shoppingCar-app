import { create } from "zustand";

export const useGlobalStore = create((set, get) => {
  const fetchClones = async () => {
    try {
      const https = 'https://rickandmortyapi.com/api';
      const typeRam = { 
        character:'character', 
        location: 'location', 
        episode: 'episode' 
      }
      const stateFilter = true ? '/?page=35' : ''
    
      set({ 
        isLoadingClone: true
       });

      const response = await fetch(`${https}/${typeRam.character}${stateFilter}`);
      const data = await response.json();

      set({ 
        clones: data.results,
        isLoadingClone: false
       });
    } catch (error) {
      console.error("Error al obtener los clones:", error);
      set({ 
        isLoadingClone: true
       });
    }
  };

  fetchClones()

  return {
    clones: [],
    isLoadingClone: true,

    cartClones: [],

    actionMercenaries: [],
    cloneAuction: [],

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
