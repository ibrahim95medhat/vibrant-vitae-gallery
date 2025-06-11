
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Github, Linkedin, MessageCircle, Send, MapPin, Phone } from 'lucide-react';
import { toast } from 'sonner';
import { postForm } from '@/services/services';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function addForm(formData:any){
    await postForm(formData)
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    console.log(formData);
    addForm(formData);

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          <h1 className="text-3xl md:text-4xl font-bold">Get In Touch</h1>
          <p className="text-muted-foreground mt-2">
            Let's discuss your next project or just say hello!
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with amazing people.
                Whether you have a project in mind or just want to chat about frontend development,
                feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">Email</h3>
                  <p className="text-muted-foreground">your.email@example.com</p>
                </div>
              </a>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Github className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">GitHub</h3>
                  <p className="text-muted-foreground">@yourusername</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">LinkedIn</h3>
                  <p className="text-muted-foreground">Your Professional Profile</p>
                </div>
              </a>

              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">WhatsApp</h3>
                  <p className="text-muted-foreground">+1 (234) 567-8900</p>
                </div>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 p-6 rounded-lg border border-border">
              <h3 className="font-bold text-lg mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">2+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">15+</p>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">3</p>
                  <p className="text-sm text-muted-foreground">Certifications</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">24h</p>
                  <p className="text-sm text-muted-foreground">Response Time</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
