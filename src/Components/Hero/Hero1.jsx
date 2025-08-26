import ugflogo from "../../assets/ugflogo.png"
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpeg";
import img5 from "../../assets/img5.jpg";

import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Users, 
  Award, 
  TrendingUp, 
  ArrowRight, 
  Play,
  Star,
  Globe,
  Shield,
  Sparkles
} from 'lucide-react';

const Hero1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    animals: 0,
    women: 0,
    youngsters: 0
  });

  // Animated counter effect
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = {
      animals: 5000 / steps,
      women: 500 / steps,
      youngsters: 300 / steps
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      if (currentStep < steps) {
        setAnimatedNumbers({
          animals: Math.floor(increment.animals * currentStep),
          women: Math.floor(increment.women * currentStep),
          youngsters: Math.floor(increment.youngsters * currentStep)
        });
        currentStep++;
      } else {
        setAnimatedNumbers({
          animals: 5000,
          women: 500,
          youngsters: 300
        });
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  // Auto-slide carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      number: animatedNumbers.animals,
      suffix: '+',
      period: 'Monthly',
      description: 'Number of beneficiaries Animal',
      icon: Heart,
      color: 'from-emerald-400 to-green-600',
      bgColor: 'bg-emerald-50'
    },
    {
      number: animatedNumbers.women,
      suffix: '+',
      period: 'Monthly',
      description: 'Under Privilege Women',
      icon: Users,
      color: 'from-purple-400 to-pink-600',
      bgColor: 'bg-purple-50'
    },
    {
      number: animatedNumbers.youngsters,
      suffix: '+',
      period: 'Monthly',
      description: 'Specially Abided Youngster',
      icon: Award,
      color: 'from-blue-400 to-indigo-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const features = [
    { icon: Globe, text: 'Global Impact' },
    { icon: Shield, text: 'Trusted Foundation' },
    { icon: Sparkles, text: 'Transformative Change' },
    { icon: TrendingUp, text: 'Growing Community' }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50 overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23cfa352' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#cfa352]/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-[#cfa352]/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-[#cfa352]/20 to-orange-400/20 rounded-full blur-lg animate-bounce delay-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            {/* Logo */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="relative group">
               <div className="w-16 h-16 rounded-full ">
  <img src={ugflogo} alt="logo" className="w-full h-full object-cover" />
</div>

                <div className="absolute inset-0 bg-gradient-to-br from-[#cfa352] to-amber-600 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">Utkarsh Global Foundation</h3>
                <p className="text-sm text-gray-600">Since 2010</p>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-[#cfa352]/10 rounded-full text-[#cfa352] text-sm font-semibold border border-[#cfa352]/20">
                <Sparkles className="w-4 h-4 mr-2" />
                Making a Difference Since 2010
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gray-900">Empowering</span>
                <span className="block bg-gradient-to-r from-[#cfa352] via-amber-500 to-orange-500 bg-clip-text text-transparent">
                  Change,
                </span>
                <span className="block text-gray-900">Transforming</span>
                <span className="block bg-gradient-to-r from-[#cfa352] via-amber-500 to-orange-500 bg-clip-text text-transparent">
                  Lives.
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Join our mission to create lasting impact through dedicated service in environment protection, 
                animal welfare, and social empowerment across India.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center px-4 py-2 bg-white rounded-full shadow-md border border-gray-100 hover:shadow-lg hover:border-[#cfa352]/20 transition-all duration-300 group"
                  >
                    <Icon className="w-4 h-4 text-[#cfa352] mr-2 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group bg-gradient-to-r from-[#cfa352] to-amber-600 hover:from-[#cfa352]/90 hover:to-amber-600/90 px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center justify-center transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                Get Involved
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group bg-white hover:bg-gray-50 px-8 py-4 rounded-full text-gray-800 font-semibold text-lg flex items-center justify-center border-2 border-[#cfa352]/20 hover:border-[#cfa352]/40 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Play className="w-5 h-5 mr-2 text-[#cfa352] group-hover:scale-110 transition-transform" />
                Watch Our Story
              </button>
            </div>
          </div>

          <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg">
      {/* Background Images with Overlay */}
      <div className="absolute inset-0">
        <div className="grid grid-cols-5 w-full h-full">
          {[img1, img2, img3, img4, img5].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`bg-${i}`}
              className="w-full h-full object-cover opacity-30"
            />
          ))}
        </div>

        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold bg-black/40">
          Community Impact
        </div>
      </div>
    </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl border border-white/50 hover:border-[#cfa352]/20 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-gray-900">
                          {stat.number.toLocaleString()}
                        </span>
                        <span className="text-xl font-bold text-[#cfa352]">{stat.suffix}</span>
                      </div>
                      
                      <div className="text-sm text-[#cfa352] font-semibold">
                        {stat.period}
                      </div>
                      
                      <p className="text-sm text-gray-600 leading-tight">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust Badge */}
            <div className="mt-6 flex justify-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-2 shadow-lg border border-white/50">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-[#cfa352] fill-current" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  Trusted by 10,000+ supporters
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-[#cfa352]/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#cfa352] rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default Hero1;