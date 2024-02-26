import { ArrowLeftIcon } from '@heroicons/react/16/solid';

import { Heading, LandingLayout } from 'components';
import { Form } from './Form';

const AUTH_TYPE = 'login';

const BackButton = () => (
  <ArrowLeftIcon
    className="h-6 w-6 text-lightPurple cursor-pointer"
    onClick={() => console.log('hello from back button')}
  />
);

export const Auth = () => {
  const authType: string = AUTH_TYPE;

  return (
    <LandingLayout navIcons={[BackButton()]}>
      <div className="container mx-auto flex-1 flex justify-center items-center flex-col gap-10">
        <Heading
          text={authType === 'register' ? 'Welcome!' : 'Welcome Back!'}
          className="text-7xl"
        />
        <Form authType={authType} />
        <h3 className="mt-[-16px] text-customWhite tracking-widest font-rubik">
          {authType === 'register'
            ? 'Already have an account?'
            : "Don't have an account?"}{' '}
          <span className="font-bold cursor-pointer underline">
            {authType === 'register' ? 'Log in' : 'Sign up'}
          </span>
        </h3>
      </div>
    </LandingLayout>
  );
};
