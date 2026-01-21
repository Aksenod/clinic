export default function AdminArticlesPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Статьи</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Добавить статью
        </button>
      </div>
      <div className="bg-white rounded-lg shadow">
        <div className="p-4">
          <p className="text-gray-500">Список статей будет здесь</p>
        </div>
      </div>
    </div>
  )
}
