

export default function ChatWindow() {
  return (
    <div className="w-full h-screen flex flex-col overflow-x-hidden">
        <div className="flex flex-col gap-4 p-4 justify-center items-center flex-grow">
            <div className="w-[1000px] h-full border-black border-4 p-4 flex flex-col">
                <div className="grow flex flex-col gap-8 overflow-y-scroll">
                    <div className="text-sm">Welcome to Delta Air Lines. How can I assist you today?</div>
                    {/* Add more messages here */}
                </div>
                <div className="shrink-0">
                    <input type="text" className="w-full h-12 border border-gray-300 rounded-md p-4" placeholder="Type a message..." />
                </div>
            </div>
        </div>
    </div>
  )
}