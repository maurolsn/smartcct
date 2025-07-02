export default function Users() {
  const users = [
    { id: 1, name: 'João Silva', email: 'joao@empresa.com' },
    { id: 2, name: 'Maria Souza', email: 'maria@empresa.com' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Usuários</h1>
      <table className="min-w-full bg-white rounded-xl">
        <thead>
          <tr>
            <th className="px-4 py-2">Nome</th>
            <th className="px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
