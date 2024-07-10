import { Plus } from 'lucide-react'
import Formulario from '@/components/Formulario'

export default function Adicionar() {
  return (
    <Formulario>
      <span className="flex flex-row items-center gap-4 rounded-lg border-2 border-black bg-black/60 px-6 py-1 text-white transition-colors duration-500 hover:bg-black">
        Adicionar
        <Plus size={20} strokeWidth={2.5} />
      </span>
    </Formulario>
  )
}
