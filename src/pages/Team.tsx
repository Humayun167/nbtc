/**
 * Team Page
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const faculty = [
  {
    name: 'Dr. Mohammad Rahman',
    title: 'Lab Director & Professor',
    department: 'Department of Biomedical Engineering',
    research: 'Nanomedicine, Drug Delivery, Biosensors',
    email: 'm.rahman@diu.edu.bd',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Dr. Fatima Ahmed',
    title: 'Associate Professor',
    department: 'Department of Pharmacy',
    research: 'Nanopharmaceuticals, Polymer Nanoparticles',
    email: 'f.ahmed@diu.edu.bd',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Dr. Kamal Hossain',
    title: 'Associate Professor',
    department: 'Department of Chemistry',
    research: 'Nanomaterial Synthesis, Green Chemistry',
    email: 'k.hossain@diu.edu.bd',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Dr. Nusrat Jahan',
    title: 'Assistant Professor',
    department: 'Department of Biochemistry',
    research: 'Biosensors, Point-of-Care Diagnostics',
    email: 'n.jahan@diu.edu.bd',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
  },
];

const researchers = [
  {
    name: 'Tanvir Alam',
    title: 'PhD Researcher',
    research: 'Gold nanoparticles for cancer therapy',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Sadia Islam',
    title: 'PhD Researcher',
    research: 'Electrochemical biosensors',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Rafiq Uddin',
    title: 'Research Assistant',
    research: 'Lipid nanoparticles for drug delivery',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Mithila Akter',
    title: 'MSc Researcher',
    research: 'Antimicrobial nanomaterials',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=face',
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 hero-gradient">
        <div className="container-wide px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white/80 mb-4">
              Our Team
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Faculty & Researchers
            </h1>
            <p className="text-base sm:text-lg text-white/80">
              Meet the dedicated team of scientists and researchers driving innovation 
              at the Bio Nanotechnology Lab.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="Faculty"
            title="Principal Investigators"
            description="Our experienced faculty members leading research initiatives."
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {faculty.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="glass" className="overflow-hidden h-full">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-40 h-48 sm:h-auto flex-shrink-0">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 flex-1">
                        <h3 className="font-display text-xl font-bold">{member.name}</h3>
                        <p className="text-secondary font-medium text-sm">{member.title}</p>
                        <p className="text-muted-foreground text-sm mt-1">{member.department}</p>
                        
                        <div className="mt-4 space-y-2">
                          <div className="flex items-start gap-2 text-sm">
                            <GraduationCap className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{member.research}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                            <a 
                              href={`mailto:${member.email}`}
                              className="text-muted-foreground hover:text-secondary transition-colors"
                            >
                              {member.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Researchers Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <SectionHeading
            badge="Researchers"
            title="Research Team"
            description="Graduate students and research assistants contributing to our projects."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {researchers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="nano" className="overflow-hidden text-center h-full">
                  <CardContent className="p-0">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-lg font-bold">{member.name}</h3>
                      <p className="text-secondary text-sm font-medium">{member.title}</p>
                      <p className="text-muted-foreground text-sm mt-2">{member.research}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="section-padding">
        <div className="container-narrow">
          <Card variant="dark" className="p-8 md:p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Join Our Research Team
              </h2>
              <p className="text-primary-foreground/70 mb-6 max-w-xl mx-auto">
                We are always looking for talented and motivated individuals to join our lab. 
                Explore opportunities for thesis, internships, and research positions.
              </p>
              <a
                href="/opportunities"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-white font-medium hover:bg-secondary/90 transition-colors"
              >
                View Opportunities
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
