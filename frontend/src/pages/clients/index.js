export default function Clients() {
  const clients = [
    { id: 1, name: 'Empresa A', apiKey: '123-abc' },
    { id: 2, name: 'Empresa B', apiKey: '456-def' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Clientes</h1>
      <table className="min-w-full bg-white rounded-xl">
        <thead>
          <tr>
            <th className="px-4 py-2">Nome</th>
            <th className="px-4 py-2">API Key</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{client.name}</td>
              <td className="border px-4 py-2">{client.apiKey}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
