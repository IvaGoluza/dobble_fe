import { CSSProperties } from 'react';

const HeroImage = () => (
  <div className="md:w-1/2 relative">
    <div className="relative w-64 h-64 mx-auto -translate-x-4">
      <SymbolCircle
        positionClass="top-0 left-0"
        symbols={[
          {
            src: '/public/assets/symbols/daisy.png',
            style: { top: '10%', left: '45%', transform: 'rotate(15deg)' },
          },
          {
            src: '/public/assets/symbols/anchor.png',
            style: { top: '20%', left: '25%', transform: 'rotate(15deg)' },
          },
          {
            src: '/public/assets/symbols/apple.png',
            style: { top: '40%', left: '10%', transform: 'rotate(-10deg)' },
          },
        ]}
      />
      <SymbolCircle
        positionClass="top-10 left-10"
        delay="0.5s"
        symbols={[
          {
            src: '/public/assets/symbols/birdie.png',
            style: { top: '10%', left: '40%', transform: 'rotate(-10deg)' },
          },
          {
            src: '/public/assets/symbols/clock.png',
            style: { top: '30%', left: '15%', transform: 'rotate(-10deg)' },
          },
          {
            src: '/public/assets/symbols/carrot.png',
            style: { top: '20%', right: '20%', transform: 'rotate(15deg)' },
          },
          {
            src: '/public/assets/symbols/bolt.png',
            style: { top: '40%', right: '10%', transform: 'rotate(15deg)' },
          },
          {
            src: '/public/assets/symbols/bomb.png',
            style: { bottom: '25%', left: '20%' },
          },
          {
            src: '/public/assets/symbols/candle.png',
            style: { bottom: '20%', right: '15%', transform: 'rotate(20deg)' },
          },
          {
            src: '/public/assets/symbols/cactus.png',
            style: {
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            },
          },
          {
            src: '/public/assets/symbols/car.png',
            style: {
              bottom: '5%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            },
          },
        ]}
      />
    </div>
  </div>
);

const SymbolCircle = ({
  symbols,
  positionClass,
  delay,
}: {
  symbols: { src: string; style: CSSProperties }[];
  positionClass?: string;
  delay?: string;
}) => (
  <div
    className={`absolute ${positionClass} w-full h-full animate-float`}
    style={{ animationDelay: delay }}
  >
    <div className="bg-white rounded-full shadow-lg w-full h-full flex items-center justify-center p-4">
      {symbols.map((s, i) => (
        <img
          key={i}
          src={s.src}
          alt=""
          className="absolute h-10 w-10"
          style={s.style}
        />
      ))}
    </div>
  </div>
);

export default HeroImage;
