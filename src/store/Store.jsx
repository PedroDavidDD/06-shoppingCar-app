import { create } from "zustand";

export const useGlobalStore = create((set, get) => ({
    clones: [],
    isLoadingClone: true,

    cartClones: [],

    actionMercenaries: [],
    cloneAuction: [],

    fetchClones: async () => {
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
    },
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
      const  { cartClones } = get();

      let temp = [...cartClones];
      const repeatObjItem = temp.filter( it => it.id === clone.id);

      if(repeatObjItem.length === 0){
        temp = [...temp, clone];
      } else {
       repeatObjItem[0].quantity = repeatObjItem[0].quantity + 1;
      }

      set({ cartClones: temp })
    },

    updateCartClone: (id, updatedData) => {
      set((state) => ({
        cartClones: state.cartClones.map((q) =>
          q.id === id ? { ...q, ...updatedData } : q
        ),
      }));
    },

    deleteCartClone: (id) => {
      const { cartClones } = get();
      
      let temp = [...cartClones];
      const repeatObjItem = temp.filter( it => it.id === id);

      if (repeatObjItem[0].quantity == 1){
          const newListItem = temp.filter((element)=> element.id != id );
          set({ cartClones: newListItem }); // desaparece ese 1
      } else {
          if(repeatObjItem.length != 0){
              repeatObjItem[0].quantity = repeatObjItem[0].quantity - 1;
              set({ cartClones: temp });
          }
      }
    },

    clearCartClones: () => set({ cartClones: [] }),

    // actionMercenaries
    addMercenaryClone: (clone) => {
      set((state) => ({
        actionMercenaries: [...state.actionMercenaries, clone],
      }));
    },

    updateMercenaryClone: (id, updatedData) => {
      set((state) => ({
        actionMercenaries: state.actionMercenaries.map((q) =>
          q.id === id ? { ...q, ...updatedData } : q
        ),
      }));
    },

    deleteMercenaryClone: (id) => {
      set((state) => ({
        actionMercenaries: state.actionMercenaries.filter((q) => q.id !== id),
      }));
    },

    clearMercenaryClones: () => set({ actionMercenaries: [] }),

    // cloneAuction
    addAuctionClone: (clone) => {
      set((state) => ({
        cloneAuction: [...state.cloneAuction, clone],
      }));
    },

    updateAuctionClone: (id, updatedData) => {
      set((state) => ({
        cloneAuction: state.cloneAuction.map((q) =>
          q.id === id ? { ...q, ...updatedData } : q
        ),
      }));
    },

    deleteAuctionClone: (id) => {
      set((state) => ({
        cloneAuction: state.cloneAuction.filter((q) => q.id !== id),
      }));
    },

    clearAuctionClones: () => set({ cloneAuction: [] }),

}));
