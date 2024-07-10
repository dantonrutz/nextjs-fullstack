import { Pencil } from 'lucide-react'
import Formulario from '@/components/Formulario'
import { TypeProduto } from '@/types'

interface Props {
  produto: TypeProduto
}

export default function Editar({ produto }: Props) {
  return (
    <Formulario produto={produto}>
      <Pencil size={20} strokeWidth={2.5} className="text-blue-400" />
    </Formulario>
  )
}
