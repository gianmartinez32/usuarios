import React from 'react'
import { Button, PageHeader } from 'antd';
import './index.css'
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
  return (
    <PageHeader
    className="site-page-header"
    style={{border: '1px', color:'white'}}
    onBack={() => navigate('/')}
    title="Usuarios"
    subTitle="Personas"
    extra={[<NavLink  to={'/PersonasList'}><Button type='primary'  >Lista de Personas</Button></NavLink>]}
  />
  
  )
}

export default Header

