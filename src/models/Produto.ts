import mongoose, { Schema } from 'mongoose'

const produtoSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  unidades: {
    type: Number,
    required: true,
  },
  valorUnitario: {
    type: Number,
    required: true,
  },
  valorTotal: {
    type: Number,
    required: true,
  },
})

const ProdutoModel =
  mongoose.models.Produto || mongoose.model('Produto', produtoSchema)

export default ProdutoModel
