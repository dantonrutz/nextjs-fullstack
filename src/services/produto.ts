import { TypeProduto } from '@/types'
import '../mongoConnection'
import ProdutoModel from '@/models/Produto'

export const produto = {
  async getAll() {
    return await ProdutoModel.find()
  },

  async insert(novoProduto: TypeProduto) {
    const produto = {
      nome: novoProduto.nome,
      unidades: novoProduto.unidades,
      valorUnitario: novoProduto.valorUnitario,
      valorTotal: novoProduto.unidades * novoProduto.valorUnitario,
    }

    await ProdutoModel.create(produto)
  },

  async delete(id: string) {
    await ProdutoModel.findByIdAndDelete(id)
  },

  async update(id: string, produtoEditado: TypeProduto) {
    const produto = {
      nome: produtoEditado.nome,
      unidades: produtoEditado.unidades,
      valorUnitario: produtoEditado.valorUnitario,
      valorTotal: produtoEditado.unidades * produtoEditado.valorUnitario,
    }

    await ProdutoModel.findByIdAndUpdate(id, produto)
  },
}

export default produto
