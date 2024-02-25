import { Button, Heading, Layout } from 'components';
import { Form } from './Form';

export const Auth = () => {
  return (
    <Layout>
      <div className="container mx-auto flex-1 flex justify-center items-center flex-col gap-10">
        <Heading text="Welcome!" className="text-8xl" />
        <Form />
        <Button
          label="SIGN UP"
          onClick={() => {}}
          className="mt-4 bg-softPurple text-customWhite hover:bg-darkPurple"
        />
        <h3 className="mt-[-16px] text-customWhite tracking-widest font-rubik">
          Already have an account?{' '}
          <span className="font-bold cursor-pointer underline">Log in</span>
        </h3>
      </div>
    </Layout>
  );
};
