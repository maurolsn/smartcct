export default function Bot() {
  const intents = [
    { id: 1, name: 'Saudação', response: 'Olá! Como posso ajudar?' },
    { id: 2, name: 'Agradecimento', response: 'De nada! Conte sempre comigo.' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Intenções do Bot</h1>
      <table className="min-w-full bg-white rounded-xl">
        <thead>
          <tr>
            <th className="px-4 py-2">Intenção</th>
            <th className="px-4 py-2">Resposta</th>
          </tr>
        </thead>
        <tbody>
          {intents.map(intent => (
            <tr key={intent.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{intent.name}</td>
              <td className="border px-4 py-2">{intent.response}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
