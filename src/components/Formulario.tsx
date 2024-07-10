'use client'

import { useState } from 'react'
import { insertProduto, updateProduto } from '@/app/action'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { TypeProduto } from '@/types'
import { useToast } from '@/components/ui/use-toast'

interface Props {
  children: React.ReactNode
  produto?: TypeProduto
}

export default function Formulario({ children, produto }: Props) {
  const { toast } = useToast()

  const [open, setOpen] = useState(false)

  const [nome, setNome] = useState(produto?.nome || '')
  const [unidades, setUnidades] = useState(produto?.unidades || 0)
  const [valorUnitario, setValorUnitario] = useState(
    produto?.valorUnitario || 0,
  )

  const onSubmit = async () => {
    if (produto) {
      const produtoAtualizado = {
        _id: produto._id,
        nome,
        unidades,
        valorUnitario,
      }

      const res = await updateProduto(produto._id, produtoAtualizado)

      if (res.success) {
        setNome('')
        setUnidades(0)
        setValorUnitario(0)
        setOpen(false)
        return toast({
          title: 'Produto editado com sucesso',
        })
      }

      return null
    }

    const novoProduto = {
      _id: '',
      nome,
      unidades,
      valorUnitario,
    }

    const res = await insertProduto(novoProduto)

    if (res.success) {
      setNome('')
      setUnidades(0)
      setValorUnitario(0)
      setOpen(false)
      return toast({
        title: 'Produto inserido com sucesso',
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="bg-slate-200">
        <form action={onSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="nome" className="font-medium">
              Nome do produto
            </label>
            <input
              required
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="rounded-lg border-2 border-slate-400 px-2 py-1"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="unidades" className="font-medium">
              Unidades disponíveis
            </label>
            <input
              required
              type="number"
              id="unidades"
              value={unidades}
              onChange={(e) => setUnidades(Number(e.target.value))}
              className="rounded-lg border-2 border-slate-400 px-2 py-1"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="valorUnitario" className="font-medium">
              Valor por unidade
            </label>
            <input
              required
              type="number"
              id="valorUnitario"
              value={valorUnitario}
              onChange={(e) => setValorUnitario(Number(e.target.value))}
              className="rounded-lg border-2 border-slate-400 px-2 py-1"
            />
          </div>
          <button
            type="submit"
            className="mt-5 rounded-lg bg-slate-400 px-6 py-2 text-white transition-colors duration-500 hover:bg-slate-600"
          >
            Adicionar
          </button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
