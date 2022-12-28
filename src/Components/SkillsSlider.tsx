const Skills = () => {
  return (
    <div className="h-7 my-10 overflow-hidden w-full justify-center flex items-center">
      <b>
        System
        <span className="text-white">
          .<span className="dark:text-red-400">out</span>.
        </span>
        <span className="dark:text-blue-400">println</span>("
      </b>
      <div className="animate-move-vertical translate-y-[41%] flex text-center flex-col">
        <b className="greeting mb-2 dark:text-blue-500">React</b>
        <b className="greeting mb-2 dark:text-blue-400">Typescript</b>
        <b className="greeting mb-2 dark:text-yellow-400">Javascript</b>
        <b className="greeting mb-2 dark:text-gray-400">Scss/Css</b>
      </div>
      <b className="closure">");</b>
    </div>
  );
};

export default Skills;
