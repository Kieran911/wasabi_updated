'use client';
import { useState } from 'react';
import GeneralHeader from '@/app/Components/GeneralHeader';
import Footer from '@/app/Home/components/Footer';
import { AboutAndBelief } from './components/about-belief-combo';
import { DinnerTable } from './components/dinnerTable-combo';
import { FeastInStyle } from './components/feast-in-style-combo';
import { ImagesSlider } from './components/image-slider-combo';
import { Timeline } from './components/timeline-combo';

const Page = () => {
  const [canShow, setCanShow] = useState(false);

  return (
    <div className="w-full overflow-x-hidden lg:overflow-x-visible">
      <GeneralHeader canShow={canShow} />
      <AboutAndBelief setCanShow={setCanShow} />
      {/* <DinnerTable /> */}
      <Timeline />

      <ImagesSlider />
      <FeastInStyle />
      <Footer />
    </div>
  );
};

export default Page;
