const Courses = () => {
  const courses = [
    {
      title: "C Programming",
      description: "Master the fundamentals of programming with C language",
      duration: "2 months",
      features: ["Variables & Data Types", "Control Structures", "Functions", "Pointers"]
    },
    {
      title: "C++ Programming", 
      description: "Object-oriented programming concepts and advanced C++",
      duration: "2.5 months",
      features: ["OOP Concepts", "Classes & Objects", "Inheritance", "Polymorphism"]
    },
    {
      title: "Web Development",
      description: "Full-stack web development with modern technologies",
      duration: "4 months",
      features: ["HTML5 & CSS3", "JavaScript", "React", "Node.js"]
    },
    {
      title: "Python Programming",
      description: "Learn Python for automation, data science, and web development",
      duration: "3 months", 
      features: ["Python Basics", "Libraries", "Web Development", "Projects"]
    },
    {
      title: "Tally Prime",
      description: "Complete accounting software training for business",
      duration: "1.5 months",
      features: ["Accounting Basics", "Inventory Management", "GST", "Reports"]
    },
    {
      title: "English Speaking",
      description: "Improve communication skills and confidence",
      duration: "2 months",
      features: ["Grammar", "Vocabulary", "Pronunciation", "Confidence Building"]
    },
    {
      title: "Advanced Excel",
      description: "Master Excel for data analysis and automation",
      duration: "1 month",
      features: ["Formulas", "Pivot Tables", "Macros", "Data Analysis"]
    },
    {
      title: "CCSS",
      description: "Maharashtra State Certificate in Information Technology",
      duration: "6 months",
      features: ["Computer Basics", "Office Suite", "Internet", "Certification"]
    },
    {
      title: "MS Office",
      description: "Complete Microsoft Office suite training",
      duration: "1.5 months",
      features: ["Word", "Excel", "PowerPoint", "Outlook"]
    },
    {
      title: "Java Programming",
      description: "Learn Java for enterprise applications and web development",
      duration: "3 months",
      features: ["Java Basics", "OOP Concepts", "Collections", "Web Applications"]
    }
  ];

  return (
    <section id="courses" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Courses
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Choose from our comprehensive range of programming and technology courses, all designed to make you industry-ready.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className="group bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {course.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4">{course.description}</p>
                
                <div className="mb-4">
                  <span className="text-blue-400 font-semibold">Duration: {course.duration}</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {course.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-slate-300 text-sm">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <button className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-teal-600 transition-all duration-300 group-hover:shadow-lg">
                Explore Course
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
