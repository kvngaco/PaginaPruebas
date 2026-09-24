import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WorkflowShowcase } from "@/components/sections/workflow-showcase";
import { ProcessSteps } from "@/components/sections/process-steps";
import { Testimonials } from "@/components/sections/testimonials";
import { Guarantee } from "@/components/sections/guarantee";
import { PricingTiers } from "@/components/sections/pricing-tiers";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { ContactForm } from "@/components/sections/contact-form";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WorkflowShowcase />
      <ProcessSteps />
      <Testimonials />
      <Guarantee />
      <PricingTiers />
      <Faq />
      <FinalCta />
      <ContactForm />
    </>
  );
}
