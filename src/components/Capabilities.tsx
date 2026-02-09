import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe2, Briefcase, CreditCard, Building2, Shield, Sparkles } from 'lucide-react';

const capabilities = [
  {
    icon: <Globe2 size={24} />,
    title: "Smarter Payments",
    description: "Accept payments via credit card, bank transfer, or local methods. Send invoices and get paid faster.",
    tag: "Fastest",
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    icon: <Briefcase size={24} />,
    title: "Multi-Currency",
    description: "Hold over 50 currencies. Convert between USD, EUR, GBP at real rates with zero markup.",
    tag: "Global",
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    icon: <Building2 size={24} />,
    title: "Scale for Growth",
    description: "Scalable financial infrastructure. Integrate with accounting tools and automate workflows.",
    tag: "Pro",
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  },
  {
    icon: <CreditCard size={24} />,
    title: "Modern Banking",
    description: "Instant virtual cards for online spending. Manage expenses and track subscriptions effortlessly.",
    tag: "New",
    color: "text-brand-600",
    bg: "bg-brand-50"
  }
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-32 relative overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-brand-50/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 left-0 w-1/4 h-1/2 bg-blue-50/40 rounded-full blur-[100px] -z-10" />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100/50 text-brand-700 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Sparkles size={12} />
              Core Capabilities
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]"
            >
              The financial engine <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-500">
                built for your growth.
              </span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a href="#" className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-brand-600 transition-colors group px-6 py-3 bg-slate-50 rounded-full border border-slate-100">
              Explore Enterprise Solutions <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="relative group h-full"
            >
              <div className="h-full p-4 md:p-8 rounded-2xl md:rounded-[2rem] liquid-glass border-white/60 hover:border-brand-300 transition-all duration-500 flex flex-col items-start text-left bg-white/40">
                <div className="w-full flex justify-between items-start mb-6 md:mb-10">
                  <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl ${cap.bg} ${cap.color} flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    {(() => {
                      const icon = cap.icon as React.ReactElement;
                      return React.cloneElement(icon, { size: 20 } as any);
                    })()}
                  </div>
                  <span className="hidden md:block text-[10px] font-bold px-2 py-0.5 rounded-md bg-white border border-slate-100 text-slate-500 uppercase tracking-wider">
                    {cap.tag}
                  </span>
                </div>

                <h3 className="text-base md:text-xl font-bold mb-2 md:mb-4 text-slate-900 group-hover:text-brand-700 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-slate-600 text-[11px] md:text-base leading-relaxed mb-4 md:mb-10 opacity-80 group-hover:opacity-100 transition-opacity line-clamp-3 md:line-clamp-none">
                  {cap.description}
                </p>

                <div className="mt-auto w-full hidden md:block">
                  <div className="h-[1px] w-full bg-slate-100 mb-6 group-hover:bg-brand-100 transition-colors" />
                  <a href="#" className="flex items-center justify-between font-bold text-sm text-slate-900 hover:text-brand-600 transition-colors w-full">
                    <span>Get details</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Security Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-10 rounded-[2.5rem] bg-slate-900 text-white flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative shadow-2xl"
        >
          {/* Accent Blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full blur-[80px] opacity-20 -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-[80px] opacity-20 -ml-20 -mb-20" />

          <div className="flex items-center gap-6 relative z-10 max-w-2xl">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-brand-400">
              <Shield size={32} />
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2">Military-grade protection for your global funds.</h4>
              <p className="text-slate-400">All accounts are fully regulated and protected by deep encryption and 2FA security.</p>
            </div>
          </div>
          <button className="whitespace-nowrap bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold hover:bg-brand-50 transition-all hover:-translate-y-1 relative z-10 shadow-xl active:scale-95">
            Security Compliance Center
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Capabilities;
