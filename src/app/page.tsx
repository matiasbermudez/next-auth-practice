"use client"
import { useState } from 'react'
import './page.css'
import Contactos from './contactos/page'
import LogIn from './components/logIn'
import ButtonAuth from './components/ButtonAuth'
export default function Home() {
 
  const [login, setLogin] = useState(false)
  return (
    <>
  
    {login ?   <Contactos/>  : <LogIn/>  }
  
    <ButtonAuth />
     
    </>
  );
}
