
import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Rocket, 
  BookOpen, 
  Award, 
  TrendingUp, 
  MapPin, 
  ExternalLink,
  ChevronDown,
  Mail,
  Linkedin,
  Github
} from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';
import AIChat from './components/AIChat';
import { ACHIEVEMENTS, USER_BIO } from './constants';

const AchievementCard = ({ title, category }: { title: string; category: string }) => {
  const getIcon = () => {
    switch (category) {
      case 'AI': return <Terminal size={18} className="text-blue-400" />;
      case 'Entrepreneurship': return <Rocket size={18} className="text-orange-400" />;
      case 'Culture': return <BookOpen size={18} className="text-emerald-400" />;
      case 'Award': return <Award size={18} className="text-yellow-400" />;
      default: return <TrendingUp size={18} />;
    }
  };

  return (
    <div className="glass-card p-4 hover:border-white/30 transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
          {getIcon()}
        </div>
        <p className="text-sm md:text-base font-medium text-white/90 leading-relaxed pt-1">
          {title}
        </p>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black text-sm">牛</span>
            <span>YU WEN</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#about" className="hover:text-white transition-colors">关于</a>
            <a href="#achievements" className="hover:text-white transition-colors">成就</a>
            <a href="#projects" className="hover:text-white transition-colors">项目</a>
            <button className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-all">
              商业合作
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center pt-20 px-6 text-center">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="mb-6 flex items-center justify-center gap-2 text-blue-400 font-medium tracking-widest text-xs uppercase">
            <MapPin size={14} />
            {USER_BIO.location} · 陕西
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight text-gradient">
            {USER_BIO.name}
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            {USER_BIO.tagline}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm">校园VC投资经理</span>
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm">AI 增长顾问</span>
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm">国学传承者</span>
          </div>
          <a href="#achievements" className="inline-flex flex-col items-center gap-2 group cursor-pointer">
            <span className="text-sm text-white/40 group-hover:text-white/70 transition-colors">探索更多</span>
            <ChevronDown className="animate-bounce text-white/20" />
          </a>
        </div>
      </section>

      {/* Core Stats Section */}
      <section id="about" className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-8 flex flex-col items-center text-center">
            <div className="text-4xl font-bold mb-2 ai-gradient">1w+</div>
            <p className="text-white/60 text-sm">校园全网流量</p>
          </div>
          <div className="glass-card p-8 flex flex-col items-center text-center">
            <div className="text-4xl font-bold mb-2 ai-gradient">100+</div>
            <p className="text-white/60 text-sm">AI项目变现实战</p>
          </div>
          <div className="glass-card p-8 flex flex-col items-center text-center">
            <div className="text-4xl font-bold mb-2 ai-gradient">21</div>
            <p className="text-white/60 text-sm">年轻、无畏、无限可能</p>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section id="achievements" className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">实战历程</h2>
            <p className="text-white/50 max-w-lg">从大模型竞赛到校园流量闭环，从投资经理到国学社长，我在跨界中寻找真知。</p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-xs text-white/40">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span> AI
            </div>
            <div className="flex items-center gap-2 text-xs text-white/40">
              <span className="w-2 h-2 rounded-full bg-orange-400"></span> 创业
            </div>
            <div className="flex items-center gap-2 text-xs text-white/40">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span> 文化
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ACHIEVEMENTS.map((item) => (
            <AchievementCard key={item.id} title={item.title} category={item.category} />
          ))}
        </div>
      </section>

      {/* AI & Entrepreneurship Focus */}
      <section id="projects" className="py-24 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center text-3xl font-bold mb-16">核心板块 / Core Segments</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 flex items-center justify-center">
                  <Terminal className="text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold">AI 技术与商业化</h3>
                <p className="text-white/60 leading-relaxed">
                  深入研究大模型在中小企业增长中的应用场景。曾作为讯飞星火开发者、Mindverse校园大使，致力于打破AI与大众用户之间的“最后一公里”。
                </p>
                <ul className="space-y-3 text-sm text-white/80">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    中小企业AI增长策略咨询
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    校园AI变现闭环实操
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 flex items-center justify-center">
                  <BookOpen className="text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold">国学与创业哲学</h3>
                <p className="text-white/60 leading-relaxed">
                  曾任国学社社长，坚信“内圣外王”的创业之道。将传统文化的智慧应用在团队管理与商业博弈中，打造具有文化底蕴的现代创业组织。
                </p>
                <ul className="space-y-3 text-sm text-white/80">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    国学智慧在商业博弈中的应用
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    青年创业联盟生态构建
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 container mx-auto px-6 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-2xl font-bold mb-2">牛渝文</div>
            <p className="text-white/40 text-sm">Stay foolish, stay hungry, stay mindful.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="p-3 rounded-full glass-card hover:bg-white/10 transition-colors"><Mail size={20} /></a>
            <a href="#" className="p-3 rounded-full glass-card hover:bg-white/10 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="p-3 rounded-full glass-card hover:bg-white/10 transition-colors"><Github size={20} /></a>
          </div>
        </div>
        <div className="mt-12 text-center text-xs text-white/20">
          &copy; 2024 牛渝文. Powered by AI Digital Twin. Built with Gemini.
        </div>
      </footer>

      {/* Chat Bot */}
      <AIChat />
    </div>
  );
};

export default App;
