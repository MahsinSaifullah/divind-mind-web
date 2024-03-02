import { BackNavButton, H2, HomeLayout } from 'components';
import { Form } from './Form';

export const CreateGame = () => {
  return (
    <HomeLayout navIcons={[BackNavButton({ className: 'text-customWhite' })]}>
      <div className="container mx-auto flex items-center mt-20 flex-col ">
        <H2 text="Create a new Game" className="text-xl text-brightPink" />
        <img src="videoGame.png" className="h-24 w-24 mt-5" alt="create game" />
        <Form />
      </div>
    </HomeLayout>
  );
};
