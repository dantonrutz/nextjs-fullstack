import produto from '@/services/produto'

export async function GET() {
  try {
    const listaDeProdutos = await produto.getAll()

    const valorTotalGeral = listaDeProdutos.reduce((acc, produto) => {
      return acc + produto.valorTotal
    }, 0)

    return new Response(
      JSON.stringify({
        listaDeProdutos,
        valorTotalGeral,
      }),
      { status: 200 },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Erro ao buscar a lista de produtos' }),
      { status: 400 },
    )
  }
}

export async function POST(request: Request) {
  const novoProduto = await request.json()

  try {
    await produto.insert(novoProduto)

    return new Response(
      JSON.stringify({ message: 'Produto inserido com sucesso' }),
      { status: 200 },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Erro ao inserir um produto' }),
      { status: 400 },
    )
  }
}
