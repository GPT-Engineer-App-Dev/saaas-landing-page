import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Index = () => {
  return (
    <div className="space-y-16">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

const HeroSection = () => (
  <section className="text-center py-16 bg-gray-100">
    <h1 className="text-5xl font-bold mb-4">Welcome to SaaS Startup</h1>
    <p className="text-xl mb-8">Revolutionizing the way you manage your business.</p>
    <Button size="lg">Get Started</Button>
  </section>
);

const FeaturesSection = () => (
  <section id="features" className="py-16">
    <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Feature
        icon="🚀"
        title="Fast Performance"
        description="Experience blazing fast speeds with our optimized platform."
      />
      <Feature
        icon="🔒"
        title="Secure"
        description="Your data is safe with our top-notch security measures."
      />
      <Feature
        icon="📈"
        title="Analytics"
        description="Gain insights with our comprehensive analytics tools."
      />
    </div>
  </section>
);

const Feature = ({ icon, title, description }) => (
  <div className="text-center">
    <div className="text-6xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const TestimonialsSection = () => (
  <section id="testimonials" className="py-16 bg-gray-100">
    <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Testimonial
        photo="https://via.placeholder.com/150"
        name="John Doe"
        feedback="This product has changed my life for the better!"
      />
      <Testimonial
        photo="https://via.placeholder.com/150"
        name="Jane Smith"
        feedback="I can't imagine working without it now."
      />
      <Testimonial
        photo="https://via.placeholder.com/150"
        name="Sam Wilson"
        feedback="A must-have tool for any business."
      />
    </div>
  </section>
);

const Testimonial = ({ photo, name, feedback }) => (
  <Card>
    <CardHeader>
      <img src={photo} alt={name} className="w-16 h-16 rounded-full mx-auto mb-4" />
      <CardTitle>{name}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{feedback}</p>
    </CardContent>
  </Card>
);

const PricingSection = () => (
  <section id="pricing" className="py-16">
    <h2 className="text-4xl font-bold text-center mb-12">Pricing</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <PricingPlan
        title="Basic"
        price="$10/month"
        features={["Feature 1", "Feature 2", "Feature 3"]}
      />
      <PricingPlan
        title="Pro"
        price="$30/month"
        features={["Feature 1", "Feature 2", "Feature 3", "Feature 4"]}
      />
      <PricingPlan
        title="Enterprise"
        price="Contact us"
        features={["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"]}
      />
    </div>
  </section>
);

const PricingPlan = ({ title, price, features }) => (
  <Card>
    <CardHeader>
      <CardTitle className="text-center">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-center">
      <p className="text-2xl font-bold mb-4">{price}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const Footer = () => (
  <footer className="py-8 bg-gray-800 text-white text-center">
    <p>&copy; 2023 SaaS Startup. All rights reserved.</p>
    <div className="flex justify-center space-x-4 mt-4">
      <a href="#" className="hover:underline">Facebook</a>
      <a href="#" className="hover:underline">Twitter</a>
      <a href="#" className="hover:underline">LinkedIn</a>
    </div>
  </footer>
);

export default Index;