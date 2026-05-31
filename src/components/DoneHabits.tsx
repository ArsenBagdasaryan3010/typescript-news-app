import { useContext } from 'react';
import { HabitsContext } from '../context/HabitsContext';
import DoneTodoCard from './DoneTodoCard';

const DoneHabits = () => {
  const context = useContext(HabitsContext);

  return (
    <div className="px-4 border-l border-[#ededed] pr-3 flex flex-col w-[26%]">
      <h1 className="text-[#313131] text-[24px] font-bold py-6">Done</h1>
      <div className="flex flex-col gap-3 overflow-y-auto pb-15">
        {context?.allHabits.some((h) => h.isDone === true) ? (
          context?.allHabits
            .filter((h) => h.isDone === true)
            .map((todo) => <DoneTodoCard todo={todo} key={todo.id} />)
        ) : (
          <h1 className="text-[#c1c1c1]">There is no done tasks. 🥱</h1>
        )}
      </div>
    </div>
  );
};

export default DoneHabits;
