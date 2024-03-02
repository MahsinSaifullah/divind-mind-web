import { BackNavButton, Heading, LandingLayout } from 'components';
import { Form } from './Form';

const AUTH_TYPE = 'login';

export const Auth = () => {
  const authType: string = AUTH_TYPE;

  return (
    <LandingLayout navIcons={[BackNavButton({})]}>
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
