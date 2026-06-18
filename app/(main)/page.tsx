import HeroSection from '@/components/section/heroSection';
import IdeaSection from '@/components/section/ideaSection';
import Navbar from '@/components/shared/navbar';

import ToolsSection from '@/components/section/toolsSection';
import ComparisonSection from '@/components/section/comparisonSection';
import PortofolioSection from '@/components/section/portofolioSection';
import MyJourneySection from '@/components/section/myjourneySection';
import TrustedVoicesSection from '@/components/section/trustedVoicesSection';
import FAQSection from '@/components/section/faqSection';
import Footer from '@/components/shared/footer';

import React from 'react';


function MainPage() {
  return (
    <div className="bg-white text-slate-900 dark:bg-black dark:text-slate-50 min-h-screen">

      <Navbar />

      <main>
        <HeroSection />
        <IdeaSection />
        <ToolsSection />
        <ComparisonSection />
        <PortofolioSection />
        <MyJourneySection />
        <TrustedVoicesSection />
        <FAQSection />
      </main>

      <Footer />

    </div>
  )
}

export default MainPage

