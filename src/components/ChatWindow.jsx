"use client";

import { useState, useEffect } from "react";
import Markdown from "react-markdown";

export default function ChatWindow() {
  const [message, setMessage] = useState("");
  const [messageHistory, setMessageHistory] = useState([
    {
      role: "assistant",
      content:
        "Welcome to the Delta Air Lines Customer Support. How can I assist you today?",
    },
  ]);

  const sendMessage = async () => {
    if (!message.trim()) return; // Don't send empty messages

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
    <div className="w-full h-screen flex flex-col overflow-x-hidden">
      <div className="flex flex-col gap-4 p-4 justify-center items-center flex-grow">
        <div className="w-[1000px] h-full border-black border-4 p-4 flex flex-col">
          <div className="grow flex flex-col gap-8 overflow-y-scroll">
            {messageHistory.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "assistant" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`p-4 min-w-9/12 rounded-lg ${
                    message.role === "assistant"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  <Markdown>{message.content}</Markdown>
                </div>
              </div>
            ))}
          </div>
          <div className="shrink-0 flex flex-row gap-4">
            <input
              type="text"
              className="w-full h-12 border border-gray-300 rounded-md p-4"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="border-black bg-slate-500 text-white border-2 rounded-lg px-2"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
