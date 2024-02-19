import { Layout } from 'components';

export const Landing = () => {
  return (
    <Layout>
      <div className="container mx-auto grid grid-cols-2 items-center">
        <div>
          <img src={'heroLanding.svg'} alt="" />
        </div>
        <div>hello</div>
      </div>
    </Layout>
  );
};
