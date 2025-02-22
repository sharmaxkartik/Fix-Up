"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Copy, Download, ThumbsUp, ThumbsDown, Send } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  role: "agent" | "user"
  content: string
  timestamp: string
}

export default function ChatInterface() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "agent",
      content: "Hello, I am a Fixie Gemini based AI agent. How may I assist you today?",
      timestamp: "4:08:28 PM",
    },
    {
      role: "user",
      content: "Hi, I'd like to check my bill.",
      timestamp: "4:08:37 PM",
    },
    {
      role: "agent",
      content:
        "Please hold for a second.\n\nOk, I can help you with that\n\nI'm pulling up your current bill information\n\nYour current bill is $150, and it is due on August 31, 2024.\n\nIf you need more details, feel free to ask!",
      timestamp: "4:08:37 PM",
    },
  ])

  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [])

  const handleSend = () => {
    if (!input.trim()) return
    const newMessage: Message = {
      role: "user",
      content: input.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }
    setMessages((prev) => [...prev, newMessage])
    setInput("")
  }

  return (
    <div className="flex flex-col p-4 space-y-4 text-gray-200">
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex gap-2 max-w-[80%]", 
                message.role === "user" ? "ml-auto justify-end" : ""
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {message.role === "agent" && (
                <img
                  src="/gemini.png"
                  alt="Fixie"
                  className="h-8 w-8 object-contain flex-shrink-0"
                />
              )}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-300">
                    {message.role === "agent" ? "Fixie" : "You"}
                  </span>
                  <span className="text-sm text-gray-500">{message.timestamp}</span>
                </div>
                <div className={cn("p-3 rounded-lg", message.role === "agent" ? "bg-gray-800" : "bg-blue-600")}>
                  <p className="text-sm whitespace-pre-wrap text-gray-200">{message.content}</p>
                </div>
                {message.role === "agent" && (
                  <div className="flex items-center gap-2">
                    {[Copy, Download, ThumbsUp, ThumbsDown].map((Icon, i) => (
                      <Button
                        key={i}
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200 ease-in-out"
                      >
                        <Icon className="h-4 w-4" />
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="p-4 border-t border-gray-800">
        <div className="flex gap-2">
          <Textarea
            placeholder="Type a message as a customer"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSend()
              }
            }}
            className="min-h-[44px] max-h-32 bg-gray-800 text-white border-gray-700 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 ease-in-out"
          />
          <Button
            onClick={handleSend}
            className="px-8 bg-blue-500 hover:bg-blue-600 text-white transition-all duration-200 ease-in-out"
          >
            <Send className="h-4 w-4 mr-2" />
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}

