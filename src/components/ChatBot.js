import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiX, FiSend, FiUser, FiMic, FiVolume2, FiVolumeX } from 'react-icons/fi';
import { AiOutlineRobot } from 'react-icons/ai';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const [highlightedWords, setHighlightedWords] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [showSendButton, setShowSendButton] = useState(false);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);
  const silenceTimer = useRef(null);
  const initialTimer = useRef(null);

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Toggle send/mic button based on input
  useEffect(() => {
    setShowSendButton(inputMessage.trim().length > 0);
  }, [inputMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Add welcome message when chatbot opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 1,
          text: "👋Hi! I'm AI Assistant for Stains.\n\tWhat can I do for you?",
          isBot: true,
          timestamp: new Date()
        }
      ]);
    }
  }, [isOpen]);

  const getPlainText = (text) => {
    if (!text) return '';
    let plain = '';
    text.split('\n').forEach((line) => {
      if (line.trim() === '') return;
      let lineText = line;
      if (line.trim().startsWith('•')) {
        lineText = line.trim().slice(1).trim();
      }
      lineText = lineText.replace(/\*\*/g, '');
      plain += lineText + ' ';
    });
    return plain.trim();
  };

  const processPart = (text, startIndex, highlightIndex) => {
    const content = [];
    let currentIndex = startIndex;
    if (text.includes('**')) {
      const parts = text.split('**');
      parts.forEach((part, i) => {
        const isBold = i % 2 === 1;
        const tokens = part.split(/(\s+)/);
        tokens.forEach((token) => {
          if (token.trim() === '') {
            content.push(token);
          } else {
            const isHighlight = currentIndex === highlightIndex;
            const spanStyle = isHighlight ? { backgroundColor: 'rgba(255, 255, 0, 0.3)', borderRadius: '3px' } : {};
            const span = <span key={currentIndex} style={spanStyle}>{token}</span>;
            if (isBold) {
              content.push(<strong key={currentIndex} style={{ color: '#fff' }}>{span}</strong>);
            } else {
              content.push(span);
            }
            currentIndex++;
          }
        });
      });
    } else {
      const tokens = text.split(/(\s+)/);
      tokens.forEach((token) => {
        if (token.trim() === '') {
          content.push(token);
        } else {
          const isHighlight = currentIndex === highlightIndex;
          const spanStyle = isHighlight ? { backgroundColor: 'rgba(255, 255, 0, 0.3)', borderRadius: '3px' } : {};
          content.push(<span key={currentIndex} style={spanStyle}>{token}</span>);
          currentIndex++;
        }
      });
    }
    return { jsx: content, nextIndex: currentIndex };
  };

  const formatMessageText = (text, highlightIndex = -1) => {
    if (!text) return text;
    const lines = [];
    let wordIndex = 0;
    text.split('\n').forEach((line, index) => {
      if (line.trim() === '') {
        lines.push(<br key={index} />);
        return;
      }
      let lineJSX;
      if (line.trim().startsWith('•')) {
        const bulletText = line.trim().slice(1).trim();
        const { jsx, nextIndex } = processPart(bulletText, wordIndex, highlightIndex);
        lineJSX = <div key={index} style={{ marginLeft: '1rem', marginBottom: '0.25rem' }}>{jsx}</div>;
        wordIndex = nextIndex;
      } else {
        const { jsx, nextIndex } = processPart(line, wordIndex, highlightIndex);
        lineJSX = <div key={index} style={{ marginBottom: '0.5rem' }}>{jsx}</div>;
        wordIndex = nextIndex;
      }
      lines.push(lineJSX);
    });
    return lines;
  };

  const startListening = () => {
    if (isListening) return;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Speech recognition is not supported in this browser.');
      return;
    }
    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
    let currentTranscript = '';
    let hasStartedSpeaking = false;

    recognition.onstart = () => {
      setIsListening(true);
      initialTimer.current = setTimeout(() => {
        if (!hasStartedSpeaking) {
          recognition.stop();
          setInputMessage('');
        }
      }, 3000);
    };

    recognition.onend = () => {
      setIsListening(false);
      clearTimeout(silenceTimer.current);
      clearTimeout(initialTimer.current);
      if (currentTranscript.trim()) {
        setInputMessage(currentTranscript);
        // Auto-send after speech recognition
        setTimeout(() => {
          handleSendMessage();
        }, 500);
      } else {
        setInputMessage('');
      }
    };

    recognition.onresult = (event) => {
      let final = '';
      let interim = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const trans = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          final += trans + ' ';
        } else {
          interim += trans;
        }
      }
      if (final) {
        currentTranscript += final;
      }
      setInputMessage(currentTranscript + interim);

      if (!hasStartedSpeaking && (final || interim)) {
        hasStartedSpeaking = true;
        clearTimeout(initialTimer.current);
        initialTimer.current = null;
      }

      clearTimeout(silenceTimer.current);
      silenceTimer.current = setTimeout(() => {
        recognition.stop();
      }, 3000);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
    };

    recognition.start();
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  const getFemaleVoice = () => {
    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(voice => 
      voice.name.toLowerCase().includes('female') || 
      voice.name.match(/samantha|zira|ava|tessa|victoria|moira|amira|leela|serena/i)
    );
    return femaleVoice || voices[0];
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    setShowSendButton(false);

    try {
      const response = await fetch('https://blueeye10.pythonanywhere.com/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      const data = await response.json();
      
      if (data.success) {
        const botMessage = {
          id: Date.now() + 1,
          text: data.answer,
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);

        if (isSoundEnabled) {
          const plainText = getPlainText(botMessage.text);
          if (plainText) {
            const utterance = new SpeechSynthesisUtterance(plainText);
            const femaleVoice = getFemaleVoice();
            if (femaleVoice) {
              utterance.voice = femaleVoice;
            }
            utterance.onboundary = (event) => {
              if (event.name === 'word') {
                const charIndex = event.charIndex;
                const words = plainText.split(/\s+/);
                let pos = 0;
                let wordIdx = -1;
                for (let i = 0; i < words.length; i++) {
                  if (charIndex >= pos && charIndex < pos + words[i].length) {
                    wordIdx = i;
                    break;
                  }
                  pos += words[i].length + 1;
                }
                if (wordIdx >= 0) {
                  setHighlightedWords(prev => ({ ...prev, [botMessage.id]: wordIdx }));
                }
              }
            };
            utterance.onend = () => {
              setHighlightedWords(prev => ({ ...prev, [botMessage.id]: -1 }));
            };
            if (window.speechSynthesis.getVoices().length === 0) {
              window.speechSynthesis.onvoiceschanged = () => {
                const voice = getFemaleVoice();
                if (voice) {
                  utterance.voice = voice;
                  window.speechSynthesis.speak(utterance);
                }
              };
            } else {
              window.speechSynthesis.speak(utterance);
            }
          }
        }
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "⚠️ Sorry, I'm having trouble connecting right now. connect with me via email: stainsdas007@gmail.com or phone: +91 9074472372.",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: 1,
        text: "👋 Hello! I'm AI assistant. I can help you learn about his:\n\n• **Skills & Expertise** 🤖\n• **Projects & Experience** 💼\n• **Technologies** 🛠️\n• **Contact Information** 📞\n\nWhat would you like to know about me?",
        isBot: true,
        timestamp: new Date()
      }
    ]);
    setHighlightedWords({});
  };

  // Responsive dimensions
  const chatWidth = isMobile ? 'calc(100vw - 2rem)' : '360px';
  const chatHeight = isMobile ? 'calc(100vh - 7rem)' : '550px';
  const chatBottom = isMobile ? '1rem' : '5rem';
  const chatRight = isMobile ? '1rem' : '1rem';

  return (
    <>
      {/* Chat Bot Toggle Button - Responsive size */}
      <motion.button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ 
          scale: 1.2, 
          boxShadow: '0 0 12px rgba(102, 126, 234, 0.7)',
          y: -2
        }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: 'fixed',
          bottom: '1rem',  
          right: '1rem',  
          width: isMobile ? '45px' : '50px',  
          height: isMobile ? '45px' : '50px', 
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.15)',  
          border: '1px solid rgba(102, 126, 234, 0.3)',  
          color: '#667eea',  
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: isMobile ? '1rem' : '1.2rem',  
          boxShadow: '0 0 8px rgba(102, 126, 234, 0.5)',  
          zIndex: 2000,  
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
            >
              <FiX />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileHover={{ rotate: 15 }}
            >
              <FiMessageCircle />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pulsing Animation like social glow */}
        {!isOpen && (
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              border: '2px solid #667eea',
              borderRadius: '50%',
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* Chat Bot Window - Responsive design */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window"
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ type: "spring", damping: 25 }}
            style={{
              marginLeft: isMobile ? '60px' : '0',
              position: 'fixed',
              // position:isMobile?'fixed':'fixed',
              bottom: chatBottom,  
              right: chatRight,  
              width: chatWidth,  
              height: chatHeight,  
              maxWidth: isMobile ? '360px' : '360px',
              maxHeight: isMobile ? 'none' : '550px',
              background: 'linear-gradient(135deg, rgba(20, 21, 21, 0.7) 0%, rgba(40, 69, 75, 0.7) 100%, rgba(0, 0, 0, 0.7) 100%)',  
              backdropFilter: 'blur(20px), transparent',
              borderRadius: isMobile ? '12px' : '15px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)',  
              display: 'flex',
              flexDirection: 'column',
              border: '2px solid transparent',  
              overflow: 'hidden',
              zIndex: 2000,  
            }}
          >
            {/* Fixed Border Glow Effect */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: isMobile ? '12px' : '15px',
                padding: '2px',
                background: 'linear-gradient(45deg, #ff6b35, #0a0257ff, #0d4768ff, #58e432ff)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                animation: 'borderGlow 4s ease-in-out infinite alternate',
              }}
            />

            {/* Header with Glowing Effect */}
            <div style={{
              padding: isMobile ? '0.5rem 0.75rem' : '0.75rem 1rem',
              background: 'rgba(240, 248, 255, 0.1)',  
              borderBottom: '1px solid rgba(245, 245, 220, 0.2)',  
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxShadow: '0 0 8px rgba(102, 126, 234, 0.5)',  
              position: 'relative',
              zIndex: 10,
            }}>
              <motion.span
                style={{
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #e0e7ff 20%, #323237ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                My AI Assistant
              </motion.span>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    fontSize: isMobile ? '0.9rem' : '1rem'
                  }}
                >
                  <FiX />
                </motion.button>
              </div>
            </div>

            {/* Messages Area with Transparent/Glowing Adjustments */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: isMobile ? '0.75rem' : '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? '0.75rem' : '1rem',
              background: 'rgba(240, 248, 255, 0.05)',  
              position: 'relative'  
            }}>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: message.isBot ? 'flex-start' : 'flex-end',
                    gap: '0.25rem'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    flexDirection: message.isBot ? 'row' : 'row-reverse'
                  }}>
                    <div style={{
                      width: isMobile ? '10px' : '15px',
                      height: isMobile ? '10px' : '15px',
                      borderRadius: '50%',
                      background: message.isBot 
                        ? 'linear-gradient(135deg, #667eea, #654ba2ff)'
                        : 'linear-gradient(135deg, #4facfe 0%, #29a5a5ff 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: isMobile ? '0.7rem' : '0.8rem',
                      color: 'white',
                      boxShadow: '0 0 8px rgba(102, 126, 234, 0.5)'  
                    }}>
                      {message.isBot ? <AiOutlineRobot /> : <FiUser />}
                    </div>
                    <span style={{
                      fontSize: isMobile ? '0.6rem' : '0.7rem',
                      color: 'rgba(245, 245, 220, 0.6)'  
                    }}>
                      {message.isBot ? 'AI Assistant' : 'You'}
                    </span>
                  </div>
                  <motion.div
                    style={{
                      minWidth: '45px',
                      maxWidth: isMobile ? '90%' : '85%',
                      padding: isMobile ? '0.8rem 0.75rem' : '0.75rem 1rem',
                      borderRadius: '5px',
                      background: message.isBot
                        ? 'rgba(240, 248, 255, 0.1)'  
                        : 'linear-gradient(135deg, #2f3232bf 0%, #3c4d56ff 100%)',
                      color: 'white',
                      border: message.isBot ? '1px solid rgba(102, 126, 234, 0.3)' : 'none',  
                      wordWrap: 'break-word',
                      fontSize: isMobile ? '0.8rem' : '0.9rem',
                      lineHeight: '1.4',
                      backdropFilter: 'blur(10px)',
                      boxShadow: message.isBot ? '0 0 8px rgba(102, 126, 234, 0.5)' : 'none',
                      position: 'relative'
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {formatMessageText(message.text, highlightedWords[message.id] ?? -1)}
                    <span style={{
                      fontSize: isMobile ? '0.5rem' : '0.6rem',
                      color: 'rgba(245, 245, 220, 0.4)',  
                      position: 'absolute',
                      bottom: '4px',
                      [message.isBot ? 'left' : 'right']: '8px'
                    }}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: isMobile ? '0.5rem 0.75rem' : '0.75rem 1rem',
                    background: 'rgba(240, 248, 255, 0.1)',  
                    borderRadius: '18px',
                    maxWidth: '80%',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 0 8px rgba(102, 126, 234, 0.5)'  
                  }}
                >
                  <div style={{
                    display: 'flex',
                    gap: '0.25rem'
                  }}>
                    {[0, 1, 2].map((dot) => (
                      <motion.div
                        key={dot}
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: 'white'
                        }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: dot * 0.2 }}
                      />
                    ))}
                  </div>
                  <span style={{ color: 'white', fontSize: isMobile ? '0.8rem' : '0.9rem' }}>Thinking...</span>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

          {/* Input Area with Reduced Gap and Glowing Effects */}
          <div style={{
            padding: isMobile ? '0.5rem 0.75rem' : '0.75rem 1rem',
            borderTop: '1px solid rgba(245, 245, 220, 0.1)',  
            background: 'rgba(240, 248, 255, 0.02)',  
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 8px rgba(102, 126, 234, 0.5)',
            position: 'relative'
          }}>
            {/* Sound enable/disable icon fixed at LEFT side */}
            <motion.button
              onClick={() => setIsSoundEnabled(!isSoundEnabled)}
              whileHover={{ scale: 1.05, boxShadow: '0 0 12px rgba(0, 179, 255, 0.58)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                position: 'absolute',
                top: isMobile ? '-20px' : '-35px',
                left: isMobile ? '8px' : '10px',
                background: 'rgba(230, 239, 189, 0.2)',
                border: '1px solid rgba(0, 94, 255, 0.5)',
                borderRadius: '50%',
                padding: isMobile ? '0.4rem' : '0.5rem',
                color: isSoundEnabled ? 'white' : '#dec2c2ff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 0 8px rgba(51, 100, 206, 0.5)',
                zIndex: 10,
                fontSize: isMobile ? '0.8rem' : '1rem',
                maxHeight: '30px',
                maxWidth: '30px',

              }}
            >
              {isSoundEnabled ? <FiVolume2 /> : <FiVolumeX />}
            </motion.button>

            <div style={{
              display: 'flex',
              gap: isMobile ? '0.4rem' : '0.5rem',
              alignItems: 'flex-end'
            }}>
            <div style={{ position: 'relative', flex: 1 }}>
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask to bot."
                disabled={isLoading || isListening}
                style={{
                  flex: 1,
                  width: '100%',
                  background: 'rgba(240, 248, 255, 0.1)',  
                  border: '1px solid rgba(102, 126, 234, 0.3)',  
                  borderRadius: '12px',
                  padding: isMobile ? '0.7rem 65px 0.7rem 0.7rem' : '0.8rem 65px 0.8rem 0.8rem',
                  color: 'white',
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  resize: 'none',
                  minHeight: '55px',
                  maxHeight: isMobile ? '100px' : '120px',
                  outline: 'none',
                  backdropFilter: 'blur(10px)',
                  fontFamily: 'inherit',
                  boxShadow: '0 0 8px rgba(102, 126, 234, 0.5)',
                }}
              />
  
              {/* WRAPPER DIV to force button size */}
              <div style={{
                position: 'absolute',
                top: '50%',
                right: isMobile ? '10px' : '10px',
                transform: 'translateY(-50%)',
                height: '55px',
                width: '55px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <motion.button
                  onClick={showSendButton ? handleSendMessage : (isListening ? stopListening : startListening)}
                  disabled={isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={isListening ? { 
                    scale: [1, 1.1, 1], 
                    color: '#c93333ff'
                  } : { 
                    scale: 1, 
                    color: 'white'
                  }}
                  transition={isListening ? { duration: 0.5, repeat: Infinity, repeatType: 'reverse' } : {}}
                  style={{
                    background: showSendButton 
                      ? 'linear-gradient(135deg, #9cb3beff 0%, #0f605dff 100%)'
                      : 'transparent',
                    border: '2px solid rgba(34, 255, 0, 1)',  
                    color: 'white',
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '50px',
                    width: '50px',
                    borderRadius: '50%',
                    fontSize: '1.2rem',
                    marginBottom: '10px',
                    boxShadow: '0 0 8px rgba(176, 198, 246, 0.5)',

                    padding: 0
                  }}
                >
                  {showSendButton ? <FiSend /> : <FiMic />}
                </motion.button>
              </div>
            </div>
            </div>
            <p style={{
              fontSize: isMobile ? '0.6rem' : '0.7rem',
              color: 'rgba(245, 245, 220, 0.5)',  
              textAlign: 'center',
              margin: isMobile ? '0.25rem 0 0 0' : '0.5rem 0 0 0',
              fontStyle: 'italic'
            }}>
              Try: "Ask Questions My AI Assistant?"
            </p>
          </div>

            {/* CSS for border glow animation */}
            <style jsx>{`
              @keyframes borderGlow {
                0% {
                  opacity: 0.7;
                  filter: hue-rotate(0deg);
                }
                100% {
                  opacity: 1;
                  filter: hue-rotate(360deg);
                }
              }
            `}</style>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;