import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  Brain,
  Zap,
  Shield,
  TrendingUp,
  Activity,
  Target,
  Globe,
  ArrowRight,
} from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  const categories = [
    {
      icon: Brain,
      title: "Core Intelligence",
      desc: "Advanced reasoning, bias detection, contradiction analysis",
    },
    {
      icon: Zap,
      title: "Agent System",
      desc: "Autonomous AI agents with scheduling and memory",
    },
    {
      icon: Target,
      title: "40+ Tools",
      desc: "Pre-seeded tools for every domain and use case",
    },
    {
      icon: Globe,
      title: "Web Intelligence",
      desc: "Real-time analysis, credibility scoring, fact checking",
    },
    {
      icon: TrendingUp,
      title: "Markets & Finance",
      desc: "Stock analysis, crypto scanning, portfolio optimization",
    },
    {
      icon: Activity,
      title: "Health & Wellness",
      desc: "Longevity tracking, nutrition analysis, fitness planning",
    },
    {
      icon: Shield,
      title: "Security & Trust",
      desc: "Enterprise-grade security with compliance checking",
    },
    {
      icon: Sparkles,
      title: "Personal OS",
      desc: "Life simulation, goal decomposition, decision tracking",
    },
  ];

  return (
    <div className="min-h-screen bg-void text-white overflow-x-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1605764949006-10d0e9e1437c?crop=entropy&cs=srgb&fm=jpg&q=85)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />

      <motion.header
        className="relative z-10 flex justify-between items-center px-8 py-6 border-b border-white/10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-lg flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="heading-font text-2xl bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
            VAELIS
          </span>
        </div>
        <button
          onClick={() => navigate("/auth")}
          data-testid="header-launch-button"
          className="px-6 py-2.5 bg-neon-purple hover:bg-neon-cyan text-white heading-font text-xs tracking-widest rounded-md transition-colors duration-300 neon-glow"
        >
          LAUNCH
        </button>
      </motion.header>

      <section className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4">
        <motion.div
          className="absolute w-96 h-96 bg-neon-purple/30 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl"
        >
          <motion.div
            className="inline-block mb-6 px-4 py-2 glass-light rounded-full"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="label-font text-neon-cyan">400 FEATURES • GENERAL INTELLIGENCE PLATFORM</span>
          </motion.div>

          <h1 className="heading-font text-6xl sm:text-7xl lg:text-8xl mb-6 leading-tight">
            UNLEASH{" "}
            <span className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan bg-clip-text text-transparent">
              HYPER-INTELLIGENCE
            </span>
          </h1>

          <p className="body-font text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Your AI operating system. Advanced reasoning, autonomous agents, 40+ tools.
            From market analysis to life optimization. Command your digital universe.
          </p>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate("/auth")}
              data-testid="hero-get-started-button"
              className="group px-10 py-4 bg-neon-purple hover:bg-neon-cyan text-white heading-font text-sm tracking-widest rounded-xl transition-all duration-300 neon-glow flex items-center gap-2"
            >
              GET STARTED
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
              data-testid="hero-explore-button"
              className="px-10 py-4 glass-heavy hover:bg-white/10 text-white heading-font text-sm tracking-widest rounded-xl transition-all duration-300"
            >
              EXPLORE
            </button>
          </div>
        </motion.div>
      </section>

      <section id="features" className="relative z-10 px-4 py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-font text-5xl mb-4">11 INTELLIGENCE CATEGORIES</h2>
            <p className="body-font text-lg text-gray-400">Every domain. Every use case. One platform.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl glass-heavy p-8 hover:border-neon-cyan/50 transition-all duration-500 hover:-translate-y-2"
                  data-testid={`category-card-${idx}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Icon className="w-12 h-12 text-neon-purple mb-4 group-hover:text-neon-cyan transition-colors" />
                  <h3 className="heading-font text-lg mb-2">{cat.title}</h3>
                  <p className="body-font text-sm text-gray-400">{cat.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-font text-6xl mb-8">ENTER THE LATTICE</h2>
            <p className="body-font text-xl text-gray-400 mb-12">
              Join the neural network. Command 400 features. Transcend limitations.
            </p>
            <button
              onClick={() => navigate("/auth")}
              data-testid="cta-launch-button"
              className="px-12 py-5 bg-gradient-to-r from-neon-purple to-neon-cyan text-white heading-font text-base tracking-widest rounded-xl transition-all duration-300 hover:scale-105 neon-glow"
            >
              LAUNCH VAELIS
            </button>
          </motion.div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-8 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="heading-font text-8xl opacity-5 mb-4">VAELIS OS</div>
          <p className="body-font text-sm text-gray-500">
            © 2025 Vaelis. General Intelligence Platform. 400 Features. Infinite Possibilities.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;