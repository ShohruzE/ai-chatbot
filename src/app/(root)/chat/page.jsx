import ChatWindow from "@/components/ChatWindow";
import ChatHeader from "@/components/ChatHeader";
import ChatSidebar from "@/components/ChatSidebar";

export default function Chat() {
  return (
    <div className="relative h-screen w-screen flex">
      {/* Sidebar */}
      <div className="w-[260px] bg-blue-900">
        <ChatSidebar />
      </div>
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="bg-blue-900">
          <ChatHeader />
        </div>
        <ChatWindow />
      </div>
    </div>
  );
}
