"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Bot, Send, XCircle } from "lucide-react";
import { Button } from "@hanzo/ui";
import { Drawer, DrawerContent, DrawerTrigger } from "@hanzo/ui/drawer";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
type MessageRole = "user" | "assistant";

interface Message {
  role: MessageRole;
  content: string;
}

export default function NotFound() {
  const pathname = usePathname();
const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: message
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setMessage("");

    // Simulate AI response - Replace with actual AI integration
    setTimeout(() => {
      const aiMessage: Message = {
        role: "assistant",
        content: `I noticed you're trying to access ${pathname}. This page doesn't exist, but I can help you find what you're looking for! What were you trying to find?`
      };
      setMessages([...newMessages, aiMessage]);
    }, 1000);

    toast({
      title: "Message sent!",
      description: "The AI assistant will respond shortly.",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl mb-4 text-white/50">Oops! Page not found</p>
        <a href="/" className="underline text-white hover:text-white/70">
          Return to Home
        </a>
      </div>

      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button
            className="fixed bottom-4 right-4 rounded-full p-4 shadow-lg animate-bounce bg-white hover:bg-white/90 text-black"
            size="icon"
          >
            <Bot className="h-6 w-6" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-[500px] p-4 bg-black border-white/10">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Bot className="h-6 w-6 text-white" />
                <h2 className="text-lg font-semibold">AI Assistant</h2>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <XCircle className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={cn(
                    "p-3 rounded-lg max-w-[80%]",
                    msg.role === "user"
                      ? "bg-white text-black ml-auto"
                      : "bg-white/10 text-white/70"
                  )}
                >
                  {msg.content}
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 bg-white/5 border-white/10 text-white placeholder-white/40 focus:ring-white/20"
              />
              <Button onClick={handleSendMessage} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
