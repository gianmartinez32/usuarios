import React, { createContext, useState } from 'react'
import { IPersona } from '../interfaces/Personas'
import { IPropsPersonaProvider } from '../interfaces/Props'

export const personaContext = createContext({})

const data: IPersona[] = [

]





const PersonasProvider = ({children}:IPropsPersonaProvider) => {
    const [idEdit, setIdEdit] = useState('')
    const [personas, setPersonas] = useState(data)

    return (
      <div> 
      <personaContext.Provider value={{personas, setPersonas, idEdit, setIdEdit}}>
        {children}
      </personaContext.Provider>
    
      </div>
    )
}

export default PersonasProvider