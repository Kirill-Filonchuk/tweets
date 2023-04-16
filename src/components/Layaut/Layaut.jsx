import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        height: "100%",
      }}
    >
      <header
        style={{
          backgroundColor: "goldenrod",
          height: 70,
        }}
      >
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/tweets">Tweets</NavLink>
          </li>
        </ul>
      </header>
      <main style={{ flex: "1 0 auto" }}>
        <Outlet />
      </main>
      <footer
        style={{
          flex: "0 0 auto",
          backgroundColor: "goldenrod",
          height: 70,
        }}
      >
        footer of page
      </footer>
    </div>
  );
};
