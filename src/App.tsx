/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Instagram,
  Linkedin,
  Mail,
  MessageSquare,
  PlayCircle,
  TrendingUp,
  Users,
  Video,
  Zap,
} from 'lucide-react';
import React, { useState } from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-brand-black/80 backdrop-blur-md border-b border-white/10">
      <div className="font-serif text-2xl font-bold tracking-tight text-white">
        Celuxe<span className="text-brand-gold">.</span>
      </div>
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-widest uppercase text-white/70">
        <a href="#about" className="hover:text-brand-gold transition-colors">About</a>
        <a href="#services" className="hover:text-brand-gold transition-colors">Services</a>
        <a href="#brands" className="hover:text-brand-gold transition-colors">Brands</a>
        <a href="#creators" className="hover:text-brand-gold transition-colors">Creators</a>
      </div>
      <a
        href="#contact"
        className="px-5 py-2 text-xs font-bold tracking-widest uppercase border border-brand-gold text-brand-gold rounded-full hover:bg-brand-gold hover:text-brand-black transition-colors"
      >
        Contact Us
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/5 to-transparent pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-5xl"
      >
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.9] tracking-tight mb-8 text-balance">
          Scale Your Brand with <br />
          <span className="text-brand-gold italic">Powerful Influencer</span> Marketing
        </h1>
        
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light text-balance tracking-wide">
          Celuxe Media connects brands with high-performing creators to drive real engagement, build trust, and deliver measurable growth through strategic digital campaigns.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#brands"
            className="w-full sm:w-auto px-8 py-4 bg-brand-light text-brand-black font-semibold rounded-full hover:bg-white transition-colors flex items-center justify-center group"
          >
            I'm a Brand
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#creators"
            className="w-full sm:w-auto px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-colors flex items-center justify-center"
          >
            I'm a Creator
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6 bg-brand-gray border-y border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-brand-gold font-mono text-sm tracking-widest uppercase mb-4">About Celuxe Media</div>
          <h2 className="font-serif text-4xl md:text-5xl border-l-2 border-brand-gold pl-6 py-2 mb-8 leading-tight">
            We don't just run campaigns—<br />
            <span className="italic text-white/50">we build growth systems.</span>
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-white/70 font-light leading-relaxed text-lg"
        >
          <p>
            Celuxe Media is a modern influencer marketing agency focused on helping brands grow through data-driven creator collaborations. We specialize in building strong connections between brands and digital creators across platforms like YouTube and Instagram, ensuring that every campaign reaches the right audience at the right time.
          </p>
          <p>
            In today's fast-moving digital world, traditional marketing is no longer enough. Audiences trust creators more than ads. That's where we come in. At Celuxe Media, we identify the right influencers, craft the right message, and execute campaigns that generate real impact.
          </p>
          <p>
            Our mission is simple — to help brands scale and creators monetize their influence effectively. Whether you're a startup looking for visibility or an established brand aiming for dominance, we provide customized solutions tailored to your goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const reasons = [
    "Access to a growing network of targeted creators",
    "Strong focus on tech and digital niches",
    "ROI-driven campaign strategies",
    "End-to-end campaign management",
    "Personalized brand-creator matchmaking",
    "Fast execution and performance tracking"
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl mb-6">Why Choose Us</h2>
        <div className="w-12 h-px bg-brand-gold mx-auto" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-start space-x-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-gold/30 transition-colors"
          >
            <CheckCircle2 className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
            <p className="text-lg text-white/80 font-light">{reason}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: <Users className="w-8 h-8 mb-6 text-brand-gold" />,
      title: "Influencer Marketing Campaigns",
      desc: "We design and execute full-scale influencer campaigns tailored to your brand goals. From creator selection to final delivery, we manage everything."
    },
    {
      icon: <PlayCircle className="w-8 h-8 mb-6 text-brand-gold" />,
      title: "YouTube Promotions",
      desc: "Leverage long-form content and high-trust audiences to create deep brand impact through YouTube integrations and dedicated videos."
    },
    {
      icon: <Video className="w-8 h-8 mb-6 text-brand-gold" />,
      title: "Instagram Campaigns",
      desc: "Boost your brand visibility with reels, stories, and posts from high-engagement creators."
    },
    {
      icon: <Zap className="w-8 h-8 mb-6 text-brand-gold" />,
      title: "Product Launch Campaigns",
      desc: "Launch your product with maximum impact by collaborating with creators who can generate hype and awareness instantly."
    },
    {
      icon: <TrendingUp className="w-8 h-8 mb-6 text-brand-gold" />,
      title: "Brand Awareness",
      desc: "Increase your reach and visibility across digital platforms with targeted influencer strategies."
    },
    {
      icon: <MessageSquare className="w-8 h-8 mb-6 text-brand-gold" />,
      title: "Audience Engagement",
      desc: "Drive meaningful interactions, not just views. We focus on engagement that converts into loyal customers."
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-brand-gray border-y border-white/5 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Our Services</h2>
        <p className="text-white/60 max-w-2xl mx-auto mb-16 font-light">Comprehensive solutions tailored to elevate your brand.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-brand-black p-10 rounded-2xl border border-white/5 text-left hover:-translate-y-1 transition-transform">
              {service.icon}
              <h3 className="text-xl font-medium mb-3">{service.title}</h3>
              <p className="text-white/60 font-light leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FormInput({ label, type = "text", placeholder, options }: any) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-xs font-bold tracking-widest uppercase text-white/50">{label}</label>
      {type === "textarea" ? (
        <textarea
          placeholder={placeholder}
          rows={4}
          className="bg-transparent border-b border-white/20 pb-2 focus:border-brand-gold outline-none transition-colors text-white placeholder:text-white/20 resize-none font-light"
        />
      ) : type === "select" ? (
        <select className="bg-transparent border-b border-white/20 pb-2 focus:border-brand-gold outline-none transition-colors text-white font-light appearance-none">
          <option value="" disabled selected className="text-brand-black">{placeholder}</option>
          {options?.map((opt: string) => (
             <option key={opt} value={opt} className="text-brand-black">{opt}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="bg-transparent border-b border-white/20 pb-2 focus:border-brand-gold outline-none transition-colors text-white placeholder:text-white/20 font-light"
        />
      )}
    </div>
  );
}

function ForBrands() {
  return (
    <section id="brands" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <div className="text-brand-gold font-mono text-sm tracking-widest uppercase mb-4">For Brands</div>
          <h2 className="font-serif text-5xl mb-6">Grow Faster with Influencer Marketing</h2>
          <div className="space-y-6 text-white/70 font-light text-lg">
            <p>
              If you’re a brand looking to scale, influencer marketing is your most powerful tool. At Celuxe Media, we help you reach highly targeted audiences through trusted creators.
            </p>
            <p>
              We understand that every brand is different. That’s why we create customized campaigns based on your niche, audience, and business goals.
            </p>
            <p>
              From planning to execution, we handle everything — so you can focus on your business.
            </p>
          </div>
        </div>

        <div className="bg-brand-gray p-8 md:p-12 rounded-3xl border border-white/10">
          <h3 className="font-serif text-3xl mb-8">Start Your Campaign Today</h3>
          <form className="space-y-6" onSubmit={e => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-6">
              <FormInput label="Full Name" placeholder="John Doe" />
              <FormInput label="Company Name" placeholder="Acme Inc." />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <FormInput label="Email Address" type="email" placeholder="john@company.com" />
              <FormInput label="Phone Number" type="tel" placeholder="+1 (555) 000-0000" />
            </div>
            <FormInput label="Brand Category" placeholder="Tech, Lifestyle, Gaming, etc." />
            <div className="grid sm:grid-cols-2 gap-6">
              <FormInput label="Campaign Budget" placeholder="e.g. $5k - $10k" />
              <FormInput label="Campaign Goal" type="select" placeholder="Select Goal" options={["Sales", "Awareness", "Traffic", "Other"]} />
            </div>
            <FormInput label="Target Audience Description" placeholder="Who are you trying to reach?" />
            <FormInput label="Campaign Duration" placeholder="e.g. 1 Month" />
            <FormInput label="Message / Requirements" type="textarea" placeholder="Tell us more about what you need..." />
            
            <button className="w-full py-4 bg-brand-gold text-brand-black font-bold uppercase tracking-widest text-sm rounded-full mt-4 hover:bg-white transition-colors">
              Submit & Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ForCreators() {
  return (
    <section id="creators" className="py-24 px-6 bg-brand-gray border-y border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        
        {/* Mobile order reverse, so form is below text */}
        <div className="order-2 lg:order-1 bg-brand-black p-8 md:p-12 rounded-3xl border border-white/10">
          <h3 className="font-serif text-3xl mb-8">Become a Partner Creator</h3>
          <form className="space-y-6" onSubmit={e => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-6">
              <FormInput label="Full Name" placeholder="Jane Doe" />
              <FormInput label="Email Address" type="email" placeholder="jane@example.com" />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <FormInput label="Phone Number" type="tel" placeholder="+1 (555) 000-0000" />
              <FormInput label="Channel/Page Name" placeholder="@TechWithJane" />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <FormInput label="Platform" type="select" placeholder="Select Platform" options={["YouTube", "Instagram", "Both", "Other"]} />
              <FormInput label="Niche" placeholder="Tech, Lifestyle, etc (Tech preferred)" />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <FormInput label="Subscribers / Followers" placeholder="e.g. 50k" />
              <FormInput label="Avg Views / Engagement" placeholder="e.g. 10k views / 5%" />
            </div>
            <FormInput label="Previous Brand Collaborations" placeholder="Optional" />
            <FormInput label="Portfolio / Profile Links" type="textarea" placeholder="Paste your links here..." />
            
            <button className="w-full py-4 bg-white text-brand-black font-bold uppercase tracking-widest text-sm rounded-full mt-4 hover:bg-brand-gold transition-colors">
              Join Now
            </button>
          </form>
        </div>

        <div className="order-1 lg:order-2">
          <div className="text-white/50 font-mono text-sm tracking-widest uppercase mb-4">For Creators</div>
          <h2 className="font-serif text-5xl mb-6">Join Our Creator Network</h2>
          <div className="space-y-6 text-white/70 font-light text-lg">
            <p>
              Are you a content creator looking to collaborate with brands and earn from your influence? Celuxe Media gives you access to exciting brand deals and long-term partnerships.
            </p>
            <p>
              We work with creators in the tech and digital niche who are passionate about content and growth. Whether you’re just starting or already established, we help you monetize your audience.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

function CreatorShowcase() {
  const categories = [
    "Tech Review Channels",
    "Gadget Influencers",
    "Lifestyle Creators",
    "Short-form Content Experts"
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-center">
      <h2 className="font-serif text-4xl md:text-5xl mb-6">Creator Showcase</h2>
      <p className="text-white/60 max-w-2xl mx-auto mb-16 font-light">
        We collaborate with creators across different audience sizes — from micro influencers to large-scale content creators. Each creator is selected based on quality, engagement, and niche relevance.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat, idx) => (
          <div key={idx} className="px-6 py-3 rounded-full border border-white/20 text-white/80 text-sm font-medium tracking-wide">
            {cat}
          </div>
        ))}
      </div>
      
      <p className="text-brand-gold italic font-serif text-xl">"Our network is growing every day."</p>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      quote: "Celuxe Media helped us reach the right audience and significantly boosted our product visibility.",
      author: "Brand Partner"
    },
    {
      quote: "Great experience working with Celuxe Media. Smooth process and quality collaborations.",
      author: "Creator"
    },
    {
      quote: "Highly professional team with strong creator connections.",
      author: "Client"
    }
  ];

  return (
    <section className="py-24 px-6 bg-brand-light text-brand-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {reviews.map((r, i) => (
            <div key={i} className="flex flex-col">
              <div className="text-brand-gold text-4xl font-serif mb-4">"</div>
              <p className="text-lg font-medium leading-relaxed mb-6 flex-grow">
                {r.quote}
              </p>
              <div className="text-sm font-bold tracking-widest uppercase pt-6 border-t border-brand-black/10">
                — {r.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "What is influencer marketing?", a: "Influencer marketing is a strategy where brands collaborate with creators to promote products or services to their audience." },
    { q: "What budget do I need?", a: "Budgets can vary depending on the campaign size and creators involved. We offer flexible options." },
    { q: "How do creators get paid?", a: "Creators are paid based on collaborations, campaign scope, and performance." },
    { q: "What platforms do you support?", a: "We mainly focus on YouTube and Instagram campaigns." },
    { q: "How long does a campaign take?", a: "Campaign timelines depend on your goals and scope, but we ensure fast and efficient execution." },
  ];

  return (
    <section className="py-24 px-6 max-w-3xl mx-auto">
      <h2 className="font-serif text-4xl mb-12 text-center">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <details key={i} className="group border-b border-white/10 pb-6 cursor-pointer">
            <summary className="flex justify-between items-center font-medium text-lg list-none">
              {faq.q}
              <ChevronDown className="w-5 h-5 text-white/50 group-open:rotate-180 transition-transform" />
            </summary>
            <p className="text-white/60 font-light mt-4 leading-relaxed pr-8">
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

function ContactAndFooter() {
  return (
    <div id="contact" className="bg-brand-gray border-t border-white/5">
      <section className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Let's Talk</h2>
          <p className="text-white/60 font-light text-lg mb-12 max-w-md">
            We’re always open to new collaborations and opportunities. Have a question or want to start a campaign? Reach out to us directly.
          </p>
          
          <div className="space-y-6 mb-12">
            <a href="mailto:agency@celuxemedia.online" className="flex items-center space-x-4 text-white/80 hover:text-brand-gold transition-colors">
              <Mail className="w-6 h-6" />
              <span className="font-medium tracking-wide">agency@celuxemedia.online</span>
            </a>
            <a href="https://wa.me/918420593981" target="_blank" rel="noreferrer" className="flex items-center space-x-4 text-white/80 hover:text-brand-gold transition-colors">
              <MessageSquare className="w-6 h-6" />
              <span className="font-medium tracking-wide">+91 8420593981 (WhatsApp)</span>
            </a>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-6">Social Media Presence</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/celuxemedia?igsh=MTAxdzE0Ymt4ZG10bg==" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:text-brand-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/celuxe-media-615a56405?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:text-brand-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-white/40 mt-4 text-sm font-light">Follow us to see real campaign results and creator partnerships.</p>
          </div>
        </div>

        <div className="bg-brand-black p-8 md:p-12 rounded-3xl border border-white/10">
          <form className="space-y-6" onSubmit={e => e.preventDefault()}>
            <FormInput label="Name" placeholder="Your Name" />
            <FormInput label="Email" type="email" placeholder="your@email.com" />
            <FormInput label="Message" type="textarea" placeholder="How can we help?" />
            <button className="w-full py-4 bg-brand-gold text-brand-black font-bold uppercase tracking-widest text-sm rounded-full mt-4 hover:bg-white transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="py-12 px-6 text-center border-t border-white/5 relative overflow-hidden">
        <div className="max-w-3xl mx-auto mb-12">
           <h3 className="font-serif text-2xl mb-4 italic text-white/80">
            Celuxe Media is more than just an agency — it’s a growth partner for brands and a monetization platform for creators.
           </h3>
           <p className="text-white/50 font-light max-w-2xl mx-auto">
            We combine strategy, creativity, and execution to deliver results that matter. Whether you’re a brand ready to scale or a creator ready to grow, Celuxe Media is your gateway to success in the influencer marketing world.
           </p>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/50">
          <div>Celuxe Media © All Rights Reserved</div>
          <div className="flex space-x-6 text-xs font-bold tracking-widest uppercase">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div>
             <a href="mailto:agency@celuxemedia.online" className="block hover:text-white transition-colors">agency@celuxemedia.online</a>
             <a href="https://wa.me/918420593981" target="_blank" rel="noreferrer" className="block hover:text-white transition-colors mt-1">WA: 8420593981</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-sans antialiased selection:bg-brand-gold selection:text-brand-black scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <ForBrands />
        <ForCreators />
        <CreatorShowcase />
        <Testimonials />
        <FAQ />
      </main>
      <ContactAndFooter />
    </div>
  );
}
