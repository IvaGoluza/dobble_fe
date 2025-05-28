import Footer from '@/components/common/Footer.tsx';
import Header from '@/components/common/Header.tsx';
import { FC, ReactNode } from 'react';

type GameLayoutProps = {
  children: ReactNode;
};

const GameLayout: FC<GameLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto flex flex-col items-center justify-center py-8">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default GameLayout;
