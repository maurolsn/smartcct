import { useEffect, useState } from 'react';
import api from '../../utils/api';

export default function Bot() {
  const [intents, setIntents] = useState([]);
  const [name, setName] = useState('');
  const [response, setResponse] = useState('');
  const [editId, setEditId] = useState(null);

  const fetchIntents = async () => {
    try {
      const res = await api.get('/bot/intents');
      setIntents(res.data);
    } catch (err) {
      console.error('Erro ao carregar intenções', err);
    }
  };

  useEffect(() => {
    fetchIntents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { intent_name: name, response };

    try {
      if (editId) {
        await api.put(`/bot/intents/${editId}`, data);
      } else {
        await api.post('/bot/intents', data);
      }
      setName('');
      setResponse('');
      setEditId(null);
      fetchIntents();
    } catch (err) {
      console.error('Erro ao salvar intenção', err);
    }
  };

  const handleEdit = (intent) => {
    setEditId(intent.id);
    setName(intent.intent_name);
    setResponse(intent.response);
  };

  const handleDelete = async (id) => {
    if (confirm('Deseja excluir esta intenção?')) {
      try {
        await api.delete(`/bot/intents/${id}`);
        fetchIntents();
      } catch (err) {
        console.error('Erro ao excluir intenção', err);
      }
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Intenções do Bot</h1>

      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">
          {editId ? 'Editar Intenção' : 'Nova Intenção'}
        </h2>
        <div className="flex space-x-4 mb-4">
          <input
            className="border p-2 rounded w-1/2"
            type="text"
            placeholder="Nome da Intenção"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="border p-2 rounded w-1/2"
            type="text"
            placeholder="Resposta do Bot"
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editId ? 'Salvar Alterações' : 'Adicionar'}
        </button>
      </form>

      <table className="min-w-full bg-white rounded-xl shadow">
        <thead>
          <tr>
            <th className="px-4 py-2">Intenção</th>
            <th className="px-4 py-2">Resposta</th>
            <th className="px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {intents.map((intent) => (
            <tr key={intent.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{intent.intent_name}</td>
              <td className="border px-4 py-2">{intent.response}</td>
              <td className="border px-4 py-2 space-x-2">
                <button
                  onClick={() => handleEdit(intent)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(intent.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
