
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import TestimonialCard from '@/components/TestimonialCard';
import { ChevronRight } from 'lucide-react';

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="orbit-section">
      <div className="orbit-container">
        <SectionHeading 
          title="Trusted by Shopify Store Owners"
          subtitle="See how Orbit's voice AI is helping ecommerce businesses scale their customer support without increasing headcount."
          centered
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="Orbit's voice AI handled 70% of our Black Friday support calls automatically. Customers got instant answers while my team focused on complex issues."
            author="Sarah Johnson"
            role="CEO"
            company="Fashion Outlet (Shopify Plus)"
            delay={100}
          />
          <TestimonialCard 
            quote="We're a small Shopify store that can now offer 24/7 phone support without hiring night staff. Our customers love getting instant answers at any hour."
            author="Michael Chen"
            role="Operations Director"
            company="Home Goods Co."
            delay={200}
          />
          <TestimonialCard 
            quote="The Shopify integration was seamless. Within a day, Orbit's voice AI knew all our products, shipping policies, and could answer complex customer questions."
            author="Jessica Williams"
            role="Customer Service Manager"
            company="Beauty Essentials"
            delay={300}
          />
        </div>
        
        <div className="mt-16 text-center opacity-0 reveal-on-scroll">
          <a href="#case-studies" className="inline-flex items-center text-orbit-purple font-medium hover:text-orbit-darkPurple transition-colors">
            Read Shopify success stories
            <ChevronRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
