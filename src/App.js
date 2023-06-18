import './App.css';
import NavBar from './components/NavBar';
import Climate from './components/Climate';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    alert('Temperature values are rounded');
  }, [])

  return (
    <div>
      <NavBar />
      <Climate />
    </div>
  );
}

export default App;
