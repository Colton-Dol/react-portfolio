import { Outlet } from 'react-router-dom';
import Nav from './components/Navigation';
import Footer from './components/Footer';


function App() {
  const style = {
    background: '#004346'
  }
  return (
    <div style={style}>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
