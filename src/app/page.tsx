import Adicionar from '@/components/Adicionar'
import TabelaProdutos from '@/components/TabelaProdutos'

export default function Home() {
  return (
    <main className="flex flex-col gap-10 bg-white px-40 pb-40 pt-20">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-2xl font-bold text-black">Produtos cadastrados</h1>
        <Adicionar />
      </div>
      <TabelaProdutos />
    </main>
  )
}
