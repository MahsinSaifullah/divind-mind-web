import { BackNavButton, H2, HomeLayout } from 'components';
import { Form } from './Form';

export const AddQuiz = () => {
  return (
    <HomeLayout navIcons={[BackNavButton({ className: 'text-customWhite' })]}>
      <div className="container mx-auto flex items-center mt-20 flex-col ">
        <H2 text="Add a new Quiz" className="text-xl text-brightPink" />
        <img src="choose.png" className="h-24 w-24 mt-12" alt="create game" />
        <Form />
      </div>
    </HomeLayout>
  );
};
