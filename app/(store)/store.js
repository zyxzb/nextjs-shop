import { create } from 'zustand';
import { toast } from 'react-toastify';

const useCart = create((set, get) => ({
  cart: [],
  savedProducts: [],
  openModal: false,

  addToFavorite: (params) => {
    const { newItem } = params;
    const { price_id, name } = newItem;

    set((state) => {
      const tempItem = state.savedProducts.find((i) => i.price_id === price_id);
      const newFav = [...state.savedProducts, newItem];

      if (tempItem) {
        toast.info(`${name} already exists in favorites`);
        return { ...state };
      }

      toast.success(`${name} added to favorites`);
      return {
        ...state,
        savedProducts: newFav,
      };
    });
  },

  removeFromFavorite: (id) => {
    set((state) => {
      const newSavedProducts = state.savedProducts.filter((element) => {
        return element.price_id !== id;
      });
      return {
        ...state,
        savedProducts: newSavedProducts,
      };
    });
  },

  setOpenModal: () => {
    set((state) => {
      return {
        ...state,
        openModal: !state.openModal,
      };
    });
  },

  addItemToCart: (params) => {
    const { newItem } = params;
    const { price_id, name } = newItem;

    set((state) => {
      // find if item already exists in the cart
      const tempItem = state.cart.find((i) => i.price_id === price_id);
      toast.success(`Successfully added ${name} to your cart!`);

      // if item exists, decrease quantity
      if (tempItem) {
        const { quantity } = tempItem;
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.price_id === price_id) {
            let newQuantity = quantity + 1;
            return {
              ...cartItem,
              quantity: newQuantity,
            };
          } else return cartItem;
        });
        return {
          ...state,
          cart: tempCart,
        };
      }

      // if product does not exist, add it to cart
      const newCart = [...state.cart, newItem];
      return {
        ...state,
        cart: newCart,
      };
    });
  },

  removeItemFromCart: (id) => {
    set((state) => {
      const newCart = state.cart.filter((element) => {
        return element.price_id !== id;
      });
      return {
        ...state,
        cart: newCart,
      };
    });
  },

  emptyCart: () => {
    set((state) => {
      const newCart = [];
      return {
        ...state,
        cart: newCart,
      };
    });
  },
}));

export default useCart;
