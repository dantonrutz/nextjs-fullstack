import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Excluir from './Excluir'
import Editar from './Editar'
import { TypeProduto } from '@/types'

async function getTabelaDeProdutos() {
  try {
    const res = await fetch('http://localhost:3000/api/produto', {
      cache: 'no-store',
      next: { tags: ['getTabelaDeProdutos'] },
    })

    if (!res.ok) {
      throw new Error('Erro ao buscar a lista de produtos')
    }

    return await res.json()
  } catch (error) {
    return []
  }
}

export default async function TabelaProdutos() {
  const { listaDeProdutos, valorTotalGeral } = await getTabelaDeProdutos()

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Produto</TableHead>
          <TableHead className="text-center">Unidades</TableHead>
          <TableHead className="text-center">Valor unitário</TableHead>
          <TableHead className="text-center">Valor total</TableHead>
          <TableHead className="text-center">Editar</TableHead>
          <TableHead className="text-center">Excluir</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {listaDeProdutos.map((produto: TypeProduto) => (
          <TableRow key={produto._id}>
            <TableCell>{produto._id}</TableCell>
            <TableCell>{produto.nome}</TableCell>
            <TableCell className="text-center">{produto.unidades}</TableCell>
            <TableCell className="text-center">
              ${produto.valorUnitario}
            </TableCell>
            <TableCell className="text-center">${produto.valorTotal}</TableCell>
            <TableCell className="text-center">
              <Editar produto={produto} />
            </TableCell>
            <TableCell className="text-center">
              <Excluir id={produto._id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell colSpan={1} className="text-center">
            ${valorTotalGeral}
          </TableCell>
          <TableCell colSpan={2} className="text-center"></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
