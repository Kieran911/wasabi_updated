'use client';
import { useState } from 'react';
import GeneralHeader from '@/app/Components/GeneralHeader';
import Footer from '@/app/Home/components/Footer';
import ImageCarousel from '@/app/gallery/ImageCarousel';
import ReserveForm from './ReserveForm';
import EventInviteSection from './EventInviteHero';

const Page = () => {
  const [canShow, setCanShow] = useState(false);

  return (
    <div className="overflow-hidden">
      <GeneralHeader canShow={canShow} />
      <ReserveForm />
      <EventInviteSection />
      <ImageCarousel show={true} />

      <Footer />
    </div>
  );
};

export default Page;
