import { Twitter, Linkedin, Instagram } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-24 mb-16">
          <div className="lg:col-span-1 space-y-6">
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md">
                <img src="/logo-filled.png" alt="Zendt Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">Zendt</span>
            </a>
            <p className="text-slate-500 leading-relaxed">
              The financial operating system for global citizens. Building the future of borderless work.
            </p>
            <div className="flex gap-4 pt-2">
               {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all duration-300">
                   <Icon size={18} />
                 </a>
               ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:col-span-3">
            <div>
              <h4 className="font-semibold text-slate-900 mb-6">Product</h4>
              <ul className="space-y-4">
                {['Features', 'Pricing', 'Global Coverage', 'API', 'Changelog'].map(item => (
                  <li key={item}><a href="#" className="text-slate-500 hover:text-brand-600 transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-6">Company</h4>
              <ul className="space-y-4">
                {['About Us', 'Careers', 'Blog', 'Press Kit', 'Contact'].map(item => (
                  <li key={item}><a href="#" className="text-slate-500 hover:text-brand-600 transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-6">Legal</h4>
              <ul className="space-y-4">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'].map(item => (
                  <li key={item}><a href="#" className="text-slate-500 hover:text-brand-600 transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Zendt Financial Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <span>Designed with precision.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
