import { H3 } from 'components';

export const NoGame = () => {
  return (
    <div className="mt-32 self-center flex flex-col justify-center items-center">
      <img src="emptyBox.png" className="w-72 h-72 opacity-60" alt="" />
      <H3
        className="mt-8 text-darkGray"
        text="You have not created a game yet!"
      />
    </div>
  );
};
