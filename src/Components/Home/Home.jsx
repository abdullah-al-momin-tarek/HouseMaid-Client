import Theme from "../ThemeControl/Theme";

const Home = () => {
  return (
    <div>
      <Theme />
      <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
        <h1 className="text-2xl font-bold">Hello, World!</h1>
        <p>This is a Tailwind CSS example with dark mode support.</p>
      </div>
    </div>
  );
};

export default Home;
