import { Button } from "antd";
import { ColumnsType } from "antd/lib/table";
import { NavLink } from "react-router-dom";
import { IPersona } from "../interfaces/Personas";

export const COLUMNS_PRODUCTS: (onEdit: (id: string) => any, onDelete: (id: string) => any) => ColumnsType<IPersona> = (onEdit?, onDelete?) => [
    {
        title: 'Identificacion',
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: 'Nombre',
        dataIndex: 'nombre',
        key: 'nombre'
    },
    {
        title: 'Apellido',
        dataIndex: 'apellido',
        key: 'apellido'
    },
    {
        title: 'Contraseña',
        dataIndex: 'contraseña',
        key: 'contraseña'
    },
    {
        title: 'Edad',
        dataIndex: 'edad',
        key: 'edad',
    },
    {
        title: 'Acciones',
        dataIndex: 'acciones',
        key: 'acciones',
        render: (_value, record) => <><NavLink to={'/'}>
            <Button onClick={() => onEdit(record.id)}>Editar</Button>
        </NavLink>

            <Button onClick={() => onDelete(record.id)}>Eliminar</Button>
        </>
    }
]