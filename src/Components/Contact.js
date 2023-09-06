import React,{useState} from 'react'
import styles from './Contact.module.css';
import { Col, Container,Form, Row } from 'react-bootstrap';
import { AiFillPhone,AiFillInstagram } from 'react-icons/ai';
import {FaHand,FaTwitter,FaLinkedin} from 'react-icons/fa6'
import {FaFacebookSquare} from 'react-icons/fa'
import {IoStorefront,IoMail} from 'react-icons/io5'
import {RiQuestionAnswerFill} from 'react-icons/ri'

const Contact = () => {
  const[email,setEmail] = useState('');
    const[emailError,setEmailError] = useState('');

    //validating email
  const handleEmail = (event) =>{

    setEmail(event.target.value);
    const newErrors = [];

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      newErrors.push("Invalid email address.");
    }

    // Set the array of errors
    setEmailError(newErrors);

  }

  return (
    <div className={styles.main1}>
      <Container>
        <div className={styles.flexbox}>
        <Row style={{paddingBottom:"250px"}}>
        <Col className={styles.contactinfo} sm={12} md={6}>
          <div>
         <h1 className={styles.heading1}>Say Hello <FaHand/></h1>
         <p className={styles.para1}>Our site always provides best and top quality products. we have all top brands where you can explore and shop to become a trending and stylish person. we always choose quality over quantity.  </p>
         <ul className={styles.list}>
          <li><IoStorefront/>  212 7th St SE, Washington, DC 20003, USA</li>
          <li><IoMail/> shophub@gmail.com</li>
          <li><AiFillPhone/> 123-456-7890/91</li>
         </ul>
         </div>
        </Col> 
        <Col className={styles.contactform} sm={12} md={6}>
          <div className={styles.formdiv}>
            <h3>Ask Your Queries <RiQuestionAnswerFill/></h3>
        <Form className={styles.msgform} >
      <Form.Group className="mb-3" controlId="email">
        <Form.Control onChange={handleEmail} required className={styles.forminput} type="email" placeholder="Enter your email" />
        {emailError&&<p className={styles.errortext}>{emailError}</p>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="subject">
        <Form.Control required className={styles.forminput} placeholder='Subject' type="text"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="message">
        <Form.Control required className={styles.forminput} as="textarea" type='text' placeholder='Message' rows={3} />
      </Form.Group>
      <button>Send Message</button>
    </Form>
    </div>
        </Col>
        </Row>
        </div>
      </Container>
      <Row className={styles.footer}>
          <Col className={styles.icons} sm={12}>
           <span><AiFillInstagram/></span>
           <span><FaFacebookSquare/></span>
           <span><FaTwitter/></span>
           <span><FaLinkedin/></span>
          </Col>
          <p>@CopyRight 2023 | Shophub</p>
        </Row>
    </div>
  )
}

export default Contact