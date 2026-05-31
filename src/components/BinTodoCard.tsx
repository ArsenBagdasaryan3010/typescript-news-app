import { useContext } from 'react';
import { HabitsContext } from '../context/HabitsContext';
import { TrashIcon, ArrowsClockwiseIcon } from '@phosphor-icons/react';
import type { ICategoryValues } from '../types/TodoCards.types';

interface IBinTodoCard {
  todo: {
    id: string;
    category: keyof ICategoryValues | string;
    heading: string;
    description?: string;
  };
}

const BinTodoCard = ({ todo }: IBinTodoCard) => {
  const context = useContext(HabitsContext);

  const categoryValues: ICategoryValues = {
    health: { emoji: '💪🏻', circleColor: 'bg-[#BF6969]' },
    mind: { emoji: '🧠', circleColor: 'bg-[#BB69BF]' },
    work: { emoji: '💻', circleColor: 'bg-[#7585B8]' },
    other: { emoji: '🧩', circleColor: 'bg-[#69BFA5]' },
  };

  const currentCategory =
    todo.category in categoryValues
      ? (todo.category as keyof ICategoryValues)
      : 'other';

  return (
    <div className="p-3 flex flex-col border bg-[#f7f7f7] border-[#fcfcfc] w-full rounded-[20px] gap-3 shadow-soft-minimal cursor-pointer relative duration-200 active:scale-98">
      <div className="flex justify-between">
        <div
          className={`w-10 h-10 rounded-[50%] ${categoryValues[currentCategory].circleColor} flex justify-center items-center text-[20px]`}
        >
          {categoryValues[currentCategory].emoji}
        </div>

        <div className="flex gap-1 items-center">
          <button
            onClick={() => context?.returnHabit(todo.id)}
            className="w-8 h-8 text-[#0088ff] rounded-[50%] font-semibold flex justify-center items-center bottom-0 cursor-pointer active:scale-90  duration-100"
          >
            <ArrowsClockwiseIcon size={20} />
          </button>

          <button
            onClick={() => context?.permanentlyRemoveHabit(todo.id)}
            className="w-10 h-10 rounded-[10px] text-[#b0b0b0] font-semibold flex justify-center items-center bottom-0 cursor-pointer active:scale-90 hover:text-[#d76f6f] duration-100"
          >
            <TrashIcon size={24} />
          </button>
        </div>
      </div>

      <h3 className="text-[#313131] text-[18px] font-semibold wrap-break-word">
        {todo.heading}
      </h3>

      <p className="text-[#7b7b7b] wrap-break-word">{todo.description}</p>
    </div>
  );
};

export default BinTodoCard;
