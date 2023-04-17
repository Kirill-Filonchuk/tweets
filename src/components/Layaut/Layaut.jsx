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
          display: "flex",
          backgroundColor: "goldenrod",
          height: 70,
          padding: 20,
        }}
      >
        <ul
          style={{
            display: "flex",
            margin: "0 auto",
            alignItems: "center",
            gap: 20,
          }}
        >
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
          padding: 15,
          backgroundColor: "goldenrod",
          height: 70,
          textAlign: "center",
        }}
      >
        footer of page
      </footer>
    </div>
  );
};
