export default function Page() {
  return (
    <div className="p-4">
      <form action="submit" method="post">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-200 font-bold mb-2">Full Name:</label>
          <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></input>
          <label htmlFor="tag" className="block text-gray-200 font-bold mb-2">Gamer tag:</label>
          <input type="text" id="game_tag" name="tag" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></input>
          <label htmlFor="email" className="block text-gray-200 font-bold mb-2 mt-4">Email:</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 required:tr" required></input></div>
          <label htmlFor="game" className="block text-gray-200 font-bold mb-2">Favourite Game Title:</label>
          <input type="text" id="game" name="tag" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></input>
        <button
          type="submit" className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Submit </button>
      </form>
    </div>
  );
}
