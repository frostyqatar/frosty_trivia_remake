import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

// Types
interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

interface ChatbotProps {
  isVisible: boolean;
  toggleVisibility: () => void;
}

// Colors
const colors = {
  primary: '#4a90e2',
  secondary: '#68b8e8',
  gradient: 'linear-gradient(135deg, #4a90e2, #68b8e8)',
  background: '#f8fafc',
  userBubble: 'linear-gradient(135deg, #4a90e2, #3a7bd5)',
  botBubble: '#fff',
  text: '#2c3e50',
  lightText: '#94a3b8',
  border: '#e2e8f0',
  success: '#10b981',
  error: '#ef4444',
  shadow: 'rgba(0, 0, 0, 0.1)',
  inputBg: '#fff'
};

// Container
const Container = styled.div`
  position: fixed;
  right: ${props => props.theme.visible ? '0' : '-420px'};
  top: 50%;
  transform: translateY(-50%);
  width: 400px;
  height: 600px;
  max-height: 80vh;
  background: ${colors.background};
  border-radius: 16px 0 0 16px;
  box-shadow: 0 10px 25px ${colors.shadow};
  display: flex;
  flex-direction: column;
  z-index: 1000;
  transition: right 0.3s ease-in-out;
  border: 1px solid ${colors.border};
  border-right: none;
  overflow: hidden;
`;

// Toggle button
const ToggleButton = styled.button`
  position: fixed;
  right: ${props => props.theme.visible ? '410px' : '10px'};
  top: 80%;
  transform: translateY(-50%);
  background-color:rgb(11, 150, 231);
  color: white;
  border: none;
  padding: 15px 10px;
  border-radius: 8px 0 0 8px;
  cursor: pointer;
  z-index: 1001;
  display: flex;
  align-items: center;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease-in-out;
  
  &:hover {
    background-color: #0b5d8a;
  }
  
  &:focus {
    outline: none;
    box-shadow: -2px 0 15px rgba(0, 0, 0, 0.3);
  }
`;

const ArrowIcon = styled.span<{ $isOpen: boolean }>`
  font-size: 24px;
  transform: rotate(${props => props.$isOpen ? '180deg' : '0deg'});
  transition: transform 0.3s ease;
`;

// Header
const Header = styled.div`
  padding: 16px;
  background: ${colors.gradient};
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 28px;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:before {
    content: '🤖';
    font-size: 20px;
  }
`;

// API Key form
const ApiKeyForm = styled.div`
  padding: 16px;
  background: white;
  border-bottom: 1px solid ${colors.border};
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid ${colors.border};
  border-radius: 8px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: ${colors.gradient};
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:disabled {
    background: #cbd5e1;
    cursor: not-allowed;
  }
`;

// Messages area
const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  &::-webkit-scrollbar {
    width: 5px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 5px;
  }
`;

// Parse markdown-style formatting in text
const parseMarkdown = (text: string) => {
  // Replace **text** with <strong>text</strong>
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
};

const MessageBubble = styled.div`
  max-width: 80%;
  padding: 12px 16px;
  border-radius: 16px;
  position: relative;
  animation: fadeIn 0.3s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  ${props => props.theme.role === 'user' ? `
    align-self: flex-end;
    background: ${colors.userBubble};
    color: white;
    border-bottom-right-radius: 4px;
  ` : props.theme.role === 'assistant' ? `
    align-self: flex-start;
    background: ${colors.botBubble};
    color: ${colors.text};
    border: 1px solid ${colors.border};
    border-bottom-left-radius: 4px;
  ` : `
    align-self: center;
    background: #f1f5f9;
    color: ${colors.lightText};
    font-style: italic;
    font-size: 13px;
    max-width: 90%;
  `}
  
  p {
    margin: 0;
    white-space: pre-wrap;
    line-height: 1.5;
  }
  
  strong {
    font-weight: bold;
  }
  
  .time {
    font-size: 10px;
    opacity: 0.7;
    margin-top: 4px;
    text-align: right;
  }
`;

// Input area
const InputForm = styled.form`
  display: flex;
  padding: 12px;
  border-top: 1px solid ${colors.border};
  background: white;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid ${colors.border};
  border-radius: 8px;
  font-size: 14px;
  background: ${colors.inputBg};
  
  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }
  
  &::placeholder {
    color: ${colors.lightText};
  }
  
  &:disabled {
    background: #f1f5f9;
  }
`;

const SendButton = styled.button`
  background: ${colors.gradient};
  color: white;
  border: none;
  border-radius: 8px;
  width: 40px;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:disabled {
    background: #cbd5e1;
    cursor: not-allowed;
  }
`;

// Status indicator
const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;

  ${props => props.theme.status === 'connected' ? `
    color: ${colors.success};
    &:before {
      content: '';
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${colors.success};
    }
  ` : props.theme.status === 'connecting' ? `
    color: #f59e0b;
    &:before {
      content: '';
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #f59e0b;
      animation: pulse 1.5s infinite;
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  ` : `
    color: ${colors.lightText};
    &:before {
      content: '';
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${colors.lightText};
    }
  `}
`;

// Loading indicator
const LoadingDots = styled.div`
  display: flex;
  gap: 4px;
  padding: 8px 12px;
  align-self: flex-start;
  background: ${colors.botBubble};
  border-radius: 16px;
  border-bottom-left-radius: 4px;
  border: 1px solid ${colors.border};
  
  .dot {
    width: 8px;
    height: 8px;
    background: ${colors.primary};
    border-radius: 50%;
    opacity: 0.7;
    animation: bounce 1.4s infinite ease-in-out both;
  }
  
  .dot:nth-child(1) { animation-delay: 0s; }
  .dot:nth-child(2) { animation-delay: 0.2s; }
  .dot:nth-child(3) { animation-delay: 0.4s; }
  
  @keyframes bounce {
    0%, 80%, 100% { transform: scale(0.6); }
    40% { transform: scale(1); }
  }
`;

// Empty state
const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
  text-align: center;
  color: ${colors.lightText};
  
  .icon {
    font-size: 40px;
    margin-bottom: 16px;
  }
  
  .title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
    color: ${colors.primary};
  }
  
  .desc {
    font-size: 14px;
    max-width: 250px;
  }
`;

// Reset button
const ResetButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

// Text size controls
const TextControls = styled.div`
  display: flex;
  gap: 6px;
  position: absolute;
  right: 12px;
  bottom: 70px;
  background: white;
  border: 1px solid ${colors.border};
  border-radius: 6px;
  padding: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const TextSizeButton = styled.button`
  background: none;
  border: none;
  color: ${colors.text};
  font-size: 14px;
  padding: 4px 6px;
  cursor: pointer;
  border-radius: 4px;
  
  &:hover {
    background: #f1f5f9;
  }
`;

const Chatbot = ({ isVisible, toggleVisibility }: ChatbotProps) => {
  // State
  const [apiKey, setApiKey] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  
  // Refs
  const messagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Load saved API key on mount
  useEffect(() => {
    const savedKey = localStorage.getItem('gemini-api-key');
    if (savedKey) {
      setApiKey(savedKey);
      verifyApiKey(savedKey);
    }
  }, []);
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);
  
  // Focus input when connected
  useEffect(() => {
    if (isConnected && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isConnected]);

  // Verify API key
  const verifyApiKey = async (key: string) => {
    if (!key.trim()) return;
    
    setIsConnecting(true);
    
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: 'Hello! You are a trivia assistant. Say hi briefly.' }] }]
          })
        }
      );
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        // Save valid key
        localStorage.setItem('gemini-api-key', key);
        
        // Get welcome message from response
        const welcomeText = data.candidates[0].content.parts[0].text;
        
        setMessages([{
          id: Date.now().toString(),
          role: 'assistant',
          content: welcomeText,
          timestamp: new Date()
        }]);
        
        setIsConnected(true);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('API key verification failed:', error);
      setMessages([{
        id: Date.now().toString(),
        role: 'system',
        content: 'Failed to connect. Please check your API key and try again.',
        timestamp: new Date()
      }]);
      setIsConnected(false);
    } finally {
      setIsConnecting(false);
    }
  };
  
  // Connect handler
  const handleConnect = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    verifyApiKey(apiKey);
  };
  
  // Send message
  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!inputText.trim() || !isConnected || isLoading) return;
    
    const messageText = inputText.trim();
    setInputText('');
    setIsLoading(true);
    
    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: messageText,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              ...messages
                .filter(m => m.role !== 'system')
                .map(m => ({
                  role: m.role === 'assistant' ? 'model' : 'user',
                  parts: [{ text: m.content }]
                })),
              {
                role: 'user',
                parts: [{ text: messageText }]
              }
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 800,
            }
          })
        }
      );
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        const botMessage: ChatMessage = {
          id: Date.now().toString(),
          role: 'assistant',
          content: data.candidates[0].content.parts[0].text,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorMessage: ChatMessage = {
        id: Date.now().toString(),
        role: 'system',
        content: 'Error: Failed to get response. Please check your connection.',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
      
      // Check if API key is invalid
      if (error instanceof Error && error.message.includes('401')) {
        setIsConnected(false);
        localStorage.removeItem('gemini-api-key');
      }
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };
  
  // Reset API key
  const handleResetApiKey = () => {
    localStorage.removeItem('gemini-api-key');
    setApiKey('');
    setIsConnected(false);
    setMessages([]);
  };
  
  // Format timestamp
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  // Change text size
  const handleTextSize = (change: number) => {
    setFontSize(prev => Math.max(12, Math.min(24, prev + change)));
  };
  
  return (
    <>
      <ToggleButton 
        onClick={toggleVisibility}
        theme={{ visible: isVisible }}
      >
        <ArrowIcon $isOpen={isVisible}>◀</ArrowIcon>
      </ToggleButton>
      
      <Container theme={{ visible: isVisible }}>
        <Header>
          <Title>المساعد الروبوتي </Title>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Status theme={{ status: isConnecting ? 'connecting' : (isConnected ? 'connected' : 'disconnected') }}>
              {isConnecting ? 'Connecting...' : (isConnected ? 'Connected' : 'Disconnected')}
            </Status>
            {isConnected && (
              <ResetButton onClick={handleResetApiKey}>
                Reset Key
              </ResetButton>
            )}
          </div>
        </Header>
        
        {!isConnected && (
          <ApiKeyForm>
            <form onSubmit={handleConnect}>
              <Input
                type="password"
                placeholder="Enter your Gemini API key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                disabled={isConnecting}
              />
              <Button 
                type="submit"
                disabled={!apiKey.trim() || isConnecting}
              >
                {isConnecting ? 'Connecting...' : 'Connect'}
              </Button>
            </form>
          </ApiKeyForm>
        )}
        
        <MessagesContainer ref={messagesRef}>
          {messages.length === 0 ? (
            <EmptyState>
              <div className="icon">🤖</div>
              <div className="title">Gemini AI Assistant</div>
              <div className="desc">
                {isConnected 
                  ? 'Start chatting to get help with trivia questions!'
                  : 'Enter your Gemini API key to start chatting.'}
              </div>
            </EmptyState>
          ) : (
            messages.map(message => (
              <MessageBubble 
                key={message.id} 
                theme={{ role: message.role }}
              >
                <p 
                  style={{ fontSize: `${fontSize}px` }}
                  dangerouslySetInnerHTML={{ __html: parseMarkdown(message.content) }}
                ></p>
                <div className="time">{formatTime(message.timestamp)}</div>
              </MessageBubble>
            ))
          )}
          
          {isLoading && (
            <LoadingDots>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </LoadingDots>
          )}
        </MessagesContainer>
        
        <TextControls>
          <TextSizeButton onClick={() => handleTextSize(-2)}>A-</TextSizeButton>
          <TextSizeButton onClick={() => handleTextSize(2)}>A+</TextSizeButton>
        </TextControls>
        
        <InputForm onSubmit={handleSendMessage}>
          <ChatInput
            ref={inputRef}
            type="text"
            placeholder={isConnected ? "Type a message..." : "Enter API key to chat"}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            disabled={!isConnected}
          />
          <SendButton 
            type="submit"
            disabled={!isConnected || !inputText.trim() || isLoading}
          >
            ↑
          </SendButton>
        </InputForm>
      </Container>
    </>
  );
};

export default Chatbot;