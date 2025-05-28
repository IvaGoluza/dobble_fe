import { Circle, Star, Heart } from 'lucide-react';
import HowToPlayCard from './HowToPlayCard';

const HowToPlaySection = () => (
  <section className="py-12">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">How to Play</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <HowToPlayCard
          icon={<Circle className="h-10 w-10 text-primary" />}
          title="Find Matches"
          description="Each card shares exactly one symbol with any other card. Be the first to spot it!"
        />
        <HowToPlayCard
          icon={<Star className="h-10 w-10 text-primary" />}
          title="Score Points"
          description="Click on the matching symbol to score points and get new cards."
        />
        <HowToPlayCard
          icon={<Heart className="h-10 w-10 text-primary" />}
          title="Win the Game"
          description="Compete through multiple rounds and the player with the most points wins!"
        />
      </div>
    </div>
  </section>
);

export default HowToPlaySection;
