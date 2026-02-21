/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Navbar,
  Hero,
  TrustStats,
  ProcessSteps,
  WhyChooseUs,
  Testimonials,
  Projects,
  Services,
  ServiceAreas,
  CTA,
  Footer,
} from "./components";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-olive focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
      >
        Zum Hauptinhalt springen
      </a>

      <Navbar />
      <Hero />
      <TrustStats />
      <ProcessSteps />
      <WhyChooseUs />
      <Testimonials />
      <Projects />
      <Services />
      <ServiceAreas />
      <CTA />
      <Footer />
    </div>
  );
}
