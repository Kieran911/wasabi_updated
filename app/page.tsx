import Image from 'next/image';
import Menu from './integratedVersions/Home/components/Menu';
import HomeRecipes from './integratedVersions/Home/components/Recipes';
import OurStory from './integratedVersions/Home/components/OurStory';
import Footer from './integratedVersions/Home/components/Footer';
import OurExperince from './integratedVersions/Home/components/OurExperince';
import Header from './integratedVersions/Home/components/Header';

export default function Home() {
  return (
    <div className="w-full overflow-clip">
      {/* <div className="h-[100vh]"></div> */}
      <Header />
      <div className="bg-black h-[2rem]"></div>
      <Menu />
      <HomeRecipes />
      <OurStory />
      <OurExperince />
      {/* <div className="h-[100vh]"></div> */}
      <Footer />
    </div>
  );
}
