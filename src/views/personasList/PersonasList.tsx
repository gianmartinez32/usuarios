import { Layout, message, Row, Table } from 'antd'
import { Content, Footer, Header } from 'antd/lib/layout/layout'
import React, { useContext } from 'react'
import { personaContext } from '../../hooks/PersonasProvider'
import { IContextPersona,  } from '../../interfaces/Provider.interfaces'
import { COLUMNS_PRODUCTS } from '../../utils/columns'
;


const PersonasList = () => {
  const { personas, setPersonas, setIdEdit } = useContext(personaContext) as IContextPersona

  const handleEdit = (id: string) => {
    setIdEdit(id)
  }

  const handleDelete = (id: string) => {
    setPersonas(personas.filter((persona)=>persona.id!==id))
    message.info('Persona eliminada correctamente')
  }
  return (
    <Layout /* style={{display:'flex', justifyContent:'center'}} */>
      <Header style={{ backgroundColor: 'white' }}>Lista de Personas</Header>
      <Content style={{ display: 'flex', justifyContent: 'center' }}>

        <Row >
          <Table columns={COLUMNS_PRODUCTS(handleEdit, handleDelete)} dataSource={personas} size='middle'></Table>
        </Row>
      </Content>
      <Footer>Developved by Gian Martinez</Footer>
    </Layout>
  )
}

export default PersonasList