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
    // CLONES
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

    // CART CLONES
    addCartClone: (clone) => {
      set((state) => ({
        clones: [...state.clones, clone],
      }));
    },

    updateCartClone: (id, updatedData) => {
      set((state) => ({
        clones: state.clones.map((q) =>
          q.id === id ? { ...q, ...updatedData } : q
        ),
      }));
    },

    deleteCartClone: (id) => {
      set((state) => ({
        clones: state.clones.filter((q) => q.id !== id),
      }));
    },

    clearCartClones: () => set({ clones: [] }),

    // actionMercenaries
    addMercenaryClone: (clone) => {
      set((state) => ({
        clones: [...state.clones, clone],
      }));
    },

    updateMercenaryClone: (id, updatedData) => {
      set((state) => ({
        clones: state.clones.map((q) =>
          q.id === id ? { ...q, ...updatedData } : q
        ),
      }));
    },

    deleteMercenaryClone: (id) => {
      set((state) => ({
        clones: state.clones.filter((q) => q.id !== id),
      }));
    },

    clearMercenaryClones: () => set({ clones: [] }),

    // cloneAuction
    addAuctionClone: (clone) => {
      set((state) => ({
        clones: [...state.clones, clone],
      }));
    },

    updateAuctionClone: (id, updatedData) => {
      set((state) => ({
        clones: state.clones.map((q) =>
          q.id === id ? { ...q, ...updatedData } : q
        ),
      }));
    },

    deleteAuctionClone: (id) => {
      set((state) => ({
        clones: state.clones.filter((q) => q.id !== id),
      }));
    },

    clearAuctionClones: () => set({ clones: [] }),

  };
});
