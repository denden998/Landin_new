import { useState, useEffect } from 'react';
import type { Language } from '../App';
import waveBackground from 'figma:asset/379a9735aded060adfabe4a3d72c30de90503975.png';

const translations = {
  zh: {
    title: '真实声音，最能说明一切。',
    titleEn: 'Real Stories. Real Impact.',
    testimonials: [
      "以前的机构总说'我们保证你进大厂'，但LandIn是第一个认真分析我条件、告诉我真正可行方案的人。",
      "他们不会给你虚假承诺，而是告诉你——先踏实上岸，再去追梦。那一刻我真的松了一口气。",
      "顾问比我还清楚我的签证时间表。每一步都提前规划好，我从没这么安心过。",
      "我CPT卡得很紧，几乎没人愿意接。LandIn却帮我找到愿意配合课程时间的公司，还亲自帮我解释政策。",
      "他们不只帮我改简历，而是教我怎么讲自己的故事。第一次，我觉得自己真的有价值。",
      "有一次凌晨两点我还在焦虑OPT，发了信息没想到顾问真的回了。他们不是在'上班'，他们是真的在帮我。",
      "之前被别的中介骗过钱，对谁都不信任。是LandIn让我重新相信留学生也能被认真对待。",
      "我本科是艺术专业，怕没方向。他们一步步带我分析行业、公司类型，让我第一次对未来有了计划。",
      "从帮我申请CPT到指导面试，LandIn像一个团队在背后推着我。那种被支持的感觉，我一辈子忘不了。",
      "他们不会告诉你'容易'，但会告诉你'怎么做才行'。这就是我信任他们的原因。",
      "每次开会都像在和人生教练聊天。他们不只看我能做什么工作，还关心我想成为什么样的人。",
      "我印象最深的是，他们说：'我们不保证结果，但保证你每一步都走在正确的路上。'——这句话真的戳到我。",
      "顾问帮我模拟面试到晚上十一点，那天我哭了——不是因为难，而是因为终于被认真对待。",
      "我拿到Offer那天，LandIn的顾问比我还激动。那种真心替我开心的感觉，很久没感受到。",
      "LandIn改变的不只是我的工作状态，而是让我重新相信——留学生的未来也可以被好好规划。",
    ],
  },
  en: {
    title: 'Real Stories. Real Impact.',
    titleEn: '',
    testimonials: [
      "Other agencies promised 'We guarantee you'll get into a big tech company,' but LandIn was the first to seriously analyze my situation and tell me what was actually achievable.",
      "They don't give false promises. Instead, they told me - first land safely, then chase your dreams. That moment, I finally felt relieved.",
      "The advisor knew my visa timeline better than I did. Every step was planned ahead. I've never felt this secure.",
      "My CPT window was extremely tight, almost no one would take me. LandIn helped me find a company willing to work with my course schedule, and personally explained the policies.",
      "They didn't just edit my resume - they taught me how to tell my story. For the first time, I felt I truly had value.",
      "Once at 2 AM when I was anxious about OPT, I sent a message and the advisor actually replied. They weren't just 'working' - they genuinely cared.",
      "I'd been scammed by another agency before and didn't trust anyone. LandIn made me believe again that international students can be treated with respect.",
      "I majored in art and was worried about direction. They walked me through analyzing industries and company types step by step. For the first time, I had a plan for my future.",
      "From helping me apply for CPT to interview coaching, LandIn felt like a whole team pushing me forward. That feeling of support - I'll never forget it.",
      "They won't tell you it's 'easy,' but they'll tell you 'how to make it work.' That's why I trust them.",
      "Every meeting felt like talking to a life coach. They didn't just look at what job I could do, but cared about who I wanted to become.",
      "What struck me most was when they said: 'We don't guarantee results, but we guarantee you're on the right path every step.' - That really hit me.",
      "The advisor practiced mock interviews with me until 11 PM. I cried that day - not because it was hard, but because I was finally being taken seriously.",
      "The day I got my offer, LandIn's advisor was more excited than me. That genuine happiness for my success - I haven't felt that in a long time.",
      "LandIn didn't just change my job status - they made me believe again that an international student's future can be thoughtfully planned.",
    ],
  },
};

interface TestimonialsProps {
  language: Language;
}

export function Testimonials({ language }: TestimonialsProps) {
  const t = translations[language];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setIsVisible(false);
      
      // After fade out, change index and fade in
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % t.testimonials.length);
        setIsVisible(true);
      }, 2000); // 2 seconds fade out duration
      
    }, 7000); // 5 seconds display + 2 seconds fade out = 7 seconds total

    return () => clearInterval(interval);
  }, [t.testimonials.length]);

  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-2 text-gray-900">
            {t.title}
          </h2>
          {t.titleEn && (
            <p className="text-2xl text-orange-600">{t.titleEn}</p>
          )}
        </div>

        {/* Testimonial Display Area */}
        <div className="max-w-4xl mx-auto min-h-[200px] flex items-center justify-center">
          <div
            className={`transition-all duration-2000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200 relative">
              {/* Quote icon */}
              <div className="absolute top-6 left-6 text-6xl text-orange-200">
                💬
              </div>
              
              {/* Testimonial text */}
              <div className="relative z-10 pl-12">
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed italic">
                  "{t.testimonials[currentIndex]}"
                </p>
              </div>

              {/* Star decoration at bottom right */}
              <div className="absolute bottom-6 right-6 text-4xl text-yellow-400 animate-pulse">
                🌟
              </div>
            </div>
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-12 hidden">
          {t.testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsVisible(false);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsVisible(true);
                }, 500);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-2 bg-orange-500'
                  : 'w-2 h-2 bg-gray-300 hover:bg-orange-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="text-center mt-6 hidden">
          <p className="text-gray-500">
            {currentIndex + 1} / {t.testimonials.length}
          </p>
        </div>
      </div>
    </section>
  );
}