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
    title: 'Unraveling risk factors and transcriptomic signatures in liver cancer progression and mortality through machine learning and bioinformatics',
    authors: 'NBTC Research Team',
    journal: 'Briefings in Functional Genomics',
    year: 2026,
    type: 'Journal Article',
    doi: '10.1093/bfgp/elaf019',
    abstract: 'Liver cancer (LC) is a leading cause of cancer death, yet molecular mechanisms and risk factors remain poorly understood. This study developed an integrative multi-stage framework combining bioinformatics, machine learning-based feature selection, survival modeling, and network analysis to identify robust biomarkers and pathways involved in LC progression. Differential expression analysis using TCGA data identified prognostic genes and linked risk factor datasets with shared transcriptomic signatures. Network and pathway analyses revealed key oncogenic processes, and independent validation confirmed their significance. Overall, this work provides insights into LC progression and potential targets for clinical investigation.',
  },
  {
    title: 'MXene-enhanced perovskite solar cells: Unveiling the superior performance of Mo2TiC2 as an advanced electron transport layer',
    authors: 'NBTC Research Team',
    journal: 'Materials Science and Engineering: B',
    year: 2026,
    type: 'Journal Article',
    doi: '10.1016/j.mseb.2025.119077',
    abstract: 'Perovskite solar cells (PSCs) are an emerging thin-film photovoltaic technology with high performance. This study explores the use of Mo2TiC2-MXene as an electron transport layer (ETL) in perovskite solar cell structures simulated via SCAPS-1D. The effects of variations in layer thickness, defect density, donor/acceptor densities, and material parameters were systematically assessed. A structure incorporating Mo2TiC2-MXene ETL exhibited excellent electrical characteristics, including open-circuit voltage (Voc), short-circuit current density (Jsc), fill factor (FF), and power conversion efficiency (PCE). The results underscore the potential of Mo2TiC2-MXene to significantly enhance PSC performance and carrier transport, offering insights toward high-efficiency device design.',
  },
  {
    title: 'Identification of key candidate genes for ovarian cancer using integrated statistical and machine learning approaches',
    authors: 'NBTC Research Team',
    journal: 'Briefings in Bioinformatics',
    year: 2025,
    type: 'Journal Article',
    doi: '10.1093/bib/bbaf602',
    abstract: 'Ovarian cancer (OC) is a highly lethal malignancy worldwide, necessitating identification of key genes to improve diagnosis and treatment. Three microarray datasets were analyzed with normalization and differential gene expression analysis. Highly discriminative differentially expressed genes (HDDEGs) were identified using support vector machine-based methods, and enrichment analysis was conducted. Network and module analyses revealed 18 central hub genes, 11 hub module genes, and 54 meta-hub genes. Intersection analysis revealed eight shared key genes (FANCD2, BUB1B, BUB1, KIF4A, DTL, NCAPG, KIF20A, UBE2C). Weighted gene co-expression network analysis identified key modules linked to clinical traits, validating the predictive and prognostic significance of these key genes. This integrative approach identifies potential biomarkers and highlights clinical relevance for OC diagnosis and prognosis.',
  },
  {
    title: 'An empirical study for the early detection of Mpox from skin lesion images using pretrained CNN models leveraging XAI technique',
    authors: 'NBTC Research Team',
    journal: 'Healthcare Technology Letters',
    year: 2025,
    type: 'Journal (Accepted)',
    doi: '',
    abstract: 'This study investigates the early detection of Mpox from skin lesion images using pretrained convolutional neural networks combined with explainable AI (XAI) techniques. The proposed approach enhances diagnostic accuracy while improving model interpretability to support clinical decision-making.',
  },
  {
    title: 'A High-Performance End-to-End Pipeline for Multilingual License Plate Recognition and Vehicle Classification in Bangladesh',
    authors: 'NBTC Research Team',
    journal: 'International Conference on Intelligent Data-Driven Applications (IDDA)',
    year: 2025,
    type: 'Conference (Accepted)',
    doi: '',
    abstract: 'This paper presents an end-to-end deep learning pipeline for multilingual license plate recognition and vehicle classification tailored to the Bangladeshi context. The system integrates detection, character recognition across multiple scripts, and vehicle type classification to achieve high accuracy and real-time performance.',
  },
  {
    title: 'PlantLeafNet: A Comparative Study of Deep Learning Models for Money Plant Disease Classification',
    authors: 'NBTC Research Team',
    journal: 'International Conference on Intelligent Data-Driven Applications (IDDA)',
    year: 2025,
    type: 'Conference (Accepted)',
    doi: '',
    abstract: 'This study introduces PlantLeafNet, a deep learning-based framework for money plant disease classification. Multiple convolutional neural network architectures are comparatively analyzed to evaluate classification performance, robustness, and suitability for plant disease diagnosis.',
  },
  {
    title: 'High-Accuracy 3-Class Cerebral Stroke Detection Using ConvNeXt: An End-to-End Vision Pipeline',
    authors: 'NBTC Research Team',
    journal: 'International Conference on Intelligent Data-Driven Applications (IDDA)',
    year: 2025,
    type: 'Conference (Accepted)',
    doi: '',
    abstract: 'This paper proposes an end-to-end computer vision pipeline for three-class cerebral stroke detection using the ConvNeXt architecture. The model demonstrates high accuracy and robustness, highlighting the effectiveness of modern convolutional networks in medical image analysis.',
  },
 
];

const years = ['All', '2026', '2025', '2023', '2022', '2021', '2020'];
const types = ['All', 'Journal Article', 'Journal (Accepted)', 'Conference Paper', 'Conference (Accepted)', 'Review Article'];

export default function PublicationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [activeCategory, setActiveCategory] = useState<'journal' | 'conference'>('journal');

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
            <p className="text-justify text-[1.1rem] leading-[1.7] hyphens-auto text-white/80">
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

      {/* Category Tabs */}
      <section className="py-6 bg-background">
        <div className="container-wide">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setActiveCategory('journal')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === 'journal'
                  ? 'bg-secondary text-white shadow-lg shadow-secondary/25'
                  : 'bg-card border border-border text-muted-foreground hover:border-secondary/50 hover:text-secondary'
              }`}
            >
              <FileText className="w-5 h-5" />
              Journal Articles
            </button>
            <button
              onClick={() => setActiveCategory('conference')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === 'conference'
                  ? 'bg-accent text-white shadow-lg shadow-accent/25'
                  : 'bg-card border border-border text-muted-foreground hover:border-accent/50 hover:text-accent'
              }`}
            >
              <Calendar className="w-5 h-5" />
              Conference Papers
            </button>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="section-padding">
        <div className="container-wide">
          {/* Journal Articles Section */}
          {activeCategory === 'journal' && (
            <motion.div
              key="journal"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-8">
                <p className="text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">
                    {filteredPublications.filter(pub => pub.type === 'Journal Article' || pub.type === 'Review Article' || pub.type === 'Journal (Accepted)').length}
                  </span> journal articles
                </p>
              </div>

              {filteredPublications.filter(pub => pub.type === 'Journal Article' || pub.type === 'Review Article' || pub.type === 'Journal (Accepted)').length > 0 ? (
                <div className="space-y-4">
                  {filteredPublications
                    .filter(pub => pub.type === 'Journal Article' || pub.type === 'Review Article' || pub.type === 'Journal (Accepted)')
                    .map((pub, index) => (
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
              ) : (
                <div className="text-center py-16">
                  <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-2">No journal articles found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filters.</p>
                </div>
              )}
            </motion.div>
          )}

          {/* Conference Papers Section */}
          {activeCategory === 'conference' && (
            <motion.div
              key="conference"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-8">
                <p className="text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">
                    {filteredPublications.filter(pub => pub.type === 'Conference Paper' || pub.type === 'Conference (Accepted)').length}
                  </span> conference papers
                </p>
              </div>

              {filteredPublications.filter(pub => pub.type === 'Conference Paper' || pub.type === 'Conference (Accepted)').length > 0 ? (
                <div className="space-y-4">
                  {filteredPublications
                    .filter(pub => pub.type === 'Conference Paper' || pub.type === 'Conference (Accepted)')
                    .map((pub, index) => (
                      <motion.div
                        key={pub.doi}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                      >
                        <Card variant="elevated" className="hover:border-accent/30">
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row gap-4">
                              <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                  <Calendar className="w-6 h-6 text-accent" />
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
                                <h3 className="font-display text-lg font-semibold mb-1 hover:text-accent transition-colors cursor-pointer">
                                  {pub.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                                <p className="text-sm font-medium text-accent">{pub.journal}</p>
                                <p className="text-sm text-muted-foreground mt-3">{pub.abstract}</p>
                                <div className="mt-4 flex items-center gap-4">
                                  <a
                                    href={`https://doi.org/${pub.doi}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-accent hover:underline inline-flex items-center gap-1"
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
              ) : (
                <div className="text-center py-16">
                  <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-2">No conference papers found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filters.</p>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
