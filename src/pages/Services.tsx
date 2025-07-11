import { useState } from 'react';
import { BarChart3, Database, Brain, TrendingUp, PieChart, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: BarChart3,
      title: 'Business Intelligence Dashboards',
      description: 'Custom interactive dashboards that provide real-time insights into your business performance, KPIs, and metrics.',
      features: ['Real-time data visualization', 'Custom KPI tracking', 'Interactive reports', 'Mobile-responsive design'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Data Warehouse Setup',
      description: 'Design and implement scalable data warehouses that consolidate your data from multiple sources.',
      features: ['Multi-source data integration', 'ETL pipeline development', 'Data quality management', 'Scalable architecture'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Brain,
      title: 'Machine Learning & AI',
      description: 'Build predictive models and AI solutions that automate decisions and forecast business outcomes.',
      features: ['Predictive analytics', 'Customer behavior modeling', 'Automated insights', 'Custom AI solutions'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Deep statistical analysis and modeling to uncover patterns and trends in your business data.',
      features: ['Statistical modeling', 'Trend analysis', 'Customer segmentation', 'Performance optimization'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Transform complex data into clear, compelling visual stories that drive decision-making.',
      features: ['Interactive charts', 'Executive reporting', 'Data storytelling', 'Custom visualizations'],
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: Zap,
      title: 'Data Strategy Consulting',
      description: 'Comprehensive data strategy development to align your analytics initiatives with business goals.',
      features: ['Data strategy roadmap', 'Technology assessment', 'Process optimization', 'Training & support'],
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const scrollToContact = () => {
    // Navigate to home page contact section
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-space mb-6">
            Our <span className="text-gradient">Analytics Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From basic reporting to advanced AI solutions, we provide comprehensive data analytics services 
            that transform your business intelligence capabilities.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl border-0 h-full ${
                    hoveredCard === index ? 'scale-105' : 'hover:scale-105'
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardContent className="p-8 h-full flex flex-col">
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${service.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold font-space mb-4 text-center group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6 text-center flex-grow">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Hover Effect Line */}
                    <div className={`w-0 h-1 bg-gradient-to-r ${service.color} mx-auto group-hover:w-full transition-all duration-500`}></div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful data analytics implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We analyze your business needs and data landscape' },
              { step: '02', title: 'Strategy', description: 'Design a comprehensive analytics roadmap' },
              { step: '03', title: 'Implementation', description: 'Build and deploy your analytics solutions' },
              { step: '04', title: 'Optimization', description: 'Continuous improvement and support' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                <h3 className="text-xl font-bold font-space mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            Ready to Transform Your <span className="text-gradient">Data Strategy</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Let's discuss how our analytics services can drive your business forward.
          </p>
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
          >
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;