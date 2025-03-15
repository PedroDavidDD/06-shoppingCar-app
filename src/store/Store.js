import { create } from "zustand";
import { allRanks, getPriceRarity, getRandomRarity } from "../utilities/ranks";

export const useGlobalStore = create((set, get) => ({
  flurbosCoints: 1000,

  clones: [],
  isLoadingClone: true,

  cartClones: [],

  actionMercenaries: [
    {
      id: 0,
      target: 'Eliminación Aleatoria',
      type: 'byRandomId',
      probability: 50,
      context: 'Elimina a un clon elegido al azar.',
      squad: 'Un escuadrón de 3 Ricks borrachos lo emboscará en un callejón dimensional.',
      price: '300',
    },
    {
      id: 1,
      target: 'Eliminación Selectiva',
      type: 'byId',
      probability: 95,
      context: 'Elimina a un clon específico por su nombre.',
      squad: 'Un Rick francotirador se encargará de hacerlo desaparecer.',
      price: '700',
    },
    {
      id: 2,
      target: 'Paquete Genocida',
      type: 'byLocation',
      probability: 80,
      context: 'Elimina todos los clones de una dimensión específica.',
      squad: 'Un escuadrón de Ricks con portal guns entrará y limpiará la zona.',
      price: '1500',
    },
    {
      id: 3,
      target: 'Desintegración Total',
      type: 'byAll',
      probability: 99,
      context: 'Elimina todos los clones existentes.',
      squad: 'Rick Prime eliminará todo rastro de clones.',
      price: '5000',
    },
    {
      id: 4,
      target: 'Venta en el Mercado Negro',
      type: 'byFlurbos',
      probability: 70,
      context: 'En lugar de eliminarlo, el clon será vendido a traficantes interdimensionales. Puede que termine en un circo, un laboratorio o como batería biológica.',
      squad: 'Un Rick comerciante con contactos turbios lo entregará a cambio de flurbos.',
      price: '800',
    },
    {
      id: 5,
      target: 'Envío a la Dimensión Prisión',
      type: 'byDisabled',
      probability: 85,
      context: 'Transportamos al clon a una dimensión donde nunca podrá escapar. Método limpio y sin necesidad de exterminio.',
      squad: 'Dos Ricks con un portal maestro lo atraparán y lo enviarán a la Dimensión Cárcel.',
      price: '1200',
    },
    {
      id: 6,
      target: 'Recuperar clones de la Dimensión Prisión',
      type: 'byEnabled',
      probability: 85,
      context: 'Transportamos al clon a una dimensión donde nunca podrá escapar. Método limpio y sin necesidad de exterminio.',
      squad: 'Dos Ricks con un portal maestro lo atraparán y lo enviarán a la Dimensión Cárcel.',
      price: '1200',
    },
    {
      id: 7,
      target: 'Suplantación Legendaria',
      type: 'byBetterUpdate',
      probability: 85,
      context: 'No solo eliminamos al clon objetivo, sino que lo reemplazamos por una versión mejorada con recuerdos modificados para evitar sospechas.',
      squad: 'Un Rick infiltrador eliminará al clon y tomará su lugar sin que nadie se dé cuenta.',
      price: '2000',
    },
    {
      id: 8,
      target: 'Mejorar a un Clon Aleatoriamente',
      type: 'byRandomUpdate',
      probability: 20,
      context: 'El rango de un clon será cambiado de forma aleatoria',
      squad: 'Un Rick científico experimentará con el clon.',
      price: '300',
    }
  ],

  cloneAuction: [],

  fetchClones: async (
    apiBaseUrl = "https://rickandmortyapi.com/api",
    entityType = "character",
    queryParams = "/?page=2"
  ) => {
    try {
      const endpoints = {
        character: '/character',
        location: '/location',
        episode: '/episode'
      }

      set({
        isLoadingClone: true
      });

      const response = await fetch(`${apiBaseUrl}${endpoints[entityType]}${queryParams}`);
      const data = await response.json();

      const clonePromises = data.results.map(async (character) => {
        const randomRank = allRanks[Math.floor(Math.random() * allRanks.length)];
        const randomRarity = getRandomRarity() || 'común';
        const priceForRarity = getPriceRarity(randomRarity) || 100;

        let dimension = 'Desconocido';

        if (character.origin.url) {
          try {
            const locationResponse = await fetch(character.origin.url);
            const locationData = await locationResponse.json();
            dimension = locationData.dimension || 'Desconocido';
          } catch (error) {
            console.log(`Error al obtener la dimension para el personaje ${character.name} - Error ${error}`)
          }
        }
        
        return {
          ...character,
          dimension,
          range: {
            description: randomRank.description,
            element: randomRank.element,
            powerLevel: randomRank.powerLevel,
            rankName: randomRank.rankName,
            rarity: randomRank.rarity,
          },
          rarity: randomRarity,
          price: priceForRarity,
          isHidden: false,
        }
      })

      const clones = await Promise.all(clonePromises)
      
      set({
        clones,
        isLoadingClone: false
      });

    } catch (error) {
      console.error("Error al obtener los clones:", error);
      set({
        isLoadingClone: true
      });
    }
  },

  // FLURBOS COINTS
  addFlurbosCoints :(addCoints = 100)=> {
    const { flurbosCoints } = get();
    let prevCoints = flurbosCoints + addCoints;
    if ( prevCoints > 10000 ) {
      set({ flurbosCoints: 10000 }); 
      return;
    }
    set({ flurbosCoints: prevCoints })
  },

  removeFlurbosCoints :(addCoints = 100)=> {
    const { flurbosCoints } = get();
    let prevCoints = flurbosCoints - addCoints;
    if ( prevCoints < 0 ) {
      set({ flurbosCoints: 0 }); 
      return;
    }
    set({ flurbosCoints: prevCoints })
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
        q.id === id ? { ...q, ...updatedData  } : q
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
      cartClones: state.cartClones.some(it => it.id === clone.id)
        ? state.cartClones.map(it =>
          it.id === clone.id ? { ...it, quantity: it.quantity + 1 } : it
        )
        : [...state.cartClones, { ...clone, quantity: 1 }]
    }));
  },

  updateCartClone: (id, updatedData) => {
    set((state) => ({
      cartClones: state.cartClones.map((q) =>
        q.id === id ? { ...q, ...updatedData } : q
      ),
    }));
  },

  deleteRandomCartClone: () => {
    const { cartClones } = get()
    let randomid = cartClones[Math.floor(Math.random() * cartClones.length)].id;

    set(state => ({
      cartClones: state.cartClones.reduce((acc, item) => {
        if (item.id === randomid) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    }));
  },

  deleteCartClone: (id) => {
    set(state => ({
      cartClones: state.cartClones.reduce((acc, item) => {
        if (item.id === id) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    }));
  },

  deleteGenocidalCartClone: (location) => {
    set(state => ({
      cartClones: state.cartClones.reduce((acc, item) => {
        if (item.location.name != location) {
          acc.push( item );
        }
        return acc;
      }, [])
    }));
  },

  clearCartClones :()=> set({ cartClones: [] }),
  


  // actionMercenaries

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
