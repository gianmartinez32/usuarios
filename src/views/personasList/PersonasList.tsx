import { Button, Card, Layout, List, message, Result, Row, Select, Table, Typography } from 'antd'
import { Content, Footer } from 'antd/lib/layout/layout'
import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { personaContext } from '../../hooks/PersonasProvider'
import { IContextPersona, } from '../../interfaces/Provider.interfaces'
import { COLUMNS_PRODUCTS, EMPLEADOS_OPTION } from '../../utils/columns'
  ;


const PersonasList = () => {
  const { personas, setPersonas, setIdEdit } = useContext(personaContext) as IContextPersona

  const [filter, setfilter] = useState<any[]>([])


  const handleEdit = (id: string) => {
    setIdEdit(id)
  }

  const handleDelete = (id: string) => {
    setPersonas(personas.filter((persona) => persona.id !== id))
    message.info('Persona eliminada correctamente')
  }
  return (
    <Layout>
      <Content style={{ display: 'flex', justifyContent: 'center', flexDirection:'column' }}>
      <Row style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: 'white', padding:'50px',  }} >
        <Select value={filter} onChange={(e)=>setfilter(e)} placeholder='seleccione tipo de empleado' style={{width:'100%'}} options={EMPLEADOS_OPTION} mode='multiple'/>
      </Row>
        <Row style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: 'white', paddingInline:50 }} >
          {personas.length > 0 ?
            <>
              <List
                dataSource={filter.length > 0 ? personas.filter(persona => filter.includes(persona.rol)): personas}
                style={{width: '100%'}}
                renderItem={(item) => {
                  return <Card bordered hoverable title={`${item.id} - ${item.nombre.toUpperCase()}`} style={{
                    color:'black',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    borderRadius:'9px',
                    margin:10
                  }}>
                    <Typography>Nombre: {item.nombre}</Typography>
                    <Typography>Apellido: {item.apellido}</Typography>
                    <Typography>Edad: {item.edad}</Typography>
                    <Typography>Contraseña: {item.contraseña}</Typography>
                    <Typography>Rol: {item.rol}</Typography>

                  </Card>
                }}
                grid={{ gutter: 16, lg:5, md:4, sm:1, xl:4, xs:1, xxl:1 }}
              />
            </>
            :
            <Result
              title="No hay usuarios registrados"
              extra={
                <NavLink to={'/form'}>
                  <Button style={{
                    border: '2px solid',
                    backgroundColor: '#58BD5C',
                    borderColor: '#58BD5C',
                  }} type="primary" key="console">
                    Crear Usuario
                  </Button>
                </NavLink>
              }
            />
          }
        </Row>
      </Content>
      <Footer style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        justifyContent: 'end'
      }}>
        Developed by Gian Martinez
      </Footer>
    </Layout>
  )
}

export default PersonasList