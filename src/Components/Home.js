import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Homestyles.module.css';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row ,Card,Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import womenclothes from './images/womenclothing.jpg';
import menclothes from './images/men-clothing.jpg';
import jewellary from './images/jewellary.jpg'
import elctronics from './images/laptop.jpg'
import { FaTruck,FaArrowRotateLeft} from 'react-icons/fa6';
import {AiOutlineArrowDown,AiOutlineArrowRight} from 'react-icons/ai'
import {BsFillShieldLockFill,BsFillBookmarkStarFill} from 'react-icons/bs';
import CardComp from './CardComp';




const Home = () => {
    
    const[products,setProducts] = useState([]);
    

    useEffect(()=>{
      axios.get("https://fakestoreapi.com/products")
      .then((response)=>{
        setProducts(response.data);
      })
      .catch((error)=>{
        console.log('Error in fetching data :',error);
      });
    },[])

   // console.log(products);
    

      return (
        <div>
          <div className={styles.main1}>
            <div>  
        <Carousel>
      <Carousel.Item interval={1000}>
        <img className={`d-block w-100 ${styles.imgslide}`} src={womenclothes} alt='womenclothing'/>
        <Carousel.Caption className={styles.womenslide}>
          <h3>Best Sellers for your Wardrobes</h3>
          <p>shop clothes according to your choices from our best sellers of this season</p>
          <NavLink to="/category/women's clothing"><button>Shop Now  <AiOutlineArrowRight size={30}/></button></NavLink>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img  className={`d-block w-100 ${styles.imgslide}`} src={menclothes} alt='menclothing'/>
        <Carousel.Caption className={styles.menslide}>
          <h3>Men Trending Collection</h3>
          <p>shop our latest and trending collection of topmost brand products.</p>
          <NavLink to="/category/men's clothing"><button>Shop Now  <AiOutlineArrowRight size={30}/></button></NavLink>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className={`d-block w-100 ${styles.imgslide}`} src={jewellary} alt='jewellary items'/>
        <Carousel.Caption className={styles.menslide}>
        <h3>Good things comes in small packages </h3>
        <p>explore our High Quality Jewells for special women out there</p>
        <NavLink to="/category/jewelery"><button>Explore Now  <AiOutlineArrowRight size={30}/></button></NavLink>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className={`d-block w-100 ${styles.imgslide}`} src={elctronics} alt='electronic items'/>
        <Carousel.Caption className={styles.electronicslide}>
          <h3>Less Effort More Magic</h3>
          <p>explore our top and high technological products to lead an effortless life</p>
          <NavLink to="/category/electronics"><button>Explore Now  <AiOutlineArrowRight size={30}/></button></NavLink>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       </div>
       <div>
      <Container className={styles.aboutrow}>
        <Row >
          <Col lg={3} md={6} sm={12}>
            <Card className={styles.about}>
              <div className={styles.abouticons}><FaTruck color='#E48586' size={30} /></div>
           <h5>WorldWide Delivery</h5>
          <p>We deliver our products from a small country side to large town</p>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Card className={styles.about}>
              <div className={styles.abouticons}><BsFillShieldLockFill color='#E48586' size={30}/></div>
          <h5>Secure Payments</h5>
          <p>we provide secure payment methods to pay for your cart</p>
          </Card>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Card className={styles.about}>
              <div className={styles.abouticons}><FaArrowRotateLeft color='#E48586' size={30} /></div>
          <h5>Easy & Simple Returns</h5>
          <p>we provide a simple and easy way to return your products </p>
          </Card>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Card className={styles.about}>
              <div className={styles.abouticons}><BsFillBookmarkStarFill color='#E48586' size={30}/></div>
          <h5>Superior Quality</h5>
          <p>we prioritize our products quality over quantity .</p>
          </Card>
          </Col>  
        </Row>
      </Container>
      </div>
      </div>
      <div className={styles.main2}>
        <Container>
        <h1 className={styles.heading1}> <AiOutlineArrowDown/> Explore Our Products</h1>
        <Row>
            {products.map((product)=>(
                <Col lg={3} md={6} sm={12} key={product.id}>
                  <CardComp product={product}/>
                </Col>
            ))}
        </Row>
        </Container>
      </div>
      </div>
      )
}

export default Home;