import React, { useContext, useEffect } from 'react'
import { Layout, Typography } from 'antd';
import { Button, Form, Input, message } from 'antd';
import { IContextPersona } from '../../interfaces/Provider.interfaces';
import { personaContext } from '../../hooks/PersonasProvider';
import { IPersona } from '../../interfaces/Personas';
import { useNavigate } from 'react-router-dom';
import { IStyles } from '../../interfaces/Props';
const { Content } = Layout;

interface Ivalues {
  persona: IPersona
}
const styles:IStyles = {
  input: {
    border: '2px solid',
    borderColor: '#58BD5C',
  },
  btn: {
    border: '2px solid',
    backgroundColor: '#58BD5C',
    borderColor: '#58BD5C',
  },
  content:{
    backgroundColor: 'white',
    display: 'flex',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: '10px'
  },
  form:{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '20px'
  }
}

const FormPersona = () => {
  const { personas, setPersonas, idEdit, setIdEdit } = useContext(personaContext) as IContextPersona
  const [form] = Form.useForm();
  const navigate = useNavigate()

  useEffect(() => {
    if (idEdit !== '') {
      let personaEditar = personas.filter((persona) => persona.id === idEdit)

      form.setFieldValue(['persona', 'id'], personaEditar[0].id)
      form.setFieldValue(['persona', 'nombre'], personaEditar[0].nombre)
      form.setFieldValue(['persona', 'apellido'], personaEditar[0].apellido)
      form.setFieldValue(['persona', 'edad'], personaEditar[0].edad)
      form.setFieldValue(['persona', 'contraseña'], personaEditar[0].contraseña)

    }
  }, [idEdit,form,personas])


  const validarId = (id: number | string) => {
    const ids = personas.map((persona: any) => persona.id)
    return !ids.includes(id)
  }

  const reset = () => {
    form.resetFields()
  }

  const onFailed = () => {
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
    } else {
      let index = personas.findIndex((persona) => persona.id === idEdit)
      personas.splice(index, 1)
      setPersonas([...personas, values.persona])
      setIdEdit('')
      reset()
      message.success('Persona editada correctamente')
      navigate('/')
    }


  }
  return (
    <Layout>
      <Content style={styles.content}>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
          style={styles.form}
          form={form}
          name="nest-messages"
          onFinishFailed={onFailed}
          onFinish={onFinish}>

          <Typography style={{ alignSelf: 'center', fontSize: '25px' }}>
            {idEdit === '' ? 'Nuevo Usuario' : 'Editar Usuario'}
          </Typography>
          <Form.Item name={['persona', 'id']} label="Id" rules={[{ required: true }]}>
            <Input style={styles.input} disabled={idEdit !== ''} type='number' />
          </Form.Item>
          <Form.Item name={['persona', 'nombre']} label="Nombre" rules={[{ required: true }]}>
            <Input style={styles.input} type='text' />
          </Form.Item>
          <Form.Item name={['persona', 'apellido']} label="Apellido" rules={[{ required: true }]}>
            <Input style={styles.input} type='text' />
          </Form.Item>
          <Form.Item name={['persona', 'contraseña']} label="Contraseña" rules={[{ required: true }]}>
            <Input style={styles.input} type='password' />
          </Form.Item>
          <Form.Item name={['persona', 'edad']} label="Edad" rules={[{ required: true }]}>
            <Input style={styles.input} type='number' />
          </Form.Item>
          <Form.Item style={{ alignSelf: 'center' }}>
            <Button style={styles.btn} type="primary" htmlType="submit">
              {idEdit === '' ? 'Guardar' : 'Editar'}
            </Button>
          </Form.Item>
        </Form>


      </Content>
    </Layout>
  )
}

export default FormPersona