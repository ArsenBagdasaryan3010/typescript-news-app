import type { ICategoryValues } from '../types/TodoCards.types';

interface IDoneTodoCard {
  todo: {
    category: keyof ICategoryValues | string;
    heading: string;
    description?: string;
  };
}

const DoneTodoCard = ({ todo }: IDoneTodoCard) => {
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
    <div className="p-3 flex flex-col border bg-[#f7f7f7] border-[#fcfcfc] w-full rounded-[20px] gap-3 shadow-soft-minimal cursor-pointer relative duration-200 active:scale-98">
      <div className="flex justify-between">
        <div
          className={`w-10 h-10 rounded-[50%] ${categoryValues[currentCategory].circleColor} flex justify-center items-center`}
        >
          {categoryValues[currentCategory].emoji}
        </div>
      </div>

      <h3 className="text-[#313131] text-[18px] font-semibold wrap-break-word">
        {todo.heading}
      </h3>

      <p className="text-[#7b7b7b] wrap-break-word line-through">
        {todo.description}
      </p>

      <p className="text-[#81c370] text-[14px] font-bold line-through">DONE!</p>
    </div>
  );
};

export default DoneTodoCard;
