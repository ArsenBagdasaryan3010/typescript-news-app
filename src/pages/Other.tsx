import { PuzzlePieceIcon } from '@phosphor-icons/react';
import Category from '../components/Category';

const Other = () => {
  return (
    <Category
      pageParams={{
        name: 'Other',
        icon: PuzzlePieceIcon,
        description: 'Other activities 🧩',
        thisCategory: 'other',
      }}
    />
  );
};

export default Other;
