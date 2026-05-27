import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import Bin from './pages/Bin';
import Health from './pages/Health';
import Mind from './pages/Mind';
import Work from './pages/Work';
import Other from './pages/Other';
import { HabitsProvider } from './context/HabitsContext';

const App = () => {
  return (
    <HabitsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="*" element={<NotFound />} />
            <Route index element={<Dashboard />} />
            <Route path="/health" element={<Health />} />
            <Route path="/mind" element={<Mind />} />
            <Route path="/work" element={<Work />} />
            <Route path="/other" element={<Other />} />
            <Route path="/bin" element={<Bin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HabitsProvider>
  );
};

export default App;
