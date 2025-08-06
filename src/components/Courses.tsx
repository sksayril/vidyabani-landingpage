import React from 'react';
import { BookOpen, GraduationCap, Trophy, Users, Clock, Star } from 'lucide-react';
import { handleRedirectClick } from '../utils/redirects';

const Courses = () => {
  const courseCategories = [
    {
      title: "Class 5-12",
      description: "Comprehensive notes and study materials for school curriculum",
      icon: BookOpen,
      subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi"],
      students: "25K+",
      rating: 4.8,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Graduation",
      description: "Advanced study materials for undergraduate courses",
      icon: GraduationCap,
      subjects: ["Engineering", "Commerce", "Arts", "Science", "Management"],
      students: "15K+",
      rating: 4.9,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Competitive Exams",
      description: "Specialized preparation for various competitive examinations",
      icon: Trophy,
      subjects: ["JEE", "NEET", "UPSC", "Banking", "SSC"],
      students: "10K+",
      rating: 4.7,
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Our Course Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of educational resources designed to help you excel 
            at every stage of your academic journey
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {courseCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="w-12 h-12" />
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 fill-current text-yellow-300" />
                      <span className="font-semibold">{category.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-blue-100">{category.description}</p>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Popular Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.subjects.map((subject, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="w-5 h-5" />
                      <span>{category.students} Students</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="w-5 h-5" />
                      <span>24/7 Access</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleRedirectClick(`courses/${category.title.toLowerCase().replace(/\s+/g, '-')}`)}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Explore {category.title}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Why Choose Vidyabani?</h3>
            <p className="text-gray-600">We provide more than just notes - we offer a complete learning experience</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Quality Content</h4>
              <p className="text-gray-600 text-sm">Expertly crafted notes by experienced educators</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Proven Results</h4>
              <p className="text-gray-600 text-sm">95% success rate in competitive exams</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Expert Support</h4>
              <p className="text-gray-600 text-sm">24/7 doubt clearing by qualified teachers</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Regular Updates</h4>
              <p className="text-gray-600 text-sm">Content updated as per latest syllabus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;