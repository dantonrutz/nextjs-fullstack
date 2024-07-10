'use server'

import { TypeProduto } from '@/types'
import { revalidateTag } from 'next/cache'

export async function deleteProdutoByID(id: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/produto/${id}`, {
      method: 'DELETE',
    })

    if (!res.ok) {
      throw new Error('Erro ao excluir um produto')
    }

    revalidateTag('getTabelaDeProdutos')
    return { success: true }
  } catch (error) {
    return { success: false }
  }
}

export async function insertProduto(produto: TypeProduto) {
  try {
    const res = await fetch('http://localhost:3000/api/produto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(produto),
    })

    if (!res.ok) {
      throw new Error('Erro ao inserir um produto')
    }

    revalidateTag('getTabelaDeProdutos')
    return { success: true }
  } catch (error) {
    return { success: false }
  }
}

export async function updateProduto(id: string, produto: TypeProduto) {
  try {
    const res = await fetch(`http://localhost:3000/api/produto/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(produto),
    })

    if (!res.ok) {
      throw new Error('Erro ao editar um produto')
    }

    revalidateTag('getTabelaDeProdutos')
    return { success: true }
  } catch (error) {
    return { success: false }
  }
}
