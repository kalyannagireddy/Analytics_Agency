
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      company: 'TechStart Inc.',
      image: '👩‍💼',
      rating: 5,
      text: 'The team delivered an absolutely stunning website that exceeded all our expectations. The attention to detail and user experience is phenomenal.',
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'Innovation Labs',
      image: '👨‍💻',
      rating: 5,
      text: 'Working with this team was a game-changer for our business. The website loads incredibly fast and looks beautiful on every device.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'Creative Agency',
      image: '👩‍🎨',
      rating: 5,
      text: 'Our conversion rates improved by 150% after launching the new website. The design is both beautiful and highly functional.',
    },
    {
      name: 'David Park',
      role: 'Founder',
      company: 'StartupX',
      image: '👨‍🚀',
      rating: 5,
      text: 'The professionalism and expertise shown throughout the project was outstanding. They truly understand modern web development.',
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what some of our amazing clients 
            have to say about their experience working with us.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                
                {/* Quote Icon */}
                <div className="absolute top-8 left-8 text-purple-200">
                  <Quote className="w-16 h-16" />
                </div>

                <div className="p-12 pt-20 text-center">
                  
                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-2xl md:text-3xl font-medium text-gray-700 mb-8 leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-4xl">
                      {testimonials[currentTestimonial].image}
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-lg text-gray-900">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-600">
                        {testimonials[currentTestimonial].role}
                      </div>
                      <div className="text-purple-600 font-medium">
                        {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 bg-white shadow-lg hover:shadow-xl transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 bg-white shadow-lg hover:shadow-xl transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-purple-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
