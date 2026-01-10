/**
 * Publications Page
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ExternalLink, FileText, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const publications = [
  {
    title: 'Gold Nanoparticle-Based Targeted Drug Delivery for Triple-Negative Breast Cancer',
    authors: 'Rahman M., Ahmed F., Hossain K.',
    journal: 'Journal of Nanomedicine',
    year: 2023,
    type: 'Journal Article',
    doi: '10.1234/jnm.2023.0001',
    abstract: 'Development of antibody-conjugated gold nanoparticles for targeted chemotherapy delivery in triple-negative breast cancer cells.',
  },
  {
    title: 'Electrochemical Biosensor for Rapid Detection of SARS-CoV-2',
    authors: 'Jahan N., Alam T., Rahman M.',
    journal: 'Biosensors and Bioelectronics',
    year: 2023,
    type: 'Journal Article',
    doi: '10.1234/bab.2023.0045',
    abstract: 'A novel electrochemical biosensor utilizing gold nanoparticle-modified electrodes for rapid and sensitive COVID-19 detection.',
  },
  {
    title: 'Green Synthesis of Silver Nanoparticles Using Plant Extracts',
    authors: 'Hossain K., Islam S., Ahmed F.',
    journal: 'Green Chemistry Letters',
    year: 2023,
    type: 'Journal Article',
    doi: '10.1234/gcl.2023.0089',
    abstract: 'Eco-friendly synthesis of silver nanoparticles using indigenous plant extracts with antimicrobial properties.',
  },
  {
    title: 'Smart Hydrogel Nanoparticles for Insulin Delivery',
    authors: 'Ahmed F., Uddin R., Rahman M.',
    journal: 'International Conference on Nanomedicine',
    year: 2023,
    type: 'Conference Paper',
    doi: '10.1234/icn.2023.0123',
    abstract: 'Development of glucose-responsive smart hydrogel nanoparticles for controlled insulin release.',
  },
  {
    title: 'Lipid Nanoparticles for mRNA Vaccine Delivery: A Review',
    authors: 'Rahman M., Jahan N.',
    journal: 'Advanced Drug Delivery Reviews',
    year: 2022,
    type: 'Review Article',
    doi: '10.1234/addr.2022.0056',
    abstract: 'Comprehensive review of lipid nanoparticle technology for mRNA vaccine delivery applications.',
  },
  {
    title: 'Carbon Nanotube-Based Scaffolds for Neural Tissue Engineering',
    authors: 'Alam T., Akter M., Hossain K.',
    journal: 'Biomaterials Science',
    year: 2022,
    type: 'Journal Article',
    doi: '10.1234/bs.2022.0078',
    abstract: 'Development of biocompatible carbon nanotube scaffolds for neural cell growth and regeneration.',
  },
  {
    title: 'Quantum Dots for Cancer Cell Imaging and Tracking',
    authors: 'Islam S., Ahmed F., Rahman M.',
    journal: 'ACS Nano',
    year: 2022,
    type: 'Journal Article',
    doi: '10.1234/an.2022.0034',
    abstract: 'Development of biocompatible quantum dots for real-time tracking of cancer cells in vivo.',
  },
  {
    title: 'Nanomedicine in Bangladesh: Current Status and Future Prospects',
    authors: 'Rahman M.',
    journal: 'Bangladesh Medical Research Council Bulletin',
    year: 2021,
    type: 'Review Article',
    doi: '10.1234/bmrcb.2021.0012',
    abstract: 'Overview of nanomedicine research and applications in Bangladesh healthcare context.',
  },
];

const years = ['All', '2023', '2022', '2021', '2020'];
const types = ['All', 'Journal Article', 'Conference Paper', 'Review Article'];

export default function PublicationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const filteredPublications = publications.filter((pub) => {
    const matchesSearch = 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesYear = selectedYear === 'All' || pub.year.toString() === selectedYear;
    const matchesType = selectedType === 'All' || pub.type === selectedType;
    
    return matchesSearch && matchesYear && matchesType;
  });

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
              Publications
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Research Publications
            </h1>
            <p className="text-base sm:text-lg text-white/80">
              Explore our peer-reviewed research publications in leading scientific journals 
              and international conferences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b bg-card/50 backdrop-blur-sm sticky top-16 md:top-20 z-30">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search publications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            {/* Year Filter */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2.5 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                {years.map((year) => (
                  <option key={year} value={year}>{year === 'All' ? 'All Years' : year}</option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2.5 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                {types.map((type) => (
                  <option key={type} value={type}>{type === 'All' ? 'All Types' : type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredPublications.length}</span> publications
            </p>
          </div>

          <div className="space-y-4">
            {filteredPublications.map((pub, index) => (
              <motion.div
                key={pub.doi}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card variant="elevated" className="hover:border-secondary/30">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                          <FileText className="w-6 h-6 text-secondary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className="px-2 py-0.5 rounded text-xs font-medium bg-secondary/10 text-secondary">
                            {pub.year}
                          </span>
                          <span className="px-2 py-0.5 rounded text-xs font-medium bg-accent/10 text-accent">
                            {pub.type}
                          </span>
                        </div>
                        <h3 className="font-display text-lg font-semibold mb-1 hover:text-secondary transition-colors cursor-pointer">
                          {pub.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                        <p className="text-sm font-medium text-secondary">{pub.journal}</p>
                        <p className="text-sm text-muted-foreground mt-3">{pub.abstract}</p>
                        <div className="mt-4 flex items-center gap-4">
                          <a
                            href={`https://doi.org/${pub.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-secondary hover:underline inline-flex items-center gap-1"
                          >
                            View Publication
                            <ExternalLink className="w-3 h-3" />
                          </a>
                          <span className="text-xs text-muted-foreground">DOI: {pub.doi}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <div className="text-center py-16">
              <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold mb-2">No publications found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
