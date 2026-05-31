import { PlusIcon } from '@phosphor-icons/react';
import { useContext } from 'react';
import { HabitsContext } from '../context/HabitsContext';
import dayjs from 'dayjs';
import TodoForm from '../components/TodoForm';
import TodoCard from '../components/TodoCard';

const Dashboard = () => {
  const context = useContext(HabitsContext);
  return (
    <div className="h-full w-[56%] flex flex-col px-10">
      <header className="flex justify-between items-center py-5">
        <h1 className="text-[30px] font-bold text-[#313131]">
          {dayjs().format('dddd, DD MMM')}
        </h1>
        <button
          onClick={() => context?.setIsFormOpen(!context.isFormOpen)}
          className={`w-10 h-10 flex justify-center items-center rounded-[50%]  cursor-pointer ${context?.isFormOpen ? 'rotate-45 bg-transparent text-[#313131] scale-[1.4]' : 'rotate-0 bg-[#0088ff] text-white'} active:bg-[#5cb3ff] duration-100`}
        >
          <PlusIcon size={24} />
        </button>
      </header>

      <div>{context?.isFormOpen && <TodoForm />}</div>

      <div className="flex flex-wrap gap-2.5 overflow-y-auto pb-10">
        {context?.allHabits.length ? (
          context?.allHabits.map((todo) => (
            <TodoCard todo={todo} key={todo.id} />
          ))
        ) : (
          <h1 className="w-full text-center mt-20 text-[28px] font-medium text-[#8d8d8d]">
            Add a task to start working 🔥
          </h1>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
