import React from 'react';
import { CardType } from '@/types/game.ts';

interface DobbleCardProps {
  card: CardType;
  size?: 'sm' | 'md' | 'lg';
  onSymbolClick: (symbolId: string) => void;
}

const DobbleCard: React.FC<DobbleCardProps> = ({
  card,
  size = 'md',
  onSymbolClick,
}) => {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-80 h-80',
  };

  if (card.symbols.length !== 8) return null;

  return (
    <div className="w-full my-2 max-w-[20rem] lg:max-w-[30rem] h-[20rem] lg:h-[30rem]">
      <div
        className="border-8 border-purple-600 bg-white rounded-full shadow-lg w-full h-full flex items-center justify-center p-4 relative"
        style={{ backgroundImage: "url('/assets/background.png')" }}
      >
        <img
          src={`/public/assets/symbols/${card.symbols[0]}.png`}
          alt={card.symbols[0]}
          className="absolute h-9"
          style={{ top: '10%', left: '40%', transform: 'rotate(-10deg)' }}
          onClick={() => onSymbolClick(card.symbols[0])}
        />
        <img
          src={`/public/assets/symbols/${card.symbols[1]}.png`}
          alt={card.symbols[1]}
          className="absolute h-12"
          style={{ top: '30%', left: '15%', transform: 'rotate(-10deg)' }}
          onClick={() => onSymbolClick(card.symbols[1])}
        />
        <img
          src={`/public/assets/symbols/${card.symbols[2]}.png`}
          alt={card.symbols[2]}
          className="absolute h-12"
          style={{ top: '20%', right: '20%', transform: 'rotate(15deg)' }}
          onClick={() => onSymbolClick(card.symbols[2])}
        />
        <img
          src={`/public/assets/symbols/${card.symbols[3]}.png`}
          alt={card.symbols[3]}
          className="absolute h-12"
          style={{ top: '40%', right: '10%', transform: 'rotate(15deg)' }}
          onClick={() => onSymbolClick(card.symbols[3])}
        />
        <img
          src={`/public/assets/symbols/${card.symbols[4]}.png`}
          alt={card.symbols[4]}
          className="absolute h-14"
          style={{ bottom: '25%', left: '20%', transform: 'rotate(0deg)' }}
          onClick={() => onSymbolClick(card.symbols[4])}
        />
        <img
          src={`/public/assets/symbols/${card.symbols[5]}.png`}
          alt={card.symbols[5]}
          className="absolute h-11"
          style={{ bottom: '20%', right: '15%', transform: 'rotate(20deg)' }}
          onClick={() => onSymbolClick(card.symbols[5])}
        />
        <img
          src={`/public/assets/symbols/${card.symbols[6]}.png`}
          alt={card.symbols[6]}
          className="absolute h-14"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          onClick={() => onSymbolClick(card.symbols[6])}
        />
        <img
          src={`/public/assets/symbols/${card.symbols[7]}.png`}
          alt={card.symbols[7]}
          className="absolute h-11"
          style={{
            bottom: '5%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          onClick={() => onSymbolClick(card.symbols[7])}
        />
      </div>
    </div>
  );
};

export default DobbleCard;
