import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import HeroImage from './HeroImage';

const HeroSection = () => (
  <section
    className="lg:px-48 sm:px-24 pt-12 py-24 md:py-24 flex flex-col md:flex-row md:items-center justify-center"
    style={{ backgroundImage: "url('/assets/background.png')" }}
  >
    <div className="md:w-2/3 text-center md:text-left mb-8 md:mb-0">
      <h1 className="text-4xl md:text-6xl mx-auto font-extrabold mb-6 leading-tight">
        {/* Mobile version - no line break */}
        <span className="block sm:hidden">
          Play{' '}
          <img
            src="/public/assets/logo.png"
            alt="Dobble"
            className="h-[1em] align-baseline inline translate-y-1"
          />{' '}
          Online with Friends
          <img
            src="/public/dobbleHand.png"
            alt="Dobble Hand"
            className="h-[1em] align-baseline inline"
          />
        </span>

        {/* Desktop+ version - with line break */}
        <span className="hidden sm:block">
          Play{' '}
          <img
            src="/public/assets/logo.png"
            alt="Dobble"
            className="h-[1em] align-baseline inline translate-y-1"
          />
          <br />
          Online with Friends
          <img
            src="/public/dobbleHand.png"
            alt="Dobble Hand"
            className="h-[1em] align-baseline inline"
          />
        </span>
      </h1>
      <p className="text-lg text-center md:text-start mb-8 mx-auto max-w-md md:mx-0">
        A fast-paced symbol matching game that's easy to learn and fun to
        master. Challenge your friends in real-time!
      </p>
      <div className="flex items-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
        <Button asChild size="lg" className="text-lg">
          <Link to="/gameLobby">Play Now</Link>
        </Button>
      </div>
    </div>
    <HeroImage />
  </section>
);

export default HeroSection;
