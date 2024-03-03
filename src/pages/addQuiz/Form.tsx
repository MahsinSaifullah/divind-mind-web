import { Button, Input, Label } from 'components';

export const Form = () => {
  return (
    <form className="w-full flex justify-center items-center flex-col mt-16 gap-4">
      <div className="flex flex-col w-1/2 md:w-1/4 gap-1">
        <Label text="Title:" />
        <Input type="text" name="title" placeholder="Title" />
      </div>
      <div className="flex flex-col w-1/2 md:w-1/4 gap-1">
        <Label text="Time Limit:" />
        <Input type="number" name="timeLimit" placeholder="Time Limit" />
      </div>
      <div className="flex flex-col w-1/2 md:w-1/4 gap-1">
        <Label text="Score per Question:" />
        <Input type="number" name="scorePerQuestion" placeholder="Score" />
      </div>
      <div className="flex w-1/2 md:w-1/4 mt-2">
        <Button
          className="bg-brightPink text-customWhite hover:bg-darkPink min-w-2"
          label="Add Question"
          onClick={() => {}}
        />
      </div>

      <Button
        className="bg-darkPurple text-customWhite hover:bg-softPurple min-w-0 w-1/2 md:w-1/4 mt-5"
        label="Create"
        onClick={() => {}}
      />
    </form>
  );
};
