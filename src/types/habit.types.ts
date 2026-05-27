export interface IHabit {
  id: string;
  category: string;
  heading: string;
  description?: string;
  startDate: string;
  isDone: boolean;
}

export interface IHabitContextValue {
  allHabits: IHabit[];
  setAllHabits: (newHabits: IHabit[]) => void;
  bin: IHabit[];
  setBin: (newBinHabits: IHabit[]) => void;
  addHabit: (category: string, heading: string, description: string) => void;
  toggleDoneHabit: (habidId: string) => void;
  moveToBin: (habidId: string) => void;
  permanentlyRemoveHabit: (habitId: string) => void;
  returnHabit: (habitId: string) => void;
  isFormOpen: boolean;
  setIsFormOpen: (value: boolean) => void;
}
