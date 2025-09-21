'use client';
import { useState } from 'react';
import GeneralHeader from '../GeneralHeader';
import Footer from '@/app/Home/components/Footer';
import { AboutAndBelief } from './components/about-belief';
import { FeastInStyle } from './components/feast-in-style';
import { ImagesSlider } from './components/image-slider';
import { Timeline } from './components/timeline';
import { AboutAndBeliefMobile } from './components/about-belief-mobile-only';
import { OurMenu } from '../../menu/ourMenu/components/ourMenu';

const Page = () => {
  const [canShow, setCanShow] = useState(false);

  return (
    <div className="w-full overflow-x-hidden lg:overflow-x-visible">
      <GeneralHeader canShow={canShow} />
      <AboutAndBelief setCanShow={setCanShow} />
      <AboutAndBeliefMobile setCanShow={setCanShow} />
      <Timeline />

      <ImagesSlider />
      <FeastInStyle />
      <Footer />
    </div>
  );
};

export default Page;
