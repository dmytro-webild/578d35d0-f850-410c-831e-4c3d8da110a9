import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarDropdown from '@/components/ui/NavbarDropdown';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Industries",
    "href": "#industries"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  {
    "name": "Faq",
    "href": "#faq"
  }
];

  return (
    <StyleProvider buttonVariant="stagger" siteBackground="noise" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarDropdown
      logo="Tafakkur"
      ctaButton={{
        text: "Book Consultation",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBasic
      columns={[
        {
          title: "Tafakkur",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
          ],
        },
        {
          title: "Socials",
          items: [
            {
              label: "LinkedIn",
              href: "#",
            },
            {
              label: "WhatsApp",
              href: "#",
            },
          ],
        },
      ]}
      leftText="© 2024 Tafakkur Agent. Built for Growth."
      rightText="esmaelali699@gmail.com"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
