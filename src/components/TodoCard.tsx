import { useContext } from 'react';
import { HabitsContext } from '../context/HabitsContext';
import { TrashIcon, CheckIcon } from '@phosphor-icons/react';

interface ICategoryValueObj {
  emoji: '💪🏻' | '🧠' | '💻' | '🧩';
  circleColor:
    | 'bg-[#aae7ce]'
    | 'bg-[#d2aae7]'
    | 'bg-[#aabce7]'
    | 'bg-[#e7c0aa]';
}

interface ITodoCard {
  todo: {
    id: string;
    isDone: boolean;
    category: keyof ICategoryValues | string;
    heading: string;
    description?: string;
  };
}

interface ICategoryValues {
  health: ICategoryValueObj;
  mind: ICategoryValueObj;
  work: ICategoryValueObj;
  other: ICategoryValueObj;
}

const TodoCard = ({ todo }: ITodoCard) => {
  const context = useContext(HabitsContext);

  const categoryValues: ICategoryValues = {
    health: { emoji: '💪🏻', circleColor: 'bg-[#aae7ce]' },
    mind: { emoji: '🧠', circleColor: 'bg-[#d2aae7]' },
    work: { emoji: '💻', circleColor: 'bg-[#aabce7]' },
    other: { emoji: '🧩', circleColor: 'bg-[#e7c0aa]' },
  };

  const currentCategory =
    todo.category in categoryValues
      ? (todo.category as keyof ICategoryValues)
      : 'other';

  return (
    <div className="p-3 flex flex-col border bg-[#f7f7f7] border-[#fcfcfc] w-[49%] rounded-[20px] gap-3 shadow-soft-minimal cursor-pointer relative">
      <div
        className={`w-10 h-10 rounded-[50%] ${categoryValues[currentCategory].circleColor} flex justify-center items-center`}
      >
        {categoryValues[currentCategory].emoji}
      </div>
      <h3 className="text-[#313131] text-[18px] font-semibold wrap-break-word">
        {todo.heading}
      </h3>
      <p className="text-[#7b7b7b]">{todo.description}</p>

      <div className="flex gap-1">
        <button
          onClick={() => context?.moveToBin(todo.id)}
          className="w-10 h-10 bg-[#e04b4b] rounded-[10px] text-white font-semibold flex justify-center items-center bottom-0 cursor-pointer active:scale-95 hover:bg-[#efadad] duration-100"
        >
          <TrashIcon size={24} />
        </button>
        <button
          onClick={() => context?.toggleDoneHabit(todo.id)}
          className={`w-10 h-10 ${todo.isDone ? 'text-[#ffffff] bg-[#39743c] border border-[#39743c]' : 'text-[#7c7c7c] border border-[#7c7c7c]'} rounded-[10px] font-semibold flex justify-center items-center bottom-0 cursor-pointer active:scale-95  duration-100`}
        >
          <CheckIcon size={24} />
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
