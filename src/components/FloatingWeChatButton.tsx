import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, MessageCircle, Gift, Zap } from 'lucide-react';
import type { Language } from '../App';

const translations = {
  zh: {
    title: '嗨！我是你的求职伙伴 👋',
    section1: {
      icon: '📱',
      title: '扫码添加微信',
      description: '随时随地咨询求职问题',
    },
    section2: {
      icon: '🎁',
      title: '免费获取',
      items: ['最新岗位资源包', '求职规划方案', '简历优化建议'],
    },
    section3: {
      icon: '💬',
      title: '1对1专属咨询',
      description: '资深导师为你答疑解惑',
    },
    addWeChat: 'WeChat ID',
    weChatId: 'Landin01',
    buttonText: 'WeChat',
    scanMe: '扫我 👇',
    cta: '开始你的上岸之旅',
  },
  en: {
    title: 'Hi! I\'m Your Career Partner 👋',
    section1: {
      icon: '📱',
      title: 'Scan QR Code',
      description: 'Connect anytime for career advice',
    },
    section2: {
      icon: '🎁',
      title: 'Get Free',
      items: ['Latest Job Resources', 'Career Planning Guide', 'Resume Tips'],
    },
    section3: {
      icon: '💬',
      title: '1-on-1 Consultation',
      description: 'Expert mentors ready to help',
    },
    addWeChat: 'WeChat ID',
    weChatId: 'Landin01',
    buttonText: 'WeChat',
    scanMe: 'Scan Me 👇',
    cta: 'Start Your Journey',
  },
};

interface FloatingWeChatButtonProps {
  language: Language;
  qrCodeUrl?: string;
}

export function FloatingWeChatButton({ language, qrCodeUrl }: FloatingWeChatButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[language];

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-[#07C160] text-white px-4 py-6 rounded-l-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 group"
        aria-label="WeChat Contact"
      >
        <div className="flex flex-col items-center gap-2">
          {/* WeChat Icon with pulse animation */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg 
              viewBox="0 0 24 24" 
              className="w-8 h-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
            </svg>
          </motion.div>
          
          {/* Vertical Text */}
          <div className="writing-mode-vertical text-sm tracking-wider">
            {t.buttonText}
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-l-2xl bg-green-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
      </motion.button>

      {/* Modal Dialog */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              transition={{ 
                type: "spring", 
                damping: 20, 
                stiffness: 200,
                rotateY: { duration: 0.5 }
              }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-[90%] max-w-lg max-h-[90vh] overflow-y-auto"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative">
                {/* Animated background blobs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <motion.div
                    className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-green-200 to-blue-200 rounded-full blur-3xl opacity-30"
                    animate={{
                      scale: [1, 1.2, 1],
                      x: [0, 20, 0],
                      y: [0, 15, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full blur-3xl opacity-30"
                    animate={{
                      scale: [1, 1.3, 1],
                      x: [0, -20, 0],
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                </div>

                {/* Close Button */}
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-4 top-4 p-2 rounded-full bg-white shadow-lg transition-all duration-200 hover:scale-110 hover:rotate-90 z-10"
                  whileHover={{ rotate: 90 }}
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </motion.button>

                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Fun Title with wave animation */}
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-6"
                  >
                    <h3 className="text-3xl text-gray-800 mb-2">
                      {t.title}
                    </h3>
                    <motion.div
                      className="inline-flex items-center gap-2 text-orange-600"
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Sparkles className="w-5 h-5" />
                      <span className="text-sm">{t.cta}</span>
                      <Sparkles className="w-5 h-5" />
                    </motion.div>
                  </motion.div>

                  {/* Section 1: QR Code */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 mb-6 relative overflow-hidden"
                  >
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 text-6xl opacity-20">
                      {t.section1.icon}
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="text-center mb-4">
                        <h4 className="text-xl text-gray-800 mb-1">
                          {t.section1.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {t.section1.description}
                        </p>
                      </div>

                      {/* QR Code with bounce animation */}
                      <motion.div
                        className="bg-white rounded-2xl p-4 shadow-lg relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {qrCodeUrl ? (
                          <img
                            src={qrCodeUrl}
                            alt="WeChat QR Code"
                            className="w-64 h-64 object-contain"
                          />
                        ) : (
                          <div className="w-64 h-64 flex items-center justify-center border-4 border-dashed border-green-300 rounded-xl bg-green-50">
                            <div className="text-center">
                              <motion.div
                                className="text-5xl mb-2"
                                animate={{
                                  rotate: [0, 10, -10, 0],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              >
                                📱
                              </motion.div>
                              <p className="text-gray-500 text-sm">QR Code</p>
                            </div>
                          </div>
                        )}

                        {/* WeChat logo overlay */}
                        <div className="absolute bottom-6 right-6 bg-[#07C160] rounded-full p-2 shadow-lg">
                          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                            <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
                          </svg>
                        </div>
                      </motion.div>

                      {/* Scan me text - moved below QR code */}
                      <motion.div
                        className="mt-3 text-center text-sm text-orange-600"
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        {t.scanMe}
                      </motion.div>

                      {/* WeChat ID */}
                      <motion.div 
                        className="mt-4 bg-white/70 backdrop-blur-sm rounded-xl px-4 py-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        <p className="text-xs text-gray-600">{t.addWeChat}:</p>
                        <p className="text-lg text-[#07C160]">{t.weChatId}</p>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Section 2: Free Gifts */}
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-6 mb-6 relative overflow-hidden"
                  >
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 text-6xl opacity-20">
                      {t.section2.icon}
                    </div>

                    <div className="flex items-start gap-4">
                      <motion.div
                        className="text-5xl"
                        animate={{
                          rotate: [-5, 5, -5],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        {t.section2.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="text-xl text-gray-800 mb-3 flex items-center gap-2">
                          {t.section2.title}
                          <Gift className="w-5 h-5 text-orange-600" />
                        </h4>
                        <div className="space-y-2">
                          {t.section2.items.map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.5 + index * 0.1 }}
                              className="flex items-center gap-2 text-gray-700"
                            >
                              <motion.div
                                className="text-orange-600"
                                animate={{
                                  scale: [1, 1.3, 1],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: index * 0.3,
                                  ease: "easeInOut",
                                }}
                              >
                                ✨
                              </motion.div>
                              <span className="text-sm">{item}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Section 3: 1-on-1 Consultation */}
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 relative overflow-hidden"
                  >
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 text-6xl opacity-20">
                      {t.section3.icon}
                    </div>

                    <div className="flex items-start gap-4">
                      <motion.div
                        className="text-5xl"
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        {t.section3.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="text-xl text-gray-800 mb-2 flex items-center gap-2">
                          {t.section3.title}
                          <MessageCircle className="w-5 h-5 text-purple-600" />
                        </h4>
                        <p className="text-sm text-gray-700">
                          {t.section3.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Fun illustration at bottom */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex justify-center items-center gap-3 mt-6 pt-6 border-t border-gray-200"
                  >
                    {['👩‍💼', '👨‍💻', '🎯', '🚀', '⭐'].map((emoji, index) => (
                      <motion.div
                        key={index}
                        className="text-3xl"
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                          ease: "easeInOut",
                        }}
                      >
                        {emoji}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}