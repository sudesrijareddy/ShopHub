import React,{useState} from 'react'
import { Form} from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {FaUserAlt} from 'react-icons/fa';
import styles from './Signup.module.css';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  console.log(JSON.parse(localStorage.getItem('users')) || []);
  const handleLogin = (event) => {
    event.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.some(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      alert('Login successful');
      window.location.href = '/'; // Change '/' to the URL of your home page
      setError('');
      setPassword('');
      setEmail('');
      
    } else {
      setError("please check your email and password");
    }
    
  };

  // Clear the error message when typing in the email field
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  // Clear the error message when typing in the password field
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.main1}>
           <h1 className={styles.heading1}> <FaUserAlt size={37}/>   Login</h1>
        <div className={styles.formdiv} >
        <Form onSubmit={handleLogin} className={styles.signupform} >
        <Form.Label className={styles.formlabel} htmlFor="email">Email:</Form.Label>
        <Form.Control
          className={styles.forminput} 
          placeholder='Enter Email'
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}    />
        <Form.Label className={styles.formlabel} htmlFor="password">Password:</Form.Label>
        <div className={styles.passwordInput}>
        <Form.Control
          className={styles.forminput} 
          placeholder='Enter Password'
          type={showPassword?'text':'password'}
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <span className={styles.toggleicon} onClick={togglePasswordVisibility}>
          {showPassword ?  <FaEye color='#445069' size={25} />:<FaEyeSlash color='#445069' size={25}/> }
        </span>
        </div>
        <button type='submit' className={styles.signupbtn}>Login</button>
        {error&&<p className={styles.errortext}>{error}</p>}
      </Form>
      <p className={styles.loginpara}>If you are new user, please <NavLink className={styles.signuplink} to="/signup">SignUp</NavLink> Here</p>

        </div>
    </div>
  )
}

export default Login