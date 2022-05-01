import './App.css';
import { Button } from './components/Button';

function App() {
  return (
    <div className="App">
      Styled-Components
      <div>
        <Button backColor="#2490fe" textColor="white" >First Button</Button>
        <Button sima="1px solid" >Default Button</Button>
        <Button sima= "1px dashed">Dashed Button</Button>
      </div>
      <div>
        <Button>Text Button</Button>
        <Button textColor="#2490fe">Link Button</Button>
      </div>
    </div>
  );
}

export default App;
