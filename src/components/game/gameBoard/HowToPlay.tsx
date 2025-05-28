import React, { FC } from 'react';
import { Card } from '@/components/ui/card.tsx';

const HowToPlay: FC = () => (
  <div className="mt-8 w-full max-w-md">
    <Card className="p-4 bg-muted/30">
      <h3 className="text-lg font-semibold mb-2">How to Play</h3>
      <p className="text-sm text-muted-foreground">
        Find the matching symbol between the center card and your card. Click on
        the matching symbol to score a point!
      </p>
    </Card>
  </div>
);

export default HowToPlay;
