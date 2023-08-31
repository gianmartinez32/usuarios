import React, { createContext, useEffect, useState } from 'react'
import { IPersona } from '../interfaces/Personas'
import { IPropsPersonaProvider } from '../interfaces/Props'

export const personaContext = createContext({})

const data: IPersona[] = [

]

const PersonasProvider = ({ children }: IPropsPersonaProvider) => {
  const [idEdit, setIdEdit] = useState('')
  const [personas, setPersonas] = useState(data)

  useEffect(() => {
    if (personas.length > 0) {
      localStorage.setItem('personas', JSON.stringify(personas))

    }
  }, [personas])

  useEffect(() => {
    const getPersonas = async () => {
      const persons = await localStorage.getItem('personas')
      if (persons) {
        setPersonas(JSON.parse(persons))
      }
    }
    getPersonas()
  }, [])



  return (
    <div>
      <personaContext.Provider value={{ personas, setPersonas, idEdit, setIdEdit }}>
        {children}
      </personaContext.Provider>

    </div>
  )
}

export default PersonasProvider