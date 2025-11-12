import { User, Briefcase, Compass } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import type { Language } from '../App';
import type { Page } from '../App';

const translations = {
  zh: {
    heroTitle: '🌟 案例分享',
    heroTitleEn: 'Success Stories',
    heroSubtitle: '每一个"上岸"的故事，都始于不放弃的勇气。',
    heroDescription: 'LandIn 帮助数百位留学生在身份、时间、机会的限制中，找到属于自己的路。',
    
    cases: [
      {
        emoji: '🧩',
        title: '案例一：CPT 实习难题，如何在没毕业前就上岸',
        background: '学员背景',
        backgroundDetails: [
          '传媒专业硕士 | GPA 普通 | 未毕业，仅能做 part-time CPT',
          '课程密集、无OPT资格、对CPT规则不清楚'
        ],
        challenge: '遇到的困难',
        challengeQuote: '"我专业课太满，只能实习半职。很多机构一听我还没毕业、只能CPT，就直接拒绝。我甚至不知道CPT该怎么申请，也怕影响毕业。"',
        solution: 'LandIn 的解决方案',
        solutionSteps: [
          {
            title: '梳理CPT合规方案',
            details: ['根据学校政策规划「课程 + 实习时间表」', '指导完成CPT申请文书，确保合规']
          },
          {
            title: '匹配愿意配合CPT时间的雇主',
            details: ['我们主动与企业HR沟通，解释CPT规则', '帮客户拿到愿意配合学期时间的实习机会']
          },
          {
            title: '提前布局未来',
            details: ['协助申请SSN', '规划CPT→OPT→H-1B三阶段衔接方案']
          }
        ],
        result: '成果',
        resultItems: [
          '成功获得CPT实习机会',
          '毕业后原公司发出Return Offer',
          '目前在OPT阶段稳定工作'
        ],
        testimonial: '"他们不只是找工作，而是帮我建立信心。从焦虑到踏实，这种安心感很难得。"'
      },
      {
        emoji: '🧭',
        title: '案例二：H-1B 抽签焦虑，如何提前找到Plan B与Plan C',
        background: '学员背景',
        backgroundDetails: [
          '市场营销专业 | OPT工作中 | 已经历一次H-1B落选',
          '对未来身份极度焦虑'
        ],
        challenge: '遇到的困难',
        challengeQuote: '"我每天都在刷移民论坛，看抽签概率。公司愿意帮我抽签，但我怕万一落选就要离开美国。"',
        solution: 'LandIn 的解决方案',
        solutionSteps: [
          {
            title: '身份风险诊断',
            details: ['分析客户OPT时限与公司支持度', '制定签证与职业双重备选方案']
          },
          {
            title: '制定 Plan B / Plan C',
            details: ['B计划：转换雇主，衔接Cap-Exempt职位', 'C计划：延伸至海外工作、L签证或NIW预备']
          },
          {
            title: '法律团队跟进',
            details: ['LandIn合作律师提供合法转身份咨询', '确保OPT至H-1B阶段无缝衔接']
          }
        ],
        result: '成果',
        resultItems: [
          '目前已在OPT下成功留任',
          '公司已为其准备第二年H-1B申请',
          '同时拥有B计划（Cap-Exempt backup）'
        ],
        testimonial: '"他们不画大饼，也不让我空等。第一次感到自己的身份不是悬着的，而是有方案、有安全感。"'
      },
      {
        emoji: '🌱',
        title: '案例三：迷茫与转型，从零经验找到方向',
        background: '学员背景',
        backgroundDetails: [
          '22岁应届毕业生 | 传媒专业 | GPA一般、无实习经历',
          '希望了解自己适合什么方向'
        ],
        challenge: '遇到的困难',
        challengeQuote: '"我不知道自己能做什么。看到别人都拿到Offer，我很焦虑。我的GPA不高、也没作品集，连方向都不确定。"',
        solution: 'LandIn 的解决方案',
        solutionSteps: [
          {
            title: '职业性格与能力评估',
            details: ['通过测试与访谈，发现其文字与内容策划优势']
          },
          {
            title: '重新定位路径',
            details: ['规划从内容编辑 → 市场传播 → 品牌策略的成长路线']
          },
          {
            title: '制定实操计划',
            details: ['优化简历与作品集', '推荐小型传媒公司实习', '设计"积累→跳槽→晋升"三阶段成长计划']
          }
        ],
        result: '成果',
        resultItems: [
          '拿到第一份实习并留任为全职内容专员',
          '职业方向从迷茫转为清晰',
          '对传媒行业有长期规划与信心'
        ],
        testimonial: '"他们像人生规划师，不只帮我找工作，还帮我看清自己。那种被理解和被指导的感觉，是我最感激的。"'
      }
    ],
  },
  en: {
    heroTitle: '🌟 Success Stories',
    heroTitleEn: '',
    heroSubtitle: 'Every success story begins with the courage to never give up.',
    heroDescription: 'LandIn has helped hundreds of international students find their path despite visa, time, and opportunity constraints.',
    
    cases: [
      {
        emoji: '🧩',
        title: 'Case 1: CPT Internship Challenge - Landing Before Graduation',
        background: 'Student Background',
        backgroundDetails: [
          'Master\'s in Communications | Average GPA | Pre-graduation, part-time CPT only',
          'Heavy course load, no OPT eligibility, unclear about CPT regulations'
        ],
        challenge: 'The Challenge',
        challengeQuote: '"My course schedule is too full, I can only work part-time. Many agencies rejected me once they heard I wasn\'t graduated and could only do CPT. I didn\'t even know how to apply for CPT and was worried about affecting my graduation."',
        solution: 'LandIn\'s Solution',
        solutionSteps: [
          {
            title: 'CPT Compliance Planning',
            details: ['Designed course + internship schedule based on school policy', 'Guided CPT application documentation to ensure compliance']
          },
          {
            title: 'Matched with CPT-Friendly Employers',
            details: ['Proactively communicated with company HR to explain CPT regulations', 'Secured internship opportunity willing to accommodate semester schedule']
          },
          {
            title: 'Future Planning',
            details: ['Assisted with SSN application', 'Planned CPT→OPT→H-1B three-stage transition']
          }
        ],
        result: 'Results',
        resultItems: [
          'Successfully obtained CPT internship',
          'Received Return Offer from the same company after graduation',
          'Currently working stably on OPT'
        ],
        testimonial: '"They didn\'t just find me a job, they helped me build confidence. Going from anxious to secure, that peace of mind is rare."'
      },
      {
        emoji: '🧭',
        title: 'Case 2: H-1B Lottery Anxiety - Finding Plan B & Plan C',
        background: 'Student Background',
        backgroundDetails: [
          'Marketing major | Working on OPT | Failed H-1B lottery once',
          'Extremely anxious about future visa status'
        ],
        challenge: 'The Challenge',
        challengeQuote: '"I check immigration forums every day, looking at lottery odds. My company is willing to sponsor me, but I\'m afraid if I don\'t get selected, I\'ll have to leave the U.S."',
        solution: 'LandIn\'s Solution',
        solutionSteps: [
          {
            title: 'Visa Risk Assessment',
            details: ['Analyzed OPT timeline and company support level', 'Created dual backup plan for visa and career']
          },
          {
            title: 'Developed Plan B / Plan C',
            details: ['Plan B: Switch employer, transition to Cap-Exempt position', 'Plan C: Extend to overseas work, L visa or NIW preparation']
          },
          {
            title: 'Legal Team Support',
            details: ['LandIn partner attorneys provided legal status transition consultation', 'Ensured seamless OPT to H-1B transition']
          }
        ],
        result: 'Results',
        resultItems: [
          'Successfully retained position under OPT',
          'Company preparing second H-1B application',
          'Has Plan B backup (Cap-Exempt option)'
        ],
        testimonial: '"They don\'t make empty promises or leave me waiting. For the first time, I feel my visa status isn\'t hanging by a thread - I have plans and security."'
      },
      {
        emoji: '🌱',
        title: 'Case 3: Lost to Found - Discovering Direction from Zero Experience',
        background: 'Student Background',
        backgroundDetails: [
          '22-year-old recent graduate | Communications major | Average GPA, no internship experience',
          'Seeking to understand career fit'
        ],
        challenge: 'The Challenge',
        challengeQuote: '"I don\'t know what I can do. Seeing others get offers makes me anxious. My GPA isn\'t high, I don\'t have a portfolio, and I don\'t even know what direction to pursue."',
        solution: 'LandIn\'s Solution',
        solutionSteps: [
          {
            title: 'Career Personality & Skills Assessment',
            details: ['Through testing and interviews, discovered strengths in writing and content planning']
          },
          {
            title: 'Career Path Repositioning',
            details: ['Mapped growth trajectory: Content Editor → Marketing Communications → Brand Strategy']
          },
          {
            title: 'Action Plan Development',
            details: ['Optimized resume and portfolio', 'Recommended internship at small media company', 'Designed three-stage growth plan: Accumulate → Switch → Promote']
          }
        ],
        result: 'Results',
        resultItems: [
          'Secured first internship and transitioned to full-time content specialist',
          'Career direction shifted from confusion to clarity',
          'Gained long-term plan and confidence in media industry'
        ],
        testimonial: '"They\'re like life coaches, not just helping me find a job, but helping me see myself clearly. That feeling of being understood and guided is what I\'m most grateful for."'
      }
    ],
  },
};

interface CaseStudiesPageProps {
  language: Language;
  onNavigate: (page: Page) => void;
}

export function CaseStudiesPage({ language, onNavigate }: CaseStudiesPageProps) {
  const t = translations[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-400 via-pink-400 to-purple-400 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl mb-6">
              {t.heroTitle} {t.heroTitleEn && <span className="opacity-90">{t.heroTitleEn}</span>}
            </h1>
            <p className="text-2xl max-w-3xl mx-auto opacity-95 mb-4">
              {t.heroSubtitle}
            </p>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              {t.heroDescription}
            </p>
          </div>
        </div>
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Case Studies Content */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {t.cases.map((caseStudy, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow border-2 border-orange-200">
                <CardContent className="p-0">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-5xl">{caseStudy.emoji}</div>
                      <h3 className="text-2xl flex-1">{caseStudy.title}</h3>
                    </div>
                  </div>

                  <div className="p-8 space-y-6">
                    {/* Background */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <User className="h-5 w-5 text-orange-600" />
                        <h4 className="text-lg text-gray-900">{caseStudy.background}</h4>
                      </div>
                      <ul className="space-y-1 ml-7">
                        {caseStudy.backgroundDetails.map((detail, i) => (
                          <li key={i} className="text-gray-600">• {detail}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Challenge */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Compass className="h-5 w-5 text-orange-600" />
                        <h4 className="text-lg text-gray-900">{caseStudy.challenge}</h4>
                      </div>
                      <div className="ml-7 p-4 bg-gray-50 border-l-4 border-orange-300 rounded-r-lg">
                        <p className="text-gray-700 italic">{caseStudy.challengeQuote}</p>
                      </div>
                    </div>

                    {/* Solution */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Briefcase className="h-5 w-5 text-orange-600" />
                        <h4 className="text-lg text-gray-900">{caseStudy.solution}</h4>
                      </div>
                      <div className="ml-7 space-y-3">
                        {caseStudy.solutionSteps.map((step, i) => (
                          <div key={i}>
                            <p className="text-gray-900 mb-1">{i + 1}️⃣ <strong>{step.title}</strong>：</p>
                            <ul className="space-y-1 ml-6">
                              {step.details.map((detail, j) => (
                                <li key={j} className="text-gray-600">• {detail}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Result */}
                    <div>
                      <h4 className="text-lg text-gray-900 mb-3">{caseStudy.result}</h4>
                      <div className="ml-7 space-y-2 mb-4">
                        {caseStudy.resultItems.map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-green-600 text-xl">✅</span>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="p-4 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg">
                        <p className="text-gray-700 italic">{caseStudy.testimonial}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}