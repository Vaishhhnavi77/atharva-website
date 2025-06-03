
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact{' '}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to start your learning journey? Get in touch with us today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Phone</h4>
                    <p className="text-slate-300">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-slate-300">info@atharvainstitutions.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-teal-500/10 p-8 rounded-2xl border border-blue-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Affordable fees - All courses at ₹5,000
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  Expert instructors with industry experience
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Hands-on practical learning approach
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Flexible batch timings
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">Enrollment Form</h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-slate-300 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-slate-300 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-slate-300 mb-2">Course Interest</label>
                <select className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors">
                  <option>Select a course</option>
                  <option>C Programming</option>
                  <option>C++ Programming</option>
                  <option>Web Development</option>
                  <option>Python Programming</option>
                  <option>TALLY ERP9</option>
                  <option>English Speaking</option>
                  <option>Advanced Excel</option>
                  <option>MSCIT</option>
                  <option>MS Office</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105"
              >
                Enroll Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
