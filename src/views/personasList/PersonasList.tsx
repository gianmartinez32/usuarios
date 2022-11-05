import { Button, Layout, message, Result, Row, Table } from 'antd'
import { Content, Footer } from 'antd/lib/layout/layout'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { personaContext } from '../../hooks/PersonasProvider'
import { IContextPersona, } from '../../interfaces/Provider.interfaces'
import { COLUMNS_PRODUCTS } from '../../utils/columns'
  ;


const PersonasList = () => {
  const { personas, setPersonas, setIdEdit } = useContext(personaContext) as IContextPersona


  const handleEdit = (id: string) => {
    setIdEdit(id)
  }

  const handleDelete = (id: string) => {
    setPersonas(personas.filter((persona) => persona.id !== id))
    message.info('Persona eliminada correctamente')
  }
  return (
    <Layout>
      <Content style={{ display: 'flex', justifyContent: 'center' }}>
        <Row style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: 'white' }} >
          {personas.length > 0 ?
            <Table
            scroll={{x:true}}
              style={{ width: '100%' }}
              columns={COLUMNS_PRODUCTS(handleEdit, handleDelete)}
              dataSource={personas}
              size='middle' />
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