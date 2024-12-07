import { Outlet } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
