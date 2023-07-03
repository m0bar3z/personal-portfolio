import { type FC } from 'react';
import Hero from '@/components/Hero.component';
import SelectedWorks from '@/components/SelectedWorks/SelectedWorks.component';
import Contact from '@/components/Contact/Contact.component';

const Home: FC = () => {
  return (
    <>
      <Hero />
      <SelectedWorks />
      <Contact />
    </>
  );
};

export default Home;
