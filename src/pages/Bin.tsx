import { useContext } from 'react';
import { HabitsContext } from '../context/HabitsContext';
import { TrashIcon } from '@phosphor-icons/react';
import BinTodoCard from '../components/BinTodoCard';

const Bin = () => {
  const context = useContext(HabitsContext);

  return (
    <div className="h-full w-[56%] flex flex-col px-10">
      <header className="flex justify-between items-center py-5">
        <h1 className="text-[30px] font-bold text-[#313131]">Bin</h1>

        <button
          onClick={() => context?.setBin([])}
          className="w-10 h-10 flex justify-center items-center rounded-[50%]  cursor-pointer border border-[#c14c4c] text-[#c14c4c] active:scale-95 duration-100 hover:bg-[#c14c4c] hover:text-white"
        >
          <TrashIcon size={24} />
        </button>
      </header>

      <div className="flex flex-wrap gap-2.5 overflow-y-auto pb-10">
        {context?.bin.length ? (
          context?.bin.map((todo) => <BinTodoCard todo={todo} />)
        ) : (
          <h1 className="w-full text-center mt-20 text-[28px] font-medium text-[#8d8d8d]">
            The Bin is Empty 🗑️
          </h1>
        )}
      </div>
    </div>
  );
};

export default Bin;
