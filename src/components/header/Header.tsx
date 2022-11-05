import React, { useContext } from 'react'
import { Button, PageHeader, Typography } from 'antd';
import './index.css'
import { NavLink, useLocation, useNavigate, } from 'react-router-dom';
import { IContextPersona } from '../../interfaces/Provider.interfaces';
import { personaContext } from '../../hooks/PersonasProvider';

const Header = () => {
  const { idEdit, personas } = useContext(personaContext) as IContextPersona
  const navigate = useNavigate()
  const location = useLocation()
  const isEditing = idEdit === '' ? 'Crear Usuario' : 'Editar Usuario'
  const title =  location.pathname === '/' ? 'Usuarios' : isEditing
  return (
    <PageHeader
      backIcon={`${location.pathname}` === '/' ? false : undefined}
      className="site-page-header"
      onBack={() => navigate(-1)}
      title={<Typography style={{ color: '#F0F1F3' }}>{title}</Typography>}
      extra={[
        <NavLink key={'btn1'} to={location.pathname === '/form' ? '/' : '/form'}>
          <Button key={'btn'} type='primary' style={{ backgroundColor: 'transparent', borderColor: '#F0F1F3' }}>
            {location.pathname === '/' ? 'Crear Usuario' : `Usuarios (${personas.length})`}
          </Button>
        </NavLink>]}
    />

  )
}

export default Header

