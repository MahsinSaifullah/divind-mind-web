export const Form = () => {
  return (
    <form className="w-full flex justify-center items-center flex-col mt-8 gap-6">
      <input
        type="text"
        className="w-1/4 min-w-[280px] drop-shadow-[0_2px_1.2px_rgba(0,0,0,0.3)] 
        py-3 px-4 rounded-3xl shadow font-rubik text-darkPurple focus:outline-none focus:border-darkPurple focus:border-2 placeholder-softPurple placeholder-opacity-75"
        placeholder="Username"
      />
      <input
        type="password"
        className="w-1/4 min-w-[280px] drop-shadow-[0_2px_1.2px_rgba(0,0,0,0.3)] 
        py-3 px-4 rounded-3xl shadow font-rubik text-darkPurple focus:outline-none focus:border-darkPurple focus:border-2 placeholder-softPurple placeholder-opacity-75"
        placeholder="Password"
      />
    </form>
  );
};
