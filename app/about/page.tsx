'use client';
import { useState } from 'react';
import GeneralHeader from '../Components/GeneralHeader';
import Footer from '../Home/components/Footer';
import { AboutAndBelief } from './components/about-belief';
import { DinnerTable } from './components/dinnerTable';
import { FeastInStyle } from './components/feast-in-style';
import { ImagesSlider } from './components/image-slider';
import { Timeline } from './components/timeline';

const Page = () => {
  const [canShow, setCanShow] = useState(false);

  return (
    <div className="overflow-x-hidden w-full">
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
