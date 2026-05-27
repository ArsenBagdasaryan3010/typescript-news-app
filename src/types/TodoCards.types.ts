interface ICategoryValueObj {
  emoji: '💪🏻' | '🧠' | '💻' | '🧩';
  circleColor:
    | 'bg-[#aae7ce]'
    | 'bg-[#d2aae7]'
    | 'bg-[#aabce7]'
    | 'bg-[#e7c0aa]';
}

export interface ICategoryValues {
  health: ICategoryValueObj;
  mind: ICategoryValueObj;
  work: ICategoryValueObj;
  other: ICategoryValueObj;
}
