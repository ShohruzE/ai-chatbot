"use client";

import { useState } from "react";
import Markdown from "react-markdown";

export default function ChatWindow() {
  const [message, setMessage] = useState("");
  const [messageHistory, setMessageHistory] = useState([
    {
      role: "assistant",
      content: "Hi, my name is Delta AI! How can I assist you?",
    },
  ]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setMessageHistory((messageHistory) => [
      ...messageHistory,
      { role: "user", content: message },
      { role: "assistant", content: "" },
    ]);
    setMessage("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          ...messageHistory,
          { role: "user", content: message },
        ]),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const text = decoder.decode(value, { stream: true });
        setMessageHistory((messageHistory) => {
          let lastMessage = messageHistory[messageHistory.length - 1];
          let otherMessages = messageHistory.slice(
            0,
            messageHistory.length - 1
          );
          return [
            ...otherMessages,
            { ...lastMessage, content: lastMessage.content + text },
          ];
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessageHistory((messages) => [
        ...messages,
        {
          role: "assistant",
          content:
            "I'm sorry, but I encountered an error. Please try again later.",
        },
      ]);
    }
  };

  return (
    <div className="flex flex-col flex-grow justify-center min-w-8/12 bg-gray-100 p-4">
      <div className="flex-grow overflow-y-auto">
        {messageHistory.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "assistant" ? "justify-start" : "justify-end"
            } mb-4`}
          >
            <div
              className={`px-4 py-2 max-w-5xl rounded-lg ${
                message.role === "assistant"
                  ? "bg-blue-500 text-white"
                  : "bg-slate-500 text-white"
              }`}
            >
              <Markdown>{message.content}</Markdown>
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <input
          type="text"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Message Delta AI"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="ml-2 px-4 py-2 bg-red-600 text-white rounded-md"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
