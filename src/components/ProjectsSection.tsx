
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Code, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 'cadaa',
    title: 'Cadaa',
    description: 'Modern e-commerce platform with advanced features and responsive design',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    tech: ['Angular', 'TypeScript', 'SASS', 'PrimeNG'],
    category: 'E-commerce',
    url: 'https://app.cadaa.com.sa/auth'
  },
  {
    id: 'areeb',
    title: 'Areeb Website',
    description: 'Professional business website with modern UI/UX and smooth animations',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    category: 'Business',
    url: 'https://www.areebtechnology.com/'
  },
  {
    id: 'contraa',
    title: 'Contraa',
    description: 'Comprehensive project management solution with real-time collaboration',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    tech: ['Angular', 'TypeScript', 'Bootstrap', 'NX'],
    category: 'SaaS',
    url: ''
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {project.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span 
              key={tech}
              className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <Link 
            to={`/project/${project.id}`}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group/link"
          >
            View Details
            <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
          <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ExternalLink size={16} />
            Live Demo
          </button>
            </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcase of my recent work demonstrating expertise in modern frontend technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 group"
          >
            Let's Work Together
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
