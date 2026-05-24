import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, Users, Clock, Zap, Award, Eye, Lock, Building2, Factory, Home, 
  Hospital, GraduationCap, Store, Hotel, Warehouse, ArrowRight, Phone, Mail, MapPin 
} from 'lucide-react';

// Navigation Component
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-semibold tracking-tight text-xl text-slate-900">Maha Shiva</div>
            <div className="text-[10px] text-slate-500 -mt-1 tracking-[2px]">SECURITY SERVICES</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="text-slate-600 hover:text-slate-900 transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link to="/contact" className="px-6 py-2.5 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-all flex items-center gap-2">
            Request Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden border-t bg-white px-8 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="block py-2 text-slate-700">{link.name}</Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Coming Soon Component
const ComingSoon: React.FC<{ title: string }> = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#FAFAF9] pt-20 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="mx-auto mb-8 w-20 h-20 rounded-3xl bg-white shadow-xl shadow-slate-200/60 flex items-center justify-center border border-slate-100">
          <Shield className="w-10 h-10 text-slate-800" />
        </div>
        <h1 className="text-6xl font-semibold tracking-[-2.5px] text-slate-900 mb-4">{title}</h1>
        <p className="text-2xl text-slate-400 tracking-tight mb-10">Coming Soon</p>
        
        <div className="mx-auto max-w-sm bg-white/70 backdrop-blur-2xl border border-slate-200/70 rounded-3xl p-10 shadow-2xl shadow-slate-900/5">
          <p className="text-slate-600 mb-8 leading-relaxed">We're building something exceptional.</p>
          <button 
            onClick={() => navigate('/')} 
            className="inline-flex items-center justify-center gap-3 px-9 py-4 bg-slate-900 text-white rounded-2xl text-sm font-medium hover:bg-slate-800 active:scale-[0.985] transition-all"
          >
            Back To Home <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Floating Trust Cards
const TrustCards: React.FC = () => {
  const cards = [
    { icon: Clock, label: "24/7 Monitoring", desc: "Continuous oversight" },
    { icon: Users, label: "Highly Trained Personnel", desc: "Expert professionals" },
    { icon: Zap, label: "Rapid Response", desc: "Immediate action" },
    { icon: Award, label: "Trusted Security Partner", desc: "Enterprise grade" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 -mt-12 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 * index, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="group bg-white/90 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-7 shadow-xl shadow-slate-900/5 hover:shadow-2xl transition-all"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-2xl bg-slate-50 group-hover:bg-slate-900 transition-colors">
                <card.icon className="w-6 h-6 text-slate-700 group-hover:text-white transition-colors" />
              </div>
            </div>
            <div className="font-semibold text-xl tracking-tight text-slate-900 mb-1">{card.label}</div>
            <div className="text-sm text-slate-500">{card.desc}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Main Home Page
const HomePage: React.FC = () => {
  const services = [
    { icon: Users, title: "Manned Guarding", desc: "Professional trained security personnel." },
    { icon: Building2, title: "Corporate Security", desc: "Office and commercial property protection." },
    { icon: Factory, title: "Industrial Security", desc: "Factory and warehouse security solutions." },
    { icon: Home, title: "Residential Security", desc: "Apartment and housing society protection." },
    { icon: Eye, title: "CCTV Monitoring", desc: "Advanced surveillance monitoring services." },
    { icon: Lock, title: "Access Control Management", desc: "Modern visitor and entry management systems." },
  ];

  const industries = [
    { icon: Building2, name: "Corporate Offices" },
    { icon: Factory, name: "Manufacturing Units" },
    { icon: Home, name: "Residential Communities" },
    { icon: Hospital, name: "Hospitals" },
    { icon: GraduationCap, name: "Educational Institutions" },
    { icon: Store, name: "Commercial Complexes" },
    { icon: Hotel, name: "Luxury Hotels" },
    { icon: Warehouse, name: "Warehouses" },
  ];

  const whyChooseUs = [
    { title: "Professional Personnel", desc: "Highly trained and disciplined workforce." },
    { title: "Reliable Protection", desc: "Consistent security operations." },
    { title: "Technology-Driven Approach", desc: "Modern surveillance and monitoring systems." },
  ];

  const process = [
    { step: "01", title: "Security Assessment", desc: "Comprehensive evaluation of your environment" },
    { step: "02", title: "Custom Security Planning", desc: "Tailored protection strategies" },
    { step: "03", title: "Deployment", desc: "Expert personnel and systems installation" },
    { step: "04", title: "Monitoring & Reporting", desc: "Real-time oversight and insights" },
    { step: "05", title: "Continuous Improvement", desc: "Adaptive enhancements over time" },
  ];

  return (
    <div className="bg-[#FAFAF9] text-slate-900 overflow-hidden">
      {/* HERO SECTION - 100vh */}
      <div className="relative h-screen flex items-center justify-center pt-20 bg-slate-950 overflow-hidden">
        {/* Pixabay Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
        >
          <source src="https://cdn.pixabay.com/video/2020/05/25/40117-425263665_large.mp4" type="video/mp4" />
          <source src="https://cdn.pixabay.com/vimeo/328230784/security-22521.mp4" type="video/mp4" />
        </video>
        
        {/* Cinematic Background Simulation */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950" />
        
        <div className="relative z-10 max-w-5xl px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6 px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs tracking-[4px] text-white/80 font-medium"
          >
            TRUST • PROTECTION • PROFESSIONALISM
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[64px] md:text-[86px] leading-[1.05] font-semibold tracking-[-4px] text-white mb-6 drop-shadow-2xl"
          >
            Protecting People,<br />Property &amp; Business
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-xl mx-auto text-xl text-white/80 tracking-tight mb-10 font-light"
          >
            Professional security solutions designed to safeguard organizations, assets and communities with reliability, vigilance and excellence.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Link to="/contact" className="inline-flex h-14 items-center justify-center px-9 rounded-full bg-white text-slate-950 font-medium text-sm tracking-wide hover:bg-slate-200 active:scale-[0.985] shadow-xl shadow-white/10 transition-all">
              Request Consultation
            </Link>
            <Link to="/services" className="inline-flex h-14 items-center justify-center px-9 rounded-full border border-white/30 text-white backdrop-blur-sm hover:bg-white/10 font-medium text-sm tracking-wide transition-all">
              Explore Services
            </Link>
          </motion.div>
        </div>

        {/* Subtle Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40 text-xs tracking-[3px]"
        >
          SCROLL TO BEGIN 
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent mt-4" 
          />
        </motion.div>
      </div>

      {/* FLOATING TRUST CARDS */}
      <TrustCards />

      {/* ABOUT US SECTION */}
      <div className="max-w-7xl mx-auto px-8 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="uppercase text-xs tracking-[4px] text-slate-400 mb-4 font-semibold">EST. 2012</div>
            <h2 className="text-5xl md:text-6xl font-semibold tracking-[-2px] leading-tight text-slate-900 mb-8">
              Security Excellence<br />Built On Trust
            </h2>
            <p className="text-xl text-slate-600 mb-10 tracking-tight leading-relaxed">
              Maha Shiva Security Services delivers professional security and protection solutions tailored to modern business and community needs. Our commitment to vigilance, discipline and operational excellence helps organizations maintain a safe and secure environment.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Shield, title: "Professional Personnel" },
                { icon: Eye, title: "Continuous Monitoring" },
                { icon: Zap, title: "Risk Prevention" },
                { icon: Award, title: "Reliable Service" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-slate-100 text-slate-900">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="font-medium tracking-tight text-sm">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-slate-200 to-slate-100 rounded-[2.5rem] transform -rotate-3"></div>
            <img 
              src="/security_personnel_1779624188516.png" 
              alt="Professional corporate security personnel" 
              className="relative w-full h-[600px] object-cover rounded-[2rem] shadow-2xl shadow-slate-900/20"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl shadow-slate-900/10 flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-white text-2xl font-semibold">12+</div>
              <div>
                <div className="font-semibold text-slate-900">Years of</div>
                <div className="text-sm text-slate-500">Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <div className="bg-white py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-14">
            <div className="text-xs uppercase tracking-[4px] text-slate-400 mb-3">WHAT WE OFFER</div>
            <h3 className="font-semibold tracking-[-2.5px] text-6xl">Comprehensive Security Solutions</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden p-9 rounded-3xl border border-slate-200 bg-[#FAFAF9] hover:bg-white transition-all duration-500 flex flex-col"
              >
                <div className="mb-auto">
                  <div className="inline-flex p-4 rounded-2xl bg-white shadow-sm mb-8 group-hover:bg-slate-900 transition-colors">
                    <service.icon className="w-7 h-7 text-slate-800 group-hover:text-white transition-colors" />
                  </div>
                  <div className="font-semibold tracking-tight text-3xl mb-3">{service.title}</div>
                  <p className="text-lg text-slate-600 pr-4">{service.desc}</p>
                </div>
                <div className="mt-8 text-xs uppercase tracking-[2px] text-slate-400 group-hover:text-slate-600">Learn more →</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* INDUSTRIES SECTION */}
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="mb-12 flex justify-between items-end">
          <div>
            <div className="text-xs tracking-[3px] text-slate-400 mb-1">TRUSTED BY</div>
            <h3 className="font-semibold text-6xl tracking-[-3px]">Industries We Serve</h3>
          </div>
          <div className="hidden md:block text-sm text-slate-500 max-w-[240px]">From enterprise campuses to critical infrastructure, we protect what matters most.</div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {industries.map((industry, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.01 }}
              className="group flex items-center gap-5 border border-slate-200 bg-white px-7 py-7 rounded-3xl hover:border-slate-900 transition-all"
            >
              <industry.icon className="w-6 h-6 text-slate-400 group-hover:text-slate-900" />
              <div className="font-medium tracking-tight text-lg">{industry.name}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="relative py-32 text-white overflow-hidden">
        <div className="absolute inset-0 bg-slate-950">
          <img 
            src="/cctv_monitoring_1779624220518.png" 
            alt="Advanced CCTV Monitoring Control Room" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <div className="uppercase tracking-[4px] font-semibold text-xs text-white/50 mb-4">THE MAHA SHIVA DIFFERENCE</div>
            <h2 className="font-semibold text-5xl md:text-6xl tracking-[-2px] mb-6">Why Leading Organizations<br />Choose Us</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div 
                key={index} 
                whileHover={{ y: -8 }}
                className="bg-white/10 border border-white/20 hover:bg-white/15 hover:border-white/30 backdrop-blur-xl rounded-[2rem] p-10 text-left transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white/80 font-mono text-xl mb-8">
                  0{index + 1}
                </div>
                <div className="font-semibold tracking-tight text-3xl mb-4 leading-tight">{item.title}</div>
                <p className="text-white/70 text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* SECURITY PROCESS - TIMELINE */}
      <div className="max-w-5xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[3px] text-slate-400">OUR APPROACH</div>
          <div className="font-semibold text-6xl tracking-[-2.6px] mt-2">Security Process</div>
        </div>

        <div className="space-y-px max-w-3xl mx-auto">
          {process.map((step, index) => (
            <div key={index} className="group flex gap-8 border-t border-slate-200 py-9 items-start hover:bg-white transition-all px-2">
              <div className="font-mono text-5xl font-semibold tracking-tighter text-slate-200 group-hover:text-slate-900 w-20 tabular-nums transition-colors">{step.step}</div>
              <div className="pt-1">
                <div className="font-semibold text-3xl tracking-tight mb-1.5">{step.title}</div>
                <div className="text-xl text-slate-600">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="max-w-4xl mx-auto px-8 pb-24">
        <div className="bg-white border border-slate-200 rounded-3xl px-14 py-16 text-center shadow-xl shadow-slate-900/5">
          <h2 className="font-semibold text-[52px] tracking-[-2.4px] mb-4">Looking For Reliable<br />Security Services?</h2>
          <p className="text-xl text-slate-600 max-w-md mx-auto mb-10">Partner with Maha Shiva Security Services and create a safer environment for your people and assets.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-block px-10 py-[17px] rounded-2xl bg-slate-900 text-white text-sm font-medium tracking-wide hover:bg-black transition">Get Consultation</Link>
            <Link to="/contact" className="inline-block px-10 py-[17px] rounded-2xl border text-sm font-medium tracking-wide border-slate-200 hover:bg-slate-50">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-10 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-y-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-slate-900 rounded-xl flex items-center justify-center"><Shield className="w-4 h-4 text-white" /></div>
              <div className="font-semibold tracking-tight text-xl">Maha Shiva</div>
            </div>
            <div className="text-sm text-slate-500 max-w-[220px]">Premium enterprise security and risk management.</div>
          </div>

          <div>
            <div className="font-medium text-sm tracking-widest mb-5 text-slate-400">QUICK LINKS</div>
            <div className="space-y-[13px] text-sm text-slate-600">
              {['About', 'Services', 'Industries', 'Careers'].map(l => <div key={l}>{l}</div>)}
            </div>
          </div>

          <div>
            <div className="font-medium text-sm tracking-widest mb-5 text-slate-400">CONTACT</div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-slate-600"><Mail className="w-4 h-4" /> contact@mahashiva.com</div>
              <div className="flex items-center gap-2 text-slate-600"><Phone className="w-4 h-4" /> +91 22 4890 2200</div>
              <div className="flex items-center gap-2 text-slate-600"><MapPin className="w-4 h-4" /> Mumbai, Maharashtra</div>
            </div>
          </div>

          <div>
            <div className="font-medium text-sm tracking-widest mb-5 text-slate-400">CONNECT</div>
            <div className="flex gap-5 text-slate-600 text-xs tracking-[1px]">
              LINKEDIN &nbsp;•&nbsp; TWITTER &nbsp;•&nbsp; INSTAGRAM
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t text-xs text-slate-400 tracking-widest flex justify-between items-center">
          <div>© {new Date().getFullYear()} Maha Shiva Security Services. All rights reserved.</div>
          <div>PRIVACY • LEGAL</div>
        </div>
      </footer>
    </div>
  );
};

// Main App Component
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FAFAF9]">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<ComingSoon title="About Us" />} />
          <Route path="/services" element={<ComingSoon title="Services" />} />
          <Route path="/industries" element={<ComingSoon title="Industries" />} />
          <Route path="/careers" element={<ComingSoon title="Careers" />} />
          <Route path="/contact" element={<ComingSoon title="Contact" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;