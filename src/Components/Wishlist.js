import React,{useContext} from 'react';
import { WishlistContext } from './WishlistContext';
import styles from './Wishlist.module.css';
import { Col, Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AiOutlineArrowDown} from 'react-icons/ai'
import CardComp from './CardComp';
import {TbMoodEmptyFilled} from 'react-icons/tb'


const Wishlist = () => {
   const { likedCards, setLikedCards} = useContext(WishlistContext);
  return (
    <div className={styles.main}>
     <h1 className={styles.heading1}> <AiOutlineArrowDown/>  WishList</h1>
        <div>
            {likedCards.length>0 ? (<Container>
            <Row>
            {likedCards.map((card)=>(
                <Col lg={3} md={6} sm={12} key={card.id}>
                  <CardComp product={card}/>
                </Col>
            ))}
        </Row>
          </Container>):
          (<div className={styles.emptywishlist}>
            <h5>Your WishList is Empty   <TbMoodEmptyFilled/></h5>
      </div>)}
        </div>
    </div>
  )
}

export default Wishlist;