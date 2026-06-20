import ScrollReveal from "@/components/ui/ScrollReveal"
import LoopCarousel from "@/components/ui/LoopCarousel"

export default function TrustStrip() {
  const partners = [
    "Google Partner",
    "Meta Business Partner",
    "HubSpot Certified",
    "Shopify Expert",
    "AWS Partner Network",
    "Webflow Professional"
  ]

  return (
    <section data-webild-section="trust-strip" id="trust-strip" className="relative w-full py-12 bg-background overflow-hidden border-b border-black/5">
      <div className="w-content-width mx-auto">
        <ScrollReveal variant="fade">
          <p className="text-center text-sm font-medium text-accent mb-8 uppercase tracking-wider">
            Industry Recognized & Certified
          </p>
          <div className="relative w-full">
            {/* Fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <LoopCarousel>
              <div className="flex items-center gap-16 md:gap-24 px-8 md:px-12">
                {partners.map((partner, i) => (
                  <div key={i} className="flex items-center justify-center whitespace-nowrap">
                    <span className="text-xl md:text-2xl font-bold text-foreground/40 hover:text-foreground transition-colors duration-300 cursor-default">
                      {partner}
                    </span>
                  </div>
                ))}
              </div>
            </LoopCarousel>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}