import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartDetailsProvider = ({ children }) => {
    
  const [cartItems, setCartItems] = useState([]);

  const handleIncrement = (item) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  
    setCartItems(updatedCartItems);
  };

  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      // If quantity is 1, remove the item from the cart
      handleRemove(item);
    } else {
      // If quantity is greater than 1, decrement the quantity
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      );
  
      setCartItems(updatedCartItems);
    }
  };
  
  const handleRemove = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
  
    setCartItems(updatedCartItems);
  };
  
  
  

  return (
    <CartContext.Provider value={{ cartItems, setCartItems,handleIncrement, handleDecrement, handleRemove }}>
      {children}
    </CartContext.Provider>
  );
};
