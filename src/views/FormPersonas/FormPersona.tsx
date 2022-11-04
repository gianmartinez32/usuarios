import React, { useContext, useEffect } from 'react'
import { Layout  } from 'antd';
import { Button, Form, Input, message } from 'antd';
import { IContextPersona } from '../../interfaces/Provider.interfaces';
import { personaContext } from '../../hooks/PersonasProvider';
import { IPersona } from '../../interfaces/Personas';
const {  Content } = Layout;

interface Ivalues  {
  persona:IPersona 
}

const FormPersona = () => {
  const { personas, setPersonas, idEdit,setIdEdit } = useContext(personaContext) as IContextPersona
  const [form] = Form.useForm();

  useEffect(() => {
    if (idEdit !== '') {
      let personaEditar = personas.filter((persona) => persona.id = idEdit)
      form.setFieldValue(['persona', 'id'], personaEditar[0].id)
      form.setFieldValue(['persona', 'nombre'], personaEditar[0].nombre)
      form.setFieldValue(['persona', 'apellido'], personaEditar[0].apellido)
      form.setFieldValue(['persona', 'edad'], personaEditar[0].edad)
      form.setFieldValue(['persona', 'contraseña'], personaEditar[0].contraseña)

    }
  }, [idEdit, form, personas])


  const validarId = (id: number | string) => {
    const ids = personas.map((persona: any) => persona.id)
    return !ids.includes(id)
  }

  const reset = () => {
    form.resetFields()
  }

  const onFailed = () =>{
    message.warning('Debe llenar todos los campos')
  }

  const onFinish = (values: Ivalues) => {

    if (idEdit === '') {
      if (validarId(values.persona.id)) {
        setPersonas([...personas, values.persona])
        message.success('Persona creada correctamente')
        reset()
      } else {
        message.warning('Esta identificacion ya existe')
      }
    }else{
      let index = personas.findIndex((persona)=>persona.id=idEdit)
      
      setPersonas([...personas.slice(index,0),values.persona])

      setIdEdit('')
      reset()
      message.success('Persona editada correctamente')

    }


  }
  return (
    <Layout /* style={{display:'flex', justifyContent:'center'}} */>
      <Content style={{ display: 'flex', width: '100%', alignSelf: 'center', justifyContent: 'center', padding: '10px' }}>


        <Form form={form} name="nest-messages" onFinishFailed={onFailed} onFinish={onFinish}>
          <h1>Usuarios</h1>
          <Form.Item name={['persona', 'id']} label="Id" rules={[{ required: true }]}>
            <Input disabled={idEdit !== ''} type='number' />
          </Form.Item>
          <Form.Item name={['persona', 'nombre']} label="Nombre" rules={[{ required: true }]}>
            <Input type='text' />
          </Form.Item>
          <Form.Item name={['persona', 'apellido']} label="Apellido" rules={[{ required: true }]}>
            <Input type='text' />
          </Form.Item>
          <Form.Item name={['persona', 'contraseña']} label="Contraseña" rules={[{ required: true }]}>
            <Input type='password' />
          </Form.Item>
          <Form.Item name={['persona', 'edad']} label="Edad" rules={[{ required: true }]}>
            <Input type='number' />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8 }}>
            <Button type="primary" htmlType="submit">
             {idEdit === '' ? 'Guardar': 'Editar'}
            </Button>
          </Form.Item>
        </Form>


      </Content>
    </Layout>
    /*  <CardProducto producto={{id:1, nombre:'cocosete', cantidad:0, precio:2200}} /> */
  )
}

export default FormPersona