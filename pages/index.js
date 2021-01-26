import Head from 'next/head'
import React,{useState} from 'react';

import styles from '../styles/Home.module.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../components/login';
import Songs from '../components/songs'


export default function Home() {
  const [token,setToken] = useState('');

  const userLogin = (tok) =>{
    setToken(tok)
    console.log(tok);
    
  }
  return (
    <>
    <headre>
      <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      </Nav>
      </Navbar>  
    </headre>
    <body>
      <Login userLogin={userLogin}/>
      <Songs token={token}/>
    </body>
   </>
  )
}
// export async function getServerSideProps(context){
//   const id = context.query.id
//   console.log(id)
//   const res = await fetch(`https://songappapi.herokuapp.com/api/v1/songs/`);
//   const dataObj = await res.json();
//   return { props: {comics: dataObj} };
// }