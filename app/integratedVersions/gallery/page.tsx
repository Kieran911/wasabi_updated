import GeneralHeader from '../GeneralHeader';
import Footer from '@/app/Home/components/Footer';
import ImageCarousel from './ImageCarousel';

const Page = () => {
  return (
    <>
      <GeneralHeader />
      <ImageCarousel margin={true} />
      <Footer />
    </>
  );
};

export default Page;
