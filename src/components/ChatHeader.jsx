export default function ChatHeader() {
    return (
        <div className="">
            <header className="flex justify-between items-center p-4 border-b border-gray-200">
                <div>
                    <h1 className="text-xl font-bold ml-2">AI Chatbot</h1>
                </div>
                <div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Sign Out</button>
                </div>
            </header>
        </div>

    )
}