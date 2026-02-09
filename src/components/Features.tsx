import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Wallet, Zap, ShieldCheck, ArrowRight, Sparkles, TrendingUp, Cpu } from 'lucide-react';

const features = [
  {
    icon: <Globe size={24} />,
    title: "Borderless Payments",
    description: "Accept payments from 150+ countries. Local bank details for major currencies included.",
    size: "lg:col-span-2",
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    icon: <Wallet size={24} />,
    title: "Multi-Currency",
    description: "Hold, convert, and manage 50+ currencies in one place.",
    size: "lg:col-span-1",
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    icon: <Zap size={24} />,
    title: "Instant Transfers",
    description: "Move money between accounts instantly. No waiting days.",
    size: "lg:col-span-1",
    color: "text-orange-600",
    bg: "bg-orange-50"
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Bank-Grade Security",
    description: "Your funds are safeguarded in regulated institutions with 2FA.",
    size: "lg:col-span-1",
    color: "text-green-600",
    bg: "bg-green-50"
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Growth Insights",
    description: "Detailed analytics on your global revenue streams and spending habits.",
    size: "lg:col-span-1",
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  },
  {
    icon: <Cpu size={24} />,
    title: "Powerful API",
    description: "Build custom workflows and automate your business finances with our robust developer tools.",
    size: "lg:col-span-2",
    color: "text-brand-600",
    bg: "bg-brand-50"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden bg-white">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-100/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-100/30 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Sparkles size={12} className="text-brand-500" />
              Comprehensive Suite
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]"
            >
              One ecosystem for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
                your global business.
              </span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg md:text-xl max-w-sm leading-relaxed"
          >
            Ditch the multiple apps. Managed your payments, savings, and spending in one place.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`${feature.size} ${feature.size === 'lg:col-span-2' ? 'col-span-2' : 'col-span-1'} group relative h-full`}
            >
              <div className="h-full p-4 md:p-8 rounded-2xl md:rounded-[2.5rem] liquid-glass hover:bg-white hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500 flex flex-col">
                <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-4 md:mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  {(() => {
                    const icon = feature.icon as React.ReactElement;
                    return React.cloneElement(icon, { size: 20 } as any);
                  })()}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-brand-700 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 text-lg leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {feature.description}
                </p>
                
                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-brand-600 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  Find out more <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
