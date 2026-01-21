export default function AdminPromotionsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Акции</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Добавить акцию
        </button>
      </div>
      <div className="bg-white rounded-lg shadow">
        <div className="p-4">
          <p className="text-gray-500">Список акций будет здесь</p>
        </div>
      </div>
    </div>
  )
}
