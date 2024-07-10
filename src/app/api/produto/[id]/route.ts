import produto from '@/services/produto'

interface Props {
  params: {
    id: string
  }
}

export async function DELETE(request: Request, { params }: Props) {
  const idProduto = params.id

  try {
    await produto.delete(idProduto)

    return new Response(
      JSON.stringify({ message: 'Produto excluido com sucesso' }),
      { status: 200 },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Erro ao excluir um produto' }),
      { status: 400 },
    )
  }
}

export async function PATCH(request: Request, { params }: Props) {
  const idProduto = params.id
  const produtoEditado = await request.json()

  try {
    await produto.update(idProduto, produtoEditado)

    return new Response(
      JSON.stringify({ message: 'Produto editado com sucesso' }),
      { status: 200 },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Erro ao editar um produto' }),
      { status: 400 },
    )
  }
}
