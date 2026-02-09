import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Wallet, Globe, RefreshCcw, CreditCard, ChevronRight } from 'lucide-react';

const steps = [
  { 
    icon: <UserPlus size={28} />, 
    title: "Create Account", 
    desc: "Join Zendt in under 2 minutes. No paperwork, just simple digital onboarding to get you started instantly.",
    color: "bg-blue-50 text-blue-600"
  },
  { 
    icon: <Wallet size={28} />, 
    title: "Global Banking", 
    desc: "Get local account details in USD, EUR, and GBP. It works just like a local bank account, wherever you are.",
    color: "bg-purple-50 text-purple-600"
  },
  { 
    icon: <Globe size={28} />, 
    title: "Receive Payments", 
    desc: "Share your details with clients worldwide. They pay in their local currency, and you receive it without high fees.",
    color: "bg-green-50 text-green-600"
  },
  { 
    icon: <RefreshCcw size={28} />, 
    title: "Convert mid-market", 
    desc: "Hold 30+ currencies and swap between them at the real mid-market rate with zero hidden markup.",
    color: "bg-orange-50 text-orange-600"
  },
  { 
    icon: <CreditCard size={28} />, 
    title: "Spend Globally", 
    desc: "Use your Zendt virtual or physical card to spend in any currency at the best rates, online or in person.",
    color: "bg-brand-50 text-brand-600"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden bg-white">
       {/* Background Accents */}
       <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50/50 rounded-full blur-3xl -mr-20 -mt-20 opacity-60" />
       <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -ml-20 -mb-20 opacity-60" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-xs font-bold uppercase tracking-widest mb-6"
          >
            The Journey
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 tracking-tight"
          >
            Start your global <br /> <span className="text-brand-600">journey in minutes.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-xl leading-relaxed"
          >
            Everything you need to manage your international freelance business in one powerful dashboard.
          </motion.p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative group"
            >
              {/* Connector (Desktop Only) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-3 w-6 h-6 z-20 translate-x-1/2">
                   <ChevronRight className="text-slate-200 group-hover:text-brand-300 transition-colors" />
                </div>
              )}

              <div className="h-full p-5 md:p-8 rounded-2xl md:rounded-[2.5rem] bg-slate-50/50 border border-slate-100 hover:border-brand-200 hover:bg-white hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500 flex flex-row md:flex-col items-center md:items-center text-left md:text-center gap-5 md:gap-0">
                <div className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl ${step.color} flex items-center justify-center md:mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  {(() => {
                    const icon = step.icon as React.ReactElement;
                    return React.cloneElement(icon, { size: 24 } as any);
                  })()}
                </div>
                
                <div className="flex-1">
                  <div className="mb-1 md:mb-4">
                    <span className="text-[10px] font-bold text-brand-600/50 uppercase tracking-[0.2em]">Step {idx + 1}</span>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-0.5">{step.title}</h3>
                  </div>
                  
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 p-8 rounded-3xl liquid-glass border-white/60 flex flex-col md:flex-row items-center justify-between gap-8"
        >
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">✓</div>
              <div>
                <p className="font-bold text-slate-900 text-lg">No monthly maintenance fees</p>
                <p className="text-slate-500">Only pay when you move money. Simple.</p>
              </div>
           </div>
           <button className="bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-brand-600/20 hover:bg-brand-700 hover:-translate-y-1 transition-all active:scale-95">
             Start Now
           </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
