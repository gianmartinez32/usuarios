import { Button, Result } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
   
  return (
    <Result
    status="404"
    title="404"
    subTitle="Lo sentimos, esta pagina no existe"
    extra={ <NavLink to={'/'}><Button style={{
        border: '2px solid',
        backgroundColor: '#58BD5C',
        borderColor: '#58BD5C',
      }} type="primary">Ver Usuarios</Button></NavLink>}
  />
  )
}

export default NotFound