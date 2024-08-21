import '../../App.css';
import { AppRouter } from './router';

export const App = () => {
  return (
    <div className="bg-white text-[#242424] dark:bg-[#242424] dark:text-white">
      <main>
        <AppRouter />
      </main>
    </div>
  );
};

export default App;
