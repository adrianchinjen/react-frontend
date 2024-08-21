import { NavLink, Outlet } from 'react-router-dom';

export const RootLayout = () => {
  const navStyle = {
    padding: '10px'
  };

  return (
    <div className="bg-white text-gray-500 dark:bg-slate-800 dark:text-slate-200">
      <header>
        <nav>
          <NavLink to="/" style={navStyle}>
            Home
          </NavLink>
          <NavLink to="about" style={navStyle}>
            About
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
