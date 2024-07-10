import mongoose from 'mongoose'

const mongoUrl = 'mongodb://localhost:27017/bd_avaliacao03'

mongoose.connect(mongoUrl)

const db = mongoose.connection

db.on('error', () => {
  console.log('Erro ao conectar no banco de dados')
})

db.once('open', () => {
  console.log('Conectado no banco de dados')
})

export default db
