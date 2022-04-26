import { Outlet } from 'react-router-dom';
import HeaderCollapsed from './components/HeaderCollapsed';
import HeaderFull from './components/HeaderFull';
import './styles/App.css'

export default function App() {
  return (
    <div className="App">
      <HeaderFull />
      <HeaderCollapsed />
      <Outlet />
    </div>
  );
}

