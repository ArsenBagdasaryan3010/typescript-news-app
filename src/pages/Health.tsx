import { BarbellIcon } from '@phosphor-icons/react';
import Category from '../components/Category';

const Health = () => {
  return (
    <Category
      pageParams={{
        name: 'Health',
        icon: BarbellIcon,
        describtion: 'Start health life. Train, Sleep, Eat 💪🏻',
        thisCategory: 'health',
      }}
    />
  );
};

export default Health;
