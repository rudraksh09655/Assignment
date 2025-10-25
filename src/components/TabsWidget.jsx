import React, { useState } from 'react';

const TabsWidget = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [direction, setDirection] = useState('right');

  const handleTabChange = (newTab) => {
    const tabs = ['about', 'experiences', 'recommended'];
    const currentIndex = tabs.indexOf(activeTab);
    const newIndex = tabs.indexOf(newTab);
    
    setDirection(newIndex > currentIndex ? 'right' : 'left');
    setActiveTab(newTab);
  };

  const tabContent = {
    about: {
      title: 'About Me',
      content: `Hello! I'm Alex, a passionate Frontend Developer specializing in creating beautiful and intuitive user interfaces. With over 5 years of experience in React, JavaScript, and modern web technologies, I love turning complex problems into simple, elegant solutions.

I believe in writing clean, maintainable code and creating experiences that users love. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while reading tech blogs.

My approach combines technical expertise with creative problem-solving to build applications that not only work flawlessly but also delight users at every interaction.`
    },
    experiences: {
      title: 'Experiences',
      content: `Senior Frontend Developer | TechCorp Inc. (2021 - Present)
• Led a team of 5 developers in building a enterprise-level SaaS platform
• Improved application performance by 60% through code optimization
• Implemented CI/CD pipelines reducing deployment time by 40%

Frontend Developer | StartupHub (2019 - 2021)
• Developed responsive web applications using React and TypeScript
• Collaborated with UX designers to create pixel-perfect interfaces
• Mentored junior developers and conducted code reviews

Junior Developer | WebSolutions (2018 - 2019)
• Built reusable component libraries for multiple projects
• Worked on e-commerce platforms serving 100K+ users
• Gained expertise in modern JavaScript frameworks and tools`
    },
    recommended: {
      title: 'Recommended',
      content: `"Alex is an exceptional developer with a keen eye for detail. Their ability to translate complex requirements into elegant solutions is truly impressive. I highly recommend Alex for any frontend development role."
- Sarah Johnson, CTO at TechCorp

"Working with Alex has been a pleasure. Their technical skills are matched only by their collaborative spirit and dedication to quality. Alex consistently delivers beyond expectations."
- Michael Chen, Product Manager at StartupHub

"Alex's contributions to our team were invaluable. Their expertise in React and modern web technologies helped us ship features faster while maintaining high code quality standards."
- Emily Rodriguez, Engineering Lead at WebSolutions`
    }
  };

  return (
    <div className="w-full bg-[#1a1a1f] rounded-3xl p-6 shadow-2xl relative">
      {/* Decorative Question Mark Icon */}
      <div className="absolute left-6 top-6 w-10 h-10 bg-[#2d2d35] rounded-full flex items-center justify-center text-gray-500">
        <span className="text-xl">?</span>
      </div>
      
      {/* Tabs Header */}
      <div className="flex gap-3 mb-6 ml-14">
        <button
          onClick={() => handleTabChange('about')}
          className={`px-8 py-3 rounded-2xl font-medium transition-all duration-300 ${
            activeTab === 'about'
              ? 'bg-[#2d2d35] text-white shadow-lg'
              : 'bg-transparent text-gray-400 hover:text-gray-300'
          }`}
        >
          About Me
        </button>
        <button
          onClick={() => handleTabChange('experiences')}
          className={`px-8 py-3 rounded-2xl font-medium transition-all duration-300 ${
            activeTab === 'experiences'
              ? 'bg-[#2d2d35] text-white shadow-lg'
              : 'bg-transparent text-gray-400 hover:text-gray-300'
          }`}
        >
          Experiences
        </button>
        <button
          onClick={() => handleTabChange('recommended')}
          className={`px-8 py-3 rounded-2xl font-medium transition-all duration-300 ${
            activeTab === 'recommended'
              ? 'bg-[#2d2d35] text-white shadow-lg'
              : 'bg-transparent text-gray-400 hover:text-gray-300'
          }`}
        >
          Recommended
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-[#2d2d35] rounded-2xl p-6 min-h-[280px] overflow-hidden scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent ml-14 relative">
        <div
          key={activeTab}
          className={`text-gray-300 leading-relaxed whitespace-pre-line overflow-y-auto max-h-[268px] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent
            ${direction === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left'}`}
        >
          {tabContent[activeTab].content}
        </div>
      </div>
    </div>
  );
};

export default TabsWidget;