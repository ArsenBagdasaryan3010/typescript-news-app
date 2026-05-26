import { HabitsContext } from '../context/HabitsContext';
import { useContext, useState } from 'react';
import React from 'react';

const TodoForm = () => {
  const context = useContext(HabitsContext);

  const [heading, setHeading] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('health');

  const setDefaultValues = (): void => {
    setHeading('');
    setDescription('');
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event?.preventDefault();
    context?.addHabit(category, heading, description);
    setDefaultValues();
    context?.setIsFormOpen(false);
  };

  const inputStyle = 'w-full p-2 border border-[#e3e3e3] rounded-xl';

  return (
    <form
      onSubmit={onSubmitHandler}
      className="w-full p-3 flex flex-col gap-2 bg-[#f6f6f6] rounded-2xl shadow-soft-minimal text-[#313131] mb-6"
    >
      <select
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={inputStyle}
      >
        <option value="health">💪🏻 Health</option>
        <option value="mind">🧠 Mind</option>
        <option value="work">💻 Work</option>
        <option value="other">🧩 Other</option>
      </select>

      <input
        type="text"
        placeholder="Enter Heading for your todo"
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
        maxLength={50}
        className={inputStyle}
      />
      <input
        type="text"
        placeholder="Enter Description for your todo"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        maxLength={300}
        className={inputStyle}
      />
      <button
        className="w-full border border-[#0088ff] text-[#0088ff] py-2 rounded-xl duration-100 hover:bg-[#0088ff] hover:text-white cursor-pointer active:scale-98"
        type="submit"
      >
        Done!
      </button>
    </form>
  );
};

export default TodoForm;
