import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Target,
} from "lucide-react";

const projectsData = {
  cadaa: {
    url: "https://app.cadaa.com.sa/auth",
    title: "Cadaa - E-commerce Platform",
    description:
      "A comprehensive e-commerce solution built with Angular and modern web technologies. Features include product catalog, shopping cart, user authentication, payment integration, and admin dashboard.",
    longDescription:
      "Cadaa represents a full-featured e-commerce platform designed to provide seamless shopping experiences. The project showcases advanced Angular development techniques, state management, and responsive design principles.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
    tech: [
      "Angular 17+",
      "TypeScript",
      "SASS",
      "PrimeNG",
      "RxJS",
      "Angular Material",
    ],
    features: [
      "Responsive product catalog with filtering and search",
      "Shopping cart with real-time updates",
      "User authentication and profile management",
      "Payment gateway integration",
      "Admin dashboard for inventory management",
      "Order tracking and history",
    ],
    challenges: [
      "Implementing complex state management for cart functionality",
      "Optimizing performance for large product catalogs",
      "Ensuring cross-browser compatibility",
    ],
    duration: "3 months",
    team: "8 developers",
    role: "Frontend Developer",
  },
  areeb: {
    url: "https://www.areebtechnology.com/",
    title: "Areeb - Business Website",
    description:
      "A modern, responsive business website built with React and cutting-edge design principles. Features smooth animations, optimized performance, and excellent user experience.",
    longDescription:
      "Areeb is a sophisticated business website that demonstrates modern web development practices. Built with React and enhanced with smooth animations, it provides an engaging user experience while maintaining excellent performance metrics.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    tech: [
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Router",
      "Vite",
    ],
    features: [
      "Modern, responsive design",
      "Smooth scroll animations and transitions",
      "Contact form with validation",
      "SEO optimized",
      "Fast loading times",
      "Mobile-first approach",
    ],
    challenges: [
      "Creating smooth animations without performance impact",
      "Implementing complex CSS layouts",
      "Optimizing for Core Web Vitals",
    ],
    duration: "2 months",
    team: "3 developers",
    role: "Frontend Developer",
  },
  contraa: {
    url: "",
    title: "Contraa - Project Management",
    description:
      "A comprehensive project management solution built with Angular in an NX monorepo structure. Features real-time collaboration, task management, and team coordination tools.",
    longDescription:
      "Contraa is an enterprise-level project management platform designed to streamline team collaboration and project tracking. Built using modern development practices including NX monorepo architecture.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop",
    tech: [
      "Angular 16",
      "TypeScript",
      "Bootstrap 5",
      "NX Monorepo",
      "NgRx",
      "Chart.js",
    ],
    features: [
      "Real-time project tracking",
      "Team collaboration tools",
      "Task assignment and management",
      "Progress visualization with charts",
      "File sharing and comments",
      "Time tracking and reporting",
    ],
    challenges: [
      "Implementing real-time updates",
      "Managing complex state with NgRx",
      "Scaling the application architecture",
    ],
    duration: "4 months",
    team: "6 developers",
    role: "Frontend Developer",
  },
};

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectsData[projectId as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Technical Challenges</h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-4">Project Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="text-primary" size={20} />
                  <div>
                    <p className="font-medium">Duration</p>
                    <p className="text-muted-foreground text-sm">
                      {project.duration}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-primary" size={20} />
                  <div>
                    <p className="font-medium">Team Size</p>
                    <p className="text-muted-foreground text-sm">
                      {project.team}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="text-primary" size={20} />
                  <div>
                    <p className="font-medium">My Role</p>
                    <p className="text-muted-foreground text-sm">
                      {project.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                  {/* <ExternalLink size={20} /> */}
                  View Live Demo
                </button>
              </a>
              <button className="w-full border border-border py-3 rounded-lg hover:bg-accent transition-colors flex items-center justify-center gap-2">
                <Github size={20} />
                View Source Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
