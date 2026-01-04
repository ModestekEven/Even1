
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, X, Sparkles } from 'lucide-react';
import { Message } from '../types';
import { getGeminiResponse } from '../services/geminiService';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '你好！我是牛渝文的AI数字分身。你可以问我关于我的创业经历、AI看法或者国学心得。' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getGeminiResponse(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: response || '无法理解您的意思，请重试。' }]);
    setIsLoading(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50 group"
      >
        <Sparkles className="text-white group-hover:animate-pulse" size={24} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-[350px] md:w-[400px] h-[500px] glass-card shadow-2xl flex flex-col z-50 overflow-hidden animate-in fade-in slide-in-from-bottom-10">
      {/* Header */}
      <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
            <Bot size={18} className="text-blue-400" />
          </div>
          <div>
            <p className="text-sm font-bold">牛渝文 Digital Twin</p>
            <p className="text-[10px] text-blue-400">AI 智能应答中</p>
          </div>
        </div>
        <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
              m.role === 'user' 
                ? 'bg-blue-600 text-white rounded-br-none' 
                : 'bg-white/10 text-white/90 rounded-bl-none'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/10 p-3 rounded-2xl rounded-bl-none flex gap-1">
              <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" />
              <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce [animation-delay:0.2s]" />
              <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce [animation-delay:0.4s]" />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 bg-black/20">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="问问我关于AI创业的事..."
            className="w-full bg-white/5 border border-white/10 rounded-full py-2 px-4 pr-10 text-sm focus:outline-none focus:border-blue-500 transition-colors"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="absolute right-2 top-1.5 text-blue-500 hover:text-blue-400 disabled:opacity-50"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
