import React from 'react';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                <img 
                  src="/public/image.png" 
                  alt="Vidyabani Cat" 
                  className="w-8 h-8 rounded-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling!.style.display = 'block';
                  }}
                />
                <BookOpen className="w-6 h-6 text-blue-900 hidden" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Vidyabani</h3>
                <p className="text-blue-300 text-sm">Quality Education Hub</p>
              </div>
            </div>
            <p className="text-blue-200 leading-relaxed">
              Empowering students with top-quality educational resources and AI-powered learning assistance 
              for academic excellence.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-blue-300 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-blue-300 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-blue-300 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-6 h-6 text-blue-300 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-blue-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#courses" className="text-blue-200 hover:text-white transition-colors">Courses</a></li>
              <li><a href="#features" className="text-blue-200 hover:text-white transition-colors">AI Assistant</a></li>
              <li><a href="#about" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Courses</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Class 5-12</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Graduation</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">JEE Preparation</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">NEET Preparation</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Competitive Exams</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span className="text-blue-200">support@vidyabani.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-blue-200">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span className="text-blue-200">New Delhi, India</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-l-lg text-gray-800 focus:outline-none"
                />
                <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-r-lg hover:bg-yellow-300 transition-colors font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300 text-sm">
            © 2024 Vidyabani. All rights reserved. Made with ❤️ for students.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;