export default function FAQs() {
  return (
    <div className="max-w-[1200px] mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">FAQs</h2>

      <div className="space-y-4">
        <details className="bg-black-sec p-4 rounded-lg shadow-sm">
          <summary className="font-semibold cursor-pointer">
            What is this platform about?
          </summary>
          <p className="mt-2 text-gray-500">
            This is an esports platform where you can join tournaments, track your progress, and win rewards.
          </p>
        </details>

        <details className="bg-black-sec p-4 rounded-lg shadow-sm">
          <summary className="font-semibold cursor-pointer">
            How can I join a tournament?
          </summary>
          <p className="mt-2 text-gray-500">
            You can register by creating an account and selecting a tournament from the games list.
          </p>
        </details>

        <details className="bg-black-sec p-4 rounded-lg shadow-sm">
          <summary className="font-semibold cursor-pointer">
            Is there a joining fee?
          </summary>
          <p className="mt-2 text-gray-500">
            Some tournaments are free, while others may have entry fees listed on the event page.
          </p>
        </details>
      </div>
    </div>
  );
}
