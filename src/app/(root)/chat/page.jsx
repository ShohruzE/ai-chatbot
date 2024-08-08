import ChatWindow from "@/components/ChatWindow";
import ChatHeader from "@/components/ChatHeader";
import ChatSidebar from "@/components/ChatSidebar";

export default async function Chat() {
    return (
        <div className="relative h-screen w-screen">
            <div className="absolute top-0 left-0 z-50">
                <ChatSidebar />
            </div>
            <div className="ml-[260px] z-0 overflow-hidden">
                <ChatHeader />
                <ChatWindow />
            </div>
        </div>
    )
}