import CallToActionSection from '@/components/home/CallToActionSection';
import HeroSection from '@/components/home/HeroSection';
import HowToPlaySection from '@/components/home/HowToPlaySection';
import Footer from '@/components/common/Footer.tsx';

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <main className="flex-1">
      <HeroSection />
      <HowToPlaySection />
      <CallToActionSection />
    </main>
    <Footer />
  </div>
);

export default Index;
