import React, { useState, useEffect } from 'react';
import { siteContent } from '../data/mockContent';
import { MessageCircle, Phone, Instagram, Facebook, Mail, MapPin, X, Menu, Star, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-page)' }}>
      {/* Header Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-md' : 'bg-transparent'
        }`}
        style={{ backdropFilter: isScrolled ? 'blur(12px)' : 'none' }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="font-serif text-2xl md:text-3xl font-bold" style={{ color: 'var(--brand-maroon)' }}>
              Jass Food
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-[#8B3A3A] transition-colors">About</button>
              <button onClick={() => scrollToSection('products')} className="text-sm font-medium hover:text-[#8B3A3A] transition-colors">Products</button>
              <button onClick={() => scrollToSection('occasions')} className="text-sm font-medium hover:text-[#8B3A3A] transition-colors">Occasions</button>
              <button onClick={() => scrollToSection('gallery')} className="text-sm font-medium hover:text-[#8B3A3A] transition-colors">Gallery</button>
              <a 
                href={siteContent.contact.whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary-luxury"
              >
                <MessageCircle size={18} />
                Order Now
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('about')} className="text-left font-medium">About</button>
              <button onClick={() => scrollToSection('products')} className="text-left font-medium">Products</button>
              <button onClick={() => scrollToSection('occasions')} className="text-left font-medium">Occasions</button>
              <button onClick={() => scrollToSection('gallery')} className="text-left font-medium">Gallery</button>
              <a 
                href={siteContent.contact.whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary-luxury justify-center"
              >
                <MessageCircle size={18} />
                Order Now
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center text-center px-6 pt-24 pb-16"
        style={{
          background: `linear-gradient(rgba(139, 58, 58, 0.75), rgba(139, 58, 58, 0.85)), url(${siteContent.hero.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Announcement Badge */}
          <div 
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-8"
            style={{ 
              background: 'rgba(255, 255, 255, 0.2)', 
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}
          >
            <span className="text-white text-sm font-medium uppercase tracking-wider">
              {siteContent.hero.announcement}
            </span>
          </div>

          {/* Hero Headline */}
          <h1 className="heading-hero text-white mb-6">
            {siteContent.hero.headline}
          </h1>

          {/* Hero Subheadline */}
          <p className="body-large text-white/90 mb-10 max-w-2xl mx-auto">
            {siteContent.hero.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={siteContent.contact.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary-luxury bg-white text-[#8B3A3A] hover:bg-[#FFF8F0]"
            >
              <MessageCircle size={20} />
              {siteContent.hero.ctaText}
            </a>
            <button 
              onClick={() => scrollToSection('products')}
              className="btn-secondary-luxury border-white text-white hover:bg-white hover:text-[#8B3A3A]"
            >
              Explore Delicacies
            </button>
          </div>

          {/* Service Areas */}
          <p className="mt-8 text-white/80 text-sm">
            Serving {siteContent.contact.serviceAreas}
          </p>
        </div>

        {/* Decorative Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FFF9F2] to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={siteContent.about.image} 
                  alt="Traditional cooking" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              {/* Decorative Element */}
              <div 
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full -z-10"
                style={{ background: 'var(--brand-beige)' }}
              ></div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-block px-4 py-1 rounded-full mb-4" style={{ background: 'var(--brand-beige)', color: 'var(--brand-maroon)' }}>
                <span className="text-sm font-semibold uppercase tracking-wider">Our Story</span>
              </div>
              
              <h2 className="heading-2 mb-6">{siteContent.about.title}</h2>
              
              {siteContent.about.story.map((paragraph, index) => (
                <p key={index} className="body-medium mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {paragraph}
                </p>
              ))}

              <div className="mt-8 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'var(--brand-maroon)' }}>
                  <span className="text-white font-serif text-xl font-bold">S</span>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>{siteContent.about.founderName}</p>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Founder & Master Chef</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6" style={{ background: 'var(--bg-section)' }}>
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full mb-4" style={{ background: 'var(--brand-maroon)', color: 'white' }}>
              <span className="text-sm font-semibold uppercase tracking-wider">Signature Delicacies</span>
            </div>
            <h2 className="heading-1 mb-4">Authentic Konkan Treasures</h2>
            <p className="body-large max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Handcrafted with love using traditional recipes passed down through generations
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteContent.products.map((product) => (
              <Card key={product.id} className="card-luxury overflow-hidden group cursor-pointer">
                {/* Product Image */}
                <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.popular && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#D4AF37] text-white text-xs font-bold uppercase">
                      Popular
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <h3 className="heading-3 mb-3">{product.name}</h3>
                <p className="body-medium mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ background: 'var(--brand-beige)', color: 'var(--text-primary)' }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Order Button */}
                <a 
                  href={`${siteContent.contact.whatsappLink}?text=Hi, I'd like to order ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#8B3A3A] font-semibold hover:gap-3 transition-all"
                >
                  Order on WhatsApp <ChevronRight size={18} />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Occasions Section */}
      <section id="occasions" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full mb-4" style={{ background: 'var(--brand-beige)', color: 'var(--brand-maroon)' }}>
              <span className="text-sm font-semibold uppercase tracking-wider">Special Occasions</span>
            </div>
            <h2 className="heading-1 mb-4">Celebrate with Tradition</h2>
            <p className="body-large max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Bulk orders and custom arrangements for your special moments
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {siteContent.occasions.map((occasion, idx) => {
              const IconComponent = {
                Moon: () => <span className="text-3xl">🌙</span>,
                Sparkles: () => <span className="text-3xl">✨</span>,
                Heart: () => <span className="text-3xl">💝</span>,
                Gift: () => <span className="text-3xl">🎁</span>
              }[occasion.icon];

              return (
                <Card key={idx} className="card-luxury flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--brand-beige)' }}>
                    <IconComponent />
                  </div>
                  <div>
                    <h3 className="heading-3 mb-2">{occasion.title}</h3>
                    <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                      {occasion.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Pre-booking CTA */}
          <div className="mt-12 text-center">
            <a 
              href={`${siteContent.contact.whatsappLink}?text=Hi, I'd like to pre-book for an upcoming occasion`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-luxury"
            >
              <MessageCircle size={20} />
              Book Your Occasion
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6" style={{ background: 'var(--bg-section)' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-4">Why Choose Jass Food?</h2>
            <p className="body-large max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Authentic, traditional, and crafted with love—every single time
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteContent.whyChooseUs.map((reason, idx) => {
              const IconComponent = {
                Home: () => <span className="text-3xl">🏠</span>,
                Clock: () => <span className="text-3xl">⏰</span>,
                Sparkles: () => <span className="text-3xl">✨</span>,
                Award: () => <span className="text-3xl">🏆</span>,
                Users: () => <span className="text-3xl">👥</span>,
                Heart: () => <span className="text-3xl">❤️</span>
              }[reason.icon];

              return (
                <div key={idx} className="text-center p-6">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'var(--brand-beige)' }}>
                    <IconComponent />
                  </div>
                  <h3 className="heading-3 mb-2">{reason.title}</h3>
                  <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full mb-4" style={{ background: 'var(--brand-maroon)', color: 'white' }}>
              <span className="text-sm font-semibold uppercase tracking-wider">Testimonials</span>
            </div>
            <h2 className="heading-1 mb-4">Loved by Our Community</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {siteContent.testimonials.map((testimonial, idx) => (
              <Card key={idx} className="card-luxury">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#D4AF37" color="#D4AF37" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="body-medium mb-6 italic" style={{ color: 'var(--text-secondary)' }}>
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--border-light)' }}>
                  <div>
                    <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>{testimonial.name}</p>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{testimonial.location}</p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full" style={{ background: 'var(--brand-beige)', color: 'var(--text-primary)' }}>
                    {testimonial.occasion}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6" style={{ background: 'var(--bg-section)' }}>
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-4">Our Creations</h2>
            <p className="body-large max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              A glimpse into our handcrafted delicacies
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteContent.gallery.map((item) => (
              <div key={item.id} className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={item.image} 
                  alt={item.caption} 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="font-semibold text-lg mb-1">{item.caption}</p>
                    <p className="text-sm text-white/80">{item.occasion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #8B3A3A 0%, #6D2E2E 100%)' }}>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="heading-1 text-white mb-4">{siteContent.cta.headline}</h2>
          <p className="body-large text-white/90 mb-6">{siteContent.cta.subheadline}</p>
          <p className="text-white/80 mb-8 font-medium">{siteContent.cta.urgencyText}</p>
          
          <a 
            href={siteContent.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-luxury bg-white text-[#8B3A3A] hover:bg-[#FFF8F0] text-lg px-8 py-4"
          >
            <MessageCircle size={22} />
            {siteContent.cta.ctaText}
          </a>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2"></div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-[#232323] text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="font-serif text-3xl font-bold mb-4" style={{ color: 'var(--brand-gold)' }}>
                Jass Food & Kokani Delicacies
              </h3>
              <p className="text-white/70 mb-6">
                Authentic Konkani Muslim sweets crafted with love and tradition, serving Mumbai, Thane & Navi Mumbai.
              </p>
              <div className="flex gap-4">
                <a 
                  href={siteContent.contact.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href={siteContent.contact.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href={siteContent.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/70">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('products')} className="hover:text-white transition-colors">Our Products</button></li>
                <li><button onClick={() => scrollToSection('occasions')} className="hover:text-white transition-colors">Special Occasions</button></li>
                <li><button onClick={() => scrollToSection('gallery')} className="hover:text-white transition-colors">Gallery</button></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-2">
                  <Phone size={18} className="mt-1 flex-shrink-0" />
                  <a href={`tel:${siteContent.contact.phone}`} className="hover:text-white transition-colors">
                    {siteContent.contact.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <span>{siteContent.contact.location}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={18} className="mt-1 flex-shrink-0" />
                  <a href={`mailto:${siteContent.contact.email}`} className="hover:text-white transition-colors">
                    {siteContent.contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 text-center text-white/60 text-sm">
            <p>© 2024 Jass Food & Kokani Delicacies. All rights reserved. | Crafted with ❤️ in Mumbai</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={siteContent.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={28} color="white" />
      </a>
    </div>
  );
};

export default LandingPage;
