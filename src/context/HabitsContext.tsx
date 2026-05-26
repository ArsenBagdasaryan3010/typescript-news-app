import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import { createContext, useState } from 'react';
import type { PropsWithChildren } from 'react';
import type { IHabit, IHabitContextValue } from '../types/habit.types';

const HabitsContext = createContext<IHabitContextValue | null>(null);

const HabitsProvider = ({ children }: PropsWithChildren) => {
  const [allHabits, setAllHabits] = useState<IHabit[]>([]);
  const [bin, setBin] = useState<IHabit[]>([]);

  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  const addHabit = (
    category: string,
    heading: string,
    description?: string,
  ): void => {
    const newHabit: IHabit = {
      id: uuidv4(),
      category: category,
      heading: heading,
      description: description,
      startDate: dayjs().toISOString(),
      isDone: false,
    };
    setAllHabits((prevHabits) => [newHabit, ...prevHabits]);
  };

  const toggleDoneHabit = (habitId: string): void => {
    setAllHabits(
      allHabits.map((habit) =>
        habit.id === habitId
          ? { ...habit, isDone: !habit.isDone }
          : { ...habit },
      ),
    );
  };

  const moveToBin = (habitId: string): void => {
    const removedHabit = allHabits.find((h) => h.id === habitId);
    if (!removedHabit) return;

    setAllHabits((prev) => prev.filter((h) => h.id !== habitId));
    setBin((prev) => [removedHabit, ...prev]);
  };

  const value: IHabitContextValue = {
    allHabits,
    setAllHabits,
    bin,
    setBin,
    addHabit,
    toggleDoneHabit,
    moveToBin,
    isFormOpen,
    setIsFormOpen,
  };

  return (
    <HabitsContext.Provider value={value}>{children}</HabitsContext.Provider>
  );
};

export { HabitsContext, HabitsProvider };
