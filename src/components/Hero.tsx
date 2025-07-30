import React from 'react';
import { BookOpen, Star, Users, Award, Mic, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Welcome to
                <span className="block text-yellow-400">Vidyabani</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Your ultimate destination for top-quality educational notes and resources. 
                From Class 5 to Graduation and Competitive Exams - we've got you covered!
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-blue-900" />
                </div>
                <span className="text-blue-100">Quality Notes</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Mic className="w-5 h-5 text-blue-900" />
                </div>
                <span className="text-blue-100">AI Voice Assistant</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-blue-900" />
                </div>
                <span className="text-blue-100">Competitive Exams</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-900" />
                </div>
                <span className="text-blue-100">Expert Teachers</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-colors shadow-lg">
                Start Learning Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors">
                Explore Courses
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">50K+</div>
                <div className="text-blue-200">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">1000+</div>
                <div className="text-blue-200">Quality Notes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">95%</div>
                <div className="text-blue-200">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Mascot */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center space-y-6">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="/public/image.png" 
                    alt="Vidyabani Mascot Cat" 
                    className="w-40 h-40 object-cover rounded-full"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling!.style.display = 'flex';
                    }}
                  />
                  <div className="w-40 h-40 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full hidden items-center justify-center">
                    <Brain className="w-20 h-20 text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-blue-900">Meet Your Study Buddy!</h3>
                  <p className="text-blue-600">I'm here to help you learn with AI-powered assistance</p>
                </div>
                <div className="flex justify-center">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center space-x-2">
                    <Mic className="w-5 h-5" />
                    <span>Talk to Me!</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-white rounded-full opacity-30 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;