import { useContext } from 'react';
import { HabitsContext } from '../context/HabitsContext';
import {
  BarbellIcon,
  PuzzlePieceIcon,
  BrainIcon,
  LaptopIcon,
} from '@phosphor-icons/react';
import TodoCard from '../components/TodoCard';

interface ICategoryPage {
  pageParams: {
    name: 'Health' | 'Mind' | 'Work' | 'Other';
    icon:
      | typeof BarbellIcon
      | typeof BrainIcon
      | typeof LaptopIcon
      | typeof PuzzlePieceIcon;
    thisCategory: 'health' | 'mind' | 'work' | 'other';
    description: string;
  };
}

const Category = ({ pageParams }: ICategoryPage) => {
  const context = useContext(HabitsContext);

  return (
    <div className="h-full w-[56%] flex flex-col px-10">
      <header className="flex gap-4 items-center py-5">
        <pageParams.icon className="text-[30px] text-[#313131]" />
        <h1 className="text-[30px] font-bold text-[#313131]">
          {pageParams.name}
        </h1>
      </header>

      <div className="flex flex-wrap gap-2.5 overflow-y-auto pb-10">
        {context?.allHabits.some(
          (h) => h.category === pageParams.thisCategory,
        ) ? (
          context?.allHabits
            .filter((h) => h.category === pageParams.thisCategory)
            .map((todo) => <TodoCard todo={todo} key={todo.id} />)
        ) : (
          <h1 className="w-full text-center mt-20 text-[28px] font-medium text-[#8d8d8d]">
            {pageParams.description}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Category;
