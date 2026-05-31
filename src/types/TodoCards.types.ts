interface ICategoryValueObj {
  emoji: '💪🏻' | '🧠' | '💻' | '🧩';
  circleColor:
    | 'bg-[#BF6969]'
    | 'bg-[#BB69BF]'
    | 'bg-[#7585B8]'
    | 'bg-[#69BFA5]';
}

export interface ICategoryValues {
  health: ICategoryValueObj;
  mind: ICategoryValueObj;
  work: ICategoryValueObj;
  other: ICategoryValueObj;
}
