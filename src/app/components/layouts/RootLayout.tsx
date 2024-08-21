import { NavLink, Outlet } from 'react-router-dom';

export const RootLayout = () => {
  const navStyle = {
    padding: '10px'
  };

  return (
    <div>
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
