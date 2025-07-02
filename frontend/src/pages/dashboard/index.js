export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow">Total de Usuários: 5</div>
        <div className="bg-white p-4 rounded-xl shadow">Total de Clientes: 3</div>
        <div className="bg-white p-4 rounded-xl shadow">Conversas Ativas: 12</div>
        <div className="bg-white p-4 rounded-xl shadow">Intenções do Bot: 20</div>
      </div>
    </div>
  )
}
