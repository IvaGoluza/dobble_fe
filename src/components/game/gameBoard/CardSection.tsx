import { FC } from 'react';
import DobbleCard from './DobbleCard.tsx';
import { CardType } from '@/types/game.ts';

interface CardSectionProps {
  title: string;
  card?: CardType;
  onSymbolClick: (symbolId: string) => void;
}

const CardSection: FC<CardSectionProps> = ({ title, card, onSymbolClick }) => (
  <div className="relative flex flex-col items-center w-full md:w-1/2 sm:rounded-lg bg-slate-100">
    <h3 className="absolute top-0 left-2 text-lg font-semibold sm:mb-2">
      {title}
    </h3>
    {card ? (
      <DobbleCard card={card} size="md" onSymbolClick={onSymbolClick} />
    ) : (
      <div className="flex items-center justify-center rounded-full bg-muted w-64 h-64">
        <p>No card available</p>
      </div>
    )}
  </div>
);

export default CardSection;
