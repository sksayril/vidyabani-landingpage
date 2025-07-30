import React from 'react';
import { BookOpen, Users, Award, Target, Heart, Zap, Globe, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "50K+", label: "Happy Students", icon: Users },
    { number: "1000+", label: "Study Materials", icon: BookOpen },
    { number: "95%", label: "Success Rate", icon: Award },
    { number: "24/7", label: "AI Support", icon: Zap }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest quality in everything we do",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Heart,
      title: "Care",
      description: "Every student's success is our personal mission",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Leading the future of education with AI technology",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Building lasting relationships through reliability",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Animation */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl font-bold text-blue-900 mb-4 relative">
              About Vidyabani
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 rounded-full animate-pulse"></div>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforming education through innovation, quality, and personalized learning experiences 
            that empower students to achieve their dreams
          </p>
        </div>

        {/* Animated Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-2xl group-hover:rotate-12 transition-all duration-300">
                  <IconComponent className="w-10 h-10 text-white group-hover:animate-bounce" />
                </div>
                <div className="text-4xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-600 group-hover:text-gray-800 transition-colors">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission & Vision with Floating Elements */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 relative">
          {/* Floating Background Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-30 animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-100 rounded-full opacity-40 animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-100 rounded-full opacity-20 animate-bounce"></div>

          {/* Mission */}
          <div className="relative z-10 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-6 animate-pulse">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To democratize quality education by providing comprehensive, accessible, and innovative 
              learning resources that empower students from Class 5 to competitive exam preparation. 
              We believe every student deserves the best educational support to unlock their potential.
            </p>
          </div>

          {/* Vision */}
          <div className="relative z-10 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl p-8 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mb-6 animate-pulse">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become India's leading educational platform that combines traditional learning with 
              cutting-edge AI technology, creating a future where personalized education is accessible 
              to every student, regardless of their background or location.
            </p>
          </div>
        </div>

        {/* Core Values with Physics Effects */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-blue-900 mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index}
                  className="group cursor-pointer transform hover:scale-110 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200">
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-spin transition-all duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-blue-900 text-center mb-3 group-hover:text-blue-700 transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 text-center text-sm leading-relaxed group-hover:text-gray-800 transition-colors">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section with Cat Mascot */}
        <div className="text-center bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white rounded-full animate-spin-slow"></div>
            <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-white rounded-full animate-bounce"></div>
          </div>

          <div className="relative z-10">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center relative overflow-hidden animate-float">
                <img 
                  src="/image.png" 
                  alt="Vidyabani Team Mascot" 
                  className="w-28 h-28 object-cover rounded-full hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling!.style.display = 'flex';
                  }}
                />
                <div className="w-28 h-28 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full hidden items-center justify-center">
                  <Users className="w-14 h-14 text-white" />
                </div>
              </div>
              <div className="absolute -inset-4 rounded-full border-4 border-yellow-300 animate-ping opacity-30"></div>
            </div>
            
            <h3 className="text-3xl font-bold mb-4">Meet Our Team</h3>
            <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
              Our dedicated team of educators, technologists, and AI specialists work tirelessly 
              to create the best learning experience for our students. Together with our mascot, 
              we're here to guide you on your educational journey!
            </p>
            
            <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;