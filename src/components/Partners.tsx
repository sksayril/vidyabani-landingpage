import React from 'react';
import { Award, BookOpen, GraduationCap, Trophy, Users, Star } from 'lucide-react';

const Partners = () => {
  const partners = [
    { name: "EduTech India", logo: BookOpen, color: "text-blue-600" },
    { name: "Learning Hub", logo: GraduationCap, color: "text-green-600" },
    { name: "Study Masters", logo: Award, color: "text-purple-600" },
    { name: "Exam Success", logo: Trophy, color: "text-yellow-600" },
    { name: "Knowledge Plus", logo: Users, color: "text-red-600" },
    { name: "Smart Learn", logo: Star, color: "text-indigo-600" },
    { name: "Future Academy", logo: BookOpen, color: "text-pink-600" },
    { name: "Bright Minds", logo: GraduationCap, color: "text-teal-600" },
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Collaborating with leading educational institutions and technology partners 
            to bring you the best learning experience
          </p>
        </div>

        {/* Continuous Moving Carousel */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          {/* Moving Container */}
          <div className="flex animate-scroll-right space-x-12">
            {/* First Set */}
            {partners.map((partner, index) => {
              const LogoComponent = partner.logo;
              return (
                <div 
                  key={`first-${index}`}
                  className="flex-shrink-0 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group cursor-pointer min-w-[200px]"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors`}>
                      <LogoComponent className={`w-6 h-6 ${partner.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {partner.name}
                      </h3>
                      <p className="text-sm text-gray-500">Education Partner</p>
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* Duplicate Set for Seamless Loop */}
            {partners.map((partner, index) => {
              const LogoComponent = partner.logo;
              return (
                <div 
                  key={`second-${index}`}
                  className="flex-shrink-0 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group cursor-pointer min-w-[200px]"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors`}>
                      <LogoComponent className={`w-6 h-6 ${partner.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {partner.name}
                      </h3>
                      <p className="text-sm text-gray-500">Education Partner</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
              <Award className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Assurance</h3>
            <p className="text-gray-600">All content is verified and approved by our trusted educational partners</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
              <Users className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Network</h3>
            <p className="text-gray-600">Access to a vast network of experienced educators and subject matter experts</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
              <Star className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Continuous Innovation</h3>
            <p className="text-gray-600">Regular updates and new features through collaborative development</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;