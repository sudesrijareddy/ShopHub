import { createContext, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({children})=>{
    const [likedCards,setLikedCards] = useState([]);
    return(
     <WishlistContext.Provider value={{likedCards,setLikedCards}}>
      {children}
     </WishlistContext.Provider>
    );
}