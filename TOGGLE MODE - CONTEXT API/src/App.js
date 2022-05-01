
import { useContext } from 'react';
import './App.css';
import { Cart } from './components/Body/Cart';
import { Nav } from './components/Navbar';
import { Toggle } from './components/Toggle';
import { ToggleContext } from './contexts/toggleContext';

function App() {

  const { theme } = useContext(ToggleContext)

  return (
    <div className={theme? "darkApp" : "App" } >
      <Toggle />
      <Nav />
      <Cart />
    </div>
  );
}

export default App;
