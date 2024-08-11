export default function ChatHeader() {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-900 text-white">
      <div className="text-2xl font-bold">
        <span>DELTA</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm">United States - English</div>
        <div className="bg-white text-blue-900 rounded-full p-2">
          {/* Profile Icon (placeholder) */}
          <span className="text-2xl">👤</span>
        </div>
      </div>
    </header>
  );
}
