// Site Configuration
// LAVERA - Premium Laundry Service

export interface SiteConfig {
  language: string;
  siteTitle: string;
  siteDescription: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "LAVERA - Premium Laundry & Dry Cleaning Services",
  siteDescription: "Experience the finest laundry and dry cleaning services with LAVERA. Professional care for your garments, delivered to your doorstep.",
};

// Hero Section
export interface HeroConfig {
  backgroundText: string;
  heroImage: string;
  heroImageAlt: string;
  overlayText: string;
  brandName: string;
  navLinks: { label: string; href: string }[];
}

export const heroConfig: HeroConfig = {
  backgroundText: "FRESH",
  heroImage: "/hero-laundry.png",
  heroImageAlt: "Professional laundry service representative holding fresh clean clothes",
  overlayText: "Cleaned by LAVERA",
  brandName: "LAVERA",
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why Us", href: "#why-us" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
};

// Intro Grid Section
export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface IntroGridConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  portfolioImages: PortfolioImage[];
  accentText: string;
}

export const introGridConfig: IntroGridConfig = {
  titleLine1: "Premium Care",
  titleLine2: "for Every Garment",
  description: "At LAVERA, we believe your clothes deserve the best treatment. From everyday wear to delicate fabrics, our expert team uses eco-friendly detergents and advanced techniques to ensure your garments look and feel their absolute best.",
  portfolioImages: [
    { src: "/portfolio-1.jpg", alt: "Freshly folded laundry stack" },
    { src: "/portfolio-2.jpg", alt: "Professional dry cleaning process" },
    { src: "/portfolio-3.jpg", alt: "Clean white shirts on hangers" },
    { src: "/portfolio-4.jpg", alt: "Laundry detergent and supplies" },
    { src: "/portfolio-5.jpg", alt: "Ironed clothes ready for delivery" },
  ],
  accentText: "Trusted by 10,000+ Customers - 2024",
};

// Featured Projects Section
export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
}

export interface FeaturedProjectsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  viewAllText: string;
  viewAllHref: string;
  viewProjectText: string;
  projects: Project[];
}

export const featuredProjectsConfig: FeaturedProjectsConfig = {
  subtitle: "Our Services",
  titleRegular: "Premium",
  titleItalic: "Solutions",
  viewAllText: "View All Services",
  viewAllHref: "#services",
  viewProjectText: "Learn More",
  projects: [
    {
      id: 1,
      title: "Wash & Fold",
      category: "Daily Laundry",
      year: "2024",
      image: "/service-wash-fold.jpg",
      description: "Convenient wash and fold service for your everyday laundry needs. We sort, wash, dry, and neatly fold your clothes with care.",
    },
    {
      id: 2,
      title: "Dry Cleaning",
      category: "Professional Care",
      year: "2024",
      image: "/service-dry-cleaning.jpg",
      description: "Expert dry cleaning for delicate fabrics, suits, dresses, and special garments. Stain removal and pressing included.",
    },
    {
      id: 3,
      title: "Ironing Service",
      category: "Finishing Touch",
      year: "2024",
      image: "/service-ironing.jpg",
      description: "Professional ironing to give your clothes that crisp, polished look. Perfect for business attire and formal wear.",
    },
    {
      id: 4,
      title: "Express Delivery",
      category: "Same Day",
      year: "2024",
      image: "/service-express.jpg",
      description: "Need it fast? Our express service ensures your laundry is cleaned and delivered on the same day.",
    },
  ],
};

// Services Section
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
}

export interface ServicesConfig {
  subtitle: string;
  titleLine1: string;
  titleLine2Italic: string;
  description: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  subtitle: "What We Offer",
  titleLine1: "Complete Laundry",
  titleLine2Italic: "Solutions",
  description: "From basic washing to specialized care, we provide a full range of laundry services tailored to your needs. Quality guaranteed with every order.",
  services: [
    {
      iconName: "Sparkles",
      title: "Premium Wash",
      description: "Deep cleaning with eco-friendly detergents that protect fabrics and colors while removing tough stains.",
    },
    {
      iconName: "Diamond",
      title: "Delicate Care",
      description: "Specialized handling for silk, wool, cashmere, and other delicate fabrics requiring gentle treatment.",
    },
    {
      iconName: "Users",
      title: "Family Plans",
      description: "Affordable bulk laundry packages designed for families with regular weekly or bi-weekly schedules.",
    },
    {
      iconName: "Camera",
      title: "Track & Monitor",
      description: "Real-time order tracking and notifications so you always know the status of your laundry.",
    },
  ],
};

// Why Choose Me Section
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface FeatureCard {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface WhyChooseMeConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  statsLabel: string;
  stats: StatItem[];
  featureCards: FeatureCard[];
  wideImage: string;
  wideImageAlt: string;
  wideTitle: string;
  wideDescription: string;
}

export const whyChooseMeConfig: WhyChooseMeConfig = {
  subtitle: "Why Choose Us",
  titleRegular: "The LAVERA",
  titleItalic: "Difference",
  statsLabel: "By The Numbers",
  stats: [
    { value: 50000, suffix: "+", label: "Garments Cleaned" },
    { value: 99, suffix: "%", label: "Customer Satisfaction" },
    { value: 24, suffix: "h", label: "Average Turnaround" },
    { value: 15, suffix: "+", label: "Years Experience" },
  ],
  featureCards: [
    {
      image: "/feature-eco.jpg",
      imageAlt: "Eco-friendly laundry products",
      title: "Eco-Friendly Process",
      description: "We use biodegradable detergents and energy-efficient machines to minimize our environmental impact while delivering exceptional results.",
    },
    {
      image: "/feature-experts.jpg",
      imageAlt: "Professional laundry experts at work",
      title: "Expert Team",
      description: "Our trained professionals understand different fabrics and stains, ensuring the right treatment for every garment.",
    },
  ],
  wideImage: "/feature-wide.jpg",
  wideImageAlt: "Modern laundry facility with state-of-the-art equipment",
  wideTitle: "State-of-the-Art Facility",
  wideDescription: "Our modern facility features the latest laundry technology for superior cleaning performance and fabric care.",
};

// Testimonials Section
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface TestimonialsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  testimonials: Testimonial[];
}

export const testimonialsConfig: TestimonialsConfig = {
  subtitle: "Customer Stories",
  titleRegular: "What Our",
  titleItalic: "Clients Say",
  testimonials: [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Business Executive",
      image: "/testimonial-1.jpg",
      quote: "LAVERA has been a game-changer for my busy schedule. The pickup and delivery service is seamless, and my clothes always come back looking brand new. Highly recommend!",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Restaurant Owner",
      image: "/testimonial-2.jpg",
      quote: "As a business owner, I need reliable service. LAVERA handles all our linen and uniform cleaning with professionalism. Their attention to detail is unmatched.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Working Mom",
      image: "/testimonial-3.jpg",
      quote: "The family plan is perfect for us! Fresh, folded laundry delivered to our door every week. It's given me back so much time to spend with my kids.",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Fashion Designer",
      image: "/testimonial-4.jpg",
      quote: "I trust LAVERA with my most delicate fabrics. They understand fashion and treat every piece with the care it deserves. Simply the best in the city.",
    },
  ],
};

// FAQ Section
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  subtitle: "Common Questions",
  titleRegular: "Frequently",
  titleItalic: "Asked",
  ctaText: "Still have questions?",
  ctaButtonText: "Contact Us",
  ctaHref: "#contact",
  faqs: [
    {
      id: "faq-1",
      question: "How does the pickup and delivery service work?",
      answer: "Simply schedule a pickup through our website or app. We'll collect your laundry at your chosen time, clean it with care, and deliver it back to you fresh and folded within 24-48 hours. You'll receive notifications at every step.",
    },
    {
      id: "faq-2",
      question: "What types of garments do you clean?",
      answer: "We clean everything from everyday wear like t-shirts and jeans to delicate items like silk blouses, wool coats, wedding dresses, and designer pieces. We also handle household items like bedding, curtains, and table linens.",
    },
    {
      id: "faq-3",
      question: "Are your cleaning products eco-friendly?",
      answer: "Yes! We use biodegradable, phosphate-free detergents and eco-friendly dry cleaning solvents. Our facility uses energy-efficient machines and we recycle hangers and packaging materials whenever possible.",
    },
    {
      id: "faq-4",
      question: "How do you handle delicate or special-care items?",
      answer: "Our trained professionals assess each item and use appropriate cleaning methods. Delicate fabrics receive hand-washing or specialized dry cleaning. We also offer repair and alteration services for damaged garments.",
    },
    {
      id: "faq-5",
      question: "What is your pricing structure?",
      answer: "We offer competitive pricing based on weight for wash & fold services, and per-item pricing for dry cleaning. Family plans and business accounts enjoy discounted rates. Check our services page for detailed pricing.",
    },
    {
      id: "faq-6",
      question: "Do you offer same-day or express service?",
      answer: "Yes! Our Express Service guarantees same-day cleaning for orders placed before 10 AM. Additional fees apply, but you'll have your fresh laundry back by evening.",
    },
  ],
};

// Footer Section
export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  logoText: string;
  contactLabel: string;
  email: string;
  locationText: string;
  navigationLabel: string;
  navLinks: FooterLink[];
  socialLabel: string;
  socialLinks: SocialLink[];
  tagline: string;
  copyright: string;
  bottomLinks: FooterLink[];
}

export const footerConfig: FooterConfig = {
  logoText: "LAVERA",
  contactLabel: "Get in Touch",
  email: "hello@lavera.com",
  locationText: "123 Clean Street\nNew York, NY 10001",
  navigationLabel: "Quick Links",
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#careers" },
  ],
  socialLabel: "Follow Us",
  socialLinks: [
    { iconName: "Instagram", href: "https://instagram.com/lavera", label: "Instagram" },
    { iconName: "Twitter", href: "https://twitter.com/lavera", label: "Twitter" },
    { iconName: "Linkedin", href: "https://linkedin.com/company/lavera", label: "LinkedIn" },
    { iconName: "Mail", href: "mailto:hello@lavera.com", label: "Email" },
  ],
  tagline: "Fresh clothes,\nhappy life.",
  copyright: "© 2024 LAVERA. All rights reserved.",
  bottomLinks: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
  ],
};
