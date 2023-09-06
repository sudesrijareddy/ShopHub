import React,{useContext,useEffect,useState} from 'react'
import { NavLink } from 'react-router-dom';
import {BsFillBagDashFill,BsFillBagPlusFill} from 'react-icons/bs';
import {AiOutlineArrowDown,AiFillDelete} from 'react-icons/ai';
import {HiMiniShoppingBag} from 'react-icons/hi2'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row} from 'react-bootstrap';
import { CartContext } from './CartContext';
import styles from './Cart.module.css';

const Cart = ({item}) => {
    const { handleIncrement, handleDecrement, handleRemove } = useContext(CartContext);
    const { cartItems, setCartItems } = useContext(CartContext);  
    //console.log(cartItems);
   
    const [totalPrice, setTotalPrice] = useState(0);

    const calculateTotalPrice = () => {
        const totalPrice = cartItems.reduce((total, item) => {
          return total + item.price * item.quantity;
        }, 0);
    
        return Math.round(totalPrice);
      };
    // UseEffect to recalculate total price whenever cartItems change
  useEffect(() => {
    const newTotalPrice = calculateTotalPrice();
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  return (
    <div className={styles.main}>
     <h1 className={styles.heading1}> <AiOutlineArrowDown/>  CartItems</h1>
        <div>
            {cartItems.length>0 ? (<Container>
            <Row className={styles.cartlist}>
            {cartItems.map((item)=>(
              <div key={item.id} className={styles.cartitem}>
                  <img src={item.image} alt={item.title}/>
                  <h5>{item.title}</h5>
                <div className={styles.carticons}>
                  <button onClick={()=>handleDecrement(item)} className={styles.btns}><BsFillBagDashFill/></button>
                  <span>{item.quantity}</span>
                  <button onClick={()=>handleIncrement(item)} className={styles.btns}><BsFillBagPlusFill/></button>
                </div>
                  <p className={styles.productprice}>${item.price * item.quantity}</p>
                  <button onClick={()=>handleRemove(item)} className={styles.btns}><AiFillDelete/></button>
              </div>  
            ))} 
            <div className={styles.carttotal}>
            <p>Total : ${totalPrice}</p>
            <NavLink to="/login"><button>Proceed to Buy</button></NavLink>
            </div>
            </Row>
          </Container>):
          (<div className={styles.emptywishlist}>
            <h5>Your Cart is Empty  <HiMiniShoppingBag/></h5>
      </div>)}
        </div>
    </div>
  )
}

export default Cart