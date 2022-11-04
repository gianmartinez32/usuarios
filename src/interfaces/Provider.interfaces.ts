import { IPersona } from "./Personas";


export interface IContextPersona{
    personas: IPersona[]
    setPersonas: React.Dispatch<React.SetStateAction<IPersona[]>>
    idEdit: string
    setIdEdit: React.Dispatch<React.SetStateAction<string>>
}


