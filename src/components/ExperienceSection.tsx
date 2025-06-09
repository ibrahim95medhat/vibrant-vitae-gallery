
import React from 'react';
import { Award, Calendar, MapPin } from 'lucide-react';

const certificates = [
  {
    title: 'Frontend Developer Diploma',
    issuer: 'Route',
    year: '2023',
    description: 'Comprehensive frontend development program covering modern web technologies'
  },
  {
    title: 'Professional Frontend Developer',
    issuer: 'FWD Udacity',
    year: '2023',
    description: 'Advanced frontend development certification with real-world projects'
  },
  {
    title: 'Unit Testing Course',
    issuer: 'Udemy',
    year: '2023',
    description: 'Specialized course in JavaScript and frontend testing methodologies'
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Experience & Certification
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Over 3 years of professional frontend development experience with industry-recognized certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Calendar className="text-primary" />
              Professional Experience
            </h3>
            
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30"></div>
              
              {/* Areeb Experience */}
              <div className="relative pl-12 pb-8">
                <div className="absolute left-2 top-2 w-4 h-4 bg-primary rounded-full"></div>
                <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <h4 className="text-xl font-semibold mb-2">Frontend Developer</h4>
                  <p className="text-muted-foreground mb-2 flex items-center gap-2">
                    <MapPin size={16} />
                    Areeb
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">2023 - 2025 • 2 years</p>
                  <p className="text-muted-foreground">
                    Developed modern web applications using Angular, React, and cutting-edge frontend technologies. 
                    Collaborated with cross-functional teams to deliver high-quality user experiences and 
                    contributed to multiple successful projects including e-commerce platforms and business solutions.
                  </p>
                </div>
              </div>

              {/* Remote Experience */}
              <div className="relative pl-12 pb-8">
                <div className="absolute left-2 top-2 w-4 h-4 bg-primary rounded-full"></div>
                <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <h4 className="text-xl font-semibold mb-2">Frontend Developer</h4>
                  <p className="text-muted-foreground mb-2 flex items-center gap-2">
                    <MapPin size={16} />
                    Remote / Freelance
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">2022 - 2023 • 1 year</p>
                  <p className="text-muted-foreground">
                    Started my professional journey as a remote frontend developer, working on various projects 
                    including responsive web applications, landing pages, and user interfaces. Gained experience 
                    with modern frameworks and established strong foundations in web development best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="text-primary" />
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certificates.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {cert.title}
                    </h4>
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
