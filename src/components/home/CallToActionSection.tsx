import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToActionSection = () => (
  <section className="py-16 bg-muted/30 rounded-lg my-12">
    <div className="max-w-3xl mx-auto text-center px-4">
      <h2 className="text-3xl font-bold mb-4">Ready to Play?</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Join the fun and challenge your friends to a game of Dobble!
      </p>
      <Button asChild size="lg">
        <Link to="/gameLobby">Start Playing Now</Link>
      </Button>
    </div>
  </section>
);

export default CallToActionSection;
