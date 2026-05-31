import {
  SquaresFourIcon,
  BarbellIcon,
  PuzzlePieceIcon,
  LaptopIcon,
  BrainIcon,
  TrashIcon,
} from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const navItemStyle =
    'flex items-center gap-2.5 px-2 py-1 rounded-lg text-[#9a9a9a] font-medium cursor-pointer duration-100 hover:bg-[#e9e9e9] active:scale-98';
  const activeItem = 'text-[#0088ff] bg-[#e9e9e9]';

  return (
    <div className="h-full w-[18%] border-r border-[#eeeeee] bg-[#f1f1f1] flex flex-col p-3 gap-1">
      <NavLink
        className={({ isActive }) =>
          isActive ? `${navItemStyle} ${activeItem}` : navItemStyle
        }
        to="/"
      >
        <SquaresFourIcon weight="fill" size={24} />
        <p>Dashboard</p>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? `${navItemStyle} ${activeItem}` : navItemStyle
        }
        to="/health"
      >
        <BarbellIcon weight="fill" size={24} />
        <p>Health</p>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? `${navItemStyle} ${activeItem}` : navItemStyle
        }
        to="/mind"
      >
        <BrainIcon weight="fill" size={24} />
        <p>Mind</p>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? `${navItemStyle} ${activeItem}` : navItemStyle
        }
        to="/work"
      >
        <LaptopIcon weight="fill" size={24} />
        <p>Work</p>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? `${navItemStyle} ${activeItem}` : navItemStyle
        }
        to="/other"
      >
        <PuzzlePieceIcon weight="fill" size={24} />
        <p>Other</p>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? `${navItemStyle} ${activeItem}` : navItemStyle
        }
        to="/bin"
      >
        <TrashIcon weight="fill" size={24} />
        <p>Bin</p>
      </NavLink>
    </div>
  );
};

export default NavBar;
