import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from '../components/header/Header';
import PersonasList from '../views/personasList/PersonasList';
import FormPersona from '../views/FormPersonas/FormPersona';

const AppRouter = () => {
 
  return <>
  <Header />
    <Routes>
      <Route path="/" element={ <FormPersona />} />
      <Route path="/PersonasList" element={<PersonasList />} />
    </Routes></>


}

export default AppRouter