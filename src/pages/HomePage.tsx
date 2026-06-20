import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesDetailedSteps from '@/components/sections/features/FeaturesDetailedSteps';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroSplitMediaGrid from '@/components/sections/hero/HeroSplitMediaGrid';
import TestimonialColumnMarqueeCards from '@/components/sections/testimonial/TestimonialColumnMarqueeCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitMediaGrid
      tag="Construction Growth Agency"
      title="Digital Growth for Construction Companies Powered by AI"
      description="Tafakkur Website Builder Agent transforms your construction business with custom websites, SEO, and AI automation to generate more high-value leads and increase revenue."
      primaryButton={{
        text: "Book Consultation",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Our Services",
        href: "#services",
      }}
      items={[
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FIKUSP6IUF6tBtzEvQnPfoz1vV/uploaded-1781757562385-mkkvdd39.png",
        },
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FIKUSP6IUF6tBtzEvQnPfoz1vV/uploaded-1781757562386-ef59o4da.png",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutMediaOverlay
      tag="About Tafakkur"
      title="Meet Esmael Ali"
      description="With a BS in Computer Science and deep expertise in systems analysis and IT operations, Esmael Ali bridges the gap between technical complexity and simple business growth."
      imageSrc="https://storage.googleapis.com/webild/users/user_3FIKUSP6IUF6tBtzEvQnPfoz1vV/uploaded-1781757562381-v9v4f3wy.png"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesDetailedSteps
      tag="Our Expertise"
      title="Full-Stack Digital Growth"
      description="We don't just build websites; we create engines for your business growth."
      steps={[
        {
          tag: "Development",
          title: "Web Design",
          subtitle: "Modern, fast, mobile-ready",
          description: "High-converting websites built to impress.",
          imageSrc: "http://img.b2bpic.net/free-photo/content-marketing-social-media-advertising-commercial-branding-concept_53876-15878.jpg",
        },
        {
          tag: "Visibility",
          title: "SEO Optimization",
          subtitle: "Rank #1 on Google",
          description: "Capture local search intent effortlessly.",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-technology-background-concept_1194-617185.jpg",
        },
        {
          tag: "Automation",
          title: "AI Integration",
          subtitle: "24/7 Virtual Assistants",
          description: "AI chatbots that qualify and book leads.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-entrepreneur-with-corporate-job-looking-camera-business-office-portrait-young-man-preparing-work-planning-development-industry-with-technology-computer_482257-29387.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="industries" data-section="industries">
    <SectionErrorBoundary name="industries">
          <FeaturesRevealCardsBento
      tag="Who We Serve"
      title="Partnering with Local Heroes"
      description="Tailored strategies for service-based businesses."
      items={[
        {
          title: "Restaurants",
          description: "Online ordering & reservation systems.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/business-evaluation-information-growth-concept_53876-125573.jpg",
        },
        {
          title: "Contractors",
          description: "Lead generation funnels for jobs.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-biorobots-concept_23-2149524399.jpg",
        },
        {
          title: "Medical Clinics",
          description: "Booking automation & SEO.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/startup-worker-uses-laptop-open-space-reviewing-project-data-documents-workstation-executive-assistant-working-marketing-strategy-business-development-ai-developer_482257-65810.jpg",
        },
        {
          title: "Auto Repair",
          description: "Local search dominance.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/army-soldier-reviews-targets-satellite-world-map-ensure-global-protection_482257-91236.jpg",
        },
        {
          title: "Professional Services",
          description: "High-ticket sales funnels.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/arrow-with-bright-neon-colors_23-2151204924.jpg",
        },
        {
          title: "Home Maintenance",
          description: "Service scheduling workflows.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/workers-it-company-working-computer_1303-19431.jpg",
        },
        {
          title: "Dental Offices",
          description: "Patient acquisition funnels.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-using-transparent-tablet-couch-innovative-technology_53876-97924.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialColumnMarqueeCards
      tag="Client Success"
      title="Driving Real Results"
      description="Don't take our word for it."
      testimonials={[
        {
          name: "Mark R.",
          role: "Restaurant Owner",
          quote: "Tafakkur doubled our monthly reservations.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-flowing-particles-network-communications-design_1048-15848.jpg",
        },
        {
          name: "Sarah J.",
          role: "Clinic Director",
          quote: "The AI chatbot saved my staff hours daily.",
          imageSrc: "http://img.b2bpic.net/free-vector/data-concept-technology-background_23-2148293185.jpg",
        },
        {
          name: "Mike D.",
          role: "Plumber",
          quote: "My new site ranks for all our keywords.",
          imageSrc: "http://img.b2bpic.net/free-photo/rear-view-polygraph-examiner-works-office-with-his-lie-detector-s-equipment_146671-17277.jpg",
        },
        {
          name: "Emily P.",
          role: "Dental CEO",
          quote: "Increased our new patient leads by 40%.",
          imageSrc: "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169842.jpg",
        },
        {
          name: "Dave L.",
          role: "Auto Shop Owner",
          quote: "The most professional agency I've used.",
          imageSrc: "http://img.b2bpic.net/free-vector/music-equalizer-technology-blue-background-with-digital-sound-wave_53876-119609.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSplitMedia
      tag="Common Questions"
      title="Need More Clarity?"
      description="Here is what our clients ask most."
      items={[
        {
          question: "How long for a new site?",
          answer: "Usually 2-4 weeks depending on scope.",
        },
        {
          question: "Do you offer SEO?",
          answer: "Yes, local SEO is baked into every build.",
        },
        {
          question: "How does AI help?",
          answer: "It handles bookings and answers 24/7.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/business-team-talking-about-statistics_53876-94908.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Get Started"
      text="Ready to scale your business? Let's talk strategy."
      primaryButton={{
        text: "Contact Esmael Now",
        href: "mailto:esmaelali699@gmail.com",
      }}
      secondaryButton={{
        text: "View Case Studies",
        href: "#",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
