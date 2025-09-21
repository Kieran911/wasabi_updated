'use client';
import { useState } from 'react';
import GeneralHeader from '@/app/Components/GeneralHeader';
import Footer from '@/app/Home/components/Footer';
import { OurMenu } from './ourMenu/components/ourMenu';

const Page = () => {
  const [canShow, setCanShow] = useState(false);

  return (
    <div>
      <OurMenu />
      <Footer />
    </div>
  );
};

export default Page;
