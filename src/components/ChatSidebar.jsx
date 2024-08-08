export default function ChatSidebar() {
    return (
        <div className="w-[260px] h-screen bg-gray-100 flex flex-col gap-4 p-4">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-black rounded-full"></div>
                    <div className="flex flex-col">
                        <div className="text-lg font-semibold">Delta Air Lines</div>
                        <div className="text-sm text-gray-500">Online</div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-black rounded-full"></div>
                    <div className="flex flex-col">
                        <div className="text-lg font-semibold">Delta Air Lines</div>
                        <div className="text-sm text-gray-500">Online</div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-black rounded-full"></div>
                    <div className="flex flex-col">
                        <div className="text-lg font-semibold">Delta Air Lines</div>
                        <div className="text-sm text-gray-500">Online</div>
                    </div>
                </div>
            </div>
        </div>
    )
}