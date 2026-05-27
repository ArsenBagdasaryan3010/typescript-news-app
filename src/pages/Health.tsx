import { useContext } from 'react';
import { HabitsContext } from '../context/HabitsContext';
import { BarbellIcon } from '@phosphor-icons/react';
import TodoCard from '../components/TodoCard';

const Health = () => {
  const context = useContext(HabitsContext);

  return (
    <div className="h-full w-[56%] flex flex-col px-10">
      <header className="flex gap-4 items-center py-5">
        <BarbellIcon className="text-[30px] text-[#313131]" />
        <h1 className="text-[30px] font-bold text-[#313131]">Health</h1>
      </header>

      <div className="flex flex-wrap gap-2.5 overflow-y-auto pb-10">
        {context?.allHabits.some((h) => h.category === 'health') ? (
          context?.allHabits
            .filter((h) => h.category === 'health')
            .map((todo) => <TodoCard todo={todo} key={todo.id} />)
        ) : (
          <h1 className="w-full text-center mt-20 text-[28px] font-medium text-[#8d8d8d]">
            Start training, eating healthy food 💪🏻
          </h1>
        )}
      </div>
    </div>
  );
};

export default Health;
