import React, { useEffect, useState ,useContext } from 'react'
import { useParams,NavLink} from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Col,Row,Spinner} from 'react-bootstrap';
import {AiOutlineArrowDown} from 'react-icons/ai';
import { FaTruck,FaArrowRotateLeft} from 'react-icons/fa6';
import {HiOutlineEmojiHappy} from 'react-icons/hi';
import {BiSolidBadgeCheck} from 'react-icons/bi';
import styles from './Shopstyles.module.css';
import CardComp from './CardComp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './CartContext';



const Shop = () => {
    const { productId } = useParams();
    const[productdetails,setProductDetails]=useState(null);
    const[relatedproducts,setRelatedProducts] = useState([]);

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
  
   
    //to get a single product detal whenever the id is changed

    useEffect(()=>{
       axios.get(`https://fakestoreapi.com/products/${productId}`)
       .then((response)=>{
        setProductDetails(response.data);
       })
       .catch((error)=>{
        console.log("Fetching error",error);
       })
    },[productId]);
   // console.log(productdetails);

  
    //to get all related products based on its category and it runs everu time a new product is clciked
    useEffect(()=>{
        if(productdetails){
      axios.get("https://fakestoreapi.com/products")
      .then((response)=>{
        const relateddata = response.data.filter((product)=>{
            return product.category === productdetails.category && product.id!=productdetails.id;
        })
        setRelatedProducts(relateddata);
       })
       .catch((error)=>{
        console.log("Fetching error",error);
       })
    }
    },[productdetails]);
   // console.log(relatedproducts);

  return (
    <div>
      {/*conditional rendering using ternary operator beacuse here displaying result depends on the productdetails state and initially it is null so if nothing is rendered incase of any errors it need to render something incase of false render */ }
        {productdetails ? (
      <div>
        <div className={styles.main1}>
        <h1 className={styles.productheading}> <AiOutlineArrowDown/>  Product Details</h1>
          <Container className={styles.product}>
          <Row>
          <Col className={styles.productdata} sm={4}>
            <div>
            <h2 className={styles.producttitle}>{productdetails.title}</h2>
            <p className={styles.description}>{productdetails.description}</p>
            </div>
          </Col>
          <Col sm={5}>
            <img className={styles.image1} src={productdetails.image} alt={productdetails.title} />
          </Col>
          <Col className={styles.productratings} sm={3}>
            <div>
            <h5>Rating :{productdetails.rating.rate}</h5>
            <div className={styles.rating}>
            {Array.from({ length: 5 }, (_, index) => (
               <FontAwesomeIcon
               icon={faStar}
               key={index}
               style={{
                 color:
                   index < Math.floor(productdetails.rating.rate)
                     ? 'gold'
                     : index === Math.floor(productdetails.rating.rate) &&
                       productdetails.rating.rate % 1 !== 0
                     ? 'gold' // Partially filled star color
                     : 'black', // Empty star color
               }}
             />
            ))}

            </div>
            <p className={styles.quantity}><strong>Quantity:{productdetails.rating.count}</strong></p>
            <NavLink to="/cart"><button onClick={()=>handleAddToCart(productdetails)} className={styles.cartbtn}>Add to cart</button></NavLink>
            <div className={styles.detailicons}>
              <Row>
                <Col lg={3} md={6} sm={12}><HiOutlineEmojiHappy size={35} color='#023653'/></Col>
                <Col lg={3} md={6} sm={12}><FaTruck size={35} color='#023653'/></Col>
                <Col lg={3} md={6} sm={12}><FaArrowRotateLeft size={35} color='#023653'/></Col>
                <Col lg={3} md={6} sm={12}><BiSolidBadgeCheck size={35} color='#023653'/></Col>
              </Row>
            </div>
            </div>
          </Col>
        </Row>
          </Container>
        </div>
        <div className={styles.main2}>
          <Container>
          <h1 className={styles.heading1}> <AiOutlineArrowDown/> Related Products</h1>
        <Row>
            {relatedproducts.map((product)=>(
                <Col lg={3} md={6} sm={12} key={product.id}>
                 <CardComp product={product}/>
                </Col>
            ))}
        </Row>
          </Container>
        </div>
      </div>
       
    ) : (
      <div className={styles.spinnericon}>
      <Spinner className={styles.spinner} animation="border" variant="dark" />
      </div>
    )}
    </div>
  )
}

export default Shop;