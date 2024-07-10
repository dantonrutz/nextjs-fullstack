'use client'

import { deleteProdutoByID } from '@/app/action'
import { Trash2 } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'

interface Props {
  id: string
}

export default function Excluir({ id }: Props) {
  const { toast } = useToast()

  const onSubmit = async () => {
    const res = await deleteProdutoByID(id)

    if (res.success) {
      return toast({
        title: 'Produto removido com sucesso',
      })
    }
  }

  return (
    <form className="flex justify-center" action={onSubmit}>
      <button type="submit">
        <Trash2 size={20} strokeWidth={2.5} className="text-red-600" />
      </button>
    </form>
  )
}
