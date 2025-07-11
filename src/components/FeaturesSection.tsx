
import { useState } from 'react';
import { Smartphone, Zap, Shield, Palette, Code, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: Smartphone,
      title: 'Fully Responsive',
      description: 'Your website looks perfect on every device, from mobile phones to desktop computers.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed with modern web technologies and best practices.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Built with security in mind, ensuring your website and data are protected.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Palette,
      title: 'Beautiful Design',
      description: 'Modern, clean designs that engage your visitors and reflect your brand.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Well-structured, maintainable code following industry best practices.',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: Rocket,
      title: 'SEO Optimized',
      description: 'Built-in SEO optimization to help your website rank higher in search results.',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            Why Choose <span className="text-gradient">Our Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge technology with beautiful design to create 
            web experiences that not only look amazing but perform exceptionally.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl border-0 ${
                  hoveredCard === index ? 'scale-105' : 'hover:scale-105'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <CardContent className="p-8 text-center h-full flex flex-col">
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold font-space mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {feature.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className={`w-0 h-1 bg-gradient-to-r ${feature.color} mx-auto mt-6 group-hover:w-full transition-all duration-500`}></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your web presence?
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Let's Build Something Amazing
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
