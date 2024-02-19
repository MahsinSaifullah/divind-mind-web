import { HeroImage } from 'assets';
import { Layout } from 'components';
import { Details } from './Details';

export const Landing = () => {
  return (
    <Layout>
      <div className='container mx-auto flex-1 grid grid-cols-2 justify-center items-center gap-2'>
        <div className='flex justify-center'>
          <HeroImage className='w-[750px] h-[750px]' />
        </div>
        <Details />
      </div>
    </Layout>
  );
};
