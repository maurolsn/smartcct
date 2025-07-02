export default function Conversations() {
  const conversations = [
    { id: 1, channel: 'WhatsApp', startedAt: '2024-06-01', status: 'Ativa' },
    { id: 2, channel: 'Telefonia', startedAt: '2024-06-02', status: 'Encerrada' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Conversas</h1>
      <table className="min-w-full bg-white rounded-xl">
        <thead>
          <tr>
            <th className="px-4 py-2">Canal</th>
            <th className="px-4 py-2">Início</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {conversations.map(conv => (
            <tr key={conv.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{conv.channel}</td>
              <td className="border px-4 py-2">{conv.startedAt}</td>
              <td className="border px-4 py-2">{conv.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
