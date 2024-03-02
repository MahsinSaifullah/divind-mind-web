import { Button, Heading, SubHeading } from 'components';

export const Details = () => {
  return (
    <div className="flex justify-center h-[100%] w-[80%] items-center flex-col gap-12 text-center mb-14">
      <Heading text="Welcome to Divine Mind" />
      <SubHeading text="Your all-in-one host for interactive quizes" />
      <div className="flex flex-col gap-4">
        <Button label="Register" onClick={() => {}} />
        <Button label="Log In" onClick={() => {}} />
      </div>
    </div>
  );
};
