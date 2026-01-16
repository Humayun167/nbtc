/**
 * Team Page
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, GraduationCap, Award, Users, UserCheck, History } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

// Advisor Panel
const advisors = [
  {
    name: 'Prof. Dr. Abdul Karim',
    title: 'Chief Advisor',
    department: 'Vice Chancellor, DIU',
    expertise: 'Strategic Leadership, Academic Excellence',
    email: 'vc@diu.edu.bd',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Prof. Dr. Aminul Islam',
    title: 'Senior Advisor',
    department: 'Pro Vice Chancellor, DIU',
    expertise: 'Research Policy, Innovation Management',
    email: 'pvc@diu.edu.bd',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Prof. Dr. Shahnaz Parvin',
    title: 'Academic Advisor',
    department: 'Dean, Faculty of Science & Engineering',
    expertise: 'Nanotechnology, Materials Science',
    email: 's.parvin@diu.edu.bd',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face',
  },
];

// Faculty Committee
const facultyCommittee = [
  {
    name: 'Dr. Mohammad Rahman',
    title: 'Lab Director & Professor',
    role: 'Committee Chair',
    department: 'Department of Biomedical Engineering',
    research: 'Nanomedicine, Drug Delivery, Biosensors',
    email: 'm.rahman@diu.edu.bd',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Dr. Fatima Ahmed',
    title: 'Associate Professor',
    role: 'Vice Chair',
    department: 'Department of Pharmacy',
    research: 'Nanopharmaceuticals, Polymer Nanoparticles',
    email: 'f.ahmed@diu.edu.bd',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Dr. Kamal Hossain',
    title: 'Associate Professor',
    role: 'Research Coordinator',
    department: 'Department of Chemistry',
    research: 'Nanomaterial Synthesis, Green Chemistry',
    email: 'k.hossain@diu.edu.bd',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Dr. Nusrat Jahan',
    title: 'Assistant Professor',
    role: 'Secretary',
    department: 'Department of Biochemistry',
    research: 'Biosensors, Point-of-Care Diagnostics',
    email: 'n.jahan@diu.edu.bd',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
  },
];

// Student Committee
const studentCommittee = [
  {
    name: 'Tanvir Alam',
    title: 'PhD Researcher',
    role: 'President',
    research: 'Gold nanoparticles for cancer therapy',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Sadia Islam',
    title: 'PhD Researcher',
    role: 'Vice President',
    research: 'Electrochemical biosensors',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Rafiq Uddin',
    title: 'Research Assistant',
    role: 'General Secretary',
    research: 'Lipid nanoparticles for drug delivery',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Mithila Akter',
    title: 'MSc Researcher',
    role: 'Treasurer',
    research: 'Antimicrobial nanomaterials',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Arif Hasan',
    title: 'MSc Researcher',
    role: 'Event Coordinator',
    research: 'Quantum dots for imaging',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Nafisa Rahman',
    title: 'BSc Researcher',
    role: 'Communication Lead',
    research: 'Nanoparticle characterization',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
  },
];

// Ex-Committee Members
const exCommitteeMembers = [
  {
    name: 'Dr. Shahid Malik',
    title: 'Former Lab Director',
    tenure: '2018 - 2022',
    currentPosition: 'Professor, University of Dhaka',
    achievement: 'Established the NBTC foundation',
    image: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Dr. Hasina Begum',
    title: 'Former Research Head',
    tenure: '2019 - 2023',
    currentPosition: 'Senior Scientist, BCSIR',
    achievement: 'Led 15+ funded research projects',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Imran Ahmed',
    title: 'Former Student President',
    tenure: '2021 - 2023',
    currentPosition: 'PhD Candidate, MIT',
    achievement: 'Founded student research symposium',
    image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Farzana Khatun',
    title: 'Former Vice President',
    tenure: '2020 - 2022',
    currentPosition: 'Research Fellow, NUS Singapore',
    achievement: 'Initiated international collaborations',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face',
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
            <p className="text-justify text-[1.1rem] leading-[1.7] hyphens-auto text-white/80">
              Meet the dedicated team of scientists and researchers driving innovation 
              at the Nano BioTechnology Center.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Advisor Panel Section */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="Leadership"
            title="Advisor Panel"
            description="Distinguished leaders providing strategic guidance and vision for our center."
            icon={<Award className="w-5 h-5" />}
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="glass" className="overflow-hidden h-full text-center">
                  <CardContent className="p-0">
                    <div className="h-56 overflow-hidden">
                      <img
                        src={advisor.image}
                        alt={advisor.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold">{advisor.name}</h3>
                      <p className="text-secondary font-medium text-sm">{advisor.title}</p>
                      <p className="text-muted-foreground text-sm mt-1">{advisor.department}</p>
                      
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center justify-center gap-2 text-sm">
                          <GraduationCap className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-muted-foreground">{advisor.expertise}</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-sm">
                          <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                          <a 
                            href={`mailto:${advisor.email}`}
                            className="text-muted-foreground hover:text-secondary transition-colors"
                          >
                            {advisor.email}
                          </a>
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

      {/* Faculty Committee Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <SectionHeading
            badge="Faculty"
            title="Faculty Committee"
            description="Our experienced faculty members leading research initiatives and academic programs."
            icon={<UserCheck className="w-5 h-5" />}
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {facultyCommittee.map((member, index) => (
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
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-display text-xl font-bold">{member.name}</h3>
                            <p className="text-secondary font-medium text-sm">{member.title}</p>
                          </div>
                          <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full">
                            {member.role}
                          </span>
                        </div>
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

      {/* Student Committee Section */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="Students"
            title="Student Committee"
            description="Graduate students and research assistants actively contributing to our projects and community."
            icon={<Users className="w-5 h-5" />}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {studentCommittee.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="nano" className="overflow-hidden text-center h-full">
                  <CardContent className="p-0">
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <span className="absolute top-3 right-3 px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                        {member.role}
                      </span>
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

      {/* Ex-Committee Members Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <SectionHeading
            badge="Alumni"
            title="Ex-Committee Members"
            description="Former members who have contributed significantly to our center's growth and success."
            icon={<History className="w-5 h-5" />}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {exCommitteeMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="glass" className="overflow-hidden h-full">
                  <CardContent className="p-0">
                    <div className="h-40 overflow-hidden grayscale hover:grayscale-0 transition-all duration-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg font-bold">{member.name}</h3>
                      <p className="text-secondary text-sm font-medium">{member.title}</p>
                      <p className="text-muted-foreground text-xs mt-1">{member.tenure}</p>
                      
                      <div className="mt-3 pt-3 border-t border-border">
                        <p className="text-xs text-muted-foreground">
                          <span className="font-medium">Now:</span> {member.currentPosition}
                        </p>
                        <p className="text-xs text-accent mt-1">
                          ★ {member.achievement}
                        </p>
                      </div>
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
              <p className="text-justify text-[1.1rem] leading-[1.7] hyphens-auto text-primary-foreground/70 mb-6 max-w-xl mx-auto">
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
