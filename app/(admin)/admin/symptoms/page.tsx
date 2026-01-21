export default function AdminSymptomsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Что мы лечим</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Добавить
        </button>
      </div>
      <div className="bg-white rounded-lg shadow">
        <div className="p-4">
          <p className="text-gray-500">Список будет здесь</p>
        </div>
      </div>
    </div>
  )
}
