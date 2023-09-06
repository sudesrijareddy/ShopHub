import React from 'react';
import styles from './Cardstyles.module.css';
import { Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as filledHeart } from '@fortawesome/free-solid-svg-icons';
import {TbArrowsMaximize,} from 'react-icons/tb';
import { CartContext } from './CartContext';
import { WishlistContext } from './WishlistContext';
import { useContext } from 'react';
 
const CardComp = ({product}) => {
   
  const { cartItems, setCartItems } = useContext(CartContext);
  const handleAddToCart = (product) => {
    // Check if the product is already in the cart
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      // Increment quantity if the product is already in the cart
      setCartItems(prevCartItems => 
        prevCartItems.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // Add the product to the cart
      setCartItems(prevCartItems => [...prevCartItems, { ...product, quantity: 1 }]);
    }
  };

  const { likedCards, setLikedCards } = useContext(WishlistContext);



     const handleLikeClick = (product) => {

      const existingLikedItem = likedCards.some(card=> card.id===product.id)

      if(existingLikedItem){
        setLikedCards(likedCards.filter(card => card.id!==product.id));
      } else{
        setLikedCards([...likedCards,product])
      }
    };



    
     //destructuring the props from product prop
    const { image,title, price } = product;

  return (
    <div>
        <Card className={`mb-4 ${styles.productcard}`}>
                   <Card.Img className={styles.productimg} variant="top" src={image} alt={product.title}/>
                    <Card.Body>
                     <div className={styles.icons}>
                     <Link to={`/product/${product.id}`}><TbArrowsMaximize color='#E48586' size={30} /></Link>
                     <FontAwesomeIcon
                     className={styles.likeicon}
                     icon={likedCards.some(card=>card.id===product.id) ? filledHeart : emptyHeart}
                     color={likedCards.some(card=>card.id===product.id) ? '#E48586' : '#E48586'}
                     onClick={() => handleLikeClick(product)}/>                     
                     </div>
                    <NavLink style={{color:"black",textDecoration:"none"}} to={`/product/${product.id}`}>
                    <Card.Title className={styles.producttitle} >
                       {title}
                       </Card.Title>
                      </NavLink>
                    <Card.Text>
                     <span className={styles.productprice}><strong>Price: ${price}</strong></span>
                    </Card.Text>
                    <div className={styles.btncontainer}><NavLink to="/cart"><button onClick={()=>handleAddToCart(product)} className={styles.cartbtn}>Add to cart</button></NavLink></div>
                    </Card.Body>
                 </Card>
    </div>
  )
}

export default CardComp;

