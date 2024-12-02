import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, MessageCircle } from 'lucide-react';

interface Message {
  type: 'user' | 'ai';
  message: string;
}

function AIAssistant() {
  const [message, setMessage] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chat, setChat] = useState<Message[]>([
    {
      type: 'ai',
      message: "Hi! I'm your fitness assistant. How can I help you today?",
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setChat([...chat, { type: 'user', message }]);

    setTimeout(() => {
      setChat((prev) => [
        ...prev,
        {
          type: 'ai',
          message:
            "I understand you're asking about " +
            message +
            '. Let me help you with that...',
        },
      ]);
    }, 1000);

    setMessage('');
  };

  return (
    <div className="fixed bottom-0 right-0 z-50">
      <motion.div
        drag
        dragMomentum={false}
        dragConstraints={{
          left: -window.innerWidth + 80,
          right: 0,
          top: -window.innerHeight + 80,
          bottom: 0,
        }}
        initial={{ x: -80, y: -80 }}
        className="cursor-grab active:cursor-grabbing"
        style={{ touchAction: 'none' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          onClick={() => setIsChatOpen(true)}
          className="flex items-center justify-center w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-colors m-6"
        >
          <Bot className="h-7 w-7" />
        </button>
      </motion.div>

      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-96 bg-white rounded-lg shadow-xl"
          >
            <div className="p-4 border-b flex justify-between items-center bg-gray-50 rounded-t-lg">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-800">
                  AI Assistant
                </h3>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {chat.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.type === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AIAssistant;