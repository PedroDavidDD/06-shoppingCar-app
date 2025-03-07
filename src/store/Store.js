import { create } from "zustand";

export const useGlobalStore = create((set, get) => ({
    clones: [],
    isLoadingClone: true,

    cartClones: [],

    actionMercenaries: [
      {
        id: 0,
        target: 'Eliminación Aleatoria',
        type: 'Borrado aleatorio (DELETE RANDOM)',
        probability: 50,
        context: 'Elimina a un clon elegido al azar.',
        squad: 'Un escuadrón de 3 Ricks borrachos lo emboscará en un callejón dimensional.',
        price: '300',
      },
      {
        id: 1,
        target: 'Eliminación Selectiva',
        type: 'Borrado por nombre o ID (DELETE WHERE name = ?)',
        probability: 95,
        context: 'Elimina a un clon específico por su nombre.',
        squad: 'Un Rick francotirador se encargará de hacerlo desaparecer.',
        price: '700',
      },
      {
        id: 2,
        target: 'Paquete Genocida',
        type: 'Borrado por dimensión (DELETE WHERE dimension = ?)',
        probability: 80,
        context: 'Elimina todos los clones de una dimensión específica.',
        squad: 'Un escuadrón de Ricks con portal guns entrará y limpiará la zona.',
        price: '1500',
      },
      {
        id: 3,
        target: 'Desintegración Total',
        type: 'Borrado completo (DELETE ALL)',
        probability: 99,
        context: 'Elimina todos los clones existentes.',
        squad: 'Rick Prime eliminará todo rastro de clones.',
        price: '5000',
      },
      {
        id: 4,
        target: 'Venta en el Mercado Negro',
        type: 'Borrado con transferencia (DELETE + ganancia de Flurbos)',
        probability: 70,
        context: 'En lugar de eliminarlo, el clon será vendido a traficantes interdimensionales. Puede que termine en un circo, un laboratorio o como batería biológica.',
        squad: 'Un Rick comerciante con contactos turbios lo entregará a cambio de flurbos.',
        price: '800',
      },
      {
        id: 5,
        target: 'Envío a la Dimensión Prisión',
        type: 'En lugar de eliminar, el clon será desahabilitado (UPDATE)',
        probability: 85,
        context: 'Transportamos al clon a una dimensión donde nunca podrá escapar. Método limpio y sin necesidad de exterminio.',
        squad: 'Dos Ricks con un portal maestro lo atraparán y lo enviarán a la Dimensión Cárcel.',
        price: '1200',
      },
      {
        id: 6,
        target: 'Recuperar clones de la Dimensión Prisión',
        type: 'El clon deshabilitado, será habilitado (UPDATE)',
        probability: 85,
        context: 'Transportamos al clon a una dimensión donde nunca podrá escapar. Método limpio y sin necesidad de exterminio.',
        squad: 'Dos Ricks con un portal maestro lo atraparán y lo enviarán a la Dimensión Cárcel.',
        price: '1200',
      },
      {
        id: 7,
        target: 'Suplantación Legendaria',
        type: 'Reemplazar al clon por otro mejor (UPDATE)',
        probability: 85,
        context: 'No solo eliminamos al clon objetivo, sino que lo reemplazamos por una versión mejorada con recuerdos modificados para evitar sospechas.',
        squad: 'Un Rick infiltrador eliminará al clon y tomará su lugar sin que nadie se dé cuenta.',
        price: '2000',
      },
      {
        id: 8,
        target: 'Mejorar a un Clon Aleatoriamente',
        type: 'Actualiza el rango de un Clon a un rango inferior o superior (UPDATE)',
        probability: 20,
        context: 'El rango de un clon será cambiado de forma aleatoria',
        squad: 'Un Rick científico experimentará con el clon.',
        price: '300',
      }
    ],
    
    cloneAuction: [],

    fetchClones: async () => {
      try {
        const https = 'https://rickandmortyapi.com/api';
        const typeRam = { 
          character:'character', 
          location: 'location', 
          episode: 'episode' 
        }
        const stateFilter = true ? '/?page=1' : ''
      
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
