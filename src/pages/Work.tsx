import { LaptopIcon } from '@phosphor-icons/react';
import Category from '../components/Category';

const Work = () => {
  return (
    <Category
      pageParams={{
        name: 'Work',
        icon: LaptopIcon,
        describtion: 'Work on your projects',
        thisCategory: 'work',
      }}
    />
  );
};

export default Work;
