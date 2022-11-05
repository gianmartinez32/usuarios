import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import Header from '../components/header/Header';
import PersonasList from '../views/personasList/PersonasList';
import FormPersona from '../views/FormPersonas/FormPersona';
import NotFound from '../views/NotFound';

const AppRouter = () => {
 const location = useLocation()
  return <>
  {(location.pathname==='/' || location.pathname ==='/form') && <Header />}
    <Routes>
      <Route path="/" element={<PersonasList /> } />
      <Route path="/form" element={<FormPersona />} />
      <Route path="*" element={<NotFound />} />
    </Routes></>


}

export default AppRouter