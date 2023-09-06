import React, { useState ,useEffect} from 'react'
import { useParams} from 'react-router-dom';
import { Col, Container, Row,Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {AiOutlineArrowDown} from 'react-icons/ai'
import styles from './Categories.module.css'
import CardComp from './CardComp';
const Categories = () => {

    //a function to convert category heading to capitilize
    function capitalizeEachWord(text) {
        return text
          .toLowerCase() // Convert the entire text to lowercase
          .replace(/(^|\s)\S/g, (match) => match.toUpperCase()); // Capitalize the first letter of each word
      }
      
    const { category } = useParams();
    const[categoryProducts,setCategoryProducts] = useState([]);
   
    useEffect(()=>{
        setCategoryProducts([]);
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
        .then((response)=>{
         setCategoryProducts(response.data);
         console.log(response.data);
        })
        .catch((error)=>{
         console.log("Fetching error",error);
        })
     },[category]);

  return (
    <div className={styles.main}>
        <div>
            {categoryProducts.length>0 ? (<Container>
          <h1 className={styles.heading1}> <AiOutlineArrowDown/>  {capitalizeEachWord(category)}</h1>
            <Row>
            {categoryProducts.map((product)=>(
                <Col lg={3} md={6} sm={12} key={product.id}>
                  <CardComp product={product}/>
                </Col>
            ))}
        </Row>
          </Container>):
          (<div className={styles.spinnericon}>
      <Spinner className={styles.spinner} animation="border" variant="dark" />
      </div>)}
        </div>
    </div>
  )
}

export default Categories