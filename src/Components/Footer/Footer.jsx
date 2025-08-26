import React, { useState } from 'react';
import ugflogo from "../../assets/ugflogo.png"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Heart,
  Globe,
  Users,
  Shield,
  BookOpen,
  Calendar
} from 'lucide-react';

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const quickLinks = [
    { name: 'About Us', icon: Users, href: '#' },
    { name: 'Certifications', icon: Shield, href: '#' },
    { name: 'Become a Volunteer', icon: Heart, href: '#' },
    { name: 'Upcoming Events', icon: Calendar, href: '#' },
    { name: 'Gallery', icon: Globe, href: '#' },
    { name: 'Documentary', icon: BookOpen, href: '#' }
  ];

  const moreLinks = [
    { name: 'Shop', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' }
  ];

const initiatives = [
  { name: 'Environment Protection', color: 'bg-green-600' },
  { name: 'Animal Welfare', color: 'bg-blue-600' },
  { name: 'Women Education & Empowerment', color: 'bg-purple-700' },
  { name: 'Social Justice & Empowerment', color: 'bg-cyan-500' },
  { name: 'Health Care', color: 'bg-teal-600' },
  { name: 'Road Safety', color: 'bg-yellow-500 text-black' } // yellow needs dark text
];



  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Youtube, href: '#', color: 'hover:text-red-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat opacity-20" 
             style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Logo and CTA Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="relative group">
              {/* Utkarsh Logo Placeholder - Replace with actual logo */}
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300 overflow-hidden">
  <img 
    src={ugflogo} 
    alt="ugf-logo" 
    className="w-16 h-16 object-contain" 
  />
</div>


              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
            Join Our Transformative Movement
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Support our cause: donate today, change lives for the better.
          </p>
          <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-600 hover:to-yellow-600 px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
            Donate Now
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group cursor-pointer">
                  <MapPin className="w-5 h-5 text-yellow-400 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Corporate Office no 402-407 4th floor,<br />
                      Vasudev Chambers near Songapur Signal<br />
                      Opposite Dmart Mulund West Mumbai-400078
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer hover:text-yellow-400 transition-colors">
                  <Phone className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform" />
                  <span>86559 69555</span>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer hover:text-yellow-400 transition-colors">
                  <Mail className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform" />
                  <span className="break-all">info@utkarshglobalfoundation.org</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Access */}
          <div className="lg:col-span-1">
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 h-full">
              <h3 className="text-xl font-bold mb-6 text-yellow-400">Quick Access</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-all duration-300 group"
                        onMouseEnter={() => setHoveredLink(`quick-${index}`)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span>{link.name}</span>
                        <ChevronRight className={`w-4 h-4 ml-auto transition-all duration-300 ${
                          hoveredLink === `quick-${index}` ? 'translate-x-1 text-yellow-400' : ''
                        }`} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* More Links */}
          <div className="lg:col-span-1">
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 h-full">
              <h3 className="text-xl font-bold mb-6 text-yellow-400">More Links</h3>
              <ul className="space-y-3">
                {moreLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="flex items-center justify-between text-gray-300 hover:text-yellow-400 transition-all duration-300 group"
                      onMouseEnter={() => setHoveredLink(`more-${index}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className={`w-4 h-4 transition-all duration-300 ${
                        hoveredLink === `more-${index}` ? 'translate-x-1 text-yellow-400' : ''
                      }`} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Our Initiatives */}
          <div className="lg:col-span-1">
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 h-full">
              <h3 className="text-xl font-bold mb-6 text-yellow-400">Our Initiatives</h3>
              <div className="space-y-3">
                {initiatives.map((initiative, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer"
                    onMouseEnter={() => setHoveredLink(`init-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <div className={`bg-gradient-to-r ${initiative.color} p-3 rounded-xl transform group-hover:scale-105 transition-all duration-300`}>
                      <span className="text-white font-medium text-sm">{initiative.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2017-2025 Utkarsh Global Foundation All Rights Reserved.
              </p>
              
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg backdrop-blur-sm`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
       <div className="fixed bottom-10 right-10">
  <button className="w-12 h-12 rounded-full bg-gradient-to-r from-[#cfa352] to-yellow-500 flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
    <ChevronRight className="w-10 h-10 rotate-[-90deg]" />
  </button>
</div>


      </div>
    </footer>
  );
};

export default Footer;