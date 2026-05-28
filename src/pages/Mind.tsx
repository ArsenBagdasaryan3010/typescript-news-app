import { BrainIcon } from '@phosphor-icons/react';
import Category from '../components/Category';

const Mind = () => {
  return (
    <Category
      pageParams={{
        name: 'Mind',
        icon: BrainIcon,
        describtion: 'Develop your mind 🧠',
        thisCategory: 'mind',
      }}
    />
  );
};

export default Mind;
