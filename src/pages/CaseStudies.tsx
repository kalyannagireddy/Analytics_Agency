import { useState } from 'react';
import { ExternalLink, TrendingUp, Users, DollarSign, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'retail', label: 'Retail' },
    { id: 'finance', label: 'Finance' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'saas', label: 'SaaS' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'E-Commerce Revenue Optimization',
      client: 'RetailMax Inc.',
      category: 'retail',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      challenge: 'Declining conversion rates and unclear customer journey insights',
      solution: 'Built comprehensive customer analytics dashboard with predictive modeling',
      results: [
        { icon: TrendingUp, metric: '35%', description: 'Increase in conversion rate' },
        { icon: DollarSign, metric: '$2.1M', description: 'Additional annual revenue' },
        { icon: Users, metric: '28%', description: 'Improvement in customer retention' }
      ],
      technologies: ['Python', 'Tableau', 'Google Analytics', 'BigQuery'],
      duration: '3 months'
    },
    {
      id: 2,
      title: 'Real-Time Fraud Detection System',
      client: 'SecureBank',
      category: 'finance',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      challenge: 'High false positive rates in fraud detection causing customer friction',
      solution: 'Implemented ML-based real-time fraud detection with adaptive learning',
      results: [
        { icon: Zap, metric: '89%', description: 'Reduction in false positives' },
        { icon: DollarSign, metric: '$5.8M', description: 'Prevented fraudulent transactions' },
        { icon: TrendingUp, metric: '0.2s', description: 'Average detection time' }
      ],
      technologies: ['TensorFlow', 'Apache Kafka', 'Redis', 'PostgreSQL'],
      duration: '6 months'
    },
    {
      id: 3,
      title: 'Patient Care Analytics Platform',
      client: 'HealthFirst Medical',
      category: 'healthcare',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
      challenge: 'Inefficient patient care coordination and resource allocation',
      solution: 'Developed predictive analytics for patient outcomes and resource optimization',
      results: [
        { icon: Users, metric: '42%', description: 'Improvement in patient satisfaction' },
        { icon: TrendingUp, metric: '31%', description: 'Reduction in readmission rates' },
        { icon: DollarSign, metric: '$1.3M', description: 'Annual cost savings' }
      ],
      technologies: ['R', 'Power BI', 'Azure ML', 'FHIR API'],
      duration: '4 months'
    },
    {
      id: 4,
      title: 'SaaS Growth Analytics Dashboard',
      client: 'TechFlow Solutions',
      category: 'saas',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      challenge: 'Limited visibility into user behavior and churn patterns',
      solution: 'Built comprehensive growth analytics with cohort analysis and churn prediction',
      results: [
        { icon: TrendingUp, metric: '156%', description: 'Increase in user engagement' },
        { icon: Users, metric: '47%', description: 'Reduction in churn rate' },
        { icon: DollarSign, metric: '89%', description: 'Improvement in LTV/CAC ratio' }
      ],
      technologies: ['Mixpanel', 'Looker', 'Python', 'Segment'],
      duration: '2 months'
    }
  ];

  const filteredCaseStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-space mb-6">
            Success <span className="text-gradient">Stories</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real results from real clients. See how we've transformed businesses through data-driven insights.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-16 z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="transition-all duration-300"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredCaseStudies.map((study) => (
              <Card key={study.id} className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden">
                <CardContent className="p-0">
                  
                  {/* Image */}
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-8">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                          {categories.find(cat => cat.id === study.category)?.label}
                        </Badge>
                        <span className="text-sm text-gray-500">{study.duration}</span>
                      </div>
                      <h3 className="text-2xl font-bold font-space mb-2">{study.title}</h3>
                      <p className="text-blue-600 font-medium">{study.client}</p>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Results</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {study.results.map((result, index) => {
                          const IconComponent = result.icon;
                          return (
                            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                              <IconComponent className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                              <div className="text-2xl font-bold text-gray-900 mb-1">
                                {result.metric}
                              </div>
                              <div className="text-xs text-gray-600">
                                {result.description}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* View Details Button */}
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                    >
                      View Full Case Study
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            Ready to Create Your <span className="text-gradient">Success Story</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join our growing list of satisfied clients who have transformed their business with data analytics.
          </p>
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
          >
            Start Your Project
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;