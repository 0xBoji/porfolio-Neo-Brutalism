'use client';

import { useState } from 'react';
import Image from 'next/image';

interface JourneyStep {
  id: string;
  company: string;
  type: 'visit' | 'internship' | 'work';
  title: string;
  period: string;
  description: string;
  images: string[];
  achievements?: string[];
}

const journeySteps: JourneyStep[] = [
  {
    id: 'gfi-work',
    company: 'GFI',
    type: 'work',
    title: 'Software Engineer',
    period: '2024 - 2025',
    description: 'One of the most memorable experiences in my career journey! Working as a full-time Software Engineer at GFI, I had the opportunity to contribute to enterprise-level projects while collaborating with talented international teams. This period was invaluable for my professional growth - I learned extensively about production-grade software development, best practices in team collaboration, and the dynamics of working in a fast-paced tech environment. The knowledge and skills I gained during this time have been instrumental in shaping my approach to software engineering. Beyond the technical achievements, the mentorship and teamwork culture at GFI helped me develop both professionally and personally. Recognized for outstanding performance and teamwork excellence.',
    images: ['/gfi.jpg', '/gfi-2.jpg', '/gfi-awards.jpg', '/gfi-awards-2.jpg'],
    achievements: [
      '🏆 Team of the Year Award',
      '⭐ Top Performers Team Recognition',
      '🎉 End-of-Year Excellence Award',
    ],
  },
  {
    id: 'aws-christmas-2024',
    company: 'AWS Vietnam',
    type: 'visit',
    title: 'Christmas Networking Event',
    period: 'December 2024',
    description: 'Attended the AWS Vietnam Christmas celebration, a prestigious networking event bringing together cloud professionals, solution architects, and tech leaders from across the region. This was an incredible opportunity to connect with AWS community members, share experiences about cloud architecture and serverless solutions, and learn about the latest AWS innovations directly from AWS technical experts. The event featured engaging discussions about cloud migration strategies, best practices for building scalable applications, and insights into emerging technologies like AI/ML on AWS. Beyond the technical conversations, it was inspiring to meet fellow developers who are passionate about cloud computing and to exchange ideas about career growth in the cloud engineering field. The festive atmosphere combined with deep technical discussions made it a memorable experience that strengthened my connection to the AWS community in Vietnam.',
    images: ['/aws-office.png'],
  },
  {
    id: 'terralogic-internship',
    company: 'Terralogic',
    type: 'internship',
    title: 'Software Engineering Intern',
    period: '2024',
    description: 'Gained hands-on experience in professional software development, working on real-world projects and learning industry best practices. Collaborated with senior engineers and contributed to production-level codebases.',
    images: ['/terralogic-1.jpg'],
  },
  {
    id: 'fpt-is-visit',
    company: 'FPT Information System',
    type: 'visit',
    title: 'Enterprise Process Study Visit',
    period: '2023',
    description: 'Explored enterprise-level software development processes and methodologies at FPT Information System. Learned about large-scale system architecture, agile practices, and corporate development workflows.',
    images: ['/fpt-is.jpg', '/fpt-is-2.jpg'],
  },
  {
    id: 'fpt-software-visit',
    company: 'FPT Software',
    type: 'visit',
    title: 'Company Culture & Process Tour',
    period: '2023',
    description: 'Visited FPT Software to understand professional software engineering practices in one of Vietnam\'s leading tech companies. Gained insights into corporate culture, development processes, and career growth opportunities in the tech industry.',
    images: ['/fpt-software.jpg'],
  },
];

export default function ProfessionalJourney() {
  const [expandedStep, setExpandedStep] = useState<string | null>(null);

  const handleNext = (currentId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const currentIndex = journeySteps.findIndex(s => s.id === currentId);
    if (currentIndex < journeySteps.length - 1) {
      const nextId = journeySteps[currentIndex + 1].id;
      setExpandedStep(nextId);
      // Scroll to next step smoothly
      setTimeout(() => {
        document.getElementById(`step-${nextId}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  };

  const handlePrevious = (currentId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const currentIndex = journeySteps.findIndex(s => s.id === currentId);
    if (currentIndex > 0) {
      const prevId = journeySteps[currentIndex - 1].id;
      setExpandedStep(prevId);
      // Scroll to previous step smoothly
      setTimeout(() => {
        document.getElementById(`step-${prevId}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'work':
        return { icon: '💼', label: 'Full-time Work', color: 'bg-[#88FF00]' };
      case 'internship':
        return { icon: '🎓', label: 'Internship', color: 'bg-[#00D4FF]' };
      case 'visit':
        return { icon: '🏢', label: 'Company Visit', color: 'bg-[#FFE500]' };
      default:
        return { icon: '📍', label: 'Experience', color: 'bg-white' };
    }
  };

  return (
    <div className="space-y-6">
      {/* Journey Header */}
      <div className="brutalist-card bg-[#FF6B9D] p-8 border-4 border-black">
        <h3 className="text-3xl font-black uppercase mb-4">
          🚀 Learning & Professional Journey
        </h3>
        <p className="text-lg font-bold">
          From student visits to professional achievements
        </p>
      </div>

      {/* Journey Timeline */}
      <div className="space-y-4">
        {journeySteps.map((step, index) => {
          const typeInfo = getTypeLabel(step.type);
          return (
            <div
              key={step.id}
              id={`step-${step.id}`}
              className="brutalist-card bg-white p-6 cursor-pointer hover:bg-[#FDFBF7] transition-colors"
              onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`${typeInfo.color} px-3 py-1 border-4 border-black font-black text-sm uppercase`}>
                      {typeInfo.icon} {typeInfo.label}
                    </span>
                    <span className="font-bold text-sm">{step.period}</span>
                  </div>
                  <h4 className="text-2xl font-black uppercase mb-1">
                    {step.company}
                  </h4>
                  <p className="text-lg font-bold text-gray-700">
                    {step.title}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {expandedStep === step.id ? (
                    <span className="text-2xl font-black">−</span>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>
              </div>

              {expandedStep === step.id && (
                <div className="mt-6 space-y-4">
                  <p className="text-base leading-relaxed">
                    {step.description}
                  </p>

                  {step.achievements && step.achievements.length > 0 && (
                    <div className="bg-[#FFE500] border-4 border-black p-4">
                      <h5 className="font-black uppercase mb-2">🏆 Achievements:</h5>
                      <ul className="space-y-1">
                        {step.achievements.map((achievement, idx) => (
                          <li key={idx} className="font-bold">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {step.images.length > 0 && (
                    <div className={`grid gap-4 ${
                      step.images.length === 1 ? 'grid-cols-1' :
                      step.images.length === 2 ? 'grid-cols-2' :
                      step.images.length === 3 ? 'grid-cols-3' :
                      'grid-cols-2 md:grid-cols-4'
                    }`}>
                      {step.images.map((img, idx) => (
                        <div
                          key={idx}
                          className="relative h-[500px] border-4 border-black overflow-hidden"
                        >
                          <Image
                            src={img}
                            alt={`${step.company} - Photo ${idx + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between items-center mt-6 pt-4 border-t-4 border-black">
                    <button
                      onClick={(e) => handlePrevious(step.id, e)}
                      disabled={index === 0}
                      className={`brutalist-btn px-6 py-3 flex items-center gap-2 ${
                        index === 0 
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                          : 'bg-[#FFE500] hover:bg-[#FFD700]'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                      <span className="font-black">Previous</span>
                    </button>
                    
                    <span className="text-sm font-bold">
                      Step {index + 1} of {journeySteps.length}
                    </span>
                    
                    <button
                      onClick={(e) => handleNext(step.id, e)}
                      disabled={index === journeySteps.length - 1}
                      className={`brutalist-btn px-6 py-3 flex items-center gap-2 ${
                        index === journeySteps.length - 1
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : 'bg-[#00D4FF] hover:bg-[#00B8E6]'
                      }`}
                    >
                      <span className="font-black">Next</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
