import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GameProvider } from './contexts/GameContext';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import { StompProvider } from '@/contexts/StompContext.tsx';
import GameBoard from '@/pages/GameBoard.tsx';
import GameOverScreen from '@/components/game/gameBoard/GameOverScreen.tsx';
import GameInit from '@/pages/GameInit.tsx';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster position="top-center" />
    <StompProvider>
      <GameProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gameLobby" element={<GameInit />} />
            <Route path="/game" element={<GameBoard />} />
            <Route path="/gameOver" element={<GameOverScreen />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </GameProvider>
    </StompProvider>
  </QueryClientProvider>
);

export default App;
