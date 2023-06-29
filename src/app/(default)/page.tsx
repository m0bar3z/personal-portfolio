import { type FC } from 'react';
import Hero from '@/components/Hero.component';
import Works from '@/components/SelectedWorks/SelectedWorks.component';

const Home: FC = () => {
  return (
    <>
      <Hero />
      <Works />
    </>
  );
};

export default Home;
