import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import DoneHabits from '../components/DoneHabits';
const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <DoneHabits />
    </>
  );
};

export default MainLayout;
